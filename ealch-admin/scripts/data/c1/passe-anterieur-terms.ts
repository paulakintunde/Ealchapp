// c1.02.l1 « Le passé antérieur »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6 (labels joined, plus 2 per separator). Labels run 8 to 13
// characters; the lesson checks every row against the budget.
//
// C1 LANGUAGE RULE: the body is unsimplified French, addressed as « tu »,
// then ONE English line starting « EN: ».
//
// RECOGNITION ONLY: every example is a literary line to READ or the French a
// speaker would use today. No body asks for a form.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './passe-anterieur-corpus.ts';

export const PA_TERMS: Record<string, LessonTerm> = {
  relais: {
    term: 'le relais',
    title: 'Une action bouclée, et le récit repart',
    body: "Le passé antérieur ferme une action au moment précis où le récit repart, comme un coureur qui lâche le témoin quand le suivant s’élance déjà. Il ne dit pas seulement « avant » : il dit « juste avant, et c’est fait ». EN: The passé antérieur closes an action at the very moment the story moves on.",
    examples: [
      { itemId: E(1605), note: 'une ligne lue, et aussitôt l’écriture reconnue' },
      { itemId: E(1606), note: 'la même chose, aujourd’hui' },
      { itemId: E(1609), note: 'la règle en une phrase' },
    ],
  },

  auxiliaire: {
    term: 'eut ou fut',
    title: 'Un auxiliaire au passé simple',
    body: "Eus, eut, eûmes, eurent, ou fus, fut, fûmes, furent, puis un participe. Avoir pour la plupart des verbes, être pour ceux qui le prennent au passé composé (partir, arriver, tomber, les pronominaux). Le participe suit les accords que tu connais. EN: A simple-past auxiliary plus a participle, with the usual agreements.",
    examples: [
      { itemId: E(1616), note: 'nous eûmes posé : avoir' },
      { itemId: E(1622), note: 'elle fut sortie : être, accord' },
      { itemId: E(1628), note: 'eut sept ans : un nom suit, ce n’est pas un passé antérieur' },
    ],
  },

  pronominal: {
    term: 'se fut assis',
    title: 'Le pronominal au passé antérieur',
    body: "Il se fut assis, elles se furent installées : le pronominal prend être, et le participe s’accorde le plus souvent avec le sujet. Quand le pronom vaut « à soi » ou « l’un à l’autre » (se dire adieu), pas d’accord. EN: Pronominal verbs take être; the participle usually agrees with the subject.",
    examples: [
      { itemId: E(1632), note: 'il se fut assis' },
      { itemId: E(1634), note: 'elles se furent installées' },
      { itemId: E(1636), note: 'ils se furent dit adieu : pas d’accord' },
    ],
  },

  passif: {
    term: 'fut + passif',
    title: 'Fut et un participe : deux lectures',
    body: "Si le verbe prend être au passé composé (partir, tomber), fut parti est un passé antérieur. S’il est transitif (envoyer, fermer), fut envoyée est un passif au passé simple. Transpose : est parti, ou a été envoyée ? Eut été et un participe, c’est le passif au passé antérieur. EN: An être verb gives a passé antérieur; a transitive verb gives a passive.",
    examples: [
      { itemId: E(1648), note: 'fut parti : passé antérieur' },
      { itemId: E(1650), note: 'fut envoyée : passif' },
      { itemId: E(1654), note: 'eurent été terminés : passif au passé antérieur' },
    ],
  },

  charniere: {
    term: 'la charnière',
    title: 'Les conjonctions de l’enchaînement',
    body: "Quand, lorsque, dès que, aussitôt que, après que, une fois que : la subordonnée au passé antérieur ferme une étape, et la principale, au passé simple, lance la suivante. Après que garde l’indicatif : après qu’il eut fini. EN: The time hinge plus passé antérieur, then a passé simple main clause.",
    examples: [
      { itemId: E(1664), note: 'aussitôt que' },
      { itemId: E(1668), note: 'après que, à l’indicatif' },
      { itemId: E(1666), note: 'une fois que' },
    ],
  },

  apeine: {
    term: 'à peine… que',
    title: 'À peine eut-il… que',
    body: "À peine en tête, le sujet inversé, le passé antérieur, puis que et un passé simple : la deuxième action tombe sur la première. Sans inversion, à peine se glisse après l’auxiliaire. Ne… pas plus tôt… que dit la même chose. EN: Barely had he…, when: the second action lands on the first.",
    examples: [
      { itemId: E(1680), note: 'à peine eut-il ouvert' },
      { itemId: E(1682), note: 'un nom sujet : le train… fut-il parti' },
      { itemId: E(1688), note: 'ne… pas plus tôt… que' },
    ],
  },

  bientot: {
    term: 'eut bientôt',
    title: 'Dans une phrase seule',
    body: "Sans conjonction, le passé antérieur suit souvent bientôt, vite, en un instant, en quelques minutes : il dit que le résultat est atteint, et vite. Il eut bientôt fini n’est pas il finit bientôt : le premier dit le résultat, le second l’action. EN: In a main clause, a result reached quickly.",
    examples: [
      { itemId: E(1696), note: 'il eut bientôt rangé' },
      { itemId: E(1698), note: 'en un instant' },
      { itemId: E(1704), note: 'avec être : furent bientôt partis' },
    ],
  },

  pqp: {
    term: 'avait fini',
    title: 'Le plus-que-parfait à côté',
    body: "Le plus-que-parfait garde un fait accompli à distance : une habitude (quand il avait soupé, il sortait), un décor, un fait lointain (elle avait quitté la ville depuis un mois). Le passé antérieur boucle une seule étape, juste avant la suivante. EN: The plus-que-parfait keeps a fact at a distance; the passé antérieur closes one step just before the next.",
    examples: [
      { itemId: E(1712), note: 'une habitude' },
      { itemId: E(1713), note: 'ce soir-là, une fois' },
      { itemId: E(1718), note: 'un mois avant : le plus-que-parfait' },
    ],
  },

  rythme: {
    term: 'le rythme',
    title: 'Ce que le temps fait à la page',
    body: "Le passé antérieur serre l’enchaînement : chaque geste est bouclé avant le suivant, le récit avance par paliers, sans temps mort. Deux passés simples à la suite donnent un effet plus abrupt ; une phrase seule avec bientôt fait passer toute une action en une ligne. EN: It tightens the sequence; the page moves in stages with no dead time.",
    examples: [
      { itemId: E(1728), note: 'deux gestes, un palier' },
      { itemId: E(1729), note: 'les mêmes, juxtaposés' },
      { itemId: E(1733), note: 'une soirée bouclée en une subordonnée' },
    ],
  },

  surcompose: {
    term: 'a eu fini',
    title: 'Le passé surcomposé, à reconnaître',
    body: "Quand j’ai eu fini : à l’oral, surtout après quand, dès que ou une fois que, c’est le pendant parlé du passé antérieur. Sans subordonnée (j’en ai eu vu), il est régional, surtout dans le sud de la France et en Suisse romande. Tu le reconnais ; à l’écrit soigné, on ne l’emploie pas. EN: The spoken counterpart; recognise it, do not prescribe it.",
    examples: [
      { itemId: E(1760), note: 'après quand, à l’oral' },
      { itemId: E(1766), note: 'régional, sans subordonnée' },
      { itemId: E(1761), note: 'à l’écrit soigné' },
    ],
  },

  aujourdhui: {
    term: 'aujourd’hui',
    title: 'Le dire aujourd’hui',
    body: "Pour raconter une page au passé antérieur : quand il a fini, après avoir fini, une fois qu’il a fini, ou il venait de finir quand. Dans un récit au passé composé, la conjonction porte déjà l’ordre : deux passés composés suffisent. EN: Four modern routes; the conjunction carries the order.",
    examples: [
      { itemId: E(1745), note: 'quand elle a terminé' },
      { itemId: E(1746), note: 'après avoir terminé' },
      { itemId: E(1748), note: 'il venait à peine d’arriver' },
    ],
  },
};
