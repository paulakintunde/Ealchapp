// b1.24.l1 « Les emplois de même » : the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, and no section puts
// three of the long ones (12 or 13) together.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './meme-corpus.ts';

export const MEME_TERMS: Record<string, LessonTerm> = {
  /** The whole idea: nothing changes. */
  pareil: {
    term: 'le même',
    title: 'Même : rien ne change',
    body: "Le même livre, c'est ce livre-là, pas un autre. Quand tu dis même, tu dis qu'entre deux choses, rien ne change. EN: le même says nothing changes between two things.",
    examples: [
      { itemId: E(1000), note: 'ton ordinateur et le mien : un seul modèle' },
      { itemId: E(1009), note: 'deux têtes, une idée' },
      { itemId: 'fr.a1.cafe.085', note: 'au café : je ne change rien' },
    ],
  },

  /** Agreement. */
  accord: {
    term: "l'accord",
    title: 'Même prend le nombre du nom',
    body: "Même s'accorde comme un adjectif : un s au pluriel, rien au féminin. Le même quartier, la même rue, les mêmes horaires. EN: même takes an s in the plural and does not change in the feminine.",
    examples: [
      { itemId: E(1015), note: 'masculin singulier' },
      { itemId: E(1016), note: 'féminin : même ne change pas' },
      { itemId: E(1017), note: 'pluriel : un s, et une liaison en z' },
    ],
  },

  /** The comparison frame. */
  memeque: {
    term: 'le même que',
    title: 'Que, et jamais comme',
    body: "Pour dire the same as, tu dis le même ... que. Que présente ce qu'on compare : la même voiture que son voisin. Jamais comme, jamais aussi. EN: the same as is le même ... que, never comme.",
    examples: [
      { itemId: E(1032), note: 'la voiture et le voisin' },
      { itemId: E(1033), note: 'la même chose que, au café' },
      { itemId: E(1045), note: 'du même avis que toi' },
    ],
  },

  /** Pronoun use. */
  pronom: {
    term: 'le même seul',
    title: 'Le même remplace le nom',
    body: "Quand le nom est déjà dit, le même le remplace : j'ai le même. Garde l'article : le même, la même, les mêmes. EN: with no noun after it, le même stands for the noun, and keeps its article.",
    examples: [
      { itemId: E(1050), note: 'le même, sans nom' },
      { itemId: E(1051), note: 'au pluriel' },
      { itemId: E(1060), note: 'une personne qui n’a pas changé' },
    ],
  },

  /** Emphatic pronouns. */
  soi: {
    term: 'moi-même',
    title: 'Toi, et personne d’autre',
    body: "Moi-même, toi-même, lui-même : la personne elle-même, sans aide et sans remplaçant. Le trait d'union est obligatoire, et nous-mêmes prend un s. EN: moi-même means me and nobody else; it keeps its hyphen.",
    examples: [
      { itemId: E(1065), note: 'sans aide' },
      { itemId: E(1066), note: 'un conseil un peu sec' },
      { itemId: E(1078), note: 'la personne importante en personne' },
    ],
  },

  /** Even. */
  even: {
    term: 'même = even',
    title: 'Le cas qu’on n’attendait pas',
    body: "Devant un nom, un pronom ou un complément, même peut vouloir dire even : il ajoute le cas le plus surprenant. Même Paul est venu. EN: même can mean even: it adds the least expected case.",
    examples: [
      { itemId: E(1004), note: 'Paul ne vient jamais' },
      { itemId: E(1086), note: 'même le dimanche' },
      { itemId: E(1092), note: 'même en hiver, au Québec' },
    ],
  },

  /** Placement of even-même. */
  place: {
    term: 'la place',
    title: 'Même devant ce qu’il vise',
    body: "Même se met juste devant ce qu'il vise. Au passé composé, il va entre l'auxiliaire et le participe, comme pas : il a même ri, il n'a même pas ri. EN: même goes right before what it targets.",
    examples: [
      { itemId: E(1104), note: 'le père surprend' },
      { itemId: E(1105), note: 'le rire surprend' },
      { itemId: E(1099), note: 'ne ... même pas' },
    ],
  },

  /** Before or after the noun. */
  apres: {
    term: 'le jour même',
    title: 'Après le nom : exactement celui-là',
    body: "Devant le nom, même compare : le même jour. Après le nom, même insiste sur une seule chose déjà nommée : le jour même, ici même, la bonté même. EN: after the noun, même means that very one.",
    examples: [
      { itemId: E(1116), note: 'ce jour-là, pas un autre' },
      { itemId: E(1117), note: 'deux arrivées, un seul jour' },
      { itemId: E(1118), note: 'la qualité en personne' },
    ],
  },

  /** Concession in speech. */
  quandmeme: {
    term: 'quand même',
    title: 'Malgré l’obstacle',
    body: "Quand même dit que le résultat ne change pas, malgré un obstacle : il pleut, mais on part quand même. Dit seul, avec force, c'est un reproche. EN: quand même means anyway; said alone and sharply, it is a reproach.",
    examples: [
      { itemId: E(1133), note: 'fatigué, et venu' },
      { itemId: E(1135), note: 'un refus poli' },
      { itemId: E(1138), note: 'à l’oral, indigné' },
    ],
  },

  /** Fixed expressions. */
  expressions: {
    term: 'en même temps',
    title: 'Les expressions figées',
    body: "En même temps, de même, tout de même, à même : des blocs qui ne changent jamais. Apprends-les entiers, comme des mots. EN: fixed blocks; learn each one whole.",
    examples: [
      { itemId: E(1149), note: 'deux arrivées, un seul moment' },
      { itemId: E(1151), note: 'de même : pareil' },
      { itemId: E(1154), note: 'tout de même, un peu soigné' },
    ],
  },

  /** Comparing. */
  comparer: {
    term: 'comparer',
    title: 'Ce qui est pareil, ce qui change',
    body: "Pour comparer deux choses, commence par ce qui est pareil, avec le même. Puis dis ce qui change, et termine par ton choix. EN: say what is the same first, then what changes, then your choice.",
    examples: [
      { itemId: E(1165), note: 'pareil : le salaire' },
      { itemId: E(1166), note: 'différent : le travail' },
      { itemId: E(1167), note: 'le choix, quand même' },
    ],
  },
};
