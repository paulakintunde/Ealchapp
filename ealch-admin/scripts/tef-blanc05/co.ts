// TEF Canada blanc-05 — Compréhension orale, blocks A to D.
//
//   A  4 · conversations avec dessins · 4 image options · 1 play
//   B  4 · annonces publiques         · 4 options · 1 play
//   C  6 · micros-trottoirs           · 3 options · 1 play   ← the only 3-option block
//   D  2 · chroniques radio           · 4 options · 1 play
//
// Blocks E, F and G are in co-efg.ts.
//
// Authored key-first; scatterKeys() places the key before the paper is written.
// Option length is a shipped rule: within 2.2x in word count, key longest no
// more than 30% of the time, both asserted in ../tef/paper-rules.ts.
//
// PROPER NOUNS: Fontenay-le-Vieux, Sarlanges, Dourvin, Le Poirier, Chastel.
// None are reused from any earlier paper.
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
// The images ARE the options; each plate varies along ONE dimension, and no
// brief names option letters, because scatterKeys moves the key afterwards.
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
  targetItemIds: uniq(ITEMS.maison, ITEMS.corps, ITEMS.courses, ITEMS.bricolage),
  parts: [
    {
      label: 'Échange 1 · au point de collecte',
      playCount: 1,
      readWindowS: 10,
      durationS: 25,
      imageRef: 'img/exam/tef/blanc-05/co-a-01.png',
      imageAlt:
        'Planche de quatre panneaux : une bouteille de gaz, un bidon d’huile, un extincteur, une ' +
        'bonbonne d’eau. Chaque objet est isolé sur le même fond neutre, au même cadrage et à la même ' +
        'échelle apparente. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LE CLIENT : Bonjour, je viens rapporter ça, c’est consigné je crois.\n' +
        'L’EMPLOYÉ : L’huile, non, ça se rapporte en déchetterie. L’extincteur non plus.\n' +
        'LE CLIENT : Non, non, la bouteille de gaz. Elle est vide.\n' +
        'L’EMPLOYÉ : Ah oui, la bouteille de gaz, elle est consignée. Je vous rends les trente euros.',
      items: [
        {
          q: 'Qu’est-ce que le client rapporte ?',
          opts: ['Une bouteille de gaz', 'Un bidon d’huile', 'Un extincteur', 'Une bonbonne d’eau'],
          correct: 0,
          why: 'L’employé écarte l’huile et l’extincteur ; le client précise « la bouteille de gaz », et la consigne de trente euros lui est rendue.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 2 · chez l’opticien',
      playCount: 1,
      readWindowS: 10,
      durationS: 24,
      imageRef: 'img/exam/tef/blanc-05/co-a-02.png',
      imageAlt:
        'Planche de quatre panneaux : une paire de lunettes de vue, une paire de lunettes de soleil, ' +
        'un étui rigide, un flacon de produit nettoyant. Objets isolés sur fond clair, au même ' +
        'cadrage. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA CLIENTE : Bonjour, j’ai un message qui dit que ma commande est prête.\n' +
        'L’OPTICIEN : À quel nom ? … Voilà. Les lunettes de vue, montées hier.\n' +
        'LA CLIENTE : Et les solaires, elles étaient dans la même commande, non ?\n' +
        'L’OPTICIEN : Non, celles-là arrivent la semaine prochaine. Aujourd’hui, c’est les lunettes de vue.',
      items: [
        {
          q: 'Que la cliente vient-elle retirer aujourd’hui ?',
          opts: [
            'Une paire de lunettes de vue',
            'Une paire de lunettes de soleil',
            'Un étui rigide à lunettes',
            'Un flacon de produit nettoyant',
          ],
          correct: 0,
          why: 'L’opticien annonce les lunettes de vue « montées hier » et précise que les solaires arrivent la semaine suivante.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 3 · au comptoir des retours',
      playCount: 1,
      readWindowS: 10,
      durationS: 26,
      imageRef: 'img/exam/tef/blanc-05/co-a-03.png',
      imageAlt:
        'Planche de quatre panneaux : un colis fermé avec une étiquette, un sac cabas, une enveloppe ' +
        'cartonnée, une caisse en bois. Chaque objet est photographié seul, sur le même fond neutre. ' +
        'Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA CLIENTE : Je dois renvoyer un article. On m’a dit de venir ici.\n' +
        'L’EMPLOYÉ : Vous avez l’étiquette de retour ?\n' +
        'LA CLIENTE : Oui, elle est collée sur le colis d’origine. J’ai gardé le carton exprès.\n' +
        'L’EMPLOYÉ : Parfait, c’est ce qu’il faut. Je vous donne le reçu de dépôt.',
      items: [
        {
          q: 'Qu’est-ce que la cliente dépose ?',
          opts: [
            'Le colis d’origine, avec son étiquette de retour',
            'Un sac cabas contenant l’article',
            'Une enveloppe cartonnée fermée',
            'Une caisse en bois fournie par le magasin',
          ],
          correct: 0,
          why: '« Elle est collée sur le colis d’origine. J’ai gardé le carton exprès », et l’employé confirme que c’est ce qu’il faut.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 4 · au magasin de bricolage',
      playCount: 1,
      readWindowS: 10,
      durationS: 27,
      imageRef: 'img/exam/tef/blanc-05/co-a-04.png',
      imageAlt:
        'Planche de quatre panneaux : un pot de peinture blanche, un pot de peinture beige, un pot de ' +
        'peinture grise, un pot de peinture bleue. Même pot, même cadrage, même fond : seule la ' +
        'couleur change. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LE CLIENT : J’ai pris ce beige la semaine dernière et ce n’est pas la bonne teinte.\n' +
        'LA VENDEUSE : Vous vouliez du blanc ?\n' +
        'LE CLIENT : Non. Du gris, comme l’échantillon. Le beige, c’est une erreur de ma part.\n' +
        'LA VENDEUSE : Bon, je vous refais le pot en gris, c’est la même base.',
      items: [
        {
          q: 'Quelle teinte le client veut-il finalement ?',
          opts: ['Du gris', 'Du beige', 'Du blanc', 'Du bleu'],
          correct: 0,
          why: 'La vendeuse propose le blanc ; le client corrige : « du gris, comme l’échantillon », le beige étant son erreur.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ Block B — Annonces publiques ════════════════════════════════════════ */
//
// SELF-VERIFY (B1–B4): every key is stated once in its own announcement, and no
// distractor is stated anywhere.

export const CO_B: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Vous allez entendre quatre annonces. Pour chaque annonce, choisissez la bonne réponse.',
  timingS: 240,
  targetItemIds: uniq(ITEMS.animauxDomestiques, ITEMS.ecologie, ITEMS.gouvernement, ITEMS.voisinage),
  parts: [
    {
      label: 'Annonce 1 · la vaccination des animaux',
      playCount: 1,
      readWindowS: 12,
      durationS: 36,
      text:
        'LA VÉTÉRINAIRE : Avis aux habitants de Sarlanges. Une séance de vaccination est organisée samedi ' +
        'matin, de neuf heures à midi, salle des fêtes. Chiens et chats uniquement ; les chiens en ' +
        'laisse, les chats en caisse de transport, sans exception. Apportez le carnet de santé : sans ' +
        'lui, nous ne pouvons pas vacciner, faute de connaître les rappels. Le tarif est de douze euros ' +
        'par animal, réglé sur place.',
      items: [
        {
          q: 'Pourquoi le carnet de santé est-il indispensable ?',
          opts: [
            'Sans lui, les rappels déjà faits sont inconnus',
            'Il sert de justificatif pour le tarif réduit',
            'Il remplace l’inscription préalable en mairie',
            'Il est exigé pour entrer dans la salle des fêtes',
          ],
          correct: 0,
          why: '« Sans lui, nous ne pouvons pas vacciner, faute de connaître les rappels. »',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 2 · la collecte des déchets',
      playCount: 1,
      readWindowS: 12,
      durationS: 38,
      text:
        'LA VOIX : Changement de jour de collecte à compter du 1er septembre. Les bacs gris passent le ' +
        'mardi, et non plus le lundi ; les bacs jaunes passent le vendredi, comme avant. Sortez les bacs ' +
        'la veille au soir et rentrez-les avant midi le lendemain. Un bac laissé sur le trottoir en ' +
        'dehors de ces créneaux peut faire l’objet d’un rappel. En cas de jour férié, la collecte est ' +
        'décalée au lendemain.',
      items: [
        {
          q: 'Qu’est-ce qui change au 1er septembre ?',
          opts: [
            'Le jour de collecte des bacs gris seulement',
            'Le jour de collecte des bacs gris et des bacs jaunes',
            'L’heure à laquelle il faut sortir les bacs',
            'Le nombre de collectes par semaine',
          ],
          correct: 0,
          why: '« Les bacs gris passent le mardi, et non plus le lundi ; les bacs jaunes passent le vendredi, comme avant. »',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 3 · le test des sirènes',
      playCount: 1,
      readWindowS: 12,
      durationS: 35,
      text:
        'L’AGENT : Rappel à la population de Dourvin. Le test mensuel des sirènes a lieu le premier ' +
        'mercredi de chaque mois, à midi. Ce n’est pas une alerte : aucune consigne ne s’applique et il ' +
        'est inutile d’appeler les secours. Le signal de test dure une minute quarante et une seule ' +
        'fois. Une vraie alerte, elle, se reconnaît à trois cycles successifs. Retenez cela : une fois, ' +
        'c’est un test ; trois fois, c’est une alerte.',
      items: [
        {
          q: 'Comment reconnaît-on une vraie alerte ?',
          opts: [
            'Le signal se répète trois fois de suite',
            'Le signal dure plus d’une minute quarante',
            'Le signal retentit un mercredi à midi',
            'Le signal est suivi d’un message parlé',
          ],
          correct: 0,
          why: '« Une vraie alerte se reconnaît à trois cycles successifs… une fois, c’est un test ; trois fois, c’est une alerte. »',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 4 · la dératisation',
      playCount: 1,
      readWindowS: 12,
      durationS: 39,
      text:
        'LE GARDIEN : Information importante pour le quartier du Poirier. Une campagne de dératisation ' +
        'commence lundi et dure trois semaines. Des appâts sont posés dans les caves et les locaux ' +
        'techniques, jamais dans les parties habitées. Tenez les animaux domestiques à l’écart des ' +
        'caves pendant toute la durée. Et surtout : ne sortez pas vos sacs poubelle en dehors des ' +
        'conteneurs, c’est ce qui entretient le problème. Un conteneur mal fermé annule le traitement.',
      items: [
        {
          q: 'Que demande-t-on principalement aux résidents ?',
          opts: [
            'De déposer les sacs dans les conteneurs, bien fermés',
            'De vider entièrement leurs caves avant lundi',
            'De garder leurs animaux enfermés trois semaines',
            'De signaler à la loge tout appât déplacé',
          ],
          correct: 0,
          why: '« Ne sortez pas vos sacs poubelle en dehors des conteneurs, c’est ce qui entretient le problème. Un conteneur mal fermé annule le traitement. » Les animaux doivent seulement être tenus à l’écart des caves.',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block C — Micros-trottoirs ══════════════════════════════════════════ */
//
// THE ONLY THREE-OPTION BLOCK. Three speakers per document, one question each.
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
  targetItemIds: uniq(ITEMS.questionsSociales, ITEMS.matieres),
  parts: [
    {
      label: 'Micro-trottoir 1 · « Les livraisons du soir »',
      playCount: 1,
      readWindowS: 15,
      durationS: 97,
      text:
        'LA JOURNALISTE : Les livraisons se font de plus en plus tard le soir. Qu’en pensez-vous ?\n' +
        'PREMIER PASSANT : Moi je commande, donc je serais malvenu de me plaindre. Mais regardons ' +
        'qui paie vraiment le confort : c’est le livreur qui roule à vingt-deux heures, pas moi. Si on veut ' +
        'que ça continue, il faut que ce soit payé comme du travail de nuit. Sinon on se ment.\n' +
        'DEUXIÈME PASSANTE : Ce qui me gêne, ce n’est pas l’heure, c’est le bruit. Les camionnettes se ' +
        'garent en double file, portière, hayon, sonnette. Trois minutes, mais quinze fois par soir. ' +
        'Un point de retrait au bout de la rue réglerait ça en une semaine.\n' +
        'TROISIÈME PASSANT : Alors moi je vais dire l’inverse de ce qu’on entend. Sans livraison le ' +
        'soir, ma mère, qui ne conduit plus, ne reçoit rien. On parle de confort, mais pour certains ' +
        'c’est le seul accès. Il faut encadrer, pas supprimer.',
      items: [
        {
          q: 'Quelle est la position du premier passant ?',
          opts: [
            'Le service peut continuer s’il est payé comme du travail de nuit',
            'Les livraisons du soir devraient être purement interdites',
            'Les clients qui commandent tard le soir devraient payer nettement plus cher',
          ],
          correct: 0,
          why: '« Si on veut que ça continue, il faut que ce soit payé comme du travail de nuit. »',
          band: 'b2',
        },
        {
          q: 'Qu’est-ce qui gêne la deuxième passante ?',
          opts: [
            'Le bruit répété des camionnettes, plus que l’heure',
            'L’heure tardive à laquelle les livreurs sonnent',
            'Le nombre de colis abandonnés dans l’entrée',
          ],
          correct: 0,
          why: '« Ce qui me gêne, ce n’est pas l’heure, c’est le bruit… trois minutes, mais quinze fois par soir. »',
          band: 'b2',
        },
        {
          q: 'Quel argument le troisième passant apporte-t-il ?',
          opts: [
            'Pour certaines personnes, la livraison est le seul accès',
            'Les livraisons du soir coûtent moins cher aux commerçants',
            'Les points de retrait sont trop éloignés des habitations',
          ],
          correct: 0,
          why: 'Il cite sa mère, qui ne conduit plus : « on parle de confort, mais pour certains c’est le seul accès ».',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Micro-trottoir 2 · « Apprendre à cuisiner à l’école »',
      playCount: 1,
      readWindowS: 15,
      durationS: 99,
      text:
        'LE JOURNALISTE : Faut-il enseigner la cuisine à l’école ?\n' +
        'PREMIÈRE PASSANTE : Oui, et pas comme une activité du vendredi après-midi. Comme une matière, ' +
        'avec des heures et une progression. Parce que là, on fait un atelier crêpes une fois par an et ' +
        'on dit qu’on a fait quelque chose. Ce n’est pas sérieux.\n' +
        'DEUXIÈME PASSANT : Bon, moi je suis d’accord sur le principe, mais je pose la question bête : ' +
        'on enlève quoi ? Les journées sont pleines. Si c’est en plus, ça ne tiendra pas ; si c’est à la ' +
        'place de quelque chose, il faut dire à la place de quoi.\n' +
        'TROISIÈME PASSANTE : Euh, moi ce qui me frappe, c’est qu’on parle de cuisine et jamais de ' +
        'courses. Savoir faire un gratin, très bien. Mais savoir lire une étiquette, comparer deux prix ' +
        'au kilo, ça sert tous les jours et ça ne s’apprend nulle part.',
      items: [
        {
          q: 'Que demande la première passante ?',
          opts: [
            'Que la cuisine soit une matière, avec heures et progression',
            'Que les ateliers crêpes soient organisés plus souvent',
            'Que les repas de cantine soient préparés par les élèves',
          ],
          correct: 0,
          why: '« Comme une matière, avec des heures et une progression », par opposition à l’atelier annuel.',
          band: 'b2',
        },
        {
          q: 'Quelle objection le deuxième passant soulève-t-il ?',
          opts: [
            'Il faut dire ce qu’on retire pour faire de la place',
            'Les enseignants ne sont pas suffisamment formés à la cuisine',
            'Les cuisines scolaires ne sont pas équipées pour cela',
          ],
          correct: 0,
          why: '« On enlève quoi ? … Si c’est à la place de quelque chose, il faut dire à la place de quoi. »',
          band: 'b2',
        },
        {
          q: 'Que manque-t-il, selon la troisième passante ?',
          opts: [
            'Un apprentissage des courses et de la lecture des étiquettes',
            'Un enseignement de la nutrition et de l’équilibre alimentaire',
            'Une formation des familles en plus de celle des élèves',
          ],
          correct: 0,
          why: '« On parle de cuisine et jamais de courses… savoir lire une étiquette, comparer deux prix au kilo. »',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block D — Chronique radio ═══════════════════════════════════════════ */
//
// SELF-VERIFY (D1–D2): figures invented and attributed to an invented
// observatory. Neither key is in the opening sentence.

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
      label: 'Chronique · les démissions dans l’hôtellerie',
      playCount: 1,
      readWindowS: 15,
      durationS: 106,
      text:
        'LA CHRONIQUEUSE : On répète que l’hôtellerie ne recrute plus parce que les salaires y sont bas. ' +
        'C’est vrai, et ce n’est pas la première explication que donnent les intéressés. L’observatoire ' +
        'de Chastel a interrogé six cents personnes ayant quitté le secteur en deux ans. Le salaire ' +
        'arrive en troisième position. Devant lui : l’imprévisibilité des plannings, communiqués parfois ' +
        'la veille, et l’absence de week-ends communs avec l’entourage. Autrement dit, ce n’est pas ' +
        'seulement combien on gagne, c’est quand on travaille. Et cela change ce qu’il faut corriger : ' +
        'une prime de dix pour cent ne rend pas un samedi soir à quelqu’un. Les établissements qui ont ' +
        'fixé les plannings un mois à l’avance rapportent, eux, une baisse nette des départs, sans ' +
        'avoir touché aux salaires. Trois d’entre eux ont même vu revenir d’anciens employés, ce ' +
        'qu’aucune revalorisation n’avait obtenu jusque-là.',
      items: [
        {
          q: 'Que révèle l’enquête sur les motifs de départ ?',
          opts: [
            'Le salaire n’arrive qu’en troisième position',
            'Le salaire est de loin le premier motif cité',
            'Les départs sont surtout liés à la charge physique',
            'Les motifs varient trop pour être classés',
          ],
          correct: 0,
          why: '« Le salaire arrive en troisième position », derrière l’imprévisibilité des plannings et l’absence de week-ends communs.',
          band: 'b2',
        },
        {
          q: 'Qu’observent les établissements qui ont fixé les plannings à l’avance ?',
          opts: [
            'Une baisse des départs, sans hausse des salaires',
            'Une baisse des départs, mais au prix d’une prime',
            'Aucun effet mesurable sur les départs',
            'Une hausse des candidatures et des salaires',
          ],
          correct: 0,
          why: '« Une baisse nette des départs, sans avoir touché aux salaires. »',
          band: 'b2',
        },
      ],
    },
  ],
};
