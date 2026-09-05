// TCF Canada blanc-02 — Expression écrite and Expression orale.
//
// Three tâches each, and the shapes are fixed by STANDARD-tcf §5 and §6 rather
// than chosen: a message, then an account WITH a comment, then a comparison of
// two written viewpoints; a guided interview, then an interaction driven by a
// document, then a defended position.
//
// The SITUATIONS come from PLAN-tcf-blanc-02.md; the SHAPES do not. Where the
// two pull against each other the shape wins, because it is what the épreuve
// measures. TCF-178 reads as "someone recounts a health problem and its
// follow-up", which sounds like a monologue, but the bank tags it EO-T2 and
// tâche 2 is an interaction: so it becomes a document plus a phone call about
// it, which is the same situation asked of the candidate differently.
//
// ── One clock for EE, not three ────────────────────────────────────────────
//
// §7 is explicit: the candidate manages the split across the three writing
// tâches themselves, so the runner shows ONE section clock. The per-task
// timingS below is a budget that sums to the section, not three separate
// countdowns.
//
// ── NO targetItemIds ───────────────────────────────────────────────────────
//
// The field is how a missed CLOSED question routes back to the corpus atoms it
// was built from. An open task has no atoms to miss: its outcome is a band, not
// a set of wrong answers. validateExamTask rejects the field here, and rightly.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_OPEN, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_OPEN,
};

/* ═══ Expression écrite ═══════════════════════════════════════════════════ */

export const EE_T1: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'a2',
  label: 'Expression écrite · Tâche 1',
  prompt:
    'TÂCHE 1 · message (60 à 120 mots)\n\n' +
    'Votre équipe travaille sur trois sites différents. Vous devez organiser une réunion à distance ' +
    'pour préparer la rentrée de septembre.\n\n' +
    'Écrivez un courriel à vos collègues. Proposez une date et une heure, dites combien de temps ' +
    'la réunion durera, indiquez comment se connecter, et demandez à chacun de confirmer ' +
    'avant une date précise.',
  timingS: 900,
  responseSpec: { kind: 'text', minWords: 60, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'consignes',
        label: 'Respect de la consigne',
        maxPoints: 5,
        descriptors: [
          'Les quatre informations demandées sont présentes : date et heure, durée, moyen de connexion, confirmation.',
          'La date limite de confirmation est explicite, pas seulement suggérée.',
          'Une information manquante coûte des points même si le courriel est bien écrit.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre',
        maxPoints: 5,
        descriptors: [
          'Ton de collègue à collègues : ni formel administratif, ni familier.',
          'Une formule d’ouverture et une de clôture adaptées à un courriel interne.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Présent et futur employés correctement ; accords de base tenus.',
          'Les erreurs qui restent ne gênent pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour à toutes et à tous,\n\n' +
    'Comme nous sommes répartis sur trois sites, je propose une réunion à distance pour préparer la rentrée. ' +
    'Je propose le mardi 9 septembre à 14 h. Comptez une heure : nous avons cinq points à voir, pas davantage.\n\n' +
    'Le lien de connexion est dans l’invitation que vous recevrez avec ce message. ' +
    'Si vous ne l’avez pas reçue, dites-le-moi et je vous la renverrai.\n\n' +
    'Merci de me confirmer votre présence avant le vendredi 5 septembre, ' +
    'pour que je sache si nous sommes en nombre.\n\n' +
    'Bien à vous,\nCamille',
};

export const EE_T2: ExamTask = {
  ...base,
  id: taskId('pe_short', '002'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b1',
  label: 'Expression écrite · Tâche 2',
  prompt:
    'TÂCHE 2 · courriel de réclamation (120 à 150 mots)\n\n' +
    'Votre facture d’électricité de janvier s’élève à 412 €, contre 96 € en moyenne les mois précédents. ' +
    'Votre logement n’a pas changé et vous étiez absent deux semaines en janvier. ' +
    'Le fournisseur indique une « régularisation sur relevé estimé ».\n\n' +
    'Écrivez au service client. RACONTEZ ce qui s’est passé, puis DITES CE QUE VOUS DEMANDEZ ' +
    'et pourquoi vous estimez la facture injustifiée.',
  timingS: 1200,
  responseSpec: { kind: 'text', minWords: 120, maxWords: 150 },
  rubric: {
    criteria: [
      {
        key: 'deuxParties',
        label: 'Exposé des faits ET demande',
        maxPoints: 5,
        descriptors: [
          'Le texte fait les DEUX choses : il expose la situation et il formule une demande précise.',
          'Un courriel qui se plaint sans demander quoi que ce soit ne répond pas à la consigne.',
          'Une demande sans les faits qui la fondent non plus.',
        ],
      },
      {
        key: 'articulation',
        label: 'Organisation et arguments',
        maxPoints: 5,
        descriptors: [
          'Les chiffres de la consigne sont repris sans être déformés.',
          'L’absence de deux semaines est utilisée comme argument, non seulement mentionnée.',
          'Le passage des faits à la demande est marqué.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Registre de réclamation : ferme et courtois, sans agressivité.',
          'Passé composé et présent employés à bon escient ; les erreurs ne gênent pas la lecture.',
        ],
      },
    ],
  },
  modelAnswer:
    'Madame, Monsieur,\n\n' +
    'Je reçois ce jour ma facture de janvier, d’un montant de 412 €. Mes factures précédentes ' +
    's’élevaient en moyenne à 96 €. Rien n’a changé dans mon logement, ni la surface, ni les appareils, ' +
    'et j’ai de surcroît été absent du 8 au 22 janvier, période pendant laquelle le chauffage ' +
    'est resté au minimum.\n\n' +
    'Votre courrier indique une régularisation sur relevé estimé. C’est précisément ce que je conteste : ' +
    'une estimation qui aboutit à quadrupler une consommation pendant un mois où le logement était vide ' +
    'ne peut pas refléter la réalité.\n\n' +
    'Je vous demande de procéder à un relevé réel du compteur et de suspendre le prélèvement ' +
    'jusqu’à ce que ce relevé soit effectué.\n\n' +
    'Je vous prie d’agréer mes salutations distinguées.',
};

export const EE_T3: ExamTask = {
  ...base,
  // `pe_short`, like blanc-01's tâche 3, not `pe_essay`. Both typecheck; the
  // gold paper is the one that has been reviewed and sat, and a task type is
  // what the runner dispatches on.
  id: taskId('pe_short', '003'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b2',
  label: 'Expression écrite · Tâche 3',
  prompt:
    'TÂCHE 3 · comparaison de deux points de vue (120 à 180 mots)\n\n' +
    'Deux textes ont paru dans le bulletin municipal au sujet de la gratuité des transports en commun.\n\n' +
    'TEXTE A · « La gratuité n’est pas une dépense, c’est un transfert. Ce que l’usager ne paie plus au guichet, ' +
    'il le paie par l’impôt, à ceci près que l’impôt tient compte de ses revenus et le ticket non. ' +
    'Les villes qui ont franchi le pas voient leur fréquentation augmenter d’un quart, ' +
    'et ce sont d’abord ceux qui renonçaient à se déplacer qui reviennent. »\n\n' +
    'TEXTE B · « Un réseau gratuit est un réseau qu’on n’améliore plus. La recette des billets finance ' +
    'l’entretien et l’extension ; supprimez-la et vous obtenez, au mieux, le même réseau plus fréquenté, ' +
    'au pire un réseau qui se dégrade sur des lignes désormais saturées. ' +
    'La question n’est pas le prix du ticket, c’est le nombre de bus. »\n\n' +
    'Comparez les deux points de vue, puis prenez position.',
  timingS: 1500,
  responseSpec: { kind: 'text', minWords: 120, maxWords: 180 },
  rubric: {
    criteria: [
      {
        key: 'comparaison',
        label: 'Comparaison réelle',
        maxPoints: 5,
        descriptors: [
          'Les deux textes sont restitués fidèlement, y compris celui que le candidat rejette.',
          'Le désaccord est situé : il ne porte pas sur le prix, mais sur ce que la recette finance.',
          'Un texte qui résume A puis résume B sans les mettre en rapport ne compare pas.',
        ],
      },
      {
        key: 'position',
        label: 'Prise de position',
        maxPoints: 5,
        descriptors: [
          'Une position est prise, et elle est argumentée avec autre chose que la préférence.',
          'La meilleure objection adverse est traitée plutôt qu’ignorée.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Connecteurs d’opposition et de concession employés correctement.',
          'Registre écrit soutenu, sans familiarité ; les erreurs ne gênent pas la lecture.',
        ],
      },
    ],
  },
  modelAnswer:
    'Les deux textes s’accordent sur un point que leur ton dissimule : aucun ne conteste que la gratuité ' +
    'augmente la fréquentation. Leur désaccord porte sur ce que devient le réseau ensuite.\n\n' +
    'Le texte A raisonne en termes de justice : le ticket ignore les revenus, l’impôt non, et la gratuité ' +
    'ramène ceux qui renonçaient à se déplacer. Le texte B raisonne en termes de capacité : la recette ' +
    'finance l’entretien, et un réseau plus fréquenté sans recette supplémentaire se dégrade.\n\n' +
    'Les deux peuvent avoir raison en même temps, et c’est ce qui rend la question difficile. ' +
    'Une gratuité financée par un transfert budgétaire explicite répond à B ; une gratuité décidée ' +
    'sans dire qui paie l’entretien lui donne raison.\n\n' +
    'Je penche donc pour la gratuité, à une condition que le texte A ne mentionne pas : ' +
    'qu’elle soit votée avec le budget d’exploitation qui va avec, et non à sa place.',
};

/* ═══ Expression orale ════════════════════════════════════════════════════ */
//
// Tâches 1 and 3 are MONOLOGUES on this format. The examiner's questions in
// tâche 1 are a ladder the candidate answers, not an exchange the app plays;
// only tâche 2, which the app really does play, is po_interaction.

export const EO_T1: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'a2',
  label: 'Expression orale · Tâche 1',
  prompt:
    'TÂCHE 1 · entretien dirigé · 2 minutes · sans préparation\n\n' +
    'L’examinateur vous pose des questions sur votre organisation au quotidien. ' +
    'Répondez naturellement, et développez vos réponses : une phrase seule ne suffit pas.\n\n' +
    '· Comment organisez-vous vos dépenses sur un mois ?\n' +
    '· Est-ce que vous notez ce que vous dépensez, ou pas du tout ?\n' +
    '· Y a-t-il une dépense que vous avez réduite cette année ? Laquelle, et pourquoi ?\n' +
    '· Qu’est-ce qui est le plus difficile à prévoir d’un mois à l’autre ?',
  timingS: 120,
  responseSpec: { kind: 'audio', minDurationS: 60, maxDurationS: 150 },
  rubric: {
    criteria: [
      {
        key: 'developpement',
        label: 'Développement des réponses',
        maxPoints: 5,
        descriptors: [
          'Chaque question reçoit plus qu’une phrase : un exemple, une raison, une précision.',
          'Une réponse d’un mot, même juste, ne montre rien de ce que la tâche mesure.',
        ],
      },
      {
        key: 'aisance',
        label: 'Aisance',
        maxPoints: 5,
        descriptors: [
          'Le débit reste régulier ; les hésitations ne bloquent pas le tour de parole.',
          'Le candidat se reprend sans s’arrêter quand il se trompe.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Présent et passé composé tenus ; le lexique des dépenses courantes est disponible.',
          'La prononciation ne gêne pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Je m’organise assez simplement. Au début du mois, je mets de côté ce qui est fixe : le loyer, ' +
    'les abonnements, les transports. Ce qui reste, c’est pour les courses et les sorties, ' +
    'et quand c’est fini, c’est fini.\n\n' +
    'Je ne note pas tout, non. J’ai essayé pendant deux mois avec une application, mais j’oubliais ' +
    'la moitié des dépenses et les chiffres ne voulaient plus rien dire. Maintenant je regarde ' +
    'seulement le solde une fois par semaine.\n\n' +
    'Cette année, j’ai réduit les repas au restaurant. Je sortais deux ou trois fois par semaine, ' +
    'maintenant c’est une fois, et je cuisine davantage. Ce n’était pas seulement pour l’argent, ' +
    'mais l’argent a aidé à décider.\n\n' +
    'Le plus difficile à prévoir, ce sont les dépenses de santé et tout ce qui casse. ' +
    'Le mois où la machine à laver s’arrête, aucun budget ne tient.',
};

export const EO_T2: ExamTask = {
  ...base,
  id: taskId('po_interaction', '001'),
  taskType: 'po_interaction',
  skill: 'PO',
  level: 'b1',
  label: 'Expression orale · Tâche 2',
  prompt:
    'TÂCHE 2 · exercice en interaction · 2 minutes de préparation, puis environ 3 minutes 30\n\n' +
    'CONVOCATION · centre d’imagerie médicale\n\n' +
    'Votre médecin vous a prescrit un examen. Vous recevez la convocation suivante.\n' +
    'Examen : IRM du genou · Date proposée : jeudi 14 mars, 7 h 45 · Durée sur place : environ 2 heures.\n' +
    'Mention : « à jeun depuis minuit » · Reste à charge annoncé : 68 €.\n\n' +
    'Vous téléphonez au centre. Posez les questions nécessaires pour comprendre, ' +
    'et demandez ce qui peut être modifié.',
  // Prep is clocked SEPARATELY from the exchange (STANDARD-tcf §7). A runner
  // that folds the two into one countdown gives the candidate a shorter
  // interaction the better they prepare.
  prepS: 120,
  timingS: 330,
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 240 },
  interlocutor: {
    opening: {
      id: 'open',
      text: 'Centre d’imagerie de Vaubourg, bonjour.',
      covers: 'ouverture',
      cues: [],
    },
    catchAll: {
      id: 'catch',
      text: 'Je n’ai pas cette information sous les yeux, il faudrait la demander au manipulateur le jour même.',
      covers: 'information non détenue',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'Très bien, c’est noté au dossier. Vous recevrez la confirmation par message. Bonne journée.',
      covers: 'clôture',
      cues: [],
    },
    answers: [
      {
        id: 'ajeun',
        text: 'Pour une IRM du genou, il n’est pas nécessaire d’être à jeun. La mention est générique sur nos convocations, elle vaut pour les examens avec injection.',
        covers: 'la mention « à jeun » ne s’applique pas',
        cues: ['jeun', 'manger', 'boire', 'petit dejeuner', 'repas', 'cafe'],
      },
      {
        id: 'duree',
        text: 'L’examen lui-même dure une vingtaine de minutes. Les deux heures couvrent l’accueil, l’attente et la relecture des images par le radiologue.',
        covers: 'ce que recouvrent les deux heures',
        cues: ['duree', 'deux heures', 'combien de temps', 'long', 'attente'],
      },
      {
        id: 'horaire',
        text: 'Nous avons d’autres créneaux, mais le premier en fin de journée est le mardi 26 mars, à dix-huit heures.',
        covers: 'un autre horaire est possible, plus tard',
        cues: ['horaire', 'plus tard', 'autre creneau', 'changer', 'deplacer', 'matin', 'travail'],
      },
      {
        id: 'cout',
        text: 'Les soixante-huit euros correspondent au dépassement d’honoraires du radiologue. Votre mutuelle le rembourse en général en partie, selon votre contrat.',
        covers: 'ce que sont les 68 €',
        cues: ['soixante-huit', '68', 'cout', 'prix', 'payer', 'reste a charge', 'mutuelle', 'rembours'],
      },
      {
        id: 'apporter',
        text: 'Apportez l’ordonnance, votre carte vitale, et les radiographies précédentes du genou si vous en avez.',
        covers: 'ce qu’il faut apporter',
        cues: ['apporter', 'documents', 'ordonnance', 'carte', 'papiers', 'besoin'],
      },
      {
        id: 'resultats',
        text: 'Le compte rendu part chez votre médecin sous quarante-huit heures. Vous repartez le jour même avec les images.',
        covers: 'quand arrivent les résultats',
        cues: ['resultat', 'compte rendu', 'medecin', 'quand', 'recevoir', 'images'],
      },
      {
        id: 'annuler',
        text: 'Si vous devez annuler, prévenez-nous au moins quarante-huit heures à l’avance, sans quoi le créneau vous est facturé.',
        covers: 'les conditions d’annulation',
        cues: ['annuler', 'empechement', 'decommander', 'si je ne peux pas'],
      },
    ],
  },
  rubric: {
    criteria: [
      {
        key: 'questions',
        label: 'Questions utiles',
        maxPoints: 5,
        descriptors: [
          'Le candidat interroge ce que le document laisse réellement obscur : le jeûne, la durée, le reste à charge.',
          'Une question dont la réponse figure déjà sur la convocation ne compte pas.',
        ],
      },
      {
        key: 'interaction',
        label: 'Conduite de l’échange',
        maxPoints: 5,
        descriptors: [
          'Le candidat réagit à ce qu’on lui répond au lieu de dérouler une liste préparée.',
          'Il obtient une modification ou en constate l’impossibilité avant de conclure.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Formes interrogatives variées et registre poli soutenu tout du long.',
          'Les chiffres de la convocation sont repris correctement.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour, je vous appelle au sujet d’une convocation pour une IRM du genou, le 14 mars à 7 h 45. ' +
    'J’ai quelques questions.\n\n' +
    'D’abord, la convocation indique « à jeun depuis minuit ». Est-ce que c’est nécessaire pour ce type d’examen ? ' +
    'Ah, c’est une mention générique, très bien, cela me rassure.\n\n' +
    'Ensuite, vous annoncez deux heures sur place. Est-ce que l’examen lui-même dure deux heures, ' +
    'ou est-ce que cela comprend l’attente ? D’accord, vingt minutes d’examen.\n\n' +
    'Le problème, c’est l’horaire : à 7 h 45 je ne peux pas être là, je commence à 8 h. ' +
    'Auriez-vous un créneau en fin de journée ? Le 26 à dix-huit heures me conviendrait mieux, ' +
    'même si c’est douze jours plus tard.\n\n' +
    'Dernière chose : les 68 € annoncés, à quoi correspondent-ils exactement ? ' +
    'Un dépassement d’honoraires, d’accord, je verrai avec ma mutuelle.\n\n' +
    'Donc je prends le 26 mars à dix-huit heures. Je vous remercie beaucoup.',
};

export const EO_T3: ExamTask = {
  ...base,
  id: taskId('po_monologue', '002'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'b2',
  label: 'Expression orale · Tâche 3',
  prompt:
    'TÂCHE 3 · expression d’un point de vue · environ 4 minutes 30 · sans préparation\n\n' +
    'Les stages en entreprise sont présentés comme le meilleur moyen de découvrir un métier. ' +
    'Sont-ils une formation que l’on reçoit, ou un travail que l’on fournit sans être payé pour ce qu’il vaut ?\n\n' +
    'Exposez votre point de vue et défendez-le.',
  timingS: 270,
  responseSpec: { kind: 'audio', minDurationS: 150, maxDurationS: 300 },
  rubric: {
    criteria: [
      {
        key: 'position',
        label: 'Position et défense',
        maxPoints: 5,
        descriptors: [
          'Une position claire est prise sur la question POSÉE, qui est une alternative, pas un thème.',
          'Elle est défendue par au moins deux arguments distincts, non par le même reformulé.',
          'Un exposé équilibré qui ne tranche jamais ne répond pas à la consigne.',
        ],
      },
      {
        key: 'objection',
        label: 'Traitement de l’objection',
        maxPoints: 5,
        descriptors: [
          'La meilleure objection adverse est restituée fidèlement avant d’être traitée.',
          'Une concession est faite et bornée : ce qu’elle accorde ne fait pas tomber la thèse.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Nuance et concession disponibles : « certes », « il n’en reste pas moins », « à condition que ».',
          'Le débit soutient un développement de plusieurs minutes sans se déliter.',
        ],
      },
    ],
  },
  modelAnswer:
    'Je crois que la question se tranche cas par cas, et que dire cela n’est pas se dérober : ' +
    'ce qui distingue les deux situations est identifiable, et c’est la substitution.\n\n' +
    'Un stage est une formation quand ce que fait le stagiaire ne remplace le travail de personne. ' +
    'Il observe, il essaie, quelqu’un reprend derrière lui, et cela coûte du temps à l’entreprise. ' +
    'Un stage est un emploi déguisé quand le poste existerait sans lui : quand le départ du stagiaire ' +
    'oblige à recruter, la démonstration est faite.\n\n' +
    'On m’objectera qu’un stagiaire apprend aussi en faisant un vrai travail, et c’est exact. ' +
    'Je l’accorde volontiers : on n’apprend pas un métier en regardant. Mais cela plaide pour ' +
    'rémunérer le travail réel, pas pour cesser de distinguer les deux.\n\n' +
    'Ce qui me décide, c’est la durée. Un mois d’observation ne remplace personne. ' +
    'Six mois à temps plein sur un poste identifié, avec des objectifs et une charge, ' +
    'ne sont plus une découverte : ce sont des conditions d’emploi, et il faudrait avoir le courage ' +
    'de les appeler ainsi.\n\n' +
    'Ma position est donc celle-ci : je suis favorable aux stages, et défavorable au mot « stage » ' +
    'quand il sert à ne pas écrire « contrat ».',
};
