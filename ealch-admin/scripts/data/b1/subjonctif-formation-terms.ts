// b1.14.l1 « Le subjonctif présent : la formation » — the lesson glossary.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here run 6 to 12 characters and the trios are
// assigned so that no row goes over; the scratch check measures the widest row
// in the lesson and asserts it, together with « every term is surfaced
// somewhere ».
//
// « la fin » rather than « la terminaison » is deliberate: it is already the
// house word for a verb ending in B1, from b1.01's reframe (« Pars de nous,
// coupe -ons, ajoute la fin »), and « la terminaison » is 14 characters, which
// blows the chip row apart in any trio.
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './subjonctif-formation-corpus.ts';

export const SUBJONCTIF_TERMS: Record<string, LessonTerm> = {
  /** Act 1, and the spotting test in acts 10 and 11. */
  porte: {
    term: 'la porte',
    title: 'Le subjonctif arrive après que',
    body: "Presque toujours, un subjonctif se trouve juste après le mot « que ». Pas de que, pas de subjonctif. Attention : la porte ne suffit pas, parce que tous les « que » ne l'ouvrent pas. Quelles expressions l'ouvrent vraiment, c'est la leçon suivante. EN: Almost every subjunctive sits just after que; which expressions actually open that door is the next lesson.",
    examples: [
      { itemId: E(1000), note: 'il faut que, puis la forme courte' },
      { itemId: E(1004), note: 'bien que, et le verbe change' },
      { itemId: E(1014), note: 'la règle de repérage' },
    ],
  },

  /** Act 2, and every act after it. Where the stem is read off. */
  formeils: {
    term: 'la forme ils',
    title: "Le radical se lit dans « ils »",
    body: "Pour construire un subjonctif, tu ne pars pas de l'infinitif. Tu pars de la forme « ils » du présent : ils parlent, ils finissent, ils vendent. C'est là que le radical se montre en entier. EN: You start from the ils form of the present, not from the infinitive: that is where the stem shows.",
    examples: [
      { itemId: E(1017), note: 'ils finissent : le radical est finiss-' },
      { itemId: E(1018), note: 'la même forme, moins -ent, plus -e' },
      { itemId: E(1050), note: 'ils choisissent, et tout est là' },
    ],
  },

  /** Act 2 and act 6: the part that never moves. */
  fin: {
    term: 'la fin',
    title: 'Six fins, toujours les mêmes',
    body: "-e, -es, -e, -ions, -iez, -ent. Ce sont les fins de tous les subjonctifs, même les plus irréguliers : que je fasse, que nous fassions, qu'ils fassent. Deux verbes seulement font autrement, être et avoir. EN: Six endings for every subjunctive; only être and avoir do anything else.",
    examples: [
      { itemId: E(1032), note: 'la règle, en une ligne' },
      { itemId: E(1114), note: 'faire est irrégulier, mais la fin est normale' },
      { itemId: E(1105), note: 'être : la seule famille qui change de fins' },
    ],
  },

  /** Act 2 and act 4: what the ils form gives you. */
  radical: {
    term: 'le radical',
    title: "Ce qui reste quand tu coupes -ent",
    body: "Le radical, c'est le morceau du verbe qui porte le sens : parl-, finiss-, vend-, écriv-, connaiss-. Tu le prends dans la forme « ils » du présent, tu enlèves -ent, et tu ajoutes la fin. EN: The stem is the piece that carries the meaning; cut -ent off the ils form and add the ending.",
    examples: [
      { itemId: E(1069), note: 'la règle : ils, pas l’infinitif' },
      { itemId: E(1059), note: 'connaiss-, invisible dans connaître' },
      { itemId: E(1024), note: 'écriv-, invisible dans écrire' },
    ],
  },

  /** Act 3: the trap that makes learners stop believing in the form. */
  sosie: {
    term: 'le sosie',
    title: 'Quand le subjonctif ne se voit pas',
    body: "Avec les verbes en -er, quatre formes sur six s'écrivent et se disent comme le présent : que je parle, que tu parles, qu'il parle, qu'ils parlent. La forme est bien là. Tu ne l'entends simplement pas. EN: With -er verbs four forms out of six look and sound exactly like the present; the subjunctive is still there.",
    examples: [
      { itemId: E(1044), note: 'quatre sur six, la règle' },
      { itemId: E(1038), note: 'que tu regardes, identique au présent' },
      { itemId: E(1041), note: 'nous travaillions, la seule qui se voit' },
    ],
  },

  /** Act 5: the two-stem verbs. */
  botte: {
    term: 'la botte',
    title: 'Deux radicaux dans le même verbe',
    body: "Huit verbes ont deux radicaux : que je boive mais que nous buvions, que je prenne mais que nous prenions. Dessine une botte autour de je, tu, il et ils : ceux-là prennent un radical, nous et vous prennent l'autre. EN: Eight verbs use one stem inside the boot and another for nous and vous.",
    examples: [
      { itemId: E(1070), note: 'dans la botte : boive' },
      { itemId: E(1071), note: 'hors de la botte : buvions' },
      { itemId: E(1089), note: 'les huit verbes concernés' },
    ],
  },

  /** Act 6: where nous and vous really come from. */
  doublei: {
    term: 'le double i',
    title: 'Deux i qui ne s’entendent pas',
    body: "Quand le radical finit déjà par i ou par y, la fin -ions ou -iez en ajoute un deuxième : que nous étudiions, que vous croyiez, que nous riions. On ne l'entend presque jamais, et il faut quand même l'écrire. EN: A stem already ending in i or y takes a second one before -ions and -iez; you barely hear it and you still write it.",
    examples: [
      { itemId: E(1094), note: 'étudi- plus -ions' },
      { itemId: E(1096), note: 'croy- plus -ions' },
      { itemId: E(1098), note: 'ri- plus -ions' },
    ],
  },

  /** Acts 7 and 8: the verbs with no rule behind them. */
  noyau: {
    term: 'les dix',
    title: 'Dix verbes à apprendre en entier',
    body: "Être, avoir, aller, faire, pouvoir, savoir, vouloir, valoir, falloir, pleuvoir. Leur radical ne vient de nulle part : aucune règle ne le donne. Ce sont aussi les dix verbes que tu dis le plus souvent, donc tu les auras vite. EN: Ten verbs whose stem no rule gives you, and they are the ten you say most often.",
    examples: [
      { itemId: E(1124), note: 'les quatre premiers' },
      { itemId: E(1143), note: 'les quatre suivants' },
      { itemId: E(1156), note: 'les deux impersonnels' },
    ],
  },

  /** Act 9: the two with a single form. */
  impersonnel: {
    term: 'qu’il faille',
    title: 'Deux verbes, une seule forme',
    body: "Falloir et pleuvoir ne se conjuguent qu'avec « il ». Au subjonctif ils n'ont donc qu'une forme chacun : qu'il faille et qu'il pleuve. Il n'y a rien d'autre à apprendre pour ces deux-là. EN: Falloir and pleuvoir exist only with il, so each has exactly one subjunctive form.",
    examples: [
      { itemId: E(1145), note: 'falloir, la forme unique' },
      { itemId: E(1146), note: 'pleuvoir, la forme unique' },
      { itemId: E(1152), note: 'dans une phrase entière' },
    ],
  },
};
