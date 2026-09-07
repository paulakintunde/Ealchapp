// TEF Canada blanc-02 — the open tasks: EE A and B, EO A and B.
//
// Four tasks, four marks, and every one of them goes to full human review
// (reviewTier.ts mandates it). They are also the only tasks a grader model ever
// sees, so the rubric and the model answer ARE the marking instrument: a
// criterion nobody can apply consistently produces a score nobody can defend.
//
// EO Section A carries a RECORDED INTERLOCUTOR. It is not a role play: the
// candidate asks, the bank answers, and each answer is retired once played. The
// bank is the definition of full coverage, which is what the `couverture`
// criterion marks against.
//
// NO `targetItemIds` HERE. The schema refuses them on an open task, and it is
// right to: there are no wrong answers to decompose into corpus atoms, so a
// list of ids would claim a routing that cannot happen.
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
// The candidate continues a news item from its title and opening. The register
// is the whole task: third person, no `je`, no opinion, passé composé for the
// events and imparfait for the circumstances, the journalistic conditional for
// what is not established. The model answer demonstrates all of it rather than
// describing it.

export const EE_A: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b1',
  label: 'Section A',
  prompt:
    'SECTION A · 25 minutes\n\n' +
    '« Un dégât des eaux prive six appartements d’eau chaude »\n\n' +
    'Samedi en fin d’après-midi, une fuite s’est déclarée au troisième étage d’un immeuble de la rue des ' +
    'Tilleuls, à Nervaux. L’eau a traversé deux étages avant d’être coupée. Personne n’a été blessé.\n\n' +
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
          'La suite se rattache au titre et au début donnés : même incident, même immeuble, même moment.',
          'Rien ne contredit le début (personne n’a été blessé, l’eau a été coupée).',
        ],
      },
      {
        key: 'apport',
        label: 'Apport d’informations',
        maxPoints: 5,
        descriptors: [
          'Des informations nouvelles sont apportées : origine de la fuite, intervention, relogement, suites.',
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
    'La fuite proviendrait d’un raccord de chauffe-eau installé l’an dernier, selon le syndic de l’immeuble. ' +
    'Les pompiers, appelés vers dix-sept heures, ont coupé l’arrivée d’eau et vidé les parties communes. ' +
    'L’intervention a duré près de deux heures. Six appartements des deuxième et troisième étages sont ' +
    'restés sans eau chaude jusqu’au lendemain matin. Deux d’entre eux présentaient des infiltrations au ' +
    'plafond ; leurs occupants ont passé la nuit chez des proches. Une expertise a été demandée par le ' +
    'syndic afin d’établir les responsabilités entre le propriétaire du logement concerné et l’entreprise ' +
    'qui avait posé l’appareil. Les travaux de remise en état devraient commencer la semaine prochaine.',
};

/* ═══ EE Section B — Lettre argumentée ════════════════════════════════════ */
//
// A position to defend, and a counter-position to take seriously. A letter that
// only asserts is a B1 letter however correct its grammar; what makes it B2 is
// that it concedes something real and answers it.

export const EE_B: ExamTask = {
  ...base,
  id: taskId('pe_essay', '001'),
  taskType: 'pe_essay',
  skill: 'PE',
  level: 'b2',
  label: 'Section B',
  prompt:
    'SECTION B · 35 minutes\n\n' +
    'Votre fournisseur d’énergie vous réclame un arriéré de 640 € correspondant, selon lui, à deux années ' +
    'de sous-facturation dues à une erreur de relevé. Vous avez payé chaque facture reçue, à la date ' +
    'indiquée, sans jamais être alerté.\n\n' +
    'Vous saisissez le médiateur de l’énergie. Rédigez votre lettre en 200 mots au moins : exposez les ' +
    'faits, défendez votre position, et répondez à l’argument selon lequel l’énergie consommée doit de ' +
    'toute façon être payée.',
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
          'L’argument adverse (« l’énergie consommée doit être payée ») est énoncé sérieusement, sans caricature.',
          'Il reçoit une réponse : responsabilité du relevé, délai écoulé, absence d’alerte, ou étalement demandé.',
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
    'Je me permets de saisir vos services au sujet d’un arriéré de 640 € que mon fournisseur me réclame ' +
    'au titre de deux années de sous-facturation, à la suite d’une erreur de relevé dont je ne suis pas ' +
    'l’auteur.\n\n' +
    'Je tiens d’abord à rappeler que j’ai réglé chaque facture reçue, à la date indiquée, sans exception. ' +
    'Aucun retard ne m’est reproché. Pendant ces deux années, je n’ai reçu ni alerte, ni demande de relevé ' +
    'complémentaire, alors que le fournisseur disposait de mes consommations antérieures et pouvait ' +
    'constater l’écart.\n\n' +
    'On objectera que l’énergie consommée doit de toute façon être payée, et je ne le conteste pas dans ' +
    'son principe. Mais cet argument suppose que le consommateur ait été mis en mesure de connaître sa ' +
    'consommation réelle, ce qui n’a pas été le cas. Bien que la dette existe, sa cause est une défaillance ' +
    'du fournisseur, et il ne me paraît pas équitable que ses conséquences reposent entièrement sur le ' +
    'client. Réclamer en une fois ce qui aurait dû être réparti sur vingt-quatre mois revient à transformer ' +
    'une erreur technique en difficulté financière.\n\n' +
    'Je sollicite donc, à titre principal, la limitation de la régularisation à la période récente, et à ' +
    'titre subsidiaire un étalement sans frais sur vingt-quatre mois.\n\n' +
    'Je vous prie d’agréer, Madame, Monsieur, l’expression de ma considération distinguée.',
};

/* ═══ EO Section A — Obtenir de l’information ═════════════════════════════ */
//
// The candidate questions a recorded interlocutor about an advert. Section A is
// assessed partly on whether the questions asked were APPROPRIATE AND COMPLETE
// — whether the candidate covered every angle the document affords — which is
// why the bank holds one answer per fact the advert withholds.
//
// EVERY ANSWER MUST BE REACHABLE. A cue that fires on nothing a candidate would
// say makes its fact unobtainable however well they perform, so paper.test.ts
// checks each answer's cues against this task's own model answer.
//
// The opening, catch-all and closing carry NO cues: they are played by position,
// not selected by matching. A cue on any of them would put it into the answer
// bank's competition and let it be retired.

export const EO_A: ExamTask = {
  ...base,
  id: taskId('po_interaction', '001'),
  taskType: 'po_interaction',
  skill: 'PO',
  level: 'b1',
  label: 'Section A',
  prompt:
    'SECTION A · 5 minutes\n\n' +
    'OFFRE INTERNET ET MOBILE · engagement 12 mois\n\n' +
    'Fibre à la maison et forfait mobile, une seule facture.\n' +
    'Installation par un technicien. Équipement fourni pendant toute la durée du contrat.\n' +
    'Offre soumise à conditions. Renseignements auprès de notre service clientèle.\n\n' +
    'Cette offre vous intéresse. Posez à votre interlocuteur toutes les questions nécessaires pour savoir ' +
    'si elle vous convient.',
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
          'Les informations utiles sont demandées : prix, durée d’engagement, installation, équipement, résiliation, débit, mobile, zone couverte.',
          'Une information non demandée est une tâche incomplète, pas une faute de langue.',
        ],
      },
      {
        key: 'questions',
        label: 'Formulation des questions',
        maxPoints: 5,
        descriptors: [
          'Questions correctes et variées : intonation, est-ce que, inversion.',
          'Registre adapté à un échange avec un service clientèle.',
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
    'Bonjour, je vous appelle au sujet de votre offre internet et mobile. Combien coûte l’abonnement par mois ? ' +
    'L’engagement est de combien de temps exactement ? Est-ce que l’installation est payante, et qui vient la faire ? ' +
    'La box et le décodeur sont fournis, mais est-ce qu’il faut les rendre à la fin ? ' +
    'Quel débit est-ce que j’aurai chez moi ? Comment savoir si mon adresse est couverte par la fibre ? ' +
    'Le forfait mobile, il comprend combien de gigaoctets ? ' +
    'Et si je veux résilier avant la fin, qu’est-ce que je dois payer ?',
  interlocutor: {
    opening: {
      id: 'open',
      text: 'Service clientèle, bonjour. Vous appelez au sujet de notre offre internet et mobile ? Je vous écoute.',
      covers: '',
      cues: [],
    },
    answers: [
      {
        id: 'prix',
        text: 'L’offre est à trente-neuf euros quatre-vingt-dix par mois la première année, puis quarante-neuf euros quatre-vingt-dix.',
        covers: 'le prix mensuel',
        cues: ['combien coute', 'quel prix', 'le prix', 'tarif', 'coute combien', 'par mois', 'mensuel'],
      },
      {
        id: 'engagement',
        text: 'L’engagement est de douze mois, à compter de la date d’installation et non de la signature.',
        covers: 'la durée de l’engagement',
        cues: ['engagement', 'combien de temps', 'duree du contrat', 'engage'],
      },
      {
        id: 'installation',
        text: 'Un technicien se déplace. L’installation coûte trente-neuf euros, offerts si vous souscrivez en ligne.',
        covers: 'le coût et les modalités de l’installation',
        cues: ['installation', 'technicien', 'installer', 'deplacement', 'pose'],
      },
      {
        id: 'equipement',
        text: 'La box et le décodeur sont prêtés pendant toute la durée du contrat. Ils sont à rendre sous quinze jours après la résiliation.',
        covers: 'le sort de l’équipement fourni',
        cues: ['equipement', 'box', 'decodeur', 'rendre', 'materiel', 'fourni'],
      },
      {
        id: 'debit',
        text: 'Le débit annoncé est de un gigabit par seconde en descendant, et sept cents mégabits en montant.',
        covers: 'le débit annoncé',
        cues: ['debit', 'vitesse', 'rapide', 'megabits', 'gigabit'],
      },
      {
        id: 'couverture',
        text: 'Je vérifie votre adresse en ligne pendant que nous parlons. Si la fibre n’est pas encore posée, nous proposons une solution provisoire.',
        covers: 'la couverture à l’adresse du client',
        cues: ['couverte', 'couverture', 'mon adresse', 'chez moi', 'eligible', 'eligibilite', 'disponible'],
      },
      {
        id: 'mobile',
        text: 'Le forfait mobile inclus comprend cent gigaoctets, appels et messages illimités en France et en Europe.',
        covers: 'le contenu du forfait mobile',
        cues: ['mobile', 'forfait', 'gigaoctets', 'gigas', 'telephone', 'appels'],
      },
      {
        id: 'resiliation',
        text: 'Avant la fin des douze mois, vous réglez les mensualités restantes, plafonnées à quatre mois.',
        covers: 'les frais de résiliation anticipée',
        cues: ['resilier', 'resiliation', 'arreter', 'annuler', 'avant la fin', 'partir'],
      },
      {
        id: 'facture',
        text: 'Une seule facture par mois, prélevée le cinq. Vous pouvez changer la date de prélèvement une fois par an.',
        covers: 'la facturation et le prélèvement',
        cues: ['facture', 'facturation', 'prelevement', 'payer', 'paiement'],
      },
      {
        id: 'delai',
        text: 'Le délai d’installation est de trois semaines en moyenne, un peu plus en zone rurale.',
        covers: 'le délai avant installation',
        cues: ['delai', 'quand', 'combien de temps avant', 'attendre', 'rapidement'],
      },
    ],
    catchAll: {
      id: 'catch',
      text: 'Alors ça, je n’ai pas l’information sous les yeux. Je peux vous la faire envoyer par courriel si vous voulez.',
      covers: '',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'Très bien. Je vous laisse réfléchir, et n’hésitez pas à rappeler. Bonne journée.',
      covers: '',
      cues: [],
    },
  },
};

/* ═══ EO Section B — Convaincre ═══════════════════════════════════════════ */
//
// The candidate presents an activity and persuades the interlocutor to take
// part. What separates this from Section A is that the candidate must ANTICIPATE
// resistance: the examiner notes carry an objection ladder, and the rubric names
// it, because notes that render nowhere reach nobody.

export const EO_B: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'b2',
  label: 'Section B',
  prompt:
    'SECTION B · 10 minutes\n\n' +
    'TOURNOI DE QUARTIER · l’association cherche des arbitres\n\n' +
    'Deux week-ends en juin. Aucune expérience exigée : une formation de deux heures est assurée ' +
    'le premier samedi. Repas fournis. Les arbitres sont deux par terrain.\n\n' +
    'Un ou une de vos proches hésite. Présentez-lui l’activité et convainquez-le ou convainquez-la ' +
    'd’y participer. Donnez votre avis et appuyez-le sur des exemples.',
  timingS: 600,
  prepS: 120,
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 420 },
  examinerNotes: [
    ...NOTES_OPEN,
    'ÉCHELLE D’OBJECTIONS attendue, du plus faible au plus fort : (1) « je n’y connais rien » — la formation ' +
    'de deux heures et le binôme par terrain répondent ; (2) « je n’ai pas le temps » — deux week-ends, et ' +
    'l’engagement peut porter sur un seul ; (3) « je ne veux pas me retrouver à arbitrer un conflit » — ' +
    'les arbitres sont deux, et la décision n’est jamais portée par une seule personne. ' +
    'Un candidat qui ne traite que la première objection ne dépasse pas le milieu de l’échelle « adaptation ».',
  ],
  rubric: {
    criteria: [
      {
        key: 'presentation',
        label: 'Présentation de l’activité',
        maxPoints: 5,
        descriptors: [
          'Les informations du document sont transmises exactement : dates, formation, binôme, repas.',
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
          'L’échelle d’objections est parcourue au-delà de la première : compétence, temps, puis rôle en cas de litige.',
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
    'Écoute, je voudrais te parler du tournoi de juin, parce que je pense vraiment que c’est pour toi. ' +
    'Ils cherchent des arbitres sur deux week-ends, et je sais déjà ce que tu vas me dire : que tu n’y ' +
    'connais rien. Justement, il n’y a aucune expérience demandée. Il y a une formation de deux heures le ' +
    'premier samedi, et surtout tu n’es jamais seul : les arbitres sont deux par terrain. ' +
    'Ensuite, le temps. Je sais que tes week-ends sont pris, mais tu peux t’engager sur un seul des deux, ' +
    'ce n’est pas tout ou rien. Et les repas sont fournis, donc tu ne passes pas ta journée à chercher où manger. ' +
    'Enfin, ce qui te retient vraiment, je crois, c’est l’idée de devoir trancher si ça se dispute. Là encore, ' +
    'vous êtes deux : la décision n’est jamais portée par une seule personne, et c’est précisément pour ça ' +
    'qu’ils fonctionnent en binôme. ' +
    'Franchement, l’an dernier j’y suis allé sans rien connaître non plus, et j’ai passé un très bon moment. ' +
    'Tu connais la moitié du quartier, tu rends service, et ça te fait deux journées dehors. Dis-moi oui pour ' +
    'le premier week-end, et tu verras ensuite pour le second.',
};
