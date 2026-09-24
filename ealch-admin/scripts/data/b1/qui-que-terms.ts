// b1.11.l1 « Qui et que » — the lesson glossary.
// DRAFT, to RICH-LESSON-STANDARD.md on top of B1-BUILD-PLAYBOOK.md.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. The labels here are 8 to 13 characters, and the widest trio
// this lesson actually authors is « le complément » + « l'antécédent » +
// « le mot fixe » = 36. Asserted in the scratch check, together with « every
// term is surfaced somewhere ».
//
// B1 LANGUAGE RULE: the body is simple French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './qui-que-corpus.ts';

export const QUI_QUE_TERMS: Record<string, LessonTerm> = {
  /** Act 1: what the whole lesson builds. */
  relative: {
    term: 'la relative',
    title: 'Deux phrases qui partagent un nom',
    body: "Tu as deux phrases courtes et un nom qui revient dans les deux. La relative colle les deux et remplace le nom par un petit mot : qui ou que. EN: Two short sentences share a noun; the little word replaces its second appearance.",
    examples: [
      { itemId: E(1000), note: 'la première phrase, toute seule' },
      { itemId: E(1002), note: 'les deux, collées par que' },
      { itemId: E(1004), note: 'les deux, collées par qui' },
    ],
  },

  /** Act 2. */
  sujet: {
    term: 'le sujet',
    title: 'qui fait le travail de son verbe',
    body: "Derrière qui, personne ne prend la place du sujet : c'est le nom de devant qui agit. Un petit pronom peut se glisser, mais jamais un sujet. EN: After qui, nobody takes the subject slot; the noun in front is the one acting.",
    examples: [
      { itemId: E(1018), note: 'le voisin agit : il habite' },
      { itemId: E(1035), note: "nous se glisse, mais ce n'est pas un sujet" },
      { itemId: E(1019), note: 'le verbe suit le nom au pluriel' },
    ],
  },

  /** Act 3. */
  complement: {
    term: 'le complément',
    title: 'que reçoit le travail',
    body: "Derrière que, quelqu'un d'autre arrive et fait le verbe. Le nom de devant, lui, subit l'action : le film que NOUS regardons. EN: After que, somebody else does the verb and the noun in front receives the action.",
    examples: [
      { itemId: E(1037), note: 'nous regardons, et le film est regardé' },
      { itemId: E(1043), note: 'tu signes, et le formulaire est signé' },
      { itemId: E(1055), note: 'le bureau garde, et le dossier est gardé' },
    ],
  },

  /** Act 4: the whole decision, in one look. */
  repere: {
    term: 'le repère',
    title: 'Regarde juste derrière',
    body: "Tu ne regardes pas le nom de devant, tu regardes ce qui vient juste après le trou. Personne : qui. Un sujet : que. Le test prend une seconde. EN: Do not look at the noun in front; look at what comes right after the gap.",
    examples: [
      { itemId: E(1056), note: 'rien derrière : qui' },
      { itemId: E(1057), note: 'tu derrière : que' },
      { itemId: E(1069), note: 'la règle en une ligne' },
    ],
  },

  /** Act 5. */
  elision: {
    term: "l'élision",
    title: "que devient qu', qui reste qui",
    body: "Devant une voyelle, que perd son e : qu'elle, qu'on, qu'il, qu'Awa. qui ne change jamais, même devant a, e ou i. EN: que loses its e before a vowel; qui never changes.",
    examples: [
      { itemId: E(1076), note: "que devant Awa : qu'Awa" },
      { itemId: E(1077), note: 'qui devant est : qui reste entier' },
      { itemId: E(1083), note: 'la règle des deux mots' },
    ],
  },

  /** Act 6: the anglophone transfer this lesson exists to kill. */
  antecedent: {
    term: "l'antécédent",
    title: 'Le nom de devant ne décide rien',
    body: "En anglais, tu changes de mot selon le nom : who pour les gens, which pour les choses. En français, qui et que servent aux deux. EN: English swaps who and which by what the noun is; French does not.",
    examples: [
      { itemId: E(1092), note: 'une table, et pourtant qui' },
      { itemId: E(1095), note: 'une personne, et pourtant que' },
      { itemId: E(1098), note: 'la règle qui ferme le piège' },
    ],
  },

  /** Act 7: the single biggest anglophone error here. */
  motfixe: {
    term: 'le mot fixe',
    title: 'On ne le saute jamais',
    body: "En anglais, the book I read se passe du mot. En français, le livre je lis n'existe pas : deux sujets se percutent et la phrase s'arrête. EN: English may leave the word out; French may not.",
    examples: [
      { itemId: E(1109), note: 'the book I read, en français entier' },
      { itemId: E(1111), note: 'the people you know, en français entier' },
      { itemId: E(1116), note: 'la règle, et pourquoi elle tient' },
    ],
  },

  /** Act 8. */
  accord: {
    term: "l'accord",
    title: 'Le participe suit le nom passé devant',
    body: "que fait passer le nom devant le verbe, alors le participe s'accorde avec lui. Parfois on l'entend : écrite, mise, prise. Parfois non : perdue, parlée. EN: que moves the noun in front, so the participle agrees; sometimes you hear it, sometimes only the pen does.",
    examples: [
      { itemId: E(1127), note: "écrite : le t s'entend" },
      { itemId: E(1131), note: "prises : le z s'entend" },
      { itemId: E(1139), note: "perdue : rien ne s'entend" },
    ],
  },

  /** Act 9. */
  milieu: {
    term: 'au milieu',
    title: 'La relative se glisse dans la phrase',
    body: "La relative se met juste après son nom, même au milieu de la phrase. Deux virgules autour : c'est un ajout. Pas de virgule : elle dit lequel. EN: The clause sits right after its noun; two commas make it an aside, no commas make it the one that identifies.",
    examples: [
      { itemId: E(1150), note: "deux virgules : je n'ai qu'une sœur" },
      { itemId: E(1151), note: "pas de virgule : j'en ai plusieurs" },
      { itemId: E(1158), note: 'le verbe principal attend la fin' },
    ],
  },

  /** Act 10: previewed only. */
  neutre: {
    term: 'le neutre',
    title: "Quand il n'y a pas de nom devant",
    body: "Quand aucun nom ne précède, on met ce : ce qui, ce que. Le test ne bouge pas, seulement le petit mot ce arrive devant. EN: With no noun in front, ce goes first; the test itself is unchanged.",
    examples: [
      { itemId: E(1167), note: 'pas de sujet derrière : ce qui' },
      { itemId: E(1168), note: 'je derrière : ce que' },
      { itemId: E(1171), note: 'la règle, et la leçon qui la développe' },
    ],
  },

  /** Act 11, the production goal. */
  chaine: {
    term: 'la chaîne',
    title: 'Des phrases courtes deviennent une description',
    body: "Trois phrases courtes disent les mêmes faits, mais personne ne sait de quel sac tu parles. Une relative les enchaîne et la description devient utile. EN: Short sentences hold the same facts; the clause ties them into one description that works.",
    examples: [
      { itemId: E(1179), note: 'le fait, tout seul' },
      { itemId: E(1180), note: 'le même fait, enchaîné' },
      { itemId: E(1192), note: 'deux relatives dans une phrase' },
    ],
  },
};
