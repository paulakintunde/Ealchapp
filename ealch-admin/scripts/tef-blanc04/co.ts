// TEF Canada blanc-04 — Compréhension orale, blocks A to D.
//
//   A  4 · conversations avec dessins · 4 image options · 1 play
//   B  4 · annonces publiques         · 4 options · 1 play
//   C  6 · micros-trottoirs           · 3 options · 1 play   ← the only 3-option block
//   D  2 · chroniques radio           · 4 options · 1 play
//
// Blocks E, F and G are in co-efg.ts.
//
// Authored key-first; scatterKeys() places the key before the paper is written.
// Option length is a shipped rule: sets stay within 2.2x of each other in word
// count and the key is the longest no more than 30% of the time, both asserted
// in ../tef/paper-rules.ts.
//
// PROPER NOUNS: Roquelaure, Bellevance, Tournoy, La Chapelle-aux-Bois, Marnac.
// None are reused from blanc-01, blanc-02 or blanc-03.
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
// The images ARE the options. Each plate varies along ONE dimension, and the
// brief never names option letters: scatterKeys moves the key after authoring,
// so a brief claiming an order would be claiming one it cannot know.
//
// SELF-VERIFY (A1–A4): each key is named explicitly in the closing turn and no
// distractor is. Cover test passed on all four.

export const CO_A: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'a2',
  label: 'Section A',
  prompt: 'Vous allez entendre quatre courts échanges. Pour chaque échange, choisissez l’image qui correspond.',
  timingS: 200,
  targetItemIds: uniq(ITEMS.objets, ITEMS.corps, ITEMS.courses, ITEMS.vetements),
  parts: [
    {
      label: 'Échange 1 · chez le réparateur',
      playCount: 1,
      readWindowS: 10,
      durationS: 26,
      imageRef: 'img/exam/tef/blanc-04/co-a-01.png',
      imageAlt:
        'Planche de quatre panneaux : une roue de vélo, une chaîne de vélo, une selle, un guidon. ' +
        'Chaque pièce est photographiée seule, sur le même fond neutre et au même cadrage. ' +
        'Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LE CLIENT : Bonjour. Mon vélo fait un bruit bizarre quand je pédale. Ce serait pour samedi.\n' +
        'LE RÉPARATEUR : Voyons… La roue est droite, la selle tient bien. C’est la chaîne, elle est ' +
        'détendue. Le guidon, lui, il ne bouge pas.\n' +
        'LE CLIENT : Vous pouvez la changer avant samedi ?\n' +
        'LE RÉPARATEUR : La chaîne, oui, j’en ai en stock.',
      items: [
        {
          q: 'Quelle pièce le réparateur va-t-il changer ?',
          opts: ['La chaîne', 'La roue', 'La selle', 'Le guidon'],
          correct: 0,
          why: 'Il écarte la roue, la selle et le guidon, et identifie la chaîne détendue, qu’il a en stock.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 2 · chez l’opticienne',
      playCount: 1,
      readWindowS: 10,
      durationS: 25,
      imageRef: 'img/exam/tef/blanc-04/co-a-02.png',
      imageAlt:
        'Planche de quatre panneaux : une paire de lunettes vue de face, un étui à lunettes, un ' +
        'chiffon de nettoyage, un cordon de lunettes. Objets isolés sur fond clair, à la même échelle ' +
        'apparente. Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA CLIENTE : Elles glissent tout le temps, elles descendent sur le nez.\n' +
        'L’OPTICIENNE : Je vous les resserre derrière l’oreille, ça suffit en général. Vous voulez aussi ' +
        'un cordon ?\n' +
        'LA CLIENTE : Non, non. Juste qu’elles tiennent.\n' +
        'L’OPTICIENNE : Alors je règle les branches, deux minutes.',
      items: [
        {
          q: 'Que fait l’opticienne pour la cliente ?',
          opts: [
            'Elle règle les branches des lunettes',
            'Elle lui vend un cordon de lunettes',
            'Elle lui offre un chiffon de nettoyage',
            'Elle lui propose un nouvel étui',
          ],
          correct: 0,
          why: 'La cliente refuse le cordon ; l’opticienne resserre les branches, « deux minutes ».',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 3 · au supermarché',
      playCount: 1,
      readWindowS: 10,
      durationS: 24,
      imageRef: 'img/exam/tef/blanc-04/co-a-03.png',
      imageAlt:
        'Planche de quatre panneaux : une pièce de un euro, un jeton en plastique, une carte de ' +
        'fidélité, un billet de banque. Chaque objet est isolé sur fond neutre, au même cadrage. ' +
        'Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LE CLIENT : Excusez-moi, le chariot ne se débloque pas et ma pièce est restée dedans.\n' +
        'L’EMPLOYÉE : Une pièce de un euro ? Il faut parfois la pousser à fond.\n' +
        'LE CLIENT : J’ai essayé. Elle ne ressort pas.\n' +
        'L’EMPLOYÉE : Bon, je vous en rends une à l’accueil. Gardez plutôt un jeton la prochaine fois.',
      items: [
        {
          q: 'Qu’est-ce qui est resté bloqué dans le chariot ?',
          opts: ['Une pièce de un euro', 'Un jeton en plastique', 'Une carte de fidélité', 'Un billet de banque'],
          correct: 0,
          why: 'L’employée nomme « une pièce de un euro » et propose de la rembourser ; le jeton n’est qu’un conseil pour la prochaine fois.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Échange 4 · au comptoir des échanges',
      playCount: 1,
      readWindowS: 10,
      durationS: 27,
      imageRef: 'img/exam/tef/blanc-04/co-a-04.png',
      imageAlt:
        'Planche de quatre panneaux : un pull en laine, une chemise, un pantalon, une veste. Chaque ' +
        'vêtement est photographié à plat, sur le même fond clair et au même cadrage. ' +
        'Les quatre panneaux montrent les quatre options proposées, sans ordre imposé.',
      text:
        'LA CLIENTE : Je l’ai lavé une fois, à trente degrés, et il a rétréci de deux tailles.\n' +
        'LE VENDEUR : C’est le pull ? Ou la chemise ?\n' +
        'LA CLIENTE : Le pull. La chemise n’a rien, elle.\n' +
        'LE VENDEUR : D’accord. Avec le ticket, je vous l’échange.',
      items: [
        {
          q: 'Quel vêtement la cliente fait-elle échanger ?',
          opts: ['Le pull en laine', 'La chemise à rayures', 'Le pantalon', 'La veste'],
          correct: 0,
          why: 'Le vendeur hésite entre le pull et la chemise ; la cliente précise « le pull », et que la chemise n’a rien.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ Block B — Annonces publiques ════════════════════════════════════════ */
//
// One speaker, and the answer is a condition stated once. The B1 difficulty is
// the density of exceptions, not the vocabulary.
//
// SELF-VERIFY (B1–B4): every key is stated in its own announcement, and no
// distractor is stated anywhere.

export const CO_B: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Vous allez entendre quatre annonces. Pour chaque annonce, choisissez la bonne réponse.',
  timingS: 240,
  targetItemIds: uniq(ITEMS.animauxDomestiques, ITEMS.ecole, ITEMS.sportsEtLoisirs, ITEMS.transportsQuotidiens),
  parts: [
    {
      label: 'Annonce 1 · le parc canin',
      playCount: 1,
      readWindowS: 12,
      durationS: 37,
      text:
        'L’AGENT : Rappel du règlement du parc canin de Roquelaure. L’espace clos est réservé aux chiens ' +
        'tenus en laisse jusqu’à l’entrée, puis détachés à l’intérieur seulement. Les chiens de moins de ' +
        'six mois n’y sont pas admis, pour leur propre sécurité. Chaque maître reste responsable de son ' +
        'animal et ramasse derrière lui : des sacs sont à disposition à l’entrée. Le parc ferme à la ' +
        'tombée de la nuit et n’est pas éclairé.',
      items: [
        {
          q: 'Quels chiens ne sont pas admis dans le parc ?',
          opts: [
            'Les chiens de moins de six mois',
            'Les chiens qui ne sont pas tenus en laisse',
            'Les chiens dont le maître n’a pas de sac',
            'Les chiens arrivés après la tombée de la nuit',
          ],
          correct: 0,
          why: '« Les chiens de moins de six mois n’y sont pas admis, pour leur propre sécurité. » La laisse et les sacs sont des obligations, pas des exclusions.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 2 · la bibliothèque',
      playCount: 1,
      readWindowS: 12,
      durationS: 35,
      text:
        'LA BIBLIOTHÉCAIRE : Chers lecteurs, la bibliothèque de Bellevance fermera du 12 au 16 mai pour ' +
        'son inventaire annuel. Pendant cette semaine, les retours restent possibles par la boîte ' +
        'extérieure, mais aucun emprunt n’est enregistré. Les documents dont la date de retour tombe ' +
        'pendant la fermeture ne comptent aucun retard : le compteur reprend le 17. La réservation en ' +
        'ligne, elle, fonctionne normalement.',
      items: [
        {
          q: 'Que se passe-t-il pour un livre à rendre le 14 mai ?',
          opts: [
            'Aucun retard n’est compté avant le 17 mai',
            'Un retard est compté à partir du 15 mai',
            'Le livre doit être rendu avant le 12 mai',
            'La réservation en ligne est suspendue',
          ],
          correct: 0,
          why: '« Les documents dont la date de retour tombe pendant la fermeture ne comptent aucun retard : le compteur reprend le 17. »',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 3 · la piscine',
      playCount: 1,
      readWindowS: 12,
      durationS: 38,
      text:
        'LE MAÎTRE-NAGEUR : Votre attention. Rappel de deux points du règlement, parce qu’ils reviennent ' +
        'souvent. Le bonnet est obligatoire pour tout le monde, y compris pour les cheveux courts : ' +
        'c’est une question de filtres, pas d’esthétique. Et les couloirs du fond sont réservés à la ' +
        'nage rapide ; si vous nagez tranquillement, prenez les couloirs du bord. Le bassin ferme ' +
        'trente minutes avant la fermeture de l’établissement.',
      items: [
        {
          q: 'Pourquoi le bonnet est-il obligatoire ?',
          opts: [
            'Pour préserver les filtres du bassin',
            'Pour identifier les nageurs rapides',
            'Pour des raisons d’esthétique et de tenue',
            'Pour protéger les cheveux du chlore',
          ],
          correct: 0,
          why: '« C’est une question de filtres, pas d’esthétique. »',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Annonce 4 · le prêt de vélos',
      playCount: 1,
      readWindowS: 12,
      durationS: 40,
      text:
        'LA VOIX : La commune de Tournoy prête des vélos à assistance électrique pour un mois, afin de ' +
        'tester le trajet domicile-travail. Le prêt est gratuit ; une caution de deux cents euros est ' +
        'demandée, restituée au retour du vélo. Attention à la condition principale : il faut habiter ou ' +
        'travailler dans la commune, et s’engager à remplir un court questionnaire à la fin du mois. ' +
        'Sans ce questionnaire, la caution reste bloquée. Douze vélos, cent trente demandes l’an dernier.',
      items: [
        {
          q: 'À quelle condition la caution est-elle restituée ?',
          opts: [
            'Le vélo est rendu et le questionnaire rempli',
            'Le vélo est rendu avant la fin du mois',
            'L’emprunteur habite bien la commune',
            'L’emprunteur a utilisé le vélo pour aller travailler',
          ],
          correct: 0,
          why: 'La caution est « restituée au retour du vélo », mais « sans ce questionnaire, la caution reste bloquée » : les deux conditions se cumulent.',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block C — Micros-trottoirs ══════════════════════════════════════════ */
//
// THE ONLY THREE-OPTION BLOCK. Three speakers per document, one question each:
// the task is telling three people apart.
//
// ROUTING: micro-trottoir 1 sits on `musique`, which carries nothing above A2,
// so this block routes to `questions-sociales` and `ethique` — both B2 — rather
// than sending a B2 miss to A2 vocabulary. See common.ts.
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
  targetItemIds: uniq(ITEMS.questionsSociales, ITEMS.ethique),
  parts: [
    {
      label: 'Micro-trottoir 1 · « La salle de concert et le bruit »',
      playCount: 1,
      readWindowS: 15,
      durationS: 96,
      text:
        'LA JOURNALISTE : Une salle de concert de quartier risque la fermeture après des plaintes pour ' +
        'bruit. Qu’en pensez-vous ?\n' +
        'PREMIER PASSANT : La salle était là avant les immeubles. Ça, personne ne le dit. On construit ' +
        'des logements à trente mètres d’une salle qui existe depuis vingt ans, et ensuite on demande à ' +
        'la salle de se taire. L’ordre d’arrivée, ça compte.\n' +
        'DEUXIÈME PASSANTE : Alors moi j’habite en face, et je vais vous surprendre : le problème n’est ' +
        'pas le concert. Le concert finit à vingt-trois heures. C’est après, dehors, quand les gens ' +
        'discutent sur le trottoir pendant une heure. Ce n’est pas la musique, c’est la sortie.\n' +
        'TROISIÈME PASSANT : Franchement, il y a des solutions techniques et personne ne les regarde. ' +
        'Un sas d’entrée, un double vitrage, un agent qui fait circuler à la fin. Ça coûte, oui. Mais ' +
        'moins cher que de fermer une salle et de la remplacer par rien.',
      items: [
        {
          q: 'Quel argument le premier passant avance-t-il ?',
          opts: [
            'La salle existait avant les immeubles construits autour',
            'Les concerts se terminent trop tard dans la soirée',
            'Les habitants n’ont pas été consultés sur le projet',
          ],
          correct: 0,
          why: '« La salle était là avant les immeubles… L’ordre d’arrivée, ça compte. »',
          band: 'b2',
        },
        {
          q: 'Que dit la deuxième passante de la gêne réelle ?',
          opts: [
            'Elle vient des conversations sur le trottoir après le concert',
            'Elle vient du volume de la musique pendant le concert',
            'Elle vient des livraisons faites tôt le matin',
          ],
          correct: 0,
          why: '« Le concert finit à vingt-trois heures. C’est après, dehors… Ce n’est pas la musique, c’est la sortie. »',
          band: 'b2',
        },
        {
          q: 'Que propose le troisième passant ?',
          opts: [
            'Des aménagements techniques plutôt qu’une fermeture',
            'Un déménagement de la salle hors du quartier',
            'Une réduction du nombre de concerts par mois',
          ],
          correct: 0,
          why: 'Il énumère sas, double vitrage et agent de sortie, et conclut que cela coûte « moins cher que de fermer une salle ».',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Micro-trottoir 2 · « La publicité destinée aux enfants »',
      playCount: 1,
      readWindowS: 15,
      durationS: 100,
      text:
        'LE JOURNALISTE : Faut-il encadrer la publicité qui vise les enfants ?\n' +
        'PREMIÈRE PASSANTE : Oui, mais pas comme on le fait. On interdit à la télévision, et tout est ' +
        'parti ailleurs, sur les écrans que les parents ne regardent pas. On a déplacé le problème et on ' +
        'a coché une case. Si on encadre, on encadre partout, ou on ne fait rien.\n' +
        'DEUXIÈME PASSANT : Bon, moi je trouve qu’on charge beaucoup la publicité. Un enfant, ce qui le ' +
        'forme, c’est ce qui se passe à table, pas trente secondes de dessin animé. Je ne dis pas que ' +
        'c’est neutre, hein. Je dis que ce n’est pas le levier principal.\n' +
        'TROISIÈME PASSANTE : Moi ce qui me gêne, c’est qu’on parle aux enfants pour qu’ils parlent aux ' +
        'parents. La publicité ne leur vend rien, ils n’ont pas d’argent. Elle s’en sert pour atteindre ' +
        'le porte-monnaie de la maison. C’est ça qu’il faudrait nommer.',
      items: [
        {
          q: 'Quelle critique la première passante fait-elle des règles actuelles ?',
          opts: [
            'Elles ont déplacé la publicité au lieu de la réduire',
            'Elles sont trop strictes pour les chaînes de télévision',
            'Elles ne sont pas appliquées faute de contrôles',
          ],
          correct: 0,
          why: '« On interdit à la télévision, et tout est parti ailleurs… On a déplacé le problème et on a coché une case. »',
          band: 'b2',
        },
        {
          q: 'Quelle est la position du deuxième passant ?',
          opts: [
            'La publicité compte, mais elle n’est pas le facteur principal',
            'La publicité destinée aux enfants est totalement inoffensive',
            'La publicité devrait être interdite sur tous les écrans',
          ],
          correct: 0,
          why: '« Je ne dis pas que c’est neutre, hein. Je dis que ce n’est pas le levier principal. »',
          band: 'b2',
        },
        {
          q: 'Qu’est-ce qui gêne la troisième passante ?',
          opts: [
            'La publicité passe par l’enfant pour atteindre les parents',
            'La publicité vend des produits trop chers aux enfants',
            'La publicité occupe trop de temps dans les programmes',
          ],
          correct: 0,
          why: '« La publicité ne leur vend rien, ils n’ont pas d’argent. Elle s’en sert pour atteindre le porte-monnaie de la maison. »',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block D — Chronique radio ═══════════════════════════════════════════ */
//
// The chronicler reports two explanations and rates them differently; a
// candidate who hears only the first answers the second question wrong.
//
// ROUTING: `la-ville` carries nothing above A2, so this B2 block routes to
// `hebergement`, which does and which suits a chronicle on empty housing.
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
  targetItemIds: uniq(ITEMS.hebergement),
  parts: [
    {
      label: 'Chronique · les logements vides des centres-villes',
      playCount: 1,
      readWindowS: 15,
      durationS: 110,
      text:
        'LA CHRONIQUEUSE : Dans beaucoup de centres anciens, un logement sur dix est vide. On explique ' +
        'généralement cela par la spéculation : des propriétaires qui attendent que les prix montent. ' +
        'C’est vrai dans les grandes villes tendues. Ailleurs, l’observatoire de Marnac, qui a enquêté ' +
        'sur quatre cents logements vacants dans des communes moyennes, trouve tout autre chose. Dans ' +
        'près de six cas sur dix, le logement est vide parce qu’il est inhabitable en l’état et que le ' +
        'propriétaire n’a pas les moyens de le remettre aux normes. Le coût moyen des travaux dépasse ' +
        'la valeur du bien une fois rénové. Autrement dit, la personne n’attend pas, elle est coincée. ' +
        'Et une taxe sur la vacance, qui marche là où il y a spéculation, ne fait ici qu’ajouter une ' +
        'charge à quelqu’un qui ne peut déjà pas payer.',
      items: [
        {
          q: 'Que trouve l’enquête dans les communes moyennes ?',
          opts: [
            'Le logement est le plus souvent vide parce qu’il est inhabitable',
            'Les propriétaires attendent une hausse des prix pour vendre',
            'Les logements vacants y sont beaucoup plus rares qu’ailleurs',
            'La taxe sur la vacance y a fait baisser le nombre de vides',
          ],
          correct: 0,
          why: '« Dans près de six cas sur dix, le logement est vide parce qu’il est inhabitable en l’état. » La spéculation vaut pour les grandes villes tendues.',
          band: 'b2',
        },
        {
          q: 'Quelle conclusion la chroniqueuse tire-t-elle sur la taxe ?',
          opts: [
            'Elle ajoute une charge à des propriétaires déjà sans moyens',
            'Elle constitue le seul outil vraiment efficace',
            'Elle devrait être étendue à toutes les grandes villes tendues',
            'Elle finance la remise aux normes des logements',
          ],
          correct: 0,
          why: '« Une taxe sur la vacance, qui marche là où il y a spéculation, ne fait ici qu’ajouter une charge à quelqu’un qui ne peut déjà pas payer. »',
          band: 'b2',
        },
      ],
    },
  ],
};
