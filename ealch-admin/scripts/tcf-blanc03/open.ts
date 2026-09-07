// TCF Canada blanc-03 — Expression écrite and Expression orale.
//
// Three tâches each, shapes fixed by STANDARD-tcf §5 and §6 rather than chosen:
// a message, then an account WITH a comment, then a comparison of two written
// viewpoints; a guided interview, then an interaction driven by a document,
// then a defended position.
//
// The SITUATIONS come from PLAN-tcf-blanc-03.md; the SHAPES do not, and where
// they pull against each other the shape wins. TCF-191 reads as "someone
// recounts a meeting that led to a job", which is a story; tâche 3 is a
// defended position, so it becomes the two-sided question that story raises.
//
// ── One clock for EE, not three ────────────────────────────────────────────
//
// §7: the candidate manages the split across the three writing tâches, so the
// runner shows ONE section clock. The per-task timingS is a budget that sums to
// the section, not three countdowns.
//
// ── NO targetItemIds ───────────────────────────────────────────────────────
//
// An open task has no atoms to miss: its outcome is a band, not a set of wrong
// answers. validateExamTask rejects the field here, and rightly.
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
    'Vous louez un appartement. En rentrant, vous découvrez une fuite d’eau sous l’évier de la cuisine. ' +
    'Le sol du placard est mouillé et vous avez coupé l’arrivée d’eau.\n\n' +
    'Écrivez un message à votre propriétaire. Dites ce que vous avez constaté et quand, ' +
    'expliquez ce que vous avez déjà fait, demandez l’intervention d’un plombier, ' +
    'et indiquez à quels moments vous êtes joignable.',
  timingS: 900,
  responseSpec: { kind: 'text', minWords: 60, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'consignes',
        label: 'Respect de la consigne',
        maxPoints: 5,
        descriptors: [
          'Les quatre éléments sont présents : le constat et sa date, la mesure prise, la demande, la disponibilité.',
          'La coupure de l’arrivée d’eau est mentionnée : c’est ce qui distingue un signalement d’une plainte.',
          'Un élément manquant coûte des points même si le message est bien écrit.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre',
        maxPoints: 5,
        descriptors: [
          'Ton de locataire à propriétaire : courtois et direct, sans excuse ni agressivité.',
          'Une formule d’ouverture et une de clôture adaptées à un message écrit.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Passé composé pour le constat, présent pour la demande ; accords de base tenus.',
          'Les erreurs qui restent ne gênent pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour Madame Kernal,\n\n' +
    'En rentrant hier soir, j’ai découvert une fuite d’eau sous l’évier de la cuisine. ' +
    'Le sol du placard était mouillé et l’eau avait commencé à passer sous le meuble.\n\n' +
    'J’ai coupé l’arrivée d’eau et j’ai vidé le placard pour limiter les dégâts. ' +
    'Je n’ai touché à rien d’autre.\n\n' +
    'Pourriez-vous faire intervenir un plombier rapidement ? Sans eau à la cuisine, ' +
    'la situation n’est pas tenable plus de quelques jours.\n\n' +
    'Je suis joignable tous les jours après dix-sept heures, et toute la journée samedi. ' +
    'Vous pouvez aussi me prévenir par message et je m’organiserai.\n\n' +
    'Cordialement,\nSofia Delorme',
};

export const EE_T2: ExamTask = {
  ...base,
  id: taskId('pe_short', '002'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b1',
  label: 'Expression écrite · Tâche 2',
  prompt:
    'TÂCHE 2 · lettre à la mairie (120 à 150 mots)\n\n' +
    'L’éclairage public de votre rue est éteint depuis six semaines, sur environ deux cents mètres. ' +
    'Deux signalements ont été faits par téléphone, sans résultat. ' +
    'La rue est empruntée le matin par des collégiens.\n\n' +
    'Écrivez au maire. RACONTEZ la situation et ce qui a déjà été fait, ' +
    'puis DITES CE QUE VOUS DEMANDEZ et pourquoi cela vous paraît urgent.',
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
          'Une lettre qui décrit sans rien demander ne répond pas à la consigne.',
          'Une demande sans les faits qui la fondent non plus.',
        ],
      },
      {
        key: 'articulation',
        label: 'Organisation et arguments',
        maxPoints: 5,
        descriptors: [
          'Les éléments de la consigne sont repris sans être déformés : six semaines, deux signalements, deux cents mètres.',
          'Le passage des collégiens est employé comme argument, non seulement mentionné.',
          'Le passage des faits à la demande est marqué.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Registre administratif : ferme et courtois, formule d’appel et formule de politesse correctes.',
          'Passé composé et présent employés à bon escient ; les erreurs ne gênent pas la lecture.',
        ],
      },
    ],
  },
  modelAnswer:
    'Monsieur le Maire,\n\n' +
    'Je me permets d’attirer votre attention sur l’éclairage public de la rue des Tilleuls, ' +
    'éteint depuis six semaines sur environ deux cents mètres, entre le numéro 12 et le carrefour.\n\n' +
    'Deux signalements ont été faits par téléphone auprès des services techniques, ' +
    'le 3 et le 19 du mois dernier. Aucune intervention n’a eu lieu et aucune réponse ' +
    'ne nous est parvenue.\n\n' +
    'Cette portion est empruntée chaque matin par les collégiens qui rejoignent l’arrêt de bus, ' +
    'à une heure où il fait encore nuit une grande partie de l’année. ' +
    'Le trottoir y est étroit et la rue est en descente.\n\n' +
    'Je vous demande de faire procéder à la remise en service de cet éclairage, ' +
    'et, si le délai devait excéder quinze jours, d’en informer les riverains ' +
    'afin que nous puissions prévenir les familles.\n\n' +
    'Je vous prie d’agréer, Monsieur le Maire, l’expression de ma considération distinguée.',
};

export const EE_T3: ExamTask = {
  ...base,
  id: taskId('pe_short', '003'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b2',
  label: 'Expression écrite · Tâche 3',
  prompt:
    'TÂCHE 3 · comparaison de deux points de vue (120 à 180 mots)\n\n' +
    'Deux textes ont paru sur la place des régions dans l’information nationale.\n\n' +
    'TEXTE A · « Une rédaction installée dans une capitale ne couvre pas mal les régions : ' +
    'elle les couvre par événement. Une inondation, une fermeture d’usine, un fait divers. ' +
    'Entre deux événements, rien, et cette absence enseigne au lecteur que rien ne s’y passe. ' +
    'Ce n’est pas un défaut de moyens, c’est un effet de l’endroit d’où l’on regarde. »\n\n' +
    'TEXTE B · « La presse locale existe, elle est nombreuse, et elle est lue. ' +
    'Ce qu’on appelle un déficit de couverture est en réalité une demande adressée ' +
    'au mauvais média : on reproche au journal national de ne pas faire ce que fait ' +
    'déjà le quotidien régional. Le vrai problème est économique, et il est que ' +
    'personne ne veut payer pour la seconde. »\n\n' +
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
          'Le désaccord est situé : il porte sur QUEL média doit couvrir, non sur l’existence du manque.',
          'Un texte qui résume A puis résume B sans les mettre en rapport ne compare pas.',
        ],
      },
      {
        key: 'position',
        label: 'Prise de position',
        maxPoints: 5,
        descriptors: [
          'Une position est prise, argumentée par autre chose que la préférence.',
          'La meilleure objection adverse est traitée plutôt qu’ignorée.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Connecteurs d’opposition et de concession employés correctement.',
          'Registre écrit soutenu ; les erreurs ne gênent pas la lecture.',
        ],
      },
    ],
  },
  modelAnswer:
    'Les deux textes admettent le même fait et en tirent des responsabilités différentes. ' +
    'Aucun ne prétend que les régions sont bien couvertes.\n\n' +
    'Le texte A raisonne en termes de regard : une rédaction centrale couvre par événement, ' +
    'et l’intervalle entre deux événements enseigne au lecteur qu’il ne s’y passe rien. ' +
    'Le texte B raisonne en termes de division du travail : la presse régionale fait déjà ce travail, ' +
    'et le déficit est un problème de financement, non de point de vue.\n\n' +
    'L’objection de B est sérieuse et incomplète. Elle expliquerait tout si le lecteur national ' +
    'lisait aussi le quotidien régional, ce qui est rarement le cas hors de la région concernée. ' +
    'Un habitant de la capitale ne saura donc jamais ce qui se passe ailleurs, ' +
    'quel que soit le financement de la presse locale.\n\n' +
    'Je retiens donc A, en lui empruntant la conclusion pratique de B : ' +
    'le problème est bien un problème de regard, et le corriger coûte de l’argent ' +
    'qu’il faudra bien que quelqu’un accepte de dépenser.',
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
    'L’examinateur vous pose des questions sur une habitude de votre famille. ' +
    'Répondez naturellement, et développez vos réponses : une phrase seule ne suffit pas.\n\n' +
    '· Y a-t-il une habitude ou une tradition que votre famille garde ?\n' +
    '· En quoi consiste-t-elle exactement ?\n' +
    '· Savez-vous d’où elle vient, ou depuis quand elle existe ?\n' +
    '· Est-ce que tout le monde y tient autant, dans la famille ?',
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
          'La dernière question appelle une nuance : une réponse « oui » sans plus ne montre rien.',
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
          'Présent, imparfait et passé composé tenus ; le lexique de la famille est disponible.',
          'La prononciation ne gêne pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Oui, il y en a une. Chaque année, le premier dimanche de septembre, ' +
    'nous allons tous marcher jusqu’à un vieux pont, à une heure de chez mes parents. ' +
    'Nous partons le matin, nous emportons de quoi déjeuner, et nous rentrons le soir.\n\n' +
    'Ce n’est pas très spectaculaire. On marche, on parle, et on prend la même photo ' +
    'au même endroit depuis des années. Ma mère les garde toutes dans un album.\n\n' +
    'L’origine, je la connais mal. Mon grand-père travaillait de l’autre côté de ce pont ' +
    'et le traversait tous les jours. Après sa mort, ma mère a voulu y retourner une fois, ' +
    'et puis c’est devenu chaque année. Personne n’a vraiment décidé.\n\n' +
    'Tout le monde n’y tient pas pareil, non. Mon frère trouve cela un peu forcé ' +
    'et il vient quand même. Moi, ce qui me plaît, c’est justement que ce soit obligatoire ' +
    'sans que personne ne l’ait imposé.',
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
    'SERVICE APRÈS-VENTE · réponse reçue\n\n' +
    'Votre lave-linge, acheté il y a quatorze mois, ne vidange plus. Vous avez fait une demande ' +
    'de réparation et vous recevez la réponse suivante.\n' +
    'Garantie : 12 mois · Diagnostic à domicile : 55 € · Réparation estimée : 130 à 190 €.\n' +
    'Mention : « pièce non garantie au-delà de la période légale ».\n\n' +
    'Vous téléphonez au service après-vente. Posez les questions nécessaires ' +
    'et cherchez ce qui peut être obtenu.',
  // Prep is clocked SEPARATELY from the exchange (STANDARD-tcf §7). A runner
  // that folds the two into one countdown gives the candidate a shorter
  // interaction the better they prepare.
  prepS: 120,
  timingS: 330,
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 240 },
  interlocutor: {
    opening: {
      id: 'open',
      text: 'Service après-vente Kernal, bonjour.',
      covers: 'ouverture',
      cues: [],
    },
    catchAll: {
      id: 'catch',
      text: 'Je n’ai pas cet élément dans le dossier, il faudrait le demander au technicien lors du diagnostic.',
      covers: 'information non détenue',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'C’est noté au dossier. Vous recevrez la confirmation du rendez-vous par message. Bonne journée.',
      covers: 'clôture',
      cues: [],
    },
    answers: [
      {
        id: 'garantie',
        text: 'La garantie commerciale est de douze mois, mais la garantie légale de conformité court sur deux ans. Une panne de vidange à quatorze mois peut relever de cette seconde, si le défaut existait à la livraison.',
        covers: 'la garantie légale de deux ans existe malgré les douze mois affichés',
        cues: ['garantie', 'quatorze mois', 'deux ans', 'legale', 'couvert', 'gratuit'],
      },
      {
        id: 'diagnostic',
        text: 'Les cinquante-cinq euros de diagnostic sont déduits de la facture si la réparation est acceptée. Ils restent dus si vous refusez le devis.',
        covers: 'le diagnostic est déductible',
        cues: ['diagnostic', 'cinquante-cinq', '55', 'deplacement', 'deduit', 'devis'],
      },
      {
        id: 'ecart',
        text: 'L’écart entre cent trente et cent quatre-vingt-dix euros tient à la pièce : une pompe simple ou le module complet. Le technicien tranche sur place.',
        covers: 'ce qui explique la fourchette de prix',
        cues: ['cent trente', 'cent quatre-vingt-dix', 'ecart', 'fourchette', 'pourquoi', 'prix', 'piece'],
      },
      {
        id: 'delai',
        text: 'Le premier créneau disponible est dans huit jours, en matinée. Nous proposons des créneaux le samedi une semaine sur deux.',
        covers: 'le délai et les créneaux',
        cues: ['delai', 'quand', 'rendez-vous', 'creneau', 'samedi', 'attendre'],
      },
      {
        id: 'preuve',
        text: 'Pour invoquer la garantie légale, il nous faut la facture d’achat et, si possible, la date de première mise en service.',
        covers: 'ce qu’il faut fournir',
        cues: ['facture', 'preuve', 'document', 'fournir', 'papier', 'justificatif'],
      },
      {
        id: 'reparable',
        text: 'Sur ce modèle, la pompe est disponible et le sera encore quatre ans. Ce n’est pas un appareil que nous conseillons de remplacer.',
        covers: 'réparer plutôt que remplacer',
        cues: ['remplacer', 'racheter', 'neuf', 'vaut la peine', 'reparable', 'piece disponible'],
      },
      {
        id: 'refus',
        text: 'Si nous estimons que le défaut ne relève pas de la garantie légale, vous recevez un refus écrit et motivé. Vous pouvez alors saisir le médiateur de la consommation.',
        covers: 'le recours en cas de refus',
        cues: ['refus', 'refuse', 'recours', 'contester', 'mediateur', 'si vous dites non'],
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
          'Le candidat interroge ce que le document laisse obscur : la garantie à quatorze mois, la fourchette, le sort des 55 €.',
          'Une question dont la réponse figure déjà sur la réponse reçue ne compte pas.',
        ],
      },
      {
        key: 'interaction',
        label: 'Conduite de l’échange',
        maxPoints: 5,
        descriptors: [
          'Le candidat réagit à ce qu’on lui répond au lieu de dérouler une liste préparée.',
          'Il obtient une position claire sur la garantie avant de conclure, ou constate qu’il ne l’obtiendra pas.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Formes interrogatives variées, registre poli soutenu tout du long.',
          'Les chiffres du document sont repris correctement.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour, je vous appelle au sujet d’une demande de réparation pour un lave-linge ' +
    'qui ne vidange plus. J’ai reçu votre réponse et j’ai plusieurs questions.\n\n' +
    'D’abord la garantie. Vous indiquez douze mois et l’appareil a quatorze mois. ' +
    'Mais il existe bien une garantie légale de deux ans, non ? ' +
    'D’accord, donc cela peut relever de la garantie légale si le défaut existait à la livraison. ' +
    'Que dois-je vous fournir pour cela ? La facture, très bien, je l’ai.\n\n' +
    'Ensuite, les cinquante-cinq euros de diagnostic : sont-ils perdus si j’accepte la réparation ? ' +
    'Ils sont déduits, parfait.\n\n' +
    'Et l’écart entre cent trente et cent quatre-vingt-dix euros, à quoi tient-il ? ' +
    'La pompe seule ou le module complet, je comprends.\n\n' +
    'Une dernière chose : si vous concluez que la garantie légale ne s’applique pas, ' +
    'est-ce que j’ai un recours ? Un refus écrit et le médiateur, très bien.\n\n' +
    'Alors je prends le rendez-vous, et j’enverrai la facture d’achat aujourd’hui. Merci beaucoup.',
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
    'Beaucoup d’emplois s’obtiennent par une rencontre plutôt que par une candidature. ' +
    'Faut-il y voir une injustice qu’il faudrait corriger, ou la façon normale ' +
    'dont le travail se distribue depuis toujours ?\n\n' +
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
          'Une position claire est prise sur l’ALTERNATIVE posée, non sur le thème en général.',
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
    'Je crois que c’est une injustice, et je voudrais dire précisément laquelle, ' +
    'parce que l’accusation habituelle me paraît viser à côté.\n\n' +
    'On dit d’ordinaire que le recrutement par relation écarte les meilleurs au profit ' +
    'des mieux introduits. Ce n’est pas ce que montrent les entreprises qui recrutent ainsi : ' +
    'les gens recommandés tiennent souvent mieux le poste, parce que celui qui recommande ' +
    'engage son propre crédit et ne recommande donc pas n’importe qui. ' +
    'Le procédé n’est pas absurde et il faut le reconnaître.\n\n' +
    'L’injustice est ailleurs. Elle tient à ce que le réseau se distribue exactement ' +
    'comme se distribue déjà l’avantage : celui dont les parents travaillent dans un bureau ' +
    'connaît des gens qui travaillent dans des bureaux. ' +
    'Le procédé sélectionne peut-être bien à l’intérieur d’un groupe, ' +
    'et il reproduit parfaitement les frontières de ce groupe.\n\n' +
    'On m’objectera qu’il en a toujours été ainsi et que c’est la façon normale ' +
    'dont le travail circule. C’est vrai, et cela ne rend rien juste : ' +
    'beaucoup de choses durables sont injustes, et leur durée n’est pas un argument.\n\n' +
    'Ce que j’en tire est modeste. Je ne demande pas d’interdire la recommandation, ' +
    'ce qui serait absurde et impossible. Je demande qu’une part des postes ' +
    'soit réellement ouverte, avec un processus que quelqu’un sans relation puisse franchir, ' +
    'et que les entreprises cessent de présenter comme une offre publique ' +
    'un poste déjà promis.',
};
