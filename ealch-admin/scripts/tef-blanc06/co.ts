// TEF Canada blanc-06 — Compréhension orale, blocks A to D.
//
//   A  4 · conversations avec dessins · 4 image options · 1 play
//   B  4 · annonces publiques         · 4 options · 1 play
//   C  6 · micros-trottoirs           · 3 options · 1 play   ← the only 3-option block
//   D  2 · chroniques radio           · 4 options · 1 play
//
// Blocks E, F and G are in co-efg.ts.
//
// Authored key-first; paper.ts places the key afterwards (scatterKeys, salted
// until no block shows an A-B-C or C-B-A run).
//
// PROPER NOUNS: Saint-Varin, Belcourt, Hautemont, Lac-Ombreuse, Fréneuse, the
// Institut Calvène. None are reused from any earlier paper.
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
// Each exchange names a plausible wrong object before the right one (STANDARD
// -tef §2 block A trap). Each plate varies along ONE dimension.
//
// SELF-VERIFY (A1–A4): each key is named in the closing turn and no distractor
// is. Cover test passed on all four.

export const CO_A: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'a2',
  label: 'Section A',
  prompt: 'Vous allez entendre quatre courts échanges. Pour chaque échange, choisissez l’image qui correspond.',
  timingS: 200,
  targetItemIds: uniq(ITEMS.jardinage, ITEMS.vetements, ITEMS.deplacements, ITEMS.maison),
  parts: [
    {
      label: 'Échange 1 · à la jardinerie',
      playCount: 1,
      readWindowS: 10,
      durationS: 26,
      imageRef: 'img/exam/tef/blanc-06/co-a-01.png',
      imageAlt:
        'Planche de quatre panneaux : une fougère en pot, une orchidée en pot, un cactus en pot, un ' +
        'ficus en pot. Même pot en terre cuite, même fond clair, même cadrage : seule la plante change. ' +
        'Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA CLIENTE : Bonjour, j’ai acheté une plante ici samedi, et elle était déjà malade.\n' +
        'LE VENDEUR : L’orchidée ? On en a eu plusieurs qui ont souffert du froid pendant le transport.\n' +
        'LA CLIENTE : Non, pas l’orchidée. La fougère. Les feuilles jaunissent depuis le premier jour.\n' +
        'LE VENDEUR : Ah, la fougère. Vous avez le reçu ? Je vous l’échange tout de suite.',
      items: [
        {
          q: 'Quelle plante la cliente rapporte-t-elle ?',
          opts: ['Une fougère', 'Une orchidée', 'Un cactus', 'Un ficus'],
          correct: 0,
          why: 'Le vendeur pense à l’orchidée ; la cliente corrige : « pas l’orchidée. La fougère », et le vendeur la reprend.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 2 · aux objets trouvés',
      playCount: 1,
      readWindowS: 10,
      durationS: 25,
      imageRef: 'img/exam/tef/blanc-06/co-a-02.png',
      imageAlt:
        'Planche de quatre panneaux : une paire de mitaines grises en laine, un bonnet gris en laine, ' +
        'une écharpe grise en laine, des cache-oreilles gris. Même laine grise, même fond, même échelle : ' +
        'seul l’accessoire d’hiver change. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LE PASSAGER : Bonjour, j’ai oublié quelque chose dans l’autobus de la ligne douze, ce matin.\n' +
        'L’AGENTE : Un bonnet ? On en a reçu trois depuis ce matin.\n' +
        'LE PASSAGER : Non, des mitaines. Grises, en laine, avec un petit renne brodé dessus.\n' +
        'L’AGENTE : Attendez… Les voilà, les mitaines avec le renne. Signez ici, s’il vous plaît.',
      items: [
        {
          q: 'Qu’est-ce que le passager a oublié ?',
          opts: ['Une paire de mitaines', 'Un bonnet', 'Une écharpe', 'Des cache-oreilles'],
          correct: 0,
          why: 'L’agente propose un bonnet ; le passager précise « des mitaines… avec un petit renne brodé », que l’agente retrouve.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 3 · au garage',
      playCount: 1,
      readWindowS: 10,
      durationS: 27,
      imageRef: 'img/exam/tef/blanc-06/co-a-03.png',
      imageAlt:
        'Planche de quatre panneaux : un jeu de quatre pneus d’hiver, une batterie de voiture, une ' +
        'paire d’essuie-glaces, des chaînes à neige. Chaque équipement automobile est posé seul sur le ' +
        'même sol d’atelier, au même cadrage. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA CLIENTE : Bonjour, je voudrais un rendez-vous avant la première neige.\n' +
        'LE GARAGISTE : Pour la batterie ? Avec le froid, on en change beaucoup en ce moment.\n' +
        'LA CLIENTE : Non, elle est neuve. C’est pour faire poser mes pneus d’hiver. Ils sont dans le coffre.\n' +
        'LE GARAGISTE : D’accord, les pneus. Jeudi à huit heures, ça vous va ?',
      items: [
        {
          q: 'Pourquoi la cliente prend-elle rendez-vous ?',
          opts: ['Pour faire poser des pneus d’hiver', 'Pour changer la batterie', 'Pour remplacer les essuie-glaces', 'Pour installer des chaînes à neige'],
          correct: 0,
          why: 'Le garagiste suppose la batterie ; elle répond qu’elle est neuve : « c’est pour faire poser mes pneus d’hiver ».',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 4 · à la quincaillerie',
      playCount: 1,
      readWindowS: 10,
      durationS: 26,
      imageRef: 'img/exam/tef/blanc-06/co-a-04.png',
      imageAlt:
        'Planche de quatre panneaux : une grande pelle à neige à lame large, une petite pelle à neige à ' +
        'lame étroite, une souffleuse à neige, un grattoir à glace. Objets isolés sur le même fond ' +
        'neutre, à la même échelle apparente. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LE CLIENT : J’ai acheté cette pelle hier. Elle est trop petite pour mon entrée.\n' +
        'LA VENDEUSE : Vous voulez plutôt une souffleuse ? Elles sont au fond du magasin.\n' +
        'LE CLIENT : Non, c’est trop cher pour moi. Juste une pelle, mais plus large.\n' +
        'LA VENDEUSE : Alors prenez celle-ci, la grande pelle à lame large. Je vous fais l’échange.',
      items: [
        {
          q: 'Que le client emporte-t-il finalement ?',
          opts: ['Une grande pelle à lame large', 'Une petite pelle à lame étroite', 'Une souffleuse à neige', 'Un grattoir à glace'],
          correct: 0,
          why: 'Il refuse la souffleuse, trop chère, et veut « une pelle, mais plus large » ; la vendeuse lui donne la grande pelle.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ Block B — Annonces publiques ════════════════════════════════════════ */
//
// SELF-VERIFY (B1–B4): each key follows from the whole announcement; no
// distractor is stated anywhere in its own announcement.

export const CO_B: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Vous allez entendre quatre annonces. Pour chaque annonce, choisissez la bonne réponse.',
  timingS: 240,
  targetItemIds: uniq(ITEMS.communaute, ITEMS.sportsEtLoisirs, ITEMS.laVille),
  parts: [
    {
      label: 'Annonce 1 · les permanences du centre communautaire',
      playCount: 1,
      readWindowS: 12,
      durationS: 34,
      text:
        'L’ANIMATRICE : Bonjour à toutes et à tous. Le centre communautaire de Saint-Varin modifie ses ' +
        'permanences à partir du lundi 3 novembre. L’aide aux déclarations de revenus a lieu désormais ' +
        'le mardi soir, de dix-sept à vingt heures, et non plus le samedi. L’accueil des nouveaux ' +
        'arrivants reste le jeudi matin, sans changement. Le samedi, le centre est fermé jusqu’au ' +
        'printemps. Le tableau complet est affiché près de l’entrée.',
      items: [
        {
          q: 'Quel est le but principal de cette annonce ?',
          opts: [
            'Informer d’un changement d’horaire des permanences',
            'Annoncer la fermeture définitive du centre le samedi',
            'Recruter des bénévoles pour l’aide aux déclarations',
            'Inviter les nouveaux arrivants à une réunion',
          ],
          correct: 0,
          why: 'L’annonce déplace l’aide aux déclarations au mardi soir et ferme le samedi « jusqu’au printemps » : la fermeture n’est pas définitive, et rien ne recrute ni n’invite.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 2 · la reprise de la gymnastique douce',
      playCount: 1,
      readWindowS: 12,
      durationS: 33,
      text:
        'LA VOIX : Avis aux participants de la saison dernière. Les cours de gymnastique douce ' +
        'reprennent le mercredi 8 octobre, à la salle municipale de Belcourt. Les personnes inscrites ' +
        'l’an passé gardent leur place si elles la confirment avant vendredi, à l’accueil ou par ' +
        'téléphone. Après cette date, les places non confirmées seront proposées aux personnes en ' +
        'liste d’attente, qui seront appelées la semaine suivante.',
      items: [
        {
          q: 'À qui cette annonce s’adresse-t-elle d’abord ?',
          opts: [
            'Aux personnes inscrites la saison dernière',
            'Aux personnes inscrites en liste d’attente',
            'Aux nouveaux habitants de Belcourt',
            'Aux animateurs des cours de gymnastique',
          ],
          correct: 0,
          why: '« Avis aux participants de la saison dernière » : ce sont eux qui doivent confirmer avant vendredi. La liste d’attente ne sera appelée qu’ensuite.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 3 · le déneigement de nuit',
      playCount: 1,
      readWindowS: 12,
      durationS: 35,
      text:
        'L’AGENT : Avis aux résidents du secteur nord de Hautemont. Une opération de déneigement aura ' +
        'lieu cette nuit, de vingt-trois heures à sept heures. Pendant ces heures, le stationnement est ' +
        'interdit des deux côtés des rues signalées par des panneaux orange clignotants. Les véhicules ' +
        'laissés sur place seront remorqués, aux frais de leur propriétaire. Les stationnements des ' +
        'écoles sont ouverts gratuitement aux résidents pour la nuit.',
      items: [
        {
          q: 'Quel est l’objectif de cette annonce ?',
          opts: [
            'Faire libérer les rues pour permettre le déneigement',
            'Prévenir d’une tempête de neige attendue dans la nuit',
            'Annoncer l’ouverture de nouveaux stationnements payants',
            'Informer d’une hausse des frais de remorquage',
          ],
          correct: 0,
          why: 'L’interdiction, la menace de remorquage et les stationnements d’écoles ouverts servent tous à vider les rues pendant l’opération. Aucune tempête n’est annoncée et les stationnements sont gratuits.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 4 · la patinoire fermée',
      playCount: 1,
      readWindowS: 12,
      durationS: 34,
      text:
        'LA VOIX : Information du service des loisirs de Lac-Ombreuse. En raison du redoux, la glace de ' +
        'la patinoire extérieure du parc des Saules n’est plus sûre. La patinoire est fermée jusqu’à ' +
        'nouvel ordre. Le patinage libre est déplacé à la patinoire couverte du centre sportif, aux ' +
        'mêmes horaires et gratuitement. Les cours de hockey des jeunes, eux, sont annulés cette ' +
        'semaine et seront rattrapés en mars.',
      items: [
        {
          q: 'Qu’est-ce qui est proposé aux amateurs de patinage libre ?',
          opts: [
            'Patiner gratuitement à la patinoire couverte',
            'Se faire rembourser leur abonnement de la saison',
            'Rattraper les séances perdues au mois de mars',
            'Revenir au parc dès la fin de la semaine',
          ],
          correct: 0,
          why: '« Le patinage libre est déplacé à la patinoire couverte du centre sportif, aux mêmes horaires et gratuitement. » Le rattrapage de mars concerne les cours de hockey.',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block C — Micros-trottoirs ══════════════════════════════════════════ */
//
// THE ONLY THREE-OPTION BLOCK. One for, one against, one who states a position
// and then qualifies it away (the key follows the qualification).

export const CO_C: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b2',
  label: 'Section C',
  prompt: 'Vous allez entendre deux micros-trottoirs. Pour chaque question, choisissez la bonne réponse.',
  timingS: 380,
  targetItemIds: uniq(ITEMS.collegues, ITEMS.ecologie),
  parts: [
    {
      label: 'Micro-trottoir 1 · « Les animaux au bureau »',
      playCount: 1,
      readWindowS: 15,
      durationS: 58,
      text:
        'LA JOURNALISTE : Les animaux de compagnie sont-ils les bienvenus au bureau ?\n' +
        'PREMIÈRE PASSANTE : Alors moi, j’ai un chien et je l’emmène deux jours par semaine. Franchement, ' +
        'l’ambiance a changé : les gens se parlent, ils sortent marcher un peu à midi. Bon, je ne dis pas ' +
        'qu’il faut l’imposer partout, mais chez nous, ça marche.\n' +
        'DEUXIÈME PASSANT : Je suis allergique, donc pour moi la question est vite réglée. Et ce n’est pas ' +
        'un caprice : quand un collègue vient avec son chat, je prends un médicament ou je travaille de ' +
        'chez moi. Ce sont toujours les mêmes qui s’adaptent.\n' +
        'TROISIÈME PASSANTE : Au début, j’étais pour, sans hésiter. Euh, mais j’ai vu ce que ça donne dans ' +
        'un bureau ouvert : un chien qui aboie en pleine réunion avec un client… Donc oui, mais avec un ' +
        'espace à part et des règles écrites. Sinon, non.',
      items: [
        {
          q: 'Que constate la première passante ?',
          opts: [
            'Le chien a rendu les échanges entre collègues plus nombreux',
            'Les animaux devraient être autorisés dans toutes les entreprises',
            'Son chien lui permet de travailler plus vite',
          ],
          correct: 0,
          why: '« Les gens se parlent, ils sortent marcher un peu à midi. » Elle refuse explicitement de l’imposer partout.',
          band: 'b2',
        },
        {
          q: 'Quel est le reproche du deuxième passant ?',
          opts: [
            'Ce sont toujours les mêmes personnes qui doivent s’adapter',
            'Les animaux font trop de bruit pendant les réunions',
            'Les propriétaires ne surveillent pas assez leur animal',
          ],
          correct: 0,
          why: 'Allergique, il prend un médicament ou travaille chez lui : « Ce sont toujours les mêmes qui s’adaptent. » Le bruit est l’exemple de la troisième passante.',
          band: 'b2',
        },
        {
          q: 'Quelle est finalement la position de la troisième passante ?',
          opts: [
            'Elle accepte seulement avec un espace séparé et des règles',
            'Elle y est favorable sans aucune réserve',
            'Elle s’y oppose dans tous les cas',
          ],
          correct: 0,
          why: 'Elle était « pour, sans hésiter » au début, puis nuance : « oui, mais avec un espace à part et des règles écrites. Sinon, non. »',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Micro-trottoir 2 · « Payer ses déchets au poids »',
      playCount: 1,
      readWindowS: 15,
      durationS: 58,
      text:
        'LE JOURNALISTE : Certaines villes font payer la collecte des ordures au poids, pour pousser à ' +
        'mieux trier. Bonne idée ?\n' +
        'PREMIER PASSANT : Oui, et je le dis alors que je vais payer plus : on est cinq à la maison. Mais ' +
        'c’est logique, celui qui jette beaucoup paie beaucoup. Pour l’eau ou l’électricité, personne ne ' +
        'trouve ça bizarre.\n' +
        'DEUXIÈME PASSANTE : Le problème, c’est ce qui va finir dans le fossé. Là où ça a été essayé, on ' +
        'retrouve des sacs au bord des routes. Sans contrôles, ça récompense ceux qui trichent et ça ' +
        'punit ceux qui jouent le jeu.\n' +
        'TROISIÈME PASSANT : Moi je trouve ça bien… enfin, sur le papier. Parce qu’on ne paie pas que ce ' +
        'qu’on jette, on paie aussi ce qu’on achète : tous ces emballages, ce n’est pas moi qui les ' +
        'choisis. Faites d’abord payer les fabricants, et après on en reparle.',
      items: [
        {
          q: 'Quel argument le premier passant avance-t-il ?',
          opts: [
            'Payer selon ce qu’on jette est aussi logique que pour l’eau',
            'Les familles nombreuses devraient bénéficier d’un tarif réduit',
            'La collecte au poids lui fera faire des économies',
          ],
          correct: 0,
          why: '« Celui qui jette beaucoup paie beaucoup. Pour l’eau ou l’électricité, personne ne trouve ça bizarre. » Il dit lui-même qu’il paiera plus.',
          band: 'b2',
        },
        {
          q: 'Que craint la deuxième passante ?',
          opts: [
            'Que des déchets soient abandonnés en pleine nature',
            'Que la collecte devienne moins fréquente',
            'Que les tarifs augmentent chaque année',
          ],
          correct: 0,
          why: '« Ce qui va finir dans le fossé… on retrouve des sacs au bord des routes. »',
          band: 'b2',
        },
        {
          q: 'Que propose finalement le troisième passant ?',
          opts: [
            'Faire d’abord payer les fabricants d’emballages',
            'Appliquer le système dès maintenant, sans attendre',
            'Renoncer complètement à la collecte au poids',
          ],
          correct: 0,
          why: 'Favorable « sur le papier », il conditionne son accord : « Faites d’abord payer les fabricants, et après on en reparle. »',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block D — Chronique radio ═══════════════════════════════════════════ */
//
// SELF-VERIFY (D1–D2): figures invented and attributed to the invented Institut
// Calvène. Neither key is in the opening sentence.

export const CO_D: ExamTask = {
  ...base,
  id: taskId('co_mcq', '004'),
  level: 'b2',
  label: 'Section D',
  prompt: 'Vous allez entendre une chronique. Choisissez la bonne réponse.',
  timingS: 170,
  targetItemIds: uniq(ITEMS.bienEtre),
  parts: [
    {
      label: 'Chronique · la marche sur ordonnance',
      playCount: 1,
      readWindowS: 15,
      durationS: 62,
      text:
        'LE CHRONIQUEUR : Depuis deux ans, des médecins de famille de la région de Fréneuse remettent à ' +
        'leurs patients une ordonnance un peu particulière : trente minutes de marche, cinq jours par ' +
        'semaine. On sourit, et pourtant. L’Institut Calvène a suivi quatre cents patients ayant reçu ' +
        'cette prescription. Au bout d’un an, la moitié marchaient encore régulièrement, contre moins ' +
        'd’un quart dans le groupe à qui l’on avait simplement conseillé de bouger. La différence ne ' +
        'tient pas au conseil, qui est le même. Elle tient au papier. Une ordonnance, on la range avec ' +
        'les autres, on y repense, on en reparle au rendez-vous suivant. Un conseil, on l’oublie en ' +
        'sortant du cabinet. Attention toutefois à ne pas en faire une recette miracle : l’étude ne dit ' +
        'rien des personnes qui ne peuvent pas marcher longtemps, ni de celles qui vivent loin de tout ' +
        'trottoir praticable, surtout l’hiver. Prescrire la marche, c’est bien. S’assurer qu’on peut ' +
        'marcher là où l’on vit, c’est le travail qui reste à faire.',
      items: [
        {
          q: 'Selon le chroniqueur, qu’est-ce qui rend la prescription efficace ?',
          opts: [
            'Le fait que le conseil soit écrit sur une ordonnance',
            'Un programme de marche plus exigeant qu’un simple conseil',
            'Le suivi régulier des patients par un entraîneur',
            'Le choix de patients déjà habitués au sport',
          ],
          correct: 0,
          why: '« La différence ne tient pas au conseil, qui est le même. Elle tient au papier. »',
          band: 'b2',
        },
        {
          q: 'Quelle réserve le chroniqueur exprime-t-il ?',
          opts: [
            'Tout le monde ne peut pas marcher là où il vit',
            'L’étude porte sur un nombre trop faible de patients',
            'Les médecins prescrivent déjà la marche trop souvent',
            'Les effets de la prescription disparaissent après un an',
          ],
          correct: 0,
          why: 'L’étude « ne dit rien » de ceux qui ne peuvent pas marcher longtemps ou vivent loin d’un trottoir praticable : « s’assurer qu’on peut marcher là où l’on vit ».',
          band: 'b2',
        },
      ],
    },
  ],
};
