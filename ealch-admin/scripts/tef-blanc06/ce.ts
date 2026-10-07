// TEF Canada blanc-06 — Compréhension écrite, blocks A to C.
//
//   A  7 · documents de la vie quotidienne · 7 documents, 1 question each
//   B  6 · phrases lacunaires              · 6 single sentences, 1 gap each
//   C  4 · textes lacunaires               · 2 short texts, 2 gaps each
import type { ExamTask } from '../../../ealch-v2/src/content/schema.ts';
import { FORMAT, FORMAT_VERSION, VARIANT, NOTES_CLOSED, taskId, ITEMS, uniq } from './common.ts';

const base = {
  format: FORMAT,
  variant: VARIANT,
  taskType: 'ce_mcq' as const,
  skill: 'CE' as const,
  formatVersion: FORMAT_VERSION,
  examinerNotes: NOTES_CLOSED,
};

/* ═══ Block A — Documents de la vie quotidienne ═══════════════════════════ */
//
// SELF-VERIFY (A1–A7): every distractor is drawn from the document, so none can
// be eliminated without reading. Document 7's key is arithmetic (2 × 85 $) and
// is asserted in paper.test.ts.

export const CE_A: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '001'),
  level: 'a2',
  label: 'Section A',
  prompt: 'Lisez les documents et choisissez la bonne réponse.',
  timingS: 600,
  targetItemIds: uniq(ITEMS.ecole, ITEMS.litterature, ITEMS.deplacements, ITEMS.vetements, ITEMS.auRestaurant, ITEMS.famille),
  parts: [
    {
      label: 'Document 1 · l’attestation de fréquentation',
      text:
        'ÉCOLE SECONDAIRE DE BELCOURT · attestation de fréquentation scolaire\n' +
        'Demande au secrétariat ou sur le portail des parents.\n' +
        'Délai : 3 jours ouvrables. En août, période de rentrée : 10 jours ouvrables.\n' +
        'Gratuite. Un duplicata coûte 5 $.\n' +
        'Remise à l’élève majeur ou à un parent, sur présentation d’une pièce d’identité.',
      items: [
        {
          q: 'Quel est le délai pour une demande faite en août ?',
          opts: ['10 jours ouvrables', '3 jours ouvrables', '5 jours ouvrables', 'Le jour même'],
          correct: 0,
          why: '« En août, période de rentrée : 10 jours ouvrables. » Les 3 jours valent le reste de l’année ; 5 est le prix du duplicata.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 2 · la troupe de théâtre',
      text:
        'LES TRÉTEAUX DE SAINT-VARIN · troupe de théâtre amateur\n' +
        'Nous montons « La Maison du lac » pour avril.\n' +
        'On cherche : 2 comédiens, 1 personne pour les décors, 1 pour la lumière.\n' +
        'Répétitions le mardi soir, au sous-sol de la bibliothèque.\n' +
        'Aucune expérience demandée pour les décors et la lumière. Audition pour les rôles : samedi 18 janvier.',
      items: [
        {
          q: 'Pour quels postes faut-il passer une audition ?',
          opts: ['Pour les rôles de comédiens', 'Pour la lumière du spectacle', 'Pour la fabrication des décors', 'Pour tous les postes proposés'],
          correct: 0,
          why: '« Audition pour les rôles : samedi 18 janvier », alors qu’aucune expérience n’est demandée pour les décors et la lumière.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 3 · l’auto-école',
      text:
        'AUTO-ÉCOLE BOUSSOLE · cours de conduite\n' +
        'Forfait 20 heures : 980 $, théorie en ligne comprise.\n' +
        'Heure supplémentaire : 55 $.\n' +
        'Cours sur route du lundi au samedi. Départ devant l’école, ou à votre domicile pour 10 $ de plus.\n' +
        'Annulation moins de 24 h avant le cours : l’heure est due.',
      items: [
        {
          q: 'Un élève annule son cours 12 heures à l’avance. Que se passe-t-il ?',
          opts: ['Il doit payer l’heure', 'Il ne paie rien', 'Il paie 10 $ de frais', 'Son cours est reporté'],
          correct: 0,
          why: '12 heures, c’est moins de 24 h : « l’heure est due ». Les 10 $ concernent le départ à domicile.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 4 · l’étiquette du manteau',
      text:
        'MANTEAU D’HIVER EN DUVET · entretien\n' +
        'Lavage à la main ou en machine, cycle délicat, eau froide.\n' +
        'Ne pas utiliser d’assouplissant.\n' +
        'Séchage en machine à basse température, avec deux balles de séchage, pour regonfler le duvet.\n' +
        'Ne pas repasser. Nettoyage à sec interdit.',
      items: [
        {
          q: 'Comment faut-il sécher ce manteau ?',
          opts: ['En machine, à basse température', 'À plat, à l’air libre', 'Au pressing, par nettoyage à sec', 'En machine, à haute température'],
          correct: 0,
          why: '« Séchage en machine à basse température, avec deux balles de séchage. » Le nettoyage à sec est interdit.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · le menu de la cafétéria',
      text:
        'CAFÉTÉRIA DU 3e ÉTAGE · menu de la semaine\n' +
        'Lundi : soupe de légumes, poulet rôti\n' +
        'Mardi : soupe à l’oignon, lasagne végétarienne\n' +
        'Mercredi : soupe de poisson, saumon grillé\n' +
        'Jeudi : fermé (journée de formation)\n' +
        'Vendredi : soupe aux pois, pizza au jambon\n' +
        'Plat du jour 9,50 $ · avec soupe 11 $ · carte d’employé : 10 % de rabais',
      items: [
        {
          q: 'Quel jour peut-on manger un plat principal sans viande ni poisson ?',
          opts: ['Le mardi', 'Le lundi', 'Le jeudi', 'Le vendredi'],
          correct: 0,
          why: 'Le mardi propose une « lasagne végétarienne ». Le jeudi, la cafétéria est fermée.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · le message de la garderie',
      text:
        'garderie les petits pas : bonjour ! la sortie à la ferme prévue demain est reportée à jeudi ' +
        'prochain à cause du froid (-25 °C annoncés). demain, journée normale à la garderie. pensez quand ' +
        'même aux vêtements chauds pour la récréation. merci !',
      items: [
        {
          q: 'Que se passe-t-il demain ?',
          opts: [
            'Les enfants restent à la garderie, comme d’habitude',
            'Les enfants partent visiter la ferme',
            'La garderie ferme à cause du froid',
            'Les parents doivent garder leur enfant',
          ],
          correct: 0,
          why: '« Demain, journée normale à la garderie. » La sortie est reportée à jeudi prochain.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · la place de stationnement à louer',
      text:
        'À LOUER · place de stationnement intérieure chauffée\n' +
        'Garage souterrain, rue des Ormes, Hautemont. 85 $ par mois, de novembre à avril seulement.\n' +
        'Prise électrique disponible pour le chauffe-moteur.\n' +
        'Hauteur maximale : 1,90 m.\n' +
        'Paiement de 2 mois d’avance à la signature. Téléphoner après 18 h.',
      items: [
        {
          q: 'Combien faut-il payer à la signature ?',
          opts: ['170 $', '85 $', '510 $', '190 $'],
          correct: 0,
          why: '« Paiement de 2 mois d’avance » à 85 $ par mois : 2 × 85 = 170 $. 510 $ serait la saison entière, 190 vient de la hauteur.',
          band: 'b1',
        },
      ],
    },
  ],
};

/* ═══ Block B — Phrases lacunaires ════════════════════════════════════════ */
//
// Three grammar (relative, subjunctive after « bien que », past conditional)
// and three collocation (s’intéresser à, prendre une décision, tenir compte).
// Every gap resolves inside its own sentence.

export const CE_B: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '002'),
  level: 'b1',
  label: 'Section B',
  prompt: 'Choisissez le mot ou l’expression qui complète correctement chaque phrase.',
  timingS: 420,
  targetItemIds: [
    'fr.a2.prepositions-essentielles.129', 'fr.b1.pronoms-essentiels.026',
    'fr.b2.connecteurs-logiques.039', 'fr.a2.verbes-essentiels.040',
    'fr.b1.recits-au-passe.1000', 'fr.b1.expressions-frequentes.073',
  ],
  items: [
    {
      q: 'Depuis son arrivée, elle s’intéresse beaucoup ___ histoire de sa région.',
      opts: ['à l’', 'de l’', 'sur l’', 'pour l’'],
      correct: 0,
      why: 'S’intéresser se construit avec « à » : s’intéresser à quelque chose, donc « à l’histoire ».',
      band: 'a2',
    },
    {
      q: 'Ce sont des collègues ___ je peux compter en toute circonstance.',
      opts: ['sur qui', 'dont', 'que', 'à qui'],
      correct: 0,
      why: 'On compte SUR quelqu’un ; le relatif reprend la préposition : sur qui.',
      band: 'b1',
    },
    {
      q: 'Bien qu’il ___ très tard, la réunion s’est poursuivie jusqu’au bout.',
      opts: ['soit', 'est', 'était', 'sera'],
      correct: 0,
      why: '« Bien que » exige le subjonctif : bien qu’il soit tard.',
      band: 'b2',
    },
    {
      q: 'Après une longue discussion, le comité a ___ une décision.',
      opts: ['pris', 'fait', 'mis', 'donné'],
      correct: 0,
      why: 'La collocation est « prendre une décision ».',
      band: 'a2',
    },
    {
      q: 'Si j’avais su que la route était fermée, je ___ plus tôt.',
      opts: ['serais parti', 'partirais', 'suis parti', 'partais'],
      correct: 0,
      why: 'Avec « si » + plus-que-parfait, l’hypothèse sur le passé appelle le conditionnel passé.',
      band: 'b1',
    },
    {
      q: 'Pour réussir ce projet, il faut ___ compte des remarques de chacun.',
      opts: ['tenir', 'prendre', 'faire', 'donner'],
      correct: 0,
      why: 'L’expression figée est « tenir compte de » ; « prendre », « faire » et « donner » ne forment pas cette locution avec « compte de ».',
      band: 'b1',
    },
  ],
};

/* ═══ Block C — Textes lacunaires ═════════════════════════════════════════ */
//
// Each gap is decided by the sentences around it, not by its own sentence.

export const CE_C: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '003'),
  level: 'b1',
  label: 'Section C',
  prompt: 'Lisez les deux textes et choisissez, pour chaque espace, le mot ou l’expression qui convient.',
  timingS: 420,
  targetItemIds: [
    'fr.b1.connecteurs-logiques.010', 'fr.b1.connecteurs-logiques.011',
    'fr.b1.ecologie.001', 'fr.b1.questions-sociales.001',
  ],
  parts: [
    {
      label: 'Texte 1 · le composteur de l’immeuble',
      text:
        'Depuis le printemps, l’immeuble des Ormes, à Hautemont, dispose d’un composteur collectif dans sa ' +
        'cour. Les résidents y déposent leurs épluchures, et le compost sert au potager du rez-de-chaussée. ' +
        '___ (1), tout n’a pas fonctionné du premier coup : pendant les premières semaines, des sacs en ' +
        'plastique se retrouvaient dans le bac et les odeurs gênaient les voisins. Deux résidentes ont alors ' +
        'affiché des consignes illustrées et tenu une permanence le samedi matin. ___ (2), les erreurs de ' +
        'tri ont presque disparu, et le comité de l’immeuble envisage d’installer un second bac.',
      items: [
        {
          q: 'Espace (1)',
          opts: ['Cependant', 'Ainsi', 'Par exemple', 'En effet'],
          correct: 0,
          why: 'Le texte présente d’abord un dispositif qui fonctionne, puis ses ratés : la relation est une opposition.',
          band: 'b1',
        },
        {
          q: 'Espace (2)',
          opts: ['Depuis', 'Auparavant', 'Pourtant', 'Par exemple'],
          correct: 0,
          why: 'La phrase décrit ce qui suit les consignes et la permanence de la phrase précédente : un repère postérieur, « depuis ».',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Texte 2 · la fibre ne suffit pas',
      text:
        'Beaucoup de petites municipalités espéraient attirer des télétravailleurs grâce à l’internet haute ' +
        'vitesse. Une étude de l’Institut Calvène montre que l’arrivée de la fibre n’a pas suffi : la ' +
        'population de ces villages n’a presque pas bougé. ___ (3), ce ne sont pas les connexions qui ' +
        'manquaient, mais les services : une garderie, une épicerie, un médecin. Les familles qui se sont ' +
        'installées citent d’abord ces trois éléments. ___ (4), les villages qui ont rouvert une école ' +
        'attirent davantage que ceux qui ont seulement amélioré leur réseau.',
      items: [
        {
          q: 'Espace (3)',
          opts: ['En réalité', 'Par conséquent', 'De plus', 'Par exemple'],
          correct: 0,
          why: 'La phrase corrige l’attente posée au début (la connexion) par ce qui manquait vraiment : « en réalité ».',
          band: 'b2',
        },
        {
          q: 'Espace (4)',
          opts: ['D’ailleurs', 'Pourtant', 'Au contraire', 'Sinon'],
          correct: 0,
          why: 'La dernière phrase ajoute un fait qui confirme ce qui précède ; aucune opposition ni alternative.',
          band: 'b1',
        },
      ],
    },
  ],
};
