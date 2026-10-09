// c2.05.l1 « Étymologie et formation des mots » — the lesson glossary. DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6.
// Every term label below runs 7 to 16 characters; sections that combine
// three terms stay inside budget (checked by hand per section, as the C1
// playbook requires — there is no validator for the reverse of "named key
// has no definition").
//
// Every term defined here is surfaced by at least one section's `terms`
// array (asserted by hand, same as every B1+/C1/C2 lesson; there is no
// validator for an unsurfaced term).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './etymologie-corpus.ts';

export const ETYMOLOGIE_TERMS: Record<string, LessonTerm> = {
  /** Act 1 and throughout: the stable core a family of words shares. */
  racine: {
    term: 'la racine',
    title: 'La pierre qui garde son sens',
    body: "Khronos (le temps), phagein (manger), ducere (mener) : une racine grecque ou latine garde un sens stable, même dressée dans dix mots différents. Chronophage, chronologie et télégraphe partagent chrono- sans jamais perdre « le temps ». EN: A Greek or Latin root keeps a stable meaning, even dressed in ten different words.",
    examples: [
      { itemId: E(1002), note: 'chrono-, le temps' },
      { itemId: E(1014), note: 'chronologie, construit sur la même racine' },
      { itemId: E(1007), note: 'la règle elle-même' },
    ],
  },

  /** Acts 2-7: prefixes and suffixes dressing a root. */
  affixe: {
    term: "l’affixe",
    title: 'Ce qui se colle avant ou après la racine',
    body: "Un préfixe se colle avant (trans-, in-, dis-), un suffixe après (-tion, -able, -eux). Les deux changent le sens ou la classe grammaticale du mot sans toucher à la racine elle-même. EN: A prefix attaches before a root, a suffix after; both change meaning or grammatical class without touching the root.",
    examples: [
      { itemId: E(1003), note: '-phage, un suffixe grec' },
      { itemId: E(1031), note: 'in-, un préfixe de négation' },
      { itemId: E(1061), note: '-able, un suffixe d’adjectif' },
    ],
  },

  /** Act 4: the in-/im-/il-/ir- allomorphy rule. */
  assimilation: {
    term: "l’assimilation",
    title: "In- qui change de costume",
    body: "Le préfixe de négation in- devient im- devant b, m ou p, il- devant l, ir- devant r, pour que le mot reste facile à prononcer : impossible, illisible, irrégulier, jamais inpossible ni inlisible. EN: The negation prefix in- becomes im- before b/m/p, il- before l, ir- before r, so the word stays easy to pronounce.",
    examples: [
      { itemId: E(1032), note: 'im- devant p' },
      { itemId: E(1033), note: 'il- devant l' },
      { itemId: E(1034), note: 'ir- devant r' },
    ],
  },

  /** Act 8: one Latin word, two French words. */
  doublet: {
    term: 'le doublet',
    title: 'Un même mot latin, deux mots français',
    body: "Legalis a donné loyal, par évolution naturelle du latin populaire, ET légal, repris plus tard, directement sur le latin écrit. Les deux mots sont de vrais frères, pas des synonymes inventés : l’un a changé de forme et parfois de sens en chemin, l’autre est resté proche de l’original. EN: Legalis gave both loyal, through natural popular evolution, AND légal, borrowed later straight from written Latin.",
    examples: [
      { itemId: E(1074), note: 'légal, le mot savant' },
      { itemId: E(1079), note: 'loyal, le mot populaire' },
      { itemId: E(1072), note: 'potion, un autre doublet' },
    ],
  },

  /** Act 9: same letters, unrelated histories. */
  racineVoisine: {
    term: 'la racine voisine',
    title: 'Mêmes lettres, deux histoires séparées',
    body: "Disque vient du grec diskos, un objet rond ; disparaître vient du latin dis-, la séparation. Les trois premières lettres se ressemblent, et pourtant les deux mots n’ont jamais partagé une seule racine commune. Une ressemblance de surface ne prouve jamais une parenté réelle. EN: Disque comes from Greek diskos; disparaître comes from Latin dis-. The resemblance proves nothing on its own.",
    examples: [
      { itemId: E(1085), note: 'disque, le grec diskos' },
      { itemId: E(1092), note: 'la règle elle-même' },
      { itemId: E(1086), note: 'phobie, une autre racine voisine de phone' },
    ],
  },

  /** Act 9 and 10: the only valid test. */
  sourceNommee: {
    term: 'la source nommée',
    title: 'Ce qui tranche entre une vraie et une fausse histoire',
    body: "Choucroute ressemble à chou plus croûte, et ce n’est pourtant pas son histoire réelle (un mot alsacien remodelé, selon le TLFi). Forcené, à l’inverse, vient vraiment de fors et sen, aussi surprenant que ça paraisse. Seule une source réelle, jamais la plausibilité d’une explication, décide laquelle est vraie. EN: Only a real, named source, never how plausible an explanation sounds, decides a word's true history.",
    examples: [
      { itemId: E(1088), note: 'choucroute, une fausse étymologie corrigée' },
      { itemId: E(1090), note: 'forcené, une vraie histoire surprenante' },
      { itemId: E(1111), note: 'la règle elle-même' },
    ],
  },
};
