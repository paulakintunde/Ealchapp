// b2.01.l1 « Le plus-que-parfait »: the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6. Labels run 8 to 13 characters. The two longest
// (« le pronominal » 13, « fausse piste » 12) are never used together.
//
// B2 LANGUAGE RULE: the body is natural French, addressed as « tu », then ONE
// English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './plus-que-parfait-corpus.ts';

export const PQP_TERMS: Record<string, LessonTerm> = {
  repere: {
    term: 'le repère',
    title: 'Le moment dont tu parles',
    body: "Le repère, c'est le moment du passé que ton récit a déjà posé : une arrivée, un appel, une phrase rapportée. Le plus-que-parfait se mesure toujours à partir de lui. Sans repère, pas de plus-que-parfait. EN: The reference point is the past moment your story has already set; the pluperfect is measured from it.",
    examples: [
      { itemId: E(1600), note: 'l’arrivée au cinéma est le repère' },
      { itemId: E(1688), note: 'le coup de sonnette est le repère' },
      { itemId: E(1746), note: 'la parole rapportée est le repère' },
    ],
  },

  auxiliaire: {
    term: 'l’auxiliaire',
    title: 'Avoir ou être, à l’imparfait',
    body: "Le plus-que-parfait garde l'auxiliaire du passé composé et le met à l'imparfait : j'ai fini donne j'avais fini, je suis sorti donne j'étais sorti. Tu n'as rien de nouveau à choisir. EN: Keep the passé composé auxiliary and put it in the imparfait.",
    examples: [
      { itemId: E(1615), note: 'avoir : j’avais fini' },
      { itemId: E(1621), note: 'être : j’étais sorti' },
      { itemId: E(1626), note: 'aller prend être' },
    ],
  },

  accord: {
    term: 'l’accord',
    title: 'Quand le participe change',
    body: "Avec être, le participe s'accorde avec le sujet : elle était partie. Avec avoir, il ne s'accorde qu'avec un complément placé avant lui : la robe qu'elle avait choisie. Les règles sont celles du passé composé. EN: With être, agree with the subject; with avoir, only with an object placed before.",
    examples: [
      { itemId: E(1640), note: 'être : partie, avec elle' },
      { itemId: E(1644), note: 'avoir : choisie, avec que' },
      { itemId: E(1646), note: 'avoir, rien avant : pris' },
    ],
  },

  pronominal: {
    term: 'le pronominal',
    title: 'Se lever, se tromper, se téléphoner',
    body: "Un verbe pronominal prend toujours être : je m'étais levé, ils s'étaient disputés. Le participe s'accorde, sauf quand le complément vient après ou quand se veut dire à quelqu'un : elles s'étaient téléphoné. EN: Pronominal verbs always take être; agreement follows the passé composé rules.",
    examples: [
      { itemId: E(1664), note: 'levée : elle se lève elle-même' },
      { itemId: E(1667), note: 'téléphoné : à l’une et à l’autre' },
      { itemId: E(1668), note: 'lavé : les mains viennent après' },
    ],
  },

  ligne: {
    term: 'la ligne',
    title: 'Trois temps sur une seule ligne',
    body: "Place le repère sur la ligne du temps. Ce qui était en cours à ce moment-là va à l'imparfait, ce qui arrive ensuite au passé composé, ce qui était déjà fait avant au plus-que-parfait. EN: On one timeline: ongoing is imparfait, next is passé composé, already done is plus-que-parfait.",
    examples: [
      { itemId: E(1686), note: 'elle sortait : en cours' },
      { itemId: E(1687), note: 'elle est sortie : ensuite' },
      { itemId: E(1688), note: 'elle était sortie : avant' },
    ],
  },

  retour: {
    term: 'le retour',
    title: 'Le retour en arrière',
    body: "Dans un récit, le plus-que-parfait sert à remonter le temps : tu t'arrêtes sur un moment, et tu racontes ce qui l'avait préparé. Quand tu racontes les faits dans l'ordre, tu n'en as pas besoin. EN: The pluperfect is how a story steps back; told in order, a story does not need it.",
    examples: [
      { itemId: E(1703), note: 'trois mois plus tôt : on remonte' },
      { itemId: E(1704), note: 'dans l’ordre : passé composé' },
      { itemId: E(1711), note: 'l’explication vient d’avant' },
    ],
  },

  adverbes: {
    term: 'les adverbes',
    title: 'Déjà, pas encore, jamais, à peine',
    body: "Les petits adverbes se glissent entre l'auxiliaire et le participe : il avait déjà lu, je n'avais pas encore fini, elle avait à peine fermé. Pour une action toute récente, tu peux aussi dire elle venait de partir. EN: Short adverbs sit between the auxiliary and the participle.",
    examples: [
      { itemId: E(1720), note: 'déjà, avant le participe' },
      { itemId: E(1721), note: 'pas encore : pas encore fini' },
      { itemId: E(1722), note: 'venait de : le passé tout proche' },
    ],
  },

  recul: {
    term: 'le recul',
    title: 'Ce qui recule dans une parole rapportée',
    body: "Après un verbe de parole ou de pensée au passé (il a dit, j'ai appris, je croyais), le passé composé du message recule au plus-que-parfait. Après il dit, au présent, rien ne bouge. EN: After a past verb of saying or thinking, the message's passé composé steps back to the pluperfect.",
    examples: [
      { itemId: E(1746), note: 'il a dit : avait fini' },
      { itemId: E(1747), note: 'il dit : rien ne bouge' },
      { itemId: E(1744), note: 'une pensée recule aussi' },
    ],
  },

  regret: {
    term: 'le regret',
    title: 'Si seulement j’avais…',
    body: "Si suivi du plus-que-parfait parle d'un passé qui n'a pas eu lieu. Avec seulement, la moitié si suffit : si seulement j'avais écouté. Le résultat au conditionnel passé est le sujet des leçons 2 et 3 du B2. EN: si plus the pluperfect is a past that did not happen; si seulement makes it a regret.",
    examples: [
      { itemId: E(1761), note: 'elle n’a pas écouté' },
      { itemId: E(1769), note: 'j’ai signé, sans savoir' },
      { itemId: E(1767), note: 'je n’ai pas appris l’italien' },
    ],
  },

  piste: {
    term: 'fausse piste',
    title: 'Ce qui ressemble au plus-que-parfait',
    body: "Avait n'annonce pas toujours un plus-que-parfait : avait faim est un imparfait. Était fermée peut décrire un état. Et l'anglais had se traduit parfois par un passé composé. Cherche d'abord le repère. EN: Not every avait is a pluperfect; look for the reference point first.",
    examples: [
      { itemId: E(1780), note: 'avait faim : un imparfait' },
      { itemId: E(1786), note: 'était fermée : un état' },
      { itemId: E(1784), note: 'depuis : imparfait, pas plus-que-parfait' },
    ],
  },
};
