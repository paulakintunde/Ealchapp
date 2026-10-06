// c1.13.l1 « Les références qui comptent » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6. Labels here run 6 to 13 characters; the widest trio
// the lesson uses (« la référence » + « une lecture » + « invoquer ») is 31.
// Asserted in the scratch check with « every term is surfaced ».
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// A GLOSSARY OF REFERENCES NAMES THE MOVES, NOT THE EVENTS: what a reference
// is (la référence), how to open it (déplier, dater), what using it does
// (invoquer, une lecture, nommer), and the three traps (l’apocryphe,
// l’antonomase that simplifies, l’anachronisme). The events themselves live
// in the sheets. « La mémoire » as a headword belongs to c1.16 and is not
// defined here.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './references-historiques-corpus.ts';

export const REFERENCES_HISTORIQUES_TERMS: Record<string, LessonTerm> = {
  /** The whole lesson: what a reference is. */
  reference: {
    term: 'la référence',
    title: 'Un raccourci vers une histoire',
    body: 'Une date, un nom, une loi ou une phrase que le texte cite sans l’expliquer, parce qu’il suppose que tu la connais : 1789, Waterloo, la loi 101, « Je me souviens ». Elle fait entrer tout un événement dans un seul mot. EN: A date, name, law or line a text cites without explaining, assuming you know it.',
    examples: [
      { itemId: E(1003), note: 'le principe' },
      { itemId: E(1000), note: 'une référence dans un titre' },
      { itemId: E(1132), note: 'une loi devenue un débat' },
    ],
  },

  /** The first move of every act. */
  deplier: {
    term: 'déplier',
    title: 'Ouvrir la référence',
    body: 'Déplier une référence, c’est dire ce qu’elle contient : ce qui s’est passé, quand, où, et ce que l’événement est devenu dans la langue. On déplie avant de juger, sinon on juge un mot qu’on n’a pas lu. EN: Unfolding means saying what happened, when, and what it has come to mean, before judging.',
    examples: [
      { itemId: E(1006), note: 'avant de juger' },
      { itemId: E(1036), note: 'Waterloo, déplié' },
      { itemId: E(1195), note: 'la méthode en quatre verbes' },
    ],
  },

  /** What the writer does with the reference. */
  invoquer: {
    term: 'invoquer',
    title: 'Appeler l’histoire à son secours',
    body: 'Invoquer une référence, c’est s’en servir pour appuyer ce qu’on dit : un syndicat qui réclame « un nouveau 1789 » promet une rupture ; un élu qui lance « un appel du 18 juin » se présente en résistant. La question est toujours : qui l’invoque, et pour quoi faire ? EN: To invoke a reference is to use it to support a point; ask who does it and why.',
    examples: [
      { itemId: E(1005), note: 'la question à poser' },
      { itemId: E(1025), note: 'promettre une rupture' },
      { itemId: E(1073), note: 'se présenter en résistant' },
    ],
  },

  /** The interpretation a reference carries. */
  lecture: {
    term: 'une lecture',
    title: 'Une façon de comprendre l’événement',
    body: 'Un même événement admet plusieurs lectures : 1789 fonde les droits, ou 1789 mène aussi à la Terreur ; la Conquête est une catastrophe, ou un tournant dont on nuance la portée. Choisir une référence, c’est souvent choisir une lecture. Tu la nommes, tu ne la tranches pas. EN: One event allows several readings; name the one a writer picks, do not settle it.',
    examples: [
      { itemId: E(1022), note: 'deux lectures de 1789' },
      { itemId: E(1129), note: 'deux lectures de la Conquête' },
      { itemId: E(1008), note: 'une lecture parmi d’autres' },
    ],
  },

  /** Act 2: the line nobody said. */
  apocryphe: {
    term: 'apocryphe',
    title: 'Une phrase attribuée à tort',
    body: 'Une citation apocryphe est attribuée à quelqu’un qui ne l’a pas dite, ou dont on n’a aucune trace qu’il l’ait dite : « L’État, c’est moi », « Qu’ils mangent de la brioche ». On la cite avec « on prête à… » ou « la formule attribuée à… », jamais comme un fait. EN: An apocryphal line is wrongly attributed; quote it with « on prête à », never as fact.',
    examples: [
      { itemId: E(1029), note: 'le terme' },
      { itemId: E(1031), note: 'comment la citer' },
      { itemId: E(1027), note: 'ce que Rousseau écrit vraiment' },
    ],
  },

  /** Act 3: the name that became a common noun. */
  antonomase: {
    term: 'l’antonomase',
    title: 'Un nom propre devenu nom commun',
    body: 'Quand un nom de lieu ou de personne sert de nom commun, on parle d’antonomase : un Waterloo, une bérézina, un Austerlitz. L’image ne garde qu’un seul trait de l’événement, et la langue simplifie souvent ce que les historiens nuancent. EN: Antonomasia uses a proper name as a common noun; it keeps one feature of the event and drops the rest.',
    examples: [
      { itemId: E(1044), note: 'le terme' },
      { itemId: E(1045), note: 'deux exemples' },
      { itemId: E(1039), note: 'ce que la langue oublie' },
    ],
  },

  /** Act 6: the name of an event as a reading. */
  nommer: {
    term: 'nommer',
    title: 'Le nom est déjà une lecture',
    body: 'Pour un même événement, plusieurs noms circulent : « événements d’Algérie », « guerre d’Algérie », « guerre de libération nationale ». Chacun raconte une histoire différente. Quand tu expliques une référence, cite le nom entre guillemets, dis qui l’emploie, et donne l’autre. EN: Several names for one event each tell a story; quote the name, say who uses it, give the other.',
    examples: [
      { itemId: E(1093), note: 'un mot, un point de vue' },
      { itemId: E(1101), note: 'la méthode' },
      { itemId: E(1182), note: 'un mot, deux usages' },
    ],
  },

  /** Acts 4, 5, 7: when is "today"? */
  dater: {
    term: 'dater un fait',
    title: 'Mettre une date sur « aujourd’hui »',
    body: 'Une référence vivante bouge : une loi est contestée, un tribunal juge, une commémoration change. Quand tu dis « aujourd’hui » ou « encore », date-le (« en mars 2026, la Cour suprême a entendu la contestation »), pour que ton lecteur sache de quand parle ta phrase. EN: Date anything you call current, so the reader knows when your sentence was true.',
    examples: [
      { itemId: E(1062), note: 'un fait daté' },
      { itemId: E(1120), note: 'le risque inverse' },
      { itemId: E(1057), note: 'une loi et son mois' },
    ],
  },

  /** Act 7: judging a past age with today's words. */
  anachronisme: {
    term: 'anachronisme',
    title: 'Juger hier avec les mots d’aujourd’hui',
    body: 'L’anachronisme place dans une époque ce qui appartient à une autre : un mot, une idée, un jugement. Comparer une grève de trois jours à Mai 68, ou juger 1968 avec les catégories de 2026, c’est risquer d’éclairer une ressemblance et d’en cacher dix. EN: An anachronism puts into one age what belongs to another; it lights one likeness and hides many.',
    examples: [
      { itemId: E(1119), note: 'le terme' },
      { itemId: E(1118), note: 'ce que cache une comparaison' },
      { itemId: E(1117), note: 'comparer les faits' },
    ],
  },

  /** Acts 4, 5, 6, 8, 9: reporting a disputed history. */
  positions: {
    term: 'les positions',
    title: 'Rapporter un débat sans le trancher',
    body: 'Sur une histoire disputée (Vichy, l’Algérie, la Conquête, le Congo, la laïcité), tu rapportes au moins deux positions, chacune avec qui la défend et sur quoi elle s’appuie. Tu ne dis pas laquelle a raison : ce n’est pas ce qu’on te demande. EN: On disputed history, report two positions with who holds them; do not say which is right.',
    examples: [
      { itemId: E(1066), note: 'les deux camps' },
      { itemId: E(1084), note: 'nommer qui défend quoi' },
      { itemId: E(1082), note: 'faits et responsabilité' },
    ],
  },

  /** Act 10: legend against fact. */
  legende: {
    term: 'la légende',
    title: 'Un récit fondateur, pas un fait',
    body: 'Une légende raconte ce qu’un pays veut être : Guillaume Tell, le serment du Grütli. Elle peut fonder une identité sans être un fait. Quand tu la cites, dis que c’est une légende ; quand tu cites un document daté, comme le Pacte de 1291, dis que c’est un document. EN: A legend founds an identity without being fact; say which you are quoting.',
    examples: [
      { itemId: E(1158), note: 'un héros de légende' },
      { itemId: E(1166), note: 'légende et document' },
      { itemId: E(1168), note: 'ce que fait une légende' },
    ],
  },
};
