// b2.16.l1 « La concession »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The 12- and 13-character
// labels (« le subjonctif », « si riche que », « malgré + nom », « les
// adverbes », « l’opposition ») are never used three together; most sections
// carry one or two chips.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './concession-avancee-corpus.ts';

export const CONCESSION_AVANCEE_TERMS: Record<string, LessonTerm> = {
  point: {
    term: 'le point',
    title: 'Le point accordé',
    body: "Concéder, c'est reconnaître ce que l'autre a de juste, puis maintenir sa position. Bien que le tourisme fasse vivre le quartier, il le rend invivable : tu accordes un point, tu ne cèdes pas la partie. EN: To concede is to grant the other side a point and keep your position.",
    examples: [
      { itemId: E(2000), note: 'le point accordé : le tourisme fait vivre' },
      { itemId: E(2011), note: 'je comprends, mais je ne partage pas' },
      { itemId: E(2013), note: 'ta colère est juste, et pourtant…' },
    ],
  },

  forme: {
    term: 'la forme',
    title: 'Le mot impose sa forme',
    body: "Chaque mot de concession choisit ce qui le suit : bien que, le subjonctif ; même si, l'indicatif ; quand bien même, le conditionnel ; avoir beau, l'infinitif ; malgré, un nom. Choisis le mot, puis regarde ce qu'il porte. EN: Each concession word picks the form that follows it.",
    examples: [
      { itemId: E(2017), note: 'bien que : subjonctif' },
      { itemId: E(2018), note: 'même si : indicatif' },
      { itemId: E(2019), note: 'quand bien même : conditionnel' },
    ],
  },

  subjonctif: {
    term: 'le subjonctif',
    title: 'Bien que, quoique, encore que',
    body: "Bien que et quoique admettent un fait sans l'affirmer : subjonctif, et subjonctif passé si le fait est déjà accompli. Encore que ajoute une réserve après coup, en registre soutenu. Sans que suit la même règle quand les sujets diffèrent. EN: These tools admit a fact without asserting it, hence the subjunctive.",
    examples: [
      { itemId: E(2030), note: 'un fait passé : subjonctif passé' },
      { itemId: E(2033), note: 'encore que, après la principale' },
      { itemId: E(2034), note: 'sans que, deux sujets' },
    ],
  },

  indefini: {
    term: 'quoi que',
    title: 'Quoi que, où que, qui que',
    body: "Ces tournures concèdent toutes les possibilités d'un coup : quoi que tu fasses, où que tu ailles, qui que tu sois, quel que soit le prix. Toutes prennent le subjonctif. Quoi que s'écrit en deux mots ; quel s'accorde avec le nom qui suit. EN: whatever, wherever, whoever: every possibility granted at once.",
    examples: [
      { itemId: E(2048), note: 'quoi que : n’importe quelle chose' },
      { itemId: E(2049), note: 'où que : n’importe où' },
      { itemId: E(2052), note: 'quels : obstacles, masculin pluriel' },
    ],
  },

  intensite: {
    term: 'si riche que',
    title: 'Le degré le plus haut',
    body: "Si et aussi + adjectif + que concèdent un degré, même le plus haut : si riche qu'il soit, subjonctif. Tout + adjectif + que pose le fait comme vrai : tout riche qu'il est, indicatif. Toute devant un féminin qui commence par une consonne. EN: However rich he may be: the subjunctive; rich as he is: the indicative.",
    examples: [
      { itemId: E(2068), note: 'si… que : subjonctif' },
      { itemId: E(2070), note: 'tout… que : indicatif' },
      { itemId: E(2071), note: 'toute neuve : l’accord' },
    ],
  },

  hypothese: {
    term: "l'hypothèse",
    title: 'Même si, quand bien même',
    body: "Même si reste un si : l'indicatif, et l'imparfait pour une hypothèse, avec le conditionnel ensuite. Quand bien même dit la même chose, plus fort et plus soutenu, avec le conditionnel. Jamais de subjonctif après même si. EN: même si keeps the indicative; quand bien même takes the conditional.",
    examples: [
      { itemId: E(2087), note: 'même si + imparfait, puis conditionnel' },
      { itemId: E(2102), note: 'quand bien même + conditionnel' },
      { itemId: E(2088), note: 'même si + plus-que-parfait' },
    ],
  },

  avoirbeau: {
    term: 'avoir beau',
    title: "L'effort qui ne change rien",
    body: "Avoir beau + infinitif : tu fais l'effort, et le résultat ne vient pas. Avoir se conjugue à tous les temps (j'ai eu beau, tu aurais beau), l'infinitif ne bouge pas, et la deuxième partie dit l'échec sans mais. EN: However hard you try, it changes nothing.",
    examples: [
      { itemId: E(2116), note: 'au passé composé : j’ai eu beau' },
      { itemId: E(2118), note: 'au conditionnel : tu aurais beau' },
      { itemId: E(2119), note: 'avec un objet pour sujet' },
    ],
  },

  nom: {
    term: 'malgré + nom',
    title: 'Malgré, en dépit de',
    body: "Malgré et en dépit de (plus soutenu) prennent un nom, jamais une phrase. Pour y arriver, transforme le verbe en nom : bien que les parents aient protesté, malgré les protestations des parents. Malgré le fait que existe, mais il est lourd. EN: malgré takes a noun; turn the clause into one.",
    examples: [
      { itemId: E(2139), note: 'la phrase devenue nom' },
      { itemId: E(2135), note: 'en dépit de : plus soutenu' },
      { itemId: E(2136), note: 'malgré le fait que : correct, lourd' },
    ],
  },

  discours: {
    term: 'les adverbes',
    title: 'Pourtant, toutefois, néanmoins',
    body: "Ces mots relient deux phrases complètes. Pourtant se dit partout ; cependant, toutefois et néanmoins sont plutôt écrits et se placent en tête ou après le verbe. Il n'en reste pas moins que et toujours est-il que posent un fait qui tient malgré tout : indicatif. EN: They link two whole sentences; the last two take the indicative.",
    examples: [
      { itemId: E(2152), note: 'toutefois après le verbe' },
      { itemId: E(2154), note: 'il n’en reste pas moins que' },
      { itemId: E(2155), note: 'toujours est-il que' },
    ],
  },

  opposition: {
    term: "l'opposition",
    title: 'Opposer, ce n’est pas concéder',
    body: "Alors que, tandis que, en revanche et par contre mettent deux faits côte à côte ; aucun n'empêche l'autre. Avec bien que ou pourtant, un fait aurait dû empêcher l'autre, et ne l'a pas fait. Alors que peut aussi concéder : il est parti alors qu'il avait promis. EN: Opposition sets two facts side by side; concession overrides an obstacle.",
    examples: [
      { itemId: E(2171), note: 'deux faits comparés' },
      { itemId: E(2170), note: 'un obstacle dépassé' },
      { itemId: E(2173), note: 'alors que qui concède' },
    ],
  },

  oral: {
    term: 'oral, écrit',
    title: 'Ce qui se dit, ce qui s’écrit',
    body: "À l'oral, on entend « bien qu'il est tard » ou « malgré qu'il pleuve » : répandus, mais critiqués à l'écrit, où l'on écrit bien qu'il soit tard, malgré la pluie. « Même si + subjonctif », lui, n'est pas une variante : c'est une faute. EN: Some spoken forms are criticised in writing; même si + subjunctive is simply wrong.",
    examples: [
      { itemId: E(2140), note: 'malgré que : critiqué à l’écrit' },
      { itemId: E(2092), note: 'même si : jamais le subjonctif' },
      { itemId: E(2159), note: 'toutefois, plutôt écrit' },
    ],
  },
};
