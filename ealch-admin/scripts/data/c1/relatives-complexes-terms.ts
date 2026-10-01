// c1.04.l1 « Les relatives complexes »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6 (labels joined plus 2 per separator). Labels run 9 to 13
// characters. The 13-character labels (« dont partitif », « l’explicative »,
// « déterminative », « l’emboîtement ») are only ever paired, never in a trio.
//
// C1 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './relatives-complexes-corpus.ts';

export const RELATIVES_COMPLEXES_TERMS: Record<string, LessonTerm> = {
  accroche: {
    term: 'l’accroche',
    title: 'Le nom auquel la relative tient',
    body: 'Toute relative pend à un nom, ou à ce, rien, quelque chose quand le nom manque. Ce nom s’appelle l’antécédent. Au C1, la question n’est plus le pronom : c’est le nom choisi, et ce que la relative lui ajoute. EN: Every relative clause hangs from one noun, its antecedent; at C1 the question is which noun, and what the clause adds.',
    examples: [
      { itemId: E(2000), note: 'qui : la grand-mère ou le petit-fils ?' },
      { itemId: E(2001), note: 'laquelle : la grand-mère, sans doute possible' },
      { itemId: E(2076), note: 'sont : ce sont les clés, pas le bureau' },
    ],
  },

  partitif: {
    term: 'dont partitif',
    title: 'Une partie du groupe',
    body: 'Suivi d’un nombre, d’une fraction ou de la plupart, dont prend une part du groupe qui précède : dont deux, dont la moitié, dont certains. Le verbe peut manquer. EN: Followed by a number or a quantity, dont picks out part of the group before it, often with no verb.',
    examples: [
      { itemId: E(2015), note: 'douze parmi les trente, sans verbe' },
      { itemId: E(2017), note: 'la plupart : verbe au pluriel' },
      { itemId: E(2027), note: 'dont je connaissais trois, sans en' },
    ],
  },

  quoi: {
    term: 'ce à quoi',
    title: 'Une préposition, et pas de nom',
    body: 'Quand le verbe veut une préposition et qu’aucun nom ne précède, quoi la suit : ce à quoi, ce sur quoi, rien à quoi. Sans quoi, faute de quoi, après quoi reprennent toute une phrase. EN: With a preposition and no noun in front, use quoi; sans quoi and faute de quoi pick up a whole clause.',
    examples: [
      { itemId: E(2035), note: 's’attendre à : ce à quoi' },
      { itemId: E(2037), note: 'se mettre d’accord sur : ce sur quoi' },
      { itemId: E(2042), note: 'faute de quoi : sinon, en langue soignée' },
    ],
  },

  infinitif: {
    term: 'où dormir',
    title: 'Une relative qui finit sur un infinitif',
    body: 'Après où ou une préposition suivie de son pronom, l’infinitif peut remplacer le verbe conjugué : un endroit où dormir, quelqu’un à qui parler, de quoi vivre. Elle dit un but, sans sujet. Jamais après que. EN: After où or preposition plus pronoun, an infinitive can end the clause and states a purpose; never after que.',
    examples: [
      { itemId: E(2055), note: 'un lieu pour dormir' },
      { itemId: E(2056), note: 'quelqu’un à qui parler' },
      { itemId: E(2059), note: 'de quoi vivre : assez pour vivre' },
    ],
  },

  ambiguite: {
    term: 'l’ambiguïté',
    title: 'Deux noms, une relative',
    body: 'Après le fils de la voisine, une relative peut tenir à l’un ou à l’autre nom. Un accord, un genre ou le sens tranchent parfois. Sinon, le lecteur choisit, et souvent mal : il faut réécrire. EN: After noun de noun a relative can hang on either; agreement or sense may decide, otherwise rewrite.',
    examples: [
      { itemId: E(2075), note: 'qui chante : on ne peut pas le savoir' },
      { itemId: E(2081), note: 'signée : c’est la copie' },
      { itemId: E(2087), note: 'le sens : le chien aboie, pas la voisine' },
    ],
  },

  lequel: {
    term: 'lequel sujet',
    title: 'Lequel pour lever le doute',
    body: 'Lequel, laquelle, lesquels, lesquelles peuvent être sujets d’une relative entre virgules. Ils portent le genre et le nombre, donc ils montrent le nom. C’est un tour écrit, soigné ou administratif, et il ne sert à rien si les deux noms ont le même genre et le même nombre. EN: Lequel as subject shows gender and number, so it shows the noun; written register only, useless when both nouns match.',
    examples: [
      { itemId: E(2095), note: 'laquelle : la sœur, pas Paul' },
      { itemId: E(2099), note: 'deux noms masculins : lequel ne tranche pas' },
      { itemId: E(2098), note: 'auquel cas : dans ce cas-là' },
    ],
  },

  explicative: {
    term: 'l’explicative',
    title: 'Entre virgules, un commentaire',
    body: 'Entre virgules, la relative ne choisit pas : elle commente tout le groupe. Elle cache souvent une raison ou une concession. Avec un pluriel, elle dit que tous sont concernés. EN: Between commas the clause comments on the whole group, often with a hidden reason or concession; with a plural, it means all of them.',
    examples: [
      { itemId: E(2116), note: 'tous les candidats ont échoué' },
      { itemId: E(2119), note: 'une raison cachée : parce qu’il ne boit pas' },
      { itemId: E(2120), note: 'une concession cachée : bien qu’il semble simple' },
    ],
  },

  determinative: {
    term: 'déterminative',
    title: 'Sans virgules, un tri',
    body: 'Sans virgules, la relative trie : elle dit lesquels. Avec un pluriel, une partie seulement est concernée. Avec un nom propre, elle crée une époque ou une facette : le Montréal où j’ai grandi. EN: Without commas the clause sorts, so only some are concerned; with a proper noun it creates a period or a facet.',
    examples: [
      { itemId: E(2115), note: 'seulement ceux qui ont échoué' },
      { itemId: E(2117), note: 'seulement les locataires avec un chien' },
      { itemId: E(2121), note: 'le Montréal d’autrefois' },
    ],
  },

  abstrait: {
    term: 'où abstrait',
    title: 'Où, ou la préposition du verbe',
    body: 'Où va avec un lieu, un moment, ou une situation vue comme un lieu : la situation où, le point où, dans la mesure où. Si le verbe demande sur, par ou pour, et que le nom n’est ni un lieu ni un moment, prends la préposition et lequel. EN: Où for a place, a time or a situation seen as a place; otherwise the verb’s preposition and lequel.',
    examples: [
      { itemId: E(2135), note: 'une situation : où va' },
      { itemId: E(2138), note: 'reposer sur : sur laquelle' },
      { itemId: E(2142), note: 'par laquelle : une méthode n’est pas un lieu' },
    ],
  },

  emboitement: {
    term: 'l’emboîtement',
    title: 'Une relative dans une relative',
    body: 'Quand une relative contient une autre proposition, chaque registre a sa forme : qui, je crois, partout ; dont je crois qu’il à l’écrit soutenu ; que je crois qui à l’oral familier seulement. EN: When a relative clause contains another clause, each register has its form; que je crois qui is casual speech only.',
    examples: [
      { itemId: E(2155), note: 'l’incise : tous les registres' },
      { itemId: E(2150), note: 'dont + que : écrit soutenu' },
      { itemId: E(2154), note: 'que je crois qui : oral familier' },
    ],
  },

  registre: {
    term: 'le registre',
    title: 'Le même sens, un autre niveau',
    body: 'Lequel sujet, auquel cas, moyennant quoi, au cours duquel : l’écrit soigné. À l’oral, on coupe en deux phrases ou on rapproche la relative de son nom. Choisis la forme qui convient à ton lecteur. EN: Lequel subject, auquel cas, moyennant quoi belong to careful writing; in speech, split or move the clause.',
    examples: [
      { itemId: E(2104), note: 'lequel sujet : un tour écrit' },
      { itemId: E(2102), note: 'deux phrases : la version orale' },
      { itemId: E(2161), note: 'de et dont : jamais ensemble' },
    ],
  },
};
