// TEF Canada blanc-01 — Compréhension orale. 40 questions, 40 minutes.
//
// One task per named block, because a block is the unit that carries its own
// option count, its own play rule and its own label. Each document inside a
// block is an ExamPart with its own transcript, playCount and reading window.
//
//   A  4 · conversations avec dessins · 4 image options · 1 play
//   B  4 · annonces publiques         · 4 options · 1 play
//   C  6 · micros-trottoirs           · 3 options · 1 play   ← the only 3-option block
//   D  2 · chroniques radio           · 4 options · 1 play
//   E  6 · interviews                 · 4 options · 2 plays  ← the only 2-play block
//   F  1 · reportage                  · 4 options · 1 play
//   G 17 · documents divers           · 4 options · 1 play   ← G-elastic fill rule
//
// Transcripts are written as SPEECH, not prose read aloud: false starts,
// fillers, self-repair, unfinished clauses. A transcript with none of those
// renders as an audiobook and is easier than the real paper.
//
// KEY ORDER. Every item below is authored with the correct option written
// FIRST, so a reviewer sees the intended answer next to the `why` that
// justifies it. That is not the order a candidate meets: scatterKeys() in
// finalise.ts places the key deterministically before the paper is written,
// because the exam runner renders authored order and never shuffles.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, NOTES_CLOSED, taskId, ITEMS, uniq } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ Block A — Conversations avec dessins ════════════════════════════════ */
//
// The images ARE the options. The schema carries one image per part, so each
// part points at a composite four-panel plate and `opts` carry the panel
// descriptions — which is also the alt text a screen-reader user needs
// (UDL 01). E8 renders the plates from the briefs in `imageAlt`. Until it
// does, the options read as text, which makes this block easier than the real
// one; that gap is recorded in the phase notes.
//
// THE BRIEF MUST NOT NAME OPTION LETTERS. It used to say "dans l'ordre des
// options : (A) … (B) …", which was true when it was written and false by the
// time the paper shipped: scatterKeys moves the key AFTER authoring, so the
// authored order is not the order a candidate sees. A brief that asserts a
// mapping it cannot know is worse than one that asserts none, and this one was
// caught on device only because the plate failed to load and the alt was shown
// in its place.
//
// E8 renders each plate in the order of the STORED `opts` array, which is the
// scattered order and the only one that is true.
//
// Every plate varies along ONE dimension. Four unrelated pictures would make
// the item free.
//
// SELF-VERIFY (A1–A4): keys unique — yes, each is named explicitly in the
// last turn. Answerable without the audio — no, all four options are equally
// ordinary purchases (cover test passed). Key not longest in any item.
// check_french / check_gender: fraise f, framboise f, myrtille f, cerise f,
// barquette f, parapluie m, manteau m, valise f, bac m, pot m, pain m — all
// confirmed against lexique-gender.csv. No banned words. No real proper nouns.

export const CO_A: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'a2',
  label: 'Section A',
  prompt: 'Vous allez entendre quatre courts échanges. Pour chaque échange, choisissez l’image qui correspond.',
  timingS: 200,
  targetItemIds: uniq(ITEMS.marche, ITEMS.transports, ITEMS.ecologie, ITEMS.courses),
  parts: [
    {
      label: 'Échange 1 · au marché',
      playCount: 1,
      readWindowS: 10,
      durationS: 22,
      imageRef: 'img/exam/tef/blanc-01/co-a-01.png',
      imageAlt:
        'Planche de quatre panneaux : une barquette de fraises rouges, une barquette de framboises, ' +
        'une barquette de myrtilles, une barquette de cerises. Même barquette, même cadrage, même fond ' +
        'dans les quatre panneaux : seul le fruit change. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA CLIENTE : Bonjour ! Je voudrais une barquette de framboises, s’il vous plaît.\n' +
        'LE VENDEUR : Ah… les framboises, c’est terminé pour ce matin. Il me reste des fraises, elles viennent d’arriver.\n' +
        'LA CLIENTE : Bon. Eh bien va pour les fraises alors. Une barquette.',
      items: [
        {
          q: 'Qu’est-ce que la cliente achète ?',
          opts: ['Une barquette de fraises', 'Une barquette de framboises', 'Une barquette de myrtilles', 'Une barquette de cerises'],
          correct: 0,
          why: 'Les framboises sont épuisées. Le vendeur propose des fraises et la cliente les prend.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Échange 2 · à la gare',
      playCount: 1,
      readWindowS: 10,
      durationS: 25,
      imageRef: 'img/exam/tef/blanc-01/co-a-02.png',
      imageAlt:
        'Planche de quatre panneaux : un parapluie noir fermé, un sac de voyage, un manteau noir sur ' +
        'un cintre, une valise à roulettes. Objets isolés sur fond neutre, à la même échelle apparente. ' +
        'Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA VOYAGEUSE : Excusez-moi, j’ai oublié quelque chose dans le train de dix heures douze.\n' +
        'L’AGENT : Un sac ? Un manteau ?\n' +
        'LA VOYAGEUSE : Non, non. Un parapluie. Un grand parapluie noir, il était accroché à mon sac.\n' +
        'L’AGENT : D’accord. Je note : parapluie noir.',
      items: [
        {
          q: 'Qu’est-ce que la voyageuse a oublié ?',
          opts: ['Un parapluie noir', 'Un sac de voyage', 'Un manteau noir', 'Une valise à roulettes'],
          correct: 0,
          why: 'L’agent propose « un sac » et « un manteau » ; la voyageuse corrige et dit « un parapluie ».',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 3 · au local à poubelles',
      playCount: 1,
      readWindowS: 10,
      durationS: 24,
      imageRef: 'img/exam/tef/blanc-01/co-a-03.png',
      imageAlt:
        'Planche de quatre panneaux : un bac de collecte dont le couvercle ET le corps sont jaune vif, ' +
        'une colonne à verre verte, un petit bac brun pour les déchets alimentaires, un bac de collecte ' +
        'entièrement gris, couvercle et corps de la même teinte. Quatre contenants de collecte, même ' +
        'angle de vue. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LE VOISIN : Et ça, le pot de yaourt, je le mets où ?\n' +
        'LA VOISINE : Bac jaune. Comme tous les emballages.\n' +
        'LE VOISIN : Ah bon ? Moi je croyais que le plastique allait avec le verre.\n' +
        'LA VOISINE : Non. Le verre, c’est la colonne dehors. Le pot, c’est jaune.',
      items: [
        {
          q: 'Où faut-il mettre le pot de yaourt ?',
          opts: ['Dans le bac jaune', 'Dans la colonne à verre', 'Dans le bac à déchets alimentaires', 'Dans le bac gris'],
          correct: 0,
          why: 'La voisine le dit deux fois : les emballages vont au bac jaune, le verre à la colonne.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 4 · à la boulangerie',
      playCount: 1,
      readWindowS: 10,
      durationS: 21,
      imageRef: 'img/exam/tef/blanc-01/co-a-04.png',
      imageAlt:
        'Planche de quatre panneaux : un pain de campagne rond, une baguette, un pain aux céréales ' +
        'allongé, un pain complet moulé. Quatre pains sur le même plan de travail. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LE CLIENT : Il vous reste des baguettes ?\n' +
        'LA BOULANGÈRE : Des baguettes, non, tout est parti. J’ai des pains aux céréales et des pains de campagne.\n' +
        'LE CLIENT : Un pain de campagne alors. Coupé en deux, s’il vous plaît.\n' +
        'LA BOULANGÈRE : Coupé en deux, très bien. Ce sera deux euros quarante.\n' +
        'LE CLIENT : Tenez. Et bonne journée à vous.',
      items: [
        {
          q: 'Qu’est-ce que le client achète ?',
          opts: ['Un pain de campagne', 'Une baguette', 'Un pain aux céréales', 'Un pain complet'],
          correct: 0,
          why: 'Il n’y a plus de baguettes. Deux pains sont proposés et le client choisit celui de campagne.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ Block B — Annonces publiques ════════════════════════════════════════ */
//
// The stem asks what the announcement is FOR, or who it is for. Never a
// detail. Three purpose items and one audience item.
//
// SELF-VERIFY (B1–B4): each announcement states a reason, a consequence and
// an instruction, and the purpose is inferable only from the whole — no single
// give-away sentence. Cover test passed: without the audio all four options in
// each item are ordinary announcements. Option word counts within ±40%; the
// key is the longest in B4 only (1 of 4, under the 30% ceiling).
// Genders checked: voirie f, navette f, mairie f, billetterie f, vigilance f,
// rafale f, permanence f, exposition f.

export const CO_B: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Vous allez entendre quatre annonces. Pour chaque annonce, choisissez la bonne réponse.',
  timingS: 240,
  targetItemIds: uniq(ITEMS.transports, ITEMS.laVille, ITEMS.musees, ITEMS.meteo, ITEMS.droit),
  parts: [
    {
      label: 'Annonce 1 · à bord d’un autobus',
      playCount: 1,
      readWindowS: 12,
      durationS: 28,
      text:
        'LA VOIX ENREGISTRÉE : Mesdames et messieurs, en raison de travaux de voirie rue des Tanneurs, ' +
        'la ligne 14 ne dessert pas les arrêts Tanneurs et Place Verlune jusqu’au 30 du mois. ' +
        'Une navette relie la station Sainte-Ambre à la mairie toutes les quinze minutes. ' +
        'Nous vous remercions de votre compréhension.',
      items: [
        {
          q: 'Quel est le but de cette annonce ?',
          opts: [
            'Signaler deux arrêts non desservis et la solution prévue',
            'Annoncer la suppression définitive de la ligne 14',
            'Demander aux voyageurs de prendre la navette pour tout trajet',
            'Prévenir d’un retard exceptionnel sur tout le réseau',
          ],
          correct: 0,
          why: 'L’annonce donne une cause (les travaux), une conséquence (deux arrêts sautés) et un remplacement (la navette).',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 2 · dans un musée',
      playCount: 1,
      readWindowS: 12,
      durationS: 26,
      text:
        'L’HÔTESSE : Chers visiteurs, nous vous informons que l’exposition « Lumières du Nord » ' +
        'est prolongée jusqu’au dimanche 12. Les billets déjà achetés pour les dates initiales restent valables. ' +
        'La billetterie ferme quarante-cinq minutes avant le musée. ' +
        'Les visites guidées prévues pendant ces journées supplémentaires sont maintenues aux mêmes ' +
        'horaires, à onze heures et à quinze heures. ' +
        'Le vestiaire, lui, reste accessible jusqu’à la fermeture des salles.',
      items: [
        {
          q: 'Quelle est l’information principale de cette annonce ?',
          opts: [
            'L’exposition reste ouverte plus longtemps que prévu',
            'Les billets déjà achetés doivent être échangés',
            'Le musée ferme quarante-cinq minutes plus tôt',
            'Une nouvelle exposition ouvre le dimanche 12',
          ],
          correct: 0,
          why: 'C’est une prolongation. Les billets restent valables, et ce sont les caisses, pas le musée, qui ferment plus tôt.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 3 · bulletin de vigilance',
      playCount: 1,
      readWindowS: 12,
      durationS: 30,
      text:
        'LE PRÉSENTATEUR : Le service de prévision place le département en vigilance orange pour vent violent, ' +
        'de ce soir vingt heures à demain midi. Des rafales de cent kilomètres-heure sont attendues sur le littoral. ' +
        'Il est conseillé de reporter les déplacements qui peuvent l’être et de rentrer les objets légers laissés dehors. ' +
        'Les établissements scolaires restent ouverts et les transports circulent normalement pour l’instant. ' +
        'Un nouveau bulletin sera diffusé demain matin à sept heures.',
      items: [
        {
          q: 'À qui s’adresse cette annonce ?',
          opts: [
            'À tous les habitants du département concerné',
            'Aux seules personnes qui vivent sur le littoral',
            'Aux services de secours du département',
            'Aux voyageurs qui arrivent demain midi',
          ],
          correct: 0,
          why: 'C’est le département entier qui est placé en vigilance ; le littoral n’est qu’un endroit où les rafales seront les plus fortes.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 4 · à la mairie',
      playCount: 1,
      readWindowS: 12,
      durationS: 27,
      text:
        'L’AGENT : La mairie de Sainte-Ambre accueille une permanence juridique gratuite ' +
        'le premier mardi de chaque mois, de quatorze à dix-sept heures, salle Verlune. ' +
        'Les entretiens se font sans rendez-vous, dans l’ordre d’arrivée. ' +
        'Aucun document n’est exigé pour un premier échange. ' +
        'La permanence est assurée par des avocats bénévoles du barreau départemental, ' +
        'et elle est ouverte à tous les habitants de la commune.',
      items: [
        {
          q: 'Quel est le but de cette annonce ?',
          opts: [
            'Faire connaître un service gratuit et dire comment y accéder',
            'Rappeler que la mairie change ses horaires',
            'Demander aux habitants d’apporter leurs documents',
            'Annoncer l’ouverture d’une nouvelle salle municipale',
          ],
          correct: 0,
          why: 'L’annonce présente la permanence, puis explique qu’on vient sans rendez-vous et sans dossier.',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block C — Micros-trottoirs ══════════════════════════════════════════ */
//
// THREE options, not four. This changed on 1 Sept 2025 and getting it wrong
// dates the paper immediately.
//
// Two micro-trottoirs of three speakers. In each, the three positions are
// genuinely different — for, against, conditional — not three shades of
// agreement. Speech is spontaneous throughout.
//
// The trap the standard asks for is built into speaker 2 of each set: a
// position is stated and then qualified away. The option matching the STATED
// position is the distractor; the one matching the qualification is the key.
//
// SELF-VERIFY (C1–C6): every key is a position on the question actually put,
// not merely something the speaker said — that is the line C5 walks, so its
// distractor was sharpened from "peut rendre service" (which the speaker does
// concede) to "suffit pour la plupart des consultations" (which she does not).
// Cover test passed. Genders: piétonnisation f, rafale n/a, ordonnance f,
// tablette f, périphérie f.

export const CO_C: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b2',
  label: 'Section C',
  prompt:
    'Vous allez entendre deux micros-trottoirs. Dans chacun, la même question est posée à trois personnes. ' +
    'Pour chaque personne, choisissez la réponse qui décrit le mieux son opinion.',
  timingS: 380,
  targetItemIds: uniq(ITEMS.laVille, ITEMS.sante, ITEMS.transports),
  parts: [
    {
      label: 'Micro-trottoir 1 · « Faut-il fermer le centre-ville aux voitures ? »',
      playCount: 1,
      readWindowS: 20,
      durationS: 70,
      text:
        'PERSONNE 1 : Moi je dis oui, franchement, oui. On respire mal, il y a du bruit du matin au soir. ' +
        'Les commerçants râlent, bon, d’accord, mais à Corbeny ils ont fermé deux rues et les cafés se sont remplis. Alors.\n' +
        'PERSONNE 2 : Ah, complètement pour. Enfin… pour, oui, à condition qu’on mette des bus corrects avant. ' +
        'Parce que moi j’habite à douze kilomètres. Si vous me supprimez la voiture sans rien mettre à la place, ' +
        'je ne viens plus, c’est tout. Donc oui, mais pas tout de suite.\n' +
        'PERSONNE 3 : Non. Non, non, non. On dit ça, on piétonnise, et au bout de deux ans les magasins ferment ' +
        'et les gens filent dans les zones commerciales en périphérie. C’est ce qui est arrivé chez ma sœur. ' +
        'Le centre, il est joli. Il est vide, mais il est joli.',
      items: [
        {
          q: 'Personne 1 : quelle est son opinion ?',
          opts: [
            'Elle est favorable, et cite un exemple qui a fonctionné ailleurs',
            'Elle est favorable, mais s’inquiète pour les commerçants',
            'Elle est défavorable à cause du bruit et de la pollution',
          ],
          correct: 0,
          why: 'Elle écarte l’objection des commerçants en citant Corbeny, où les cafés se sont remplis.',
          band: 'b1',
        },
        {
          q: 'Personne 2 : quelle est son opinion ?',
          opts: [
            'Elle accepte l’idée seulement si les transports sont améliorés d’abord',
            'Elle est pour et souhaite que ce soit fait rapidement',
            'Elle est contre parce qu’elle habite loin du centre',
          ],
          correct: 0,
          why: 'Elle commence par « complètement pour », puis pose une condition et finit sur « mais pas tout de suite ». C’est la condition qui porte son opinion.',
          band: 'b2',
        },
        {
          q: 'Personne 3 : quelle est son opinion ?',
          opts: [
            'Elle craint que les commerces du centre disparaissent',
            'Elle trouve que le centre manque de charme',
            'Elle préfère les zones commerciales de périphérie',
          ],
          correct: 0,
          why: 'Elle décrit les magasins qui ferment et les clients qui partent ailleurs. Elle trouve le centre joli, et la périphérie est ce qu’elle déplore.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Micro-trottoir 2 · « La téléconsultation peut-elle remplacer le médecin ? »',
      playCount: 1,
      readWindowS: 20,
      durationS: 72,
      text:
        'PERSONNE 1 : Franchement, oui. Chez moi le premier rendez-vous c’est dans quatre mois. Quatre mois. ' +
        'Alors si j’ai quelqu’un au bout de l’écran dans l’heure, moi je prends, et je ne discute pas.\n' +
        'PERSONNE 2 : Non, ça ne remplace pas. Un médecin, il vous regarde, il vous touche, ' +
        'il voit que vous marchez de travers en entrant dans la pièce. Tout ça, l’écran ne le voit pas. ' +
        'Ça peut dépanner, je ne dis pas le contraire. Mais remplacer, non. ' +
        'Et puis il y a ce qu’on ne dit pas à un écran. La dernière fois, moi, ' +
        'c’est en repartant, sur le pas de la porte, que j’ai parlé du vrai problème.\n' +
        'PERSONNE 3 : Ça dépend pour qui. Pour ma mère, quatre-vingt-deux ans, qui ne sait pas allumer une tablette, ' +
        'c’est non. Pour moi, pourquoi pas. Le problème ce n’est pas la médecine, c’est le matériel et qui sait s’en servir.',
      items: [
        {
          q: 'Personne 1 : quelle est son opinion ?',
          opts: [
            'Elle y est favorable à cause des délais d’attente',
            'Elle y est favorable parce que cela coûte moins cher',
            'Elle s’y oppose tant que les délais ne diminuent pas',
          ],
          correct: 0,
          why: 'Son seul argument est le délai : quatre mois pour un rendez-vous contre une heure devant un écran.',
          band: 'b1',
        },
        {
          q: 'Personne 2 : quelle est son opinion ?',
          opts: [
            'Elle juge que l’examen physique ne peut pas être remplacé',
            'Elle pense que la téléconsultation suffit pour la plupart des consultations',
            'Elle reproche aux médecins de ne pas assez examiner leurs patients',
          ],
          correct: 0,
          why: 'Elle concède que cela « peut dépanner », mais sa réponse à la question posée est non : ce qui manque, c’est le médecin qui regarde et qui touche.',
          band: 'b2',
        },
        {
          q: 'Personne 3 : quelle est son opinion ?',
          opts: [
            'Pour elle, tout dépend de la capacité à se servir des outils',
            'Pour elle, la téléconsultation convient surtout aux personnes âgées',
            'Pour elle, la qualité des soins à distance est insuffisante',
          ],
          correct: 0,
          why: 'Elle le dit en clair à la fin : le problème n’est pas la médecine, c’est le matériel et qui sait l’utiliser.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block D — Chronique radio ═══════════════════════════════════════════ */
//
// One chronicle, two questions: gist then stance. A single presenter, scripted
// but conversational.
//
// SELF-VERIFY (D1–D2): the figure is attributed to an invented source
// (l’Institut Verlune), never left floating as established fact. Cover test
// passed: without the chronicle, all four gist options are ordinary claims
// about car-sharing. Key is not the longest in either item.

export const CO_D: ExamTask = {
  ...base,
  id: taskId('co_mcq', '004'),
  level: 'b2',
  label: 'Section D',
  prompt: 'Vous allez entendre une chronique. Répondez aux deux questions.',
  timingS: 170,
  targetItemIds: uniq(ITEMS.transports, ITEMS.ecologie, ITEMS.bureau),
  parts: [
    {
      label: 'Chronique · le covoiturage domicile-travail',
      playCount: 1,
      readWindowS: 20,
      durationS: 62,
      text:
        'LE CHRONIQUEUR : Bonjour à tous. On me demande souvent pourquoi le covoiturage domicile-travail ne décolle pas, ' +
        'alors que tout le monde dit vouloir moins de voitures. La réponse tient en un mot : la marge. ' +
        'Pas la marge financière, non. La marge de manœuvre. Prendre trois collègues le matin, ' +
        'c’est renoncer à s’arrêter à la pharmacie, à partir vingt minutes plus tôt parce que la crèche a appelé, ' +
        'à finir un dossier à dix-neuf heures. Une enquête de l’Institut Verlune le dit clairement : ' +
        'ce n’est ni le prix du carburant ni la place de stationnement qui décide, c’est la peur d’être coincé. ' +
        'Alors on peut ajouter des primes, des voies réservées, des applications. ' +
        'Tant qu’un salarié n’aura pas la certitude de pouvoir rentrer chez lui un soir où le plan tombe à l’eau, ' +
        'il prendra sa voiture. Le covoiturage n’a pas un problème de motivation. Il a un problème de porte de sortie.',
      items: [
        {
          q: 'Quelle est l’idée principale de cette chronique ?',
          opts: [
            'Le covoiturage échoue surtout parce qu’il enlève de la souplesse',
            'Le covoiturage échoue parce que les primes restent insuffisantes',
            'Le covoiturage progresse dès que le stationnement devient cher',
            'Le covoiturage suppose des collègues qui habitent tout près',
          ],
          correct: 0,
          why: 'Toute la chronique tourne autour de la « marge de manœuvre » perdue, et se termine sur le « problème de porte de sortie ».',
          band: 'b2',
        },
        {
          q: 'Que pense le chroniqueur des mesures d’encouragement ?',
          opts: [
            'Elles resteront sans effet tant que la question du retour n’est pas réglée',
            'Elles suffiraient si elles étaient mieux expliquées aux salariés',
            'Elles coûtent trop cher aux entreprises qui les financent',
            'Elles ont déjà permis au covoiturage de progresser nettement',
          ],
          correct: 0,
          why: '« On peut ajouter des primes, des voies réservées, des applications… tant qu’un salarié n’aura pas la certitude de pouvoir rentrer, il prendra sa voiture. »',
          band: 'b2',
        },
      ],
    },
  ],
};
