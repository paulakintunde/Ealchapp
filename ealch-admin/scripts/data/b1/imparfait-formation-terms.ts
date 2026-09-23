// b1.01.l1 « L'imparfait : la formation » — the lesson glossary. REBUILD v2.
//
// DRAFT. Defined once, surfaced wherever used via a section's `terms` chips.
// THREE CHIPS PER SECTION AT MOST, 37-character budget for the chip row, so
// every `term` label is short (longest: « la base nous », 12).
//
// Body: simple French, tu, ending on a one-line gloss starting « EN: ». Every
// key is surfaced by at least one section (asserted in the scratch validator).
//
// The reframe lives in the corpus and is re-exported here.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E, REFRAME, REFRAME_EN, PRESENT_ER_REF, ER_EXC_REF, PRONOMINAUX_REF, Cap } from './imparfait-formation-corpus.ts';

export { REFRAME, REFRAME_EN };

export const IMPARFAIT_FORMATION_TERMS: Record<string, LessonTerm> = {
  base: {
    term: 'la base nous',
    title: 'Tout part de nous',
    body: 'Pour trouver la base, prends le présent avec nous et enlève -ons. nous parlons donne parl-, nous finissons donne finiss-, nous vendons donne vend-. EN: the stem is the present nous form minus -ons.',
    examples: [
      { itemId: 'fr.a2.verbes.103', note: 'nous parlons, donc parl-' },
      { itemId: E(3), note: 'et voici nous parlions' },
      { itemId: E(404), note: 'nous choisissons, donc choisiss-' },
    ],
  },

  fins: {
    term: 'six fins',
    title: 'Les mêmes pour tous les verbes',
    body: 'Les fins sont toujours -ais, -ais, -ait, -ions, -iez, -aient. Il n’y a pas de groupe à choisir : tous les verbes prennent les mêmes. EN: six endings, identical for every verb.',
    examples: [
      { itemId: E(1), note: 'je parlais' },
      { itemId: E(4), note: 'vous parliez' },
      { itemId: E(5), note: 'ils parlaient' },
    ],
  },

  son: {
    term: 'un seul son',
    title: 'Quatre formes, un son',
    body: `parlais, parlait et parlaient se disent tous [paʁ.lɛ]. À l’oral, c’est le sujet qui dit qui parle, comme au présent dans ${PRESENT_ER_REF}. À l’écrit, choisis la bonne fin. EN: four forms, one sound; the subject says who.`,
    examples: [
      { itemId: E(1), note: 'je parlais' },
      { itemId: E(2), note: 'il parlait, même son' },
      { itemId: E(5), note: 'ils parlaient, même son' },
    ],
  },

  irreg: {
    term: 'irrégulier ?',
    title: 'Irrégulier au présent, régulier ici',
    body: 'faire, prendre, boire, venir, vouloir... sont irréguliers au présent. Mais leur forme nous existe, alors la recette marche : fais-, pren-, buv-, ven-, voul-. EN: verbs irregular in the present follow the recipe here.',
    examples: [
      { itemId: E(8), note: 'nous faisons, donc je faisais' },
      { itemId: E(9), note: 'nous buvons, donc je buvais' },
      { itemId: E(430), note: 'nous venons, donc je venais' },
    ],
  },

  etre: {
    term: 'ét-',
    title: 'Le seul verbe différent',
    body: 'nous sommes ne finit pas par -ons, donc la recette ne marche pas. être a sa propre base : ét-. Les fins, elles, sont normales : j’étais, nous étions. EN: être alone has its own stem, ét-.',
    examples: [
      { itemId: E(16), note: "j'étais" },
      { itemId: E(17), note: 'nous étions' },
      { itemId: E(470), note: "c'était, la forme la plus fréquente" },
    ],
  },

  ger: {
    term: '-ger',
    title: 'Un e pour garder [ʒ]',
    body: `${Cap(ER_EXC_REF)} l’a montré au présent : manger garde un e devant a et o. Devant i, pas besoin : je mangeais, mais nous mangions. EN: -ger keeps e before a, never before i.`,
    examples: [
      { itemId: E(20), note: 'je mangeais, avec e' },
      { itemId: E(21), note: 'nous mangions, sans e' },
      { itemId: E(474), note: 'nous nagions, sans e' },
    ],
  },

  cer: {
    term: '-cer',
    title: 'Une cédille pour garder [s]',
    body: 'commencer prend un ç devant a et o. Devant i, le c fait déjà [s] : je commençais, mais nous commencions. EN: -cer takes ç before a, never before i.',
    examples: [
      { itemId: E(23), note: 'je commençais, avec ç' },
      { itemId: E(24), note: 'nous commencions, sans ç' },
      { itemId: E(489), note: 'il lançait, avec ç' },
    ],
  },

  deuxI: {
    term: 'deux i',
    title: 'La base finit par i ou y',
    body: 'étudier donne étudi-. Avec -ions ou -iez, tu écris deux i : nous étudiions. Même chose avec y : nous voyions, nous payions. L’oreille aide peu : suis la règle. EN: stem i or y plus -ions/-iez gives a double i.',
    examples: [
      { itemId: E(26), note: 'nous étudiions' },
      { itemId: E(11), note: 'nous voyions' },
      { itemId: E(29), note: 'nous payions' },
    ],
  },

  impers: {
    term: 'avec il',
    title: 'Les verbes sans personne',
    body: 'il y avait, il fallait, il pleuvait, il neigeait, il faisait beau, il valait mieux : ici, il ne représente personne. On les apprend entiers. EN: impersonal il; learn these as whole chunks.',
    examples: [
      { itemId: E(32), note: 'il y avait' },
      { itemId: E(31), note: 'il fallait' },
      { itemId: E(515), note: 'il faisait froid' },
    ],
  },

  pron: {
    term: 'me, ne...pas',
    title: 'Les petits mots ne bougent pas',
    body: `Le pronom (me, te, se, nous, vous) et la négation (ne... pas, ne... jamais) restent à leur place, comme au présent dans ${PRONOMINAUX_REF}. Seul le verbe change. EN: pronouns and negation stay put; only the verb changes.`,
    examples: [
      { itemId: E(523), note: 'je me levais' },
      { itemId: E(528), note: 'je ne savais pas' },
      { itemId: E(529), note: "il n'y avait personne" },
    ],
  },

  homo: {
    term: '-er, -é, -ais',
    title: 'Même verbe, formes voisines',
    body: 'parler, parlé, parlais, parlait, parlaient se ressemblent beaucoup à l’oral. Le vrai indice : avec j’ai devant, c’est parlé. Sans auxiliaire, c’est l’imparfait. EN: j’ai before the verb means parlé; no auxiliary means imparfait.',
    examples: [
      { itemId: 'fr.a2.verbes.552', note: "j'ai parlé" },
      { itemId: E(544), note: 'je parlais' },
      { itemId: 'fr.sons.muettes.036', note: 'parler' },
    ],
  },
};
