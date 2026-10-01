// c1.01.l1 « Faire le point sur sa grammaire »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 9 to 13 characters. The three longest
// (« à reconnaître » 13, « point faible » 12, « la précision » 12) sum to 37
// and are never used with a fourth.
//
// C1 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ». No term re-teaches a B2 rule: each names
// what the audit looks for and where the rule lives.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './bilan-grammatical-c1-corpus.ts';

export const BILAN_GRAMMATICAL_TERMS: Record<string, LessonTerm> = {
  produire: {
    term: 'produire',
    title: 'Ce que tu dois écrire et dire',
    body: "Une structure à produire, tu dois pouvoir l'employer seul, à l'écrit comme à l'oral, sans y penser et sans te tromper, même quand tu écris vite. Au C1, c'est le cas de presque toute la grammaire du B2. EN: A structure to produce is one you must use unprompted, in writing and speech, without slipping.",
    examples: [
      { itemId: E(1009), note: 'la définition de la pile' },
      { itemId: 'fr.b2.recits-au-passe.1600', note: 'le plus-que-parfait : à produire' },
      { itemId: E(1024), note: 'un si mixte : à produire' },
    ],
  },

  reconnaitre: {
    term: 'reconnaître',
    title: 'Ce que tu dois comprendre, sans l’écrire',
    body: "Une structure à reconnaître, tu la comprends quand tu la lis ou l'entends, et tu sais la redire en français d'aujourd'hui. Tu n'as pas à l'écrire : le passé simple, le subjonctif imparfait, le passé antérieur ou ne… point restent dans les livres. EN: A structure to recognise is one you understand and can restate in today's French, without writing it.",
    examples: [
      { itemId: E(1010), note: 'la définition de la pile' },
      { itemId: 'fr.b2.litterature.1126', note: 'le passé antérieur : à reconnaître' },
      { itemId: 'fr.b2.litterature.1206', note: 'le subjonctif imparfait : à reconnaître' },
    ],
  },

  pointFaible: {
    term: 'point faible',
    title: 'La règle qui cède quand tu vas vite',
    body: "Un point faible n'est pas une règle que tu ignores : c'est une règle que tu connais et que tu rates encore, surtout quand tu écris vite ou que le sujet t'emporte. Un point faible bien noté a un nom, une leçon et un exemple. EN: A weak spot is a rule you know but still get wrong; note it with its name, its lesson and an example.",
    examples: [
      { itemId: E(1011), note: 'la définition de la pile' },
      { itemId: E(1096), note: 'un point faible nommé' },
      { itemId: E(1097), note: 'et la leçon qui le corrige' },
    ],
  },

  precision: {
    term: 'la précision',
    title: 'La structure exacte, pas la plus savante',
    body: "Être précis, au C1, c'est choisir la structure qui dit exactement ce que tu veux dire : la cause sans l'accusation, le fait déjà accompli, la condition qui n'a pas eu lieu. Ce n'est jamais empiler des tournures. EN: Precision means the exact structure for what you mean, never piling structures up.",
    examples: [
      { itemId: E(1001), note: 'la cause, sans accuser personne' },
      { itemId: E(1090), note: 'un avantage nommé avec exactitude' },
      { itemId: E(1099), note: 'ce que le C1 change' },
    ],
  },

  nuance: {
    term: 'la nuance',
    title: 'Dire jusqu’où ton affirmation va',
    body: "La nuance règle la force d'une phrase : un mode, une concession, un conditionnel, un « encore que » disent jusqu'où tu t'engages. Une phrase nuancée garde une position ; elle refuse seulement d'en dire plus que ce que tu sais. EN: Nuance sets how far a sentence commits; it keeps a position but claims no more than you know.",
    examples: [
      { itemId: E(1091), note: 'une concession qui dose' },
      { itemId: E(1027), note: 'le conditionnel qui ne confirme rien' },
      { itemId: 'fr.b2.universite.1004', note: 'la nuance de la leçon 22 du B2' },
    ],
  },

  implicite: {
    term: 'l’implicite',
    title: 'Ce que la phrase laisse conclure',
    body: "L'implicite, c'est ce qu'une phrase fait comprendre sans le dire. « Ils avaient sans doute leurs raisons » dit un regret ; « faute d'avoir reçu les données » désigne un responsable sans le nommer. Au C1, tu le lis, et tu sais le produire. EN: The implicit is what a sentence lets the reader conclude without stating it.",
    examples: [
      { itemId: E(1092), note: 'une conclusion qui ne se dit pas' },
      { itemId: E(1001), note: 'un responsable, sans nom' },
    ],
  },

  temps: {
    term: 'les temps',
    title: 'Situer un fait par rapport à un autre',
    body: "Le B2 t'a donné les temps qui placent un fait avant ou après un autre : le plus-que-parfait, le futur antérieur, le conditionnel passé, les rapports de temps. L'audit vérifie une seule chose : chaque verbe est-il sur la bonne horloge ? EN: The B2 tenses place one event before or after another; the audit checks each verb is on the right clock.",
    examples: [
      { itemId: E(1015), note: 'déjà fait au moment du récit' },
      { itemId: E(1016), note: 'accompli avant une date future' },
      { itemId: E(1018), note: 'depuis et l’imparfait' },
    ],
  },

  modes: {
    term: 'les modes',
    title: 'Affirmer, ou regarder sans affirmer',
    body: "L'indicatif affirme un fait ; le subjonctif le regarde, le souhaite, le craint ou le met en doute. L'audit cherche les choix faits par habitude plutôt que par sens : espérer, il est probable que, après que. EN: The indicative asserts, the subjunctive looks without asserting; the audit hunts choices made by habit.",
    examples: [
      { itemId: E(1033), note: 'un regret : subjonctif passé' },
      { itemId: E(1035), note: 'probable : indicatif' },
      { itemId: E(1038), note: 'après que : indicatif' },
    ],
  },

  condenser: {
    term: 'condenser',
    title: 'Dire plus en moins de mots',
    body: "Condenser, c'est remplacer une proposition par un nom, un infinitif, un participe ou un gérondif : « la baisse des inscriptions », « après avoir connu », « ayant travaillé ». À l'écrit soutenu, c'est attendu ; à l'excès, c'est illisible. EN: Condensing replaces a clause with a noun, an infinitive, a participle or a gérondif; expected in formal writing, unreadable in excess.",
    examples: [
      { itemId: E(1046), note: 'un nom au lieu d’une phrase' },
      { itemId: E(1050), note: 'un infinitif passé' },
      { itemId: E(1054), note: 'un participe passé composé' },
    ],
  },

  liens: {
    term: 'les liens',
    title: 'La relation exacte entre deux idées',
    body: "Cause, conséquence, but, concession, restriction : chaque lien a ses mots et chaque mot impose sa forme. L'audit vérifie que le mot dit la bonne relation, et que la forme qui suit est la bonne. EN: Each logical relation has its words, and each word sets the form that follows; the audit checks both.",
    examples: [
      { itemId: E(1064), note: 'le but, deux sujets' },
      { itemId: E(1066), note: 'la conséquence' },
      { itemId: E(1074), note: 'la concession, puis la restriction' },
    ],
  },

  registre: {
    term: 'le registre',
    title: 'La voix qui convient au lecteur',
    body: "Le même fait peut se dire avec des personnes au premier plan ou derrière une tournure impersonnelle, avec un « je » ou un « nous » d'auteur. Le registre juste dépend de qui te lit. Au C1, tu passes de l'un à l'autre sans changer le sens. EN: The right register depends on the reader; at C1 you switch voice without changing the meaning.",
    examples: [
      { itemId: E(1081), note: 'une personne au premier plan' },
      { itemId: E(1083), note: 'l’acteur effacé' },
      { itemId: E(1094), note: 'le « je pense que » d’un premier jet' },
    ],
  },
};
