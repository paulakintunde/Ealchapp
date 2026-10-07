// c1.18.l1 « Les faux amis savants » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 6 to 11 characters.
//
// C1 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ». Examples cite corpus rows by id and never
// restate the French.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './faux-amis-savants-corpus.ts';

export const FAUX_AMIS_SAVANTS_TERMS: Record<string, LessonTerm> = {
  selon: {
    term: 'selon qui',
    title: 'Selon l’OQLF, selon l’Académie, selon Le Robert',
    body: 'Un emploi critiqué n’est pas toujours une faute aux yeux de tous. Avant de corriger quelqu’un, demande-toi qui condamne l’emploi, et si un autre ouvrage l’accepte. Quand ils se partagent, dis-le. EN: A criticised use is not always wrong for everyone: say who condemns it and who accepts it.',
    examples: [
      { itemId: E(1006), note: 'la règle de la leçon' },
      { itemId: E(1005), note: 'les ouvrages ne sont pas d’accord' },
      { itemId: E(1011), note: 'un emploi critiqué' },
    ],
  },

  initier: {
    term: 'initier',
    title: 'Initier quelqu’un, lancer un projet',
    body: 'Initier, c’est faire découvrir un savoir à quelqu’un : on initie un enfant au piano. Au sens de commencer, l’OQLF et l’Académie le déconseillent : dis lancer, amorcer, entamer, être à l’origine de. EN: Initier means to introduce someone to something; for starting a project, say lancer.',
    examples: [
      { itemId: E(1021), note: 'le verdict' },
      { itemId: E(1016), note: 'lancer un projet' },
      { itemId: E(1019), note: 'le sens français' },
    ],
  },

  opportunite: {
    term: 'opportunité',
    title: 'Occasion ou opportunité',
    body: 'L’opportunité, c’est le caractère de ce qui vient à propos : on discute l’opportunité d’une mesure. Pour une circonstance favorable, l’Académie y voit un anglicisme et l’OQLF le juge critiqué ; Le Robert l’enregistre. Occasion ne divise personne. EN: For a chance, occasion is safe; opportunité in that sense is criticised by some, recorded by Le Robert.',
    examples: [
      { itemId: E(1033), note: 'le verdict partagé' },
      { itemId: E(1028), note: 'une belle occasion' },
      { itemId: E(1031), note: 'le sens français' },
    ],
  },

  alternative: {
    term: 'alternative',
    title: 'L’alternative, le choix entre deux',
    body: 'Au sens strict, l’alternative est le choix lui-même entre deux solutions. Pour chacune des possibilités, l’OQLF, Le Robert et Usito critiquent alternative : dis option, solution de rechange, possibilité. EN: An alternative is the choice between two; each possibility is an option.',
    examples: [
      { itemId: E(1044), note: 'le verdict' },
      { itemId: E(1042), note: 'une vraie alternative' },
      { itemId: E(1040), note: 'une solution de rechange' },
    ],
  },

  impacter: {
    term: 'impacter',
    title: 'Toucher, affecter, peser sur',
    body: 'Selon l’Académie, impacter est une forme fautive ; l’OQLF le déconseille. Le Robert l’enregistre comme anglicisme, Usito le dit parfois critiqué. Le verbe précis dit plus : toucher, ralentir, faire baisser, avoir une incidence sur. EN: Impacter is criticised; the precise verb says more.',
    examples: [
      { itemId: E(1057), note: 'le verdict partagé' },
      { itemId: E(1052), note: 'toucher' },
      { itemId: E(1053), note: 'avoir une incidence sur' },
    ],
  },

  academique: {
    term: 'académique',
    title: 'Académique, universitaire, polyvalent',
    body: 'Académique renvoie à une académie, ou à un style trop conventionnel. Pour l’université, l’Académie et l’OQLF préfèrent universitaire ou scolaire. Même famille de piège : versatile veut dire changeant, et un outil à plusieurs usages est polyvalent. EN: For university matters, say universitaire; for a multi-purpose tool, polyvalent.',
    examples: [
      { itemId: E(1069), note: 'académique' },
      { itemId: E(1070), note: 'versatile' },
      { itemId: E(1066), note: 'un style académique' },
    ],
  },

  juridiction: {
    term: 'juridiction',
    title: 'Juridiction, compétence, ressort',
    body: 'Une juridiction est un tribunal, ou le pouvoir de juger. Pour l’autorité d’un gouvernement, dis compétence ; pour son territoire, ressort ; pour d’autres pays, dis simplement d’autres pays. EN: A juridiction judges; governments have compétences.',
    examples: [
      { itemId: E(1080), note: 'le verdict' },
      { itemId: E(1076), note: 'la compétence des provinces' },
      { itemId: E(1077), note: 'une juridiction pénale' },
    ],
  },

  eligible: {
    term: 'éligible',
    title: 'Éligible, admissible, avoir droit à',
    body: 'Éligible veut d’abord dire qui peut être élu. Pour une aide ou une bourse, les ouvrages se partagent : l’Académie et l’OQLF le déconseillent, Le Robert l’enregistre sans marque. Admissible et avoir droit à passent partout. EN: For a grant, the authorities differ; admissible is safe everywhere.',
    examples: [
      { itemId: E(1092), note: 'le verdict partagé' },
      { itemId: E(1088), note: 'admissible à une bourse' },
      { itemId: E(1091), note: 'le sens français' },
    ],
  },

  numerique: {
    term: 'numérique',
    title: 'Numérique, et les doigts du digital',
    body: 'Digital renvoie aux doigts : les empreintes digitales. Pour les données et les écrans, l’Académie, FranceTerme et l’OQLF recommandent numérique ; Le Robert marque digital comme anglicisme. Numériser, la numérisation suivent. EN: Digital means of the fingers; for data, say numérique.',
    examples: [
      { itemId: E(1104), note: 'le verdict' },
      { itemId: E(1100), note: 'numériser' },
      { itemId: E(1102), note: 'les empreintes digitales' },
    ],
  },

  questionner: {
    term: 'questionner',
    title: 'Questionner, remettre en question, faire sens',
    body: 'On questionne une personne. Une décision, on la remet en question ou on la met en doute : l’OQLF déconseille questionner en ce sens. Faire sens divise : l’Académie le critique, l’OQLF le juge ancien. EN: Question a person; call a decision into question.',
    examples: [
      { itemId: E(1116), note: 'questionner' },
      { itemId: E(1117), note: 'faire sens' },
      { itemId: E(1113), note: 'mettre en doute' },
    ],
  },

  oral: {
    term: 'à l’oral',
    title: 'Les emprunts de l’oral québécois',
    body: 'Canceller, céduler, booker s’entendent au bureau, surtout au Québec. L’OQLF les déconseille ; à l’écrit, dis annuler, fixer ou programmer, réserver. EN: Heard in speech; in writing, annuler, fixer, réserver.',
    examples: [
      { itemId: E(1128), note: 'le verdict' },
      { itemId: E(1125), note: 'fixer une réunion' },
      { itemId: E(1126), note: 'réserver une salle' },
    ],
  },
};
