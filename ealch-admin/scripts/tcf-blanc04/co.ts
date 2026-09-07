// TCF Canada blanc-04 — Compréhension orale, the lower slope (A1, A2, B1).
//
// One task per BAND, so a miss routes to material at the band it happened. The
// upper slope is in co-hi.ts and MUST follow this file in the array — order is
// the instrument here.
//
// Band characters, from TOPICS-tcf-canada:
//   A1  concrete, literal, one fact, stated once plainly
//   A2  still literal, but one competing fact must be ignored
//   B1  two facts held together, or one tracked across a turn change
//
// Sized to the MIDDLE of each envelope rather than its floor: at the band's
// target rate, roughly 28 words at A1, 50 at A2, 93 at B1. Writing to the floor
// meant nine documents needed extending on blanc-02 and seven on blanc-03,
// every one of them found by measurement after the fact.
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, VARIANT, FORMAT_VERSION, NOTES_CLOSED, taskId, uniq, ITEMS } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  formatVersion: FORMAT_VERSION,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ A1 — positions 1 to 3 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: each answer is said once, in plain words, and no distractor is
// mentioned in the audio at all.

export const CO_A1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '001'),
  level: 'a1',
  label: 'Compréhension orale · A1',
  prompt: 'Vous allez entendre trois documents courts. Pour chaque document, choisissez la bonne réponse.',
  timingS: 110,
  targetItemIds: uniq(ITEMS.famille.a1, ITEMS.meteo.a1, ITEMS.objets.a1),
  parts: [
    {
      label: 'Document 1 · une photo de famille',
      playCount: 1,
      readWindowS: 10,
      durationS: 15,
      // A dialogue rather than a monologue, and not for the story: a turn
      // boundary is a pause, and a pause is the only thing that slows an A1
      // document once the renderer's speed is already at its 0.70 floor. The
      // two monologues first authored here measured 105 and 165 wpm against a
      // 110 target.
      text:
        'UN HOMME : Elle date de quand, cette photo ?\n' +
        'UNE FEMME : De l’été dernier. Là, c’est ma sœur, avec ses deux garçons.\n' +
        'UN HOMME : Et derrière ?\n' +
        'UNE FEMME : Derrière, c’est notre grand-mère. Elle avait quatre-vingt-dix ans.',
      items: [
        {
          q: 'Qui est derrière sur la photo ?',
          opts: ['La grand-mère', 'La sœur', 'Les deux garçons', 'Le voisin'],
          correct: 0,
          why: 'Elle dit que derrière, c’est leur grand-mère.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · le temps aujourd’hui',
      playCount: 1,
      readWindowS: 10,
      durationS: 18,
      // Rewritten twice for RATE, not for sense. Turn count was the wrong
      // lever: adding turns took it from 137 to 143 wpm, because a word is a
      // word whether it is "oui" or "épouvantable" and this document was all
      // monosyllables. Longer words at the same speed is what moved it.
      text:
        'UNE VOISINE : Bonjour Monsieur. Quel temps, ce matin !\n' +
        'UN HOMME : Bonjour Madame. Il pleut depuis six heures.\n' +
        'UNE VOISINE : Vous sortez, cet après-midi ?\n' +
        'UN HOMME : Non, je reste à la maison. Prenez votre parapluie.',
      items: [
        {
          q: 'Quel temps fait-il ce matin ?',
          opts: ['Il pleut', 'Il neige', 'Il fait du soleil', 'Il y a du vent'],
          correct: 0,
          why: 'Il dit qu’il pleut ce matin et qu’il ne fait pas chaud.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · à la poste',
      playCount: 1,
      readWindowS: 10,
      durationS: 15,
      text:
        'UNE CLIENTE : Bonjour, je voudrais un timbre pour une lettre, s’il vous plaît.\n' +
        'UN EMPLOYÉ : Voilà. Un euro trente.\n' +
        'UNE CLIENTE : Merci. La boîte aux lettres est dehors ?\n' +
        'UN EMPLOYÉ : Oui, à droite en sortant.',
      items: [
        {
          q: 'Qu’achète cette cliente ?',
          opts: ['Un timbre', 'Une enveloppe', 'Un colis', 'Un carnet'],
          correct: 0,
          why: 'Elle demande un timbre pour une lettre.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ A2 — positions 4 to 9 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: every document names exactly ONE competing fact the candidate
// must set aside — a second colour, a second evening, a second line, a second
// warranty, a second document, a second week.

export const CO_A2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'a2',
  label: 'Compréhension orale · A2',
  prompt: 'Vous allez entendre six documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 280,
  targetItemIds: uniq(
    ITEMS.objets.a2,
    ITEMS.examensEtDiplomes.a2,
    ITEMS.transportsQuotidiens.a2,
    ITEMS.appareils.a2,
    ITEMS.douaneEtImmigration.a2,
    ITEMS.rpVoyage.a2
  ),
  parts: [
    {
      label: 'Document 4 · un objet perdu',
      playCount: 1,
      readWindowS: 12,
      durationS: 23,
      text:
        'UN EMPLOYÉ : Décrivez-moi le sac, s’il vous plaît.\n' +
        'UNE FEMME : Il est bleu marine, en tissu, avec une bandoulière. ' +
        'Il y a une étiquette rouge avec mon nom dessus.\n' +
        'UN EMPLOYÉ : Nous en avons deux bleus. L’un a une poche extérieure, l’autre non.\n' +
        'UNE FEMME : Le mien n’en a pas. Il est simple devant.',
      items: [
        {
          q: 'Comment reconnaît-on son sac ?',
          opts: [
            'Il n’a pas de poche extérieure',
            'Il a une poche extérieure',
            'Il est rouge',
            'Il n’a pas de bandoulière',
          ],
          correct: 0,
          why: 'Deux sacs bleus au guichet ; le sien est celui sans poche extérieure.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · un cours du soir',
      playCount: 1,
      readWindowS: 12,
      durationS: 22,
      text:
        'UNE SECRÉTAIRE : Nous avons deux groupes. Le mardi de dix-huit à vingt heures, ' +
        'et le jeudi de dix-neuf à vingt et une heures.\n' +
        'UN HOMME : Je finis à dix-huit heures trente, le mardi est trop tôt.\n' +
        'UNE SECRÉTAIRE : Alors le jeudi. Il reste trois places.\n' +
        'UN HOMME : Parfait. Je m’inscris au jeudi.\n' +
        'UNE SECRÉTAIRE : Très bien. Vous commencez la semaine prochaine.',
      items: [
        {
          q: 'À quel groupe s’inscrit-il ?',
          opts: ['Celui du jeudi', 'Celui du mardi', 'Aux deux', 'À aucun'],
          correct: 0,
          why: 'Il finit à dix-huit heures trente, donc le mardi est impossible.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · un itinéraire',
      playCount: 1,
      readWindowS: 12,
      durationS: 21,
      text:
        'UNE FEMME : Vous prenez la ligne quatre jusqu’à la place du Marché. ' +
        'Là, vous changez pour la ligne sept, direction l’hôpital. ' +
        'Vous descendez au troisième arrêt, et vous prenez le bus douze, ' +
        'qui vous laisse devant la mairie. Comptez quarante minutes en tout.',
      items: [
        {
          q: 'Combien de changements faut-il faire ?',
          opts: ['Deux', 'Un', 'Trois', 'Aucun'],
          correct: 0,
          why: 'Ligne quatre, puis ligne sept, puis le bus douze : deux changements.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · deux téléphones',
      playCount: 1,
      readWindowS: 12,
      durationS: 25,
      text:
        'UN VENDEUR : Les deux sont à deux cent quatre-vingts euros, ' +
        'et ils ont le même écran et le même appareil photo.\n' +
        'UNE CLIENTE : Alors quelle différence ?\n' +
        'UN VENDEUR : La garantie. Le premier est garanti un an, le second deux ans. ' +
        'C’est le seul écart entre les deux.\n' +
        'UNE CLIENTE : Je prends celui qui est garanti deux ans.\n' +
        'UN VENDEUR : Bon choix. Je vous prépare la facture.',
      items: [
        {
          q: 'Qu’est-ce qui différencie les deux téléphones ?',
          opts: ['La durée de la garantie', 'Le prix', 'L’écran', 'L’appareil photo'],
          correct: 0,
          why: 'Même prix, même écran, même appareil photo : seule la garantie change.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · une attestation',
      playCount: 1,
      readWindowS: 12,
      durationS: 25,
      text:
        'UN AGENT : Il me faut votre pièce d’identité et un justificatif de domicile.\n' +
        'UNE FEMME : J’ai ma carte d’identité et une facture d’électricité de janvier.\n' +
        'UN AGENT : La facture doit dater de moins de trois mois. ' +
        'Nous sommes en juin, celle-ci est trop ancienne.\n' +
        'UNE FEMME : J’en ai une d’avril à la maison.\n' +
        'UN AGENT : Celle-là conviendra. Revenez avant dix-sept heures.',
      items: [
        {
          q: 'Que manque-t-il à cette femme ?',
          opts: [
            'Un justificatif de domicile récent',
            'Sa pièce d’identité',
            'Une facture d’électricité',
            'Un timbre fiscal',
          ],
          correct: 0,
          why: 'Elle a une facture, mais de janvier : trop ancienne pour le délai de trois mois.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · des vacances racontées',
      playCount: 1,
      readWindowS: 12,
      durationS: 20,
      text:
        'UNE COLLÈGUE : Alors, la montagne ?\n' +
        'UN HOMME : Nous devions y aller, mais la route était fermée par la neige.\n' +
        'UNE COLLÈGUE : Vous êtes rentrés, alors ?\n' +
        'UN HOMME : Non, nous sommes restés au bord du lac, à une heure de là.\n' +
        'UNE COLLÈGUE : Et c’était comment ?\n' +
        'UN HOMME : Franchement, très bien. Les enfants ont nagé tous les jours.',
      items: [
        {
          q: 'Où ont-ils passé leurs vacances ?',
          opts: ['Au bord d’un lac', 'À la montagne', 'À la mer', 'Chez des amis'],
          correct: 0,
          why: 'La montagne était le projet ; la route fermée les a menés au lac.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ B1 — positions 10 to 19 ═════════════════════════════════════════════ */
//
// Seven documents, ten questions: three carry two. A document with two
// questions is one where two facts must be held at once.

export const CO_B1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b1',
  label: 'Compréhension orale · B1',
  prompt: 'Vous allez entendre sept documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 520,
  targetItemIds: uniq(
    ITEMS.rpVoyage.b1,
    ITEMS.vetements.b1,
    ITEMS.musees.b1,
    ITEMS.metiers.b1,
    ITEMS.sportsEtLoisirs.b1,
    ITEMS.communaute.b1,
    ITEMS.voisinage.b1
  ),
  parts: [
    {
      label: 'Document 10 · le train de nuit',
      playCount: 1,
      readWindowS: 20,
      durationS: 41,
      text:
        'UNE REPORTRICE : La ligne a rouvert il y a six mois, après quinze ans d’arrêt. ' +
        'Les trains sont pleins.\n' +
        'UN RESPONSABLE : Pleins, oui, et cela ne dit pas encore si la ligne est viable. ' +
        'Une réouverture attire les curieux, et les curieux ne reviennent pas.\n' +
        'UNE REPORTRICE : Vous êtes prudent.\n' +
        'UN RESPONSABLE : Je regarde qui monte. La moitié des voyageurs font le trajet ' +
        'pour la deuxième ou la troisième fois, et ceux-là ne viennent pas pour la nouveauté. ' +
        'C’est ce chiffre qui compte, pas le taux de remplissage. ' +
        'S’il tient encore dans un an, nous aurons une ligne. Sinon, nous aurons eu une mode.',
      items: [
        {
          q: 'Pourquoi le responsable reste-t-il prudent ?',
          opts: [
            'Une réouverture attire des curieux qui ne reviennent pas',
            'Les trains ne sont pas assez remplis',
            'La ligne coûte trop cher',
            'Les horaires ne conviennent pas',
          ],
          correct: 0,
          why: 'Il écarte le remplissage comme indicateur : il regarde le retour des voyageurs.',
          band: 'b1',
        },
        {
          q: 'Quel chiffre suit-il en réalité ?',
          opts: [
            'La part de voyageurs qui reviennent',
            'Le taux de remplissage',
            'Le nombre de trajets par semaine',
            'Le prix moyen du billet',
          ],
          correct: 0,
          why: 'La moitié font le trajet pour la deuxième ou troisième fois, et c’est ce qu’il surveille.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · la seconde main',
      playCount: 1,
      readWindowS: 20,
      durationS: 42,
      text:
        'UNE CHRONIQUEUSE : Le marché du vêtement d’occasion a doublé en cinq ans, ' +
        'et on en conclut que nous achetons moins de neuf. Les chiffres disent autre chose.\n' +
        'UN INVITÉ : Ils disent quoi ?\n' +
        'UNE CHRONIQUEUSE : Que les ventes de neuf n’ont pas baissé. ' +
        'La seconde main ne remplace pas l’achat neuf, elle s’ajoute. ' +
        'Les mêmes personnes achètent les deux, et achètent davantage qu’avant.\n' +
        'UN INVITÉ : Ce n’est donc pas un progrès écologique ?\n' +
        'UNE CHRONIQUEUSE : C’en est un pour chaque vêtement pris séparément, ' +
        'et pas du tout à l’échelle d’une garde-robe. ' +
        'Il faudrait acheter moins, et nous avons trouvé le moyen d’acheter plus en se sentant mieux.',
      items: [
        {
          q: 'Que montrent les chiffres, selon elle ?',
          opts: [
            'Les ventes de neuf n’ont pas baissé',
            'La seconde main remplace le neuf',
            'Les prix ont augmenté',
            'Les vêtements durent moins longtemps',
          ],
          correct: 0,
          why: 'La seconde main s’ajoute au neuf au lieu de le remplacer.',
          band: 'b1',
        },
        {
          q: 'Quelle nuance apporte-t-elle sur l’écologie ?',
          opts: [
            'Le gain existe par vêtement, pas à l’échelle d’une garde-robe',
            'Il n’y a aucun gain',
            'Le gain est plus grand qu’on ne croit',
            'Cela dépend de la matière',
          ],
          correct: 0,
          why: 'Elle accorde le progrès pièce par pièce et le refuse au total.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · une exposition et les scolaires',
      playCount: 1,
      readWindowS: 20,
      durationS: 42,
      text:
        'UN JOURNALISTE : Quarante classes en trois mois, c’est beaucoup pour un musée de cette taille.\n' +
        'UNE MÉDIATRICE : C’est beaucoup, et ce n’est pas l’exposition qui les fait venir. ' +
        'C’est le car. Nous avons obtenu que le transport soit gratuit pour les écoles ' +
        'du département, et les réservations ont triplé la semaine suivante.\n' +
        'UN JOURNALISTE : Le contenu ne compte pas ?\n' +
        'UNE MÉDIATRICE : Il compte pour ce que les enfants en retirent, ' +
        'et pas du tout pour leur venue. Un enseignant convaincu qui doit trouver ' +
        'trois cents euros de car ne vient pas. Un enseignant tiède à qui l’on paie le car vient, ' +
        'et repart parfois convaincu.',
      items: [
        {
          q: 'Qu’est-ce qui explique l’affluence scolaire ?',
          opts: [
            'La gratuité du transport',
            'Le sujet de l’exposition',
            'La gratuité de l’entrée',
            'Une campagne de communication',
          ],
          correct: 0,
          why: 'Les réservations ont triplé la semaine après la gratuité du car.',
          band: 'b1',
        },
        {
          q: 'Quel rôle donne-t-elle au contenu ?',
          opts: [
            'Il agit sur ce que les enfants retirent, pas sur leur venue',
            'Il est le facteur principal',
            'Il n’a aucune importance',
            'Il détermine le choix de la date',
          ],
          correct: 0,
          why: 'L’enseignant convaincu sans car ne vient pas ; le tiède avec car vient.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · trois villes',
      playCount: 1,
      readWindowS: 18,
      durationS: 44,
      text:
        'UN HOMME : J’ai commencé à Corbeny, dans un bureau d’études, quatre ans. ' +
        'Puis Vaubourg, où j’ai dirigé une équipe pour la première fois. ' +
        'Et depuis six ans, ici.\n' +
        'UNE FEMME : Vous avez suivi les postes ou les villes ?\n' +
        'UN HOMME : Les deux premières fois, les postes. La troisième, la ville, ' +
        'et c’est le seul déménagement que je referais aujourd’hui sans hésiter. ' +
        'On accepte un poste pour ce qu’il promet. ' +
        'On choisit une ville pour ce qu’elle est déjà, et elle est encore là le lundi matin. ' +
        'Mes deux premiers départs, je les ai regrettés au bout d’un an. ' +
        'Celui-ci, cela fait six ans, et je n’y pense plus.',
      items: [
        {
          q: 'Quel déménagement referait-il ?',
          opts: [
            'Le troisième, choisi pour la ville',
            'Le premier, vers Corbeny',
            'Le deuxième, vers Vaubourg',
            'Aucun des trois',
          ],
          correct: 0,
          why: 'Les deux premiers suivaient un poste ; le troisième suivait la ville.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · une passion tardive',
      playCount: 1,
      readWindowS: 18,
      durationS: 42,
      text:
        'UNE FEMME : J’ai commencé à courir à quarante-huit ans, sans rien y connaître. ' +
        'Les six premiers mois ont été désagréables, il faut le dire.\n' +
        'UN HOMME : Qu’est-ce qui vous a fait continuer ?\n' +
        'UNE FEMME : Pas le plaisir, il est venu bien plus tard, vers la deuxième année. ' +
        'C’est d’avoir dit à trois personnes que je courais. ' +
        'À partir de là, arrêter serait devenu une nouvelle à annoncer, ' +
        'et cette petite gêne m’a portée pendant un an entier. ' +
        'Ensuite le corps s’habitue, les sorties cessent d’être une décision, ' +
        'et on n’a plus besoin de témoins. Aujourd’hui je ne dis plus rien à personne.',
      items: [
        {
          q: 'Qu’est-ce qui l’a fait continuer au début ?',
          opts: [
            'Avoir annoncé à d’autres qu’elle courait',
            'Le plaisir de courir',
            'Les conseils d’un entraîneur',
            'Un objectif de compétition',
          ],
          correct: 0,
          why: 'Elle écarte le plaisir, venu plus tard : arrêter serait devenu une nouvelle à annoncer.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · l’épicerie du village',
      playCount: 1,
      readWindowS: 18,
      durationS: 42,
      text:
        'UN REPORTER : L’épicerie a fermé en mars et rouvert en septembre, ' +
        'tenue par une association de villageois.\n' +
        'UNE HABITANTE : Nous sommes soixante à avoir mis cent euros, et douze à tenir la caisse ' +
        'à tour de rôle. Personne n’est payé.\n' +
        'UN REPORTER : Cela peut durer ?\n' +
        'UNE HABITANTE : Deux ans, sûrement. Dix, je ne crois pas une seconde. ' +
        'Le bénévolat tient tant que les mêmes douze personnes restent disponibles, ' +
        'et il suffit de trois déménagements pour que tout s’arrête. ' +
        'Notre objectif n’est donc pas de durer ainsi. ' +
        'Il est d’atteindre un chiffre d’affaires qui permette de salarier quelqu’un, ' +
        'et de redevenir nous-mêmes de simples clients.',
      items: [
        {
          q: 'Quel est l’objectif de l’association ?',
          opts: [
            'Pouvoir salarier quelqu’un',
            'Rester bénévole indéfiniment',
            'Revendre l’épicerie',
            'Ouvrir un second commerce',
          ],
          correct: 0,
          why: 'Elle veut atteindre un chiffre qui permette de salarier et de redevenir cliente.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · la gardienne d’immeuble',
      playCount: 1,
      readWindowS: 18,
      durationS: 44,
      text:
        'UN JOURNALISTE : En quoi consiste votre travail, exactement ?\n' +
        'UNE GARDIENNE : Sur la fiche : les poubelles, le ménage des parties communes, ' +
        'les petites réparations. Cela occupe la moitié de mes heures.\n' +
        'UN JOURNALISTE : Et l’autre moitié ?\n' +
        'UNE GARDIENNE : Elle n’est écrite nulle part, et personne ne la vérifie. ' +
        'Je sais qui vit seul, qui n’a pas ouvert ses volets depuis deux jours, ' +
        'quel enfant rentre à quelle heure et lequel a la clé autour du cou. ' +
        'Rien de tout cela ne figure dans mon contrat. ' +
        'C’est pourtant ce qui manquerait le plus si l’on remplaçait le poste ' +
        'par une société de nettoyage qui passe deux fois par semaine.',
      items: [
        {
          q: 'Qu’est-ce qui disparaîtrait avec une société de nettoyage ?',
          opts: [
            'La connaissance des habitants',
            'Le ménage des parties communes',
            'Les petites réparations',
            'La sortie des poubelles',
          ],
          correct: 0,
          why: 'La moitié non écrite de son travail : savoir qui vit seul, qui n’a pas ouvert ses volets.',
          band: 'b1',
        },
      ],
    },
  ],
};
