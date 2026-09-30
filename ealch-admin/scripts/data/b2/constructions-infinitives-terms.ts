// b2.14.l1 « Les constructions infinitives »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The 13-character labels
// (« un seul sujet », « à, de ou rien ») are never used three together; most
// sections carry one or two chips.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './constructions-infinitives-corpus.ts';

export const INFINITIVES_TERMS: Record<string, LessonTerm> = {
  qui: {
    term: 'qui agit',
    title: 'Qui fait l’action ?',
    body: "Un infinitif n'a pas de sujet : c'est la phrase qui dit qui agit. Le plus souvent, c'est le sujet du verbe principal. Après faire, c'est quelqu'un d'autre. Dans une consigne, c'est toi, le lecteur. EN: The sentence tells you who does the infinitive's action.",
    examples: [
      { itemId: E(1206), note: 'c’est moi qui ai compris' },
      { itemId: E(1200), note: 'le garagiste a réparé, pas moi' },
      { itemId: E(1210), note: 'le lecteur de la consigne vérifie' },
    ],
  },

  passe: {
    term: 'le passé',
    title: 'L’infinitif passé',
    body: "Avoir ou être à l'infinitif, puis le participe : avoir fini, être parti, s'être levé. Il dit que l'action est finie AVANT l'autre verbe, même dans le futur. Avec être, le participe s'accorde avec celui qui agit. EN: avoir or être plus the participle: done before the other verb.",
    examples: [
      { itemId: E(1216), note: 'avoir fini' },
      { itemId: E(1223), note: 'elle est partie : partie' },
      { itemId: E(1226), note: 'fini avant vendredi, dans le futur' },
    ],
  },

  apres: {
    term: 'après, avant',
    title: 'Après avoir, avant de',
    body: "Après prend l'infinitif passé : après avoir mangé, après être partie. Avant de prend l'infinitif présent : avant de partir. Pour dire « pas avant que ce soit fini », avant d'avoir fini. EN: après takes the past infinitive, avant de the present.",
    examples: [
      { itemId: E(1222), note: 'après avoir mangé' },
      { itemId: E(1238), note: 'avant de partir' },
      { itemId: E(1241), note: 'pas avant que ce soit fini' },
    ],
  },

  pour: {
    term: 'but ou faute',
    title: 'Pour, deux sens',
    body: "Pour + infinitif présent dit le but, ce qu'on cherche : pour obtenir le poste. Pour + infinitif passé dit la raison d'une sanction ou d'une récompense, pour une chose déjà faite : sanctionné pour avoir menti. EN: pour + present is a purpose; pour + past is the reason.",
    examples: [
      { itemId: E(1256), note: 'le but : obtenir le poste' },
      { itemId: E(1255), note: 'la faute : il a menti' },
      { itemId: E(1257), note: 'le mérite : elle l’a retrouvé' },
    ],
  },

  sans: {
    term: 'sans que',
    title: 'Sans, sans que',
    body: "Sans + infinitif quand la même personne agit : il est parti sans payer, sans avoir payé. Sans que + subjonctif quand une autre personne entre dans la phrase : nous sommes partis sans que les enfants s'en aperçoivent. EN: sans + infinitive for one subject, sans que + subjunctive for two.",
    examples: [
      { itemId: E(1271), note: 'lui part, lui ne paie pas' },
      { itemId: E(1275), note: 'nous partons, les enfants ne voient rien' },
      { itemId: E(1277), note: 'rien entre avoir et le participe' },
    ],
  },

  sujet: {
    term: 'un seul sujet',
    title: 'Un seul sujet, deux possibilités',
    body: "Avec vouloir, un seul sujet impose l'infinitif : je veux partir. Avec croire, penser, dire, affirmer, reconnaître, l'infinitif est possible, mais que reste juste : je crois avoir compris, je crois que j'ai compris. EN: after vouloir only the infinitive; after croire or dire, both.",
    examples: [
      { itemId: E(1206), note: 'l’infinitif, un peu plus soigné' },
      { itemId: E(1286), note: 'que, tout aussi juste' },
      { itemId: E(1290), note: 'deux sujets : que, seulement' },
    ],
  },

  prep: {
    term: 'à, de ou rien',
    title: 'La préposition du premier verbe',
    body: "C'est le premier verbe qui choisit : tenir à, s'attendre à, s'efforcer de, il s'agit de, oser et compter sans rien. Certains changent de sens : finir de (terminer), finir par (en fin de compte), venir (pour), venir de (juste avant). EN: the first verb picks the preposition.",
    examples: [
      { itemId: E(1308), note: 'tenir à' },
      { itemId: E(1310), note: 'compter, sans rien' },
      { itemId: E(1306), note: 'finir par : au bout du compte' },
    ],
  },

  faire: {
    term: 'faire faire',
    title: 'Faire + infinitif',
    body: "Faire + infinitif : tu ne fais pas l'action toi-même, quelqu'un d'autre la fait. Je fais réparer ma voiture : le garagiste répare. Celui qui agit arrive avec à ou par, ou reste dans l'ombre. Laisser + infinitif : tu permets. EN: faire + infinitive means someone else does it.",
    examples: [
      { itemId: E(1325), note: 'le garagiste répare' },
      { itemId: E(1328), note: 'les élèves lisent : aux élèves' },
      { itemId: E(1349), note: 'laisser : je permets' },
    ],
  },

  pronom: {
    term: 'le pronom',
    title: 'Le pronom devant faire',
    body: "Faire et l'infinitif forment un bloc. Le pronom se place devant le bloc, donc devant faire ou laisser : je la fais réparer, je la lui ai fait lire. À l'impératif affirmatif, il passe derrière : fais-le entrer. Et fait ne s'accorde jamais. EN: the pronoun goes before faire; fait never agrees.",
    examples: [
      { itemId: E(1344), note: 'je la fais réparer' },
      { itemId: E(1345), note: 'deux pronoms devant ai fait' },
      { itemId: E(1346), note: 'fait, sans accord' },
    ],
  },

  consigne: {
    term: 'la consigne',
    title: 'L’infinitif des affiches',
    body: "Sur une affiche, une notice ou une recette, l'infinitif donne l'ordre sans nommer personne : Composter avant de monter. La négation ne pas passe devant, soudée : Ne pas se pencher au dehors. Le pronominal garde se : s'adresser à l'accueil. EN: notices give orders in the infinitive.",
    examples: [
      { itemId: E(1356), note: 'ne pas, soudé, devant' },
      { itemId: E(1357), note: 'l’ordre, sans personne' },
      { itemId: E(1364), note: 's’adresser, avec se' },
    ],
  },

  nom: {
    term: 'nom + de',
    title: 'Après un nom ou un adjectif',
    body: "Un nom prend souvent de + infinitif : le droit de, le plaisir de, la chance de. À + infinitif dit ce qui reste à faire (des factures à payer) ou suit premier, seul, prêt. C'est à toi de décider : c'est ton rôle. EN: a noun usually takes de; à says what is left to do.",
    examples: [
      { itemId: E(1379), note: 'le droit de' },
      { itemId: E(1380), note: 'ce qui reste à payer' },
      { itemId: E(1381), note: 'la première à' },
    ],
  },
};
