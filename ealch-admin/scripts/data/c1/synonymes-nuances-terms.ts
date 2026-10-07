// c1.17.l1 « Synonymes et nuances » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 10 to 13 characters; no section carries three of
// the 12-13 character labels together.
//
// C1 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ». Examples cite corpus rows by id and never
// restate the French.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './synonymes-nuances-corpus.ts';

export const SYNONYMES_NUANCES_TERMS: Record<string, LessonTerm> = {
  nuancier: {
    term: 'le nuancier',
    title: 'Un synonyme n’est jamais un jumeau',
    body: 'Un dictionnaire des synonymes te donne un éventail de mots voisins, comme le nuancier d’un peintre. Avant de choisir, pèse trois choses : la force du mot, sa couleur (jugement et registre) et ses voisins (les mots avec lesquels il va). EN: A list of synonyms is a fan of shades: weigh strength, colour and neighbours before you choose.',
    examples: [
      { itemId: E(1202), note: 'la règle de la leçon' },
      { itemId: E(1206), note: 'synonymes au dictionnaire, pas dans ta phrase' },
      { itemId: E(1211), note: 'le dictionnaire propose, la phrase dispose' },
    ],
  },

  intensite: {
    term: 'l’intensité',
    title: 'La force d’un mot',
    body: 'Deux synonymes peuvent dire la même chose à des degrés différents : agacer, irriter, exaspérer ; fléchir, s’effondrer. Choisis le cran que les faits justifient, ni plus ni moins. EN: Near-synonyms can say the same thing at different strengths: pick the notch the facts justify.',
    examples: [
      { itemId: E(1222), note: 'trois crans de colère' },
      { itemId: E(1235), note: 'le verbe doit coller au chiffre' },
      { itemId: E(1236), note: 'deux pour cent, pas un effondrement' },
    ],
  },

  connotation: {
    term: 'connotation',
    title: 'La couleur d’un mot',
    body: 'Au-delà du sens, un mot porte un jugement : il approuve (mélioratif), reste neutre, ou blâme (péjoratif). Économe et avare décrivent la même dépense ; le premier loue, le second reproche. EN: Beyond its meaning, a word carries a judgement: approving, neutral or pejorative.',
    examples: [
      { itemId: E(1249), note: 'la dépense est la même' },
      { itemId: E(1250), note: 'compliment ou accusation' },
      { itemId: E(1251), note: 'le même chef, deux jugements' },
    ],
  },

  suffixe: {
    term: 'le suffixe',
    title: 'Les suffixes qui jugent',
    body: 'Certains suffixes ajoutent une nuance : -âtre dit « presque », et souvent « pas très beau » ; -asse, -aud, -ailleur se moquent ou rabaissent. Regarde toujours ce que le mot qualifie : une lueur rougeâtre ne juge rien. EN: Some suffixes add a judgement; -âtre can also simply mean « -ish ».',
    examples: [
      { itemId: E(1263), note: 'presque, et souvent pas très beau' },
      { itemId: E(1253), note: 'une couleur, sans jugement' },
      { itemId: E(1257), note: 'fade, puis fadasse' },
    ],
  },

  euphemisme: {
    term: 'l’euphémisme',
    title: 'Adoucir ou masquer',
    body: 'Un euphémisme atténue une réalité brutale ou déplaisante. Il peut respecter une douleur (s’éteindre), adoucir une remarque, ou masquer un fait (ajuster les effectifs). Le test : le lecteur comprend-il encore ce qui s’est passé ? EN: A euphemism softens; it is fair as long as the reader still understands the fact.',
    examples: [
      { itemId: E(1269), note: 'les mots, jamais les faits' },
      { itemId: E(1267), note: 'un euphémisme qui respecte' },
      { itemId: E(1273), note: 'le fait sous la formule' },
    ],
  },

  collocation: {
    term: 'collocation',
    title: 'Les mots qui vont ensemble',
    body: 'Une collocation est l’association habituelle d’un mot avec un autre : on pose une question, on tient une promesse, on est grièvement blessé. Pars du nom, pas de l’anglais, et vérifie dans un dictionnaire. EN: A collocation is the habitual pairing of words; start from the noun, not from English.',
    examples: [
      { itemId: E(1290), note: 'un nom choisit ses verbes' },
      { itemId: E(1288), note: 'dissiper un malentendu' },
      { itemId: E(1291), note: 'tenir sa promesse' },
    ],
  },

  intensif: {
    term: 'l’intensif',
    title: 'L’intensif attendu',
    body: 'Très est toujours correct, mais chaque mot a ses intensifs habituels : un refus catégorique, une écrasante majorité, un gros fumeur. Grièvement ne va qu’avec blessé et ses voisins ; pour une maladie, dis gravement. EN: Each word has its expected intensifier; grièvement only goes with injury words.',
    examples: [
      { itemId: E(1306), note: 'grièvement blessé, gravement malade' },
      { itemId: E(1304), note: 'une écrasante majorité' },
      { itemId: E(1307), note: 'une pluie battante' },
    ],
  },

  contraire: {
    term: 'le contraire',
    title: 'Le contraire qui va avec le sens',
    body: 'Un mot a autant de contraires que de sens. Doux s’oppose à rigoureux pour un hiver, à emporté pour un caractère, à rêche pour une peau, à salé pour l’eau. Trouve d’abord le sens, puis le contraire. EN: A word has as many opposites as it has meanings.',
    examples: [
      { itemId: E(1319), note: 'trouve d’abord le sens' },
      { itemId: E(1316), note: 'rigoureux, puis doux' },
      { itemId: E(1320), note: 'léger, puis grave' },
    ],
  },

  registre: {
    term: 'le registre',
    title: 'Une étiquette selon la région',
    body: 'Le registre d’un mot dépend aussi de l’endroit où on le lit. Au Québec, magasiner est standard, blonde est familier et char est critiqué : Usito et l’OQLF donnent ces étiquettes. EN: A word’s register can depend on where it is read; check Usito and the OQLF.',
    examples: [
      { itemId: E(1330), note: 'trois mots, trois étiquettes' },
      { itemId: E(1331), note: 'neutre ici, familier ailleurs' },
      { itemId: E(1328), note: 'entre amis, ou dans un formulaire' },
    ],
  },

  passepartout: {
    term: 'passe-partout',
    title: 'Le mot passe-partout',
    body: 'Important, grand, faire, dire : ces mots vont partout, et c’est leur défaut. Dis en quoi la chose compte : un rôle majeur, une somme considérable, une erreur grave. Si rien de plus précis n’est vrai, garde le mot simple. EN: Replace the all-purpose word with one that says how; keep it if nothing more precise is true.',
    examples: [
      { itemId: E(1343), note: 'dis en quoi' },
      { itemId: E(1340), note: 'un rôle majeur' },
      { itemId: E(1344), note: 'garder le mot simple' },
    ],
  },
};
