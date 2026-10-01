// c1.08.l1 « Persuader » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6 (labels joined, plus 2 per separator). Labels here run
// 7 to 14 characters; the widest trio the lesson uses is asserted in the
// scratch check with « every term is surfaced ».
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// A PERSUASION GLOSSARY NAMES THE THREE PROOFS (l’ethos, le logos, le
// pathos), THE MOVES (l’autorité, l’analogie, le cadrage, la question,
// l’anaphore, la gradation, la prétérition, l’objection) AND THE ONE TEST
// THE LESSON APPLIES TO ALL OF THEM (la loyauté).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './persuader-corpus.ts';

export const PERSUADER_TERMS: Record<string, LessonTerm> = {
  /** Every act: the judge-first test. */
  loyal: {
    term: 'la loyauté',
    title: 'Le test du procédé loyal',
    body: 'Un procédé est loyal quand il continue de marcher une fois nommé : « je vous dis d’où je parle », « je prends l’objection dans sa forme la plus forte ». Celui qui triche ne survit pas à son nom : dire « je vous flatte » ou « je ne prouve rien » le désarme aussitôt. EN: A fair move still works once named; a trick stops working when you say what it is.',
    examples: [
      { itemId: E(1005), note: 'la règle de la leçon' },
      { itemId: E(1004), note: 'la question à poser' },
      { itemId: E(1170), note: 'ce que ton plaidoyer promet' },
    ],
  },

  /** Act 2: the speaker’s credibility. */
  ethos: {
    term: 'l’ethos',
    title: 'L’ethos : la confiance que l’orateur inspire',
    body: 'Aristote distinguait trois sortes de preuves ; la première tient au caractère de l’orateur, tel que son discours le montre. On gagne cet ethos en disant d’où l’on parle (sa compétence, ses limites, son intérêt), on le triche en empruntant un prestige qu’on n’a pas ou en flattant l’auditoire. EN: Ethos is the trust a speaker earns through the speech itself; it is earned by saying where you speak from, and faked by borrowed prestige or flattery.',
    examples: [
      { itemId: E(1013), note: 'un intérêt déclaré' },
      { itemId: E(1014), note: 'une limite avouée' },
      { itemId: E(1019), note: 'un ethos emprunté' },
    ],
  },

  /** Act 3: the reasons. */
  logos: {
    term: 'le logos',
    title: 'Le logos : les raisons qu’on peut vérifier',
    body: 'La deuxième preuve tient au discours lui-même : des faits, des chiffres, un raisonnement. Il va de la règle au cas (déduction), des cas à la règle (induction), ou d’une mesure à ses conséquences. Il est loyal quand l’auditoire peut vérifier la base et suivre le lien jusqu’à la conclusion. EN: Logos is the reasoning itself; it is fair when the audience can check the basis and follow the link to the conclusion.',
    examples: [
      { itemId: E(1026), note: 'un chiffre et sa base' },
      { itemId: E(1036), note: 'l’hypothèse déclarée' },
      { itemId: E(1033), note: 'une conclusion qui ne suit pas' },
    ],
  },

  /** Act 4: emotion. */
  pathos: {
    term: 'le pathos',
    title: 'Le pathos : l’émotion de l’auditoire',
    body: 'La troisième preuve tient aux dispositions de l’auditoire : on le touche, on l’inquiète, on l’enthousiasme. Une émotion n’a rien de déloyal en soi ; elle le devient quand elle dépasse les faits, quand elle les remplace, ou quand elle joue sur la peur, la culpabilité ou la flatterie de la foule. EN: Pathos works on the audience’s feelings; it turns unfair when the emotion outgrows or replaces the facts.',
    examples: [
      { itemId: E(1050), note: 'la règle' },
      { itemId: E(1048), note: 'l’émotion qui renvoie aux faits' },
      { itemId: E(1047), note: 'la culpabilité' },
    ],
  },

  /** Act 5: who is speaking for the claim. */
  autorite: {
    term: 'l’autorité',
    title: 'L’argument d’autorité',
    body: 'Citer quelqu’un pour appuyer une idée. C’est loyal quand la personne parle dans son domaine, qu’elle a un nom, qu’elle dit comment elle sait, et que les autres spécialistes ne la contredisent pas. Le prestige d’un autre domaine, « les experts » sans nom ou une source intéressée ne prouvent rien par eux-mêmes. EN: An authority counts in its own field, by name, with its method; prestige from elsewhere and nameless experts prove nothing.',
    examples: [
      { itemId: E(1064), note: 'la règle' },
      { itemId: E(1060), note: 'hors de son domaine' },
      { itemId: E(1068), note: 'ce qu’un expert peut dire' },
    ],
  },

  /** Act 6: reasoning by resemblance. */
  analogie: {
    term: 'l’analogie',
    title: 'L’argument par analogie',
    body: 'On raisonne sur une chose à partir d’une autre qui lui ressemble. L’analogie éclaire toujours, mais elle ne prouve que si le point commun qu’elle désigne est justement celui dont dépend la conclusion. Pour la discuter, cherche la différence qui compte. EN: An analogy proves only when the shared feature is the one the conclusion depends on; to answer it, find the difference that matters.',
    examples: [
      { itemId: E(1075), note: 'la règle' },
      { itemId: E(1073), note: 'une analogie solide' },
      { itemId: E(1077), note: 'une ressemblance de surface' },
    ],
  },

  /** Act 7: words that carry the conclusion. */
  cadrage: {
    term: 'le cadrage',
    title: 'Le cadrage dans l’argument',
    body: 'Le même fait peut être nommé de plusieurs façons : « remplacer » ou « sacrifier » des places, une « dépense » ou un « investissement », neuf sur dix qui restent ou un sur dix qui part. Le mot choisi oriente le jugement avant toute preuve. Un mot fort reste loyal si tu peux défendre ce qu’il affirme. EN: The word chosen steers the judgement before any proof; a strong word is fair if you can defend what it asserts.',
    examples: [
      { itemId: E(1092), note: 'la règle' },
      { itemId: E(1086), note: 'un mot qui conclut' },
      { itemId: E(1091), note: 'la version neutre' },
    ],
  },

  /** Act 8: the question that asserts. */
  question: {
    term: 'la question',
    title: 'La question rhétorique',
    body: 'Une question posée sans attendre de réponse, parce que la réponse est supposée évidente : elle affirme sans le dire. Une question rhétorique négative affirme le plus souvent le positif (« N’est-il pas temps… ? », c’est-à-dire « il est temps »). Elle est loyale quand presque tout le monde donnerait la même réponse. EN: A rhetorical question asserts by asking; it is fair when nearly everyone would give the same answer.',
    examples: [
      { itemId: E(1105), note: 'la règle' },
      { itemId: E(1106), note: 'la question négative' },
      { itemId: E(1102), note: 'la question qui esquive' },
    ],
  },

  /** Act 9: the repeated opening. */
  anaphore: {
    term: 'l’anaphore',
    title: 'L’anaphore',
    body: 'La reprise d’un même mot ou d’un même groupe au début de plusieurs phrases ou membres de phrase. Elle martèle et fait retenir. Elle est loyale quand chaque reprise apporte un fait nouveau ; elle triche quand le rythme tient lieu de preuve. EN: The same opening repeated at the head of several clauses; fair when each repetition adds a fact.',
    examples: [
      { itemId: E(1121), note: 'la première reprise' },
      { itemId: E(1126), note: 'trois demandes, trois reprises' },
      { itemId: E(1129), note: 'le test' },
    ],
  },

  /** Act 9: the rising sequence. */
  gradation: {
    term: 'la gradation',
    title: 'La gradation',
    body: 'Une suite de termes rangés par intensité, le plus souvent croissante (une graine, une parcelle, une rue), parfois décroissante. Elle donne l’impression d’un mouvement inévitable. Elle est loyale quand chaque marche existe vraiment ; elle triche quand elle fait monter une crainte que rien n’annonce. EN: Terms ordered by intensity, usually rising; fair when every step is real.',
    examples: [
      { itemId: E(1124), note: 'une gradation ascendante' },
      { itemId: E(1127), note: 'une gradation qui dramatise' },
      { itemId: E(1128), note: 'anaphore et gradation' },
    ],
  },

  /** Act 10: saying while claiming not to say. */
  preterition: {
    term: 'la prétérition',
    title: 'La prétérition',
    body: 'On déclare ne pas vouloir parler d’une chose, et on en parle : « Je ne dirai pas que… », « Je passerai sur… », « Inutile de rappeler que… ». Elle est loyale si l’on peut dire la même chose ouvertement, preuve à l’appui ; elle triche quand elle glisse une insinuation dont l’orateur refuse la responsabilité. EN: Claiming not to say something while saying it; fair only if it could be said openly, with proof.',
    examples: [
      { itemId: E(1140), note: 'la règle' },
      { itemId: E(1137), note: 'une rumeur glissée' },
      { itemId: E(1145), note: 'une prétérition loyale' },
    ],
  },

  /** Act 11: the objection stated before the opponent does. */
  objection: {
    term: 'l’objection',
    title: 'L’objection prévenue',
    body: 'Formuler toi-même l’argument de l’autre camp, avant qu’il ne le fasse, puis y répondre : « On m’objectera que… », « D’aucuns diront que… », « Vous me direz que… ». C’est loyal quand l’objection est prise dans sa forme la plus forte et que tu concèdes ce qu’elle a de vrai ; c’est l’inverse de l’homme de paille. EN: Stating the other side’s argument yourself, at its strongest, then answering it; the opposite of the straw man.',
    examples: [
      { itemId: E(1156), note: 'la règle' },
      { itemId: E(1152), note: 'la forme la plus forte' },
      { itemId: E(1155), note: 'concéder un point' },
    ],
  },
};
