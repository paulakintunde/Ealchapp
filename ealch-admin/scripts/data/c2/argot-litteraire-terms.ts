// c2.04.l1 « Verlan, argot et registres : l’usage littéraire » — the lesson
// glossary. DRAFT.
//
// THREE CHIPS PER SECTION AT MOST, 37-CHARACTER ROW BUDGET on a Pixel 6.
// Every term label below runs 7 to 15 characters; sections that combine
// three terms stay inside budget (checked by hand per section, as the C1/C2
// playbook requires — there is no validator for the reverse of "named key
// has no definition").
//
// Every term defined here is surfaced by at least one section’s `terms`
// array (asserted by hand, same as every B1+/C1/C2 lesson; there is no
// validator for an unsurfaced term).
//
// « le registre » itself (familier/courant/soigné/littéraire) is
// deliberately NOT redefined here: it belongs to « la leçon 32 du B2 » and
// to c1.17/c2.01, recapped by citation, never re-taught as a term in this
// glossary.

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './argot-litteraire-corpus.ts';

export const ARGOT_LITTERAIRE_TERMS: Record<string, LessonTerm> = {
  /** Act 1: the lesson’s own reframe, as a glossary entry. */
  costume: {
    term: 'le costume',
    title: 'Un mot choisi, jamais une consigne',
    body: 'Un mot d’argot cité dans un texte est un costume que l’auteur choisit pour un personnage ou un instant, jamais un vêtement qu’il te tend pour que tu le portes à ton tour. Reconnaître le costume, c’est décrire pourquoi il va à ce personnage-là ; l’enfiler soi-même, dans sa propre analyse soignée, est exactement le piège de l’acte 7. EN: A quoted slang word is a costume the author chooses for a character, never a piece of clothing it hands you to wear yourself.',
    examples: [
      { itemId: E(1002), note: 'l’auteur a choisi ce mot' },
      { itemId: E(1009), note: 'le choix délibéré, nommé' },
      { itemId: E(1131), note: 'un costume reste un costume' },
    ],
  },

  /** Act 2: the six named reasons a deliberate deployment can serve. */
  raisons: {
    term: 'les six raisons',
    title: 'Pourquoi cet auteur choisit ce mot-là',
    body: 'Un mot d’argot cité sert toujours une raison nommable : la vraisemblance d’un personnage, le réalisme d’un milieu, un décalage ironique, l’économie d’une description, la connivence avec le lecteur, ou la distance du narrateur. Nommer la raison, puis trouver l’indice qui la prouve dans le texte, est le premier geste de toute lecture de ce genre. EN: A quoted slang word always serves a nameable reason; name it, then find the textual proof.',
    examples: [
      { itemId: E(1014), note: 'la vraisemblance d’un personnage' },
      { itemId: E(1018), note: 'le décalage ironique' },
      { itemId: E(1022), note: 'la connivence avec le lecteur' },
    ],
  },

  /** Acts 3 and 7: quoted dialogue, framed. */
  discoursDirect: {
    term: 'le discours direct',
    title: 'La voix encadrée par des guillemets',
    body: 'Le discours direct cite la phrase exacte d’un personnage, entre guillemets, le plus souvent annoncée par un verbe de parole (« dit Jules »). Le cadre dit, sans ambiguïté, que ce qui suit appartient à quelqu’un, jamais au narrateur qui écrit autour. EN: Direct speech quotes a character’s exact line, between quotation marks, usually announced by a reporting verb.',
    examples: [
      { itemId: E(1034), note: 'encore fauché, dit Jules' },
      { itemId: E(1036), note: 'le verbe de parole, nommé' },
      { itemId: E(1037), note: 'le terme lui-même' },
    ],
  },

  /** Act 4: slang with no quotation marks, fused into the narration. */
  discoursIndirectLibre: {
    term: 'le discours indirect libre',
    title: 'La voix fondue, sans guillemets',
    body: 'Le discours indirect libre glisse la pensée ou le mot d’un personnage directement dans la voix du narrateur, sans guillemets et sans verbe de parole. L’indice n’est jamais typographique : c’est un mot dont le registre ne colle pas à celui du paragraphe qui le porte. EN: Free indirect style slips a character’s word straight into the narrator’s voice, with no quotation marks and no reporting verb; the cue is a register mismatch, never a typographic one.',
    examples: [
      { itemId: E(1048), note: 'il n’avait plus un pèze' },
      { itemId: E(1051), note: 'le terme lui-même' },
      { itemId: E(1053), note: 'l’indice, jamais un guillemet' },
    ],
  },

  /** Act 5: a soutenu frame that quotes argot for contrast. */
  decalageIronique: {
    term: 'le décalage ironique',
    title: 'Un cadre soutenu, un mot qui ne l’est pas',
    body: 'Un texte au registre soutenu peut citer, mot pour mot, un propos argotique pour faire sentir un contraste que le reste du texte ne referme jamais. La citation reste citée : le cadre, lui, ne devient jamais argotique à son tour. EN: A soutenu text can quote an argotic remark word for word to make a contrast felt; the frame itself never turns argotic.',
    examples: [
      { itemId: E(1061), note: 'on est fauchés, messieurs' },
      { itemId: E(1064), note: 'le point que le texte veut faire sentir' },
      { itemId: E(1019), note: 'le terme lui-même' },
    ],
  },

  /** Act 6: the method for sorting deliberate from accidental. */
  grilleLecture: {
    term: 'la grille de lecture',
    title: 'Voulu, ou accidentel',
    body: 'Un mot d’argot est voulu quand un indice le prouve : des guillemets, un verbe de parole, un contraste net, un effet nommable. Son absence complète, dans un texte qui se voulait soigné de bout en bout, signale plutôt un accident, une vraie faiblesse d’écriture, jamais un procédé. EN: A slang word is deliberate when a cue proves it; the complete absence of any cue signals an accident, a real writing weakness, never a device.',
    examples: [
      { itemId: E(1074), note: 'premier indice du choix délibéré' },
      { itemId: E(1077), note: 'l’absence d’indice, un accident' },
      { itemId: E(1089), note: 'le terme lui-même' },
    ],
  },

  /** Act 6: the accidental fault, named. */
  glissade: {
    term: 'la glissade de registre',
    title: 'Un mot qui tombe, sans qu’on l’ait choisi',
    body: 'Une lettre ou un rapport censé rester soutenu peut glisser, sans guillemets, sans verbe de parole et sans aucun effet nommable, dans un mot familier ou argotique. Cette glissade reste une faiblesse à corriger, pas un geste d’auteur à analyser. EN: A supposedly careful letter or report can slip, with no quotation marks, no reporting verb and no nameable effect, into a familiar or argotic word; this slip stays a weakness to fix, not an authorial device to analyse.',
    examples: [
      { itemId: E(1081), note: 'j’ai un peu la rage, dans une lettre' },
      { itemId: E(1082), note: 'la vraie glissade, nommée' },
      { itemId: E(1088), note: 'le terme lui-même' },
    ],
  },

  /** Act 7: the lesson’s central, named trap. */
  piege: {
    term: 'le piège',
    title: 'Analyser n’est pas adopter',
    body: 'Expliquer pourquoi un auteur cite un mot d’argot ne donne jamais la permission de l’employer, sans guillemets, dans sa propre phrase d’analyse soutenue. Le mot cité reste entre guillemets chaque fois qu’on le nomme ; la phrase qui l’analyse, elle, change de mot et reste soutenue de bout en bout. EN: Explaining why an author quotes a slang word never licenses using it, unquoted, in one’s own careful analytical sentence; the quoted word stays in quotation marks, the analysing sentence uses its own word and stays careful throughout.',
    examples: [
      { itemId: E(1096), note: 'citer fauché pour analyser, jamais l’adopter' },
      { itemId: E(1107), note: 'la règle centrale, formulée' },
      { itemId: E(1109), note: 'le terme lui-même' },
    ],
  },
};
