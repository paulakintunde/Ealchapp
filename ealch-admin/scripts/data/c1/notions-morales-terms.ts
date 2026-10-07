// c1.16.l1 « Mémoire, vérité, beauté, éthique » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 9 to 12 characters; no section carries more than
// two chips.
//
// C1 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ». Examples cite corpus rows by id and never
// restate the French.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './notions-morales-corpus.ts';

export const NOTIONS_MORALES_TERMS: Record<string, LessonTerm> = {
  balance: {
    term: 'le mot juste',
    title: 'Chaque mot pèse autre chose',
    body: 'Dans ce domaine, deux mots voisins pèsent rarement la même chose : l’intention ou les faits, une faute ou une perte, une personne ou un groupe. Dis ce que tu poses sur la balance, et le mot suit. EN: Ask what each word weighs, and the right word follows.',
    examples: [
      { itemId: E(1202), note: 'la règle de la leçon' },
      { itemId: E(1208), note: 'une personne, un récit' },
      { itemId: E(1211), note: 'le mot juste pèse' },
    ],
  },

  sincerite: {
    term: 'la sincérité',
    title: 'Sincère, véridique, vraisemblable',
    body: 'Sincère pèse la personne : elle dit ce qu’elle pense. Véridique pèse le récit : il dit ce qui s’est passé. Vraisemblable ne pèse que l’apparence : cela a l’air vrai. On peut être sincère et se tromper. EN: Sincere is about the speaker, truthful about the account, plausible about appearances.',
    examples: [
      { itemId: E(1223), note: 'la règle de l’acte' },
      { itemId: E(1219), note: 'sincérité et véracité' },
      { itemId: E(1220), note: 'vraisemblable et faux' },
    ],
  },

  mensonge: {
    term: 'le mensonge',
    title: 'Mentir, se tromper, tromper',
    body: 'Mentir, c’est dire faux en le sachant ; se tromper, c’est dire faux en croyant dire vrai. Induire en erreur peut se faire sans le vouloir. On ment aussi par omission, en taisant ce qui compte. EN: Lying is knowingly saying what is false; being wrong is believing it true.',
    examples: [
      { itemId: E(1236), note: 'la frontière : l’intention' },
      { itemId: E(1233), note: 'mentir par omission' },
      { itemId: E(1239), note: 'de bonne foi' },
    ],
  },

  infox: {
    term: 'une infox',
    title: 'Infox, fausse nouvelle, erreur',
    body: 'En France, la Commission d’enrichissement recommande infox et information fallacieuse (2018). Au Québec, l’OQLF privilégie fausse nouvelle et marque infox comme un mot de France. Dans les deux cas, il y a intention de tromper : une erreur de bonne foi n’en est pas une. EN: France recommends infox, Québec prefers fausse nouvelle; both imply intent to deceive.',
    examples: [
      { itemId: E(1250), note: 'la règle de l’acte' },
      { itemId: E(1245), note: 'la définition officielle' },
      { itemId: E(1252), note: 'une erreur, pas une infox' },
    ],
  },

  morale: {
    term: 'la morale',
    title: 'Morale, éthique, déontologie',
    body: 'Dans l’usage courant, la morale dit le bien et le mal pour tous ; l’éthique réfléchit à la bonne façon d’agir dans un domaine ou un cas ; la déontologie fixe les devoirs d’une profession. Les deux premiers mots s’échangent souvent ; le troisième reste celui d’un métier. EN: Morality for everyone, ethics for a case, professional ethics for a trade.',
    examples: [
      { itemId: E(1262), note: 'la règle de l’acte' },
      { itemId: E(1263), note: 'un manquement à la déontologie' },
      { itemId: E(1266), note: 'le moral, au masculin' },
    ],
  },

  remords: {
    term: 'le remords',
    title: 'Remords, regret, honte',
    body: 'Le remords pèse une faute qu’on a commise. Le regret est plus large : il peut peser une simple perte, un voyage manqué. La honte vient du regard des autres ; la culpabilité, du jugement qu’on porte sur soi. EN: Remorse is about a fault; regret can be about a mere loss.',
    examples: [
      { itemId: E(1278), note: 'la règle de l’acte' },
      { itemId: E(1273), note: 'des remords' },
      { itemId: E(1274), note: 'un regret, sans faute' },
    ],
  },

  integrite: {
    term: 'l’intégrité',
    title: 'Intègre, pas intégral',
    body: 'Une personne intègre ne se laisse ni acheter ni corrompre ; elle agit avec probité et déclare ses conflits d’intérêts. Un texte intégral est complet. Deux familles voisines : l’intégrité, l’intégralité. EN: Intègre is about integrity; intégral means complete.',
    examples: [
      { itemId: E(1292), note: 'la règle de l’acte' },
      { itemId: E(1287), note: 'éviter un conflit d’intérêts' },
      { itemId: E(1291), note: 'le texte intégral' },
    ],
  },

  sublime: {
    term: 'le sublime',
    title: 'Le joli, le beau, le sublime',
    body: 'Le joli plaît, sans bouleverser. Le beau s’admire : une harmonie, des proportions justes. Le sublime saisit : une grandeur qui dépasse et inquiète un peu. Beau dit aussi le bien : un beau geste. EN: Pretty pleases, beautiful is admired, sublime overwhelms.',
    examples: [
      { itemId: E(1304), note: 'la règle de l’acte' },
      { itemId: E(1300), note: 'joli, sans plus' },
      { itemId: E(1301), note: 'sans voix : sublime' },
    ],
  },

  gout: {
    term: 'le bon goût',
    title: 'Le goût et l’esthétique',
    body: 'Un jugement de goût se discute avec des raisons, mais il ne se démontre pas. De mauvais goût touche à la morale ; kitsch peut se revendiquer avec humour. Et avoir beau n’a rien à voir avec la beauté : c’est faire en vain. EN: Taste can be argued, not proved; avoir beau means trying in vain.',
    examples: [
      { itemId: E(1319), note: 'la règle de l’acte' },
      { itemId: E(1315), note: 'un goût douteux' },
      { itemId: E(1316), note: 'avoir beau : en vain' },
    ],
  },

  souvenir: {
    term: 'le souvenir',
    title: 'Mémoire et souvenir',
    body: 'Un souvenir est d’abord celui d’une personne : un moment qui revient. La mémoire est la faculté de se souvenir, et aussi ce qu’un groupe garde ensemble. À l’écrit soigné, on se rappelle quelque chose et l’on se souvient de quelque chose. EN: A recollection is first one person’s; memory can be a group’s.',
    examples: [
      { itemId: E(1334), note: 'la règle de l’acte' },
      { itemId: E(1326), note: 'à la mémoire de' },
      { itemId: E(1327), note: 'se rappeler, sans de à l’écrit soigné' },
    ],
  },

  commemorer: {
    term: 'commémorer',
    title: 'Commémorer, l’histoire et la mémoire',
    body: 'On commémore un drame ou une victoire ; on fête un succès ; célébrer peut dire les deux. L’histoire établit les faits par des sources, la mémoire dit ce qu’un groupe en garde, la commémoration le rappelle en public. EN: Commemorate solemnly; history establishes, memory retains.',
    examples: [
      { itemId: E(1348), note: 'la règle de l’acte' },
      { itemId: E(1344), note: 'on ne fête pas un drame' },
      { itemId: E(1346), note: 'devoir de mémoire et histoire' },
    ],
  },
};
