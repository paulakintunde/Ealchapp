// b2.15.l1 « Cause et conséquence »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The 12- and 13-character
// labels (« cause admise », « cause écartée », « cause en nom », « résultat,
// but », « verbe d'effet », « la certitude ») are never used three together;
// most sections carry one or two chips.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './cause-consequence-corpus.ts';

const CL = (n: number) => `fr.b1.connecteurs-logiques.${n}`;

export const CAUSE_CONSEQUENCE_TERMS: Record<string, LessonTerm> = {
  lien: {
    term: 'le lien nu',
    title: 'Parce que, donc : le lien sans nuance',
    body: "Parce que et donc disent qu'il y a un lien, et rien de plus. Ils sont justes partout, et parce que est le seul à répondre à pourquoi. Mais un texte qui n'emploie qu'eux ne dit jamais ce que tu sais de la cause, ni ce que tu en penses. EN: Parce que and donc state the link and nothing more.",
    examples: [
      { itemId: E(1821), note: 'la seule réponse à pourquoi' },
      { itemId: CL(1024), note: 'donc : la suite, sans nuance' },
      { itemId: E(1852), note: 'la cause, sans avis' },
    ],
  },

  admise: {
    term: 'cause admise',
    title: 'Étant donné que, vu que, du fait que',
    body: "Ces liens posent une cause que personne ne discute, avant d'en tirer la suite. Étant donné que et du fait que sont soutenus ; vu que est plus courant, surtout à l'oral. Puisque va plus loin : il rappelle une cause que l'autre connaît déjà. EN: A cause taken as given, before its consequence.",
    examples: [
      { itemId: E(1812), note: 'un fait établi, dans un courriel de travail' },
      { itemId: E(1813), note: 'vu que, à l’oral' },
      { itemId: E(1815), note: 'puisque, avec un reproche' },
    ],
  },

  renfort: {
    term: 'le renfort',
    title: "D'autant plus que, dans la mesure où",
    body: "D'autant plus que ajoute une raison qui renforce ce qu'on vient de dire. Dans la mesure où pose une cause qui ne vaut que jusqu'à un certain point, comme une condition. Les deux sont fréquents dans les textes argumentés. EN: An extra reason, or a cause that holds up to a point.",
    examples: [
      { itemId: E(1831), note: 'une raison de plus' },
      { itemId: E(1832), note: 'd’autant plus + adjectif + que' },
      { itemId: E(1830), note: 'une cause dans une limite' },
    ],
  },

  contestee: {
    term: 'cause écartée',
    title: 'Sous prétexte que, non que',
    body: "Sous prétexte que rapporte une raison que tu ne crois pas vraiment, avec l'indicatif. Non que et ce n'est pas que écartent une cause, avec le subjonctif, avant de donner la vraie : c'est que, mais. EN: A cause you doubt, or one you set aside for the real one.",
    examples: [
      { itemId: E(1846), note: 'la raison donnée, mise en doute' },
      { itemId: E(1848), note: 'la cause écartée, puis la vraie' },
      { itemId: E(1847), note: 'non que + subjonctif' },
    ],
  },

  nom: {
    term: 'cause en nom',
    title: 'La cause devant un nom',
    body: "Devant un nom, pas de que : à cause de, grâce à, en raison de, du fait de. Par se construit sans article pour un motif intérieur (par peur), à force de dit la répétition ou l'effort, faute de dit le manque, sous l'effet de dit une pression. EN: Before a noun, a preposition carries the cause.",
    examples: [
      { itemId: E(1864), note: 'par peur, sans article' },
      { itemId: E(1867), note: 'la répétition a produit le résultat' },
      { itemId: E(1869), note: 'le manque' },
    ],
  },

  verbe: {
    term: 'le verbe',
    title: 'Être dû à, s’expliquer par, provenir de, tenir à',
    body: "Un verbe de cause met le fait en tête et la cause à la fin : le retard est dû à la neige. Dû s'accorde avec le sujet (due, dus, dues). « Le retard est à cause de la neige » s'entend à l'oral ; à l'écrit, prends un verbe de cause. EN: A verb of cause puts the fact first and the cause after it.",
    examples: [
      { itemId: E(1883), note: 'due : la panne' },
      { itemId: E(1886), note: 's’expliquer par' },
      { itemId: E(1889), note: 'tenir à' },
    ],
  },

  consequence: {
    term: 'conséquence',
    title: "Par conséquent, en conséquence, d'où",
    body: "Pour la conséquence, varie : par conséquent, c'est pourquoi, de ce fait, aussi avec inversion à l'écrit soutenu. D'où se construit avec un nom, sans verbe conjugué : d'où son retard. En conséquence veut aussi dire de façon adaptée : agis en conséquence. EN: Vary the consequence link; d'où takes a noun.",
    examples: [
      { itemId: E(1899), note: 'd’où + un nom' },
      { itemId: E(1898), note: 'en conséquence' },
      { itemId: E(1902), note: 'aussi + inversion' },
    ],
  },

  resultat: {
    term: 'résultat, but',
    title: 'De sorte que : le mode décide',
    body: "De sorte que suivi de l'indicatif dit un résultat : c'est arrivé. Suivi du subjonctif, il dit un but : on le vise. Si bien que dit toujours un résultat et ne prend jamais le subjonctif. EN: De sorte que + indicative is a result; + subjunctive, an aim.",
    examples: [
      { itemId: E(1918), note: 'a compris : le résultat' },
      { itemId: E(1917), note: 'comprenne : le but' },
      { itemId: E(1914), note: 'si bien que : toujours un résultat' },
    ],
  },

  intensite: {
    term: "l'intensité",
    title: 'Si fort que, au point que, trop pour que',
    body: "Une conséquence peut venir d'un degré : tellement, si, tant, tant de, au point que, à tel point que. Avec trop ou assez… pour que, l'effet reste une idée : le subjonctif suit. Avec un seul sujet, l'infinitif : trop tard pour appeler. EN: A consequence born of a degree.",
    examples: [
      { itemId: E(1928), note: 'tant + verbe + que' },
      { itemId: E(1932), note: 'au point que' },
      { itemId: E(1934), note: 'trop… pour que + subjonctif' },
    ],
  },

  effet: {
    term: "verbe d'effet",
    title: 'Provoquer, entraîner, causer, susciter, aboutir à',
    body: "Provoquer et causer disent souvent un effet soudain ou négatif ; entraîner, une suite presque automatique ; susciter, une réaction ou un sentiment ; aboutir à, la fin d'un long processus. Choisis le verbe qui va avec le nom. EN: Five verbs of consequence, each with its own partners.",
    examples: [
      { itemId: E(1947), note: 'provoquer des accidents' },
      { itemId: E(1948), note: 'entraîner une annulation' },
      { itemId: E(1950), note: 'aboutir à un accord' },
    ],
  },

  certitude: {
    term: 'la certitude',
    title: 'Sans doute, il semble que, serait dû',
    body: "Une cause peut être certaine, probable ou seulement rapportée. Sans doute veut dire probablement ; il semble que prend le subjonctif ; les médias emploient le conditionnel pour une information non vérifiée : l'incendie serait dû à un court-circuit. EN: Grade how sure you are of a cause.",
    examples: [
      { itemId: E(1963), note: 'probablement, pas certainement' },
      { itemId: E(1961), note: 'une information non confirmée' },
      { itemId: E(1965), note: 'il semble que + subjonctif' },
    ],
  },

  registre: {
    term: 'le registre',
    title: 'Du coup, donc, par conséquent',
    body: "Les liens n'ont pas tous le même registre. Du coup, c'est pour ça que et vu que appartiennent surtout à l'oral ; donc et c'est pourquoi vont partout ; par conséquent, du fait que, de ce fait et aussi avec inversion conviennent à l'écrit soigné. EN: Match the link to the situation.",
    examples: [
      { itemId: E(1904), note: 'du coup, à l’oral' },
      { itemId: E(1913), note: 'par conséquent, à l’écrit' },
      { itemId: CL(1308), note: 'l’échelle de la leçon 31 du B1' },
    ],
  },
};
