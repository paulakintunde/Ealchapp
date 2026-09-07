// TEF Canada blanc-01 — Expression écrite and Expression orale.
//
//   EE  A 25 min · fait divers, 80-120 mots      B 35 min · lettre argumentée, 200+ mots
//   EO  A  5 min · obtenir de l'information      B 10 min · convaincre
//
// Every rubric here is OUR OWN construction: neither exam body publishes its
// descriptor wording. Every task says so in examinerNotes, per STANDARD-common
// §7, and none of them implies the grid is theirs.
//
// The two EE tasks carry DIFFERENT target bands on purpose. A fait divers of
// 100 words is a B1 task and a 200-word argued letter is a B2 one, and `passed`
// should not mean the same thing for both — the section's raw score is the
// number of tasks that met their OWN target.
//
// NO targetItemIds HERE. That field is how a missed CLOSED question routes
// back to the corpus atoms it was built from. An open task has no atoms to
// miss — its outcome is a band, not a set of wrong answers — so carrying it
// would promise a decomposition nothing could perform. validateExamTask
// rejects it, and rightly.
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
// What the candidate is given: a title and 35 words of opening. What they must
// produce is ADDITION, not continuation of style alone — recopying the opening
// fails, summarising it fails.
//
// The opening is built to leave real gaps. It names the event, the place and
// the time, and withholds the cause, the sequence and the outcome. If the
// opening told the whole story there would be nothing to add and the task
// would collapse.
//
// The model answer demonstrates the register the rubric asks for: third person
// throughout, no `je`, no opinion, no evaluation; passé composé for the events
// and imparfait for the circumstances; the journalistic conditional
// (`n'aurait pas vu`) for what is not yet established; sober vocabulary with
// no `incroyable` and no `heureusement`.

export const EE_A: ExamTask = {
  ...base,
  id: taskId('pe_short', '001'),
  taskType: 'pe_short',
  skill: 'PE',
  level: 'b1',
  label: 'Section A',
  prompt:
    'SECTION A · 25 minutes\n\n' +
    '« Deux voitures accrochées devant l’école, aucun blessé »\n\n' +
    'Mardi matin, peu avant huit heures trente, deux véhicules se sont accrochés au carrefour de la rue des ' +
    'Tanneurs et de l’avenue Verlune, devant l’école de Sainte-Ambre. Les deux conducteurs sont sortis indemnes.\n\n' +
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
          'La suite se rattache au titre et au début donnés : même accident, même lieu, même moment.',
          'Rien ne contredit le début (les conducteurs sont indemnes, il n’y a pas de blessé).',
        ],
      },
      {
        key: 'information',
        label: 'Qualité de l’information',
        maxPoints: 5,
        descriptors: [
          'Apporte de vraies informations nouvelles : cause, déroulement, dégâts, conséquences, suites.',
          'Recopier ou résumer le début ne compte pas comme information nouvelle.',
          'Les faits sont développés, pas seulement énumérés.',
        ],
      },
      {
        key: 'registre',
        label: 'Registre du fait divers',
        maxPoints: 5,
        descriptors: [
          'Troisième personne, ton impersonnel : pas de « je », pas d’adresse au lecteur.',
          'Pas d’opinion, pas de jugement, pas de morale.',
          'Passé composé pour les événements, imparfait pour les circonstances.',
        ],
      },
      {
        key: 'langue',
        label: 'Cohérence et langue',
        maxPoints: 5,
        descriptors: [
          'Le texte se suit : les faits sont ordonnés et reliés.',
          'Phrases correctes, vocabulaire précis, orthographe et ponctuation maîtrisées.',
        ],
      },
    ],
  },
  modelAnswer:
    'Selon les premiers éléments, une camionnette de livraison sortait d’une place de stationnement lorsqu’une ' +
    'voiture arrivait sur l’avenue. Le conducteur de la camionnette n’aurait pas vu le véhicule, masqué par un ' +
    'autobus à l’arrêt. Le choc a été léger : un pare-chocs et un rétroviseur ont été endommagés. ' +
    'Les deux conducteurs ont rempli un constat amiable sur place, sans intervention des forces de l’ordre. ' +
    'La circulation a été ralentie pendant une vingtaine de minutes, à l’heure où les parents déposaient leurs ' +
    'enfants. La municipalité, déjà saisie de la dangerosité du carrefour, doit examiner en juin l’installation ' +
    'd’un feu tricolore.',
};

/* ═══ EE Section B — Lettre argumentée ════════════════════════════════════ */
//
// The prompt gives a context, an addressee and a question with two defensible
// sides. Two-sidedness is the whole design: a prompt with one reasonable
// answer produces 200 words of agreeing with the prompt.
//
// Both sides are genuinely available here. For the cap: access, stability of
// tenure, fairness between landlords. Against it: reduced supply, deterred
// construction, landlords leaving the long-term market. The model answer takes
// one side and pre-empts the strongest objection to it, which is what a B2
// argued letter does.

export const EE_B: ExamTask = {
  ...base,
  id: taskId('pe_essay', '001'),
  taskType: 'pe_essay',
  skill: 'PE',
  level: 'b2',
  label: 'Section B',
  prompt:
    'SECTION B · 35 minutes\n\n' +
    'La ville de Sainte-Ambre étudie un encadrement des loyers : un plafond fixé quartier par quartier, ' +
    'que les propriétaires ne pourraient pas dépasser. Ses partisans y voient un moyen de maintenir les ' +
    'habitants en centre-ville ; ses adversaires craignent que des logements disparaissent du marché locatif.\n\n' +
    'Le conseil municipal a ouvert une consultation écrite. Vous écrivez au maire pour donner votre position ' +
    'et la défendre. Développez au moins trois arguments distincts, chacun appuyé sur un exemple concret. ' +
    '200 mots minimum.',
  timingS: 2100,
  responseSpec: { kind: 'text', minWords: 200 },
  rubric: {
    criteria: [
      {
        key: 'position',
        label: 'Position et réalisation de la tâche',
        maxPoints: 5,
        descriptors: [
          'La position est énoncée sans ambiguïté dès l’ouverture et tenue jusqu’au bout.',
          'Le format est respecté : lettre adressée au maire, formule d’appel et formule finale.',
          'La longueur demandée est atteinte.',
        ],
      },
      {
        key: 'arguments',
        label: 'Qualité et développement de l’argumentation',
        maxPoints: 5,
        descriptors: [
          'Au moins trois arguments réellement distincts, et non un argument reformulé trois fois.',
          'Chaque argument est expliqué, pas seulement affirmé.',
          'La contre-position est prise en compte, puis limitée ou réfutée.',
        ],
      },
      {
        key: 'exemples',
        label: 'Usage de l’exemple',
        maxPoints: 4,
        descriptors: [
          'Chaque argument est appuyé sur un exemple concret et vérifiable dans son propre cadre.',
          'L’exemple illustre l’argument au lieu de le répéter.',
        ],
      },
      {
        key: 'cohesion',
        label: 'Cohésion et connecteurs',
        maxPoints: 4,
        descriptors: [
          'Les connecteurs portent la structure au lieu de la décorer.',
          'La conclusion réaffirme la position sans introduire d’élément nouveau.',
        ],
      },
      {
        key: 'langue',
        label: 'Correction lexicale et grammaticale',
        maxPoints: 5,
        descriptors: [
          'Lexique précis et adapté au registre d’une lettre officielle.',
          'Syntaxe complexe maîtrisée : subordination, concession, hypothèse.',
          'Les erreurs ne gênent pas la compréhension.',
        ],
      },
    ],
  },
  modelAnswer:
    'Monsieur le Maire,\n\n' +
    'Je souhaite vous faire part de mon soutien au projet d’encadrement des loyers, et vous en exposer trois raisons.\n\n' +
    'La première tient à l’accès au logement. Dans le quartier de la gare, un studio de vingt-cinq mètres carrés ' +
    'se loue aujourd’hui près de six cents euros, soit davantage que ce qu’un apprenti perçoit en un mois. ' +
    'Sans plafond, ces logements sortent du marché pour ceux qui en ont le plus besoin.\n\n' +
    'La deuxième raison est la stabilité des habitants. Une famille de mon immeuble a déménagé trois fois en ' +
    'quatre ans, chaque fois pour un loyer plus élevé ; les enfants ont changé deux fois d’école. ' +
    'Un plafond ne réglera pas tout, mais il rendra ces départs moins fréquents.\n\n' +
    'Enfin, la mesure servira les propriétaires eux-mêmes. Aujourd’hui, celui qui loue à un prix raisonnable est ' +
    'désavantagé par celui qui profite de la pénurie. Un plafond commun remet tout le monde sur la même ligne.\n\n' +
    'On objectera que l’encadrement décourage la construction. Bien que l’argument soit sérieux, la construction ' +
    'dépend d’abord du foncier disponible, et notre commune n’en manque pas.\n\n' +
    'Pour ces raisons, je vous demande de soutenir ce projet.\n\n' +
    'Veuillez agréer, Monsieur le Maire, l’expression de mes salutations distinguées.',
};

/* ═══ EO Section A — Obtenir de l'information ═════════════════════════════ */
//
// The candidate asks and the examiner answers. Two artefacts are required, not
// one: the incomplete document, and the answer bank. Without the bank the
// interaction stalls the moment a candidate asks something unanticipated, and
// the candidate is penalised for OUR gap.
//
// The bank therefore includes an answer the document does not hint at
// (`stationnement`), exactly as the standard requires.
//
// COVERAGE IS A NAMED CRITERION, and the bank is what defines full coverage.
// Nine facts, all withheld by the advert. The model answer reaches every one
// of them — that is asserted by the paper's own test, because a cue that does
// not fire on the author's own strong answer will not fire on a candidate
// either, and the fact behind it becomes unobtainable.
//
// TOPIC NOTE: the dev fixture used a pottery workshop for this task. It is not
// reused here, and the fixture is deleted in this phase, so no candidate meets
// the same document twice.

export const EO_A: ExamTask = {
  ...base,
  id: taskId('po_interaction', '001'),
  taskType: 'po_interaction',
  skill: 'PO',
  level: 'b1',
  label: 'Section A',
  prompt:
    'SECTION A · 5 minutes\n\n' +
    'COURS DU SOIR · informatique pour débutants\n\n' +
    'Association Verlune, maison de quartier de Sainte-Ambre.\n' +
    'Apprendre à se servir d’un ordinateur, faire ses démarches en ligne, gérer ses courriels et ses photos.\n' +
    'Groupe réduit, ambiance détendue. Les inscriptions sont ouvertes ; les places sont limitées.\n' +
    'Renseignements et inscriptions à l’accueil de la maison de quartier.\n\n' +
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
          'Les informations utiles sont demandées : prix, dates, jour et horaire, durée, niveau, matériel, groupe, inscription.',
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
    'Bonjour, je vous appelle au sujet du cours du soir en informatique. Est-ce qu’il reste des places ? ' +
    'Le cours commence à quelle date exactement, et combien de séances sont prévues ? ' +
    'C’est quel jour, et à quelle heure le soir ? Combien coûte l’inscription ? ' +
    'Est-ce qu’il faut apporter son ordinateur, ou est-ce que le matériel est fourni sur place ? ' +
    'Vous écrivez « débutants » : quel niveau faut-il avoir exactement ? ' +
    'On est combien de personnes dans le groupe ? Comment est-ce que je peux m’inscrire ? ' +
    'Et une dernière chose : est-ce qu’il y a un parking près de la maison de quartier ?',
  interlocutor: {
    opening: {
      id: 'open',
      text: 'Maison de quartier de Sainte-Ambre, bonjour. Vous appelez pour le cours d’informatique ? Je vous écoute.',
      covers: '',
      cues: [],
    },
    answers: [
      {
        id: 'places',
        text: 'Oui, il reste de la place. On prend douze personnes et nous en sommes à huit inscrits.',
        covers: 'les places restantes',
        cues: ['reste des places', 'reste de la place', 'places disponibles', 'complet', 'encore de la place'],
      },
      {
        id: 'dates',
        text: 'Le cours commence le mardi 7 octobre et se termine fin décembre.',
        covers: 'les dates du cours',
        cues: ['commence', 'quelles dates', 'debut', 'demarre'],
      },
      {
        id: 'seances',
        text: 'Il y a dix séances d’une heure et demie, donc quinze heures en tout.',
        covers: 'la durée et le nombre de séances',
        cues: ['combien de seances', 'dure combien', 'duree', 'combien de fois', 'combien de semaines'],
      },
      {
        id: 'horaire',
        text: 'C’est tous les mardis, de dix-huit heures trente à vingt heures.',
        covers: 'le jour et l’horaire',
        cues: ['quel jour', 'quels jours', 'quelle heure', 'horaire', 'horaires'],
      },
      {
        id: 'prix',
        text: 'Le cours entier coûte quatre-vingts euros, ou quarante euros si vous habitez le quartier.',
        covers: 'le prix',
        cues: ['combien coute', 'quel prix', 'le prix', 'tarif', 'coute combien', 'cout'],
      },
      {
        id: 'materiel',
        text: 'Les ordinateurs sont fournis, il y en a un par personne. Vous pouvez apporter le vôtre si vous préférez.',
        covers: 'le matériel fourni',
        cues: ['ordinateur', 'materiel', 'apporter', 'portable', 'fourni'],
      },
      {
        id: 'niveau',
        text: 'Aucun niveau n’est demandé. La moitié du groupe n’a jamais allumé un ordinateur.',
        covers: 'le niveau requis',
        cues: ['niveau', 'debutant', 'debutants', 'experience', 'prerequis'],
      },
      {
        id: 'groupe',
        text: 'Le groupe est petit, douze personnes au maximum, avec un formateur et un bénévole.',
        covers: 'la taille du groupe',
        cues: ['combien de personnes', 'groupe', 'participants', 'combien on est'],
      },
      {
        id: 'inscription',
        text: 'Vous passez à l’accueil avec une pièce d’identité et un justificatif de domicile, ou vous appelez et nous gardons la place une semaine.',
        covers: 'comment s’inscrire',
        cues: ['inscrire', 'inscription', 'comment faire', 'reserver', 'dossier'],
      },
      {
        id: 'stationnement',
        text: 'Il y a un parking gratuit derrière le bâtiment, et l’arrêt de bus est juste devant.',
        covers: 'le stationnement et l’accès',
        cues: ['parking', 'stationner', 'stationnement', 'acces', 'bus'],
      },
    ],
    catchAll: {
      id: 'catch',
      text: 'Ça, je ne saurais pas vous le dire de mémoire. Vous avez d’autres questions sur le cours lui-même ?',
      covers: '',
      cues: [],
    },
    closing: {
      id: 'close',
      text: 'Je crois que vous avez tout. Au plaisir de vous voir en octobre. Bonne journée.',
      covers: '',
      cues: [],
    },
  },
};

/* ═══ EO Section B — Convaincre ═══════════════════════════════════════════ */
//
// The candidate presents an activity and persuades the interlocutor to take
// part. The standard requires an OBJECTION LADDER, because without objections
// there is no persuasion, only description, and the task's whole point
// disappears.
//
// WHERE THE LADDER LIVES, and why. `examinerNotes` renders nowhere in the app
// and is not sent to the grader, so a ladder written only there would reach
// nobody at run time. It is therefore recorded in examinerNotes for the human
// reviewer AND named in the rubric's `adaptation` criterion, which IS sent to
// the grader — so a candidate who pre-empts cost, time and self-doubt is
// credited for it and one who only describes the activity is not.
//
// This task is a `po_monologue`, not a `po_interaction`. The interlocutor
// engine is candidate-LED and cue-matched: it answers questions. An objection
// ladder is examiner-led and sequential, which is a different selection rule.
// Wiring it into the cue matcher would make the examiner fire objections at
// whatever words happened to match, which is worse than not having it. A
// sequential objection mode is recorded as an E8 item.

export const EO_B: ExamTask = {
  ...base,
  id: taskId('po_monologue', '001'),
  taskType: 'po_monologue',
  skill: 'PO',
  level: 'b2',
  label: 'Section B',
  prompt:
    'SECTION B · 10 minutes\n\n' +
    'Le club de course de Sainte-Ambre organise sa course annuelle le dimanche 18 mai. ' +
    'Il cherche des bénévoles pour les ravitaillements, le fléchage du parcours et l’accueil des coureurs. ' +
    'Aucune expérience n’est demandée. Repas et tee-shirt offerts. ' +
    'Les créneaux vont de deux heures à la journée entière.\n\n' +
    'Présentez cette activité à votre interlocuteur et convainquez-le d’y participer. ' +
    'Donnez votre avis, appuyez-vous sur des exemples, et répondez à ses objections.',
  timingS: 600,
  // 120, matching blanc-02 through blanc-05. This was 60 — half the preparation
  // its four parallel forms give for the same task — because blanc-01 was
  // authored before tef/paper-rules.ts existed and nothing compared the papers
  // to each other. Parallel forms that hand one cohort half the prep time are
  // not parallel, and the guard only checked that prepS was above zero.
  prepS: 120,
  responseSpec: { kind: 'audio', minDurationS: 120, maxDurationS: 480 },
  examinerNotes: [
    ...NOTES_OPEN,
    'ÉCHELLE D’OBJECTIONS (à l’usage de l’examinateur, jamais montrée au candidat). ' +
      '1. « Un dimanche entier, c’est beaucoup. » — le candidat doit savoir que les créneaux commencent à deux heures. ' +
      '2. « Je ne connais personne au club. » — le candidat doit vendre l’accueil, pas seulement la tâche. ' +
      '3. « Je ne cours pas, je n’y ai pas ma place. » — aucune expérience n’est demandée, et les postes cités ne courent pas. ' +
      '4. « J’ai déjà quelque chose ce dimanche-là. » — le candidat doit proposer une alternative concrète plutôt que d’insister.',
  ],
  rubric: {
    criteria: [
      {
        key: 'strategie',
        label: 'Stratégie de persuasion',
        maxPoints: 5,
        descriptors: [
          'Présente l’activité de façon attirante avant de demander un engagement.',
          'Choisit des arguments adaptés à l’interlocuteur plutôt qu’une liste générale.',
        ],
      },
      {
        key: 'adaptation',
        label: 'Argumentation et réponse à l’objection',
        maxPoints: 5,
        descriptors: [
          'Anticipe ou traite les objections attendues : la durée de l’engagement, le fait de ne connaître personne, le fait de ne pas courir, un empêchement ce jour-là.',
          'Répond avec un fait du document (créneaux de deux heures, aucune expérience demandée) plutôt qu’en répétant l’invitation.',
          'Propose une solution de rechange au lieu d’insister quand l’objection tient.',
        ],
      },
      {
        key: 'langue',
        label: 'Étendue et précision de la langue',
        maxPoints: 5,
        descriptors: [
          'Lexique de l’organisation et de l’engagement associatif.',
          'Moyens de la persuasion : hypothèse, concession, mise en valeur.',
        ],
      },
      {
        key: 'fluidite',
        label: 'Fluidité et débit',
        maxPoints: 4,
        descriptors: [
          'Parle sans pause excessive, tient la durée demandée.',
          'Les hésitations ne cassent pas l’argumentation.',
        ],
      },
      {
        key: 'gestion',
        label: 'Gestion de l’échange',
        maxPoints: 4,
        descriptors: [
          'Laisse une place à l’interlocuteur, ne monologue pas d’un bout à l’autre.',
          'Conclut en demandant une décision ou un engagement précis.',
        ],
      },
    ],
  },
  modelAnswer:
    'Je voulais t’en parler parce que je crois que ça te plairait. Le club organise sa course le dimanche 18 mai, ' +
    'et ils cherchent des bénévoles. Avant que tu me dises non : ce n’est pas la journée entière. ' +
    'Les créneaux commencent à deux heures, donc tu peux venir le matin et repartir déjeuner.\n\n' +
    'Il y a trois postes. Le ravitaillement, c’est le plus vivant : tu tends des gobelets et tu encourages, ' +
    'et franchement, c’est là qu’on s’amuse le plus. Le fléchage, c’est plus tôt et plus tranquille. ' +
    'L’accueil, c’est à l’arrivée, sous la tente.\n\n' +
    'Tu vas me dire que tu ne cours pas. Justement : aucun de ces trois postes ne court. ' +
    'L’an dernier, la moitié des bénévoles n’avaient jamais mis un dossard. ' +
    'Et tu ne connaîtras personne les vingt premières minutes, c’est vrai, mais on est par deux sur chaque poste ' +
    'et il y a un repas à midi. C’est comme ça que je connais la moitié des gens du quartier.\n\n' +
    'Si le 18 ne va vraiment pas, dis-le-moi cette semaine : ils ont besoin de deux personnes le samedi ' +
    'pour préparer les tables, et ça, c’est deux heures.\n\n' +
    'Alors, je te note pour le ravitaillement du matin ?',
};
