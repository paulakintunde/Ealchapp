// TEF Canada blanc-03 — Compréhension orale, blocks A to D.
//
//   A  4 · conversations avec dessins · 4 image options · 1 play
//   B  4 · annonces publiques         · 4 options · 1 play
//   C  6 · micros-trottoirs           · 3 options · 1 play   ← the only 3-option block
//   D  2 · chroniques radio           · 4 options · 1 play
//
// Blocks E, F and G are in co-efg.ts.
//
// KEY ORDER: authored key-first so a reviewer sees the intended answer beside
// the `why`; scatterKeys() places it before the paper is written, because the
// runner renders authored order and never shuffles.
//
// OPTION LENGTH is a shipped rule, not a style note: options stay within 2.2x
// of each other in word count and the key is the longest no more than 30% of
// the time across the paper. Both are asserted in ../tef/paper-rules.ts.
//
// PROPER NOUNS are invented and none are reused from blanc-01 or blanc-02:
// this paper's places are Aubercy, Grandvaux, Pierrefonte, Mesnil-Doré and
// Valcourt.
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
// The images ARE the options: each part points at a composite four-panel plate
// and `opts` carry the panel descriptions, which double as the alt text a
// screen-reader user needs (UDL 01).
//
// THE BRIEF MUST NOT NAME OPTION LETTERS. scatterKeys moves the key after
// authoring, so a brief asserting "(A) … (B) …" would be asserting an order it
// cannot know. Each plate varies along ONE dimension; four unrelated pictures
// would make the item free.
//
// SELF-VERIFY (A1–A4): each key is named explicitly in the closing turn and no
// distractor is. Cover test passed: every panel is an equally ordinary object.
// Genders: table f, chaise f, lampe f, étagère f, parapluie m, sac m, gants m,
// bonnet m, baguette f, brioche f, tarte f, pain m, colis m, enveloppe f,
// carton m, valise f.

export const CO_A: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'a2',
  label: 'Section A',
  prompt: 'Vous allez entendre quatre courts échanges. Pour chaque échange, choisissez l’image qui correspond.',
  timingS: 200,
  targetItemIds: uniq(ITEMS.auRestaurant, ITEMS.objets, ITEMS.marche),
  parts: [
    {
      label: 'Échange 1 · au restaurant',
      playCount: 1,
      readWindowS: 10,
      durationS: 25,
      imageRef: 'img/exam/tef/blanc-03/co-a-01.png',
      imageAlt:
        'Planche de quatre panneaux : une table ronde dressée pour quatre personnes, une table longue ' +
        'dressée pour huit, une table haute avec deux tabourets, une table en terrasse sous un parasol. ' +
        'Même style de vaisselle et même éclairage dans les quatre panneaux : seule la table change. ' +
        'Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LE CLIENT : Bonjour, j’avais réservé pour quatre, mercredi soir. On sera huit finalement.\n' +
        'LA SERVEUSE : Huit… Alors la ronde, je ne peux pas. En terrasse non plus, il annonce de la pluie.\n' +
        'LE CLIENT : La table haute ?\n' +
        'LA SERVEUSE : Elle ne fait que deux places. Je vous mets la grande table longue, au fond.',
      items: [
        {
          q: 'Quelle table le client obtient-il finalement ?',
          opts: [
            'Une table longue dressée pour huit',
            'Une table ronde dressée pour quatre',
            'Une table haute avec deux tabourets',
            'Une table en terrasse sous un parasol',
          ],
          correct: 0,
          why: 'La serveuse écarte la ronde (trop petite), la terrasse (pluie annoncée) et la table haute (deux places), puis propose la grande table longue.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 2 · au vestiaire',
      playCount: 1,
      readWindowS: 10,
      durationS: 24,
      imageRef: 'img/exam/tef/blanc-03/co-a-02.png',
      imageAlt:
        'Planche de quatre panneaux : un parapluie pliant, un sac à dos, une paire de gants, un bonnet ' +
        'de laine. Chaque objet est isolé sur le même fond neutre, au même cadrage et à la même échelle ' +
        'apparente. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA SPECTATRICE : Excusez-moi, j’ai laissé quelque chose au vestiaire hier soir.\n' +
        'L’EMPLOYÉ : On a un sac à dos, des gants et un bonnet.\n' +
        'LA SPECTATRICE : Ah non. Moi c’est un parapluie. Un pliant, gris.\n' +
        'L’EMPLOYÉ : Un parapluie… je vais voir derrière, on en met parfois dans le bac.',
      items: [
        {
          q: 'Qu’est-ce que la spectatrice a oublié ?',
          opts: ['Un parapluie pliant', 'Un sac à dos', 'Une paire de gants', 'Un bonnet de laine'],
          correct: 0,
          why: 'L’employé énumère trois objets en dépôt ; la spectatrice les écarte tous et annonce un parapluie pliant gris.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 3 · à la boulangerie',
      playCount: 1,
      readWindowS: 10,
      durationS: 26,
      imageRef: 'img/exam/tef/blanc-03/co-a-03.png',
      imageAlt:
        'Planche de quatre panneaux : une baguette bien cuite, une brioche tressée, une tarte aux pommes, un pain ' +
        'de campagne rond. Chaque produit est photographié seul, sur le même fond clair et au même ' +
        'cadrage. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA CLIENTE : Bonjour. Je voudrais commander pour demain matin, pour huit heures.\n' +
        'LE BOULANGER : Bien sûr. Une tarte ? Une brioche ?\n' +
        'LA CLIENTE : Non, c’est pour le petit-déjeuner de l’équipe. Deux pains de campagne, les gros ronds.\n' +
        'LE BOULANGER : Deux pains de campagne pour huit heures, c’est noté.',
      items: [
        {
          q: 'Qu’est-ce que la cliente commande ?',
          opts: [
            'Un pain de campagne rond',
            'Une baguette bien cuite',
            'Une brioche tressée',
            'Une tarte aux pommes',
          ],
          correct: 0,
          why: 'Le boulanger propose une tarte et une brioche ; la cliente les refuse et commande deux pains de campagne ronds.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 4 · à la boîte aux lettres',
      playCount: 1,
      readWindowS: 10,
      durationS: 27,
      imageRef: 'img/exam/tef/blanc-03/co-a-04.png',
      imageAlt:
        'Planche de quatre panneaux : un colis volumineux, une enveloppe matelassée, un carton plat, ' +
        'une valise à roulettes. Chaque objet est isolé sur fond neutre, à la même échelle apparente ' +
        'et sous le même éclairage. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LE FACTEUR : Bonjour. J’ai quelque chose pour vous, mais ça ne rentre pas dans la boîte.\n' +
        'LA RÉSIDENTE : Une enveloppe ? Un carton plat ?\n' +
        'LE FACTEUR : Non, non, un colis. Un gros. Je vous le laisse à la loge, la gardienne est là.',
      items: [
        {
          q: 'Que le facteur dépose-t-il à la loge ?',
          opts: ['Un colis volumineux', 'Une enveloppe matelassée', 'Un carton plat', 'Une valise à roulettes'],
          correct: 0,
          why: 'La résidente propose une enveloppe et un carton plat ; le facteur corrige et parle d’un gros colis, qu’il laisse à la loge.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ Block B — Annonces publiques ════════════════════════════════════════ */
//
// One speaker, no interlocutor, and the answer is a condition stated once. What
// makes these B1 rather than A2 is the density of dates and exceptions.
//
// SELF-VERIFY (B1–B4): every key is stated in its own announcement and no
// distractor is stated anywhere. Numbers are written as words where a
// synthesiser would otherwise read them inconsistently.

export const CO_B: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Vous allez entendre quatre annonces. Pour chaque annonce, choisissez la bonne réponse.',
  timingS: 240,
  targetItemIds: uniq(ITEMS.maison, ITEMS.meteo, ITEMS.musees, ITEMS.marche),
  parts: [
    {
      label: 'Annonce 1 · le ramonage',
      playCount: 1,
      readWindowS: 12,
      durationS: 38,
      text:
        'LE GARDIEN : Avis aux résidents de la résidence Aubercy. Le ramonage annuel des conduits aura ' +
        'lieu du lundi douze au vendredi seize novembre. Il est obligatoire et il conditionne votre ' +
        'assurance : un logement non ramoné n’est plus couvert en cas de sinistre. Le ramoneur passe ' +
        'entre huit heures et douze heures. Si vous êtes absent, laissez vos clés à la loge, ou prenez ' +
        'rendez-vous directement avec l’entreprise pour un second passage, qui sera à votre charge.',
      items: [
        {
          q: 'Que risque un résident absent qui n’a pas laissé ses clés ?',
          opts: [
            'Devoir payer lui-même un second passage du ramoneur',
            'Devoir faire ramoner son conduit avant le douze novembre',
            'Perdre l’accès à la loge pendant toute la semaine',
            'Être facturé du ramonage de l’ensemble de la résidence',
          ],
          correct: 0,
          why: 'L’annonce propose deux solutions à l’absent, et précise que le second passage pris directement avec l’entreprise « sera à votre charge ».',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 2 · alerte à la chaleur',
      playCount: 1,
      readWindowS: 12,
      durationS: 40,
      text:
        'LA VOIX : Bulletin de vigilance pour le département. Une vague de chaleur est attendue de mardi ' +
        'à jeudi, avec des maximales voisines de trente-huit degrés. Les recommandations habituelles ' +
        's’appliquent : boire régulièrement, fermer les volets la journée, aérer la nuit. Deux salles ' +
        'rafraîchies sont ouvertes à Grandvaux, à la médiathèque et au gymnase, de dix heures à vingt ' +
        'heures. Le registre des personnes isolées reste ouvert : signalez un voisin âgé plutôt que ' +
        'd’attendre qu’il appelle.',
      items: [
        {
          q: 'Que demande l’annonce à propos des personnes isolées ?',
          opts: [
            'De les signaler sans attendre qu’elles appellent',
            'De les accompagner jusqu’aux salles rafraîchies',
            'De leur téléphoner deux fois par jour',
            'De les inscrire au gymnase avant mardi',
          ],
          correct: 0,
          why: '« Signalez un voisin âgé plutôt que d’attendre qu’il appelle. » Les salles et les horaires sont une autre information.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 3 · au musée',
      playCount: 1,
      readWindowS: 12,
      durationS: 36,
      text:
        'L’AGENTE : Mesdames et messieurs, le musée fermera exceptionnellement à seize heures aujourd’hui, ' +
        'et non à dix-huit heures, en raison d’un mouvement social. La billetterie est déjà fermée. ' +
        'Les visiteurs déjà entrés peuvent terminer leur visite ; les billets datés d’aujourd’hui restent ' +
        'valables toute la semaine prochaine, sans échange préalable. L’exposition temporaire du deuxième ' +
        'étage, elle, est fermée dès maintenant.',
      items: [
        {
          q: 'Que peuvent faire les détenteurs d’un billet daté d’aujourd’hui ?',
          opts: [
            'L’utiliser la semaine prochaine sans démarche particulière',
            'Se le faire rembourser à la billetterie avant seize heures',
            'L’échanger contre un billet pour l’exposition temporaire',
            'L’utiliser uniquement le jour même avant seize heures',
          ],
          correct: 0,
          why: '« Les billets datés d’aujourd’hui restent valables toute la semaine prochaine, sans échange préalable. »',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 4 · les paniers de légumes',
      playCount: 1,
      readWindowS: 12,
      durationS: 39,
      text:
        'LE BÉNÉVOLE : Un mot sur la distribution des paniers de légumes. Elle a lieu le jeudi, entre ' +
        'dix-sept heures et dix-neuf heures, au point relais de la place de Pierrefonte. Attention, ce ' +
        'point de retrait change : ce n’est plus la salle des fêtes. Les paniers non retirés à dix-neuf ' +
        'heures sont redistribués à l’épicerie solidaire ; nous ne pouvons pas les conserver d’une ' +
        'semaine sur l’autre. Si vous ne pouvez pas venir, prévenez avant midi et un autre adhérent ' +
        'récupérera votre part.',
      items: [
        {
          q: 'Que deviennent les paniers non retirés à dix-neuf heures ?',
          opts: [
            'Ils sont redistribués à l’épicerie solidaire',
            'Ils sont conservés jusqu’à la semaine suivante',
            'Ils sont rapportés à la salle des fêtes',
            'Ils sont remis au producteur le lendemain',
          ],
          correct: 0,
          why: '« Les paniers non retirés à dix-neuf heures sont redistribués à l’épicerie solidaire », et l’annonce exclut explicitement de les conserver.',
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
// Three speakers per document, one question per speaker: the task is telling
// three people apart, not remembering one fact. Each speaker is written with a
// different rhythm so the voices are distinguishable before casting.
//
// SELF-VERIFY (C1–C2): no two speakers hold the same position, and each key
// belongs to exactly one of them.

export const CO_C: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b2',
  label: 'Section C',
  prompt: 'Vous allez entendre deux micros-trottoirs. Pour chaque question, choisissez la bonne réponse.',
  timingS: 380,
  targetItemIds: uniq(ITEMS.questionsSociales, ITEMS.ecologie),
  parts: [
    {
      label: 'Micro-trottoir 1 · « La piste cyclable de la rue commerçante »',
      playCount: 1,
      readWindowS: 15,
      durationS: 98,
      text:
        'LA JOURNALISTE : La nouvelle piste cyclable a supprimé une file de stationnement. Qu’en pensez-vous ?\n' +
        'PREMIER PASSANT : Moi je tiens un commerce ici, alors on va dire que je suis mal placé pour être ' +
        'neutre. Mais ce que je constate, c’est que mes clients viennent de loin, avec un caddie, et qu’ils ' +
        'ne repartiront pas à vélo avec vingt kilos. On ne me remplace pas mes places, on me les enlève.\n' +
        'DEUXIÈME PASSANTE : Alors, moi, je comprends, hein. Mais les chiffres de la commune disent que ' +
        'six clients sur dix venaient déjà à pied. Donc on a supprimé du stationnement pour quatre. Enfin, ' +
        'je dis ça, il faudrait voir si les six sont les mêmes qui dépensent.\n' +
        'TROISIÈME PASSANT : Franchement, le problème n’est pas la piste. C’est qu’on l’a faite en trois ' +
        'semaines, sans prévenir personne. Si on avait réuni les commerçants avant, on aurait la même ' +
        'piste et pas la même colère. La méthode, quoi.',
      items: [
        {
          q: 'Quel argument le premier passant avance-t-il ?',
          opts: [
            'Ses clients viennent de loin et ne peuvent pas repartir à vélo',
            'La piste cyclable est bien trop étroite pour être utilisée en sécurité',
            'Les commerçants n’ont pas été consultés avant les travaux',
          ],
          correct: 0,
          why: 'Il parle de clients venant de loin avec un caddie, qui « ne repartiront pas à vélo avec vingt kilos ». La consultation est l’argument du troisième.',
          band: 'b2',
        },
        {
          q: 'Quelle réserve la deuxième passante ajoute-t-elle à son propre chiffre ?',
          opts: [
            'Les clients à pied ne sont peut-être pas ceux qui dépensent le plus',
            'Les chiffres de la commune sont probablement faux',
            'Six clients sur dix ne suffisent pas à faire vivre un commerce',
          ],
          correct: 0,
          why: 'Après avoir cité les six sur dix, elle nuance : « il faudrait voir si les six sont les mêmes qui dépensent ».',
          band: 'b2',
        },
        {
          q: 'Sur quoi porte la critique du troisième passant ?',
          opts: [
            'Sur la méthode suivie plutôt que sur la piste elle-même',
            'Sur le coût des travaux réalisés en trois semaines',
            'Sur le tracé retenu pour la piste cyclable',
          ],
          correct: 0,
          why: '« Le problème n’est pas la piste », dit-il, mais l’absence de réunion préalable : « on aurait la même piste et pas la même colère ».',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Micro-trottoir 2 · « Les bouteilles en plastique à l’école »',
      playCount: 1,
      readWindowS: 15,
      durationS: 102,
      text:
        'LE JOURNALISTE : Faut-il interdire les bouteilles en plastique dans les écoles ?\n' +
        'PREMIÈRE PASSANTE : Oui, mais alors il faut aller au bout. Interdire sans installer de fontaines, ' +
        'c’est demander aux enfants d’avoir soif. Ma fille est dans une école où on a interdit avant ' +
        'd’équiper. Résultat : ils rapportent des bouteilles quand même, et on gronde les parents.\n' +
        'DEUXIÈME PASSANT : Bon. Moi je trouve qu’on s’occupe du plus visible et pas du plus lourd. Une ' +
        'bouteille, ça se voit. Le chauffage du bâtiment, ça ne se voit pas, et c’est là que ça se joue. ' +
        'Je ne suis pas contre, hein, mais ne confondons pas un geste et une politique.\n' +
        'TROISIÈME PASSANTE : Moi ce qui me frappe, c’est que ça marche. Dans l’école de mon fils, la ' +
        'gourde est devenue normale en un trimestre. Les enfants s’adaptent beaucoup plus vite que nous. ' +
        'Ce sont les adultes qui trouvent ça compliqué.',
      items: [
        {
          q: 'Quelle condition la première passante pose-t-elle ?',
          opts: [
            'Installer des fontaines avant d’interdire les bouteilles',
            'Autoriser les bouteilles pour les plus jeunes élèves',
            'Fournir une gourde à chaque enfant dès la rentrée',
          ],
          correct: 0,
          why: '« Interdire sans installer de fontaines, c’est demander aux enfants d’avoir soif », illustré par l’école de sa fille.',
          band: 'b2',
        },
        {
          q: 'Quelle distinction le deuxième passant établit-il ?',
          opts: [
            'Entre un geste visible et une politique qui pèse vraiment',
            'Entre les écoles primaires et les collèges',
            'Entre les bouteilles jetables et les bouteilles réutilisables',
          ],
          correct: 0,
          why: 'Il oppose la bouteille, qui « se voit », au chauffage du bâtiment, qui ne se voit pas : « ne confondons pas un geste et une politique ».',
          band: 'b2',
        },
        {
          q: 'Que retient la troisième passante de son expérience ?',
          opts: [
            'Les enfants ont adopté la gourde plus vite que les adultes',
            'La mesure a finalement été abandonnée au bout d’un seul trimestre',
            'Les familles ont dû acheter plusieurs gourdes pour chacun de leurs enfants',
          ],
          correct: 0,
          why: '« La gourde est devenue normale en un trimestre… Ce sont les adultes qui trouvent ça compliqué. »',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block D — Chronique radio ═══════════════════════════════════════════ */
//
// One broadcast voice, two questions, and the difficulty is that the chronicler
// reports two measures and rates them differently. A candidate who hears only
// the first will answer the second question wrong.
//
// SELF-VERIFY (D1–D2): the figures are invented and attributed to an invented
// observatory. Neither key is stated in the opening sentence.

export const CO_D: ExamTask = {
  ...base,
  id: taskId('co_mcq', '004'),
  level: 'b2',
  label: 'Section D',
  prompt: 'Vous allez entendre une chronique. Choisissez la bonne réponse.',
  timingS: 170,
  targetItemIds: uniq(ITEMS.ecologie),
  parts: [
    {
      label: 'Chronique · les fortes chaleurs en ville',
      playCount: 1,
      readWindowS: 15,
      durationS: 108,
      text:
        'LE CHRONIQUEUR : Chaque été, on redécouvre que la ville a plus chaud que la campagne autour. ' +
        'L’écart, la nuit, atteint quatre à six degrés. Et chaque été, deux solutions reviennent : ' +
        'planter, et peindre. Planter, c’est-à-dire des arbres, des cours d’école débitumées, des ' +
        'alignements. Peindre, c’est repeindre les toits en blanc pour renvoyer le rayonnement. ' +
        'L’observatoire de Valcourt a suivi douze quartiers pendant quatre étés. Les toits blancs ' +
        'agissent vite : moins deux degrés dans les étages sous toiture, dès la première saison. Mais ' +
        'l’effet s’arrête au bâtiment ; la rue, elle, ne change pas. Les arbres font l’inverse. La ' +
        'première année, rien du tout : un jeune arbre n’ombrage rien. À dix ans, il rafraîchit toute ' +
        'la rue, et le bâtiment avec. Alors la question n’est pas de choisir. C’est de savoir qu’on ' +
        'répare un été, ou qu’on prépare une décennie.',
      items: [
        {
          q: 'Que montre l’étude à propos des toits blancs ?',
          opts: [
            'Ils agissent dès la première saison mais seulement sur le bâtiment',
            'Ils rafraîchissent la rue au moins autant que le font les arbres',
            'Ils ne produisent aucun effet mesurable la première année',
            'Ils abaissent la température de quatre à six degrés',
          ],
          correct: 0,
          why: '« Moins deux degrés dans les étages sous toiture, dès la première saison. Mais l’effet s’arrête au bâtiment. » Les quatre à six degrés sont l’écart ville-campagne.',
          band: 'b2',
        },
        {
          q: 'Comment le chroniqueur conclut-il ?',
          opts: [
            'Les deux mesures répondent à des horizons de temps différents',
            'Les arbres sont la seule solution réellement efficace',
            'Les toits blancs doivent être généralisés en priorité',
            'Aucune des deux mesures ne justifie son coût',
          ],
          correct: 0,
          why: '« La question n’est pas de choisir. C’est de savoir qu’on répare un été, ou qu’on prépare une décennie. »',
          band: 'b2',
        },
      ],
    },
  ],
};
