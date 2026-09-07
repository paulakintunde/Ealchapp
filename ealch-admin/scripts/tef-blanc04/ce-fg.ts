// TEF Canada blanc-04 — Compréhension écrite, blocks D+E, F and G.
//
//   D+E  5 · lecture rapide                            · 2 documents
//   F   10 · documents administratifs et professionnels · 2 documents
//   G    8 · articles de presse                         · 1 article
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, NOTES_CLOSED, taskId, ITEMS, uniq } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  taskType: 'ce_mcq' as const,
  skill: 'CE' as const,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ Blocks D + E — Lecture rapide ═══════════════════════════════════════ */

export const CE_DE: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '004'),
  level: 'b1',
  label: 'Sections D et E',
  prompt: 'Lisez les documents et retrouvez les informations demandées.',
  timingS: 480,
  targetItemIds: uniq(ITEMS.musees, ITEMS.ecole),
  parts: [
    {
      label: 'Document 1 · la carte de bibliothèque',
      text:
        'CARTE DE BIBLIOTHÈQUE · conditions de prêt\n' +
        '\n' +
        'Gratuite pour les moins de 18 ans et les demandeurs d’emploi · 12 € par an pour les autres.\n' +
        'Livres : 8 par carte, 4 semaines, renouvelable une fois en ligne.\n' +
        'DVD : 2 par carte, 1 semaine, non renouvelables.\n' +
        'Revues : consultation sur place uniquement.\n' +
        '\n' +
        'Retard : le prêt est bloqué tant que les documents ne sont pas rendus. Aucune amende.\n' +
        'Perte ou dommage : remplacement à la charge de l’usager, au prix du neuf.',
      items: [
        {
          q: 'Combien de temps un livre peut-il être gardé au maximum ?',
          opts: ['8 semaines', '4 semaines', '1 semaine', '12 semaines'],
          correct: 0,
          why: '4 semaines renouvelables une fois, soit 8 semaines. La semaine unique concerne les DVD.',
          band: 'b1',
        },
        {
          q: 'Que se passe-t-il en cas de retard ?',
          opts: [
            'Le prêt est bloqué jusqu’au retour des documents',
            'Une amende est calculée par jour de retard',
            'La carte est annulée et doit être rachetée',
            'Le renouvellement en ligne devient payant',
          ],
          correct: 0,
          why: '« Le prêt est bloqué tant que les documents ne sont pas rendus. Aucune amende. »',
          band: 'a2',
        },
        {
          q: 'Que peut-on faire des revues ?',
          opts: [
            'Les consulter uniquement dans la bibliothèque',
            'En emprunter deux par carte pour une semaine',
            'En emprunter huit comme les livres',
            'Les renouveler une fois en ligne',
          ],
          correct: 0,
          why: '« Revues : consultation sur place uniquement. »',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 2 · l’inscription à la cantine',
      text:
        'CANTINE SCOLAIRE · fiche d’inscription\n' +
        '\n' +
        'Tarif au quotient familial : de 1,20 € à 5,60 € le repas.\n' +
        'Inscription à l’année ou au mois, jamais au repas.\n' +
        'Toute annulation doit être faite avant 9 h la veille ; sinon le repas est facturé.\n' +
        'Régimes sans porc et sans viande proposés. Les allergies exigent un protocole médical signé.\n' +
        'Retard de paiement de plus de deux mois : l’inscription est suspendue.',
      items: [
        {
          q: 'Jusqu’à quand peut-on annuler un repas sans être facturé ?',
          opts: [
            'La veille avant 9 h',
            'Le matin même avant 9 h',
            'Deux jours avant le repas',
            'Le jour même, à tout moment',
          ],
          correct: 0,
          why: '« Toute annulation doit être faite avant 9 h la veille ; sinon le repas est facturé. »',
          band: 'b1',
        },
        {
          q: 'Que faut-il fournir pour une allergie alimentaire ?',
          opts: [
            'Un protocole médical signé',
            'Une simple mention sur la fiche d’inscription',
            'Un certificat de régime sans viande',
            'Une attestation de quotient familial',
          ],
          correct: 0,
          why: '« Les allergies exigent un protocole médical signé », à la différence des régimes sans porc ou sans viande.',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block F — Documents administratifs et professionnels ════════════════ */
//
// SELF-VERIFY (F1–F10): each key rests on a stated condition, never on an
// inference about intent. Where two conditions interact, the `why` names both.

export const CE_F: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'b2',
  label: 'Section F',
  prompt: 'Lisez les documents et choisissez la bonne réponse.',
  timingS: 900,
  targetItemIds: uniq(ITEMS.examensEtDiplomes, ITEMS.internet),
  parts: [
    {
      label: 'Document 1 · règlement d’examen',
      text:
        'RÈGLEMENT D’EXAMEN · absences et report\n' +
        '\n' +
        'Article 1. Une absence est justifiée si elle est signalée dans les 48 heures et appuyée d’une ' +
        'pièce : certificat médical, convocation officielle, attestation d’employeur. Un justificatif ' +
        'produit au-delà de ce délai n’est pas examiné, quelle qu’en soit la nature.\n' +
        '\n' +
        'Article 2. Une absence justifiée ouvre droit à une session de rattrapage, organisée une fois ' +
        'par an, en septembre. Elle n’ouvre pas droit à une note de remplacement calculée sur le ' +
        'contrôle continu.\n' +
        '\n' +
        'Article 3. Une absence non justifiée vaut note de zéro à l’épreuve concernée, sans effet sur ' +
        'les autres épreuves de la session.\n' +
        '\n' +
        'Article 4. L’étudiant absent au rattrapage pour un motif à nouveau justifié conserve le ' +
        'bénéfice de son inscription pour l’année suivante, mais ne peut prétendre à une seconde ' +
        'session dans la même année.\n' +
        '\n' +
        'Article 5. Le jury peut, à titre exceptionnel et par décision motivée, écarter l’application ' +
        'de l’article 1 lorsque l’étudiant était dans l’impossibilité matérielle de signaler son absence.',
      items: [
        {
          q: 'Que devient un justificatif produit après 48 heures ?',
          opts: [
            'Il n’est pas examiné, quelle que soit sa nature',
            'Il est examiné mais avec une pénalité',
            'Il est accepté s’il s’agit d’un certificat médical',
            'Il est transmis au jury pour décision',
          ],
          correct: 0,
          why: '« Un justificatif produit au-delà de ce délai n’est pas examiné, quelle qu’en soit la nature. » L’article 5 est une exception distincte, réservée à l’impossibilité de signaler.',
          band: 'b2',
        },
        {
          q: 'À quoi une absence justifiée donne-t-elle droit ?',
          opts: [
            'À la session de rattrapage de septembre',
            'À une note calculée sur le contrôle continu',
            'À une nouvelle épreuve dans le mois',
            'À une dispense de l’épreuve concernée',
          ],
          correct: 0,
          why: 'L’article 2 accorde le rattrapage et exclut expressément la note de remplacement.',
          band: 'b2',
        },
        {
          q: 'Quel est l’effet d’une absence non justifiée ?',
          opts: [
            'Un zéro à cette épreuve seulement',
            'Un zéro à l’ensemble de la session',
            'L’exclusion de la session de rattrapage',
            'Le report automatique à l’année suivante',
          ],
          correct: 0,
          why: '« Vaut note de zéro à l’épreuve concernée, sans effet sur les autres épreuves de la session. »',
          band: 'b1',
        },
        {
          q: 'Que se passe-t-il si l’étudiant manque aussi le rattrapage, pour un motif justifié ?',
          opts: [
            'Il garde son inscription pour l’année suivante',
            'Il obtient une seconde session la même année',
            'Il est considéré comme démissionnaire',
            'Il reçoit une note calculée sur le contrôle continu',
          ],
          correct: 0,
          why: 'L’article 4 conserve le bénéfice de l’inscription pour l’année suivante et refuse une seconde session dans la même année.',
          band: 'b2',
        },
        {
          q: 'Dans quel cas le jury peut-il écarter la règle des 48 heures ?',
          opts: [
            'Si l’étudiant était matériellement empêché de signaler',
            'Si l’étudiant fournit un certificat médical',
            'Si l’absence concerne la session de rattrapage',
            'Si l’étudiant en fait la demande écrite',
          ],
          correct: 0,
          why: '« À titre exceptionnel et par décision motivée… lorsque l’étudiant était dans l’impossibilité matérielle de signaler son absence. »',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 2 · conditions d’utilisation',
      text:
        'CONDITIONS D’UTILISATION · application de messagerie, extrait\n' +
        '\n' +
        'Article 3. Le compte est personnel. Le prêt des identifiants à un tiers engage la ' +
        'responsabilité du titulaire pour tout usage qui en est fait, y compris après qu’il a demandé ' +
        'la restitution de ses accès.\n' +
        '\n' +
        'Article 6. Les messages sont conservés sur nos serveurs quatre-vingt-dix jours après leur ' +
        'suppression par l’utilisateur, à des fins de sécurité. Passé ce délai, ils sont effacés et ne ' +
        'peuvent plus être restitués, y compris sur réquisition.\n' +
        '\n' +
        'Article 9. Un compte inactif depuis vingt-quatre mois est supprimé après un avertissement ' +
        'envoyé trente jours avant. Une simple connexion suffit à réinitialiser le compteur.\n' +
        '\n' +
        'Article 11. Le service peut être modifié sans préavis. Une modification qui réduit une ' +
        'fonctionnalité payante ouvre en revanche droit à résiliation sans frais dans les trente jours.',
      items: [
        {
          q: 'Qui répond de l’usage fait par un tiers à qui les identifiants ont été prêtés ?',
          opts: [
            'Le titulaire du compte, même après avoir demandé la restitution',
            'Le tiers à qui les identifiants ont été confiés',
            'Le service, dès lors qu’il a été prévenu',
            'Personne, le prêt d’identifiants étant interdit',
          ],
          correct: 0,
          why: '« Engage la responsabilité du titulaire pour tout usage qui en est fait, y compris après qu’il a demandé la restitution de ses accès. »',
          band: 'b2',
        },
        {
          q: 'Combien de temps un message supprimé reste-t-il sur les serveurs ?',
          opts: ['Quatre-vingt-dix jours', 'Trente jours', 'Vingt-quatre mois', 'Il est effacé immédiatement'],
          correct: 0,
          why: '« Conservés sur nos serveurs quatre-vingt-dix jours après leur suppression par l’utilisateur. »',
          band: 'b1',
        },
        {
          q: 'Que dit le texte des messages effacés après ce délai ?',
          opts: [
            'Ils ne peuvent plus être restitués, même sur réquisition',
            'Ils peuvent être restitués sur demande du titulaire',
            'Ils sont archivés sous une forme anonyme',
            'Ils sont conservés encore trente jours par sécurité',
          ],
          correct: 0,
          why: '« Ils sont effacés et ne peuvent plus être restitués, y compris sur réquisition. »',
          band: 'b2',
        },
        {
          q: 'Comment éviter la suppression d’un compte inactif ?',
          opts: [
            'En s’y connectant, ce qui remet le compteur à zéro',
            'En répondant à l’avertissement qui est envoyé trente jours avant',
            'En envoyant au moins un message par an',
            'En demandant une prolongation au service',
          ],
          correct: 0,
          why: '« Une simple connexion suffit à réinitialiser le compteur. »',
          band: 'b1',
        },
        {
          q: 'Dans quel cas une modification du service ouvre-t-elle droit à résiliation sans frais ?',
          opts: [
            'Quand elle réduit une fonctionnalité payante',
            'Quand elle intervient sans préavis',
            'Quand elle porte sur la durée de conservation',
            'Dans tous les cas de modification du service',
          ],
          correct: 0,
          why: 'L’article 11 autorise la modification sans préavis, mais réserve la résiliation sans frais au cas où une fonctionnalité PAYANTE est réduite.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block G — Article de presse ═════════════════════════════════════════ */
//
// SELF-VERIFY (G1–G8): figures invented and attributed to an invented
// observatory. Two questions turn on positions the article reports without
// endorsing, and their `why` names the sentence that separates them.

export const CE_G: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '006'),
  level: 'b2',
  label: 'Section G',
  prompt: 'Lisez l’article et choisissez la bonne réponse.',
  timingS: 780,
  targetItemIds: uniq(ITEMS.quebecEtFrancophonie, ITEMS.questionsSociales),
  parts: [
    {
      label: 'Article · le français au travail dans les milieux bilingues',
      text:
        'Dans les entreprises où le français et l’anglais coexistent, une règle non écrite s’impose ' +
        'presque partout : dès qu’une personne ne parle pas français dans une réunion, la réunion se ' +
        'tient en anglais. L’observatoire de Marnac, qui a observé cent quarante réunions dans ' +
        'vingt-deux entreprises, la retrouve dans quatre-vingt-six pour cent des cas.\n' +
        '\n' +
        'Le mécanisme paraît courtois, et il l’est. Mais il produit un effet que personne ne choisit : ' +
        'la langue commune finit par être celle du dernier arrivé, quel que soit le nombre de personnes ' +
        'qui parlent l’autre.\n' +
        '\n' +
        'Certaines directions y voient la preuve qu’une politique linguistique est illusoire, et que ' +
        'l’usage tranche de lui-même. Une responsable des ressources humaines interrogée résume : ' +
        '« On peut écrire ce qu’on veut dans une charte, personne ne va demander à un collègue de ' +
        'sortir de la salle. »\n' +
        '\n' +
        'Les entreprises qui ont inversé la tendance ne l’ont pourtant pas fait par la contrainte. ' +
        'Elles ont agi sur un point matériel : la traduction simultanée, ou plus simplement un ' +
        'document préparatoire bilingue distribué avant la réunion. Quand chacun peut suivre sans ' +
        'comprendre chaque mot, la réunion reste en français dans deux tiers des cas observés.\n' +
        '\n' +
        'L’observatoire souligne une limite à ses propres chiffres : les entreprises qui acceptent ' +
        'd’être observées sont probablement celles qui se soucient déjà de la question. Il ne conclut ' +
        'donc pas que la méthode fonctionnerait partout, seulement qu’elle fonctionne là où elle a été ' +
        'essayée.',
      items: [
        {
          q: 'Quelle règle non écrite l’article décrit-il ?',
          opts: [
            'La réunion passe à l’anglais dès qu’une personne ne parle pas français',
            'La réunion se tient dans la langue de la majorité des participants',
            'La réunion alterne les deux langues à parts égales',
            'La réunion se tient en français sauf décision contraire',
          ],
          correct: 0,
          why: '« Dès qu’une personne ne parle pas français dans une réunion, la réunion se tient en anglais », retrouvée dans 86 % des cas.',
          band: 'b1',
        },
        {
          q: 'Quel effet ce mécanisme produit-il ?',
          opts: [
            'La langue commune devient celle du dernier arrivé',
            'Les réunions deviennent nettement plus longues',
            'Les participants francophones cessent de venir',
            'Les entreprises recrutent moins de non-francophones',
          ],
          correct: 0,
          why: '« La langue commune finit par être celle du dernier arrivé, quel que soit le nombre de personnes qui parlent l’autre. »',
          band: 'b2',
        },
        {
          q: 'Comment l’article qualifie-t-il ce mécanisme ?',
          opts: [
            'Courtois, mais produisant un effet que personne ne choisit',
            'Délibéré, et imposé par les directions',
            'Illégal au regard des chartes internes',
            'Marginal, puisqu’il ne touche que quelques réunions',
          ],
          correct: 0,
          why: '« Le mécanisme paraît courtois, et il l’est. Mais il produit un effet que personne ne choisit. »',
          band: 'b2',
        },
        {
          q: 'Quelle conclusion certaines directions en tirent-elles ?',
          opts: [
            'Qu’une politique linguistique est illusoire face à l’usage',
            'Qu’il faut rendre le français obligatoire en réunion',
            'Qu’il faut recruter davantage de personnel bilingue',
            'Que la charte doit prévoir des sanctions',
          ],
          correct: 0,
          why: 'C’est leur position rapportée : « la preuve qu’une politique linguistique est illusoire, et que l’usage tranche de lui-même ».',
          band: 'b2',
        },
        {
          q: 'Qu’illustre la citation de la responsable des ressources humaines ?',
          opts: [
            'La difficulté d’appliquer une règle contre la courtoisie ordinaire',
            'Le refus des salariés d’apprendre le français',
            'L’absence de charte dans la plupart des entreprises',
            'Le coût élevé des dispositifs de traduction',
          ],
          correct: 0,
          why: '« On peut écrire ce qu’on veut dans une charte, personne ne va demander à un collègue de sortir de la salle. »',
          band: 'b2',
        },
        {
          q: 'Qu’ont fait les entreprises qui ont inversé la tendance ?',
          opts: [
            'Elles ont agi sur un point matériel plutôt que par la contrainte',
            'Elles ont imposé le français par une clause au contrat',
            'Elles ont réduit le nombre de réunions communes',
            'Elles ont séparé les équipes par langue de travail',
          ],
          correct: 0,
          why: '« Elles ne l’ont pourtant pas fait par la contrainte. Elles ont agi sur un point matériel : la traduction simultanée, ou un document préparatoire bilingue. »',
          band: 'b2',
        },
        {
          q: 'Quel résultat ces mesures obtiennent-elles ?',
          opts: [
            'La réunion reste en français dans deux tiers des cas observés',
            'La réunion reste en français dans la totalité des cas',
            'Les réunions bilingues disparaissent complètement',
            'Les participants non francophones cessent d’assister',
          ],
          correct: 0,
          why: '« Quand chacun peut suivre sans comprendre chaque mot, la réunion reste en français dans deux tiers des cas observés. »',
          band: 'b1',
        },
        {
          q: 'Quelle limite l’observatoire reconnaît-il à ses chiffres ?',
          opts: [
            'Les entreprises observées se souciaient déjà de la question',
            'Le nombre de réunions observées est trop faible',
            'Les réunions ont toutes eu lieu dans la même région',
            'Les participants savaient qu’ils étaient observés',
          ],
          correct: 0,
          why: '« Les entreprises qui acceptent d’être observées sont probablement celles qui se soucient déjà de la question », d’où le refus de généraliser.',
          band: 'c1',
        },
      ],
    },
  ],
};
