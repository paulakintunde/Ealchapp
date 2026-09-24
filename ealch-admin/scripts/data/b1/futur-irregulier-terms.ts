// b1.06.l1 « Le futur simple : les radicaux irréguliers » — the lesson
// glossary. DRAFT, to RICH-LESSON-STANDARD.md.
//
// Defined once, surfaced wherever used through a section's `terms` chips.
// THREE CHIPS PER SECTION AT MOST, 37-character budget for the chip row, so
// every `term` label is short (longest: « la prédiction », 13).
//
// Body: simple French, tu, ending on a one-line gloss starting « EN: ». Every
// key is surfaced by at least one section (asserted in the scratch validator).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, REFRAME, REFRAME_EN, THE_R, THE_R_EN } from './futur-irregulier-corpus.ts';

export { REFRAME, REFRAME_EN, THE_R, THE_R_EN };

export const FUTUR_IRREGULIER_TERMS: Record<string, LessonTerm> = {
  /** Half one of the reframe. */
  radical: {
    term: 'le radical',
    title: 'La partie qui bouge',
    body: `Le radical, c'est le début du mot, avant la terminaison. Pour la plupart des verbes, c'est l'infinitif entier. Pour une vingtaine de verbes très courants, c'est autre chose, et il faut le connaître. ${THE_R} EN: the stem is the front of the word; for about twenty common verbs it is not the infinitive.`,
    examples: [
      { itemId: E(200), note: 'être donne ser-' },
      { itemId: E(207), note: 'aller donne ir-' },
      { itemId: E(212), note: "et ici, le radical EST l'infinitif" },
    ],
  },

  /** Half two of the reframe: the part that never moves. */
  fin: {
    term: 'la fin',
    title: 'Les six mêmes terminaisons',
    body: `-ai, -as, -a, -ons, -ez, -ont. Ce sont les six terminaisons du futur, sur tous les verbes de la langue. Régulier ou irrégulier, tu ne changes jamais cette moitié du mot. ${REFRAME} EN: six endings, on every verb in the language, and you never change them.`,
    examples: [
      { itemId: E(339), note: '-ez sur aur-' },
      { itemId: E(343), note: '-ez sur pourr-' },
      { itemId: E(338), note: 'les six, sur une seule carte' },
    ],
  },

  /** How the twenty stems are made learnable. */
  famille: {
    term: 'une famille',
    title: 'Par groupes, pas en liste',
    body: "Vingt radicaux appris un par un, c'est une liste. Groupés, ce sont cinq petites familles : les six grands, les -rr-, les -dr-, les -oir et les composés. Tu retiens la famille, puis les verbes dedans. EN: five small families instead of one long list.",
    examples: [
      { itemId: E(260), note: 'la famille en -rr-' },
      { itemId: E(276), note: 'la famille en -dr-' },
      { itemId: E(299), note: 'la famille en -oir' },
    ],
  },

  /** The -rr- family. */
  'double-r': {
    term: 'le double r',
    title: 'Deux r, un seul son',
    body: "pourr-, verr-, enverr-, courr-, mourr- : deux r à l'écrit, un seul r à l'oreille. Personne n'entend la différence entre je pourrai et une forme à un seul r. C'est un point d'orthographe, et il se teste en écrivant. EN: two written r, one spoken r, so this is tested in writing.",
    examples: [
      { itemId: E(209), note: 'pouvoir' },
      { itemId: E(247), note: 'voir' },
      { itemId: E(252), note: 'envoyer' },
    ],
  },

  /** The impersonals. */
  impersonnel: {
    term: 'impersonnel',
    title: 'Un seul sujet, il',
    body: "il faudra, il y aura, il pleuvra, il vaudra mieux : ces verbes n'ont qu'une personne. Le il ne désigne personne, il tient juste la place du sujet. Tu ne diras jamais nous faudrons. EN: these verbs have one person only, and the il stands for nobody.",
    examples: [
      { itemId: E(211), note: 'falloir' },
      { itemId: E(302), note: 'il y a, au futur' },
      { itemId: E(297), note: 'la météo' },
    ],
  },

  /** The compounds that come free. */
  compose: {
    term: 'un composé',
    title: 'Le préfixe est gratuit',
    body: "revenir, devenir, obtenir, retenir, refaire, revoir : un préfixe devant un verbe que tu connais déjà. Le radical ne change pas, tu colles seulement le préfixe devant. Un radical appris, cinq verbes gagnés. EN: a prefix on a verb you already have; the stem is unchanged.",
    examples: [
      { itemId: E(320), note: 'venir donne revenir' },
      { itemId: E(326), note: 'tenir donne obtenir' },
      { itemId: E(337), note: "et l'exception, prévoir" },
    ],
  },

  /** What a future actually does, half one. */
  promesse: {
    term: 'la promesse',
    title: 'Ce que tu engages',
    body: "Quand tu dis je serai là, je t'enverrai ça, je te tiendrai au courant, tu ne décris pas l'avenir : tu prends un engagement. C'est l'emploi le plus fréquent du futur dans un message. EN: in a message the future is usually a commitment, not a description.",
    examples: [
      { itemId: E(202), note: 'le rendez-vous' },
      { itemId: E(266), note: 'la promesse, en toutes lettres' },
      { itemId: E(384), note: 'la formule toute faite' },
    ],
  },

  /** What a future actually does, half two. */
  prediction: {
    term: 'la prédiction',
    title: 'Ce que tu annonces',
    body: "Le colis arrivera jeudi, il pleuvra toute la semaine, les prix augmenteront : tu annonces quelque chose que tu ne contrôles pas. Ni promesse ni plan : une prévision. EN: an announcement about something you do not control.",
    examples: [
      { itemId: E(377), note: 'la livraison' },
      { itemId: E(298), note: 'la météo' },
      { itemId: E(379), note: "l'économie" },
    ],
  },

  /** The act 9 lens. */
  oreille: {
    term: "à l'oreille",
    title: 'Deux radicaux, zéro confusion',
    body: "je serai et j'étais n'ont pas un son en commun ; j'aurai et j'avais non plus. Le futur et l'imparfait des mêmes verbes prennent des radicaux complètement différents, alors l'oreille tranche tout de suite. EN: the two tenses take different stems, so the ear decides at once.",
    examples: [
      { itemId: E(356), note: 'le futur' },
      { itemId: E(357), note: "l'imparfait" },
      { itemId: E(372), note: 'les deux radicaux, côte à côte' },
    ],
  },

  /** The instinct the whole lesson fights. */
  infinitif: {
    term: "l'infinitif",
    title: "Le réflexe qu'il faut couper",
    body: "Pour la plupart des verbes, le radical du futur EST l'infinitif : parler donne parlerai. Ton réflexe est donc de coller la terminaison derrière l'infinitif. Sur ces vingt verbes, ce réflexe donne une forme que personne ne dit. EN: the instinct is right most of the time and wrong on these twenty verbs.",
    examples: [
      { itemId: E(213), note: "l'infinitif suffit" },
      { itemId: E(208), note: 'ici non : venir donne viendr-' },
      { itemId: E(209), note: 'ni ici : pouvoir donne pourr-' },
    ],
  },
};
