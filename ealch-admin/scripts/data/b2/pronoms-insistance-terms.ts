// b2.11.l1 « Les pronoms d'insistance »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters; the two widest (« le
// projecteur », « le pronom soi ») are never used three together, and most
// sections carry one or two chips.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './pronoms-insistance-corpus.ts';

export const PRONOMS_INSISTANCE_TERMS: Record<string, LessonTerm> = {
  projecteur: {
    term: 'le projecteur',
    title: 'Une personne dans la lumière',
    body: "Quand plusieurs personnes sont sur la scène, le pronom tonique braque le projecteur sur l'une d'elles : pour l'opposer aux autres, pour dire que c'est elle, et pas une autre, ou pour que le lecteur sache de qui on parle. EN: The stressed pronoun picks one person out when several are on stage.",
    examples: [
      { itemId: E(1800), note: 'deux avis, deux personnes dans la lumière' },
      { itemId: E(1805), note: 'une seule personne, contre toute la salle' },
      { itemId: E(1918), note: 'la lumière passe de Marc à Paul' },
    ],
  },

  contraste: {
    term: 'le contraste',
    title: 'Deux camps, deux pronoms',
    body: "Pour opposer deux personnes, donne à chacune son pronom tonique, en tête ou juste après le nom, puis garde le pronom sujet devant le verbe : lui, il adore ; moi, je déteste. Sans eux, les deux avis se suivent comme une liste. EN: Give each side its stressed pronoun; the subject pronoun stays before the verb.",
    examples: [
      { itemId: E(1814), note: 'toi contre moi' },
      { itemId: E(1818), note: 'après un nom sujet, entre virgules' },
      { itemId: E(1828), note: 'en fin de phrase, à l’oral' },
    ],
  },

  reprise: {
    term: 'la reprise',
    title: 'Détacher un mot, puis le reprendre',
    body: "À l'oral, on détache souvent un mot en tête ou en fin de phrase, et un pronom le reprend à l'intérieur : ce film, je l'ai adoré ; il est fou, lui. Le pronom de reprise est obligatoire (le, la, les, lui, y, en). À l'écrit neutre, on garde l'ordre simple : j'ai adoré ce film. EN: Speech detaches a word and resumes it with a pronoun; neutral writing keeps the plain order.",
    examples: [
      { itemId: E(1832), note: 'moi, puis ce film, repris par l’' },
      { itemId: E(1838), note: 'un lieu, repris par y' },
      { itemId: E(1833), note: 'la même idée, à l’écrit neutre' },
    ],
  },

  seulDevant: {
    term: 'seul devant',
    title: 'Le pronom tonique, seul sujet',
    body: "Lui et eux peuvent être sujets tout seuls quand ils s'opposent à quelqu'un ou qu'ils portent seul, aussi, non plus, même : lui seul le savait ; eux ont refusé, nous avons accepté. Moi et toi ont besoin de seul : moi seul peux signer. Le verbe garde la personne du pronom. EN: Lui and eux can be the whole subject when contrasted or qualified; moi and toi only with seul.",
    examples: [
      { itemId: E(1849), note: 'lui seul, troisième personne' },
      { itemId: E(1850), note: 'eux contre nous' },
      { itemId: E(1851), note: 'moi seul peux, première personne' },
    ],
  },

  accord: {
    term: 'l’accord',
    title: 'Deux sujets, un seul verbe',
    body: "Quand deux sujets sont réunis par et ou par ni… ni, le verbe prend la personne la plus proche de celui qui parle : Paul et moi sommes (nous), toi et lui êtes (vous), Marie et lui sont (ils). On peut reprendre avec nous ou vous : Paul et moi, nous sommes. Par politesse, moi se met en dernier. EN: The person closest to the speaker wins: moi gives nous, toi gives vous.",
    examples: [
      { itemId: E(1865), note: 'Paul et moi : nous' },
      { itemId: E(1867), note: 'toi et lui : vous, repris' },
      { itemId: E(1870), note: 'ni toi ni moi : nous' },
    ],
  },

  relief: {
    term: 'le relief',
    title: "C'est … qui, c'est … que",
    body: "Pour désigner la personne qui a fait quelque chose, encadre le pronom tonique : c'est moi qui ai proposé, c'est à toi que je parle. Après c'est moi qui, le verbe reste à la personne du pronom : c'est moi qui ai, c'est nous qui sommes, c'est vous qui avez. EN: After c'est moi qui, the verb keeps the pronoun's person: never c'est moi qui a.",
    examples: [
      { itemId: E(1886), note: 'moi qui ai' },
      { itemId: E(1882), note: 'nous qui sommes' },
      { itemId: E(1889), note: 'à toi que' },
    ],
  },

  renfort: {
    term: 'le renfort',
    title: 'Même, aussi, seul, tous, deux',
    body: "Un petit mot après le pronom tonique élargit ou resserre la lumière : moi-même (personne d'autre), eux aussi (comme les autres), lui seul (personne d'autre), vous tous (sans exception), vous deux (ces deux-là). Même prend un s après un pronom pluriel : nous-mêmes, eux-mêmes. EN: A word after the pronoun widens or narrows the circle; même is plural after a plural pronoun.",
    examples: [
      { itemId: E(1908), note: 'vous-mêmes, plusieurs personnes' },
      { itemId: E(1902), note: 'vous deux' },
      { itemId: E(1904), note: 'vous tous' },
    ],
  },

  ambiguite: {
    term: 'l’ambiguïté',
    title: 'Qui est il ?',
    body: "Quand deux hommes sont dans la phrase, il continue d'habitude avec le premier sujet, et le lecteur hésite. Lui, en tête, fait passer la lumière sur l'autre : Marc a croisé Paul ; lui ne l'a pas reconnu, c'est Paul qui n'a pas reconnu Marc. Même chose avec elle, elle. EN: Il tends to continue with the same subject; a stressed lui switches to the other person.",
    examples: [
      { itemId: E(1918), note: 'lui : c’est Paul' },
      { itemId: E(1919), note: 'il : on hésite' },
      { itemId: E(1920), note: 'elle, elle : c’est la mère' },
    ],
  },

  soi: {
    term: 'le pronom soi',
    title: 'Soi, pour personne en particulier',
    body: "Soi reprend un sujet qui ne désigne personne de précis : on, chacun, personne, tout le monde, il faut, un infinitif. Chacun pour soi, on est bien chez soi, il faut avoir confiance en soi. Dès que le sujet est une personne précise, c'est lui ou elle : Paul est rentré chez lui. EN: Soi refers back to an indefinite subject; a named person takes lui or elle.",
    examples: [
      { itemId: E(1936), note: 'on : chez soi' },
      { itemId: E(1940), note: 'Paul : chez lui' },
      { itemId: E(1937), note: 'une expression figée' },
    ],
  },

  aMoi: {
    term: 'à moi, à lui',
    title: 'À qui, et à qui le tour',
    body: "À + pronom tonique dit à qui est une chose (c'est à moi, ce vélo est à eux), à qui revient le tour ou le rôle (c'est à toi de jouer, c'est à lui de s'excuser), et insiste sur l'appartenance (un ami à moi, son livre à elle). EN: À + stressed pronoun: whose it is, whose turn it is, and whose own.",
    examples: [
      { itemId: E(1952), note: 'à moi de : mon rôle' },
      { itemId: E(1955), note: 'un ami à moi : un de mes amis' },
      { itemId: E(1963), note: 'à elle lève le doute de son' },
    ],
  },

  registre: {
    term: 'le registre',
    title: "L'oral et l'écrit",
    body: "Moi, je, les mots détachés, nous, on et c'est eux qui appartiennent à l'oral. À l'écrit soigné, on dit pour ma part, quant à moi, quant à eux, ce sont eux qui, et on garde lui seul, eux-mêmes, c'est moi qui. Aucun des deux n'est faux : chacun a sa place. EN: Detached words and moi, je belong to speech; careful writing uses pour ma part, quant à eux, ce sont eux qui.",
    examples: [
      { itemId: E(1967), note: 'pour ma part : l’écrit' },
      { itemId: E(1971), note: 'nous, on : l’oral' },
      { itemId: E(1974), note: 'quant à eux : l’écrit' },
    ],
  },
};
