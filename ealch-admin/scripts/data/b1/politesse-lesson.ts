// b1.09.l1 « Demander poliment » — the lesson.
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
//   tapTable), build (groupDrill, gated), choose (a drill where the SITUATION
//   picks the form), trap (trapDrill stepped or commonErrors), check (gated
//   control pages before the checkpoint).
//
//    1  L'échelle                   7   six rungs, and what picks one
//    2  Le moteur                   7   pouvoir, vouloir, devoir, avoir, falloir
//    3  Je voudrais, pas je veux    7   the wish against the decision
//    4  La forme de la question     7   est-ce que and the inversion
//    5  Les adoucisseurs            8   par hasard, si possible, juste, un peu
//    6  Je voulais vous demander    7   the imparfait of politeness, from b1.02
//    7  Trois pièges anglophones    7   can I have, the magic word, over-apologising
//    8  Proposer, inviter           7   on pourrait, ça te dirait de, et si on
//    9  Conseiller sans commander   7   tu devrais, il faudrait, à ta place
//   10  Dire oui, dire non          7   accepting, and refusing without offence
//   11  Quatre comptoirs, un courriel 11 the four settings, writing, TASK, quiz
//
//   TOTAL 82 missions, 11 acts. Corpus: 191 authored rows in eleven blocks
//   plus 41 reused seed rows, 232 item ids in all, released act by act
//   through `deckTranche`.
//   Chapter artwork: `politesse-image-prompts.md`, eleven prompts.
//
// ══════════════════════════════════════════════════════════════════════════
//  REFRAME
// ══════════════════════════════════════════════════════════════════════════
//
//   « La politesse ne mesure pas ta gentillesse. Elle mesure le service que
//     tu demandes, et à qui. »
//   EN: Politeness does not measure your niceness. It measures the favour you
//   are asking for, and who you are asking.
//
//   ONE METAPHOR, L'ÉCHELLE (the term « l'échelle »): six rungs, and you stand
//   on the one the situation puts you on. It is NOT a scale of virtue, which
//   is the reframe the corpus rejects: the top rung used on a flatmate is
//   worse than the bottom one, and act 1 is built on that.
//
// ══════════════════════════════════════════════════════════════════════════
//  OWNS / QUOTES / LEAVES
// ══════════════════════════════════════════════════════════════════════════
//
//   OWNS    the request repertoire: the six rungs and what selects one, the
//           wish, the question form, the softeners, the politeness imparfait,
//           the three anglophone traps, proposals, advice, accepting and
//           refusing, and the four settings a learner actually meets.
//   QUOTES  b1.08's reframe (the conditional) and b1.02's (the imparfait),
//           both imported and never retyped. Acts 2, 4 and 9 quote b1.08;
//           act 6 quotes b1.02.
//   LEAVES  to b1.08: the FORMATION of the conditional, used as given and
//           never rebuilt. To b1.10: « si + imparfait »; « si tu as le temps »
//           and « si j'étais toi » appear as fixed softeners only, and the
//           task's grader notes forbid marking a si clause either way. To
//           b1.14 and later: « il faudrait que » plus subjunctive; act 9 keeps
//           « il faudrait » in front of an infinitive and says so on the card.
//           To b1.26: tu against vous as a system; here it is a setting.
//
// ══════════════════════════════════════════════════════════════════════════
//  HOUSE DECISIONS APPLIED (Paul, 2026-09-22)
// ══════════════════════════════════════════════════════════════════════════
//
//   tu in every instruction and coach line; characters use what the situation
//   needs (the bank clerk, the registrar and the hotel desk say « vous »).
//   Every learner surface that explains something carries English (`en`, or a
//   final « EN: »). Every `say` is French, spoken fr-FR. Theme
//   `conseils-et-suggestions`. A2 citations use the English trail label;
//   b1.* ones are French from the plan.
//
// ══════════════════════════════════════════════════════════════════════════
//  OPEN QUESTIONS FOR PAUL
// ══════════════════════════════════════════════════════════════════════════
//
//   1. POSTGRES HOLDS 115 PUBLISHED b1 ROWS in this theme that seed.json does
//      not carry, and about forty of them are on exactly this topic (« il
//      faudrait », « à ta place », « et si on », « on pourrait »). They cannot
//      be named here, because `src()` resolves against seed.json and would
//      throw. They are listed in corpus §F2 as DB_ONLY_TWINS. At import, do we
//      keep the authored twins, keep the published rows, or keep both?
//   2. TWELVE TERMS, one over the shipped 8 to 11 range. The twelfth is
//      « la question » (act 4). Cut it and fold the idea into « l'échelle »?
//   3. THREE tapTables (acts 3, 5 and 9), one per act. The pilot brief allowed
//      one per LESSON; b1.02 to b1.04 shipped 2 and 3. Confirm the looser rule.
//   4. ACT 7 prints « Je suis vraiment désolé de vous déranger encore » as a
//      corpus row and marks it excessive IN CONTEXT rather than wrong. Is a
//      correct sentence taught as a misjudgement acceptable, or should the
//      over-apology live only as free text inside the trap?
//   5. FIVE trapDrills (acts 3, 4, 6, 7, 10), the top of the 3 to 5 band. Too
//      many for one lesson?
//   6. B1 CITATIONS are French from the plan (« la leçon 8 du B1 ») because
//      b1.* units are not in the seed. Switch to the English trail label once
//      they are?
//   7. Titles, labels, card heads and stat keys carry no « EN: » tail, as in
//      b1.01 to b1.08. Tail them too?
//   8. 'coach-fr-FR' is still a proposed voice id (b1.01's question 5).
//   9. The task is WRITTEN (110-150 words, `skill: 'PE'`), because act 11's
//      hardest contrast is writing against speaking. The unit outcome is
//      heavily spoken too. Should b1.09 also carry a spoken task?

import type {
  Lesson, LessonSection, LessonAct, LessonDrill, SectionAudio, ReferenceSheet, SoundGroup, ErrorTrigger, QuizQuestion,
} from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import type { DraftSection, TaskSection } from './_task-section.ts';
import {
  UNIT, LESSON_ID, LEVEL, E, REFRAME, REFRAME_EN, Cap,
  ALL_ROWS, ROWS_BY_ACT, IMPORTED, NOT_DECK_ABLE, NOT_SPEAKABLE, dicteeFor,
  READING_MATINEE, READING_COMPTOIR, READING_BUREAU, READING_CONSEIL, READING_COURRIEL,
  B102_REFRAME, B102_REFRAME_EN, B108_REFRAME, B108_REFRAME_EN,
  IMP_USE_UNIT, COND_UNIT, MODAUX_UNIT, RESTO_UNIT, HOTEL_UNIT,
  IMP_USE_REF, COND_REF, SI_REF, MODAUX_REF, HOTEL_REF,
} from './politesse-corpus.ts';
import { POLITESSE_TERMS } from './politesse-terms.ts';

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
  if (!r) throw new Error(`b1.09: no item ${id}`);
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
 *  ACT 1 — L'ÉCHELLE
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Nobody is rude. The request is simply standing on the wrong rung:
 *  the bottom one, for an hour of somebody else's work. NO SPACED « ? » OR
 *  « ! » IN ANY BUBBLE (house rule 6.4). */
const A1_SCENE: Sec<'scene'> = {
  type: 'scene',
  id: 'a1-scene',
  render: 'screens',
  layer: 'core',
  title: 'Trente pages avant ce soir',
  frSub: 'Un bureau, un mardi matin',
  setting: { place: 'Bureau au douzième étage, rue Saint-Jacques', city: 'Montréal', time: '8 h 50', ambience: 'des écrans qui démarrent, une bouilloire, la neige sur les toits' },
  beats: [
    {
      kind: 'narration',
      text: "Un bureau au douzième étage, rue Saint-Jacques, à Montréal. Mardi, huit heures cinquante. Ton rapport fait trente pages et il part ce soir. Karine, ta collègue, vient d'arriver.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Karine',
      fr: 'Bonjour. Tu commences fort, ce matin.',
      en: 'Morning. You are starting early today.',
      respell: '[bohⁿ-ZHOOR | tü koh-mahⁿss for suh mah-TEHⁿ]',
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'you', speaker: 'Toi',
      fr: 'Karine, tu peux relire mon rapport avant ce soir.',
      en: 'Karine, you can read over my report before tonight.',
      respell: '[kah-REEN | tü puh ruh-leer mohⁿ rah-por ah-vahⁿ suh SWAR]',
      stage: "Le français est juste. Le barreau est celui qu'on prend pour tenir une porte.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'bubble', from: 'them', speaker: 'Karine',
      fr: 'Trente pages. Tu me dis ça maintenant.',
      en: 'Thirty pages. You are telling me this now.',
      respell: '[trahⁿt PAHZH | tü muh dee sah mehⁿt-NAHⁿ]',
      stage: "Elle n'a pas entendu une demande. Elle a entendu une consigne.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'narration',
      text: "Le problème n'est pas la politesse. Tenir une porte prend deux secondes ; relire trente pages prend une heure. Ta phrase ne dit nulle part que tu le sais.",
      size: 'md', audio: AUDIO,
    },
    {
      kind: 'choice',
      prompt: "Tu recommences. Quelle phrase dit à Karine que tu sais ce que tu demandes ?",
      size: 'lg',
      options: [
        { fr: 'Tu peux relire mon rapport avant ce soir.', respell: '[tü puh ruh-leer mohⁿ rah-por ah-vahⁿ suh SWAR]', en: 'Can you read over my report before tonight.', outcome: 'breaks', audio: AUDIO },
        { fr: 'Je me demandais si tu pourrais relire mon rapport avant ce soir.', respell: '[zhuh muh duh-mahⁿ-deh see tü poo-reh ruh-leer mohⁿ rah-por ah-vahⁿ suh SWAR]', en: 'I was wondering whether you could read over my report before tonight.', outcome: 'works', audio: AUDIO },
      ],
      followUp: {
        works: "Karine répond : « Envoie, je regarde après ma réunion. » Tu as monté d'un barreau, et elle a gardé le droit de dire non.",
        breaks: "Karine répond : « Trente pages. » Ta phrase valait deux secondes de travail, et tu en demandes soixante minutes.",
      },
    },
    {
      kind: 'break',
      heading: "La hauteur du barreau",
      body: "Tu peux va bien pour une porte tenue. Pour une heure de travail, la même forme arrive comme une consigne. Tu montes quand le service coûte cher. EN: you climb when the favour costs more.",
      wrong: {
        fr: 'Tu peux relire mon rapport avant ce soir.',
        ipa: '/ty pø ʁə.liʁ mɔ̃ ʁa.pɔʁ a.vɑ̃ sə swaʁ/',
        respell: '[tü puh ruh-leer mohⁿ rah-por ah-vahⁿ suh SWAR]',
        en: 'Can you read over my report before tonight.',
      },
      right: {
        fr: 'Est-ce que tu pourrais relire mon rapport avant ce soir ?',
        ipa: '/ɛs.kə ty pu.ʁɛ ʁə.liʁ mɔ̃ ʁa.pɔʁ a.vɑ̃ sə swaʁ/',
        respell: '[es-kuh tü poo-reh ruh-leer mohⁿ rah-por ah-vahⁿ suh SWAR]',
        en: 'Could you read over my report before tonight?',
      },
      coach: `${REFRAME} EN: ${REFRAME_EN}`,
      size: 'lg', audio: AUDIO,
    },
    {
      kind: 'resolve',
      text: "Karine relit le rapport. Il reste six barreaux à connaître, et surtout la question qui les choisit : combien ça coûte, et à qui tu parles.",
      size: 'md',
    },
  ],
  closing: { text: REFRAME, size: 'md' },
  audio: AUDIO, say: REFRAME, terms: ['echelle', 'service'],
};

const A1_GOALS: Sec<'goals'> = {
  type: 'goals',
  id: 'a1-goals',
  layer: 'core',
  title: 'À la fin de cette leçon',
  goals: [
    { t: 'Choisir la hauteur juste, sans réfléchir dix secondes', s: "Actes 1 et 2 : l'échelle et ses trois verbes" },
    { t: 'Souhaiter, demander, adoucir', s: 'Actes 3 à 6 : le souhait, la question, les petits mots, je voulais' },
    { t: 'Ne plus tomber dans les trois pièges anglais', s: 'Acte 7 : can I have, le mot magique, les excuses en trop' },
    { t: 'Proposer, conseiller, accepter et refuser', s: 'Actes 8 à 11 : et pour finir, la même demande par écrit' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/** MEET, part two: one morning, four rungs, four settings, and the rule
 *  already doing its job before it is named. */
const A1_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a1-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'La matinée de Salima',
  frSub: 'Quatre demandes, quatre hauteurs',
  text: READING_MATINEE,
  glossary: [
    { word: 'un grand service', en: 'a big favour', note: "La phrase qui dit tout haut ce que ta demande coûte. EN: the sentence that names the cost out loud." },
    { word: 'à la bonne hauteur', en: 'at the right height', note: "Ni trop sec, ni trop lourd : au barreau que la situation demande. EN: on the rung the situation calls for." },
    { word: 'plombier', en: 'plumber', note: "Celui qui répare les tuyaux et les robinets." },
  ],
  questions: [
    { q: 'Quelles demandes de Salima tiennent en deux secondes de travail ?', a: "« Tu peux me tenir la porte » et « Passe-moi le numéro du plombier ». Les deux sont au barreau du bas, et les deux sont justes." },
    { q: 'Pourquoi la demande de neuf heures est-elle plus haute ?', a: "Parce que relire trente pages prend une heure. Salima monte à « est-ce que tu pourrais » et ajoute qu'elle sait que c'est un grand service." },
    { q: "Salima connaît-elle l'employée de la banque ?", a: "Non. C'est pour ça qu'elle passe à « pourriez-vous », même si le dossier ne prend que dix minutes." },
    { q: "Pourquoi « Passe-moi le numéro » ne choque personne le soir ?", a: "C'est sa sœur, et le service ne coûte rien. La distance est nulle et le service est minuscule, donc le barreau du bas est le bon." },
  ],
  audio: REC('rec-b1-09-matinee'), say: REFRAME, terms: ['echelle', 'service', 'distance'],
};

/** NAME. The six rungs, grouped four ways, with the citation that says the
 *  conditional itself is not new. */
const A1_BARREAUX: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a1-barreaux',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-echelle',
  title: "Les six barreaux",
  frSub: "Du plus sec au plus lourd",
  hint: 'Quatre cartes. Regarde qui parle et ce que ça coûte.',
  audio: AUDIO, say: REFRAME, terms: ['echelle', 'distance'],
  cards: [
    {
      head: "Le bas de l'échelle", label: "l'impératif",
      fr: 'Donne-moi le dossier. · Tu peux me donner le dossier ?',
      sub: '[donn-mwah luh doh-SYAY] · [tü puh muh doh-nay luh doh-SYAY]',
      body: "Deux barreaux pour un service minuscule, entre gens qui se connaissent. Entre proches, ils ne sont pas secs : ils sont normaux. EN: two rungs for a tiny favour between people who know each other.",
    },
    {
      head: 'Le milieu', label: Cap(COND_REF),
      fr: 'Tu pourrais me donner le dossier ? · Est-ce que tu pourrais me donner le dossier ?',
      sub: '[tü poo-reh muh doh-nay luh doh-SYAY] · [es-kuh tü poo-reh muh doh-nay luh doh-SYAY]',
      body: `« ${B108_REFRAME} » Ici, il dit que le service coûte quelque chose. EN: ${B108_REFRAME_EN}`,
    },
    {
      head: 'Le haut', label: "l'inversion",
      fr: 'Pourrais-tu me donner le dossier ? · Pourriez-vous me donner le dossier ?',
      sub: '[poo-reh-TÜ muh doh-nay luh doh-SYAY] · [poo-ryay-VOO muh doh-nay luh doh-SYAY]',
      body: "L'inversion met le verbe devant le sujet. On l'écrit beaucoup plus qu'on ne la dit, sauf avec vous, où elle est partout. EN: the inversion is written far more often than it is spoken, except with vous.",
    },
    {
      head: 'Le dernier barreau', label: 'rarement le bon',
      fr: 'Auriez-vous la gentillesse de me donner le dossier ?',
      sub: '[oh-ryay-VOO lah zhahⁿ-tee-YESS duh muh doh-nay luh doh-SYAY]',
      body: "Il existe, il s'écrit, et dit à ton colocataire il devient froid ou moqueur. L'échelle a deux mauvais bouts, pas un seul. EN: the ladder has two wrong ends, not one.",
    },
  ],
};

/** BUILD. Sort the same request by what it costs, then by who is listening. */
const A1_ECHELLE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a1-echelle',
  layer: 'core',
  size: 'lg',
  title: 'Deux secondes, ou une heure',
  groups: [
    grp('Ce qui ne coûte rien', [
      it(E(1006), 'le sel est à trente centimètres'),
      it(E(1010), "l'impératif entre proches, avec s'il te plaît"),
      it(E(1011), 'la porte est juste là'),
      it('fr.a1.verbes-essentiels.033', 'deux secondes, et tu es assis à côté'),
    ], chk('Ces quatre demandes tiennent au barreau du bas. Pourquoi ?',
      ['Parce que le service coûte deux secondes.', 'Parce que la personne est un ami.', 'Parce que la phrase est courte.'], 0,
      "La longueur ne compte pas : c'est le coût qui décide. EN: it is the cost that decides, not the length.")),
    grp('Ce qui coûte du temps', [
      it(E(1007), 'trente pages, une heure de travail'),
      it(E(1008), "un rappel, un dossier à rouvrir"),
      it(E(1009), 'dix minutes, et elle ne te connaît pas'),
      it(E(1015), 'la phrase qui nomme la taille du service'),
    ], chk('Que font ces quatre phrases que les précédentes ne font pas ?',
      ['Elles montent d’un barreau au moins.', 'Elles sont plus gentilles.'], 0,
      "Elles montent, parce que le service coûte du temps à quelqu'un. EN: they climb, because the favour costs somebody time.")),
    grp('Ce qui ouvre la porte avant de demander', [
      it(E(1013), 'entre proches'),
      it(E(1014), 'au bureau'),
      it(E(1012), 'la version la plus courte'),
      it(E(1017), 'la sortie de secours, offerte tout de suite'),
    ], chk('À quoi sert « Dis-moi si c’est trop » ?',
      ["À faire durer la phrase.", 'À rendre le refus facile.'], 1,
      "Tu offres le non avant qu'on te le demande. EN: you hand over the refusal before it is needed.")),
  ],
  audio: AUDIO, say: REFRAME, terms: ['service', 'echelle'],
};

/** CHOOSE. Where the wrong rung costs something real. */
const A1_CAS: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a1-cas',
  layer: 'core',
  title: "Là où le mauvais barreau coûte cher",
  cases: [
    { situation: 'Tu écris à quelqu’un que tu n’as jamais vu', fr: 'Pourriez-vous vérifier mon dossier, madame ?', en: 'Could you check my file, madam?' },
    { situation: 'Tu demandes une heure de travail à un collègue', fr: 'Est-ce que tu pourrais relire mon rapport avant ce soir ?', en: 'Could you read over my report before tonight?' },
    { situation: 'Tu demandes le sel à ton colocataire', fr: "Passe-moi le sel, s'il te plaît.", en: 'Pass me the salt, please.' },
    { situation: 'Tu veux qu’on puisse te dire non sans gêne', fr: "Dis-moi si c'est trop, je trouverai quelqu'un d'autre.", en: 'Tell me if it is too much, I will find somebody else.' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['echelle', 'distance'],
};

const A1_CHECK = actCheck('a1-check', 'Le point : acte 1', [
  ctl('La mesure', "Qu'est-ce qui décide de la hauteur de ta phrase ?",
    ['ton caractère', 'la longueur de la phrase', 'le coût du service et la distance'], 2,
    "Deux choses, et ni l'une ni l'autre n'est ta gentillesse. EN: two things, and neither of them is your niceness."),
  ctl('Le haut', "« Auriez-vous la gentillesse de me passer le sel » à ton frère, c'est...",
    ['froid ou moqueur', 'plus poli'], 0,
    "Le barreau du haut sur une personne proche devient une distance voulue. EN: the top rung on somebody close reads as deliberate distance."),
  ctl('Le bas', "« Passe-moi le pain, s'il te plaît » à ta sœur, c'est...",
    ['exactement juste', 'impoli', 'un ordre déguisé'], 0,
    "Service minuscule, distance nulle : le barreau du bas est le bon. EN: tiny favour, no distance, bottom rung."),
], ['echelle', 'service']);

const ACT1: ActDef = {
  act: {
    id: 'act1',
    title: "L'échelle",
    opener: {
      line: "Tenir une porte et relire trente pages, ce n'est pas la même demande : ici tu apprends à mesurer avant de parler. EN: Holding a door and reading thirty pages are not the same request: here you learn to measure before you speak.",
      imageRef: 'lessons/politesse/act01.jpg',
    },
    sections: [],
    milestone: "Tu ne choisis plus ta formule au hasard : tu regardes ce que tu demandes et à qui. EN: You no longer pick your wording at random: you look at what you are asking and of whom.",
    estScreens: 30,
    restPoints: ['a1-lecture'],
  },
  sections: [A1_SCENE, A1_GOALS, A1_LECTURE, A1_BARREAUX, A1_ECHELLE, A1_CAS, A1_CHECK],
  imports: IMPORTED.act1,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 2 — LE MOTEUR
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Five verbs do the work, and they are all already owned. */
const A2_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a2-histoire',
  layer: 'core',
  title: 'Le prêt de la voiture',
  frSub: 'Cinq verbes, une seule conversation',
  setting: "Vendredi, dix-sept heures, au parking du bureau. Yann doit déménager samedi et sa camionnette est en panne.",
  bubbles: [
    { from: 'narrator', fr: 'Yann rattrape Karine devant sa voiture.', en: 'Yann catches Karine by her car.' },
    { from: 'user', fr: 'Karine, je me demandais si tu pourrais me prêter ta voiture samedi.', en: 'Karine, I was wondering whether you could lend me your car on Saturday.', warn: 'pouvoir : la demande' },
    { from: 'coach', fr: "Samedi toute la journée. J'aurais besoin d'aller chez ma mère le matin.", en: "All day Saturday. I would need to go to my mother's in the morning.", warn: 'avoir : ce qui manque' },
    { from: 'user', fr: "Je voudrais juste l'après-midi. Deux heures suffiraient.", en: 'I would just like the afternoon. Two hours would be enough.', warn: 'vouloir : le souhait' },
    { from: 'coach', fr: 'Alors oui. Il faudrait la rendre avant dix-neuf heures.', en: 'Then yes. It would need to be back before seven.', warn: 'falloir : personne n’est visé' },
    { from: 'user', fr: 'Sans problème. Je devrais avoir fini vers dix-sept heures.', en: 'No problem. I should be finished around five.', warn: 'devoir : une estimation' },
    { from: 'coach', fr: 'Tu devrais prendre le petit modèle, il passe mieux dans ta rue.', en: 'You should take the small one, it fits your street better.', warn: 'devoir : le conseil' },
  ],
  closing: { fr: 'Cinq verbes, cinq métiers, et aucun ne demande la même chose.', en: 'Five verbs, five jobs, and no two of them ask for the same thing.' },
  audio: REC('rec-b1-09-moteur'), say: REFRAME, terms: ['moteur', 'service'],
};

/** NAME. One card per verb, plus the one that names nobody. */
const A2_MOTEUR: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a2-moteur',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-moteur',
  title: 'Les cinq verbes du moteur',
  frSub: 'Chacun son métier',
  hint: 'Quatre cartes. Demande-toi ce que chaque verbe demande vraiment.',
  audio: AUDIO, say: REFRAME, terms: ['moteur'],
  cards: [
    {
      head: 'Pouvoir demande', label: 'tu pourrais, vous pourriez',
      fr: 'Tu pourrais me prêter ta voiture samedi ?',
      sub: '[tü poo-reh muh preh-tay tah vwah-tür sam-DEE]',
      body: "Pouvoir demande un service à quelqu'un. Au conditionnel, il laisse le non possible. EN: pouvoir asks somebody for a favour and leaves the refusal available.",
    },
    {
      head: 'Vouloir souhaite', label: 'je voudrais, nous voudrions',
      fr: 'Nous voudrions déplacer le rendez-vous.',
      sub: '[noo voo-dree-yohⁿ day-plah-say luh rahⁿ-day-VOO]',
      body: "Vouloir dit ce que TU veux, sans donner d'ordre à personne. C'est l'acte 3 en entier. EN: vouloir says what you want without giving anybody an instruction.",
    },
    {
      head: 'Devoir conseille', label: 'tu devrais, je devrais',
      fr: 'Tu devrais lui écrire avant vendredi.',
      sub: '[tü duh-vreh lwee ay-kreer ah-vahⁿ vahⁿ-druh-DEE]',
      body: `« ${B108_REFRAME} » Au présent, tu dois est un ordre. Au conditionnel, c'est un avis. EN: ${B108_REFRAME_EN}`,
    },
    {
      head: 'Falloir ne vise personne', label: 'il faudrait',
      fr: 'Il faudrait prévenir la gardienne.',
      sub: '[eel foh-dreh prayv-neer lah gar-DYENN]',
      body: "Personne n'est nommé : c'est la situation qui parle. C'est la forme la plus prudente quand tu connais mal la personne. EN: nobody is named, so it is the safest shape with somebody you hardly know.",
    },
  ],
};

/** NAME, part two: the same five verbs, present against conditional. */
const A2_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a2-exemples',
  layer: 'core',
  title: 'Ce que le conditionnel change',
  frSub: 'Cinq paires',
  examples: [
    ex(E(1026), 'tu peux devient tu pourrais : le prêt redevient discutable'),
    ex(E(1029), 'nous voulons devient nous voudrions : une demande, pas une décision'),
    ex(E(1031), 'tu dois devient tu devrais : un conseil, pas une consigne'),
    ex(E(1032), 'il faut devient il faudrait : la situation parle, pas toi'),
    ex(E(1033), "vous avez devient vous auriez : la question ne suppose rien"),
    ex(E(1034), 'ça vous dérange devient ça vous dérangerait : tu demandes la permission'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['moteur', 'echelle'],
};

/** BUILD. Three groups, one per job. */
const A2_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-construire',
  layer: 'core',
  size: 'lg',
  title: 'Quel verbe fait le travail',
  groups: [
    grp('Demander un service', [
      it(E(1026), 'un vrai service, un samedi entier'),
      it(E(1027), 'au guichet, avec vous'),
      it('fr.a2.hebergement.075', "à l'hôtel, la forme la plus courante"),
      it('fr.a2.expressions-frequentes.072', "la demande d'aide la plus simple"),
    ], chk('Quel verbe porte ces quatre demandes ?',
      ['vouloir', 'pouvoir', 'devoir'], 1,
      "Pouvoir, parce que tu demandes un service à quelqu'un. EN: pouvoir, because you are asking somebody for a favour.")),
    grp('Dire un souhait', [
      it(E(1029), 'ce que nous voulons, sans ordre'),
      it(E(1030), 'au comptoir'),
      it(E(1028), "et l'offre qui vient avec"),
      it('fr.a2.hebergement.130', 'la formule toute faite'),
    ], chk("« Je pourrais passer demain » : qui rend service à qui ?",
      ['tu rends service', 'on te rend service'], 0,
      "Pouvoir peut aussi offrir : c'est toi qui proposes ton temps. EN: pouvoir can offer as well as ask.")),
    grp('Conseiller, ou ne viser personne', [
      it(E(1031), 'tu devrais : tu parles à la personne'),
      it(E(1032), 'il faudrait : personne n’est nommé'),
      it(E(1024), 'la forme seule'),
      it(E(1023), "et l'autre, avec tu"),
    ], chk('Laquelle des deux formes est la plus prudente avec un inconnu ?',
      ['il faudrait', 'tu devrais'], 0,
      "Il faudrait ne vise personne, donc personne ne se sent visé. EN: il faudrait names nobody, so nobody feels aimed at.")),
  ],
  audio: AUDIO, say: REFRAME, terms: ['moteur', 'conseil'],
};

/** CHOOSE. The situation picks the verb, not the form. */
const A2_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a2-choisir',
  layer: 'core',
  size: 'lg',
  title: 'La situation choisit le verbe',
  groups: [
    grp('Tu cherches une chose ou un moment', [
      it(E(1033), 'un stylo, tout de suite'),
      it(E(1025), 'la forme seule'),
      it(E(1012), 'un moment, pas un objet'),
      free('Vous auriez une adresse de garagiste ?', 'Would you have a garage you can recommend?', 'un renseignement'),
    ], chk('Avec quel verbe cherche-t-on une chose ou un moment ?',
      ['pouvoir', 'devoir', 'avoir'], 2,
      "Avoir, parce que tu ne demandes pas un acte : tu demandes si ça existe. EN: avoir, because you are asking whether it exists, not for an action.")),
    grp('Tu demandes la permission de déranger', [
      it(E(1034), 'la fenêtre'),
      it(E(1076), 'la formule seule'),
      free('Ça te dérangerait de baisser un peu la musique ?', 'Would you mind turning the music down a bit?', 'entre voisins'),
      free("Ça vous dérangerait d'attendre cinq minutes ?", 'Would you mind waiting five minutes?', 'au comptoir'),
    ], chk('Que demande vraiment « ça vous dérangerait de » ?',
      ['le service', 'la permission de demander le service'], 1,
      "Tu demandes d'abord si tu as le droit de demander. EN: you first ask whether you may ask at all.")),
    ctl('Et la forme impersonnelle', "« Est-ce que ce serait possible de payer en deux fois » : qui est visé ?",
      ['personne', 'le vendeur'], 0,
      "Ce serait possible ne nomme personne, donc refuser ne coûte rien au vendeur. EN: nobody is named, so refusing costs the seller nothing."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['moteur', 'adoucir'],
};

/** TRAP. Four ways the present survives where it should not. */
const A2_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a2-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre restes de présent',
  errors: [
    {
      wrong: 'Tu dois te reposer ce week-end.',
      right: 'Tu devrais te reposer ce week-end.',
      why: "Normal : en anglais, you should et you must se ressemblent. En français, tu dois donne une obligation, et un ami ne t'en donne pas. EN: tu dois hands out an obligation, which a friend does not do.",
    },
    {
      wrong: 'Il faut prévenir la gardienne.',
      right: 'Il faudrait prévenir la gardienne.',
      why: "« Il faut » est correct ailleurs : sur un panneau, dans un règlement. Dans un conseil entre voisins, il devient une règle imposée. EN: right on a sign, wrong as advice between neighbours.",
    },
    {
      wrong: 'Vous avez un stylo, par hasard ?',
      right: 'Vous auriez un stylo, par hasard ?',
      why: "Vous avez suppose que oui, et rend le non presque impoli. Vous auriez n'a rien supposé du tout. EN: vous avez assumes yes; vous auriez assumes nothing.",
    },
    {
      wrong: 'Ça vous dérange de fermer la fenêtre ?',
      right: 'Ça vous dérangerait de fermer la fenêtre ?',
      why: "Au présent, tu demandes si la personne est déjà dérangée, ce qui sonne comme un reproche. EN: the present asks whether they are already annoyed, which reads as a reproach.",
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['moteur'],
};

const A2_CHECK = actCheck('a2-check', 'Le point : acte 2', [
  ctl('Le métier', 'Tu veux conseiller un ami. Quel verbe prends-tu ?',
    ['devoir', 'pouvoir', 'avoir'], 0,
    "Devoir au conditionnel : tu devrais. EN: devoir in the conditional."),
  ctl('La prudence', "Tu connais à peine la personne. Quelle forme évite de la viser ?",
    ['tu devrais', 'il faudrait', 'tu ferais mieux de'], 1,
    "Il faudrait ne nomme personne. EN: il faudrait names nobody."),
  ctl('La permission', "« Ça vous dérangerait de » demande d'abord...",
    ['le service', 'le droit de demander'], 1,
    "La permission vient avant la demande. EN: permission comes before the request."),
], ['moteur', 'conseil']);

const ACT2: ActDef = {
  act: {
    id: 'act2',
    title: 'Le moteur',
    opener: {
      line: "Cinq verbes portent presque toutes les demandes polies du français : ici tu apprends lequel fait quoi. EN: Five verbs carry nearly every polite request in French: here you learn which one does what.",
      imageRef: 'lessons/politesse/act02.jpg',
    },
    sections: [],
    milestone: "Tu choisis ton verbe avant ta formule : demander, souhaiter, conseiller ou ne viser personne. EN: You pick your verb before your wording: ask, wish, advise, or aim at nobody.",
    estScreens: 32,
    restPoints: ['a2-construire'],
  },
  sections: [A2_HISTOIRE, A2_MOTEUR, A2_EXEMPLES, A2_CONSTRUIRE, A2_CHOISIR, A2_ERREURS, A2_CHECK],
  imports: IMPORTED.act2,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 3 — JE VOUDRAIS, PAS JE VEUX
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The same counter, twice, and the second customer gets told the
 *  bread has just come out of the oven. */
const A3_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a3-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Deux clients, une boulangerie',
  frSub: 'Six personnes dans la file',
  text: READING_COMPTOIR,
  glossary: [
    { word: 'la file', en: 'the queue', note: "La ligne de gens qui attendent leur tour. EN: the line of people waiting." },
    { word: 'un pain complet', en: 'a wholemeal loaf', note: "Du pain fait avec la farine entière." },
    { word: 'prévenu', en: 'warned, told in advance', note: "Elle lui a dit avant qu'il demande. EN: she told him before he asked." },
  ],
  questions: [
    { q: 'Est-ce que la première phrase est grammaticalement fausse ?', a: "Non. « Je veux deux baguettes » est du français correct. Ce n'est pas la grammaire qui change." },
    { q: 'Quelle information le deuxième client reçoit-il, et pas le premier ?', a: "Qu'il ne reste qu'un seul pain complet, et qu'il est sorti du four il y a dix minutes." },
    { q: 'Pourquoi la vendeuse ne dit-elle rien au premier client ?', a: "« Je veux » annonce une décision déjà prise. Il n'y avait rien à discuter, donc elle n'a rien proposé." },
    { q: "Qu'est-ce que « je voudrais » ouvre exactement ?", a: "La place de répondre : la vendeuse peut proposer autre chose, prévenir d'un problème ou corriger la commande." },
  ],
  audio: REC('rec-b1-09-comptoir'), say: REFRAME, terms: ['souhait', 'echelle'],
};

/** NAME. Four cards: the wish, its three shapes, and where je veux is right. */
const A3_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a3-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Le souhait et la décision',
  frSub: 'Quatre cartes',
  hint: 'Regarde ce qui reste à décider après chaque phrase.',
  audio: AUDIO, say: REFRAME, terms: ['souhait', 'moteur'],
  cards: [
    {
      head: 'La décision', label: 'le présent',
      fr: 'Je veux deux baguettes.',
      sub: '[zhuh vuh duh bah-GHET]',
      body: "Rien ne reste à décider. La phrase est correcte, et elle ferme la conversation avant qu'elle commence. EN: correct, and it closes the conversation before it starts.",
    },
    {
      head: 'Le souhait', label: 'je voudrais',
      fr: 'Je voudrais deux baguettes et un pain complet.',
      sub: '[zhuh voo-dreh duh bah-ghet ay uhⁿ pehⁿ kohⁿ-PLEH]',
      body: "La même envie, reculée d'un pas. L'autre peut proposer, prévenir, corriger. C'est la formule du comptoir partout en francophonie. EN: the same wish, one step back, and the counter formula everywhere.",
    },
    {
      head: 'Le souhait plus doux', label: "j'aimerais, je préférerais",
      fr: "J'aimerais réserver une table pour jeudi soir. · Je préférerais venir en fin de journée.",
      sub: '[zheh-muh-reh ray-zer-vay ün tabl poor zhuh-dee SWAR] · [zhuh pray-fay-ruh-reh vuh-neer ahⁿ fehⁿ duh zhoor-NAY]',
      body: "J'aimerais dit le plaisir, je préférerais dit le choix entre deux. Les deux laissent plus de place que je voudrais. EN: j'aimerais names the pleasure, je préférerais names a choice between two.",
    },
    {
      head: 'Là où je veux est juste', label: 'une position',
      fr: 'Je veux ce poste et je le dirai clairement. · Je ne veux pas de sucre, merci.',
      sub: '[zhuh vuh suh post ay zhuh luh dee-ray klehr-MAHⁿ] · [zhuh nuh vuh pah duh sükr mer-SEE]',
      body: "Quand tu annonces une position ou que tu refuses, la décision EST le message. Là, je veux est exactement le bon mot. EN: when you state a position or refuse, the decision is the message.",
    },
  ],
};

/** NAME, part two: six openings and what each one leaves open. */
const A3_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a3-tableau',
  layer: 'core',
  sheetId: 'sheet-echelle',
  title: 'Six ouvertures de comptoir',
  cols: ['Ouverture', 'Laisse répondre ?', 'Où'],
  rows: [
    {
      cells: ['Je veux', 'non', 'une position, un refus'],
      say: 'Je ne veux pas de sucre, merci.',
      detail: { title: 'je veux', body: "Une décision déjà prise. Juste pour annoncer ta position ou refuser, trop sec pour commander. EN: a decision already taken: right for a position, wrong for an order.", say: 'Je veux ce poste et je le dirai clairement.' },
    },
    {
      cells: ['Je voudrais', 'oui', 'partout, comptoir et guichet'],
      say: 'Je voudrais deux baguettes et un pain complet.',
      detail: { title: 'je voudrais', body: "La formule par défaut. Tu peux la dire dix fois par jour sans jamais te tromper de hauteur. EN: the default formula, safe ten times a day.", say: "Je voudrais un reçu, s'il vous plaît." },
    },
    {
      cells: ["J'aimerais", 'oui', 'une envie, un projet'],
      say: "J'aimerais réserver une table pour jeudi soir.",
      detail: { title: "j'aimerais", body: "Un peu plus personnel que je voudrais : tu dis que ça te ferait plaisir. EN: slightly more personal: you say it would please you.", say: "J'aimerais parler à quelqu'un du service technique." },
    },
    {
      cells: ['Je préférerais', 'oui', 'un choix entre deux'],
      say: 'Je préférerais venir en fin de journée.',
      detail: { title: 'je préférerais', body: "Il suppose une autre possibilité déjà sur la table. Sans ce choix, il sonne bizarre. EN: it assumes another option is already on the table.", say: 'Dans la mesure du possible, je préférerais le matin.' },
    },
    {
      cells: ['Je souhaiterais', 'oui', "l'écrit seulement"],
      say: 'Je souhaiterais recevoir une confirmation écrite.',
      detail: { title: 'je souhaiterais', body: "Très écrit. À l'oral dans une boulangerie, il fait sourire. EN: very written; at a bakery counter it raises a smile.", say: 'Je souhaiterais recevoir une confirmation écrite.' },
    },
    {
      cells: ['Je peux avoir', 'oui', 'café, bar, entre jeunes'],
      say: 'Je peux avoir la carte ?',
      detail: { title: 'je peux avoir', body: "Correct et très courant, mais bas sur l'échelle. Au guichet administratif, monte. EN: correct and common, but low on the ladder.", say: 'Je peux avoir la facture, s’il vous plaît ?' },
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['souhait', 'echelle'],
};

/** BUILD. Three groups: what is still open after each sentence. */
const A3_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a3-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui reste à décider',
  groups: [
    grp('Rien ne reste ouvert', [
      it(E(1043), 'une position annoncée'),
      it(E(1044), 'un refus net'),
      it('fr.a2.verbes.341', 'au comptoir de la caisse'),
      it('fr.a1.verbes-du-quotidien.035', 'correct, mais la serveuse ne proposera rien'),
    ], chk('Dans ces quatre phrases, que peut encore proposer la personne en face ?',
      ['rien', 'tout'], 0,
      "La décision est déjà prise, donc il ne reste rien à discuter. EN: the decision is taken, so nothing is left to discuss.")),
    grp('La porte est ouverte', [
      it(E(1046), 'la commande du deuxième client'),
      it(E(1039), 'une réservation'),
      it(E(1047), 'un standard téléphonique'),
      it('fr.a2.hebergement.079', "et l'adoucisseur à la fin"),
    ], chk("Qu'est-ce que « si c'est possible » ajoute à la fin ?",
      ['de la longueur', 'la permission de dire non'], 1,
      "Tu dis toi-même que le non existe. EN: you say out loud that no is available.")),
    grp('Le souhait qui refuse', [
      it(E(1045), 'le regret, puis la raison'),
      it(E(1051), 'je veux bien : une acceptation, pas une envie'),
      it(E(1048), 'nous, au restaurant'),
      it(E(1052), 'la réservation la plus simple'),
    ], chk('« Je voudrais bien, mais... » : est-ce un souhait ou un refus ?',
      ['un souhait', 'un refus', 'les deux à la fois'], 2,
      "Le souhait sert à adoucir le refus qui suit. C'est tout l'acte 10. EN: the wish is there to soften the refusal that follows.")),
  ],
  audio: AUDIO, say: REFRAME, terms: ['souhait', 'refus'],
};

/** EAR. hideLines, so the questions are about what the ear caught. */
const A3_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a3-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Décision ou souhait',
  frSub: 'Huit phrases, une seule écoute',
  lines: [ln(E(1043)), ln(E(1039)), ln(E(1044)), ln(E(1046)), ln(E(1041)), ln(E(1051)), ln(E(1047)), ln(E(1045))],
  questions: [
    { q: 'Première phrase : la personne laisse-t-elle une place à la réponse ?', opts: ['non', 'oui'], correct: 0, why: "« Je veux ce poste » annonce une position. EN: je veux states a position." },
    { q: 'Deuxième phrase : que demande-t-elle ?', opts: ['une table', 'un renseignement', 'un reçu'], correct: 0, why: "« J'aimerais réserver une table pour jeudi soir. » EN: a table for Thursday." },
    { q: 'Troisième phrase : est-ce un refus ?', opts: ['non', 'oui'], correct: 1, why: "« Je ne veux pas de sucre, merci » refuse, et c'est là que je veux est juste. EN: a refusal, where je veux belongs." },
    { q: 'Cinquième phrase : qui choisit entre deux moments ?', opts: ['celui qui parle', 'la personne en face'], correct: 0, why: "« Je préférerais » suppose deux possibilités déjà sur la table. EN: je préférerais assumes two options already offered." },
    { q: 'Sixième phrase : accepte-t-elle ou souhaite-t-elle ?', opts: ['elle souhaite', 'elle accepte'], correct: 1, why: "« Je veux bien » accepte ce qu'on vient de proposer. EN: je veux bien accepts what has just been offered." },
    { q: 'Dernière phrase : la réponse est-elle oui ou non ?', opts: ['non', 'oui'], correct: 0, why: "« Je voudrais bien, mais je travaille ce soir. » Le mais porte tout. EN: the mais carries the whole answer." },
  ],
  audio: REC('rec-b1-09-echelle-ecoute'), say: REFRAME, terms: ['souhait'],
};

/** TRAP, stepped: rule, six cards, the audio, then the gated drill. */
const A3_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a3-piege',
  layer: 'core',
  swipe: true,
  title: 'Le piège du je veux',
  rule: {
    title: 'Une décision ne se commande pas',
    body: "Je veux est juste quand la décision EST le message : une position, ou un refus. Partout ailleurs, il ferme la porte avant que l'autre ait pu l'ouvrir. EN: elsewhere it shuts the door first.",
  },
  cards: [
    { promptLabel: 'au comptoir', promptSound: 'Je veux un renseignement.', fr: 'Je voudrais un renseignement, s’il vous plaît.', ipa: '/ʒə vu.dʁɛ œ̃ ʁɑ̃.sɛɲ.mɑ̃ sil vu plɛ/', tip: "Tu demandes, tu ne décides pas. EN: you are asking, not deciding." },
    { promptLabel: 'une réservation', promptSound: 'Je veux réserver pour quatre personnes.', fr: 'Je voudrais réserver pour quatre personnes.', ipa: '/ʒə vu.dʁɛ ʁe.zɛʁ.ve puʁ katʁ pɛʁ.sɔn/', tip: "Il peut ne rien rester à jeudi. Laisse-lui la place de le dire. EN: leave room for the answer." },
    { promptLabel: 'au téléphone', promptSound: 'Je veux parler à quelqu’un du service technique.', fr: "J'aimerais parler à quelqu'un du service technique.", ipa: '/ʒɛ.mə.ʁɛ paʁ.le a kɛl.kœ̃ dy sɛʁ.vis tɛk.nik/', tip: "J'aimerais est encore plus doux au téléphone. EN: j'aimerais is softer still on the phone." },
    { promptLabel: 'un choix entre deux', promptSound: 'Je veux venir en fin de journée.', fr: 'Je préférerais venir en fin de journée.', ipa: '/ʒə pʁe.fe.ʁə.ʁɛ və.niʁ ɑ̃ fɛ̃ də ʒuʁ.ne/', tip: "Un autre créneau a déjà été proposé : c'est ça qui appelle préférerais. EN: another slot was offered, which is what calls for préférerais." },
    { promptLabel: 'une position', promptSound: 'Je voudrais ce poste et je le dirai clairement.', fr: 'Je veux ce poste et je le dirai clairement.', ipa: '/ʒə vø sə pɔst e ʒə lə di.ʁe klɛʁ.mɑ̃/', tip: "Ici, l'inverse : voudrais affaiblit une position qui doit être ferme. EN: here the conditional weakens a position that has to be firm." },
    { promptLabel: 'un refus', promptSound: 'Je ne voudrais pas de sucre, merci.', fr: 'Je ne veux pas de sucre, merci.', ipa: '/ʒə nə vø pa də sykʁ mɛʁ.si/', tip: "Un refus net se dit au présent : le conditionnel le rend hésitant. EN: a clean refusal stays in the present." },
  ],
  drill: [
    { promptSay: 'Au guichet : « Je ... un renseignement. »', opts: ['veux', 'voudrais'], correct: 1 },
    { promptSay: 'Tu refuses le sucre : « Je ne ... pas de sucre, merci. »', opts: ['veux', 'voudrais'], correct: 0 },
    { promptSay: 'On te propose jeudi ou vendredi : « Je ... vendredi. »', opts: ['veux', 'préférerais'], correct: 1 },
    { promptSay: "À la boulangerie : « Je ... deux baguettes. »", opts: ['voudrais', 'veux'], correct: 0 },
    { promptSay: 'En entretien, sur ta candidature : « Je ... ce poste. »', opts: ['voudrais', 'veux'], correct: 1 },
    { promptSay: 'Au téléphone : « ... parler au responsable. »', opts: ["J'aimerais", 'Je veux'], correct: 0 },
    { promptSay: 'On te propose un café : « Je ... bien, merci. »', opts: ['voudrais', 'veux'], correct: 1 },
    { promptSay: "Par courriel : « Je ... recevoir une confirmation écrite. »", opts: ['souhaiterais', 'veux'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Où je veux est juste' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la phrase plate raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases correctes' },
    { label: 'À toi', kind: 'drill', title: 'Huit phrases', gate: true },
  ],
  audio: REC('rec-b1-09-piege-veux'), say: REFRAME, terms: ['souhait', 'magique'],
};

const A3_CHECK = actCheck('a3-check', 'Le point : acte 3', [
  ctl('Le défaut', 'Quelle ouverture peux-tu dire dix fois par jour sans te tromper ?',
    ['je veux', 'je voudrais', 'je souhaiterais'], 1,
    "Je voudrais est la formule par défaut du comptoir. EN: je voudrais is the default counter formula."),
  ctl("L'exception", 'Où « je veux » est-il exactement le bon mot ?',
    ['quand tu commandes', 'quand tu annonces une position ou tu refuses'], 1,
    "Là, la décision EST le message. EN: there, the decision is the message."),
  ctl('Le choix', '« Je préférerais » suppose que...',
    ['tu es pressé', 'on t’a déjà proposé autre chose', 'tu écris'], 1,
    "Sans deuxième possibilité, préférerais sonne bizarre. EN: without a second option it sounds odd."),
], ['souhait', 'echelle']);

const ACT3: ActDef = {
  act: {
    id: 'act3',
    title: 'Je voudrais, pas je veux',
    opener: {
      line: "Deux clients commandent la même chose, et un seul apprend que le pain vient de sortir du four : ici tu apprends pourquoi. EN: Two customers order the same thing and only one is told the bread has just come out of the oven: here you learn why.",
      imageRef: 'lessons/politesse/act03.jpg',
    },
    sections: [],
    milestone: "Tu ouvres tes demandes avec je voudrais, et tu gardes je veux pour les deux endroits où il est juste. EN: You open your requests with je voudrais and keep je veux for the two places it belongs.",
    estScreens: 34,
    restPoints: ['a3-construire'],
  },
  sections: [A3_LECTURE, A3_CARTES, A3_TABLEAU, A3_CONSTRUIRE, A3_ECOUTE, A3_PIEGE, A3_CHECK],
  imports: IMPORTED.act3,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 4 — LA FORME DE LA QUESTION
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. One counter, three question shapes, and the clerk does not change
 *  her tone once. NO SPACED « ? » OR « ! » IN ANY BUBBLE. */
const A4_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a4-histoire',
  layer: 'core',
  title: "Au guichet de la mairie",
  frSub: 'Trois formes pour une seule question',
  setting: "Mairie du quatorzième, à Paris, mercredi matin. Trois personnes se présentent au même guichet, l'une après l'autre.",
  bubbles: [
    { from: 'narrator', fr: "Trois personnes, la même demande : une attestation de domicile.", en: 'Three people, the same request: a proof of address.' },
    { from: 'user', fr: 'Bonjour. Vous pouvez me donner une attestation de domicile.', en: 'Hello. You can give me a proof of address.', warn: 'présent, sans question' },
    { from: 'coach', fr: "Bonjour. Il me faut d'abord une pièce d'identité.", en: 'Hello. I need an identity document first.' },
    { from: 'user', fr: 'Bonjour. Est-ce que vous pourriez me donner une attestation de domicile.', en: 'Hello. Could you give me a proof of address.', warn: 'est-ce que : un pas de plus' },
    { from: 'coach', fr: "Bien sûr. Vous avez une pièce d'identité avec vous.", en: 'Of course. Do you have identity with you.' },
    { from: 'user', fr: 'Bonjour. Pourriez-vous me donner une attestation de domicile.', en: 'Hello. Could you give me a proof of address.', warn: "l'inversion : la forme du guichet" },
    { from: 'coach', fr: "Je vous en prie. Asseyez-vous, je reviens.", en: 'Certainly. Do sit down, I will be right back.' },
    { from: 'narrator', fr: "L'employée a été correcte avec les trois. Seule la troisième s'est fait offrir une chaise.", en: 'The clerk was correct with all three. Only the third was offered a chair.' },
  ],
  closing: { fr: "La forme de la question n'est pas de la décoration : elle dit la distance.", en: 'The shape of the question is not decoration: it states the distance.' },
  audio: REC('rec-b1-09-guichet'), say: REFRAME, terms: ['question', 'distance'],
};

/** NAME. Four cards, from flat to inverted. */
const A4_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a4-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-moteur',
  title: 'Trois façons de poser la même question',
  frSub: 'Plat, est-ce que, inversion',
  hint: "Quatre cartes. Regarde où se trouve le sujet.",
  audio: AUDIO, say: REFRAME, terms: ['question', 'moteur'],
  cards: [
    {
      head: 'Plat', label: "l'intonation seule",
      fr: 'Tu pourrais me prévenir avant de partir ?',
      sub: '[tü poo-reh muh prayv-neer ah-vahⁿ duh par-TEER]',
      body: "Rien ne bouge : la voix monte, et c'est tout. C'est la forme normale à l'oral entre gens qui se connaissent. EN: nothing moves but the voice; the normal spoken form between people who know each other.",
    },
    {
      head: 'Est-ce que', label: 'un pas de plus',
      fr: 'Est-ce que tu pourrais garder mon chat cette semaine ?',
      sub: '[es-kuh tü poo-reh gar-day mohⁿ shah set suh-MENN]',
      body: "Trois mots de plus, et la demande se détache de toi. Utile quand le service est gros, même avec un ami. EN: three extra words and the request detaches from you.",
    },
    {
      head: "L'inversion", label: 'pourriez-vous, auriez-vous',
      fr: 'Pourriez-vous me confirmer la date ? · Auriez-vous un moment ?',
      sub: '[poo-ryay-voo muh kohⁿ-feer-may lah DAT] · [oh-ryay-voo uhⁿ moh-MAHⁿ]',
      body: `« ${B108_REFRAME} » Le verbe passe devant le sujet. Avec vous, c'est la forme ordinaire du guichet et du courriel. EN: ${B108_REFRAME_EN}`,
    },
    {
      head: "L'inversion avec tu", label: 'plus rare à l’oral',
      fr: 'Pourrais-tu me prévenir avant de partir ? · Aurais-tu une minute pour moi ?',
      sub: '[poo-reh-TÜ muh prayv-neer ah-vahⁿ duh par-TEER] · [oh-reh-TÜ ün mee-nüt poor MWAH]',
      body: "Elle existe et elle s'écrit souvent, dans un message ou un courriel. Dite à voix haute entre amis, elle peut sonner solennelle. EN: common in writing, and it can sound solemn said aloud between friends.",
    },
  ],
};

/** BUILD. Three groups, one per shape. */
const A4_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-construire',
  layer: 'core',
  size: 'lg',
  title: 'Où se trouve le sujet',
  groups: [
    grp('Le sujet devant, comme d’habitude', [
      it(E(1065), "un service de deux secondes"),
      it(E(1066), 'au téléphone'),
      it('fr.a1.objets.204', 'entre voisins de table'),
      it('fr.sons.rythme.111', 'un gros service, forme plate'),
    ], chk('Ces quatre questions changent quoi à la phrase ?',
      ['rien, sauf la voix qui monte', 'le verbe passe devant'], 0,
      "C'est l'intonation seule. EN: the intonation does all the work.")),
    grp('Est-ce que, devant', [
      it(E(1062), 'une semaine de chat, entre amis'),
      it(E(1059), 'un devis, par courriel'),
      it('fr.a2.hebergement.074', "à l'hôtel"),
      it('fr.a2.hebergement.080', 'un oreiller de plus'),
    ], chk('Que fait « est-ce que » exactement ?',
      ['il rend la phrase interrogative', 'il ajoute de la distance à une phrase déjà interrogative'], 1,
      "Sans lui, la question existait déjà. Il ajoute un pas. EN: the question already existed; est-ce que adds a step.")),
    grp('Le verbe devant le sujet', [
      it(E(1058), 'au guichet'),
      it(E(1069), 'le bon guichet'),
      it(E(1061), "avec tu, à l'écrit"),
      it('fr.a1.questions.328', 'la plus fréquente de toutes'),
    ], chk("Où l'inversion est-elle la forme ordinaire, et pas solennelle ?",
      ['avec vous, au guichet et par écrit', 'entre amis'], 0,
      "Avec vous, personne ne la trouve lourde. EN: with vous nobody finds it heavy.")),
  ],
  audio: AUDIO, say: REFRAME, terms: ['question', 'echelle'],
};

/** CHOOSE. The setting picks the shape. */
const A4_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a4-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Le lieu choisit la forme',
  groups: [
    grp('À un guichet, à un inconnu', [
      it(E(1063), 'patienter deux minutes'),
      it(E(1067), "changer l'heure, sans viser personne"),
      it(E(1064), 'la plus écrite des trois'),
      it('fr.a1.au-restaurant.209', 'au restaurant, un peu formel'),
    ], chk('Quelle forme domine dans ce groupe ?',
      ['est-ce que', 'la forme plate', "l'inversion"], 2,
      "Avec vous, l'inversion est la forme par défaut du guichet. EN: with vous the inversion is the counter default.")),
    grp('Le gros service entre proches', [
      it(E(1062), 'une semaine entière'),
      it(E(1068), 'la question qui mesure elle-même'),
      it(E(1070), 'avec tu, mais inversée'),
      it('fr.a2.hebergement.078', 'ce serait possible : personne n’est visé'),
    ], chk("« Est-ce que ce serait trop vous demander » : que fait cette phrase ?",
      ['elle demande', 'elle mesure le service à voix haute'], 1,
      "Elle pose la question de la taille avant de poser la demande. EN: it asks about the size before asking for the favour.")),
    ctl('La forme plate', "Entre amis, pour un petit service, la forme plate est...",
      ['la bonne', 'trop familière', 'réservée à l’écrit'], 0,
      "Personne ne met est-ce que pour faire passer le sel. EN: nobody adds est-ce que to pass the salt."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['question', 'distance'],
};

/** EAR. hideLines: the shape has to be heard, not read. */
const A4_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a4-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Quelle forme entends-tu',
  frSub: 'Huit questions, une seule écoute',
  lines: [ln(E(1058)), ln(E(1065)), ln(E(1062)), ln(E(1070)), ln(E(1059)), ln(E(1066)), ln(E(1069)), ln(E(1063))],
  questions: [
    { q: 'Première phrase : le verbe est-il devant le sujet ?', opts: ['oui', 'non'], correct: 0, why: "« Pourriez-vous » : le verbe d'abord. EN: pourriez-vous puts the verb first." },
    { q: 'Deuxième phrase : quelle forme ?', opts: ['inversion', 'forme plate', 'est-ce que'], correct: 1, why: "« Tu peux fermer à clé en partant ? » La voix monte, rien d'autre. EN: the voice rises and nothing else changes." },
    { q: 'Troisième phrase : combien de mots avant le sujet ?', opts: ['trois', 'aucun'], correct: 0, why: "« Est-ce que » fait trois mots devant tu. EN: est-ce que is three words in front of tu." },
    { q: 'Quatrième phrase : qui parle à qui ?', opts: ['à un inconnu', 'à quelqu’un qu’on tutoie'], correct: 1, why: "« Aurais-tu une minute pour moi ? » Inversion, mais avec tu. EN: an inversion, but with tu." },
    { q: 'Sixième phrase : la demande est-elle grosse ?', opts: ['non', 'oui'], correct: 0, why: "Parler plus fort ne coûte rien, donc la forme reste plate. EN: speaking louder costs nothing, so the form stays flat." },
    { q: 'Dernière phrase : où es-tu ?', opts: ['chez un ami', 'à un guichet'], correct: 1, why: "« Voudriez-vous patienter deux minutes ? » Inversion et vous. EN: inversion and vous." },
  ],
  audio: REC('rec-b1-09-question-ecoute'), say: REFRAME, terms: ['question'],
};

/** TRAP, stepped. */
const A4_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a4-piege',
  layer: 'core',
  swipe: true,
  title: "Deux pièges de l'inversion",
  rule: {
    title: 'Pas trop haut, pas trop bas',
    body: "Avec vous, au guichet, l'inversion est ordinaire. Lancée à un ami pour un service minuscule, elle devient solennelle. EN: ordinary with vous, solemn with a friend.",
  },
  cards: [
    { promptLabel: 'trop bas au guichet', promptSound: 'Vous pouvez vérifier mon dossier.', fr: 'Pourriez-vous vérifier mon dossier, madame ?', ipa: '/pu.ʁje.vu ve.ʁi.fje mɔ̃ dɔ.sje ma.dam/', tip: "Guichet, inconnue, dix minutes de travail : on monte. EN: counter, stranger, ten minutes of work." },
    { promptLabel: 'trop haut entre amis', promptSound: 'Pourrais-tu me passer le sel ?', fr: 'Tu peux me passer le sel ?', ipa: '/ty pø mə pa.se lə sɛl/', tip: "Le sel est à trente centimètres. L'inversion met une distance que personne n'a demandée. EN: the salt is thirty centimetres away." },
    { promptLabel: 'un gros service, forme plate', promptSound: 'Tu gardes mon chat cette semaine ?', fr: 'Est-ce que tu pourrais garder mon chat cette semaine ?', ipa: '/ɛs.kə ty pu.ʁɛ ɡaʁ.de mɔ̃ ʃa sɛt sə.mɛn/', tip: "Une semaine de chat, c'est gros, même entre amis. EN: a week of cat-sitting is big, even between friends." },
    { promptLabel: 'par écrit', promptSound: 'Tu peux me dire la date du rendez-vous ?', fr: 'Pourriez-vous me confirmer la date ?', ipa: '/pu.ʁje.vu mə kɔ̃.fiʁ.me la dat/', tip: "Dans un courriel à un inconnu, l'inversion est la norme. EN: in an email to a stranger the inversion is the norm." },
    { promptLabel: 'la question qui ne vise personne', promptSound: 'Vous changez l’heure ?', fr: "Serait-il possible de changer l'heure ?", ipa: '/sə.ʁɛ.til pɔ.sibl də ʃɑ̃.ʒe lœʁ/', tip: "Personne n'est nommé, donc personne n'a à se justifier. EN: nobody is named, so nobody has to justify a no." },
    { promptLabel: 'un petit service au bureau', promptSound: 'Auriez-vous la gentillesse de parler un peu plus fort ?', fr: 'Vous pourriez parler un peu plus fort ?', ipa: '/vu pu.ʁje paʁ.le œ̃ pø ply fɔʁ/', tip: "Le barreau du haut pour un volume de voix : c'est de l'ironie. EN: the top rung for a volume request reads as irony." },
  ],
  drill: [
    { promptSay: 'Au guichet, pour un dossier : « ... vérifier mon dossier ? »', opts: ['Pourriez-vous', 'Vous pouvez'], correct: 0 },
    { promptSay: 'À table, avec ton frère : « ... me passer le sel ? »', opts: ['Pourrais-tu', 'Tu peux'], correct: 1 },
    { promptSay: 'Une semaine de chat, à une amie : « ... garder mon chat ? »', opts: ['Est-ce que tu pourrais', 'Tu gardes'], correct: 0 },
    { promptSay: 'Un courriel à une inconnue : « ... me confirmer la date ? »', opts: ['Tu peux', 'Pourriez-vous'], correct: 1 },
    { promptSay: "Pour ne viser personne : « ... possible de changer l'heure ? »", opts: ['Serait-il', 'Vous pouvez'], correct: 0 },
    { promptSay: 'Au téléphone, la ligne coupe : « ... parler un peu plus fort ? »', opts: ['Auriez-vous la gentillesse de', 'Vous pourriez'], correct: 1 },
    { promptSay: 'À un collègue, pour deux minutes : « ... une minute pour moi ? »', opts: ['Aurais-tu', 'Auriez-vous la gentillesse de me donner'], correct: 0 },
    { promptSay: 'Au restaurant, à la serveuse : « ... avoir une serviette ? »', opts: ['Je veux', 'Est-ce que je peux'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Deux mauvais bouts' },
    { label: 'Six cartes', kind: 'cards', title: 'Trop haut, trop bas' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit situations', gate: true },
  ],
  audio: REC('rec-b1-09-piege-inversion'), say: REFRAME, terms: ['question', 'distance'],
};

const A4_CHECK = actCheck('a4-check', 'Le point : acte 4', [
  ctl('Le guichet', "Avec vous, à un guichet, la forme ordinaire est...",
    ['la forme plate', 'est-ce que', "l'inversion"], 2,
    "Pourriez-vous, auriez-vous : personne ne les trouve lourdes. EN: nobody finds them heavy."),
  ctl("Est-ce que", "« Est-ce que » sert ici à...",
    ['ajouter un pas de distance', 'rendre la phrase interrogative'], 0,
    "La question existait déjà sans lui. EN: the question already existed without it."),
  ctl("L'ironie", "Le barreau du haut pour un service minuscule donne...",
    ['de la distance ou de l’ironie', 'de la politesse', 'rien du tout'], 0,
    "Trop haut se remarque autant que trop bas. EN: too high is noticed as much as too low."),
], ['question', 'echelle']);

const ACT4: ActDef = {
  act: {
    id: 'act4',
    title: 'La forme de la question',
    opener: {
      line: "Trois personnes demandent la même attestation, et une seule se fait offrir une chaise : ici tu apprends ce qui a changé. EN: Three people ask for the same certificate and only one is offered a chair: here you learn what changed.",
      imageRef: 'lessons/politesse/act04.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre la forme plate, est-ce que et l'inversion selon le lieu, pas selon ton humeur. EN: You choose between the flat form, est-ce que and the inversion by setting, not by mood.",
    estScreens: 34,
    restPoints: ['a4-construire'],
  },
  sections: [A4_HISTOIRE, A4_CARTES, A4_CONSTRUIRE, A4_CHOISIR, A4_ECOUTE, A4_PIEGE, A4_CHECK],
  imports: IMPORTED.act4,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 5 — LES ADOUCISSEURS
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Small words, and what they do to a request nobody wants to refuse. */
const A5_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a5-histoire',
  layer: 'core',
  title: 'Le chargeur',
  frSub: 'Trois petits mots, trois demandes',
  setting: "Salle d'attente d'une gare, à Namur. Batterie à quatre pour cent, train dans quarante minutes.",
  bubbles: [
    { from: 'narrator', fr: "Deux voyageurs, un banc, une seule prise murale.", en: 'Two travellers, one bench, one wall socket.' },
    { from: 'user', fr: 'Excusez-moi, vous auriez un chargeur, par hasard.', en: 'Excuse me, would you have a charger, by any chance.', warn: 'par hasard : je sais que non est possible' },
    { from: 'coach', fr: "J'en ai un, oui. Mais j'en ai besoin dans dix minutes.", en: 'I do have one, yes. But I need it in ten minutes.' },
    { from: 'user', fr: 'Je voudrais juste cinq minutes, si possible.', en: 'I would just like five minutes, if possible.', warn: 'juste et si possible : la demande rétrécit' },
    { from: 'coach', fr: 'Cinq minutes, ça va. Prenez la prise du bas.', en: 'Five minutes is fine. Take the lower socket.' },
    { from: 'user', fr: "Ça ne vous dérangerait pas de me le rappeler dans cinq minutes.", en: 'Would you mind reminding me in five minutes.', warn: 'la permission de demander' },
    { from: 'coach', fr: 'Je vous préviens. Rangez votre billet, il va tomber.', en: 'I will tell you. Put your ticket away, it is about to fall.' },
  ],
  closing: { fr: "Aucun verbe n'a changé. Ce sont les petits mots qui ont rétréci la demande.", en: 'No verb changed. The small words shrank the request.' },
  audio: REC('rec-b1-09-adoucir'), say: REFRAME, terms: ['adoucir', 'service'],
};

/** NAME. Four cards: the small words, then the two formulas. */
const A5_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a5-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-adoucisseurs',
  title: 'Les petits mots qui rétrécissent',
  frSub: 'Quatre cartes',
  hint: 'Regarde ce qui change : le verbe, ou la taille du service.',
  audio: AUDIO, say: REFRAME, terms: ['adoucir', 'service'],
  cards: [
    {
      head: 'Par hasard', label: 'à la fin',
      fr: 'Tu aurais un chargeur, par hasard ?',
      sub: '[tü oh-reh uhⁿ shar-zhuhr par ah-ZAR]',
      body: "Tu dis toi-même que la réponse est probablement non. La personne peut refuser sans se justifier. EN: you say yourself that the answer is probably no, so refusing needs no reason.",
    },
    {
      head: 'Juste, un peu, si possible', label: 'la taille',
      fr: 'Je voudrais juste une signature, si possible.',
      sub: '[zhuh voo-dreh zhüst ün see-ñah-tür see poh-SEEBL]',
      body: "Ils ne touchent pas au verbe : ils rétrécissent ce que tu demandes. Une signature, cinq minutes, un peu plus fort. EN: they do not touch the verb; they shrink what you are asking for.",
    },
    {
      head: 'Peut-être', label: 'après le verbe',
      fr: 'Tu pourrais peut-être appeler avant midi.',
      sub: '[tü poo-reh puh-teh-trah-puh-lay ah-vahⁿ mee-DEE]',
      body: "Il transforme un conseil en idée posée sur la table. Sans lui, la phrase reste une instruction douce. EN: it turns advice into an idea left on the table.",
    },
    {
      head: 'Deux formules', label: 'ça vous dérangerait de, je me permets de',
      fr: 'Ça te dérangerait de me déposer à la gare ? · Je me permets de vous relancer au sujet du devis.',
      sub: '[sah tuh day-rahⁿzh-reh duh muh day-poh-zay ah lah GAR] · [zhuh muh per-meh duh voo ruh-lahⁿ-say oh sü-zheh dü duh-VEE]',
      body: "La première demande la permission de demander. La seconde s'écrit, jamais ne se dit, et sert à relancer quelqu'un sans le presser. EN: the first asks permission to ask; the second is written only, for following somebody up.",
    },
  ],
};

/** NAME, part two: where each one goes in the sentence. */
const A5_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a5-tableau',
  layer: 'core',
  sheetId: 'sheet-adoucisseurs',
  title: 'Six adoucisseurs et leur place',
  cols: ['Adoucisseur', 'Place', 'Ce qu’il fait'],
  rows: [
    {
      cells: ['par hasard', 'à la fin', 'annonce que non est possible'],
      say: 'Tu aurais un chargeur, par hasard ?',
      detail: { title: 'par hasard', body: "Toujours en dernier, jamais au milieu. Il dit que tu n'attends pas vraiment un oui. EN: always last, and it says you are not really expecting a yes.", say: "Tu n'aurais pas dix minutes, par hasard ?" },
    },
    {
      cells: ['si possible', 'à la fin', 'laisse la porte de sortie'],
      say: 'Je voudrais juste une signature, si possible.',
      detail: { title: 'si possible', body: "Il s'accroche à la fin et rend le refus gratuit. Dans un courriel, il se met aussi au début. EN: it hangs at the end and makes refusing free.", say: 'Auriez-vous un moment, si possible avant jeudi ?' },
    },
    {
      cells: ['juste', 'devant le verbe ou le nom', 'rétrécit la demande'],
      say: 'Je voudrais juste vérifier une chose.',
      detail: { title: 'juste', body: "Il dit que ça ne prendra pas longtemps. Attention : trois « juste » dans un message ne rétrécissent plus rien. EN: three of them in one message stop shrinking anything.", say: 'Je voulais juste un renseignement, ce sera rapide.' },
    },
    {
      cells: ['un peu', 'devant le mot adouci', 'adoucit la quantité'],
      say: 'Vous pourriez parler un peu plus fort ?',
      detail: { title: 'un peu', body: "Il se colle au mot qu'il adoucit : un peu plus fort, un peu plus tard, un peu plus simple. EN: it sticks to the word it softens.", say: 'Ce serait un peu plus simple pour tout le monde.' },
    },
    {
      cells: ['peut-être', 'après le verbe conjugué', 'rend le conseil facultatif'],
      say: 'Tu pourrais peut-être appeler avant midi.',
      detail: { title: 'peut-être', body: "Après le verbe conjugué, jamais collé au sujet. Il pose l'idée sans la pousser. EN: after the conjugated verb, never next to the subject.", say: 'On pourrait peut-être en parler lundi.' },
    },
    {
      cells: ['je me permets de', 'au début, par écrit', 'relance sans presser'],
      say: 'Je me permets de vous relancer au sujet du devis.',
      detail: { title: 'je me permets de', body: "Formule écrite. Tu dis que tu sais que tu insistes, et tu insistes quand même. EN: a written formula: you say you know you are pressing, and press anyway.", say: 'Je me permets de vous relancer au sujet de mon dossier.' },
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['adoucir'],
};

/** BUILD. */
const A5_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce que le petit mot déplace',
  groups: [
    grp('Ils annoncent que non est possible', [
      it(E(1079), 'par hasard, à la fin'),
      it(E(1089), 'la version négative, encore plus douce'),
      it(E(1086), 'si possible, avec une date'),
      it('fr.b1.cafe.073', 'si cela ne vous dérange pas, en terrasse'),
    ], chk('Que disent ces quatre phrases avant même la réponse ?',
      ['que tu es pressé', 'que le non est accepté d’avance'], 1,
      "Tu offres le refus toi-même. EN: you hand over the refusal yourself.")),
    grp('Ils rétrécissent la demande', [
      it(E(1080), 'juste une signature'),
      it(E(1087), 'juste vérifier'),
      it(E(1082), 'décaler un peu'),
      it('fr.a1.marche.098', 'un peu plus, au marché'),
    ], chk('Est-ce que « juste » change le verbe ?',
      ['non, il change la taille de ce que tu demandes', 'oui'], 0,
      "Le verbe ne bouge pas : c'est le service qui rétrécit. EN: the verb does not move; the favour shrinks.")),
    grp('Ils demandent la permission de demander', [
      it(E(1083), 'me déposer à la gare'),
      it(E(1085), 'si ça ne te dérange pas'),
      it(E(1084), "je me permets de, à l'écrit"),
      it('fr.a2.hebergement.077', "l'ouverture au comptoir"),
    ], chk('Que demande « ça te dérangerait de » avant le service ?',
      ['le service lui-même', 'le droit de le demander', 'une excuse'], 1,
      "La permission vient avant la demande. EN: permission comes before the request.")),
  ],
  audio: AUDIO, say: REFRAME, terms: ['adoucir', 'service'],
};

const A5_DICTEE: Sec<'dictation'> = {
  type: 'dictation',
  id: 'a5-dictee',
  layer: 'core',
  title: 'Écris les adoucisseurs que tu entends',
  frSub: 'Cinq phrases',
  itemIds: dicteeFor(5),
  audio: AUDIO, say: REFRAME, terms: ['adoucir'],
};

/** CHOOSE. One softener, not three. */
const A5_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a5-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Un seul suffit',
  groups: [
    grp('Une phrase, un adoucisseur', [
      it(E(1081), 'peut-être, et rien d’autre'),
      it(E(1088), 'peut-être, dans une proposition'),
      it(E(1090), 'un peu, dans une conclusion'),
      it(E(1106), 'juste, plus la durée annoncée'),
    ], chk('Combien d’adoucisseurs porte chacune de ces phrases ?',
      ['deux', 'trois', 'un'], 2,
      "Un seul, et il suffit. EN: one, and one is enough.")),
    grp('Deux, quand la demande est grosse', [
      it(E(1080), 'juste et si possible'),
      it(E(1086), 'si possible et une date'),
      it(E(1085), 'la condition et le conditionnel'),
      free("Je me permets de vous demander, si possible avant vendredi, une copie du contrat.", 'I am taking the liberty of asking you, before Friday if possible, for a copy of the contract.', 'deux, pour un gros service écrit'),
    ], chk('Quand deux adoucisseurs se justifient-ils ?',
      ['toujours', 'quand le service est gros ou la personne inconnue'], 1,
      "La taille du service décide encore. EN: the size of the favour decides again.")),
    ctl('Trois de suite', "Trois adoucisseurs dans une phrase donnent l'impression que...",
      ['tu caches quelque chose', 'tu es très poli', 'tu écris bien'], 0,
      "Le lecteur cherche le vrai problème derrière. EN: the reader starts looking for the real problem."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['adoucir', 'echelle'],
};

/** TRAP. */
const A5_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a5-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre adoucisseurs mal posés',
  errors: [
    {
      wrong: 'Par hasard, tu aurais un chargeur ?',
      right: 'Tu aurais un chargeur, par hasard ?',
      why: "Normal : en anglais, by any chance se met partout. En français, par hasard vit à la fin de la phrase. EN: by any chance moves freely in English; par hasard lives at the end.",
    },
    {
      wrong: 'Tu peut-être pourrais appeler avant midi.',
      right: 'Tu pourrais peut-être appeler avant midi.',
      why: "Peut-être suit le verbe conjugué. Devant le sujet, il existe seulement en tête de phrase, avec que. EN: peut-être follows the conjugated verb.",
    },
    {
      wrong: 'Je voudrais juste une signature si possible par hasard, si ça ne vous dérange pas.',
      right: 'Je voudrais juste une signature, si possible.',
      why: "Chaque adoucisseur est juste. Quatre ensemble ne rétrécissent plus rien et inquiètent le lecteur. EN: each one is right; four together stop working and worry the reader.",
    },
    {
      wrong: 'Ça vous dérange de fermer la fenêtre ?',
      right: 'Ça vous dérangerait de fermer la fenêtre ?',
      why: "Le présent demande si la personne est déjà gênée, ce qui ressemble à un reproche. Le conditionnel demande la permission. EN: the present asks whether they are already annoyed.",
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['adoucir', 'moteur'],
};

const A5_CHECK = actCheck('a5-check', 'Le point : acte 5', [
  ctl('La place', 'Où se met « par hasard » ?',
    ['au début', 'à la fin'], 1,
    "Toujours en dernier. EN: always last."),
  ctl('Le travail', 'Que change « juste » dans une demande ?',
    ['le verbe', 'la taille du service', 'le temps'], 1,
    "Le verbe ne bouge pas. EN: the verb does not move."),
  ctl('La dose', 'Combien d’adoucisseurs pour une demande ordinaire ?',
    ['trois', 'autant que possible', 'un'], 2,
    "Un seul. Deux si le service est gros. EN: one, or two for a big favour."),
], ['adoucir', 'service']);

const ACT5: ActDef = {
  act: {
    id: 'act5',
    title: 'Les adoucisseurs',
    opener: {
      line: "Quatre pour cent de batterie et un seul chargeur sur le banc : ici tu apprends les petits mots qui rendent le non facile. EN: Four per cent of battery and one charger on the bench: here you learn the small words that make a no easy.",
      imageRef: 'lessons/politesse/act05.jpg',
    },
    sections: [],
    milestone: "Tu poses un adoucisseur au bon endroit, et un seul, pour rétrécir ta demande sans inquiéter personne. EN: You place one softener, in the right spot, to shrink your request without worrying anybody.",
    estScreens: 38,
    restPoints: ['a5-construire', 'a5-choisir'],
  },
  sections: [A5_HISTOIRE, A5_CARTES, A5_TABLEAU, A5_CONSTRUIRE, A5_DICTEE, A5_CHOISIR, A5_ERREURS, A5_CHECK],
  imports: IMPORTED.act5,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 6 — JE VOULAIS VOUS DEMANDER
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Three imparfaits at a counter, and not one of them is about the past. */
const A6_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a6-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Dix minutes avant la fermeture',
  frSub: 'Le bureau des inscriptions',
  text: READING_BUREAU,
  glossary: [
    { word: 'inscriptions', en: 'registrations, enrolments', note: "Le bureau où on dépose son dossier pour entrer dans une formation." },
    { word: 'complet', en: 'complete', note: "Il ne manque aucune pièce. EN: no document is missing." },
    { word: 'la session', en: 'the intake, the session', note: "Le groupe qui commence à une date donnée." },
  ],
  questions: [
    { q: "Les trois verbes à l'imparfait parlent-ils du passé ?", a: "Non. Le rendez-vous est maintenant, la question est maintenant, la place demandée est pour mai." },
    { q: "Quels sont les trois verbes à l'imparfait ?", a: "« je venais pour », « je voulais vous demander » et « je me demandais »." },
    { q: "À quoi sert l'imparfait ici ?", a: "À reculer la demande d'un pas, exactement comme le conditionnel. Je voulais vous demander est plus léger que je veux vous demander." },
    { q: "Où entend-on le plus souvent ces ouvertures ?", a: "À un guichet, un comptoir ou un bureau : beaucoup de francophones ouvrent ainsi toutes leurs demandes." },
  ],
  audio: REC('rec-b1-09-bureau'), say: REFRAME, terms: ['voulais', 'distance'],
};

/** NAME. Four cards, with b1.02 quoted rather than retaught. */
const A6_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a6-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: "L'imparfait qui n'est pas du passé",
  frSub: 'Quatre cartes',
  hint: 'Demande-toi chaque fois quand la demande a lieu.',
  audio: AUDIO, say: REFRAME, terms: ['voulais', 'moteur'],
  cards: [
    {
      head: 'Je voulais vous demander', label: "l'ouverture",
      fr: 'Je voulais vous demander un renseignement.',
      sub: '[zhuh voo-leh voo duh-mahⁿ-day uhⁿ rahⁿ-señ-MAHⁿ]',
      body: "La demande est maintenant. L'imparfait la recule d'un pas, comme le conditionnel, et on l'entend à tous les guichets. EN: the request is now; the imparfait simply steps it back a pace.",
    },
    {
      head: 'Je venais pour', label: 'au comptoir',
      fr: 'Je venais pour le colis de la semaine dernière.',
      sub: '[zhuh vuh-neh poor luh koh-lee duh lah suh-menn der-NYEHR]',
      body: "Tu es devant la personne : tu n'es pas en train de venir. C'est la formule d'entrée en matière la plus courante. EN: you are standing right there; you are not in the middle of coming.",
    },
    {
      head: `Ce que ${IMP_USE_REF} t'a déjà donné`, label: Cap(IMP_USE_REF),
      fr: "il faisait froid · je me demandais",
      sub: '[eel fuh-zeh FRWAH] · [zhuh muh duh-mahⁿ-DEH]',
      body: `« ${B102_REFRAME} » Ici aussi, tu regardes sans compter : la demande n'a ni début ni fin, elle est simplement posée. EN: ${B102_REFRAME_EN}`,
    },
    {
      head: 'Les deux reculs ensemble', label: 'imparfait plus conditionnel',
      fr: 'Je me demandais si vous auriez une place.',
      sub: '[zhuh muh duh-mahⁿ-deh see voo-zoh-ryay ün PLASS]',
      body: "Un pas en arrière dans chaque moitié de la phrase. C'est la demande la plus légère du français ordinaire. EN: one step back in each half of the sentence, and the lightest request ordinary French has.",
    },
  ],
};

/** NAME, part two. */
const A6_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a6-exemples',
  layer: 'core',
  title: 'Six ouvertures au guichet',
  frSub: "Toutes à l'imparfait, toutes au présent",
  examples: [
    ex(E(1095), 'la plus fréquente de toutes'),
    ex(E(1096), 'tu es déjà là : venais ne raconte rien'),
    ex(E(1100), 'venir voir, sans dire je veux savoir'),
    ex(E(1103), "au téléphone : j'appelais, pas j'appelle"),
    ex(E(1105), 'les deux reculs dans une seule phrase'),
    ex(E(1099), 'la même chose entre proches'),
  ],
  audio: AUDIO, say: REFRAME, terms: ['voulais', 'echelle'],
};

/** BUILD. */
const A6_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a6-construire',
  layer: 'core',
  size: 'lg',
  title: 'Quand la demande a-t-elle lieu',
  groups: [
    grp('Maintenant, malgré la forme', [
      it(E(1095), 'tu es au guichet, maintenant'),
      it(E(1096), 'le colis est du passé, la demande non'),
      it(E(1102), 'tu cherches encore'),
      it(E(1105), 'la place est pour mai'),
    ], chk('Ces quatre demandes ont lieu quand ?',
      ['maintenant', 'hier'], 0,
      "L'imparfait recule la demande, pas le moment. EN: the imparfait steps the request back, not the moment.")),
    grp('La même chose entre proches', [
      it(E(1099), 'te demander quelque chose'),
      it(E(1098), 'passer voir'),
      it(E(1092), 'la forme seule'),
      it(E(1091), "et l'autre"),
    ], chk('Est-ce que ces formes servent seulement avec vous ?',
      ['oui, seulement au guichet', 'non, elles marchent aussi avec tu'], 1,
      "Je voulais te demander est aussi courant que la version vous. EN: the tu version is just as common.")),
    grp('Annoncer plutôt que demander', [
      it(E(1104), 'prévenir avant, pour réduire la gêne'),
      it(E(1101), 'remercier, pas demander'),
      it(E(1097), 'vérifier une information'),
      it(E(1106), "avec l'adoucisseur de l'acte 5"),
    ], chk("« Je voulais vous prévenir que je serai en retard » : demandes-tu quelque chose ?",
      ['non, tu annonces', 'oui'], 0,
      "La même ouverture sert à annoncer une mauvaise nouvelle en douceur. EN: the same opening softens bad news.")),
  ],
  audio: AUDIO, say: REFRAME, terms: ['voulais', 'adoucir'],
};

/** EAR. */
const A6_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a6-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Hier, ou maintenant',
  frSub: 'Huit phrases, une seule écoute',
  lines: [ln(E(1095)), ln(E(1096)), ln(E(1103)), ln(E(1105)), ln(E(1101)), ln(E(1104)), ln(E(1102)), ln(E(1098))],
  questions: [
    { q: 'Première phrase : la demande a lieu quand ?', opts: ['hier', 'maintenant'], correct: 1, why: "La personne est au guichet en train de parler. EN: the speaker is at the counter right now." },
    { q: 'Deuxième phrase : le colis est arrivé quand ?', opts: ['la semaine dernière', 'aujourd’hui'], correct: 0, why: "Le colis est bien du passé ; la demande, non. EN: the parcel is past; the request is not." },
    { q: 'Troisième phrase : est-ce un appel en cours ?', opts: ['non, un appel d’hier', 'oui'], correct: 1, why: "« J'appelais au sujet de » se dit pendant l'appel. EN: j'appelais is said during the call." },
    { q: 'Quatrième phrase : combien de reculs entends-tu ?', opts: ['deux', 'un'], correct: 0, why: "Je me demandais, puis vous auriez : imparfait et conditionnel. EN: imparfait then conditional." },
    { q: 'Sixième phrase : est-ce une demande ?', opts: ['oui', 'non, une annonce'], correct: 1, why: "« Je voulais vous prévenir » annonce un retard. EN: it announces a delay." },
    { q: 'Dernière phrase : la personne demande-t-elle un service ?', opts: ['non', 'oui'], correct: 0, why: "« Je passais juste voir si tout allait bien. » Elle ne demande rien. EN: she asks for nothing." },
  ],
  audio: REC('rec-b1-09-imparfait-ecoute'), say: REFRAME, terms: ['voulais'],
};

/** TRAP, stepped. */
const A6_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a6-piege',
  layer: 'core',
  swipe: true,
  title: "Le piège de l'imparfait poli",
  rule: {
    title: 'Il recule la demande, pas le moment',
    body: "Je voulais vous demander se dit maintenant. Le danger est de garder ce recul quand la demande est urgente : il fait alors perdre du temps. EN: the danger is keeping the step back when the matter is urgent.",
  },
  cards: [
    { promptLabel: 'trop direct au guichet', promptSound: 'Je veux vous demander un renseignement.', fr: 'Je voulais vous demander un renseignement.', ipa: '/ʒə vu.lɛ vu də.mɑ̃.de œ̃ ʁɑ̃.sɛɲ.mɑ̃/', tip: "Le recul coûte deux lettres et change tout. EN: the step back costs two letters." },
    { promptLabel: 'au comptoir', promptSound: 'Je viens pour le colis de la semaine dernière.', fr: 'Je venais pour le colis de la semaine dernière.', ipa: '/ʒə və.nɛ puʁ lə kɔ.li də la sə.mɛn dɛʁ.njɛʁ/', tip: "Tu es déjà là : venais n'a rien à voir avec hier. EN: you are already there; venais has nothing to do with yesterday." },
    { promptLabel: 'au téléphone', promptSound: "J'appelle au sujet de la facture de mars.", fr: "J'appelais au sujet de la facture de mars.", ipa: '/ʒa.pə.lɛ o sy.ʒɛ də la fak.tyʁ də maʁs/', tip: "Standard au téléphone, dès la première seconde. EN: standard on the phone, from the first second." },
    { promptLabel: 'la plus légère', promptSound: 'Je me demande si vous avez une place.', fr: 'Je me demandais si vous auriez une place.', ipa: '/ʒə mə də.mɑ̃.dɛ si vu.zo.ʁje yn plas/', tip: "Deux reculs valent mieux qu'un quand tu demandes beaucoup. EN: two steps back when you are asking for a lot." },
    { promptLabel: 'une urgence', promptSound: "Je voulais vous demander d'appeler les pompiers.", fr: "Appelez les pompiers, s'il vous plaît.", ipa: '/a.pə.le le pɔ̃.pje sil vu plɛ/', tip: "Dans l'urgence, on redescend tout en bas : c'est là que l'impératif est le bon. EN: in an emergency you drop straight to the bottom rung." },
    { promptLabel: 'une annonce', promptSound: 'Je veux vous prévenir que je serai en retard.', fr: 'Je voulais vous prévenir que je serai en retard.', ipa: '/ʒə vu.lɛ vu pʁev.niʁ kə ʒə sə.ʁe ɑ̃ ʁə.taʁ/', tip: "La même ouverture sert aussi à annoncer, pas seulement à demander. EN: the same opening also announces." },
  ],
  drill: [
    { promptSay: 'Au guichet : « Je ... vous demander un renseignement. »', opts: ['veux', 'voulais'], correct: 1 },
    { promptSay: 'Tu arrives au comptoir : « Je ... pour le colis. »', opts: ['venais', 'viens'], correct: 0 },
    { promptSay: "Au téléphone, dès le début : « J' ... au sujet de la facture. »", opts: ['appelle', 'appelais'], correct: 1 },
    { promptSay: 'Un incendie dans la cage d’escalier : « ... les pompiers. »', opts: ['Appelez', 'Je voulais vous demander d’appeler'], correct: 0 },
    { promptSay: 'Une place pour mai : « Je me ... si vous auriez une place. »', opts: ['demande', 'demandais'], correct: 1 },
    { promptSay: 'Tu annonces un retard : « Je ... vous prévenir. »', opts: ['voulais', 'veux'], correct: 0 },
    { promptSay: 'À un ami, sans urgence : « Je ... te demander quelque chose. »', opts: ['veux', 'voulais'], correct: 1 },
    { promptSay: 'Tu passes sans rien demander : « Je ... juste voir si tout allait bien. »', opts: ['passais', 'passe'], correct: 0 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le recul, pas le passé' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce que la forme directe raconte' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit situations', gate: true },
  ],
  audio: REC('rec-b1-09-piege-imparfait'), say: REFRAME, terms: ['voulais', 'echelle'],
};

const A6_CHECK = actCheck('a6-check', 'Le point : acte 6', [
  ctl('Le moment', "« Je voulais vous demander » : la demande a lieu...",
    ['hier', 'maintenant'], 1,
    "L'imparfait recule la demande, pas le moment. EN: it steps the request back, not the moment."),
  ctl("L'ouverture", 'Tu arrives à un comptoir. Quelle phrase ouvre le mieux ?',
    ['Je venais pour le colis.', 'Je viens pour le colis.'], 0,
    "Je venais pour est la formule d'entrée en matière du guichet. EN: je venais pour is the counter opener."),
  ctl("L'urgence", "Il y a le feu dans la cage d'escalier. Tu dis...",
    ['Appelez les pompiers.', 'Je voulais vous demander d’appeler les pompiers.', 'Pourriez-vous appeler les pompiers.'], 0,
    "Dans l'urgence, on redescend tout en bas de l'échelle. EN: in an emergency you drop to the bottom rung."),
], ['voulais', 'echelle']);

const ACT6: ActDef = {
  act: {
    id: 'act6',
    title: 'Je voulais vous demander',
    opener: {
      line: "Trois verbes au passé, et pas un seul ne parle d'hier : ici tu apprends l'imparfait qui recule une demande. EN: Three past-tense verbs and not one of them is about yesterday: here you learn the imparfait that steps a request back.",
      imageRef: 'lessons/politesse/act06.jpg',
    },
    sections: [],
    milestone: "Tu ouvres une demande au guichet avec je voulais ou je venais, et tu sais quand redescendre. EN: You open a counter request with je voulais or je venais, and you know when to drop back down.",
    estScreens: 32,
    restPoints: ['a6-construire'],
  },
  sections: [A6_LECTURE, A6_CARTES, A6_EXEMPLES, A6_CONSTRUIRE, A6_ECOUTE, A6_PIEGE, A6_CHECK],
  imports: IMPORTED.act6,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 7 — TROIS PIÈGES ANGLOPHONES
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Three customers, three habits carried straight over from English.
 *  The server's tone never changes: the learner must not be able to tell from
 *  her voice which one landed. NO SPACED « ? » OR « ! » IN ANY BUBBLE. */
const A7_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a7-histoire',
  layer: 'core',
  title: 'Trois clients au café',
  frSub: 'Trois habitudes venues de l’anglais',
  setting: "Un café de la place Saint-Georges, à Genève, onze heures du matin. La serveuse est la même pour les trois.",
  bubbles: [
    { from: 'narrator', fr: 'Trois clients arrivent au comptoir, chacun son tour.', en: 'Three customers come to the counter, one after another.' },
    { from: 'user', fr: 'Je peux avoir un café.', en: 'Can I have a coffee.', warn: 'can I have, traduit mot à mot' },
    { from: 'coach', fr: 'Un café. Sur place ou à emporter.', en: 'One coffee. To have here or to take away.' },
    { from: 'user', fr: "Donnez-moi un café, s'il vous plaît.", en: 'Give me a coffee, please.', warn: "l'impératif, réparé par le mot magique" },
    { from: 'coach', fr: 'Un café. Sur place ou à emporter.', en: 'One coffee. To have here or to take away.' },
    { from: 'user', fr: "Excusez-moi, je suis vraiment désolé de vous déranger, je voudrais un café, désolé.", en: 'Excuse me, I am really sorry to bother you, I would like a coffee, sorry.', warn: 'trois excuses pour un café' },
    { from: 'coach', fr: 'Il y a un problème avec votre commande.', en: 'Is there a problem with your order.' },
    { from: 'narrator', fr: "Elle a servi les trois. Le troisième a dû expliquer qu'il n'y avait aucun problème.", en: 'She served all three. The third had to explain that nothing was wrong.' },
  ],
  closing: { fr: 'Aucune des trois phrases n’est fausse. Les trois disent autre chose que ce que le client croit.', en: 'None of the three is wrong. All three say something other than what the customer thinks.' },
  audio: REC('rec-b1-09-cafe'), say: REFRAME, terms: ['magique', 'echelle'],
};

/** NAME. One card per trap, plus the imperative that is genuinely yours to use. */
const A7_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a7-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-echelle',
  title: 'Trois pièges et une exception',
  frSub: 'Quatre cartes',
  hint: "Pour chaque carte, demande-toi ce que l'habitude anglaise fait au français.",
  audio: AUDIO, say: REFRAME, terms: ['magique', 'echelle'],
  cards: [
    {
      head: 'Can I have', label: 'je peux avoir',
      fr: 'Je peux avoir un café ? · Je voudrais un café, s’il vous plaît.',
      sub: '[zhuh puh ah-vwar uhⁿ kah-FAY] · [zhuh voo-dreh uhⁿ kah-fay seel voo PLEH]',
      body: "Je peux avoir existe et se dit beaucoup, surtout entre jeunes. Mais c'est bas sur l'échelle, et au guichet ou dans un restaurant sérieux, on attend un souhait. EN: it exists, it is low, and a counter usually expects a wish.",
    },
    {
      head: 'Le mot magique', label: "s'il vous plaît",
      fr: "Donnez-moi un café, s'il vous plaît. · Je voudrais un café, s'il vous plaît.",
      sub: '[doh-nay-mwah uhⁿ kah-fay seel voo PLEH] · [zhuh voo-dreh uhⁿ kah-fay seel voo PLEH]',
      body: "En anglais, please transforme souvent un ordre en demande. En français, non : l'impératif reste un impératif. C'est le verbe qu'il faut changer. EN: please does not repair the imperative; the verb has to move.",
    },
    {
      head: 'Les excuses en trop', label: 'une seule suffit',
      fr: 'Excusez-moi de vous déranger, ce sera court.',
      sub: '[ek-skü-zay-mwah duh voo day-rahⁿ-zhay suh suh-rah KOOR]',
      body: "Une excuse ouvre la demande. Trois font chercher le vrai problème derrière, et la personne devient inquiète au lieu d'être disponible. EN: one apology opens the request; three make the listener look for the real problem.",
    },
    {
      head: "Là où l'impératif est à toi", label: 'un droit, une invitation',
      fr: "Suivez-moi, s'il vous plaît. · Asseyez-vous, je vous en prie.",
      sub: '[swee-vay-mwah seel voo PLEH] · [ah-seh-yay-voo zhuh voo-zahⁿ PREE]',
      body: "Quand tu as le droit de donner l'instruction, ou quand tu offres quelque chose, l'impératif est exactement juste. EN: when the instruction is yours to give, or you are offering something, the imperative is right.",
    },
  ],
};

/** TRAP, part one. */
const A7_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a7-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre traductions trop fidèles',
  errors: [
    {
      wrong: "Donne-moi le dossier, s'il vous plaît.",
      right: 'Pourriez-vous me donner le dossier ?',
      why: "Normal : en anglais, please suffit à adoucir give me. En français, la formule s'ajoute à un ordre sans le changer, et le mélange tu-vous s'entend en plus. EN: please attaches to an order without changing it.",
    },
    {
      wrong: 'Je peux avoir un rendez-vous ?',
      right: 'Je voudrais un rendez-vous, si possible cette semaine.',
      why: "Je peux avoir marche pour un café. Pour un rendez-vous chez le médecin, il est trop bas : tu demandes un créneau, pas un objet. EN: fine for a coffee, too low for an appointment.",
    },
    {
      wrong: 'Je suis désolé, désolé, vraiment désolé de vous déranger.',
      right: 'Excusez-moi de vous déranger, ce sera court.',
      why: "Chaque excuse est correcte. Trois d'affilée annoncent une catastrophe, et la personne se prépare au pire. EN: each one is correct; three in a row announce a disaster.",
    },
    {
      wrong: "S'il vous plaît, pouvez-vous fermer la fenêtre, s'il vous plaît, merci.",
      right: 'Ça vous dérangerait de fermer la fenêtre ?',
      why: "Deux formules pour une demande ne montent pas d'un barreau : elles montrent que tu n'es pas sûr de ton droit à demander. EN: two formulas do not climb a rung; they show you doubt your right to ask.",
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['magique', 'adoucir'],
};

/** BUILD. */
const A7_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a7-construire',
  layer: 'core',
  size: 'lg',
  title: "Où l'impératif est à toi",
  groups: [
    grp('Tu as le droit de le dire', [
      it(E(1116), 'un agent à un visiteur'),
      it(E(1117), "un guide, un gardien"),
      it(E(1118), "une invitation, pas un ordre"),
      it(E(1119), "la réponse qui accompagne"),
    ], chk("Pourquoi l'impératif passe-t-il ici ?",
      ['parce que la phrase est courte', "parce que tu as le droit de donner l'instruction", "parce qu'il y a s'il vous plaît"], 1,
      "Le droit vient de ton rôle, pas de la formule. EN: the right comes from your role, not from the formula.")),
    grp('Le souhait remplace le can I have', [
      it(E(1109), 'au café, un cran au-dessus'),
      it(E(1108), 'très formel, mais correct'),
      it('fr.a1.cafe.051', 'la version standard'),
      it('fr.a2.quebec-et-francophonie.198', 'je peux avoir, dans son bon contexte'),
    ], chk("« Je peux avoir la facture » est-il faux ?",
      ['oui', 'non, mais il est bas sur l’échelle'], 1,
      "Correct et courant : simplement bas, donc à monter selon le lieu. EN: correct and common, simply low.")),
    grp('Une excuse, et une seule', [
      it(E(1112), "l'excuse plus la durée"),
      it(E(1114), 'après avoir coupé quelqu’un'),
      it(E(1113), "merci d'avance, à l'écrit"),
      it(E(1115), 'celle qui, répétée, inquiète'),
    ], chk('Combien d’excuses pour une demande de deux minutes ?',
      ['zéro', 'trois', 'une'], 2,
      "Une ouvre la demande ; trois la remplacent par une inquiétude. EN: one opens the request; three replace it with worry.")),
  ],
  audio: AUDIO, say: REFRAME, terms: ['magique', 'service'],
};

/** TRAP, stepped. */
const A7_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a7-piege',
  layer: 'core',
  swipe: true,
  title: 'Le mot magique ne répare rien',
  rule: {
    title: 'Change le verbe, pas la fin',
    body: "S'il vous plaît accompagne une demande, il ne la fabrique pas. Collé à un impératif adressé à un inconnu, il laisse l'ordre intact. EN: please accompanies a request; it does not create one.",
  },
  cards: [
    { promptLabel: "l'ordre réparé", promptSound: "Donnez-moi votre numéro, s'il vous plaît.", fr: 'Pourriez-vous me donner votre numéro ?', ipa: '/pu.ʁje.vu mə dɔ.ne vɔtʁ ny.me.ʁo/', tip: "Le verbe bouge, et la formule devient facultative. EN: the verb moves and the formula becomes optional." },
    { promptLabel: 'le can I have déplacé', promptSound: 'Je peux avoir un rendez-vous ?', fr: 'Je voudrais un rendez-vous, si possible cette semaine.', ipa: '/ʒə vu.dʁɛ œ̃ ʁɑ̃.de.vu si pɔ.sibl sɛt sə.mɛn/', tip: "Un créneau n'est pas un objet posé sur un comptoir. EN: a slot is not an object on a counter." },
    { promptLabel: 'trois excuses', promptSound: 'Désolé, désolé, vraiment désolé de vous déranger.', fr: 'Excusez-moi de vous déranger, ce sera court.', ipa: '/ɛk.sky.ze.mwa də vu de.ʁɑ̃.ʒe sə sə.ʁa kuʁ/', tip: "Une excuse, puis la durée : la personne sait tout de suite où elle va. EN: one apology, then the length." },
    { promptLabel: 'deux formules', promptSound: "S'il vous plaît, fermez la fenêtre, s'il vous plaît.", fr: 'Ça vous dérangerait de fermer la fenêtre ?', ipa: '/sa vu de.ʁɑ̃ʒ.ʁɛ də fɛʁ.me la fə.nɛtʁ/', tip: "Une seule demande, une seule forme. EN: one request, one shape." },
    { promptLabel: "l'impératif justifié", promptSound: 'Pourriez-vous avoir la gentillesse de me suivre ?', fr: "Suivez-moi, s'il vous plaît.", ipa: '/sɥi.ve.mwa sil vu plɛ/', tip: "Un gardien a le droit de le dire : monter serait bizarre. EN: a guard has the right to say it; climbing would be odd." },
    { promptLabel: "l'invitation", promptSound: 'Vous pourriez vous asseoir.', fr: 'Asseyez-vous, je vous en prie.', ipa: '/a.sɛ.je.vu ʒə vu.zɑ̃ pʁi/', tip: "Tu offres quelque chose : l'impératif est chaleureux, le conditionnel serait froid. EN: you are offering, so the imperative is the warm one." },
  ],
  drill: [
    { promptSay: 'À une inconnue, pour son numéro : « ... me donner votre numéro ? »', opts: ['Pourriez-vous', 'Donnez-moi'], correct: 0 },
    { promptSay: 'Chez le médecin : « ... un rendez-vous cette semaine. »', opts: ['Je peux avoir', 'Je voudrais'], correct: 1 },
    { promptSay: 'Tu déranges deux minutes : « ... de vous déranger, ce sera court. »', opts: ['Excusez-moi', 'Désolé, désolé, vraiment désolé'], correct: 0 },
    { promptSay: 'Tu es gardien de musée : « ... , s’il vous plaît. »', opts: ['Auriez-vous la gentillesse de me suivre', 'Suivez-moi'], correct: 1 },
    { promptSay: "Tu accueilles quelqu'un chez toi : « ... , je vous en prie. »", opts: ['Asseyez-vous', 'Vous pourriez vous asseoir'], correct: 0 },
    { promptSay: 'Au café, entre amis : « ... la carte ? »', opts: ['Auriez-vous la gentillesse de me donner', 'Je peux avoir'], correct: 1 },
    { promptSay: 'Il fait froid, à un collègue : « ... de fermer la fenêtre ? »', opts: ['Ça vous dérangerait', "S'il vous plaît, fermez la fenêtre, s'il vous plaît"], correct: 0 },
    { promptSay: 'Au guichet de la mairie : « ... un formulaire. »', opts: ['Donnez-moi', 'Je voudrais'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le verbe, pas la fin' },
    { label: 'Six cartes', kind: 'cards', title: 'Six habitudes anglaises' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six phrases justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit situations', gate: true },
  ],
  audio: REC('rec-b1-09-piege-magique'), say: REFRAME, terms: ['magique', 'echelle'],
};

const A7_HACKS: Sec<'hacks'> = {
  type: 'hacks',
  id: 'a7-hacks',
  layer: 'core',
  title: 'Trois astuces quand tu hésites',
  hacks: [
    {
      hack: "Enlève « s'il vous plaît » et relis. Si la phrase reste un ordre, la formule ne l'a jamais réparée.",
      why: "Le test isole le verbe, qui est le seul endroit où la hauteur se règle. EN: the test isolates the verb, the only place height is set.",
    },
    {
      hack: 'Compte les minutes que tu demandes. Sous une minute, reste bas ; au-delà de dix, monte et dis-le.',
      why: "Le temps est la mesure la plus facile à estimer sur le moment. EN: time is the easiest measure to judge on the spot.",
    },
    {
      hack: "Une seule excuse, au début, jamais à la fin. Si tu veux en ajouter une deuxième, remplace-la par la durée.",
      why: "La durée rassure ; la répétition inquiète. EN: a stated length reassures; repetition worries.",
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['magique', 'service'],
};

const A7_CHECK = actCheck('a7-check', 'Le point : acte 7', [
  ctl('Le test', "Tu enlèves « s'il vous plaît » et il reste un ordre. Que fais-tu ?",
    ['tu changes le verbe', 'tu remets la formule'], 0,
    "La hauteur se règle sur le verbe. EN: height is set on the verb."),
  ctl('Can I have', "« Je peux avoir un café » est...",
    ['correct mais bas', 'faux', 'trop poli'], 0,
    "Correct, courant, et bas sur l'échelle. EN: correct, common, and low."),
  ctl("L'excuse", 'Pour deux minutes de dérangement, combien d’excuses ?',
    ['trois', 'une'], 1,
    "Une, puis la durée. EN: one, then the length."),
], ['magique', 'echelle']);

const ACT7: ActDef = {
  act: {
    id: 'act7',
    title: 'Trois pièges anglophones',
    opener: {
      line: "Trois clients commandent un café et le troisième doit expliquer qu'il n'y a aucun problème : ici tu apprends pourquoi. EN: Three customers order a coffee and the third has to explain that nothing is wrong: here you learn why.",
      imageRef: 'lessons/politesse/act07.jpg',
    },
    sections: [],
    milestone: "Tu ne comptes plus sur s'il vous plaît pour réparer un ordre, et tu t'excuses une fois, pas trois. EN: You no longer rely on please to repair an order, and you apologise once, not three times.",
    estScreens: 33,
    restPoints: ['a7-erreurs'],
  },
  sections: [A7_HISTOIRE, A7_CARTES, A7_ERREURS, A7_CONSTRUIRE, A7_PIEGE, A7_HACKS, A7_CHECK],
  imports: IMPORTED.act7,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 8 — PROPOSER, INVITER
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The only recording in the lesson with no vous in it. NO SPACED
 *  « ? » OR « ! » IN ANY BUBBLE. */
const A8_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a8-histoire',
  layer: 'core',
  title: 'Le plan du samedi',
  frSub: 'Personne ne demande rien à personne',
  setting: "Jeudi soir, messages entre Amina et Théo. Il fait beau pour la première fois depuis trois semaines.",
  bubbles: [
    { from: 'user', fr: 'Et si on prenait le train de sept heures samedi.', en: 'What if we took the seven o’clock train on Saturday.', warn: 'et si on, suivi de l’imparfait' },
    { from: 'coach', fr: 'Sept heures, ça fait tôt. On pourrait partir à neuf.', en: 'Seven is early. We could leave at nine.', warn: 'on pourrait : une contre-proposition' },
    { from: 'user', fr: 'Ça te dirait de déjeuner là-bas plutôt que dans le train.', en: 'Would you fancy having lunch there rather than on the train.', warn: 'ça te dirait de, suivi de l’infinitif' },
    { from: 'coach', fr: 'Volontiers. On se voit vendredi pour préparer les sacs, si ça te va.', en: 'Gladly. See you Friday to pack, if that works for you.' },
    { from: 'user', fr: 'Ça marche. On pourrait y aller à pied depuis la gare, il fait beau.', en: 'That works. We could walk there from the station, the weather is fine.' },
    { from: 'coach', fr: 'Bonne idée. Je te confirme demain matin.', en: 'Good idea. I will confirm tomorrow morning.' },
  ],
  closing: { fr: 'Six messages, aucune demande : à chaque tour, refuser ne coûtait rien.', en: 'Six messages and no request: at every turn, refusing cost nothing.' },
  audio: REC('rec-b1-09-samedi'), say: REFRAME, terms: ['proposer', 'service'],
};

/** NAME. Four cards, and the one that takes the imparfait. */
const A8_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a8-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-conseil',
  title: 'Proposer au lieu de demander',
  frSub: 'Quatre cartes',
  hint: "Regarde qui devrait quelque chose à qui après chaque phrase.",
  audio: AUDIO, say: REFRAME, terms: ['proposer', 'moteur'],
  cards: [
    {
      head: 'On pourrait', label: 'la plus neutre',
      fr: 'On pourrait déjeuner ensemble jeudi.',
      sub: '[ohⁿ poo-reh day-zhuh-nay ahⁿ-sahⁿbl zhuh-DEE]',
      body: "L'idée est posée sur la table, pas adressée à quelqu'un. Personne ne doit rien, donc refuser ne coûte rien. EN: the idea is put on the table, not aimed at anybody.",
    },
    {
      head: 'Ça te dirait de', label: "suivi de l'infinitif",
      fr: 'Ça te dirait de venir avec nous samedi ?',
      sub: '[sah tuh dee-reh duh vuh-neer ah-vek noo sam-DEE]',
      body: "Tu demandes son envie, pas son accord. La réponse peut être « pas trop » sans que ce soit un refus. EN: you ask about their appetite, not their agreement.",
    },
    {
      head: 'Et si on', label: "suivi de l'imparfait",
      fr: 'Et si on prenait le train de sept heures ?',
      sub: '[ay see ohⁿ pruh-neh luh trehⁿ duh seh-TUHR]',
      body: "La seule des trois qui change le temps du verbe : après et si on, l'imparfait. Ce n'est pas du passé, c'est une idée essayée. EN: the only one that changes the tense, and it is not about the past.",
    },
    {
      head: 'La version vous', label: 'au bureau',
      fr: 'Ça vous dirait de passer boire un café après la réunion ? · Vous seriez libre jeudi vers midi ?',
      sub: '[sah voo dee-reh duh pah-say bwar uhⁿ kah-fay ah-preh lah ray-ü-NYOHⁿ] · [voo suh-ryay leebr zhuh-dee vehr mee-DEE]',
      body: "Les mêmes formes passent au vous sans changer de hauteur. Une invitation reste une invitation. EN: the same shapes take vous without changing height.",
    },
  ],
};

/** BUILD. */
const A8_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-construire',
  layer: 'core',
  size: 'lg',
  title: 'Ce qui suit chaque formule',
  groups: [
    grp("Et si on, puis l'imparfait", [
      it(E(1129), 'prenait'),
      it(E(1132), 'partageait'),
      it(E(1138), 'essayait'),
      it(E(1125), 'la formule seule'),
    ], chk('Après « et si on », quel temps ?',
      ["l'infinitif", "l'imparfait", 'le conditionnel'], 1,
      "L'imparfait, et il ne parle pas du passé. EN: the imparfait, and it is not about the past.")),
    grp("On pourrait, puis l'infinitif", [
      it(E(1127), 'déjeuner'),
      it(E(1131), 'se retrouver'),
      it(E(1139), 'y aller'),
      it('fr.b1.cafe.081', 'prendre, après une condition'),
    ], chk('Après « on pourrait », quel temps ?',
      ["l'infinitif", "l'imparfait"], 0,
      "Comme après tous les modaux : l'infinitif. EN: the infinitive, as after every modal.")),
    grp("Ça te dirait de, puis l'infinitif", [
      it(E(1128), 'venir'),
      it(E(1130), 'passer, avec vous'),
      it(E(1124), 'la formule avec tu'),
      it(E(1126), 'la formule avec vous'),
    ], chk("« Ça te dirait de » demande quoi exactement ?",
      ['son accord', 'son envie'], 1,
      "Tu demandes si l'idée lui plaît, pas si elle accepte. EN: you ask whether the idea appeals, not whether they agree.")),
  ],
  audio: AUDIO, say: REFRAME, terms: ['proposer'],
};

/** NAME, part two. */
const A8_EXEMPLES: Sec<'examples'> = {
  type: 'examples',
  id: 'a8-exemples',
  layer: 'core',
  title: 'Six façons de fixer un moment',
  frSub: 'Sans jamais rien imposer',
  examples: [
    ex(E(1135), 'la disponibilité, au conditionnel'),
    ex(E(1137), 'une contre-proposition, pas un refus'),
    ex(E(1136), 'la clause qui rend le non gratuit'),
    ex(E(1133), 'je te propose de, entre collègues'),
    ex(E(1134), "l'invitation la plus simple, au présent"),
    ex('fr.sons.rythme.089', "l'invitation plate, entre amis proches"),
  ],
  audio: AUDIO, say: REFRAME, terms: ['proposer', 'question'],
};

/** EAR. */
const A8_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a8-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Proposition ou demande',
  frSub: 'Huit phrases, une seule écoute',
  lines: [ln(E(1129)), ln(E(1127)), ln(E(1128)), ln(E(1137)), ln(E(1132)), ln(E(1135)), ln(E(1139)), ln(E(1136))],
  questions: [
    { q: 'Première phrase : quel temps suit « et si on » ?', opts: ["l'imparfait", "l'infinitif"], correct: 0, why: "« Et si on prenait » : imparfait. EN: et si on takes the imparfait." },
    { q: 'Deuxième phrase : qui doit quelque chose à qui ?', opts: ['celui qui écoute', 'personne'], correct: 1, why: "« On pourrait » pose l'idée sans viser personne. EN: on pourrait aims at nobody." },
    { q: 'Troisième phrase : que demande-t-on ?', opts: ['une envie', 'un accord'], correct: 0, why: "« Ça te dirait de » demande si l'idée plaît. EN: it asks whether the idea appeals." },
    { q: 'Quatrième phrase : est-ce un refus ?', opts: ['oui', 'non, une contre-proposition'], correct: 1, why: "« Ça t'irait mardi plutôt que lundi ? » propose autre chose. EN: it offers something else." },
    { q: 'Sixième phrase : tu ou vous ?', opts: ['vous', 'tu'], correct: 0, why: "« Vous seriez libre jeudi vers midi ? » EN: vous." },
    { q: 'Dernière phrase : que fait « si ça te va » ?', opts: ['il fixe la date', 'il rend le refus gratuit'], correct: 1, why: "La porte reste ouverte jusqu'au dernier mot. EN: the door stays open to the last word." },
  ],
  audio: REC('rec-b1-09-proposer-ecoute'), say: REFRAME, terms: ['proposer'],
};

/** CHOOSE. */
const A8_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a8-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Demander, ou proposer',
  groups: [
    grp('Une demande : quelqu’un te rend service', [
      it(E(1026), 'sa voiture, tout un samedi'),
      it(E(1062), 'son temps, toute une semaine'),
      it(E(1007), 'une heure de travail'),
      it(E(1083), 'un détour en voiture'),
    ], chk('Dans ces quatre phrases, qui donne et qui reçoit ?',
      ['les deux partagent', "l'autre donne, toi tu reçois"], 1,
      "C'est ce qui les rend plus lourdes qu'une proposition. EN: that is what makes them heavier than a proposal.")),
    grp('Une proposition : vous y gagnez tous les deux', [
      it(E(1127), 'un déjeuner'),
      it(E(1139), 'la marche depuis la gare'),
      it(E(1138), 'une autre boulangerie'),
      it(E(1131), 'un rendez-vous devant le cinéma'),
    ], chk('Pourquoi refuser une proposition coûte-t-il moins ?',
      ['parce que personne ne rendait service à personne', 'parce que la phrase est plus courte'], 0,
      "Rien n'était dû, donc rien n'est perdu. EN: nothing was owed, so nothing is lost.")),
    ctl('La bascule', "Tu as besoin d'un vrai service mais tu veux alléger. Que fais-tu ?",
      ['tu montes de deux barreaux', 'tu ajoutes trois excuses', 'tu transformes la demande en proposition quand vous y gagnez tous les deux'], 2,
      "Quand c'est vrai, la proposition est plus légère que n'importe quel barreau. EN: when it is true, a proposal beats any rung."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['proposer', 'service'],
};

const A8_CHECK = actCheck('a8-check', 'Le point : acte 8', [
  ctl('Le temps', 'Après « et si on », tu mets...',
    ["l'imparfait", "l'infinitif", 'le conditionnel'], 0,
    "L'imparfait, et il ne raconte pas le passé. EN: the imparfait, and it tells no story."),
  ctl("L'envie", '« Ça te dirait de » demande...',
    ['son accord', 'son envie'], 1,
    "Répondre « pas trop » n'est alors pas un refus. EN: answering pas trop is then not a refusal."),
  ctl('Le poids', 'Pourquoi une proposition pèse-t-elle moins qu’une demande ?',
    ['personne ne rend service à personne', 'elle est plus courte'], 0,
    "Rien n'est dû, donc rien n'est perdu si on dit non. EN: nothing is owed, so nothing is lost."),
], ['proposer', 'service']);

const ACT8: ActDef = {
  act: {
    id: 'act8',
    title: 'Proposer, inviter',
    opener: {
      line: "Six messages pour organiser un samedi, et pas une seule demande : ici tu apprends à demander pour deux. EN: Six messages to plan a Saturday and not one request: here you learn to ask for two.",
      imageRef: 'lessons/politesse/act08.jpg',
    },
    sections: [],
    milestone: "Tu transformes une demande en proposition quand vous y gagnez tous les deux, et tu mets le bon temps après chaque formule. EN: You turn a request into a proposal when you both gain, and you put the right tense after each formula.",
    estScreens: 32,
    restPoints: ['a8-construire'],
  },
  sections: [A8_HISTOIRE, A8_CARTES, A8_CONSTRUIRE, A8_EXEMPLES, A8_ECOUTE, A8_CHOISIR, A8_CHECK],
  imports: IMPORTED.act8,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 9 — CONSEILLER SANS COMMANDER
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. Four advisers, one problem, four distances. */
const A9_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a9-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Quatre conseils dans la même journée',
  frSub: 'Le bail de Yann',
  text: READING_CONSEIL,
  glossary: [
    { word: 'bail', en: 'lease', note: "Le contrat qui te loue un logement pour une durée fixée." },
    { word: 'un devis', en: 'a quote, an estimate', note: "Le papier qui dit combien des travaux vont coûter." },
    { word: 'lettre recommandée', en: 'registered letter', note: "Une lettre dont la poste garde la preuve d'envoi. EN: a letter the post office keeps proof of." },
  ],
  questions: [
    { q: 'Laquelle des quatre formes met le conseiller dans les chaussures de Yann ?', a: "« À ta place, je demanderais un devis écrit. » Le conseiller parle de lui, pas de Yann." },
    { q: 'Quelles formes ne visent personne ?', a: "« Il faudrait prévenir le propriétaire » et « Il vaudrait mieux garder une copie ». C'est la situation qui parle." },
    { q: 'Pourquoi Théo peut-il se permettre la forme la plus dure ?', a: "Parce qu'ils se connaissent depuis vingt ans. La distance est nulle, donc la forme dure passe." },
    { q: 'Est-ce que « tu devrais » est un ordre ?', a: "Non. C'est un avis adressé à la personne. Au présent, « tu dois », ce serait une obligation." },
  ],
  audio: REC('rec-b1-09-conseil'), say: REFRAME, terms: ['conseil', 'distance'],
};

/** NAME. */
const A9_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a9-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  title: 'Quatre distances pour un conseil',
  frSub: 'Quatre cartes',
  hint: 'Regarde qui est nommé dans chaque phrase.',
  audio: AUDIO, say: REFRAME, terms: ['conseil', 'moteur'],
  cards: [
    {
      head: 'Tu devrais', label: 'il te parle',
      fr: 'Tu devrais te reposer ce week-end.',
      sub: '[tü duh-vreh tuh ruh-poh-zay suh wee-KEND]',
      body: `« ${B108_REFRAME} » Au présent, tu dois est une obligation. Au conditionnel, c'est un avis que tu peux refuser. EN: ${B108_REFRAME_EN}`,
    },
    {
      head: 'À ta place', label: 'il parle de lui',
      fr: 'À ta place, je répondrais tout de suite.',
      sub: '[ah tah plass zhuh ray-pohⁿ-dreh too duh SWEET]',
      body: "Le conseiller se met dans tes chaussures et raconte ce que LUI ferait. Personne ne te dit quoi faire. EN: the adviser steps into your shoes and reports what he would do.",
    },
    {
      head: 'Il faudrait, il vaudrait mieux', label: 'personne n’est nommé',
      fr: 'Il faudrait appeler avant de passer. · Il vaudrait mieux garder une copie.',
      sub: '[eel foh-dreh-tah-puh-lay ah-vahⁿ duh pah-SAY] · [eel voh-dreh myuh gar-day ün koh-PEE]',
      body: "C'est la situation qui parle. Les deux sont suivis de l'infinitif ici : « il faudrait que » demande autre chose, et ce sera pour plus tard. EN: the situation speaks, and both take an infinitive here.",
    },
    {
      head: 'Tu ferais mieux de', label: 'la plus dure',
      fr: 'Tu ferais mieux de lui parler directement.',
      sub: '[tü fuh-reh myuh duh lwee par-lay dee-rek-tuh-MAHⁿ]',
      body: "Elle sous-entend que tu es en train de te tromper. Entre gens très proches, elle passe ; ailleurs, elle blesse. EN: it implies you are getting it wrong; fine between close friends, wounding elsewhere.",
    },
  ],
};

/** NAME, part two. */
const A9_TABLEAU: Sec<'tapTable'> = {
  type: 'tapTable',
  id: 'a9-tableau',
  layer: 'core',
  sheetId: 'sheet-conseil',
  title: 'Six façons de conseiller',
  cols: ['Formule', 'Qui est nommé', 'Ce qui suit'],
  rows: [
    {
      cells: ['tu devrais', 'la personne', "l'infinitif"],
      say: 'Tu devrais te reposer ce week-end.',
      detail: { title: 'tu devrais', body: "Direct mais doux : un avis, pas une obligation. C'est la forme par défaut entre gens qui se tutoient. EN: direct but soft, and the default between people on tu terms.", say: 'Tu devrais lui écrire avant vendredi.' },
    },
    {
      cells: ['vous devriez', 'la personne, avec vous', "l'infinitif"],
      say: 'Vous devriez arriver un peu en avance.',
      detail: { title: 'vous devriez', body: "La même chose au vous. Très courante d'un professionnel à un client. EN: the same thing with vous, common from a professional to a client.", say: 'Vous devriez arriver un peu en avance.' },
    },
    {
      cells: ['à ta place', 'celui qui conseille', 'je plus conditionnel'],
      say: 'À ta place, je répondrais tout de suite.',
      detail: { title: 'à ta place', body: "Suivi de je et du conditionnel, jamais d'un infinitif. Le conseiller parle de lui, ce qui rend le conseil facile à refuser. EN: followed by je and a conditional, never an infinitive.", say: 'À votre place, je demanderais un devis écrit.' },
    },
    {
      cells: ['il faudrait', 'personne', "l'infinitif"],
      say: 'Il faudrait appeler avant de passer.',
      detail: { title: 'il faudrait', body: "La situation parle. Ici toujours suivi d'un infinitif : « il faudrait que » ouvre une autre construction, réservée à plus tard. EN: always with an infinitive here.", say: 'Il faudrait peut-être changer de forfait.' },
    },
    {
      cells: ['il vaudrait mieux', 'personne', "l'infinitif"],
      say: 'Il vaudrait mieux garder une copie.',
      detail: { title: 'il vaudrait mieux', body: "Encore plus prudent : tu compares deux options sans nommer celui qui choisit. EN: more cautious still: two options compared and nobody named.", say: 'Ce serait plus prudent de garder le reçu.' },
    },
    {
      cells: ['tu ferais mieux de', 'la personne, durement', "l'infinitif"],
      say: 'Tu ferais mieux de lui parler directement.',
      detail: { title: 'tu ferais mieux de', body: "Elle dit que ce que tu fais en ce moment ne va pas. À réserver aux gens très proches. EN: it says what you are doing now is wrong.", say: 'Tu ferais mieux de lui parler directement.' },
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['conseil', 'distance'],
};

/** BUILD. */
const A9_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a9-construire',
  layer: 'core',
  size: 'lg',
  title: 'Qui est nommé dans la phrase',
  groups: [
    grp('La personne est nommée', [
      it(E(1145), 'tu devrais'),
      it(E(1149), 'vous devriez'),
      it(E(1150), 'tu ferais mieux de, la plus dure'),
      it('fr.b1.soins.006', 'la forme seule'),
    ], chk('Ces quatre conseils visent...',
      ['la situation', 'la personne'], 1,
      "Le sujet est tu ou vous : le conseil arrive droit sur elle. EN: the subject is tu or vous, so the advice lands on her.")),
    grp('Personne n’est nommé', [
      it(E(1146), 'il faudrait'),
      it(E(1147), 'il vaudrait mieux'),
      it(E(1152), 'ce serait plus prudent de'),
      it('fr.b2.ethique.005', 'on devrait : un peu plus vague encore'),
    ], chk("Pourquoi ces formes passent-elles mieux avec un inconnu ?",
      ['elles ne visent personne, donc personne ne se défend', 'elles sont plus longues'], 0,
      "Il n'y a personne à qui répondre. EN: there is nobody to answer back to.")),
    grp('Le conseiller parle de lui', [
      it(E(1144), 'à ta place, je répondrais'),
      it(E(1148), 'à votre place, je demanderais'),
      it(E(1140), 'la formule seule'),
      it(E(1154), "si j'étais toi, la variante figée"),
    ], chk('Après « à ta place », que met-on ?',
      ["l'infinitif", 'je plus le conditionnel'], 1,
      "Le conseiller dit ce que LUI ferait. EN: the adviser says what HE would do.")),
  ],
  audio: AUDIO, say: REFRAME, terms: ['conseil', 'moteur'],
};

/** TRAP. */
const A9_ERREURS: Sec<'commonErrors'> = {
  type: 'commonErrors',
  id: 'a9-erreurs',
  layer: 'core',
  swipe: true,
  size: 'lg',
  title: 'Quatre conseils qui arrivent mal',
  errors: [
    {
      wrong: 'Tu dois te reposer ce week-end.',
      right: 'Tu devrais te reposer ce week-end.',
      why: "« Tu dois » est juste dans la bouche d'un médecin. Dans celle d'un ami, il annonce une obligation que personne ne lui a donné le droit de poser. EN: right from a doctor, wrong from a friend.",
    },
    {
      wrong: 'À ta place, demander un devis écrit.',
      right: 'À ta place, je demanderais un devis écrit.',
      why: "« À ta place » appelle je et le conditionnel : c'est toute son utilité, parce que le conseiller parle de lui. EN: à ta place calls for je plus the conditional.",
    },
    {
      wrong: 'Il faudra prévenir le propriétaire.',
      right: 'Il faudrait prévenir le propriétaire.',
      why: "Au futur, tu annonces ce qui va se passer, comme un fait acquis. Au conditionnel, tu proposes. EN: the future announces a fact; the conditional proposes.",
    },
    {
      wrong: 'Tu ferais mieux de te reposer ce week-end.',
      right: 'Tu pourrais essayer de te reposer ce week-end.',
      why: "La forme dure est correcte, mais pour un simple repos elle sous-entend un reproche. Garde-la pour les gens très proches. EN: correct, but it implies a reproach for something this small.",
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['conseil', 'distance'],
};

const A9_FOCUS: Sec<'focus'> = {
  type: 'focus',
  id: 'a9-focus',
  layer: 'core',
  sheetId: 'sheet-conseil',
  title: 'Ce qui décide de la forme du conseil',
  points: [
    "Si tu connais mal la personne, ne la nomme pas : il faudrait, il vaudrait mieux. EN: if you hardly know them, name nobody.",
    "Si tu la tutoies, tu devrais est le défaut. EN: if you are on tu terms, tu devrais is the default.",
    "Si le conseil peut vexer, mets-toi à sa place et parle de toi. EN: if it might sting, speak about yourself instead.",
    "Garde tu ferais mieux de pour les gens que tu connais depuis des années. EN: keep tu ferais mieux de for people you have known for years.",
  ],
  audio: AUDIO, say: REFRAME, terms: ['conseil', 'distance'],
};

const A9_CHECK = actCheck('a9-check', 'Le point : acte 9', [
  ctl('Le sujet', 'Après « à ta place », tu mets...',
    ['je plus le conditionnel', "l'infinitif"], 0,
    "Le conseiller parle de lui. EN: the adviser speaks about himself."),
  ctl("L'inconnu", 'Avec quelqu’un que tu connais mal, quelle forme choisis-tu ?',
    ['tu ferais mieux de', 'il faudrait', 'tu dois'], 1,
    "Elle ne vise personne, donc personne ne se défend. EN: it aims at nobody."),
  ctl('La dureté', '« Tu ferais mieux de » sous-entend que...',
    ['tu as raison', 'rien de particulier', 'ce que fait la personne ne va pas'], 2,
    "C'est pour ça qu'elle est réservée aux très proches. EN: which is why it is for close friends only."),
], ['conseil', 'moteur']);

const ACT9: ActDef = {
  act: {
    id: 'act9',
    title: 'Conseiller sans commander',
    opener: {
      line: "Quatre personnes conseillent Yann le même jour, et une seule le vexerait venant d'un inconnu : ici tu apprends laquelle. EN: Four people advise Yann on the same day and only one would sting coming from a stranger: here you learn which.",
      imageRef: 'lessons/politesse/act09.jpg',
    },
    sections: [],
    milestone: "Tu choisis entre viser la personne, parler de toi ou ne nommer personne, selon ce que le conseil risque de coûter. EN: You choose between aiming at the person, speaking about yourself, or naming nobody.",
    estScreens: 33,
    restPoints: ['a9-construire'],
  },
  sections: [A9_LECTURE, A9_CARTES, A9_TABLEAU, A9_CONSTRUIRE, A9_ERREURS, A9_FOCUS, A9_CHECK],
  imports: IMPORTED.act9,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 10 — DIRE OUI, DIRE NON
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The refusal is delivered without any drop in warmth, which is the
 *  thing the learner is listening for. NO SPACED « ? » OR « ! » IN A BUBBLE. */
const A10_HISTOIRE: Sec<'story'> = {
  type: 'story',
  id: 'a10-histoire',
  layer: 'core',
  title: 'Deux réponses à la même invitation',
  frSub: 'Un oui, un non, aucune gêne',
  setting: "Jeudi midi, à la cantine du bureau. Fatou invite deux collègues à un concert samedi soir.",
  bubbles: [
    { from: 'coach', fr: 'Ça vous dirait de venir au concert samedi soir.', en: 'Would you fancy coming to the concert on Saturday evening.' },
    { from: 'user', fr: 'Oui, volontiers, merci beaucoup. À quelle heure.', en: 'Yes, gladly, thank you very much. At what time.', warn: 'accepter : trois mots suffisent' },
    { from: 'coach', fr: 'Vingt heures devant la salle. Et toi, Théo.', en: 'Eight, in front of the venue. And you, Théo.' },
    { from: 'user', fr: "C'est très gentil de me le proposer. J'aimerais bien, mais je ne suis pas libre samedi.", en: 'That is very kind of you to offer. I would love to, but I am not free on Saturday.', warn: 'remercier, puis refuser clairement' },
    { from: 'user', fr: 'Ce sera pour une autre fois, sans faute.', en: 'It will be for another time, without fail.', warn: 'la porte laissée ouverte' },
    { from: 'coach', fr: 'Je te préviens dès que je reprends des places.', en: 'I will let you know as soon as I get more tickets.' },
    { from: 'narrator', fr: "Personne n'a été gêné. Théo a dit non en trois morceaux et Fatou a compris que c'était non.", en: 'Nobody was awkward. Théo said no in three pieces and Fatou understood it was a no.' },
  ],
  closing: { fr: 'Remercier, refuser clairement, laisser une porte : enlève un morceau et ça blesse.', en: 'Thank, refuse clearly, leave a door: drop one piece and it stings.' },
  audio: REC('rec-b1-09-invitation'), say: REFRAME, terms: ['refus', 'proposer'],
};

/** NAME. */
const A10_CARTES: Sec<'cardDeck'> = {
  type: 'cardDeck',
  id: 'a10-cartes',
  render: 'deck',
  layer: 'core',
  size: 'lg',
  sheetId: 'sheet-refus',
  title: 'Accepter en trois mots, refuser en trois morceaux',
  frSub: 'Quatre cartes',
  hint: 'Compte les morceaux de chaque refus.',
  audio: AUDIO, say: REFRAME, terms: ['refus'],
  cards: [
    {
      head: 'Accepter', label: 'volontiers, avec plaisir',
      fr: 'Oui, volontiers, merci beaucoup. · Avec plaisir, à quelle heure ?',
      sub: '[wee voh-lohⁿ-tyay mer-see boh-KOO] · [ah-vek pleh-zeer ah keh-LUHR]',
      body: "Accepter est court. Une longue acceptation fait croire que tu hésites, alors que tu viens de dire oui. EN: accepting is short; a long yes sounds like hesitation.",
    },
    {
      head: 'Le refus complet', label: 'trois morceaux',
      fr: "C'est très gentil, mais je ne suis pas libre jeudi. Ce sera pour une autre fois.",
      sub: '[seh treh zhahⁿ-tee | meh zhuh nuh swee pah leebr zhuh-DEE | suh suh-rah poor ü-noh-truh FWAH]',
      body: "Tu remercies, tu refuses clairement, tu laisses une porte ouverte. Les trois morceaux, dans cet ordre. EN: thank, refuse clearly, leave a door open, in that order.",
    },
    {
      head: 'Le morceau qu’on oublie', label: 'le non lui-même',
      fr: 'Je vais réfléchir et je te redis demain.',
      sub: '[zhuh veh ray-flay-sheer ay zhuh tuh ruh-dee duh-MEHⁿ]',
      body: "Gagner du temps est utile une fois. Répété, il devient un non que personne n'ose dire, et c'est ça qui finit par blesser. EN: useful once, and repeated it becomes a no nobody dares to say.",
    },
    {
      head: 'Refuser une aide', label: 'sans vexer',
      fr: "C'est très aimable, mais je vais me débrouiller.",
      sub: '[seh treh-zeh-mabl meh zhuh veh muh day-broo-YAY]',
      body: "Refuser de l'aide vexe plus facilement qu'une invitation : le premier morceau devient obligatoire. EN: refusing help stings more easily, so the thank-you becomes compulsory.",
    },
  ],
};

/** BUILD. */
const A10_CONSTRUIRE: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-construire',
  layer: 'core',
  size: 'lg',
  title: 'Les trois morceaux du refus',
  groups: [
    grp('Remercier', [
      it(E(1161), "l'acceptation, pour comparer"),
      it(E(1163), 'merci de me le proposer'),
      it(E(1168), "c'est très aimable"),
      it(E(1170), "c'est gentil quand même, à la fin"),
    ], chk('Pourquoi remercier avant de refuser ?',
      ['pour gagner du temps', "parce que l'autre a fait un pas vers toi"], 1,
      "Il a offert quelque chose : ça se reconnaît avant de le refuser. EN: they took a step towards you; that gets acknowledged first.")),
    grp('Refuser clairement', [
      it(E(1162), "j'aimerais bien, mais"),
      it(E(1165), 'je préférerais éviter'),
      it(E(1167), 'déjà prise'),
      it(E(1172), 'je ne vais pas pouvoir'),
    ], chk('Que se passe-t-il si ce morceau manque ?',
      ["le refus est plus doux", "personne ne comprend que c'est non"], 1,
      "Un refus qu'on ne comprend pas se répète, et ça coûte plus cher. EN: a refusal nobody understands gets repeated.")),
    grp('Laisser une porte', [
      it(E(1164), 'une autre fois, sans faute'),
      it(E(1166), 'la semaine prochaine oui'),
      it(E(1169), 'je te redis demain'),
      it('fr.a2.hebergement.119', 'je vais voir ce que je peux faire'),
    ], chk('À quoi sert le troisième morceau ?',
      ["à dire que c'est la date qui ne va pas, pas la personne", 'à rallonger la phrase'], 0,
      "Tu refuses l'occasion, pas la personne. EN: you refuse the occasion, not the person.")),
  ],
  audio: AUDIO, say: REFRAME, terms: ['refus', 'souhait'],
};

/** EAR. */
const A10_ECOUTE: Sec<'listening'> = {
  type: 'listening',
  id: 'a10-ecoute',
  layer: 'core',
  hideLines: true,
  title: 'Oui, non, ou peut-être',
  frSub: 'Huit réponses, une seule écoute',
  lines: [ln(E(1160)), ln(E(1162)), ln(E(1169)), ln(E(1164)), ln(E(1168)), ln(E(1171)), ln(E(1165)), ln(E(1166))],
  questions: [
    { q: 'Première réponse : oui ou non ?', opts: ['non', 'oui'], correct: 1, why: "« Oui, volontiers, merci beaucoup. » EN: a yes." },
    { q: 'Deuxième réponse : où est le non ?', opts: ['après le mais', 'au début'], correct: 0, why: "« J'aimerais bien, MAIS je ne suis pas libre jeudi. » EN: after the mais." },
    { q: 'Troisième réponse : est-ce un non ?', opts: ['oui, clairement', 'on ne sait pas encore'], correct: 1, why: "« Je vais réfléchir » gagne du temps sans refuser. EN: it buys time without refusing." },
    { q: 'Quatrième réponse : quel morceau entends-tu ?', opts: ['la porte ouverte', 'le remerciement'], correct: 0, why: "« Ce sera pour une autre fois, sans faute. » EN: the open door." },
    { q: 'Cinquième réponse : que refuse-t-on ?', opts: ['une invitation', 'une aide'], correct: 1, why: "« Je vais me débrouiller » refuse un coup de main. EN: it refuses a helping hand." },
    { q: 'Dernière réponse : la porte est-elle fermée ?', opts: ['non, une date est proposée', 'oui'], correct: 0, why: "« mais la semaine prochaine oui » donne la suite. EN: it names the next slot." },
  ],
  audio: REC('rec-b1-09-refus-ecoute'), say: REFRAME, terms: ['refus'],
};

/** CHOOSE. */
const A10_CHOISIR: Sec<'groupDrill'> = {
  type: 'groupDrill',
  id: 'a10-choisir',
  layer: 'core',
  size: 'lg',
  title: 'Trois morceaux, ou deux',
  groups: [
    grp('Un refus complet', [
      it(E(1162), 'remercier implicitement, refuser, ouvrir'),
      it(E(1163), 'les trois, version formelle'),
      it(E(1164), 'le troisième morceau seul'),
      it(E(1166), 'refus plus date'),
    ], chk('Combien de morceaux au minimum pour refuser une invitation ?',
      ['trois', 'un', 'deux'], 0,
      "Remercier, refuser, ouvrir. EN: thank, refuse, open.")),
    grp('Au comptoir, deux suffisent', [
      it('fr.a2.courses.196', 'je regarde seulement, merci'),
      it('fr.a2.courses.198', 'je vais réfléchir, merci'),
      it(E(1170), 'non, merci, sans porte à ouvrir'),
      it('fr.a1.salutations.053', 'la version courte du oui'),
    ], chk("Pourquoi pas de porte ouverte dans un magasin ?",
      ['par manque de temps', "parce qu'il n'y a pas de relation à préserver"], 1,
      "Le vendeur ne t'a pas invité : il a proposé son aide. EN: the shopkeeper did not invite you; he offered help.")),
    ctl('Le non caché', "« Je vais réfléchir » dit trois fois à la même personne finit par...",
      ['adoucir le refus', 'blesser plus qu’un non net', 'être poli'], 1,
      "Elle attend, puis comprend que c'était non depuis le début. EN: she waits, then realises it was a no all along."),
  ],
  audio: AUDIO, say: REFRAME, terms: ['refus', 'distance'],
};

/** TRAP, stepped. */
const A10_PIEGE: Sec<'trapDrill'> = {
  type: 'trapDrill',
  id: 'a10-piege',
  layer: 'core',
  swipe: true,
  title: 'Le refus qui ne se comprend pas',
  rule: {
    title: 'Le morceau du milieu est obligatoire',
    body: "Un refus sans le mot qui refuse n'est pas un refus : c'est une attente. La personne revient, et le non arrive plus tard et plus sec. EN: a refusal without the refusing word is a wait, not a no.",
  },
  cards: [
    { promptLabel: 'le non qui manque', promptSound: 'Je vais réfléchir, on verra, peut-être.', fr: "J'aimerais bien, mais je ne suis pas libre jeudi.", ipa: '/ʒɛ.mə.ʁɛ bjɛ̃ mɛ ʒə nə sɥi pa libʁ ʒø.di/', tip: "Le mais et la raison : voilà le non. EN: the mais and the reason are the no." },
    { promptLabel: 'le merci qui manque', promptSound: 'Non, je ne peux pas.', fr: 'Merci de me le proposer, malheureusement je ne peux pas.', ipa: '/mɛʁ.si də mə lə pʁɔ.po.ze ma.lø.ʁø.zə.mɑ̃ ʒə nə pø pa/', tip: "L'autre a fait un pas : ça se reconnaît. EN: they took a step; that gets acknowledged." },
    { promptLabel: 'la porte qui manque', promptSound: 'Désolée, je suis déjà prise ce soir.', fr: 'Je ne peux pas cette semaine, mais la semaine prochaine oui.', ipa: '/ʒə nə pø pa sɛt sə.mɛn mɛ la sə.mɛn pʁɔ.ʃɛn wi/', tip: "Sans la suite, tu as l'air de refuser la personne. EN: without the follow-up you seem to refuse the person." },
    { promptLabel: 'refuser une aide', promptSound: 'Non, ça va.', fr: "C'est très aimable, mais je vais me débrouiller.", ipa: '/sɛ tʁɛ.zɛ.mabl mɛ ʒə vɛ mə de.bʁu.je/', tip: "Refuser de l'aide vexe vite : le merci devient obligatoire. EN: refusing help stings fast." },
    { promptLabel: 'accepter trop longuement', promptSound: "C'est vraiment très gentil, je ne sais pas quoi dire, si ça ne vous dérange pas, alors oui.", fr: 'Oui, volontiers, merci beaucoup.', ipa: '/wi vɔ.lɔ̃.tje mɛʁ.si bo.ku/', tip: "Un oui long ressemble à une hésitation. EN: a long yes sounds like hesitation." },
    { promptLabel: 'au magasin', promptSound: "C'est très gentil, mais je ne peux pas, ce sera pour une autre fois.", fr: 'Je regarde seulement, merci.', ipa: '/ʒə ʁə.ɡaʁd sœl.mɑ̃ mɛʁ.si/', tip: "Pas de relation à préserver : deux morceaux suffisent. EN: no relationship to protect, so two pieces are enough." },
  ],
  drill: [
    { promptSay: 'Une invitation à un concert, tu ne peux pas : « ... , mais je ne suis pas libre. »', opts: ["J'aimerais bien", 'Je vais réfléchir'], correct: 0 },
    { promptSay: 'Un collègue te propose son aide, tu refuses : « ... , mais je vais me débrouiller. »', opts: ['Non', "C'est très aimable"], correct: 1 },
    { promptSay: "Tu refuses ce soir mais pas la suite : « Je ne peux pas cette semaine, ... . »", opts: ['mais la semaine prochaine oui', 'voilà'], correct: 0 },
    { promptSay: 'On te propose un café, tu acceptes : « ... , merci beaucoup. »', opts: ["C'est vraiment très gentil, je ne sais pas quoi dire", 'Oui, volontiers'], correct: 1 },
    { promptSay: 'Dans un magasin, un vendeur approche : « ... , merci. »', opts: ['Je regarde seulement', "C'est très gentil, mais ce sera pour une autre fois"], correct: 0 },
    { promptSay: "Tu as vraiment besoin de temps pour décider : « ... et je te redis demain. »", opts: ['Non', 'Je vais réfléchir'], correct: 1 },
    { promptSay: 'Tu as déjà dit « je vais réfléchir » deux fois : « ... , je ne vais pas pouvoir. »', opts: ['Je suis vraiment désolé', 'Je vais réfléchir encore'], correct: 0 },
    { promptSay: 'Une invitation que tu acceptes avec joie : « ... , à quelle heure ? »', opts: ['Je vais voir', 'Avec plaisir'], correct: 1 },
  ],
  steps: [
    { label: 'La règle', kind: 'rule', title: 'Le morceau du milieu' },
    { label: 'Six cartes', kind: 'cards', title: 'Ce qui manque à chaque fois' },
    { label: 'Écoute', kind: 'audio', title: 'Écoute les six réponses justes' },
    { label: 'À toi', kind: 'drill', title: 'Huit réponses', gate: true },
  ],
  audio: REC('rec-b1-09-piege-refus'), say: REFRAME, terms: ['refus', 'souhait'],
};

const A10_CHECK = actCheck('a10-check', 'Le point : acte 10', [
  ctl('Les morceaux', 'Un refus poli entre amis en compte...',
    ['un', 'deux', 'trois'], 2,
    "Remercier, refuser, ouvrir. EN: thank, refuse, open."),
  ctl('Le milieu', 'Quel morceau ne peut jamais manquer ?',
    ['le non lui-même', 'le remerciement', 'la porte ouverte'], 0,
    "Sans lui, personne ne sait que c'est non. EN: without it nobody knows it is a no."),
  ctl('La longueur', 'Accepter une invitation demande...',
    ['trois mots', 'trois phrases'], 0,
    "Volontiers, merci beaucoup. EN: gladly, thank you very much."),
], ['refus', 'proposer']);

const ACT10: ActDef = {
  act: {
    id: 'act10',
    title: 'Dire oui, dire non',
    opener: {
      line: "Deux collègues répondent à la même invitation, l'un oui et l'autre non, et personne n'est gêné : ici tu apprends comment. EN: Two colleagues answer the same invitation, one yes and one no, and nobody is awkward: here you learn how.",
      imageRef: 'lessons/politesse/act10.jpg',
    },
    sections: [],
    milestone: "Tu refuses en trois morceaux, sans jamais laisser croire que la réponse pourrait encore devenir oui. EN: You refuse in three pieces, never letting anybody think the answer might still turn into a yes.",
    estScreens: 34,
    restPoints: ['a10-construire'],
  },
  sections: [A10_HISTOIRE, A10_CARTES, A10_CONSTRUIRE, A10_ECOUTE, A10_CHOISIR, A10_PIEGE, A10_CHECK],
  imports: IMPORTED.act10,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  ACT 11 — QUATRE COMPTOIRS, UN COURRIEL
 * ══════════════════════════════════════════════════════════════════════════ */

/** MEET. The model the learner imitates in the task. */
const A11_LECTURE: Sec<'reading'> = {
  type: 'reading',
  id: 'a11-lecture',
  layer: 'core',
  questionsInModal: true,
  title: 'Le courriel de relance',
  frSub: 'Le modèle que tu vas imiter',
  text: READING_COURRIEL,
  glossary: [
    { word: 'relancer', en: 'to follow up, to chase', note: "Écrire une deuxième fois parce qu'on n'a pas eu de réponse. EN: writing again because no answer came." },
    { word: 'les originaux', en: 'the originals', note: "Les vrais papiers, pas les photocopies." },
    { word: 'joignable', en: 'reachable', note: "On peut te téléphoner ou t'écrire. EN: you can be contacted." },
  ],
  questions: [
    { q: "Quelles sont les quatre parties du message ?", a: "Pourquoi j'écris, ce que je demande, ce que je préférerais, et ce que je propose. Chacune tient en un paragraphe." },
    { q: "Pourquoi « je me permets de » plutôt que « je vous relance » ?", a: "Parce qu'il dit que la personne sait qu'elle insiste, et qu'elle insiste quand même. C'est la formule écrite de la relance." },
    { q: "Où est la demande principale, et sous quelle forme ?", a: "« Pourriez-vous me confirmer la date de l'entretien ? » L'inversion, parce que c'est un courriel à une inconnue." },
    { q: "Qu'est-ce qu'Amina propose, et pourquoi ?", a: "De passer déposer le dossier elle-même. Elle offre du travail au lieu d'en demander, ce qui allège tout le message." },
  ],
  audio: REC('rec-b1-09-courriel'), say: REFRAME, terms: ['echelle', 'adoucir'],
};

const A11_PLAN: Sec<'steps'> = {
  type: 'steps',
  id: 'a11-plan',
  layer: 'core',
  sheetId: 'sheet-echelle',
  title: 'Cinq étapes avant d’écrire',
  frSub: 'Le plan du message',
  steps: [
    "Mesure : combien de temps tu demandes, et à qui tu écris. EN: measure the time you are asking for, and who you are writing to.",
    "Dis pourquoi tu écris, en une phrase, au présent. EN: say why you are writing, in one sentence, in the present.",
    "Pose la demande principale, une seule, avec pourriez-vous ou auriez-vous. EN: put one main request, with pourriez-vous or auriez-vous.",
    "Ajoute ce que tu préfères avec je préférerais, et un seul adoucisseur. EN: add your preference, with one softener only.",
    "Termine par ce que tu proposes, toi, puis remercie une fois. EN: end with what you are offering, then thank once.",
  ],
  audio: AUDIO, say: REFRAME, terms: ['echelle', 'adoucir'],
};

const A11_CAS: Sec<'useCases'> = {
  type: 'useCases',
  id: 'a11-cas',
  layer: 'core',
  title: 'Les quatre comptoirs',
  cases: [
    { situation: 'À la boulangerie', fr: 'Bonjour, je voudrais un renseignement sur les horaires.', en: 'Hello, I would like some information about the opening times.' },
    { situation: 'Au guichet administratif', fr: 'Bonjour madame, je venais pour le rendez-vous de quinze heures.', en: "Hello madam, I was coming for the three o'clock appointment." },
    { situation: 'À un collègue, au bureau', fr: 'Excusez-moi, vous auriez une minute ?', en: 'Excuse me, would you have a minute?' },
    { situation: 'À un ami, par message', fr: 'Salut, tu pourrais me dire si tu viens samedi ?', en: 'Hi, could you tell me whether you are coming on Saturday?' },
  ],
  audio: AUDIO, say: REFRAME, terms: ['echelle', 'distance'],
};

const A11_SCENARIO: Sec<'scenario'> = {
  type: 'scenario',
  id: 'a11-scenario',
  layer: 'core',
  title: 'Au téléphone avec le secrétariat',
  frSub: 'Six tours, à voix haute',
  setting: "Tu appelles le secrétariat d'une école de langues à Bruxelles pour ton dossier d'inscription. Madame Diallo décroche.",
  turns: [
    {
      ai: "École des langues, bonjour.", en: 'Language school, good morning.',
      user: 'Bonjour madame, je voulais vous demander un renseignement sur mon dossier.',
      userEn: 'Hello madam, I wanted to ask you something about my file. (The politeness imparfait, act 6.)',
      alts: [
        { fr: "Bonjour madame, j'appelais au sujet de mon dossier d'inscription.", en: 'Hello madam, I was calling about my registration file.' },
        { fr: 'Bonjour madame, je voudrais un renseignement sur mon dossier.', en: 'Hello madam, I would like some information about my file. (A wish instead of the imparfait: also right.)' },
      ],
    },
    {
      ai: "Votre nom, s'il vous plaît.", en: 'Your name, please.',
      user: 'Cherif, C, H, E, R, I, F. Je vous épelle le prénom aussi.',
      userEn: 'Cherif, C, H, E, R, I, F. I will spell the first name as well.',
      alts: [
        { fr: 'Cherif. Pourriez-vous vérifier si le dossier est complet ?', en: 'Cherif. Could you check whether the file is complete?' },
        { fr: "Cherif. Je peux vous l'épeler si vous voulez.", en: 'Cherif. I can spell it for you if you like. (An offer rather than a request: also right.)' },
      ],
    },
    {
      ai: "Il manque une pièce. Il faudrait nous envoyer une copie de votre diplôme.", en: 'One document is missing. You would need to send us a copy of your diploma.',
      user: 'Est-ce que ce serait possible de le déposer directement au bureau ?',
      userEn: 'Would it be possible to drop it off at the office directly? (Impersonal: nobody has to refuse you.)',
      alts: [
        { fr: 'Pourrais-je le déposer directement au bureau ?', en: 'Could I drop it off at the office directly?' },
        { fr: 'Je pourrais aussi le déposer directement, si ça vous arrange.', en: 'I could also drop it off directly, if that suits you. (An offer, which is lighter still.)' },
      ],
    },
    {
      ai: "Oui, entre neuf heures et midi. Vous pouvez venir demain.", en: 'Yes, between nine and noon. You can come tomorrow.',
      user: 'Dans la mesure du possible, je préférerais vendredi matin.',
      userEn: 'As far as possible, I would prefer Friday morning. (A preference, with one softener.)',
      alts: [
        { fr: 'Vendredi matin, ce serait possible ?', en: 'Would Friday morning be possible?' },
        { fr: 'Demain, ce sera difficile. Vendredi matin me conviendrait mieux.', en: 'Tomorrow will be difficult. Friday morning would suit me better. (Refusing the slot before proposing another.)' },
      ],
    },
    {
      ai: "Vendredi, c'est fermé. Nous ouvrons le samedi matin en revanche.", en: 'Friday we are closed. We do open on Saturday morning though.',
      user: "J'aimerais bien, mais je travaille le samedi. Je passerai donc demain.",
      userEn: 'I would love to, but I work on Saturdays. So I will come tomorrow. (Refuse clearly, then settle.)',
      alts: [
        { fr: 'Le samedi, je ne peux pas. Je viendrai demain matin alors.', en: 'Saturday I cannot. I will come tomorrow morning then.' },
        { fr: 'Ce sera plus simple demain, finalement. Merci de la proposition.', en: 'It will be simpler tomorrow after all. Thank you for the offer. (Thanking the offer you are turning down.)' },
      ],
    },
    {
      ai: "Très bien. Demain matin, avec votre convocation.", en: 'Very good. Tomorrow morning, with your appointment letter.',
      user: "Je vous remercie d'avance. Auriez-vous une adresse courriel, au cas où ?",
      userEn: 'Thank you in advance. Would you have an email address, just in case? (One thank-you, then one last small request.)',
      alts: [
        { fr: "Merci beaucoup. Je vous laisse mon numéro, au cas où.", en: 'Thank you very much. I will leave you my number, just in case.' },
        { fr: 'Merci de votre aide. À demain matin, alors.', en: 'Thank you for your help. See you tomorrow morning, then.' },
      ],
    },
  ],
  audio: AUDIO, say: REFRAME, terms: ['echelle', 'voulais', 'refus'],
};

/** THE GRADED TASK. Written, 110 to 150 words, `skill: 'PE'`. */
const A11_MISSION: TaskSection = {
  type: 'task',
  id: 'a11-mission',
  title: 'Écris ta demande',
  frSub: 'Mission écrite',
  brief: "Tu as besoin de quelque chose et tu dois l'écrire. Choisis une des deux situations. Un : tu écris à une personne que tu ne connais pas, dans une école, une mairie ou une entreprise, pour demander un rendez-vous ou une information, et tu relances parce que personne n'a répondu. Deux : tu écris à un collègue que tu tutoies pour lui demander une heure de son temps cette semaine. Dans les deux cas, mesure d'abord ce que tu demandes et à qui, puis écris.",
  briefEn: 'Choose one: a written request to a stranger at an institution, or a message to a colleague you are on tu terms with asking for an hour of their time. Measure the favour and the distance first, then write.',
  produce: "Écris un message de 110 à 150 mots. Il doit contenir : une phrase qui dit pourquoi tu écris, UNE demande principale au barreau juste, un souhait ou une préférence, UN seul adoucisseur, quelque chose que tu proposes toi, et une formule de fin. Pas plus d'une excuse dans tout le message.",
  responseSpec: { kind: 'text', minWords: 110, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'barreau',
        label: 'Le bon barreau pour la bonne personne',
        maxPoints: 4,
        descriptors: [
          "4 : La demande principale est exactement à la hauteur que la situation appelle. Un inconnu reçoit pourriez-vous ou auriez-vous ; un collègue tutoyé reçoit tu pourrais ou est-ce que tu pourrais. Rien n'est ni trop sec ni trop lourd.",
          "3 : La demande principale est à la bonne hauteur, mais une phrase secondaire est un cran trop bas ou trop haut.",
          "2 : La hauteur est tenue par endroits et perdue ailleurs : un impératif reste debout, ou une formule très lourde arrive chez quelqu'un de proche.",
          "1 : Le message est écrit à une seule hauteur, sans rapport avec la personne ni avec le service demandé.",
        ],
      },
      {
        key: 'formes',
        label: 'Des formes justes',
        maxPoints: 3,
        descriptors: [
          "3 : Le conditionnel, l'inversion et l'imparfait de politesse sont corrects partout. Après il faudrait vient un infinitif ; après à ta place viennent je et le conditionnel.",
          "2 : Une ou deux formes sont fausses, mais la demande reste claire.",
          "1 : Les formes polies sont amorcées puis abandonnées, ou construites au hasard.",
        ],
      },
      {
        key: 'message',
        label: 'Un message qui se suit',
        maxPoints: 3,
        descriptors: [
          "3 : Les cinq morceaux sont là et dans l'ordre : pourquoi j'écris, la demande, la préférence, ce que je propose, la formule de fin. UNE demande principale, pas trois.",
          "2 : Les morceaux sont là mais mélangés, ou deux demandes se disputent la place principale.",
          "1 : Le lecteur doit chercher ce qu'on lui demande.",
        ],
      },
      {
        key: 'dose',
        label: 'La bonne dose',
        maxPoints: 2,
        descriptors: [
          "2 : Un seul adoucisseur, une seule excuse au maximum, un seul remerciement. La longueur est dans les bornes.",
          "1 : Les adoucisseurs, les excuses ou les remerciements s'empilent, ou la longueur sort des bornes.",
        ],
      },
    ],
  },
  scaffold: ['Je vous écris au sujet de', 'Je me permets de', 'Pourriez-vous', 'Je voudrais également', 'Dans la mesure du possible', 'Si cela ne vous dérange pas', 'Je pourrais aussi', "Je vous remercie d'avance", 'Bien cordialement'],
  modelAnswer: "Bonjour Madame Lambert,\n\nJe vous écris au sujet de ma demande de rendez-vous du douze mars. Je me permets de vous relancer, car je n'ai pas encore eu de réponse et mon dossier doit partir avant la fin du mois.\n\nPourriez-vous me dire si un créneau reste libre la semaine prochaine ? Je voudrais également savoir s'il faut apporter les originaux de mes diplômes, ou si une simple copie suffit. Dans la mesure du possible, je préférerais le matin, mais je m'adapterai à vos disponibilités.\n\nSi cela vous arrange, je pourrais aussi passer déposer les documents directement au bureau, ce qui vous éviterait de me rappeler. Dites-moi simplement ce qui vous convient le mieux.\n\nJe vous remercie d'avance de votre réponse et je reste joignable toute la semaine.\n\nBien cordialement,\nKarim Benali",
  modelAnswerEn: "Hello Mrs Lambert, I am writing about my appointment request of the twelfth of March. I am taking the liberty of following up, as I have had no reply and my file has to go before the end of the month. Could you tell me whether a slot is still free next week? I would also like to know whether I need to bring the originals of my diplomas, or whether a copy will do. As far as possible I would prefer the morning, but I will fit around you. If it suits you, I could also come and drop the documents off at the office, which would save you calling me back. Just tell me what works best for you. Thank you in advance for your reply, and I am reachable all week. Kind regards, Karim Benali",
  watchFor: [
    { pattern: 'An imperative addressed to a stranger, with or without a trailing please (envoyez-moi le formulaire, donnez-moi un rendez-vous).', criterion: 'barreau', feedback: "Enlève « s'il vous plaît » et relis : il reste un ordre. C'est le verbe qu'il faut changer, pas la fin de la phrase.", ref: 'a7-piege' },
    { pattern: 'The heaviest formula (auriez-vous la gentillesse de, je vous prie de bien vouloir) used on a colleague the writer is on tu terms with.', criterion: 'barreau', feedback: "Trop haut se remarque autant que trop bas. Avec un collègue que tu tutoies, est-ce que tu pourrais suffit largement.", ref: 'a1-barreaux' },
    { pattern: 'je veux used to open the request at a counter or in a letter, where the decision is not the message.', criterion: 'barreau', feedback: "Je veux ferme la porte avant que l'autre ait pu répondre. Ouvre avec je voudrais ou j'aimerais.", ref: 'a3-cartes' },
    { pattern: 'The present of pouvoir, vouloir, devoir or falloir where the sentence is asking, wishing or advising (vous pouvez me confirmer, il faut vérifier).', criterion: 'formes', feedback: "Au présent, ta phrase suppose la réponse. Passe au conditionnel : vous pourriez, il faudrait.", ref: 'a2-erreurs' },
    { pattern: 'A wrong continuation after a fixed formula: à ta place plus infinitive, il faudrait plus conjugated verb, et si on plus infinitive.', criterion: 'formes', feedback: "Chaque formule appelle une suite fixe : à ta place + je et le conditionnel, il faudrait + infinitif, et si on + imparfait.", ref: 'a9-tableau' },
    { pattern: 'Three or more softeners stacked in one sentence (juste, si possible, par hasard, peut-être together).', criterion: 'dose', feedback: "Un seul adoucisseur suffit, deux si le service est gros. Trois font chercher le vrai problème derrière.", ref: 'a5-choisir' },
    { pattern: 'Repeated apologies: more than one désolé or excusez-moi in the message.', criterion: 'dose', feedback: "Une excuse ouvre la demande, trois annoncent une catastrophe. Remplace la deuxième par la durée : ce sera court.", ref: 'a7-hacks' },
    { pattern: 'Three or four separate requests competing for the main slot, so the reader cannot tell what is actually being asked.', criterion: 'message', feedback: "Une demande principale, et une seule. Les autres deviennent des questions secondaires ou attendent un autre message.", ref: 'a11-plan' },
    { pattern: 'No reason given for writing: the message opens directly on the request.', criterion: 'message', feedback: "Commence par une phrase qui dit pourquoi tu écris. Le lecteur a besoin de situer la demande avant de la lire.", ref: 'a11-lecture' },
    { pattern: 'Nothing offered in return: the whole message asks and proposes nothing.', criterion: 'message', feedback: "Propose quelque chose, toi : passer déposer, rappeler, attendre. Ça allège tout le message d'un coup.", ref: 'a8-choisir' },
    { pattern: 'A refusal of an offered slot with no clear no in it (je vais voir, on verra, peut-être).', criterion: 'message', feedback: "Si tu refuses un créneau, dis-le clairement, puis propose la suite. Sans le non, on te le reproposera.", ref: 'a10-construire' },
    { pattern: 'The politeness imparfait used for something genuinely past, or the present used to open at a counter (je viens pour, je veux vous demander).', criterion: 'formes', feedback: "Je venais pour et je voulais vous demander ouvrent une demande qui a lieu maintenant. Garde-les pour l'ouverture.", ref: 'a6-piege' },
  ],
  graderNotes: [
    'Judge the RUNG by the situation the learner chose, not by an absolute scale. A message to a tutoyed colleague scoring full marks will look far less formal than one to an institution, and that is correct.',
    'Word count EXCLUDES the greeting line and the sign-off (Paul, 2026-09-22). Count the body only, with 10% tolerance before criterion « dose » loses its point.',
    'The writer’s gender is unknown: judge past-participle and adjective agreement for internal consistency only.',
    'Do NOT score si clauses either way. « si possible », « si cela ne vous dérange pas » and « si ça vous arrange » are taught here as fixed softeners; the si system belongs to the next lesson.',
    'Do NOT score « il faudrait que » plus subjunctive as an error, in either direction. The subjunctive is not taught until later; accept it if it is correct and do not require it.',
    'Accept regional usage: courriel and e-mail and mail, magasiner in Québec, and the Belgian and Swiss number words.',
    'Accept « Je peux avoir » only in a message to a friend. In a written request to an institution it costs a point on « barreau ».',
    'A message that is entirely correct but written at one single height throughout scores at most 2 on « barreau », even with no grammatical error anywhere.',
    'Feedback language: simple French (B1), addressed as « tu », with one short English gloss allowed per comment.',
  ],
};

/** The join between the lesson and the drills. Every id carries `voiceflash`. */
const A11_PARLER: Sec<'practice'> = {
  type: 'practice',
  id: 'a11-parler',
  layer: 'core',
  title: 'Dis tes demandes à voix haute',
  frSub: 'Le barreau juste, sans réfléchir',
  skill: 'speak',
  itemIds: [
    ...ALL_ROWS.filter((r) => (r.drills as string[]).includes('voiceflash')).map((r) => r.id),
    'fr.a2.au-restaurant.133',
  ],
  audio: AUDIO, say: REFRAME, terms: ['echelle', 'moteur'],
};

const A11_CHEAT: Sec<'cheatSheet'> = {
  type: 'cheatSheet',
  id: 'a11-cheat',
  layer: 'core',
  sheetId: 'sheet-echelle',
  title: 'Toute la leçon sur un écran',
  rows: [
    { k: "l'échelle", v: 'six barreaux, du plus sec au plus lourd', say: 'Est-ce que tu pourrais relire mon rapport avant ce soir ?', detail: { title: "L'échelle", body: "Donne-moi, tu peux, tu pourrais, est-ce que tu pourrais, pourrais-tu, auriez-vous la gentillesse de. EN: six rungs, bottom to top.", say: 'Pourriez-vous vérifier mon dossier, madame ?' } },
    { k: 'la mesure', v: 'le coût du service, et la distance', say: 'Ce serait un grand service.', detail: { title: 'La mesure', body: "Combien de temps, de peine ou de risque tu demandes, et qui est en face. EN: how much you are asking for, and who you are asking.", say: "Dis-moi si c'est trop, je trouverai quelqu'un d'autre." } },
    { k: 'le moteur', v: 'pouvoir, vouloir, devoir, avoir, falloir', say: 'Vous auriez un stylo, par hasard ?', detail: { title: 'Le moteur', body: "Pouvoir demande, vouloir souhaite, devoir conseille, avoir cherche, falloir ne vise personne. EN: five verbs, five jobs.", say: 'Il faudrait prévenir la gardienne.' } },
    { k: 'les adoucisseurs', v: 'un seul, deux si le service est gros', say: 'Je voudrais juste une signature, si possible.', detail: { title: 'Les adoucisseurs', body: "par hasard et si possible à la fin, juste et un peu devant le mot, peut-être après le verbe. EN: where each one goes.", say: 'Tu aurais un chargeur, par hasard ?' } },
    { k: 'je voulais', v: "l'imparfait qui ouvre une demande d'aujourd'hui", say: 'Je voulais vous demander un renseignement.', detail: { title: 'je voulais', body: "je voulais vous demander, je venais pour, je me demandais si. La demande est maintenant. EN: the request is now.", say: 'Je venais pour le colis de la semaine dernière.' } },
    { k: 'dire non', v: 'remercier, refuser clairement, ouvrir une porte', say: "J'aimerais bien, mais je ne suis pas libre jeudi.", detail: { title: 'Dire non', body: "Enlève le morceau du milieu et personne ne comprend que c'est non. EN: drop the middle piece and nobody knows it is a no.", say: 'Ce sera pour une autre fois, sans faute.' } },
  ],
  audio: AUDIO, say: REFRAME, terms: ['echelle', 'adoucir', 'refus'],
};

const A11_PROGRES: Sec<'progressCheck'> = {
  type: 'progressCheck',
  id: 'a11-progres',
  layer: 'core',
  title: 'Où tu en es',
  body: "Tu mesures avant de parler, tu choisis ton barreau, tu adoucis d'un seul mot, tu ouvres une demande au guichet avec je voulais, tu proposes au lieu de demander quand vous y gagnez tous les deux, tu conseilles sans commander et tu refuses en trois morceaux. Ce qui reste fragile, c'est la mesure elle-même : sous pression, tout le monde retombe sur la formule qu'il connaît le mieux. Avant l'examen, reprends ton message et souligne chaque demande. Pour chacune, écris à côté deux choses : combien de minutes tu demandes, et depuis quand tu connais la personne. Si une demande ne peut pas répondre à ces deux questions, c'est celle-là qu'il faut réécrire. EN: Underline every request in your message and write next to it how many minutes you are asking for and how long you have known the person; the one that cannot answer both is the one to rewrite.",
  stats: [
    { k: "L'échelle", v: 'six barreaux, deux mauvais bouts' },
    { k: 'La mesure', v: 'le coût du service, et la distance' },
    { k: 'Le moteur', v: 'pouvoir, vouloir, devoir, avoir, falloir' },
    { k: 'Les pièges', v: 'can I have, le mot magique, les excuses en trop' },
  ],
  audio: AUDIO,
  say: REFRAME,
};

/* ── THE QUIZ ──────────────────────────────────────────────────────────────
 *  ONE quiz (the renderer shows only one), ELEVEN rounds of eight, one per
 *  act. Each round's target is a distinct errorTrigger, so a failed round
 *  fires that round's own drill.
 *
 *  `fold()` strips commas, accents and apostrophes, so no answer depends on
 *  one. Every typeIn and errorSpot carries `prompt`, every listenChoose
 *  carries `say`. Correct-answer slots are scattered by hand. */

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
      id: 'r1-echelle', label: "L'échelle", targets: ['barreau-bas'],
      questions: [
        mc("Qu'est-ce qui décide de la hauteur de ta phrase ?", ['la longueur de la phrase', 'ta gentillesse', 'le coût du service et la distance'], 2, "Deux mesures, et aucune des deux n'est ton caractère. EN: two measures, neither of them your character.", 'a1-scene'),
        mc("« Auriez-vous la gentillesse de me passer le sel » dit à ton frère est...", ['froid ou moqueur', 'plus poli'], 0, "Le barreau du haut sur un proche crée une distance que personne n'a demandée. EN: the top rung on somebody close creates unasked-for distance.", 'a1-barreaux'),
        mc('Tu demandes une heure de travail à un collègue. Tu prends...', ['donne-moi', 'tu peux', 'est-ce que tu pourrais'], 2, "Une heure coûte cher : on monte. EN: an hour costs a lot, so you climb.", 'a1-lecture'),
        mc("« Passe-moi le pain, s'il te plaît » à ta sœur est...", ['exactement juste', 'impoli'], 0, "Service minuscule, distance nulle. EN: tiny favour, no distance.", 'a1-echelle'),
        tI('Monte cette demande d’un barreau, avec est-ce que.', 'Tu pourrais relire mon rapport ?', 'Est-ce que tu pourrais relire mon rapport ?', "Est-ce que ajoute un pas de distance. EN: est-ce que adds a step.", 'a1-barreaux'),
        tI('Réécris cette phrase pour un guichet, avec vous et l’inversion.', 'Tu peux vérifier mon dossier ?', 'Pourriez-vous vérifier mon dossier ?', "Guichet, inconnue : l'inversion avec vous. EN: counter, stranger, inversion with vous.", 'a1-cas'),
        eS('Auriez-vous la gentillesse de me passer le sel, maman ?', 'Passe-moi le sel, maman.', "Le barreau du haut sur sa mère devient une blague ou une distance. EN: the top rung on your mother becomes a joke.", 'a1-check'),
        lC('Écoute. Le service demandé est-il petit ou gros ?', 'Tu pourrais relire mon rapport avant ce soir ?', ['petit', 'gros'], 1, "Trente pages avant ce soir : c'est une heure de travail. EN: thirty pages tonight is an hour of work.", 'a1-echelle'),
      ],
    },
    {
      id: 'r2-moteur', label: 'Le moteur', targets: ['present-brut'],
      questions: [
        mc('Tu veux conseiller un ami. Quel verbe prends-tu ?', ['avoir', 'pouvoir', 'devoir'], 2, "Devoir au conditionnel : tu devrais. EN: devoir in the conditional.", 'a2-moteur'),
        mc('Quelle forme ne vise personne ?', ['tu ferais mieux de', 'tu devrais', 'il faudrait'], 2, "Il faudrait ne nomme personne. EN: il faudrait names nobody.", 'a2-construire'),
        mc('« Ça vous dérangerait de » demande d’abord...', ['le droit de demander', 'le service'], 0, "La permission vient avant la demande. EN: permission comes before the request.", 'a2-choisir'),
        tI('Passe au conditionnel.', 'Vous pouvez me confirmer la date ?', 'Vous pourriez me confirmer la date ?', "Le présent suppose que la réponse est oui. EN: the present assumes the answer is yes.", 'a2-exemples'),
        tI('Passe au conditionnel.', 'Il faut prévenir la gardienne.', 'Il faudrait prévenir la gardienne.', "Il faut est une règle ; il faudrait est une idée. EN: il faut is a rule, il faudrait an idea.", 'a2-erreurs'),
        tI('Passe au conditionnel.', 'Vous avez un stylo, par hasard ?', 'Vous auriez un stylo, par hasard ?', "Vous avez suppose que oui, vous auriez ne suppose rien. EN: vous avez assumes yes.", 'a2-choisir'),
        eS('Tu dois te reposer ce week-end.', 'Tu devrais te reposer ce week-end.', "Entre amis, tu dois pose une obligation que personne ne t'a autorisé à poser. EN: tu dois hands out an obligation.", 'a2-erreurs'),
        lC("Écoute. Ce verbe demande un service, ou donne un conseil ?", 'Tu pourrais me prêter ta voiture samedi ?', ['il donne un conseil', 'il demande un service'], 1, "Pouvoir demande. EN: pouvoir asks.", 'a2-histoire'),
      ],
    },
    {
      id: 'r3-souhait', label: 'Le souhait', targets: ['je-veux'],
      questions: [
        mc("Quelle ouverture peux-tu dire dix fois par jour sans te tromper ?", ['je souhaiterais', 'je veux', 'je voudrais'], 2, "Je voudrais est la formule par défaut du comptoir. EN: the default counter formula.", 'a3-tableau'),
        mc("Où « je veux » est-il exactement le bon mot ?", ["quand tu écris", 'quand tu commandes un café', 'quand tu annonces une position ou tu refuses'], 2, "Là, la décision EST le message. EN: there, the decision is the message.", 'a3-cartes'),
        mc('« Je préférerais » suppose que...', ['tu es pressé', 'tu écris', "on t'a déjà proposé autre chose"], 2, "Sans deuxième possibilité, la phrase sonne bizarre. EN: without a second option it sounds odd.", 'a3-tableau'),
        mc("Pourquoi la vendeuse prévient-elle le deuxième client et pas le premier ?", ['sa phrase laissait une place à la réponse', 'il est plus sympathique'], 0, "Je voudrais ouvre la porte ; je veux la ferme. EN: je voudrais opens the door.", 'a3-lecture'),
        tI('Ouvre cette commande avec un souhait.', 'Je veux deux baguettes.', 'Je voudrais deux baguettes.', "Le souhait laisse la vendeuse répondre. EN: the wish lets the seller answer.", 'a3-cartes'),
        tI('Refuse clairement, au présent.', 'Je ne voudrais pas de sucre, merci.', 'Je ne veux pas de sucre, merci.', "Un refus net reste au présent. EN: a clean refusal stays in the present.", 'a3-piege'),
        eS('Je veux un renseignement sur les horaires.', 'Je voudrais un renseignement sur les horaires.', "Au guichet, tu demandes : tu ne décides pas. EN: at a counter you are asking, not deciding.", 'a3-construire'),
        lC('Écoute. Cette phrase laisse-t-elle une place à la réponse ?', 'Je veux ce poste et je le dirai clairement.', ['oui', 'non'], 1, "C'est une position annoncée, et c'est là que je veux est juste. EN: a stated position, where je veux belongs.", 'a3-ecoute'),
      ],
    },
    {
      id: 'r4-question', label: 'La question', targets: ['forme-plate'],
      questions: [
        mc('Avec vous, à un guichet, la forme ordinaire est...', ['est-ce que', 'la forme plate', "l'inversion"], 2, "Pourriez-vous, auriez-vous : personne ne les trouve lourdes. EN: nobody finds them heavy.", 'a4-cartes'),
        mc('« Est-ce que » sert ici à...', ['ajouter un pas de distance', 'rendre la phrase interrogative'], 0, "La question existait déjà sans lui. EN: the question already existed without it.", 'a4-construire'),
        mc("Entre amis, pour un service de deux secondes, la forme plate est...", ["réservée à l'écrit", 'trop familière', 'la bonne'], 2, "Personne ne met est-ce que pour faire passer le sel. EN: nobody adds est-ce que to pass the salt.", 'a4-choisir'),
        tI("Monte cette demande à l'inversion, avec vous.", 'Vous pouvez me confirmer la date ?', 'Pourriez-vous me confirmer la date ?', "Courriel à une inconnue : l'inversion. EN: email to a stranger, inversion.", 'a4-piege'),
        tI("Ajoute est-ce que pour un service d'une semaine.", 'Tu pourrais garder mon chat cette semaine ?', 'Est-ce que tu pourrais garder mon chat cette semaine ?', "Le service est gros, même entre amis. EN: the favour is big, even between friends.", 'a4-construire'),
        tI('Redescends à la forme plate, entre amis.', 'Pourrais-tu me passer le sel ?', 'Tu peux me passer le sel ?', "Le sel est à trente centimètres. EN: the salt is thirty centimetres away.", 'a4-piege'),
        eS('Auriez-vous la gentillesse de parler un peu plus fort ?', 'Vous pourriez parler un peu plus fort ?', "Le barreau du haut pour un volume de voix passe pour de l'ironie. EN: the top rung for a volume request reads as irony.", 'a4-piege'),
        lC('Écoute. Tu ou vous ?', 'Voudriez-vous patienter deux minutes ?', ['tu', 'vous'], 1, "Voudriez-vous : inversion et vous. EN: inversion and vous.", 'a4-ecoute'),
      ],
    },
    {
      id: 'r5-adoucir', label: 'Les adoucisseurs', targets: ['adoucisseurs-empiles'],
      questions: [
        mc('Où se met « par hasard » ?', ['à la fin', 'au début'], 0, "Toujours en dernier. EN: always last.", 'a5-tableau'),
        mc('Que change « juste » dans une demande ?', ['le temps', 'le verbe', 'la taille du service'], 2, "Le verbe ne bouge pas. EN: the verb does not move.", 'a5-construire'),
        mc('Combien d’adoucisseurs pour une demande ordinaire ?', ['deux', 'trois', 'un'], 2, "Un seul, deux si le service est gros. EN: one, or two for a big favour.", 'a5-choisir'),
        mc("Trois adoucisseurs dans une phrase donnent l'impression que...", ['tu es très poli', 'tu caches quelque chose'], 1, "Le lecteur cherche le vrai problème derrière. EN: the reader looks for the real problem.", 'a5-erreurs'),
        tI('Mets « par hasard » à sa place.', 'Par hasard, tu aurais un chargeur ?', 'Tu aurais un chargeur, par hasard ?', "Par hasard vit à la fin de la phrase. EN: par hasard lives at the end.", 'a5-erreurs'),
        tI('Mets « peut-être » à sa place.', 'Tu peut-être pourrais appeler avant midi.', 'Tu pourrais peut-être appeler avant midi.', "Peut-être suit le verbe conjugué. EN: peut-être follows the conjugated verb.", 'a5-tableau'),
        eS('Ça vous dérange de fermer la fenêtre ?', 'Ça vous dérangerait de fermer la fenêtre ?', "Au présent, tu demandes si la personne est déjà gênée. EN: the present asks whether they are already annoyed.", 'a5-erreurs'),
        lC('Écoute. Combien d’adoucisseurs entends-tu ?', 'Je voudrais juste une signature, si possible.', ['trois', 'un', 'deux'], 2, "juste, puis si possible : deux, pour un papier officiel. EN: juste then si possible, two of them.", 'a5-choisir'),
      ],
    },
    {
      id: 'r6-voulais', label: 'Je voulais', targets: ['imparfait-manquant'],
      questions: [
        mc("« Je voulais vous demander » : la demande a lieu...", ['maintenant', 'hier'], 0, "L'imparfait recule la demande, pas le moment. EN: it steps the request back, not the moment.", 'a6-cartes'),
        mc("Il y a le feu dans la cage d'escalier. Tu dis...", ['Pourriez-vous appeler les pompiers.', "Je voulais vous demander d'appeler les pompiers.", 'Appelez les pompiers.'], 2, "Dans l'urgence, on redescend tout en bas. EN: in an emergency you drop to the bottom rung.", 'a6-piege'),
        mc('Quelle phrase ouvre le mieux au comptoir ?', ['Je viens pour le colis.', 'Je venais pour le colis.'], 1, "Je venais pour est la formule d'entrée en matière du guichet. EN: the counter opener.", 'a6-check'),
        tI("Ouvre cette demande à l'imparfait de politesse.", 'Je veux vous demander un renseignement.', 'Je voulais vous demander un renseignement.', "Deux lettres, et la demande recule d'un pas. EN: two letters and the request steps back.", 'a6-construire'),
        tI("Ouvre cet appel à l'imparfait.", "J'appelle au sujet de la facture de mars.", "J'appelais au sujet de la facture de mars.", "Standard au téléphone, dès la première seconde. EN: standard on the phone, from the first second.", 'a6-piege'),
        tI('Recule les deux moitiés de la phrase.', 'Je me demande si vous avez une place.', 'Je me demandais si vous auriez une place.', "Imparfait, puis conditionnel : la demande la plus légère. EN: imparfait then conditional.", 'a6-cartes'),
        eS('Je viens pour le rendez-vous de quinze heures.', 'Je venais pour le rendez-vous de quinze heures.', "Tu es déjà là : venais n'a rien à voir avec hier. EN: you are already there.", 'a6-exemples'),
        lC('Écoute. Cette phrase demande-t-elle un service ?', 'Je voulais vous prévenir que je serai en retard.', ['non, elle annonce', 'oui'], 0, "La même ouverture sert à annoncer. EN: the same opening announces.", 'a6-ecoute'),
      ],
    },
    {
      id: 'r7-magique', label: 'Le mot magique', targets: ['mot-magique'],
      questions: [
        mc("Tu enlèves « s'il vous plaît » et il reste un ordre. Que fais-tu ?", ['tu remets la formule', 'tu changes le verbe'], 1, "La hauteur se règle sur le verbe. EN: height is set on the verb.", 'a7-piege'),
        mc('« Je peux avoir un café » est...', ['trop poli', 'faux', 'correct mais bas'], 2, "Correct, courant, et bas sur l'échelle. EN: correct, common, and low.", 'a7-cartes'),
        mc('Pour deux minutes de dérangement, combien d’excuses ?', ['une', 'trois'], 0, "Une, puis la durée. EN: one, then the length.", 'a7-hacks'),
        mc("Tu es gardien de musée et tu guides un groupe. Tu dis...", ['Auriez-vous la gentillesse de me suivre ?', "Suivez-moi, s'il vous plaît."], 1, "Tu as le droit de donner l'instruction : l'impératif est juste. EN: the instruction is yours to give.", 'a7-construire'),
        tI("Change le verbe plutôt que la formule.", "Donnez-moi votre numéro, s'il vous plaît.", 'Pourriez-vous me donner votre numéro ?', "Le mot magique ne répare pas un impératif. EN: the magic word does not repair an imperative.", 'a7-piege'),
        tI('Monte cette demande pour un rendez-vous médical.', 'Je peux avoir un rendez-vous ?', 'Je voudrais un rendez-vous.', "Un créneau n'est pas un objet posé sur un comptoir. EN: a slot is not an object on a counter.", 'a7-erreurs'),
        eS('Je suis désolé, désolé, vraiment désolé de vous déranger.', 'Excusez-moi de vous déranger, ce sera court.', "Trois excuses annoncent une catastrophe. EN: three apologies announce a disaster.", 'a7-histoire'),
        lC("Écoute. Cette phrase est-elle une invitation ou un ordre ?", 'Asseyez-vous, je vous en prie.', ['une invitation', 'un ordre'], 0, "Tu offres quelque chose : l'impératif est chaleureux. EN: you are offering, so the imperative is warm.", 'a7-cartes'),
      ],
    },
    {
      id: 'r8-proposer', label: 'Proposer', targets: ['proposition-en-demande'],
      questions: [
        mc('Après « et si on », tu mets...', ['le conditionnel', "l'infinitif", "l'imparfait"], 2, "L'imparfait, et il ne raconte pas le passé. EN: the imparfait, and it tells no story.", 'a8-cartes'),
        mc('« Ça te dirait de » demande...', ['son accord', 'son envie'], 1, "Répondre « pas trop » n'est alors pas un refus. EN: answering pas trop is not a refusal.", 'a8-construire'),
        mc('Pourquoi une proposition pèse-t-elle moins qu’une demande ?', ['personne ne rend service à personne', 'elle est plus courte'], 0, "Rien n'est dû, donc rien n'est perdu. EN: nothing is owed, so nothing is lost.", 'a8-choisir'),
        tI("Transforme cette demande en proposition.", 'Tu peux venir avec nous samedi ?', 'Ça te dirait de venir avec nous samedi ?', "Tu demandes son envie, pas son accord. EN: you ask about appetite, not agreement.", 'a8-cartes'),
        tI("Complète avec le bon temps après et si on.", 'Et si on (prendre) le train de sept heures ?', 'Et si on prenait le train de sept heures ?', "Après et si on : l'imparfait. EN: et si on takes the imparfait.", 'a8-construire'),
        tI("Complète avec le bon temps après on pourrait.", 'On pourrait (déjeuner) ensemble jeudi.', 'On pourrait déjeuner ensemble jeudi.', "Après un modal : l'infinitif. EN: the infinitive after a modal.", 'a8-ecoute'),
        eS('Et si on prendrait le train de sept heures ?', 'Et si on prenait le train de sept heures ?', "Et si on appelle l'imparfait, jamais le conditionnel. EN: et si on calls for the imparfait.", 'a8-cartes'),
        lC('Écoute. Est-ce un refus ?', "Ça t'irait mardi plutôt que lundi ?", ['oui', 'non, une contre-proposition'], 1, "Elle propose autre chose. EN: it offers something else.", 'a8-exemples'),
      ],
    },
    {
      id: 'r9-conseil', label: 'Le conseil', targets: ['conseil-ordre'],
      questions: [
        mc('Après « à ta place », tu mets...', ['je plus le conditionnel', "l'infinitif"], 0, "Le conseiller parle de lui. EN: the adviser speaks about himself.", 'a9-tableau'),
        mc('Avec quelqu’un que tu connais mal, quelle forme choisis-tu ?', ['tu dois', 'tu ferais mieux de', 'il faudrait'], 2, "Elle ne vise personne, donc personne ne se défend. EN: it aims at nobody.", 'a9-focus'),
        mc('« Tu ferais mieux de » sous-entend que...', ['tu as raison', 'ce que fait la personne ne va pas', 'rien de particulier'], 1, "C'est pour ça qu'elle est réservée aux très proches. EN: which is why it is for close friends only.", 'a9-cartes'),
        mc("Pourquoi Théo peut-il se permettre la forme la plus dure ?", ['ils se connaissent depuis vingt ans', 'il est plus âgé'], 0, "La distance est nulle, donc la forme dure passe. EN: no distance, so the hard form lands.", 'a9-lecture'),
        tI('Passe ce conseil au conditionnel.', 'Tu dois te reposer ce week-end.', 'Tu devrais te reposer ce week-end.', "Un ami donne un avis, pas une obligation. EN: a friend gives an opinion, not an obligation.", 'a9-erreurs'),
        tI("Complète correctement après à ta place.", 'À ta place, je (demander) un devis écrit.', 'À ta place, je demanderais un devis écrit.', "À ta place appelle je et le conditionnel. EN: à ta place calls for je plus the conditional.", 'a9-construire'),
        eS('Il faudra prévenir le propriétaire.', 'Il faudrait prévenir le propriétaire.', "Au futur, tu annonces un fait ; au conditionnel, tu proposes. EN: the future announces, the conditional proposes.", 'a9-erreurs'),
        lC('Écoute. Qui est nommé dans cette phrase ?', 'Il vaudrait mieux garder une copie.', ['la personne', 'personne'], 1, "C'est la situation qui parle. EN: the situation speaks.", 'a9-tableau'),
      ],
    },
    {
      id: 'r10-refus', label: 'Dire non', targets: ['refus-flou'],
      questions: [
        mc('Un refus poli entre amis compte...', ['trois morceaux', 'un morceau', 'deux morceaux'], 0, "Remercier, refuser, ouvrir. EN: thank, refuse, open.", 'a10-cartes'),
        mc('Quel morceau ne peut jamais manquer ?', ['le remerciement', 'le non lui-même', 'la porte ouverte'], 1, "Sans lui, personne ne sait que c'est non. EN: without it nobody knows it is a no.", 'a10-construire'),
        mc('Accepter une invitation demande...', ['trois mots', 'trois phrases'], 0, "Volontiers, merci beaucoup. EN: gladly, thank you very much.", 'a10-cartes'),
        tI('Ajoute le morceau qui manque : le non.', "C'est très gentil de me le proposer.", "C'est très gentil de me le proposer, mais je ne peux pas.", "Sans le non, la personne attend encore. EN: without the no, they are still waiting.", 'a10-piege'),
        tI('Ajoute la porte ouverte.', 'Je ne peux pas cette semaine.', 'Je ne peux pas cette semaine, mais la semaine prochaine oui.', "Tu refuses l'occasion, pas la personne. EN: you refuse the occasion, not the person.", 'a10-construire'),
        tI('Refuse une aide sans vexer.', 'Non, ça va.', "C'est très aimable, mais je vais me débrouiller.", "Refuser de l'aide vexe vite : le merci devient obligatoire. EN: refusing help stings fast.", 'a10-piege'),
        eS("C'est vraiment très gentil, je ne sais pas quoi dire, alors oui.", 'Oui, volontiers, merci beaucoup.', "Un oui long ressemble à une hésitation. EN: a long yes sounds like hesitation.", 'a10-piege'),
        lC('Écoute. La porte est-elle fermée ?', 'Ce sera pour une autre fois, sans faute.', ['oui', 'non'], 1, "C'est exactement le troisième morceau. EN: that is the third piece.", 'a10-ecoute'),
      ],
    },
    {
      id: 'r11-ecrire', label: 'Par écrit', targets: ['ecrit-plat'],
      questions: [
        mc('Combien de demandes principales dans un message ?', ['une', 'deux', 'autant que nécessaire'], 0, "Une seule. Les autres deviennent secondaires ou attendent. EN: one only.", 'a11-plan'),
        mc("Par quoi commence un message de demande ?", ['par la demande', "par une phrase qui dit pourquoi tu écris"], 1, "Le lecteur situe avant de lire la demande. EN: the reader places it before reading it.", 'a11-lecture'),
        mc("« Je me permets de » sert à...", ['relancer quelqu’un sans le presser', 'remercier', 'ouvrir une demande'], 0, "Tu dis que tu sais que tu insistes. EN: you say you know you are pressing.", 'a11-lecture'),
        tI("Ouvre un courriel à une inconnue.", 'Je vous parle de ma demande du trois mars.', 'Je vous écris au sujet de ma demande du trois mars.', "La formule d'ouverture du courriel. EN: the email opening formula.", 'a11-cheat'),
        tI("Adoucis cette préférence, à l'écrit.", 'Je préférerais le matin.', 'Dans la mesure du possible, je préférerais le matin.', "Un seul adoucisseur, en tête de phrase. EN: one softener, at the front.", 'a11-plan'),
        tI("Remercie une fois et une seule, à l'écrit.", 'Merci, merci beaucoup, merci encore de votre réponse.', "Je vous remercie d'avance de votre réponse.", "Un remerciement suffit. EN: one thank-you is enough.", 'a11-cas'),
        eS("Envoyez-moi le formulaire, s'il vous plaît.", 'Pourriez-vous me transmettre le formulaire ?', "Le mot magique ne répare pas l'impératif dans un courriel non plus. EN: the magic word fails in an email too.", 'a11-lecture'),
        lC('Écoute. À qui cette phrase est-elle adressée ?', 'Salut, tu pourrais me dire si tu viens samedi ?', ['à une inconnue', 'à un ami'], 1, "Salut et tu : le quatrième comptoir. EN: salut and tu, the fourth counter.", 'a11-cas'),
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
    { front: "l'échelle", back: 'six barreaux, du plus sec au plus lourd', say: 'Est-ce que tu pourrais relire mon rapport avant ce soir ?' },
    { front: 'la mesure', back: 'le coût du service, et la distance', say: 'Ce serait un grand service.' },
    { front: 'le moteur', back: 'pouvoir, vouloir, devoir, avoir, falloir', say: 'Vous auriez un stylo, par hasard ?' },
    { front: 'le souhait', back: "je voudrais, j'aimerais, je préférerais", say: 'Je voudrais deux baguettes et un pain complet.' },
    { front: 'la question', back: 'plat, est-ce que, inversion', say: 'Pourriez-vous me confirmer la date ?' },
    { front: "l'adoucisseur", back: 'par hasard, si possible, juste, un peu, peut-être', say: 'Tu aurais un chargeur, par hasard ?' },
    { front: 'je voulais', back: "l'imparfait qui ouvre une demande d'aujourd'hui", say: 'Je voulais vous demander un renseignement.' },
    { front: 'proposer', back: 'on pourrait, ça te dirait de, et si on', say: 'Et si on prenait le train de sept heures ?' },
    { front: 'le conseil', back: 'tu devrais, à ta place, il faudrait', say: 'À ta place, je répondrais tout de suite.' },
    { front: 'le refus', back: 'remercier, refuser clairement, ouvrir une porte', say: "J'aimerais bien, mais je ne suis pas libre jeudi." },
  ],
  audio: AUDIO,
  say: REFRAME,
};

const A11_BILAN: Sec<'roundup'> = {
  type: 'roundup',
  id: 'a11-bilan',
  layer: 'core',
  title: 'Demander poliment, en résumé',
  body: `${REFRAME} Tu avais déjà le conditionnel et l'imparfait ; tu sais maintenant à quelle hauteur les poser, quel verbe prendre, quel petit mot ajouter et comment refuser sans blesser. La prochaine leçon prend le mot que celle-ci a laissé de côté, si, et en fait un système complet. EN: Next lesson takes the word this one left alone, si, and builds the whole system out of it.`,
  points: [
    "Deux mesures décident du barreau : ce que tu demandes, et à qui.",
    "L'échelle a deux mauvais bouts : trop bas arrive comme un ordre, trop haut met une distance.",
    "Cinq verbes portent presque tout : pouvoir, vouloir, devoir, avoir, falloir.",
    "Un adoucisseur, une excuse, un remerciement : au-delà, ça se retourne contre toi.",
  ],
  audio: AUDIO,
  say: REFRAME,
  terms: ['echelle', 'service', 'adoucir'],
};

const ACT11: ActDef = {
  act: {
    id: 'act11',
    title: 'Quatre comptoirs, un courriel',
    opener: {
      line: "La boulangerie, le guichet, le collègue, l'ami : quatre comptoirs, et le même message à écrire. EN: The bakery, the counter, the colleague, the friend: four counters, and the same message to write.",
      imageRef: 'lessons/politesse/act11.jpg',
    },
    sections: [],
    milestone: "Tu écris une demande complète à la hauteur juste, et tu sais dire laquelle des quatre situations tu es en train de traiter. EN: You write a complete request at the right height, and you can name which of the four settings you are in.",
    estScreens: 130,
    restPoints: ['a11-plan', 'a11-cas', 'a11-scenario', 'a11-parler', 'a11-cheat', 'a11-progres', 'a11-review'],
  },
  sections: [A11_LECTURE, A11_PLAN, A11_CAS, A11_SCENARIO, A11_MISSION, A11_PARLER, A11_CHEAT, A11_PROGRES, A11_QUIZ, A11_REVIEW, A11_BILAN],
  imports: IMPORTED.act11,
};


/* ══════════════════════════════════════════════════════════════════════════
 *  REFERENCE SHEETS
 *
 *  `layer: 'deep'`, `render: 'sheet'`, and only `teach` and `table` inside
 *  (ReferenceSheet.tsx draws nothing else, and a `table` at layer core is
 *  refused by validateDensity). Every sheet is reachable from a mission
 *  through `sheetId`.
 * ══════════════════════════════════════════════════════════════════════════ */

const sheet = (id: string, title: string, contains: string[], sections: LessonSection[]): ReferenceSheet => ({ id, title, layer: 'deep', contains, sections });
const teach = (id: string, title: string, body: string): LessonSection => ({ type: 'teach', id, layer: 'deep', render: 'sheet', title, body });
const table = (id: string, title: string, cols: string[], rows: string[][]): LessonSection => ({ type: 'table', id, layer: 'deep', render: 'sheet', title, cols, rows });

const SHEET_LIST: ReferenceSheet[] = [
  sheet('sheet-echelle', "L'échelle des demandes", ['les six barreaux', 'ce qui choisit le barreau', 'les quatre comptoirs'], [
    teach('sheet-echelle-teach', 'Deux questions, une hauteur',
      `${REFRAME} Avant de parler, pose-toi deux questions : combien de temps, de peine ou de risque je demande, et qui est en face de moi. Un petit service à quelqu'un de proche reste tout en bas, même si tu es la personne la plus aimable du bureau. Un gros service à un inconnu monte, même si tu le demandes en souriant. L'échelle a deux mauvais bouts : trop bas, ta phrase arrive comme une consigne ; trop haut, elle met une distance que personne n'avait demandée. EN: ${REFRAME_EN} Ask how much you are asking for and how far away the person is; the ladder is wrong at both ends.`),
    table('sheet-echelle-table', 'Les six barreaux', ['Barreau', 'Forme', 'Où il est juste'], [
      ['1', 'Donne-moi le dossier.', 'proche, service minuscule, souvent avec s’il te plaît'],
      ['2', 'Tu peux me donner le dossier ?', 'proche ou collègue, service de quelques secondes'],
      ['3', 'Tu pourrais me donner le dossier ?', 'un vrai service, quelqu’un que tu connais'],
      ['4', 'Est-ce que tu pourrais me donner le dossier ?', 'un vrai service, un peu plus de distance'],
      ['5', 'Pourriez-vous me donner le dossier ?', 'guichet, inconnu, écrit'],
      ['6', 'Auriez-vous la gentillesse de me donner le dossier ?', 'écrit officiel, réclamation, très rare à l’oral'],
    ]),
    table('sheet-echelle-comptoirs', 'Quatre comptoirs', ['Situation', 'Barreau habituel', 'Exemple'], [
      ['la boulangerie, le café', '2 ou 3, avec je voudrais', 'Bonjour, je voudrais deux baguettes.'],
      ['le guichet administratif', '5, avec vous', 'Pourriez-vous vérifier mon dossier, madame ?'],
      ['un collègue', '3 ou 4, selon le service', 'Est-ce que tu pourrais relire mon rapport ?'],
      ['un ami, la famille', '1 ou 2', "Passe-moi le pain, s'il te plaît."],
      ['un courriel à un inconnu', '5, parfois 6', 'Pourriez-vous me confirmer la date ?'],
      ['une réclamation écrite', '6', 'Je vous prie de bien vouloir examiner ma demande.'],
    ]),
  ]),

  sheet('sheet-moteur', 'Les cinq verbes de la demande', ['pouvoir, vouloir, devoir', 'avoir et falloir', 'quel verbe fait quoi'], [
    teach('sheet-moteur-teach', 'Cinq verbes portent presque tout',
      `Pouvoir demande, vouloir souhaite, devoir conseille, avoir cherche une chose ou un moment, falloir dit ce qui manque sans viser personne. Au conditionnel, les cinq deviennent les formes que tu entends toute la journée en français. « ${B108_REFRAME} » La formation vient de ${COND_REF} et n'est pas rachetée ici. EN: five verbs in the conditional carry nearly every polite sentence; the formation belongs to the previous lesson.`),
    table('sheet-moteur-table', 'Les formes utiles', ['Verbe', 'je / tu', 'vous', 'Ce qu’il fait'], [
      ['pouvoir', 'je pourrais, tu pourrais', 'vous pourriez', 'demander un service'],
      ['vouloir', 'je voudrais', 'vous voudriez', 'dire un souhait'],
      ['devoir', 'je devrais, tu devrais', 'vous devriez', 'conseiller'],
      ['avoir', "j'aurais, tu aurais", 'vous auriez', 'chercher une chose, un moment'],
      ['falloir', 'il faudrait', 'il faudrait', 'dire ce qui manque, sans viser personne'],
      ['valoir', 'il vaudrait mieux', 'il vaudrait mieux', 'conseiller sans viser personne'],
    ]),
    table('sheet-moteur-paires', 'Présent ou conditionnel', ['Présent', 'Conditionnel', 'Ce qui change'], [
      ['je veux', 'je voudrais', 'une décision devient un souhait'],
      ['tu peux', 'tu pourrais', 'un service devient une demande'],
      ['tu dois', 'tu devrais', 'un ordre devient un conseil'],
      ['il faut', 'il faudrait', 'une obligation devient une idée'],
      ['vous avez', 'vous auriez', 'un constat devient une question'],
      ['ça vous dérange', 'ça vous dérangerait', "un reproche devient une permission demandée"],
    ]),
  ]),

  sheet('sheet-adoucisseurs', 'Les adoucisseurs', ['les petits mots', 'les formules', 'où ils se placent'], [
    teach('sheet-adoucisseurs-teach', 'Ils rétrécissent le service, pas le verbe',
      "Par hasard, si possible, juste, un peu, peut-être : ces mots ne changent pas la forme du verbe. Ils changent la taille de ce que tu demandes, ou bien ils disent tout haut que tu sais qu'on peut refuser. Deux formules vont plus loin : ça vous dérangerait de demande la permission de demander, et je me permets de s'écrit dans un courriel quand tu relances quelqu'un. Un seul adoucisseur par phrase suffit ; trois d'affilée donnent l'impression que tu caches quelque chose. EN: one softener per sentence is enough; three in a row sound as though you are hiding something."),
    table('sheet-adoucisseurs-table', 'Où ils se placent', ['Adoucisseur', 'Place', 'Exemple'], [
      ['par hasard', 'à la fin', 'Tu aurais un chargeur, par hasard ?'],
      ['si possible', 'à la fin', 'Je voudrais juste une signature, si possible.'],
      ['juste', 'devant le verbe ou le nom', 'Je voudrais juste vérifier une chose.'],
      ['un peu', 'devant le mot adouci', 'Vous pourriez parler un peu plus fort ?'],
      ['peut-être', 'après le verbe conjugué', 'Tu pourrais peut-être appeler avant midi.'],
      ['ça vous dérangerait de', 'au début, suivi de l’infinitif', 'Ça vous dérangerait de fermer la fenêtre ?'],
    ]),
  ]),

  sheet('sheet-conseil', 'Conseiller et proposer', ['les quatre conseils', 'les trois propositions', 'ce qui suit chaque formule'], [
    teach('sheet-conseil-teach', 'Quatre distances pour un seul conseil',
      "Tu devrais s'adresse à la personne. À ta place met le conseiller dans ses chaussures et rend le conseil plus doux, parce qu'il parle de lui. Il faudrait et il vaudrait mieux ne visent personne : c'est la situation qui parle, et c'est la forme la plus prudente avec quelqu'un que tu connais peu. Tu ferais mieux de est la plus dure, réservée aux gens très proches. Pour proposer, on pourrait, ça te dirait de et et si on transforment la demande en idée commune : refuser ne coûte alors plus rien. EN: four distances for advice, three shapes for a proposal, and the proposal makes refusing free."),
    table('sheet-conseil-table', 'Conseiller', ['Formule', 'Ce qui suit', 'Distance'], [
      ['tu devrais, vous devriez', "l'infinitif", 'direct, mais doux'],
      ['à ta place, à votre place', 'je + conditionnel', 'doux : tu parles de toi'],
      ['il faudrait', "l'infinitif", 'personne n’est visé'],
      ['il vaudrait mieux', "l'infinitif", 'personne n’est visé, plus prudent encore'],
      ['tu ferais mieux de', "l'infinitif", 'dur : entre gens très proches'],
      ['tu pourrais essayer de', "l'infinitif", 'le plus doux des six'],
    ]),
    table('sheet-conseil-proposer', 'Proposer et inviter', ['Formule', 'Ce qui suit', 'Exemple'], [
      ['on pourrait', "l'infinitif", 'On pourrait déjeuner ensemble jeudi.'],
      ['ça te dirait de', "l'infinitif", 'Ça te dirait de venir avec nous samedi ?'],
      ['et si on', "l'imparfait", 'Et si on prenait le train de sept heures ?'],
      ['vous seriez libre', 'un moment', 'Vous seriez libre jeudi vers midi ?'],
      ['je te propose de', "l'infinitif", 'Je te propose de le faire ensemble lundi.'],
      ['ça t’irait', 'un moment', 'Ça t’irait mardi plutôt que lundi ?'],
    ]),
  ]),

  sheet('sheet-refus', 'Dire oui, dire non', ['accepter', 'les trois morceaux du refus', 'ce qui manque quand ça blesse'], [
    teach('sheet-refus-teach', 'Un refus poli a trois morceaux',
      "Tu remercies, tu refuses clairement, tu laisses une porte ouverte. Enlève le deuxième morceau et personne ne comprend que c'est non : « je vais réfléchir » dit trois fois finit par blesser plus qu'un non net. Enlève le troisième et le non arrive sec. Le premier morceau se dit avec merci, c'est gentil ou c'est très aimable ; le troisième avec une autre fois, la semaine prochaine ou sans faute. Accepter est plus court : volontiers, avec plaisir, je veux bien. EN: thank, refuse clearly, leave a door open, and drop none of the three."),
    table('sheet-refus-table', 'Les trois morceaux', ['Morceau', 'Formules', 'Exemple'], [
      ['remercier', "merci, c'est gentil, c'est très aimable", "C'est très gentil de me le proposer."],
      ['refuser', 'je ne peux pas, je préférerais éviter', "Je ne peux pas cette semaine."],
      ['ouvrir la porte', 'une autre fois, la semaine prochaine', "Ce sera pour une autre fois, sans faute."],
      ['accepter', 'volontiers, avec plaisir, je veux bien', 'Oui, volontiers, merci beaucoup.'],
      ['gagner du temps', 'je vais réfléchir, je te redis', 'Je vais réfléchir et je te redis demain.'],
      ['refuser une aide', "je vais me débrouiller", "C'est très aimable, mais je vais me débrouiller."],
    ]),
  ]),
];


/* ══════════════════════════════════════════════════════════════════════════
 *  REMEDIATION DRILLS and ERROR TRIGGERS
 *
 *  One drill per trigger, each the resolving target of exactly one quiz
 *  round. Deliberately NOT in `sections`: a learner who never trips one never
 *  sees it. Six items is the house size.
 * ══════════════════════════════════════════════════════════════════════════ */

const DRILL_LIST: LessonDrill[] = [
  {
    id: 'd-echelle', title: 'Deux secondes, ou une heure', format: 'sort' as const,
    coach: "Deux piles. Demande-toi combien de minutes tu prends à l'autre. EN: sort by how many minutes you are taking from the other person.",
    buckets: ['deux secondes', 'une heure'],
    items: [E(1006), E(1010), E(1011), E(1007), E(1008), E(1009)], audio: AUDIO,
  },
  {
    id: 'd-moteur', title: 'Quel verbe fait le travail', format: 'mcq' as const,
    coach: 'Pouvoir demande, vouloir souhaite, devoir conseille, avoir cherche, falloir ne vise personne. EN: five verbs, five jobs.',
    q: 'Tu conseilles un ami : « Tu ... lui écrire avant vendredi. »', opts: ['peux', 'devrais'], correct: 1,
    why: "Devoir au conditionnel donne un avis, pas un ordre. EN: devoir in the conditional gives an opinion.",
    items: [E(1018), E(1021), E(1023), E(1024), E(1025), E(1033)], audio: AUDIO,
  },
  {
    id: 'd-souhait', title: 'Décision ou souhait', format: 'sort' as const,
    coach: "Deux piles. Après la phrase, reste-t-il quelque chose à décider ? EN: sort by whether anything is left to decide.",
    buckets: ['rien à décider', 'la porte est ouverte'],
    items: [E(1043), E(1044), E(1039), E(1040), E(1046), E(1041)], audio: AUDIO,
  },
  {
    id: 'd-question', title: 'Plat, est-ce que, inversion', format: 'mcq' as const,
    coach: "Regarde où se trouve le sujet, et où tu es. EN: look at where the subject sits, and where you are.",
    q: 'Au guichet, à une inconnue : « ... vérifier mon dossier ? »', opts: ['Pourriez-vous', 'Vous pouvez'], correct: 0,
    why: "Avec vous, au guichet, l'inversion est la forme ordinaire. EN: with vous at a counter the inversion is ordinary.",
    items: [E(1053), E(1054), E(1055), E(1058), E(1062), E(1065)], audio: AUDIO,
  },
  {
    id: 'd-adoucir', title: 'Un seul, à sa place', format: 'flashcard' as const,
    coach: "Pour chaque carte, dis à voix haute où se met l'adoucisseur. EN: for each card, say aloud where the softener goes.",
    items: [E(1071), E(1072), E(1073), E(1074), E(1075), E(1076)], audio: AUDIO,
  },
  {
    id: 'd-voulais', title: 'Hier, ou maintenant', format: 'sort' as const,
    coach: "Deux piles : ce qui parle vraiment du passé, et ce qui recule juste la demande. EN: sort the real past from the stepped-back request.",
    buckets: ['vraiment du passé', 'la demande est maintenant'],
    items: [E(1091), E(1093), E(1095), E(1096), E(1103), E(1105)], audio: AUDIO,
  },
  {
    id: 'd-magique', title: 'Change le verbe', format: 'mcq' as const,
    coach: "Enlève s'il vous plaît et relis. S'il reste un ordre, c'est le verbe qu'il faut bouger. EN: remove please and reread.",
    q: 'À une inconnue : « ... me donner votre numéro ? »', opts: ['Donnez-moi', 'Pourriez-vous'], correct: 1,
    why: "Le mot magique ne répare pas un impératif. EN: the magic word does not repair an imperative.",
    items: [E(1109), E(1110), E(1112), E(1116), E(1118), E(1120)], audio: AUDIO,
  },
  {
    id: 'd-proposer', title: 'Ce qui suit la formule', format: 'mcq' as const,
    coach: "on pourrait et ça te dirait de appellent l'infinitif ; et si on appelle l'imparfait. EN: two take the infinitive, one takes the imparfait.",
    q: 'Et si on ... le train de sept heures ?', opts: ['prendre', 'prenait', 'prendrait'], correct: 1,
    why: "Après et si on : l'imparfait, et il ne parle pas du passé. EN: the imparfait after et si on.",
    items: [E(1123), E(1124), E(1125), E(1127), E(1129), E(1132)], audio: AUDIO,
  },
  {
    id: 'd-conseil', title: 'Qui est nommé', format: 'sort' as const,
    coach: 'Deux piles : la phrase nomme la personne, ou elle ne vise personne. EN: sort by whether the person is named.',
    buckets: ['la personne est nommée', 'personne n’est visé'],
    items: [E(1145), E(1149), E(1150), E(1146), E(1147), E(1152)], audio: AUDIO,
  },
  {
    id: 'd-refus', title: 'Les trois morceaux', format: 'flashcard' as const,
    coach: "Pour chaque carte, dis lequel des trois morceaux elle occupe : remercier, refuser, ouvrir. EN: name which of the three pieces each one fills.",
    items: [E(1163), E(1162), E(1164), E(1166), E(1168), E(1170)], audio: AUDIO,
  },
  {
    id: 'd-ecrire', title: 'Le courriel, morceau par morceau', format: 'flashcard' as const,
    coach: "Lis chaque phrase et dis quel morceau du plan elle occupe. EN: name which part of the plan each sentence fills.",
    items: [E(1173), E(1177), E(1178), E(1184), E(1179), E(1186)], audio: AUDIO,
  },
];

const TRIGGER_LIST: ErrorTrigger[] = [
  { id: 'barreau-bas', description: 'Uses one height for every request, so a favour costing an hour of somebody else’s time arrives in the shape reserved for holding a door.', detectOn: ['a1-scene', 'a1-echelle', 'a1-check', 'a11-mission'], drill: 'd-echelle', retest: 'd-echelle' },
  { id: 'present-brut', description: 'Keeps pouvoir, vouloir, devoir, avoir and falloir in the present where the sentence is asking, wishing or advising, so every request assumes its own answer.', detectOn: ['a2-construire', 'a2-erreurs', 'a2-check', 'a11-mission'], drill: 'd-moteur', retest: 'd-moteur' },
  { id: 'je-veux', description: 'Opens a counter request with je veux, which states a decision already taken and leaves the other person nothing to propose, warn about or correct.', detectOn: ['a3-construire', 'a3-piege', 'a3-check', 'a11-mission'], drill: 'd-souhait', retest: 'd-souhait' },
  { id: 'forme-plate', description: 'Chooses between the flat question, est-ce que and the inversion by habit rather than by setting, so a counter gets an instruction and a friend gets a solemn inversion.', detectOn: ['a4-construire', 'a4-piege', 'a4-check', 'a11-mission'], drill: 'd-question', retest: 'd-question' },
  { id: 'adoucisseurs-empiles', description: 'Stacks three or four softeners in one sentence, or puts par hasard and peut-être in the wrong slot, so the request stops shrinking and starts worrying the reader.', detectOn: ['a5-construire', 'a5-choisir', 'a5-erreurs', 'a11-mission'], drill: 'd-adoucir', retest: 'd-adoucir' },
  { id: 'imparfait-manquant', description: 'Opens every counter request in the present, or keeps the politeness imparfait when the matter is urgent and speed matters more than distance.', detectOn: ['a6-construire', 'a6-piege', 'a6-check', 'a11-mission'], drill: 'd-voulais', retest: 'd-voulais' },
  { id: 'mot-magique', description: 'Attaches s’il vous plaît to a bare imperative addressed to a stranger, translates can I have word for word, or apologises three times for one small request.', detectOn: ['a7-construire', 'a7-piege', 'a7-check', 'a11-mission'], drill: 'd-magique', retest: 'd-magique' },
  { id: 'proposition-en-demande', description: 'Asks for a favour where both people would gain, or puts the wrong continuation after on pourrait, ça te dirait de and et si on.', detectOn: ['a8-construire', 'a8-choisir', 'a8-check'], drill: 'd-proposer', retest: 'd-proposer' },
  { id: 'conseil-ordre', description: 'Advises with the present or the future of devoir and falloir, or follows à ta place with an infinitive, so an opinion arrives as an instruction.', detectOn: ['a9-construire', 'a9-erreurs', 'a9-check', 'a11-mission'], drill: 'd-conseil', retest: 'd-conseil' },
  { id: 'refus-flou', description: 'Refuses without the word that refuses, so the other person keeps waiting, or accepts at such length that the yes sounds like hesitation.', detectOn: ['a10-construire', 'a10-piege', 'a10-check', 'a11-mission'], drill: 'd-refus', retest: 'd-refus' },
  { id: 'ecrit-plat', description: 'Writes a message with three competing requests, no reason for writing and nothing offered in return, so the reader cannot tell what is being asked.', detectOn: ['a11-mission', 'a11-plan', 'a11-scenario'], drill: 'd-ecrire', retest: 'd-ecrire' },
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
const REC_IDS = [...new Set(JSON.stringify(SECTIONS).match(/rec-b1-09-[a-z0-9-]+/g) ?? [])];

const REC_DESC: Record<string, string> = {
  'rec-b1-09-matinee': "Salima's morning (act 1), ONE female Québécoise voice reading a narration that quotes four different speakers. The four quoted requests must be audibly the same person at four heights: flat and quick for « Tu peux me tenir la porte », slower and with a small pause before « relire mon rapport », level and formal at the bank counter, warm and fast for the sister. No acting beyond that.",
  'rec-b1-09-comptoir': "The bakery (act 3), one female voice, two customers quoted inside a narration. « Je veux deux baguettes » is flat and final, with no rise at the end. « Bonjour, je voudrais deux baguettes et un pain complet » carries a small rise on « voudrais ». The contrast is the whole point of the recording.",
  'rec-b1-09-bureau': "The registration office (act 6), one male voice for the visitor and one female for the clerk, in a narration read by a third. The three imparfait openings (je venais pour, je voulais vous demander, je me demandais) are all unhurried and all present-tense in feeling: nothing about them should sound like a story about yesterday.",
  'rec-b1-09-conseil': "The four advisers (act 9), ONE voice reading all five quoted lines. Each adviser gets a slightly different pace: the brother quick, the colleague level, the union adviser slow and careful, Théo blunt and fast. The narration between them is neutral.",
  'rec-b1-09-courriel': "The model email (act 11), one voice, read as somebody reading a message aloud rather than performing it. The four parts must be audible through the pauses: why I write, the request, what I would prefer, what I am offering.",
  'rec-b1-09-echelle-ecoute': 'REQUIRED FOR THE EAR MISSION (act 3): eight lines, ONE TAKE, ONE VOICE, in authored order, at conversational speed, with only a normal breath between lines. The learner cannot see the text, so a second take or a second voice destroys the exercise.',
  'rec-b1-09-question-ecoute': 'REQUIRED FOR THE EAR MISSION (act 4): eight lines, ONE TAKE, ONE VOICE, in authored order. The inversions must not be over-articulated: « pourriez-vous » is one group, [poo-ryay-VOO], not three separate words.',
  'rec-b1-09-imparfait-ecoute': 'REQUIRED FOR THE EAR MISSION (act 6): eight lines, ONE TAKE, ONE VOICE, in authored order. Every imparfait opening is spoken as an opening, so the pitch stays up at the end of « je voulais » and « je venais ».',
  'rec-b1-09-proposer-ecoute': 'REQUIRED FOR THE EAR MISSION (act 8): eight lines, ONE TAKE, ONE VOICE, in authored order, friendly and unhurried. « Et si on » keeps its rise to the very end of the line.',
  'rec-b1-09-refus-ecoute': 'REQUIRED FOR THE EAR MISSION (act 10): eight lines, ONE TAKE, ONE VOICE, in authored order. The refusals must sound warm, not apologetic: the learner is being asked to hear a door left open, not an excuse.',
  'rec-b1-09-moteur': 'The favour at the counter (act 2), two voices, conversational. The five conditional forms are never stressed as vocabulary; they sit inside their sentences.',
  'rec-b1-09-guichet': 'The town hall counter (act 4), two voices, one male visitor and one female clerk, both using vous throughout. Unhurried, slightly echoey room feeling if the studio can give it.',
  'rec-b1-09-adoucir': 'The charger (act 5), two voices, young, quick, friendly. « par hasard » is thrown away at the end of the line, not emphasised.',
  'rec-b1-09-cafe': 'The café counter (act 7), two voices. The server is neutral throughout: the learner must not be able to tell from her tone which customer got it right.',
  'rec-b1-09-samedi': 'The Saturday plan (act 8), two friends, overlapping energy, fast. This is the only recording in the lesson with no vous in it.',
  'rec-b1-09-invitation': 'The invitation refused (act 10), two voices, warm. The refusal is delivered without a drop in warmth, which is the thing the learner is listening for.',
  'rec-b1-09-piege-veux': 'The trap drill (act 3): the six card sentences read in order, ONE VOICE, at normal speed. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-09-piege-inversion': 'The trap drill (act 4): the six card sentences read in order, ONE VOICE. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-09-piege-imparfait': 'The trap drill (act 6): the six card sentences read in order, ONE VOICE. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-09-piege-magique': 'The trap drill (act 7): the six card sentences read in order, ONE VOICE. The wrong versions printed on the cards are NEVER spoken.',
  'rec-b1-09-piege-refus': 'The trap drill (act 10): the six card sentences read in order, ONE VOICE. The wrong versions printed on the cards are NEVER spoken.',
};

export const LESSON: Omit<Lesson, 'sections'> & { sections: DraftSection[] } = {
  id: LESSON_ID,
  unitId: UNIT.id,
  seq: 1,
  title: UNIT.sub,
  level: LEVEL,
  tag: 'B1 · LEÇON 09',
  intro: 'You already have the conditional and the imparfait. This lesson is about choosing between the shapes they give you. French politeness is not a single magic register you switch on: it is a ladder of six rungs, and the rung is picked by two measurements, how much your request costs the other person and how far away that person is. Get the measurement wrong in either direction and a perfectly correct sentence lands as an order, or as a cold joke.',
  skill: 'PE',
  grammarAssumed: [IMP_USE_UNIT, COND_UNIT, MODAUX_UNIT, RESTO_UNIT, HOTEL_UNIT],
  grammarIntroduced: [
    'The request ladder: bare imperative, present modal, conditional modal, est-ce que plus conditional, inversion, and the heavy auriez-vous la gentillesse de formula',
    'Selection of a rung by two measurements: the cost of the favour and the social distance of the addressee, independently of the speaker’s intent',
    'je voudrais and j’aimerais as wishes that leave the hearer room to answer, against je veux as a decision already taken',
    'est-ce que and subject-verb inversion used as markers of distance rather than as question mechanics',
    'The softeners par hasard, si possible, juste, un peu, peut-être, and the formulas ça vous dérangerait de and je me permets de',
    'The imparfait of politeness: je voulais vous demander, je venais pour, je me demandais si, all referring to present time',
    'Proposals and invitations with on pourrait, ça te dirait de, and et si on plus the imparfait',
    'Advice at four distances: tu devrais, à ta place plus conditional, il faudrait and il vaudrait mieux plus infinitive, tu ferais mieux de',
    'The three-part polite refusal: thank, refuse clearly, leave a door open',
    'The written register of a request: je vous écris au sujet de, je me permets de, je vous remercie d’avance, bien cordialement',
  ],
  overview: {
    titleEn: UNIT.title,
    subFr: UNIT.sub,
    introFr: "Tu as déjà le conditionnel et l'imparfait. Cette leçon t'apprend à choisir. La politesse française n'est pas un bouton qu'on allume : c'est une échelle de six barreaux, et le barreau est choisi par deux mesures, ce que ta demande coûte à l'autre et la distance entre vous. Trompe-toi dans un sens et ta phrase arrive comme une consigne ; trompe-toi dans l'autre et elle devient froide.",
    minutes: 130,
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
  terms: POLITESSE_TERMS,
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
export { IMPORTED, NOT_SPEAKABLE, READING_COURRIEL, dicteeFor };
