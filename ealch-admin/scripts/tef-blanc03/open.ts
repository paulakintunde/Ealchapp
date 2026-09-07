// TEF Canada blanc-03 — the open tasks: EE A and B, EO A and B.
//
// Four tasks, four marks, all four to full human review. They are also the only
// tasks a grader model ever sees, so the rubric and the model answer ARE the
// marking instrument.
//
// EO Section A carries a RECORDED INTERLOCUTOR: the candidate asks, the bank
// answers, and each answer is retired once played. The bank is the definition of
// full coverage, which is what the `couverture` criterion marks against.
//
// NO `targetItemIds` on any of these. The schema refuses them on an open task,
// and rightly: there are no wrong answers to decompose into corpus atoms.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, NOTES_OPEN, taskId } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_OPEN,
};

/* ═══ EE Section A — Fait divers ══════════════════════════════════════════ */
//
// The register is the task: third person, no `je`, no opinion, passé composé for
// the events and imparfait for the circumstances, the journalistic conditional
// for what is not established. The model answer demonstrates all of it.

export const EE_A: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b1',
  label: 'Section A',
  prompt:
    'SECTION A · 25 minutes\n\n' +
    '« Un sac contenant des papiers d’identité retrouvé dans un autobus »\n\n' +
    'Jeudi matin, un chauffeur de la ligne 7 a découvert un sac oublié sur la banquette arrière, à ' +
    'Aubercy. Il contenait plusieurs papiers d’identité au même nom. Le sac a été déposé au ' +
    'commissariat dans la matinée.\n\n' +
    'Vous êtes journaliste. Rédigez la suite de ce fait divers en 80 à 120 mots. ' +
    'Apportez des informations nouvelles : les circonstances, le déroulement et les suites. ' +
    'Ne recopiez pas le début et ne le résumez pas.',
  timingS: 1500,
  responseSpec: { kind: 'text', minWords: 80, maxWords: 120 },
  rubric: {
    criteria: [
      {
        key: 'pertinence',
        label: 'Pertinence',
        maxPoints: 5,
        descriptors: [
          'La suite se rattache au titre et au début donnés : même objet, même ligne, même matinée.',
          'Rien ne contredit le début (le sac a bien été déposé au commissariat).',
        ],
      },
      {
        key: 'apport',
        label: 'Apport d’informations',
        maxPoints: 5,
        descriptors: [
          'Des informations nouvelles sont apportées : identification, restitution, procédure, suites.',
          'Le début n’est ni recopié ni résumé.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre journalistique',
        maxPoints: 5,
        descriptors: [
          'Troisième personne, pas de « je », pas d’opinion ni d’évaluation.',
          'Ce qui n’est pas établi est donné comme tel (conditionnel ou source citée).',
        ],
      },
      {
        key: 'langue',
        label: 'Correction de la langue',
        maxPoints: 5,
        descriptors: [
          'Temps du récit maîtrisés : passé composé pour les faits, imparfait pour les circonstances.',
          'Accords, ponctuation et connecteurs corrects ; la longueur demandée est respectée.',
        ],
      },
    ],
  },
  modelAnswer:
    'Le sac appartiendrait à une habitante de la commune, âgée d’une trentaine d’années, selon les ' +
    'premiers éléments recueillis par les services de police. Il contenait une carte d’identité, un ' +
    'permis de conduire et plusieurs documents administratifs, mais aucun objet de valeur. La ' +
    'propriétaire, qui avait signalé la perte la veille au soir, a été contactée dans l’après-midi et ' +
    'a récupéré ses affaires. Le chauffeur, en poste depuis huit ans sur cette ligne, a expliqué que ' +
    'les oublis étaient fréquents en fin de service, lorsque les voyageurs descendent dans la ' +
    'précipitation. La compagnie rappelle que les objets trouvés sont conservés trois mois avant ' +
    'd’être remis aux services municipaux.',
};

/* ═══ EE Section B — Lettre argumentée ════════════════════════════════════ */
//
// A position to defend and a counter-position to take seriously. A letter that
// only asserts is a B1 letter however correct its grammar; what makes it B2 is
// conceding something real and answering it.

export const EE_B: ExamTask = {
  ...base,
  id: taskId('pe_essay', '001'),
  taskType: 'pe_essay',
  skill: 'PE',
  level: 'b2',
  label: 'Section B',
  prompt:
    'SECTION B · 35 minutes\n\n' +
    'Votre banque a prélevé pendant onze mois des frais de tenue de compte que vous n’aviez pas ' +
    'acceptés. Ils figuraient dans une brochure tarifaire mise en ligne, mais aucune information ' +
    'personnelle ne vous a été adressée. Vous demandez leur remboursement intégral.\n\n' +
    'Vous écrivez au service de médiation de la banque. Rédigez votre lettre en 200 mots au moins : ' +
    'exposez les faits, défendez votre position, et répondez à l’argument selon lequel la publication ' +
    'de la brochure tarifaire vaut information du client.',
  timingS: 2100,
  responseSpec: { kind: 'text', minWords: 200 },
  rubric: {
    criteria: [
      {
        key: 'position',
        label: 'Position et argumentation',
        maxPoints: 5,
        descriptors: [
          'Une position claire est tenue d’un bout à l’autre de la lettre.',
          'Au moins deux arguments distincts la soutiennent, chacun développé et non simplement affirmé.',
        ],
      },
      {
        key: 'contradiction',
        label: 'Prise en compte de l’objection',
        maxPoints: 5,
        descriptors: [
          'L’argument adverse (« la brochure tarifaire vaut information ») est énoncé sérieusement, sans caricature.',
          'Il reçoit une réponse : information personnelle attendue, durée du prélèvement, absence de consentement.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre et format',
        maxPoints: 5,
        descriptors: [
          'Formules d’appel et de politesse d’une lettre adressée à une institution ; vouvoiement constant.',
          'Ton ferme et courtois : ni familiarité, ni agressivité, ni supplication.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction et étendue de la langue',
        maxPoints: 5,
        descriptors: [
          'Syntaxe complexe maîtrisée : subordonnées, concession, hypothèse.',
          'Connecteurs argumentatifs variés et corrects ; longueur minimale respectée.',
        ],
      },
    ],
  },
  modelAnswer:
    'Madame, Monsieur,\n\n' +
    'Je saisis votre service au sujet de frais de tenue de compte prélevés sur mon compte pendant onze ' +
    'mois consécutifs, sans que j’aie été informé personnellement de leur mise en place.\n\n' +
    'Je rappelle d’abord les faits. Ces frais apparaissent pour la première fois sur mon relevé de ' +
    'février. Je n’ai reçu ni courrier, ni message, ni mention en tête de relevé. La somme, modeste ' +
    'chaque mois, n’attire pas l’attention : c’est précisément sa faible valeur unitaire qui explique ' +
    'que onze prélèvements aient passé inaperçus.\n\n' +
    'On objectera que la brochure tarifaire était consultable en ligne et que sa publication vaut ' +
    'information. Je ne conteste pas qu’elle ait été publiée. Mais publier n’est pas informer : une ' +
    'brochure mise à disposition suppose que le client aille la chercher, alors qu’un nouveau frais ' +
    'appelle une information adressée. Bien que la mise en ligne satisfasse peut-être une obligation ' +
    'formelle, elle ne me met pas en mesure de refuser un service que je n’ai pas demandé, ce qui est ' +
    'la seule chose qui compte ici.\n\n' +
    'Je demande donc le remboursement intégral des onze prélèvements, et à défaut, le remboursement ' +
    'des mois écoulés avant toute mention explicite sur mes relevés.\n\n' +
    'Je vous prie d’agréer, Madame, Monsieur, l’expression de ma considération distinguée.',
};

/* ═══ EO Section A — Obtenir de l’information ═════════════════════════════ */
//
// Section A is assessed partly on whether the questions were APPROPRIATE AND
// COMPLETE — whether the candidate covered every angle the document affords —
// so the bank holds one answer per fact the advert withholds.
//
// EVERY ANSWER MUST BE REACHABLE: a cue that fires on nothing a candidate would
// say makes its fact unobtainable however well they perform. The shared rules
// check each answer's cues against this task's own model answer.
//
// The opening, catch-all and closing carry NO cues: they play by position. A cue
// on any of them would enter it into the answer bank's competition.

export const EO_A: ExamTask = {
  ...base,
  id: taskId('po_interaction', '001'),
  taskType: 'po_interaction',
  skill: 'PO',
  level: 'b1',
  label: 'Section A',
  prompt:
    'SECTION A · 5 minutes\n\n' +
    // « tous niveaux » was here and CONTRADICTED this task's own bank, which
    // says « nous ne prenons pas les grands débutants ». Removing the claim
    // makes the level a fact the candidate has to ask for, which is what the
    // bank is holding back.
    'COURS COLLECTIF · natation adulte\n\n' +
    'Piscine municipale de Grandvaux. Groupes réduits, encadrement diplômé.\n' +
    'Certificat médical demandé. Inscriptions ouvertes ; places limitées.\n' +
    'Renseignements à l’accueil de la piscine.\n\n' +
    'Ce cours vous intéresse. Posez à votre interlocuteur toutes les questions nécessaires pour savoir ' +
    's’il vous convient.',
  timingS: 300,
  prepS: 60,
  responseSpec: { kind: 'audio', minDurationS: 60, maxDurationS: 240 },
  rubric: {
    criteria: [
      {
        key: 'couverture',
        label: 'Couverture du document',
        maxPoints: 5,
        descriptors: [
          'Les informations utiles sont demandées : prix, jour et horaire, durée, niveau, certificat, groupe, matériel, inscription.',
          'Une information non demandée est une tâche incomplète, pas une faute de langue.',
        ],
      },
      {
        key: 'questions',
        label: 'Formulation des questions',
        maxPoints: 5,
        descriptors: [
          'Questions correctes et variées : intonation, est-ce que, inversion.',
          'Registre adapté à un échange avec un service d’accueil.',
        ],
      },
      {
        key: 'interaction',
        label: 'Interaction et relance',
        maxPoints: 5,
        descriptors: [
          'Réagit aux réponses au lieu de dérouler une liste préparée.',
          'Relance, demande une précision, reformule ce qui n’a pas été compris.',
        ],
      },
      {
        key: 'fluidite',
        label: 'Fluidité et étendue',
        maxPoints: 5,
        descriptors: [
          'Débit régulier ; les hésitations ne gênent pas la compréhension.',
          'Lexique suffisant pour poser la question sans la contourner.',
        ],
      },
    ],
  },
  modelAnswer:
    'Bonjour, je vous appelle au sujet du cours de natation pour adultes. Est-ce qu’il reste des places ? ' +
    'C’est quel jour, et à quelle heure ? Combien de séances sont prévues, et jusqu’à quand ? ' +
    'Combien coûte l’inscription pour le trimestre ? ' +
    'Vous demandez un certificat médical : il faut le fournir avant la première séance ? ' +
    'Quel niveau faut-il avoir exactement, est-ce qu’il faut déjà savoir nager ? ' +
    'On est combien dans le groupe ? Est-ce que le matériel est fourni, ou faut-il apporter le sien ? ' +
    'Et si je dois arrêter en cours d’année, est-ce que vous remboursez une partie ? ' +
    'Comment est-ce que je peux m’inscrire ?',
  interlocutor: {
    opening: {
      id: 'open',
      text: 'Piscine municipale de Grandvaux, bonjour. Vous appelez pour le cours adultes ? Je vous écoute.',
      covers: '',
      cues: [],
    },
    answers: [
      {
        id: 'places',
        text: 'Oui, il reste de la place. Le groupe est limité à dix personnes et nous en sommes à sept.',
        covers: 'les places restantes',
        cues: ['reste des places', 'reste de la place', 'places disponibles', 'complet', 'encore de la place'],
      },
      {
        id: 'horaire',
        text: 'C’est le lundi et le jeudi, de dix-neuf heures à vingt heures.',
        covers: 'le jour et l’horaire',
        cues: ['quel jour', 'quels jours', 'quelle heure', 'horaire', 'horaires'],
      },
      {
        id: 'seances',
        text: 'Il y a vingt séances d’une heure, de la mi-septembre à la fin février.',
        covers: 'le nombre de séances et la période',
        cues: ['combien de seances', 'dure combien', 'duree', 'combien de fois', 'jusqu', 'combien de semaines'],
      },
      {
        id: 'prix',
        text: 'Cent dix euros pour les vingt séances, ou quatre-vingts euros si vous habitez la commune.',
        covers: 'le prix',
        cues: ['combien coute', 'quel prix', 'le prix', 'tarif', 'coute combien', 'inscription pour le trimestre'],
      },
      {
        id: 'certificat',
        text: 'Le certificat médical est à remettre avant la première séance, et il doit dater de moins d’un an.',
        covers: 'le certificat médical',
        cues: ['certificat', 'medical', 'medecin', 'papier du medecin'],
      },
      {
        id: 'niveau',
        text: 'Il faut savoir se déplacer sur vingt-cinq mètres, quelle que soit la nage. Nous ne prenons pas les grands débutants.',
        covers: 'le niveau requis',
        cues: ['niveau', 'debutant', 'debutants', 'savoir nager', 'prerequis', 'experience'],
      },
      {
        id: 'groupe',
        text: 'Dix personnes au maximum, avec un maître-nageur et un assistant.',
        covers: 'la taille du groupe',
        cues: ['combien de personnes', 'groupe', 'participants', 'combien on est'],
      },
      {
        id: 'materiel',
        text: 'Les planches et les palmes sont fournies. Vous apportez maillot, bonnet et lunettes ; le bonnet est obligatoire.',
        covers: 'le matériel',
        cues: ['materiel', 'apporter', 'fourni', 'bonnet', 'maillot', 'palmes'],
      },
      {
        id: 'inscription',
        text: 'Vous passez à l’accueil avec le certificat et un justificatif de domicile, ou vous appelez et nous gardons la place trois jours.',
        covers: 'comment s’inscrire',
        cues: ['inscrire', 'inscription', 'comment faire', 'demarche', 's inscrire'],
      },
      {
        id: 'annulation',
        text: 'Si vous arrêtez avant la cinquième séance, nous remboursons la moitié. Après, il n’y a plus de remboursement.',
        covers: 'les conditions d’arrêt et de remboursement',
        cues: ['rembours', 'arreter', 'annuler', 'si je ne peux plus', 'abandonne'],
      },
    ],
    catchAll: {
      id: 'catch',
      text: 'Ah, ça, je n’ai pas l’information sous les yeux. Je peux me renseigner et vous rappeler si vous voulez.',
      covers: '',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'Très bien. Je vous laisse réfléchir, et n’hésitez pas à repasser à l’accueil. Bonne journée.',
      covers: '',
      cues: [],
    },
  },
};

/* ═══ EO Section B — Convaincre ═══════════════════════════════════════════ */
//
// The candidate presents an activity and persuades the interlocutor to take
// part. What separates this from Section A is anticipating resistance: the
// examiner notes carry an objection ladder and the rubric names it, because
// notes that render nowhere reach nobody.

export const EO_B: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'b2',
  label: 'Section B',
  prompt:
    'SECTION B · 10 minutes\n\n' +
    'SORTIE NATURE · une journée, association de Pierrefonte\n\n' +
    'Randonnée accompagnée de douze kilomètres, dénivelé faible, un dimanche par mois.\n' +
    'Covoiturage organisé au départ de la place. Pique-nique tiré du sac.\n' +
    'Ouvert à tous, adhésion annuelle de dix euros.\n\n' +
    'Un ou une de vos proches hésite. Présentez-lui l’activité et convainquez-le ou convainquez-la ' +
    'd’y participer. Donnez votre avis et appuyez-le sur des exemples.',
  timingS: 600,
  prepS: 120,
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 420 },
  examinerNotes: [
    ...NOTES_OPEN,
    'ÉCHELLE D’OBJECTIONS attendue, du plus faible au plus fort : (1) « je ne suis pas sportif » — douze ' +
    'kilomètres à dénivelé faible, et le groupe est accompagné ; (2) « je n’ai pas de voiture » — le ' +
    'covoiturage part de la place ; (3) « je ne connais personne et je vais me retrouver seul toute la ' +
    'journée » — un dimanche par mois construit un groupe stable, et le pique-nique tiré du sac est ' +
    'précisément le moment où l’on se parle. ' +
    'Un candidat qui ne traite que la première objection ne dépasse pas le milieu de l’échelle « adaptation ».',
  ],
  rubric: {
    criteria: [
      {
        key: 'presentation',
        label: 'Présentation de l’activité',
        maxPoints: 5,
        descriptors: [
          'Les informations du document sont transmises exactement : distance, dénivelé, fréquence, covoiturage, adhésion.',
          'Rien n’est inventé ni promis au-delà de ce que le document annonce.',
        ],
      },
      {
        key: 'persuasion',
        label: 'Force de conviction',
        maxPoints: 5,
        descriptors: [
          'Un avis personnel est exprimé et soutenu par des exemples concrets.',
          'Les bénéfices sont rattachés à l’interlocuteur, non énoncés dans l’abstrait.',
        ],
      },
      {
        key: 'adaptation',
        label: 'Adaptation aux objections',
        maxPoints: 5,
        descriptors: [
          'Les réticences sont anticipées et traitées, pas ignorées.',
          'L’échelle d’objections est parcourue au-delà de la première : condition physique, transport, puis isolement social.',
        ],
      },
      {
        key: 'langue',
        label: 'Fluidité et correction',
        maxPoints: 5,
        descriptors: [
          'Discours suivi, articulé par des connecteurs ; peu d’hésitations gênantes.',
          'Lexique de la persuasion et de la concession employé correctement.',
        ],
      },
    ],
  },
  modelAnswer:
    'Écoute, je voudrais te parler de la sortie du mois prochain, parce que je pense sincèrement que ' +
    'ça te plairait. C’est une randonnée accompagnée, douze kilomètres, et je sais exactement ce que tu ' +
    'vas me répondre : que tu n’es pas sportif. Justement, le dénivelé est faible, c’est presque plat, ' +
    'et le groupe est accompagné, donc on ne laisse personne derrière. ' +
    'Ensuite, la voiture. Tu n’en as pas, je sais. Mais le covoiturage est organisé et il part de la ' +
    'place, à deux minutes de chez toi ; tu n’as rien à prévoir. ' +
    'Et puis il y a la vraie raison de ton hésitation, je crois : tu ne connais personne et tu as peur ' +
    'de passer la journée seul. Là je peux te rassurer. C’est un dimanche par mois, ce sont les mêmes ' +
    'gens qui reviennent, donc au bout de deux sorties tu connais tout le monde. Et le pique-nique est ' +
    'tiré du sac : c’est le moment où l’on s’assoit et où l’on se parle, ce n’est pas un détail. ' +
    'Moi j’y suis allé en février sans connaître personne, et je suis revenu tous les mois depuis. ' +
    'Dix euros d’adhésion pour l’année, ce n’est rien. Viens une fois, et tu jugeras après.',
};
