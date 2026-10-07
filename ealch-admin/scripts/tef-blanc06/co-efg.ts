// TEF Canada blanc-06 — Compréhension orale, blocks E, F and G.
//
//   E  6 · interviews        · 4 options · 2 plays  ← the only 2-play block
//   F  1 · reportage         · 4 options · 1 play
//   G 17 · documents divers  · 4 options · 1 play   ← G-elastic fill rule
import type { ExamPart, ExamTask, QcmItem } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, NOTES_CLOSED, taskId, ITEMS, uniq } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  taskType: 'co_mcq' as const,
  skill: 'CO' as const,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ Block E — Interview ═════════════════════════════════════════════════ */
//
// THE ONLY TWO-PLAY BLOCK. The nurse corrects the interviewer's framing twice
// (« la moitié du travail, pas plus » and « je corrige un peu »), and two of the
// six questions turn on those corrections.
//
// SELF-VERIFY (E1–E6): every key is stated by the interviewee, never by the
// interviewer, and no two keys come from the same turn.

export const CO_E: ExamTask = {
  ...base,
  id: taskId('co_mcq', '005'),
  level: 'b2',
  label: 'Section E',
  prompt: 'Vous allez entendre une interview, deux fois. Choisissez la bonne réponse pour chaque question.',
  timingS: 430,
  targetItemIds: uniq(ITEMS.soins, ITEMS.systemeDeSante),
  parts: [
    {
      label: 'Interview · une infirmière en soins à domicile',
      playCount: 2,
      readWindowS: 20,
      durationS: 95,
      text:
        'LE JOURNALISTE : Vous êtes infirmière à domicile depuis quinze ans. On imagine surtout des pansements et des piqûres…\n' +
        'L’INFIRMIÈRE : Les soins techniques, oui, mais c’est la moitié du travail, pas plus. L’autre moitié, ' +
        'c’est regarder. Le réfrigérateur est-il vide ? Les médicaments de la semaine sont-ils encore dans ' +
        'leur boîte ? Personne d’autre n’entre chez ces gens tous les jours.\n' +
        'LE JOURNALISTE : Combien de patients voyez-vous par jour ?\n' +
        'L’INFIRMIÈRE : Onze, en moyenne. Mais le chiffre qui compte, c’est la route : cent quarante ' +
        'kilomètres par jour l’hiver, parce que les routes de campagne ne sont pas toujours déneigées tôt. ' +
        'Je passe plus de temps au volant que chez les patients, et ça, aucun tableau ne le montre.\n' +
        'LE JOURNALISTE : On dit que le métier n’attire plus. C’est une question de salaire ?\n' +
        'L’INFIRMIÈRE : Euh, je corrige un peu. Le salaire n’est pas mauvais. Ce qui fait partir les ' +
        'collègues, c’est la solitude. À l’hôpital, quand on doute, on demande à quelqu’un dans le couloir. ' +
        'Ici, on est seule devant une plaie qui s’infecte, à trente kilomètres du premier médecin.\n' +
        'LE JOURNALISTE : Comment faites-vous, alors ?\n' +
        'L’INFIRMIÈRE : Depuis l’an dernier, on a une permanence téléphonique entre infirmières, le soir. ' +
        'Une photo, un appel, et on décide à deux. Ça n’a l’air de rien, mais personne n’a quitté ' +
        'l’équipe depuis.\n' +
        'LE JOURNALISTE : Vous recommanderiez ce métier à une jeune infirmière ?\n' +
        'L’INFIRMIÈRE : Oui, mais pas tout de suite. Deux ou trois ans à l’hôpital d’abord. Pas pour la ' +
        'technique : pour avoir vu assez de situations et savoir quand il faut s’inquiéter. À domicile, ' +
        'c’est ça qu’on vous demande, et on vous le demande seule.',
      items: [
        {
          q: 'En quoi consiste « l’autre moitié » de son travail ?',
          opts: [
            'Observer les conditions de vie des patients',
            'Faire des pansements et des piqûres',
            'Livrer les médicaments de la semaine',
            'Tenir compagnie aux familles des patients',
          ],
          correct: 0,
          why: '« L’autre moitié, c’est regarder » : le réfrigérateur, les médicaments restés dans leur boîte. Les pansements sont la première moitié.',
          band: 'b1',
        },
        {
          q: 'Qu’est-ce qu’« aucun tableau ne montre », selon elle ?',
          opts: [
            'Le temps qu’elle passe sur la route',
            'Le nombre de patients vus chaque jour',
            'La durée des soins techniques',
            'Les heures consacrées au déneigement',
          ],
          correct: 0,
          why: '« Je passe plus de temps au volant que chez les patients, et ça, aucun tableau ne le montre. »',
          band: 'b2',
        },
        {
          q: 'Comment corrige-t-elle l’idée du journaliste sur les départs ?',
          opts: [
            'C’est la solitude, plus que le salaire, qui fait partir',
            'Le salaire est trop bas pour la charge de travail',
            'Les routes d’hiver découragent les infirmières',
            'Les patients sont devenus beaucoup trop nombreux',
          ],
          correct: 0,
          why: '« Je corrige un peu. Le salaire n’est pas mauvais. Ce qui fait partir les collègues, c’est la solitude. »',
          band: 'b2',
        },
        {
          q: 'Pourquoi évoque-t-elle une plaie qui s’infecte ?',
          opts: [
            'Pour illustrer l’isolement face à une décision',
            'Pour montrer la difficulté des soins techniques',
            'Pour critiquer le manque de médecins à l’hôpital',
            'Pour expliquer la longueur de certaines visites',
          ],
          correct: 0,
          why: 'L’exemple oppose l’hôpital, où l’on demande « dans le couloir », au domicile, où l’on est « seule… à trente kilomètres du premier médecin ».',
          band: 'c1',
        },
        {
          q: 'Quel effet attribue-t-elle à la permanence téléphonique ?',
          opts: [
            'Aucune infirmière n’a quitté l’équipe depuis',
            'Les visites du soir ont pu être supprimées',
            'Les médecins répondent plus vite aux photos',
            'Les infirmières font moins de kilomètres',
          ],
          correct: 0,
          why: '« Ça n’a l’air de rien, mais personne n’a quitté l’équipe depuis. » La décision se prend entre infirmières, pas avec un médecin.',
          band: 'b2',
        },
        {
          q: 'Pourquoi conseille-t-elle de commencer à l’hôpital ?',
          opts: [
            'Pour apprendre à reconnaître quand il faut s’inquiéter',
            'Pour maîtriser d’abord les gestes techniques',
            'Pour obtenir un meilleur salaire par la suite',
            'Pour éviter les routes de campagne en hiver',
          ],
          correct: 0,
          why: '« Pas pour la technique : pour avoir vu assez de situations et savoir quand il faut s’inquiéter. »',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block F — Reportage ═════════════════════════════════════════════════ */
//
// LENGTH: written to the 120-180s envelope from the start (about 390 words),
// with a narrator and two interviewed voices.
//
// SELF-VERIFY (F1): the key is the report's movement and is stated in no single
// sentence; each distractor contradicts or overstates something said. The
// Observatoire de la Tilleraie figure is invented and attributed.

export const CO_F: ExamTask = {
  ...base,
  id: taskId('co_mcq', '006'),
  level: 'b2',
  label: 'Section F',
  prompt: 'Vous allez entendre un reportage. Choisissez la bonne réponse.',
  timingS: 190,
  targetItemIds: uniq(ITEMS.systemeDeSante),
  parts: [
    {
      label: 'Reportage · la nuit aux urgences',
      playCount: 1,
      readWindowS: 15,
      durationS: 150,
      text:
        'LE REPORTER : Il est une heure du matin aux urgences de l’hôpital régional de Hautemont. Dans la ' +
        'salle d’attente, vingt-trois personnes. Le délai affiché : six heures.\n' +
        'LE REPORTER : On pourrait croire que la nuit attire surtout les cas graves. Ce n’est pas ce que ' +
        'montrent les dossiers. Selon l’Observatoire de la Tilleraie, qui a étudié une année de passages ' +
        'nocturnes dans quatre hôpitaux, deux patients sur trois arrivés après vingt-deux heures repartent ' +
        'sans examen ni hospitalisation.\n' +
        'L’URGENTISTE : Ces gens ne viennent pas par caprice. Une otite à vingt-trois heures, une fièvre ' +
        'chez un bébé, une coupure qui demande trois points… Où voulez-vous qu’ils aillent ? Les cliniques ' +
        'du secteur ferment toutes à dix-huit heures. Nous sommes la seule porte ouverte, alors tout le ' +
        'monde frappe à la nôtre.\n' +
        'L’URGENTISTE : Et un cas grave, quand il arrive, passe devant. C’est normal. Mais chaque ambulance ' +
        'repousse encore toute la file, et les six heures deviennent huit.\n' +
        'LE REPORTER : Dans le couloir, une infirmière d’accueil trie les arrivées. Elle a quelques minutes ' +
        'par patient pour décider qui passe d’abord. Ce soir, sur vingt-trois personnes, elle n’en a classé ' +
        'que deux en urgence vraie. Les autres attendront, certaines jusqu’à l’aube, pour un geste qui ' +
        'prendrait dix minutes dans un cabinet.\n' +
        'LE REPORTER : Depuis le printemps, une clinique du soir a ouvert dans l’aile voisine, de dix-huit ' +
        'heures à minuit, tenue par deux médecins de famille et une infirmière. Les patients qui ne relèvent ' +
        'pas de l’urgence y sont orientés dès l’accueil.\n' +
        'LA PATIENTE : Je suis venue pour mon fils, qui avait mal à l’oreille. À l’accueil, on m’a envoyée ' +
        'à côté. J’ai attendu quarante minutes au lieu de toute la nuit. Mais je suis arrivée à vingt-deux ' +
        'heures. Une amie qui est venue après minuit, la semaine dernière, a attendu jusqu’au matin.\n' +
        'LE REPORTER : C’est la limite que tout le monde, ici, connaît. Avant minuit, l’attente aux urgences ' +
        'a baissé d’environ un tiers. Après minuit, rien n’a changé.\n' +
        'L’URGENTISTE : Pour ouvrir la clinique toute la nuit, il faudrait quatre médecins de plus. On ne les ' +
        'a pas. On a déplacé une partie du problème, ce qui est déjà beaucoup, mais on ne l’a pas réglé.\n' +
        'LE REPORTER : La direction de l’hôpital étudie une autre piste : une ligne téléphonique tenue par ' +
        'des infirmières, qui conseillerait les familles avant qu’elles prennent la route. Elle doit être ' +
        'testée cet hiver.\n' +
        'LA PATIENTE : Si quelqu’un m’avait dit au téléphone que je pouvais attendre le matin, je serais ' +
        'restée chez moi. Je ne demandais pas mieux.',
      items: [
        {
          q: 'Quelle est l’idée principale du reportage ?',
          opts: [
            'L’attente de nuit vient surtout du manque d’autres lieux de soins, et la clinique du soir n’y répond qu’en partie',
            'Les urgences sont saturées la nuit parce que les cas graves y arrivent alors en plus grand nombre',
            'L’ouverture d’une clinique du soir a fait disparaître l’attente aux urgences à toute heure de la nuit',
            'Une ligne téléphonique tenue par des infirmières a déjà réduit de beaucoup les passages nocturnes',
          ],
          correct: 0,
          why: 'Deux patients sur trois repartent sans examen ; « nous sommes la seule porte ouverte » ; la clinique du soir réduit l’attente d’un tiers avant minuit, « après minuit, rien n’a changé ». La ligne téléphonique n’est pas encore testée.',
          band: 'c1',
        },
      ],
    },
  ],
};

/* ═══ Block G — Documents divers ══════════════════════════════════════════ */

const doc = (
  label: string,
  durationS: number,
  text: string,
  q: string,
  opts: string[],
  why: string,
  band: QcmItem['band']
): ExamPart => ({
  label,
  playCount: 1,
  readWindowS: 10,
  durationS,
  text,
  items: [{ q, opts, correct: 0, why, band }],
});

const G: ExamPart[] = [];

G.push(doc(
  'Document 1 · échange · la facture d’électricité',
  30,
  'LE CLIENT : Bonjour, ma facture d’électricité de janvier est de trois cent quarante dollars. D’habitude, c’est la moitié.\n' +
  'LA CONSEILLÈRE : Je regarde… Votre compteur n’a pas été relevé ce mois-ci, la facture est une estimation.\n' +
  'LE CLIENT : Une estimation ? Je peux vous donner le chiffre exact, il est devant moi.\n' +
  'LA CONSEILLÈRE : Parfait, dites-le-moi. Je corrige la facture aujourd’hui et vous recevez la nouvelle sous dix jours.',
  'Pourquoi la facture est-elle si élevée ?',
  [
    'Elle repose sur une estimation, sans relevé du compteur',
    'Le client a consommé deux fois plus que d’habitude',
    'Le tarif de l’électricité a augmenté en janvier',
    'La facture couvre deux mois de consommation',
  ],
  '« Votre compteur n’a pas été relevé ce mois-ci, la facture est une estimation. » La conseillère la corrige avec le chiffre exact.',
  'b1'
));

G.push(doc(
  'Document 2 · répondeur · l’absence à l’école',
  27,
  'LA SECRÉTAIRE : Bonjour, ici le secrétariat de l’école primaire du Ruisseau. Votre fille Léa n’est pas ' +
  'en classe ce matin et nous n’avons reçu aucun message de votre part. Si elle est malade, merci de ' +
  'nous rappeler avant onze heures, ou de répondre au courriel que nous venons de vous envoyer. Sans ' +
  'nouvelles de votre part, nous contacterons la deuxième personne inscrite sur sa fiche.',
  'Que fera l’école si les parents ne donnent pas de nouvelles ?',
  [
    'Elle appellera la deuxième personne inscrite sur la fiche',
    'Elle notera l’enfant absente pour toute la semaine',
    'Elle enverra un courriel aux parents dans l’après-midi',
    'Elle demandera au directeur de passer au domicile',
  ],
  '« Sans nouvelles de votre part, nous contacterons la deuxième personne inscrite sur sa fiche. » Le courriel est déjà envoyé.',
  'a2'
));

G.push(doc(
  'Document 3 · information · la coupure d’eau',
  27,
  'LA VOIX : Avis aux résidents de la rue des Bouleaux, à Fréneuse. L’eau sera coupée jeudi, de neuf heures ' +
  'à quinze heures, pour le remplacement d’une conduite. À la remise en service, l’eau peut être ' +
  'trouble pendant quelques minutes : laissez couler le robinet d’eau froide avant de la boire. Il ' +
  'n’est pas nécessaire de la faire bouillir.',
  'Que faut-il faire après la remise en service ?',
  [
    'Laisser couler l’eau froide quelques minutes',
    'Faire bouillir l’eau avant de la boire',
    'Prévenir la municipalité si l’eau est trouble',
    'Garder les robinets fermés jusqu’au soir',
  ],
  '« Laissez couler le robinet d’eau froide avant de la boire. Il n’est pas nécessaire de la faire bouillir. »',
  'b1'
));

G.push(doc(
  'Document 4 · micro-trottoir · un seul horaire toute l’année',
  25,
  'LE PASSANT : Changer d’heure deux fois par an, franchement, je ne vois plus l’intérêt. Mais attention : ' +
  'garder l’heure d’été toute l’année, ça veut dire qu’en décembre il fait nuit jusqu’à presque neuf ' +
  'heures le matin. Les enfants partiraient à l’école dans le noir. Moi, je garderais plutôt l’heure ' +
  'd’hiver, toute l’année.',
  'Quelle est la position du passant ?',
  [
    'Un seul horaire, mais celui de l’hiver',
    'Garder l’heure d’été toute l’année',
    'Conserver les deux changements d’heure',
    'La question lui est indifférente',
  ],
  'Il rejette le double changement, écarte l’heure d’été à cause des matins d’hiver, et conclut : « je garderais plutôt l’heure d’hiver, toute l’année ».',
  'b2'
));

G.push(doc(
  'Document 5 · consignes · la piscine municipale',
  26,
  'LE MAÎTRE-NAGEUR : Quelques consignes avant d’entrer dans le bassin. La douche est obligatoire, avec du ' +
  'savon. Le bonnet de bain aussi, pour tout le monde, cheveux courts compris. Les enfants de moins de ' +
  'huit ans doivent être accompagnés dans l’eau par un adulte en maillot, pas seulement surveillés ' +
  'depuis les gradins.',
  'Que doit faire l’adulte qui accompagne un enfant de moins de huit ans ?',
  [
    'Être dans l’eau avec l’enfant',
    'Le surveiller depuis les gradins',
    'Lui prêter un bonnet de bain',
    'Signer un registre à l’entrée',
  ],
  '« Accompagnés dans l’eau par un adulte en maillot, pas seulement surveillés depuis les gradins. »',
  'a2'
));

G.push(doc(
  'Document 6 · échange · le chat du voisin',
  24,
  'LA VOISINE : Vous partez quand, déjà ?\n' +
  'LE VOISIN : Samedi, pour deux semaines. Je cherche encore quelqu’un pour le chat.\n' +
  'LA VOISINE : Je peux m’en occuper, je suis là tout le mois. Je passe le nourrir le matin ?\n' +
  'LE VOISIN : Le matin et le soir, s’il vous plaît. Je vous laisse la clé vendredi soir.',
  'Quand la voisine devra-t-elle nourrir le chat ?',
  ['Le matin et le soir', 'Le matin seulement', 'Le soir seulement', 'Un jour sur deux'],
  'Elle propose le matin ; le voisin précise : « Le matin et le soir, s’il vous plaît. »',
  'a2'
));

G.push(doc(
  'Document 7 · répondeur · la clinique dentaire',
  27,
  'LA VOIX : Bonjour, ici la clinique dentaire du Vieux-Pont, à Saint-Varin. Votre rendez-vous de mardi à ' +
  'dix heures doit être déplacé : la dentiste sera absente. Nous vous proposons mercredi, à la même ' +
  'heure. Si cela vous convient, vous n’avez rien à faire. Dans le cas contraire, rappelez-nous avant ' +
  'lundi midi pour choisir un autre moment.',
  'Que doit faire le patient si le nouveau rendez-vous lui convient ?',
  [
    'Rien, il lui suffit de venir mercredi',
    'Rappeler la clinique avant lundi midi',
    'Confirmer par message dès mardi matin',
    'Se présenter mardi comme prévu',
  ],
  '« Si cela vous convient, vous n’avez rien à faire. » Il ne faut rappeler que dans le cas contraire.',
  'b1'
));

G.push(doc(
  'Document 8 · information · le pont fermé',
  27,
  'LA VOIX : Bulletin de circulation. Le pont du Moulin, entre Belcourt et Hautemont, sera fermé cette nuit ' +
  'de vingt-deux heures à cinq heures pour une inspection. Les automobilistes sont invités à emprunter ' +
  'le pont de la route 9, ce qui allonge le trajet d’une quinzaine de minutes. Les autobus de nuit, ' +
  'eux, sont maintenus et passeront aussi par la route 9.',
  'Que se passe-t-il pour les autobus de nuit ?',
  [
    'Ils circulent, en passant par l’autre pont',
    'Ils sont supprimés pour toute la nuit',
    'Ils partent quinze minutes plus tôt',
    'Ils s’arrêtent juste avant le pont du Moulin',
  ],
  '« Les autobus de nuit, eux, sont maintenus et passeront aussi par la route 9. »',
  'b1'
));

G.push(doc(
  'Document 9 · micro-trottoir · les devoirs à la maison',
  26,
  'LA PASSANTE : Utiles, oui, mais pas pour tout le monde de la même façon. Mon fils a ses parents à la ' +
  'maison le soir pour l’aider. Son voisin de classe, non. Les mêmes devoirs, ça creuse l’écart au lieu ' +
  'de le réduire. Moi, je les ferais faire à l’école, en fin de journée, avec un adulte.',
  'Que propose la passante ?',
  [
    'Faire les devoirs à l’école, avec un adulte',
    'Supprimer purement et simplement les devoirs',
    'Former les parents pour qu’ils aident mieux',
    'Donner des devoirs différents à chaque élève',
  ],
  'Les devoirs à la maison creusent l’écart entre élèves aidés et non aidés : « je les ferais faire à l’école, en fin de journée, avec un adulte ».',
  'b2'
));

G.push(doc(
  'Document 10 · consignes · les bénévoles de la course',
  30,
  'LA RESPONSABLE : Pour les bénévoles de dimanche : rendez-vous à sept heures, sous la tente bleue, pour ' +
  'récupérer votre gilet. Aux points de ravitaillement, on ne verse jamais d’eau dans la bouteille d’un ' +
  'coureur : on tend un gobelet. Et si un coureur se sent mal, vous ne le déplacez pas, vous appelez ' +
  'l’équipe de secours au numéro inscrit sur votre badge.',
  'Que doit faire un bénévole si un coureur se sent mal ?',
  [
    'Appeler les secours sans déplacer le coureur',
    'L’accompagner jusqu’à la tente bleue',
    'Lui tendre tout de suite un gobelet d’eau',
    'Prévenir la responsable au point de départ',
  ],
  '« Vous ne le déplacez pas, vous appelez l’équipe de secours au numéro inscrit sur votre badge. »',
  'b1'
));

G.push(doc(
  'Document 11 · échange · le casier bloqué',
  27,
  'LA CLIENTE : Excusez-moi, mon casier est bloqué. J’ai mis la pièce, mais la clé ne tourne plus.\n' +
  'L’EMPLOYÉ : C’est le numéro combien ?\n' +
  'LA CLIENTE : Le quarante-deux. Toutes mes affaires sont dedans, mon manteau, mes clés de voiture.\n' +
  'L’EMPLOYÉ : J’ai un passe, je vous l’ouvre. Mais la prochaine fois, prenez un casier de l’autre rangée : celui-là, je le mets hors service.',
  'Que va faire l’employé ?',
  [
    'Ouvrir le casier, puis le mettre hors service',
    'Rendre à la cliente la pièce qu’elle a mise',
    'Appeler un serrurier dans l’après-midi',
    'Garder les affaires de la cliente à l’accueil',
  ],
  '« J’ai un passe, je vous l’ouvre… celui-là, je le mets hors service. »',
  'a2'
));

G.push(doc(
  'Document 12 · répondeur · la salle de réception',
  28,
  'LA VOIX : Bonjour madame Lavallée, ici la salle de réception Aux Deux Rives. Je vous confirme votre ' +
  'réservation pour samedi : une fête de trente personnes, accès à la salle dès quinze heures. Une seule ' +
  'modification : la grande salle est en travaux, nous vous installons dans la salle du jardin, au même ' +
  'prix. Si cela ne vous convient pas, rappelez-nous avant jeudi.',
  'Qu’est-ce qui change dans la réservation ?',
  [
    'La salle du jardin remplace la grande salle, au même prix',
    'L’accès à la salle est avancé à quinze heures',
    'La fête est prévue pour trente personnes',
    'Le prix de la location augmente légèrement',
  ],
  '« Une seule modification : la grande salle est en travaux, nous vous installons dans la salle du jardin, au même prix. »',
  'b1'
));

G.push(doc(
  'Document 13 · information · le marché fermier',
  25,
  'LA VOIX : Information aux clients du marché fermier de Lac-Ombreuse. À partir de samedi prochain, le ' +
  'marché quitte le stationnement de l’église pour s’installer dans la cour de l’ancienne école, rue ' +
  'Principale. Les jours et les horaires ne changent pas : le samedi, de huit heures à treize heures. ' +
  'Le stationnement de l’église reste ouvert aux clients.',
  'Qu’est-ce qui change pour le marché fermier ?',
  ['Son emplacement', 'Son jour d’ouverture', 'Ses horaires du samedi', 'Le stationnement des clients'],
  'Il « quitte le stationnement de l’église pour s’installer dans la cour de l’ancienne école » ; jours et horaires ne changent pas.',
  'a2'
));

G.push(doc(
  'Document 14 · micro-trottoir · le pourboire au comptoir',
  27,
  'LE PASSANT : Au comptoir, quand on me tend le terminal avec quinze, vingt, vingt-cinq pour cent… je ' +
  'trouve ça gênant. À table, avec un vrai service, d’accord, le pourboire fait partie du salaire. Mais ' +
  'pour un café qu’on me tend au comptoir, non. Et le pire, c’est qu’on n’ose pas appuyer sur « aucun » ' +
  'devant la personne.',
  'Que pense le passant du pourboire ?',
  [
    'Il est normal à table, pas pour un café au comptoir',
    'Il devrait disparaître partout, même à table',
    'Il est trop faible pour le service au comptoir',
    'Il devrait toujours être fixé à quinze pour cent',
  ],
  '« À table, avec un vrai service, d’accord… Mais pour un café qu’on me tend au comptoir, non. »',
  'b2'
));

G.push(doc(
  'Document 15 · consignes · l’excursion en montagne',
  27,
  'LE GUIDE : Avant le départ, trois règles. On reste sur le sentier balisé en jaune, même si un raccourci ' +
  'vous paraît évident. On ne dépasse jamais le guide de tête. Et si le temps se couvre au sommet, on ' +
  'redescend tout de suite, sans attendre que la pluie commence : la descente devient glissante en ' +
  'quelques minutes.',
  'Que faut-il faire si le temps se couvre au sommet ?',
  [
    'Redescendre aussitôt, avant la pluie',
    'Attendre au sommet que la pluie cesse',
    'Prendre un raccourci pour rentrer plus vite',
    'Dépasser le guide pour aller plus vite',
  ],
  '« Si le temps se couvre au sommet, on redescend tout de suite, sans attendre que la pluie commence. »',
  'b1'
));

G.push(doc(
  'Document 16 · échange · la carte de bibliothèque',
  27,
  'LE LECTEUR : Bonjour, j’ai perdu ma carte de bibliothèque. Je peux quand même emprunter ces livres ?\n' +
  'LA BIBLIOTHÉCAIRE : Pas sans carte, je suis désolée. Mais je peux vous en faire une nouvelle tout de suite.\n' +
  'LE LECTEUR : C’est payant ?\n' +
  'LA BIBLIOTHÉCAIRE : Deux dollars. Votre ancienne carte sera bloquée, et vos emprunts en cours passent sur la nouvelle.',
  'Que deviennent les emprunts en cours du lecteur ?',
  [
    'Ils passent sur la nouvelle carte',
    'Ils doivent être rendus avant le remplacement',
    'Ils restent bloqués avec l’ancienne carte',
    'Ils sont facturés deux dollars chacun',
  ],
  '« Votre ancienne carte sera bloquée, et vos emprunts en cours passent sur la nouvelle. »',
  'a2'
));

G.push(doc(
  'Document 17 · micro-trottoir · la taille des supermarchés',
  27,
  'LA PASSANTE : Limiter la taille, je veux bien, mais ce n’est pas ça qui fera revenir l’épicerie du ' +
  'village. Ce qui l’a fait fermer, c’est qu’on prend tous la voiture pour aller au même endroit le ' +
  'samedi. Si on veut des petits commerces, il faut y acheter, même un peu plus cher. Une loi ne fera ' +
  'pas nos courses à notre place.',
  'Quelle est l’idée de la passante ?',
  [
    'Les petits commerces dépendent d’abord de nos habitudes d’achat',
    'Il faut limiter la taille des supermarchés au plus vite',
    'Les petits commerces sont toujours trop chers pour elle',
    'Les supermarchés devraient livrer dans les villages',
  ],
  '« Si on veut des petits commerces, il faut y acheter… Une loi ne fera pas nos courses à notre place. »',
  'b2'
));

export const CO_G: ExamTask = {
  ...base,
  id: taskId('co_mcq', '007'),
  level: 'b1',
  label: 'Section G',
  prompt: 'Vous allez entendre dix-sept documents courts. Pour chaque document, choisissez la bonne réponse.',
  timingS: 790,
  targetItemIds: uniq(
    ITEMS.argentQuotidien, ITEMS.ecole, ITEMS.maison, ITEMS.questionsSociales, ITEMS.sportsEtLoisirs,
    ITEMS.animauxDomestiques, ITEMS.systemeDeSante, ITEMS.transportsQuotidiens, ITEMS.entraide,
    ITEMS.evenementsFamiliaux, ITEMS.marche, ITEMS.auRestaurant, ITEMS.tourisme, ITEMS.musees, ITEMS.economie
  ),
  parts: G,
};
