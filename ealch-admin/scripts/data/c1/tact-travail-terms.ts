// c1.23.l1 « Le tact au travail » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6 (labels joined, plus 2 per separator). Labels here run
// 8 to 13 characters; the scratch check asserts every section's row.
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// A GLOSSARY OF MOVES: the packing (le tact écrit, l’indirect), the hard
// messages (un non clair, la nouvelle, l’arbitrage, la relance,
// l’escalade), the failure (la pique), the words and the readers (mot
// contesté, le tutoiement, la salutation) and the room (titre-message,
// question dure).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './tact-travail-corpus.ts';

export const TACT_TRAVAIL_TERMS: Record<string, LessonTerm> = {
  /** The reframe's one idea, every act. */
  tact: {
    term: 'le tact écrit',
    title: 'Le message entier, bien emballé',
    body: 'Le tact ne change pas ce que tu dis : un non reste un non, un retard reste un retard. Il choisit la manière, pour que le message arrive sans abîmer la relation et sans se perdre dans les précautions. À l’écrit, il compte double, car le lecteur n’entend ni ton ton ni ton sourire. EN: Tact never changes the content; it chooses the manner, and in writing it counts double.',
    examples: [
      { itemId: E(1004), note: 'clair sans être sec' },
      { itemId: E(1007), note: 'ce que l’écrit perd' },
      { itemId: E(1010), note: 'le fond et la forme' },
    ],
  },

  /** Act 2. */
  indirect: {
    term: 'l’indirect',
    title: 'Le degré de liberté du lecteur',
    body: 'Plus une demande est indirecte, plus le lecteur se croit libre de la refuser. L’indirect se dose donc selon ce que tu demandes : ferme et poli pour une obligation, vraiment ouvert pour une faveur. Trop de précautions sur une chose indispensable, et le lecteur la prend pour facultative. EN: The more indirect a request, the freer the reader feels to refuse; dose it to the stakes.',
    examples: [
      { itemId: E(1013), note: 'ferme, appuyé sur la confiance' },
      { itemId: E(1016), note: 'une vraie question ouverte' },
      { itemId: E(1022), note: 'trop de précautions' },
    ],
  },

  /** Act 3. */
  refus: {
    term: 'un non clair',
    title: 'Refuser par écrit',
    body: 'Un refus à un client dit non tôt et une seule fois, avec une raison vraie qu’on ne peut pas discuter, puis une suite concrète. Pas de faux espoir (« pour l’instant »), pas de liste d’excuses : chacune rouvre la négociation. EN: Say no early and once, with one true reason and a next step; no false hope.',
    examples: [
      { itemId: E(1025), note: 'le non, impersonnel' },
      { itemId: E(1032), note: 'une raison, pas cinq' },
      { itemId: E(1035), note: 'le faux espoir' },
    ],
  },

  /** Act 4. */
  nouvelle: {
    term: 'la nouvelle',
    title: 'Annoncer une mauvaise nouvelle',
    body: 'La mauvaise nouvelle va dans les premières lignes, assumée (« nous avons sous-estimé ») plutôt que noyée dans un passif sans auteur (« des retards ont été constatés »). Viennent ensuite ce qu’elle change pour le lecteur, ce que tu fais, et quand tu reviens avec du neuf. EN: Bad news goes at the top, owned, then its impact, your plan and your next update.',
    examples: [
      { itemId: E(1038), note: 'la nouvelle, sans détour' },
      { itemId: E(1040), note: 'assumer' },
      { itemId: E(1041), note: 'le passif qui esquive' },
    ],
  },

  /** Act 5. */
  arbitrage: {
    term: 'l’arbitrage',
    title: 'Dire non vers le haut',
    body: 'À ta hiérarchie, tu ne dis ni un non sec ni un oui intenable : tu reconnais l’enjeu, tu chiffres ce que la demande coûte, tu proposes des options, et tu lui demandes de choisir. Arbitrer, c’est trancher entre deux priorités ; c’est son rôle, et tu lui en donnes les moyens. EN: To a superior, show the cost, offer options and ask them to decide.',
    examples: [
      { itemId: E(1057), note: 'demander l’arbitrage' },
      { itemId: E(1056), note: 'chiffrer le coût' },
      { itemId: E(1065), note: 'alerter à temps' },
    ],
  },

  /** Act 6. */
  relance: {
    term: 'la relance',
    title: 'Relancer sans s’excuser ni menacer',
    body: 'Une relance rappelle une demande restée sans réponse. La première reste courtoise ; la seconde, plus ferme, donne une date et annonce la suite. Elle ne reproche rien : elle rend la réponse facile. EN: A follow-up reminds; the second one is firmer, dated, and announces the next step.',
    examples: [
      { itemId: E(1066), note: 'la première relance' },
      { itemId: E(1067), note: 'la seconde, datée' },
      { itemId: 'fr.c1.francais-professionnel-avance.033', note: 'poliment, puis fermement' },
    ],
  },

  /** Act 6, act 8. */
  escalade: {
    term: 'l’escalade',
    title: 'Faire remonter un problème',
    body: 'Faire remonter un dossier, c’est demander l’intervention d’un supérieur quand les relances n’ont rien donné. On prévient son interlocuteur, on le met en copie, on donne des faits datés et une demande précise, sans chercher de coupable. Au Québec, l’Office québécois de la langue française accepte « escalade » et « faire escalader » en gestion. EN: Escalate openly: warn your contact, dated facts, a precise request, no culprit.',
    examples: [
      { itemId: E(1069), note: 'porter à l’attention' },
      { itemId: E(1073), note: 'prévenir avant' },
      { itemId: E(1078), note: 'débloquer, pas accuser' },
    ],
  },

  /** Act 7. */
  pique: {
    term: 'la pique',
    title: 'Quand la politesse devient une arme',
    body: 'Certaines formules polies servent à reprocher sans le dire : « comme indiqué dans mon précédent courriel », « merci d’avance pour votre réactivité », « pour rappel », un passage soudain du tu au vous, une copie à la direction. Le lecteur les entend toutes. Reviens aux faits, à la demande, ou décroche le téléphone. EN: Polite formulas used to reproach; return to facts, the request, or the phone.',
    examples: [
      { itemId: E(1079), note: 'le reproche poli' },
      { itemId: E(1080), note: 'la version neutre' },
      { itemId: E(1087), note: 'changer de canal' },
    ],
  },

  /** Act 8. */
  conteste: {
    term: 'mot contesté',
    title: 'Qui condamne, qui accepte',
    body: 'Un mot du bureau comme « impacter », « booker » ou « je reviens vers vous » n’est pas une faute de sens : il est critiqué par certaines autorités et toléré par d’autres. Regarde qui le condamne, qui l’accepte, et qui va te lire ; à l’écrit soigné, prends le mot que personne ne conteste. EN: Check who condemns and who accepts a contested word, and who will read you.',
    examples: [
      { itemId: E(1092), note: 'au lieu d’« impacter »' },
      { itemId: E(1094), note: 'au lieu d’« initier »' },
      { itemId: E(1091), note: 'au lieu de « je reviens vers vous »' },
    ],
  },

  /** Act 9. */
  tutoiement: {
    term: 'le tutoiement',
    title: 'Tu ou vous, entre deux pays',
    body: 'Selon l’Office québécois de la langue française, dire tu dès la première rencontre est beaucoup plus fréquent au Québec qu’ailleurs, où il peut sembler familier. Dans le doute, vouvoie jusqu’à ce que la question soit abordée ; et ne lis ni froideur ni impolitesse dans l’habitude de l’autre. EN: Saying tu at once is more frequent in Québec (OQLF); when in doubt, use vous.',
    examples: [
      { itemId: E(1105), note: 'le constat de l’Office' },
      { itemId: E(1106), note: 'dans le doute' },
      { itemId: E(1107), note: 'proposer le tu' },
    ],
  },

  /** Act 9. */
  salutation: {
    term: 'la salutation',
    title: 'La formule qui ferme',
    body: 'La formule de salutation dit la distance. L’Office les classe en ordre croissant de déférence : « Recevez », « Veuillez recevoir », « Je vous prie de recevoir ». Dans un courriel, une formule brève suffit souvent ; pour un premier échange officiel, garde la formule longue. EN: Closing formulas mark distance, from Recevez to Je vous prie de recevoir.',
    examples: [
      { itemId: E(1109), note: 'la plus simple' },
      { itemId: E(1108), note: 'la plus déférente' },
      { itemId: E(1113), note: 'un premier échange' },
    ],
  },

  /** Act 10. */
  titremessage: {
    term: 'titre-message',
    title: 'Un titre qui conclut',
    body: 'Un titre comme « Calendrier » ne dit rien. Un titre-message donne la conclusion de la diapositive, « Le report ne touche pas votre saison », et le contenu la prouve. Ta voix relie le tout au public ; tu ne lis pas l’écran. EN: A slide title that states the conclusion the slide proves.',
    examples: [
      { itemId: E(1118), note: 'un titre-message' },
      { itemId: E(1117), note: 'la règle' },
      { itemId: E(1123), note: 'commenter, pas lire' },
    ],
  },

  /** Act 11. */
  hostile: {
    term: 'question dure',
    title: 'Répondre au fond, pas au ton',
    body: 'Une question hostile attaque plus qu’elle ne demande. Tu reconnais ce qui est juste, tu donnes la cause et le plan, et tu tiens ce qui est juste aussi. La question piège se découpe ; la question hors sujet se reporte, devant tous ; la question confidentielle se décline, simplement. EN: Answer the substance, not the tone; split, defer or decline the other hard questions.',
    examples: [
      { itemId: E(1129), note: 'accueillir la question' },
      { itemId: E(1134), note: 'reconnaître et tenir' },
      { itemId: E(1131), note: 'décliner' },
    ],
  },
};
