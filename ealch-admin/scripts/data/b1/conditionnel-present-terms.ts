// b1.08.l1 « Le conditionnel présent » — the lesson glossary.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, so the widest trio
// (« la politesse » + « l'hypothèse » + « le conseil ») is 33. Asserted in the
// scratch check, together with « every term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './conditionnel-present-corpus.ts';

export const CONDITIONNEL_TERMS: Record<string, LessonTerm> = {
  /** The whole of act 2. */
  recette: {
    term: 'la recette',
    title: 'Deux morceaux déjà payés',
    body: "Prends le radical du futur, celui qui finit toujours par r. Colle dessus les terminaisons de l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient. Tu n'apprends rien de neuf. EN: Take the future stem, add the imparfait endings; nothing here is new.",
    examples: [
      { itemId: E(612), note: 'parler, radical parler-, terminaison -ais' },
      { itemId: E(615), note: 'la forme nous, en -ions' },
      { itemId: E(621), note: 'vendre perd son e avant le r' },
    ],
  },

  /** Act 3. */
  radical: {
    term: 'le radical',
    title: 'Le radical finit toujours par r',
    body: "Les radicaux irréguliers sont les mêmes qu'au futur : ser-, aur-, ir-, fer-, pourr-, voudr-, devr-, saur-, viendr-, verr-, faudr-. Tu les connais déjà, tu ne les rachètes pas. EN: The irregular stems are the future ones; you already own them.",
    examples: [
      { itemId: E(638), note: 'être donne ser-' },
      { itemId: E(643), note: 'faire donne fer-, pas fair-' },
      { itemId: E(653), note: 'falloir donne faudr-, toujours avec il' },
    ],
  },

  /** Act 4, and the reason half the lesson is written down. */
  piege: {
    term: 'ai ou ais',
    title: 'Une lettre, deux mondes',
    body: "Je parlerai est un projet. Je parlerais est une idée. À l'oreille, c'est presque pareil. C'est le contexte qui décide : un moment précis annonce le futur, une condition annonce le conditionnel. EN: The context decides, because the ear cannot.",
    examples: [
      { itemId: E(668), note: 'demain : un moment, donc le futur' },
      { itemId: E(669), note: 'à ta place : une condition, donc le conditionnel' },
      { itemId: E(674), note: 'la forme nous sépare les deux clairement' },
    ],
  },

  /** The single metaphor. */
  recul: {
    term: 'le recul',
    title: 'Un pas en arrière',
    body: "Le conditionnel recule d'un pas par rapport au réel. Tu ne dis plus ce qui est, tu dis ce qui serait. C'est pour ça qu'il sert à souhaiter, à demander, à conseiller et à rapporter. EN: The conditional steps back from what is, to what would be.",
    examples: [
      { itemId: E(600), note: 'le présent, sans recul' },
      { itemId: E(601), note: 'le même souhait, un pas en arrière' },
      { itemId: E(603), note: 'la demande recule aussi' },
    ],
  },

  /** Act 5. */
  souhait: {
    term: 'le souhait',
    title: 'Ce que tu aimerais',
    body: "Je voudrais, j'aimerais, je préférerais : trois ouvertures pour dire une envie sans la poser comme un fait. Je veux annonce une décision, je voudrais annonce une envie. EN: Wishes, said as wishes rather than as decisions.",
    examples: [
      { itemId: E(678), note: "l'ouverture la plus courante" },
      { itemId: E(681), note: 'une envie, pas une décision' },
      { itemId: E(682), note: 'préférer met deux options sur la table' },
    ],
  },

  /** Act 6. */
  politesse: {
    term: 'la politesse',
    title: 'Demander sans imposer',
    body: "Pouvez-vous devient pourriez-vous. La demande est la même, mais elle laisse à l'autre la place de dire non. Dans un magasin, un bureau ou un courriel, c'est la forme normale. EN: The same request, with room left to refuse.",
    examples: [
      { itemId: E(694), note: "l'ouverture de base" },
      { itemId: E(697), note: 'une demande écrite' },
      { itemId: E(702), note: 'déranger quelqu un avec des gants' },
    ],
  },

  /** Act 7. */
  conseil: {
    term: 'le conseil',
    title: 'Conseiller, pas ordonner',
    body: "Tu dois devient tu devrais. Il faut devient il faudrait. Et à ta place, je ferais met le conseil dans ta bouche à toi. Personne ne reçoit d'ordre. EN: Advice given as advice, not as an order.",
    examples: [
      { itemId: E(710), note: 'le conseil direct' },
      { itemId: E(711), note: 'le conseil sans personne visée' },
      { itemId: E(716), note: 'le conseil par la place' },
    ],
  },

  /** Act 9. */
  hypothese: {
    term: "l'hypothèse",
    title: 'Ce qui serait, si',
    body: "Le conditionnel dit le résultat d'une situation imaginée. La condition peut être un mot, un groupe ou rien du tout. La phrase complète avec si arrive à la leçon 10. EN: The result of an imagined situation; the full si pattern comes later.",
    examples: [
      { itemId: E(744), note: 'la condition tient dans un groupe' },
      { itemId: E(755), note: 'le gain imaginé' },
      { itemId: E(748), note: 'un résultat sans condition écrite' },
    ],
  },

  /** Act 10. */
  rumeur: {
    term: 'la rumeur',
    title: 'Dit, mais pas vérifié',
    body: "Dans la presse, le conditionnel signale une information qu'on rapporte sans la garantir. Selon la police, d'après le journal : la source parle, le journaliste ne signe pas. EN: Reported, not vouched for.",
    examples: [
      { itemId: E(762), note: "l'exemple type d'un fait divers" },
      { itemId: E(760), note: 'la source nommée' },
      { itemId: E(774), note: "l'information et son doute" },
    ],
  },
};
