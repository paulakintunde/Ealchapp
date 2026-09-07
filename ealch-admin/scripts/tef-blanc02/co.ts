// TEF Canada blanc-02 — Compréhension orale, blocks A to D.
//
// Same shape as blanc-01: one task per named block, because a block is the unit
// that carries its own option count, its own play rule and its own label. Each
// document inside a block is an ExamPart with its own transcript, playCount and
// reading window.
//
//   A  4 · conversations avec dessins · 4 image options · 1 play
//   B  4 · annonces publiques         · 4 options · 1 play
//   C  6 · micros-trottoirs           · 3 options · 1 play   ← the only 3-option block
//   D  2 · chroniques radio           · 4 options · 1 play
//
// Blocks E, F and G are in co-efg.ts.
//
// Transcripts are written as SPEECH: false starts, fillers, self-repair,
// unfinished clauses. A transcript with none of those renders as an audiobook
// and is easier than the real paper.
//
// KEY ORDER. Every item is authored with the correct option written FIRST, so a
// reviewer sees the intended answer next to the `why` that justifies it. That is
// not the order a candidate meets: scatterKeys() places the key deterministically
// before the paper is written, because the exam runner renders authored order
// and never shuffles.
//
// PROPER NOUNS are invented, and none of blanc-01's are reused: a candidate
// sitting both papers should not meet Sainte-Ambre twice. This paper's places
// are Nervaux, Chantoise, Beaulieu-le-Haut, Vaudroy and Ferrand-sur-Aize.
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
// The images ARE the options. Each part points at a composite four-panel plate
// and `opts` carry the panel descriptions, which is also the alt text a
// screen-reader user needs (UDL 01).
//
// THE BRIEF MUST NOT NAME OPTION LETTERS. scatterKeys moves the key AFTER
// authoring, so the authored order is not the order a candidate sees. A brief
// that asserts a mapping it cannot know is worse than one that asserts none.
// The plate is rendered in the order of the STORED `opts` array, which is the
// scattered order and the only one that is true.
//
// Every plate varies along ONE dimension. Four unrelated pictures would make
// the item free.
//
// SELF-VERIFY (A1–A4): each key is named explicitly in the last turn and no
// distractor is. Answerable without the audio — no: all four panels in each
// plate are equally ordinary (cover test passed). Key is not the longest option
// in any item. Genders checked: clé f, plante f, panier m, colis m, gâteau m,
// bouquet m, livre m, ballon m, casque m, écharpe f, gourde f, café m, lait m,
// confiture f, riz m. No banned words. No real proper nouns.

export const CO_A: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'a2',
  label: 'Section A',
  prompt: 'Vous allez entendre quatre courts échanges. Pour chaque échange, choisissez l’image qui correspond.',
  timingS: 200,
  targetItemIds: uniq(ITEMS.voisinage, ITEMS.collegues, ITEMS.transportsQuotidiens, ITEMS.courses),
  parts: [
    {
      label: 'Échange 1 · sur le palier',
      playCount: 1,
      readWindowS: 10,
      durationS: 24,
      imageRef: 'img/exam/tef/blanc-02/co-a-01.png',
      imageAlt:
        'Planche de quatre panneaux : un trousseau de clés, une plante verte en pot, un chat assis ' +
        'dans un panier de transport, un colis fermé. Chaque objet est isolé sur le même fond neutre, ' +
        'au même cadrage et à la même échelle apparente. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA VOISINE : Bonjour ! Dites, on part quinze jours à partir de samedi. Est-ce que je peux vous laisser un double des clés ?\n' +
        'LE VOISIN : Ah, bien sûr. C’est pour arroser, c’est ça ?\n' +
        'LA VOISINE : Non, non, les plantes, ma sœur s’en occupe. C’est juste au cas où. Le double des clés, rien d’autre.',
      items: [
        {
          q: 'Qu’est-ce que la voisine confie à son voisin ?',
          opts: ['Un trousseau de clés', 'Une plante verte', 'Un chat', 'Un colis'],
          correct: 0,
          why: 'Le voisin suppose qu’il s’agit d’arroser ; la voisine corrige : sa sœur s’occupe des plantes, et elle ne laisse que le double des clés.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 2 · au bureau',
      playCount: 1,
      readWindowS: 10,
      durationS: 26,
      imageRef: 'img/exam/tef/blanc-02/co-a-02.png',
      imageAlt:
        'Planche de quatre panneaux : un gâteau rond sur un plat, un bouquet de fleurs, un livre fermé, ' +
        'un bouquet de ballons. Chaque objet est photographié seul, sur le même fond clair et au même ' +
        'cadrage. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LE COLLÈGUE : Alors, pour le pot de départ de Farid, on a combien ? Trente-deux euros.\n' +
        'LA COLLÈGUE : Trente-deux… Bon. Les fleurs, c’est joli, mais à trente-deux euros, euh, ça va être un bouquet triste.\n' +
        'LE COLLÈGUE : Un livre, alors ?\n' +
        'LA COLLÈGUE : Il en a déjà trois qu’il n’a pas lus. Non, écoute : un gâteau. Tout le monde en profite et ça tient dans le budget.',
      items: [
        {
          q: 'Qu’est-ce que les collègues décident d’acheter ?',
          opts: ['Un gâteau', 'Un bouquet de fleurs', 'Un livre', 'Des ballons'],
          correct: 0,
          why: 'Les fleurs sont écartées à cause du budget, le livre parce qu’il en a déjà. La collègue tranche : un gâteau.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 3 · au dépôt des objets trouvés',
      playCount: 1,
      readWindowS: 10,
      durationS: 27,
      imageRef: 'img/exam/tef/blanc-02/co-a-03.png',
      imageAlt:
        'Planche de quatre panneaux : un casque audio, une écharpe pliée, une gourde métallique, ' +
        'un livre de poche. Objets isolés sur fond neutre, à la même échelle apparente et sous le ' +
        'même éclairage. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'L’EMPLOYÉ : Vous avez oublié quelque chose dans quelle ligne ?\n' +
        'LE VOYAGEUR : La 14, hier soir. Un casque audio, noir.\n' +
        'L’EMPLOYÉ : Alors… j’ai une écharpe, une gourde, et un livre. Pas de casque.\n' +
        'LE VOYAGEUR : Ah. Bon. Je repasserai demain, alors.',
      items: [
        {
          q: 'Qu’est-ce que le voyageur a oublié ?',
          opts: ['Un casque audio', 'Une écharpe', 'Une gourde', 'Un livre'],
          correct: 0,
          why: 'Le voyageur annonce un casque audio noir. Les trois autres objets sont ceux que l’employé a en dépôt, et il précise justement qu’il n’a pas de casque.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 4 · à la caisse',
      playCount: 1,
      readWindowS: 10,
      durationS: 28,
      imageRef: 'img/exam/tef/blanc-02/co-a-04.png',
      imageAlt:
        'Planche de quatre panneaux : un paquet de café, une bouteille de lait, un pot de confiture, ' +
        'un sachet de riz. Chaque produit est photographié seul, sur le même fond blanc et au même ' +
        'cadrage. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA CLIENTE : Excusez-moi, je crois qu’il y a une erreur sur le ticket.\n' +
        'LE CAISSIER : Faites voir… Le lait, la confiture, le riz, le café…\n' +
        'LA CLIENTE : Le café, justement. Il est passé deux fois. Je n’en ai pris qu’un paquet.\n' +
        'LE CAISSIER : Ah oui, effectivement. Je vous rembourse la différence.',
      items: [
        {
          q: 'Quel article a été facturé deux fois ?',
          opts: ['Le café', 'Le lait', 'La confiture', 'Le riz'],
          correct: 0,
          why: 'Le caissier énumère les quatre produits ; la cliente désigne le café et précise qu’elle n’en a pris qu’un paquet.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ Block B — Annonces publiques ════════════════════════════════════════ */
//
// One speaker, no interlocutor, and the answer is a fact stated once. What
// makes these B1 rather than A2 is the density of numbers and conditions, not
// the vocabulary.
//
// SELF-VERIFY (B1–B4): every key is a fact stated in the announcement and no
// distractor is stated anywhere. Numbers are written as words in the transcript
// where a synthesiser would otherwise read them inconsistently. Cover test
// passed on all four.

export const CO_B: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Vous allez entendre quatre annonces. Pour chaque annonce, choisissez la bonne réponse.',
  timingS: 240,
  targetItemIds: uniq(ITEMS.jardinage, ITEMS.systemeDeSante, ITEMS.gouvernement, ITEMS.droit),
  parts: [
    {
      label: 'Annonce 1 · le jardin partagé',
      playCount: 1,
      readWindowS: 12,
      durationS: 38,
      text:
        'LA RESPONSABLE : Bonjour à toutes et à tous. Le jardin partagé de Nervaux rouvre ses inscriptions. ' +
        'Il reste huit parcelles, de vingt mètres carrés chacune. La cotisation est de quarante euros pour ' +
        'l’année. Deux règles, et elles ne sont pas négociables : pas de produits chimiques, et chaque ' +
        'parcelle doit être cultivée au moins une fois toutes les trois semaines. Une parcelle laissée à ' +
        'l’abandon est réattribuée. Les inscriptions se prennent le samedi matin, à la cabane du fond.',
      items: [
        {
          q: 'À quelle condition une parcelle est-elle reprise ?',
          opts: [
            'Si elle n’est pas cultivée pendant plus de trois semaines',
            'Si la cotisation n’est pas payée avant le samedi',
            'Si le jardinier utilise des produits chimiques une seule fois',
            'Si la parcelle dépasse vingt mètres carrés',
          ],
          correct: 0,
          why: 'L’annonce lie explicitement la réattribution à l’abandon : « cultivée au moins une fois toutes les trois semaines », puis « une parcelle laissée à l’abandon est réattribuée ».',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 2 · à la pharmacie',
      playCount: 1,
      readWindowS: 12,
      durationS: 36,
      text:
        'LE PHARMACIEN : Votre attention, s’il vous plaît. À partir de lundi, la pharmacie propose un ' +
        'dépistage sans rendez-vous, du lundi au vendredi, de neuf heures à onze heures trente. Le test ' +
        'est gratuit et le résultat est donné sur place, en une quinzaine de minutes. Présentez-vous ' +
        'directement au comptoir du fond, sans passer par la file principale. Le service n’est pas assuré ' +
        'le samedi.',
      items: [
        {
          q: 'Quand le dépistage est-il proposé ?',
          opts: [
            'En semaine, le matin uniquement',
            'Tous les jours, matin et après-midi',
            'Le samedi, sur rendez-vous',
            'Du lundi au samedi, l’après-midi',
          ],
          correct: 0,
          why: '« Du lundi au vendredi, de neuf heures à onze heures trente », et l’annonce précise que le service n’est pas assuré le samedi.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 3 · à la mairie de Chantoise',
      playCount: 1,
      readWindowS: 12,
      durationS: 40,
      text:
        'L’AGENT : Mesdames, messieurs, bonjour. À compter de ce matin, l’accueil fonctionne avec des ' +
        'tickets numérotés. Prenez un ticket à la borne, à l’entrée, et surveillez l’écran. Attention : ' +
        'le ticket ne réserve pas votre place pour la journée. Si votre numéro passe et que vous n’êtes ' +
        'pas là, il faut en reprendre un. Et un dernier point, parce qu’on nous le demande beaucoup : ' +
        'la borne s’arrête un quart d’heure avant la fermeture.',
      items: [
        {
          q: 'Que se passe-t-il si l’on est absent quand son numéro est appelé ?',
          opts: [
            'Il faut prendre un nouveau ticket',
            'On garde sa place jusqu’à la fermeture',
            'On est reçu en priorité au retour',
            'On doit revenir le lendemain matin',
          ],
          correct: 0,
          why: '« Si votre numéro passe et que vous n’êtes pas là, il faut en reprendre un. » L’annonce dit aussi que le ticket ne réserve pas la place pour la journée.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 4 · la médiation de voisinage',
      playCount: 1,
      readWindowS: 12,
      durationS: 42,
      text:
        'LA MÉDIATRICE : Un mot sur un service que peu de gens connaissent. La commune de Beaulieu-le-Haut ' +
        'propose une médiation gratuite entre voisins : bruit, haies, stationnement, ce genre de choses. ' +
        'Un médiateur reçoit les deux parties, séparément d’abord, ensemble ensuite. Il ne tranche pas et ' +
        'il ne sanctionne personne : il aide à trouver un accord. Si aucun accord n’est trouvé, chacun ' +
        'reste libre de saisir la justice. Permanence le mardi après-midi, sur rendez-vous.',
      items: [
        {
          q: 'Quel est le rôle du médiateur ?',
          opts: [
            'Aider les voisins à trouver un accord',
            'Décider lequel des deux voisins a raison',
            'Infliger une amende au voisin en tort',
            'Représenter un des voisins devant la justice',
          ],
          correct: 0,
          why: 'L’annonce est explicite : « Il ne tranche pas et il ne sanctionne personne : il aide à trouver un accord. »',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block C — Micros-trottoirs ══════════════════════════════════════════ */
//
// THE ONLY THREE-OPTION BLOCK. Changed 1 September 2025; getting it wrong dates
// the paper immediately.
//
// Three speakers per document and one question per speaker, so the task is
// telling three people apart rather than remembering one fact. That is why
// casting gives each speaker in a document a different voice, and why the
// speakers are written with different rhythms: one hedges, one is blunt, one
// qualifies everything.
//
// SELF-VERIFY (C1–C2): each key belongs to exactly one speaker and no two
// speakers hold the same position. No option is answerable from general
// knowledge alone.

export const CO_C: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b2',
  label: 'Section C',
  prompt: 'Vous allez entendre deux micros-trottoirs. Pour chaque question, choisissez la bonne réponse.',
  timingS: 380,
  targetItemIds: uniq(ITEMS.immigrationEtCitoyennete, ITEMS.transportsQuotidiens),
  parts: [
    {
      label: 'Micro-trottoir 1 · « Voter aux élections locales quand on vient d’arriver »',
      playCount: 1,
      readWindowS: 15,
      durationS: 95,
      text:
        'LA JOURNALISTE : Faut-il voter aux municipales quand on vient de s’installer dans une commune ?\n' +
        'PREMIER PASSANT : Franchement, oui. Enfin… je dis oui, mais avec une nuance. On paie les impôts ' +
        'locaux dès la première année, on met les enfants à l’école, on prend le bus. Donc on subit les ' +
        'décisions. Le temps qu’on est là ne change rien à ça.\n' +
        'DEUXIÈME PASSANTE : Moi je ne suis pas d’accord. Pas contre le principe, hein, mais il faut ' +
        'connaître un peu. Un budget municipal, ça ne se comprend pas en trois mois. Je dirais un an, ' +
        'deux ans, le temps de voir comment la commune fonctionne vraiment.\n' +
        'TROISIÈME PASSANT : Bon, moi la question ne me choque pas mais je la trouve mal posée. Le vrai ' +
        'problème, ce n’est pas les nouveaux arrivants. C’est que personne ne va voter. Vingt-huit pour ' +
        'cent de participation la dernière fois. Vingt-huit. Alors savoir qui a le droit ou pas, euh… ' +
        'c’est secondaire.',
      items: [
        {
          q: 'Sur quoi le premier passant fonde-t-il sa position ?',
          opts: [
            'Sur le fait que les nouveaux arrivants subissent déjà les décisions locales',
            'Sur le fait que les nouveaux arrivants connaissent déjà bien le fonctionnement de la commune',
            'Sur le fait que la participation aux élections est trop faible',
          ],
          correct: 0,
          why: 'Il énumère impôts locaux, école et bus, puis conclut « on subit les décisions » et que la durée de présence n’y change rien.',
          band: 'b2',
        },
        {
          q: 'Que demande la deuxième passante avant de pouvoir voter ?',
          opts: [
            'Un délai d’un à deux ans pour comprendre la commune',
            'Une formation obligatoire au budget municipal',
            'Que la participation dépasse un certain seuil',
          ],
          correct: 0,
          why: 'Elle dit « un an, deux ans, le temps de voir comment la commune fonctionne », et précise qu’elle n’est pas contre le principe.',
          band: 'b2',
        },
        {
          q: 'Quelle est la position du troisième passant ?',
          opts: [
            'La question posée n’est pas le vrai problème',
            'Les nouveaux arrivants ne devraient pas voter',
            'Le vote devrait être rendu obligatoire',
          ],
          correct: 0,
          why: 'Il trouve la question « mal posée » et déplace le problème sur l’abstention, qu’il chiffre. Il ne propose pas d’obligation.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Micro-trottoir 2 · « La gratuité des transports »',
      playCount: 1,
      readWindowS: 15,
      durationS: 100,
      text:
        'LE JOURNALISTE : Faut-il rendre les transports en commun gratuits ?\n' +
        'PREMIÈRE PASSANTE : Gratuits, non. Moins chers, oui. Parce que gratuit, ça veut dire payé par ' +
        'l’impôt, et l’impôt, tout le monde le paie, même ceux qui n’ont pas de bus près de chez eux. ' +
        'Dans les villages autour, il passe deux cars par jour. Eux paieraient pour nous.\n' +
        'DEUXIÈME PASSANT : Moi je l’ai vécu. J’habitais une ville qui l’a fait. Ce qui a changé, ce ' +
        'n’est pas le nombre de voitures, hein, ça c’est un mythe. C’est que le réseau s’est dégradé, ' +
        'parce qu’il n’y avait plus d’argent pour l’entretien. Les bus arrivaient en retard, alors les ' +
        'gens sont revenus à la voiture.\n' +
        'TROISIÈME PASSANTE : Alors moi je suis pour, mais pas pour tout le monde. Gratuit pour les ' +
        'moins de vingt-cinq ans et les demandeurs d’emploi. Ceux qui peuvent payer paient. C’est la ' +
        'seule façon de tenir le budget et d’aider ceux qui en ont besoin.',
      items: [
        {
          q: 'Quelle objection la première passante soulève-t-elle ?',
          opts: [
            'Des habitants mal desservis financeraient un service qu’ils n’utilisent pas',
            'La gratuité ferait disparaître les lignes qui desservent les villages alentour',
            'Le prix actuel des billets est déjà très bas',
          ],
          correct: 0,
          why: 'Elle explique que la gratuité est payée par l’impôt et cite les villages où « il passe deux cars par jour » : « eux paieraient pour nous ».',
          band: 'b2',
        },
        {
          q: 'D’après le deuxième passant, quelle a été la conséquence réelle de la gratuité ?',
          opts: [
            'Le réseau s’est dégradé faute d’argent pour l’entretien',
            'Le nombre de voitures en circulation a nettement diminué dans le centre',
            'La fréquentation des bus n’a pas bougé',
          ],
          correct: 0,
          why: 'Il écarte l’effet sur les voitures (« ça c’est un mythe ») et décrit la dégradation du réseau, puis le retour à la voiture.',
          band: 'b2',
        },
        {
          q: 'Que propose la troisième passante ?',
          opts: [
            'Une gratuité réservée aux jeunes et aux demandeurs d’emploi',
            'Une gratuité totale financée par une contribution versée par les entreprises',
            'Une baisse générale du prix des abonnements',
          ],
          correct: 0,
          why: '« Gratuit pour les moins de vingt-cinq ans et les demandeurs d’emploi. Ceux qui peuvent payer paient. »',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block D — Chronique radio ═══════════════════════════════════════════ */
//
// One broadcast voice, two questions, and the difficulty is that the chronicler
// reports several positions without holding one. A candidate who hears only the
// first study will answer the second question wrong.
//
// SELF-VERIFY (D1–D2): the figures are invented and attributed to an invented
// source. Neither key is stated in the opening sentence, so a candidate who
// stops listening early cannot score.

export const CO_D: ExamTask = {
  ...base,
  id: taskId('co_mcq', '004'),
  level: 'b2',
  label: 'Section D',
  prompt: 'Vous allez entendre une chronique. Choisissez la bonne réponse.',
  timingS: 170,
  targetItemIds: uniq(ITEMS.affaires),
  parts: [
    {
      label: 'Chronique · la semaine de quatre jours',
      playCount: 1,
      readWindowS: 15,
      durationS: 105,
      text:
        'LA CHRONIQUEUSE : La semaine de quatre jours revient dans le débat, et comme souvent, on mélange ' +
        'deux choses très différentes. Premier modèle : on garde trente-cinq heures et on les tasse sur ' +
        'quatre jours. Les journées font neuf heures. C’est ce que font la plupart des entreprises qui ' +
        'annoncent être passées à quatre jours, et c’est, disons-le, une réorganisation de l’agenda, pas ' +
        'une réduction du travail. Deuxième modèle : on descend à trente-deux heures payées trente-cinq. ' +
        'Là, c’est autre chose. L’observatoire de Vaudroy a suivi quarante entreprises pendant deux ans. ' +
        'Résultat : dans le premier modèle, la fatigue déclarée augmente. Neuf heures d’affilée, ça se ' +
        'paie. Dans le second, elle baisse, mais la productivité horaire doit progresser d’environ huit ' +
        'pour cent pour que l’entreprise s’y retrouve, et toutes n’y arrivent pas. Bref : ce n’est pas ' +
        'la question du nombre de jours qui compte. C’est celle du nombre d’heures.',
      items: [
        {
          q: 'Quelle distinction la chroniqueuse établit-elle ?',
          opts: [
            'Entre tasser les mêmes heures sur quatre jours et réduire le nombre d’heures',
            'Entre les grandes entreprises industrielles et les petites structures de service',
            'Entre le secteur public et le secteur privé',
            'Entre les salariés à temps plein et à temps partiel',
          ],
          correct: 0,
          why: 'Elle oppose explicitement trente-cinq heures sur quatre jours (« une réorganisation de l’agenda ») et trente-deux heures payées trente-cinq.',
          band: 'b2',
        },
        {
          q: 'Que montre l’étude citée à propos du premier modèle ?',
          opts: [
            'La fatigue déclarée par les salariés augmente',
            'La productivité horaire progresse de huit pour cent',
            'Les salariés déclarent moins de fatigue qu’avant',
            'Les entreprises abandonnent le dispositif au bout de deux ans',
          ],
          correct: 0,
          why: '« Dans le premier modèle, la fatigue déclarée augmente. » Les huit pour cent concernent le second modèle, et c’est un seuil à atteindre, pas un résultat.',
          band: 'b2',
        },
      ],
    },
  ],
};
