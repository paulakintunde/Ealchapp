// TCF Canada blanc-03 — Compréhension orale, the lower slope (A1, A2, B1).
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
// Written to the length envelope from the first draft: at the band's target
// rate, A1 fills 10-20s, A2 20-30s, B1 30-50s. `lengthShortfalls` fails the
// suite on a short document and check-authored-length.ts reports it before a
// single clip is rendered.
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
  timingS: 115,
  targetItemIds: uniq(ITEMS.auRestaurant.a1, ITEMS.deplacements.a1, ITEMS.transportsQuotidiens.a1),
  parts: [
    {
      label: 'Document 1 · à la boulangerie',
      playCount: 1,
      readWindowS: 10,
      durationS: 17,
      text:
        'UNE CLIENTE : Bonjour. Je voudrais deux croissants, s’il vous plaît.\n' +
        'UN BOULANGER : Deux croissants, voilà. Ce sera tout ?\n' +
        'UNE CLIENTE : Oui, merci. Ils sortent du four ?\n' +
        'UN BOULANGER : De ce matin, ils sont encore tièdes. Deux euros vingt.',
      items: [
        {
          q: 'Que commande cette cliente ?',
          opts: ['Deux croissants', 'Une baguette', 'Deux pains au chocolat', 'Un gâteau'],
          correct: 0,
          why: 'Elle demande deux croissants, et le boulanger les lui donne.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 2 · à l’interphone',
      playCount: 1,
      readWindowS: 10,
      durationS: 17,
      text:
        'UNE VOIX : Cabinet médical, bonjour.\n' +
        'UN HOMME : Bonjour, j’ai rendez-vous avec le docteur Vallier.\n' +
        'UNE VOIX : Je vous ouvre. C’est au troisième étage, la porte de droite en sortant de l’ascenseur.\n' +
        'UN HOMME : Merci beaucoup.',
      items: [
        {
          q: 'À quel étage se trouve le cabinet ?',
          opts: ['Au troisième', 'Au premier', 'Au quatrième', 'Au rez-de-chaussée'],
          correct: 0,
          why: 'La voix indique le troisième étage, porte de droite.',
          band: 'a1',
        },
      ],
    },
    {
      label: 'Document 3 · une annonce en gare',
      playCount: 1,
      readWindowS: 10,
      durationS: 18,
      text:
        'UNE VOIX : Votre attention. Le train à destination de Corbeny partira du quai numéro trois. ' +
        'Nous invitons les voyageurs à se présenter dès maintenant. ' +
        'Merci de votre attention et bon voyage à toutes et à tous.',
      items: [
        {
          q: 'De quel quai le train part-il ?',
          opts: ['Du quai numéro trois', 'Du quai numéro deux', 'Du quai numéro treize', 'Du quai numéro huit'],
          correct: 0,
          why: 'L’annonce indique le quai numéro trois.',
          band: 'a1',
        },
      ],
    },
  ],
};

/* ═══ A2 — positions 4 to 9 ═══════════════════════════════════════════════ */
//
// SELF-VERIFY: every document names exactly ONE competing fact the candidate
// must set aside — a second flat, a second tariff, a second machine, a second
// day.

export const CO_A2: ExamTask = {
  ...base,
  id: taskId('co_mcq', '002'),
  level: 'a2',
  label: 'Compréhension orale · A2',
  prompt: 'Vous allez entendre six documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 295,
  targetItemIds: uniq(
    ITEMS.hebergement.a2,
    ITEMS.transportsQuotidiens.a2,
    ITEMS.routines.a2,
    ITEMS.sportsEtLoisirs.a2,
    ITEMS.maison.a2,
    ITEMS.auRestaurant.a2
  ),
  parts: [
    {
      label: 'Document 4 · deux appartements visités',
      playCount: 1,
      readWindowS: 12,
      durationS: 23,
      text:
        'UNE FEMME : Alors, le premier fait quarante mètres carrés, au quatrième, sans ascenseur.\n' +
        'UN HOMME : Et le second ?\n' +
        'UNE FEMME : Trente-cinq mètres carrés seulement, mais au deuxième, avec ascenseur. ' +
        'Et il est cinquante euros moins cher.\n' +
        'UN HOMME : Avec ta jambe, je crois que la question est réglée.',
      items: [
        {
          q: 'Quel appartement a un ascenseur ?',
          opts: ['Le second', 'Le premier', 'Les deux', 'Aucun des deux'],
          correct: 0,
          why: 'Le premier est au quatrième sans ascenseur ; le second au deuxième, avec.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 5 · au guichet',
      playCount: 1,
      readWindowS: 12,
      durationS: 24,
      text:
        'UN HOMME : Bonjour, je voudrais me faire rembourser ce billet, je n’ai pas pris le train.\n' +
        'UNE EMPLOYÉE : Les billets à tarif réduit ne sont pas remboursables, monsieur. ' +
        'Ils sont échangeables jusqu’à la veille du départ.\n' +
        'UN HOMME : Donc je ne peux rien faire ?\n' +
        'UNE EMPLOYÉE : Plus maintenant, non. Le départ était hier.',
      items: [
        {
          q: 'Pourquoi le billet n’est-il pas remboursé ?',
          opts: [
            'C’est un tarif réduit, et le départ est passé',
            'Le guichet est fermé',
            'Il a perdu son billet',
            'Le train n’a pas été annulé',
          ],
          correct: 0,
          why: 'L’échange était possible jusqu’à la veille ; le remboursement ne l’a jamais été.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 6 · la journée d’hier',
      playCount: 1,
      readWindowS: 12,
      durationS: 24,
      text:
        'UNE FEMME : Hier, je me suis levée à six heures pour finir un dossier avant la réunion. ' +
        'La réunion a été reportée à ce matin, finalement. ' +
        'Alors j’ai profité de l’après-midi pour aller à la piscine, ' +
        'ce que je n’avais pas fait depuis des mois.',
      items: [
        {
          q: 'Qu’a-t-elle fait hier après-midi ?',
          opts: ['Elle est allée à la piscine', 'Elle a assisté à la réunion', 'Elle a fini son dossier', 'Elle s’est reposée'],
          correct: 0,
          why: 'La réunion a été reportée à ce matin. L’après-midi est libre, et elle va nager.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 7 · un forfait de salle de sport',
      playCount: 1,
      readWindowS: 12,
      durationS: 24,
      text:
        'UN CONSEILLER : Nous avons deux formules. Le forfait libre, à trente-cinq euros par mois, ' +
        'sans engagement. Et le forfait annuel, à vingt-cinq euros par mois, mais douze mois fermes.\n' +
        'UNE FEMME : Il y a des frais d’inscription ?\n' +
        'UN CONSEILLER : Trente euros une fois, dans les deux cas, avec l’accès à la piscine.\n' +
        'UNE FEMME : Je pars peut-être en septembre pour mon travail. Je prends le premier.',
      items: [
        {
          q: 'Quelle formule choisit-elle ?',
          opts: [
            'Le forfait libre, sans engagement',
            'Le forfait annuel',
            'Aucune des deux',
            'Les deux à l’essai',
          ],
          correct: 0,
          why: 'Elle part peut-être en septembre, donc elle prend le premier : le forfait libre.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 8 · la machine à laver collective',
      playCount: 1,
      readWindowS: 12,
      durationS: 24,
      text:
        'UNE VOISINE : La machine de gauche chauffe mal, tout le monde prend celle de droite. ' +
        'Vous mettez un jeton, vous choisissez le programme, et vous appuyez deux secondes ' +
        'sur le bouton vert. Si vous appuyez trop vite, elle ne démarre pas et le jeton est perdu.',
      items: [
        {
          q: 'Que faut-il faire pour démarrer la machine ?',
          opts: [
            'Appuyer deux secondes sur le bouton vert',
            'Appuyer brièvement sur le bouton vert',
            'Choisir la machine de gauche',
            'Mettre deux jetons',
          ],
          correct: 0,
          why: 'Un appui trop bref ne démarre rien et coûte le jeton.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 9 · un plat à emporter',
      playCount: 1,
      readWindowS: 12,
      durationS: 24,
      text:
        'UN CLIENT : Bonjour, un plat du jour à emporter, s’il vous plaît. Sans oignons, si c’est possible.\n' +
        'UNE SERVEUSE : Le plat du jour, c’est un poulet basquaise. Il y a des oignons dans la sauce, ' +
        'ils sont mixés. Je peux vous faire le poulet grillé à la place, avec du riz.\n' +
        'UN CLIENT : Parfait, va pour le poulet grillé.',
      items: [
        {
          q: 'Que commande finalement le client ?',
          opts: ['Un poulet grillé avec du riz', 'Le poulet basquaise', 'Le plat du jour sans sauce', 'Rien du tout'],
          correct: 0,
          why: 'Les oignons du plat du jour sont mixés dans la sauce, alors il prend l’autre proposition.',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ B1 — positions 10 to 19 ═════════════════════════════════════════════ */
//
// Seven documents, ten questions: three carry two. A document with two
// questions is one where two facts must be held at once, not one fact asked
// twice.

export const CO_B1: ExamTask = {
  ...base,
  id: taskId('co_mcq', '003'),
  level: 'b1',
  label: 'Compréhension orale · B1',
  prompt: 'Vous allez entendre sept documents. Pour chaque document, choisissez la bonne réponse.',
  timingS: 498,
  targetItemIds: uniq(
    ITEMS.cinema.b1,
    ITEMS.litterature.b1,
    ITEMS.traditions.b1,
    ITEMS.disciplines.b1,
    ITEMS.bienEtre.b1,
    ITEMS.economie.b1,
    ITEMS.rpSociete.b1
  ),
  parts: [
    {
      label: 'Document 10 · le cinéma repris par le quartier',
      playCount: 1,
      readWindowS: 20,
      durationS: 39,
      text:
        'UNE REPORTRICE : Le cinéma Pralet a fermé il y a quatre ans. Il rouvre samedi, ' +
        'repris par une association de quatre-vingts habitants.\n' +
        'UNE BÉNÉVOLE : Nous avons racheté la salle, pas le fonds de commerce. ' +
        'C’est important : nous ne reprenons pas une entreprise en difficulté, ' +
        'nous repartons de zéro avec un bâtiment.\n' +
        'UNE REPORTRICE : Vous programmerez la même chose qu’avant ?\n' +
        'UNE BÉNÉVOLE : Non. L’ancien exploitant visait le grand public et la concurrence l’a tué. ' +
        'Nous ferons ce que le multiplexe ne fait pas : des reprises, des documentaires, ' +
        'et des séances suivies d’une discussion.',
      items: [
        {
          q: 'Qu’a exactement racheté l’association ?',
          opts: [
            'La salle, mais pas le fonds de commerce',
            'Le cinéma et son activité',
            'Le bâtiment et le matériel de projection',
            'Une part du multiplexe',
          ],
          correct: 0,
          why: 'Elle insiste sur la distinction : un bâtiment, pas une entreprise en difficulté.',
          band: 'b1',
        },
        {
          q: 'Quelle programmation prévoient-ils ?',
          opts: [
            'Ce que le multiplexe ne propose pas',
            'La même chose qu’avant la fermeture',
            'Uniquement des films pour enfants',
            'Des films en avant-première',
          ],
          correct: 0,
          why: 'Viser le grand public a tué l’ancien exploitant : reprises, documentaires, séances suivies d’une discussion.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 11 · un libraire et ses ventes',
      playCount: 1,
      readWindowS: 20,
      durationS: 39,
      text:
        'UN JOURNALISTE : Vos ventes ont augmenté de six pour cent l’an dernier. ' +
        'C’est à contre-courant.\n' +
        'UN LIBRAIRE : Le chiffre est juste et il cache l’essentiel. ' +
        'Nous vendons moins de nouveautés qu’il y a cinq ans, nettement moins. ' +
        'Ce qui monte, ce sont les livres de fonds, ceux qui ont plus de deux ans.\n' +
        'UN JOURNALISTE : Comment l’expliquez-vous ?\n' +
        'UN LIBRAIRE : Par la table. Nous avons cessé d’empiler les sorties du mois ' +
        'et nous mettons en avant vingt titres choisis, qui restent trois mois. ' +
        'Un client qui revient les retrouve, et finit par en prendre un.',
      items: [
        {
          q: 'Que cache la hausse de six pour cent ?',
          opts: [
            'Les nouveautés se vendent nettement moins',
            'Les prix ont augmenté',
            'La librairie a changé de local',
            'Les clients sont moins nombreux',
          ],
          correct: 0,
          why: 'Ce qui monte est le fonds ; les nouveautés reculent.',
          band: 'b1',
        },
        {
          q: 'À quoi attribue-t-il ce changement ?',
          opts: [
            'À la façon dont les livres sont mis en avant',
            'À une baisse des prix',
            'À la publicité',
            'À la fermeture d’un concurrent',
          ],
          correct: 0,
          why: 'Vingt titres choisis qui restent trois mois, au lieu des piles de nouveautés.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 12 · les habitués de la brocante',
      playCount: 1,
      readWindowS: 20,
      durationS: 39,
      text:
        'UNE REPORTRICE : Vous exposez ici depuis dix-sept ans.\n' +
        'UN VENDEUR : Dix-sept ans, oui. Au début je vendais ce que je trouvais dans les greniers. ' +
        'Maintenant, ce sont les gens qui m’apportent leurs cartons quand ils déménagent.\n' +
        'UNE REPORTRICE : Vous gagnez votre vie avec ça ?\n' +
        'UN VENDEUR : Non, et ce n’est pas la question. Je suis retraité. ' +
        'Ce que je viens chercher, c’est le dimanche matin. ' +
        'Ceux qui viennent pour l’argent ne tiennent pas trois saisons : ' +
        'il faut se lever à cinq heures et rentrer parfois avec quarante euros.',
      items: [
        {
          q: 'Comment se procure-t-il aujourd’hui ce qu’il vend ?',
          opts: [
            'Les gens lui apportent leurs cartons',
            'Il fouille les greniers',
            'Il achète à d’autres brocanteurs',
            'Il vend ses propres affaires',
          ],
          correct: 0,
          why: 'Les greniers, c’était au début. Maintenant on lui apporte les cartons.',
          band: 'b1',
        },
        {
          q: 'Pourquoi continue-t-il ?',
          opts: [
            'Pour le rendez-vous du dimanche matin',
            'Parce que c’est rentable',
            'Pour compléter sa retraite',
            'Parce qu’il n’a rien d’autre à faire',
          ],
          correct: 0,
          why: 'Il écarte l’argent lui-même : ceux qui viennent pour ça ne tiennent pas trois saisons.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 13 · un choix de formation',
      playCount: 1,
      readWindowS: 18,
      durationS: 34,
      text:
        'UNE FEMME : J’avais deux possibilités : un an de formation courte, ou trois ans en alternance.\n' +
        'UN HOMME : Tu as pris les trois ans.\n' +
        'UNE FEMME : Oui, et pas pour le diplôme. La formation courte donne le même titre. ' +
        'Mais en alternance, on entre dans une entreprise, et à la fin, on connaît le métier ' +
        'et le métier vous connaît. C’est ça que j’achète avec deux années de plus.\n' +
        'UN HOMME : Et le salaire pendant ce temps ?\n' +
        'UNE FEMME : Faible, mais il existe. En formation courte, on paie pour apprendre ; ' +
        'en alternance, on est payé. Sur trois ans, l’écart n’est pas mince.',
      items: [
        {
          q: 'Pourquoi a-t-elle choisi l’alternance ?',
          opts: [
            'Pour être connue dans le métier à la sortie',
            'Parce que le diplôme est meilleur',
            'Parce que c’est plus rapide',
            'Parce que c’est moins cher',
          ],
          correct: 0,
          why: 'Elle écarte le diplôme : les deux voies donnent le même titre.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 14 · le sommeil et les écrans',
      playCount: 1,
      readWindowS: 18,
      durationS: 34,
      text:
        'UNE CHRONIQUEUSE : On répète que la lumière bleue des écrans empêche de dormir. ' +
        'Les études récentes sont plus nuancées : l’effet de la lumière existe, ' +
        'et il est faible comparé à ce qui se passe dans la tête.\n' +
        'UN INVITÉ : C’est-à-dire ?\n' +
        'UNE CHRONIQUEUSE : Un écran qui montre une série ne dérange pas comme un écran ' +
        'qui montre des messages auxquels il faut répondre. ' +
        'Ce n’est pas la lampe qui vous tient éveillé, c’est ce qu’elle éclaire.',
      items: [
        {
          q: 'Que disent les études récentes ?',
          opts: [
            'Le contenu compte davantage que la lumière',
            'La lumière bleue n’a aucun effet',
            'Les écrans améliorent le sommeil',
            'Il faut éteindre deux heures avant',
          ],
          correct: 0,
          why: 'L’effet de la lumière existe et reste faible : « ce n’est pas la lampe, c’est ce qu’elle éclaire ».',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 15 · vendre en direct',
      playCount: 1,
      readWindowS: 18,
      durationS: 34,
      text:
        'UN JOURNALISTE : Vous vendez tout à la ferme depuis quatre ans. C’est plus rentable ?\n' +
        'UNE AGRICULTRICE : Par kilo, oui, largement. Sur l’année, c’est moins clair. ' +
        'Il faut compter les heures : je passe deux jours par semaine à vendre ' +
        'au lieu de produire, et je paie une personne le samedi.\n' +
        'UN JOURNALISTE : Vous y reviendriez ?\n' +
        'UNE AGRICULTRICE : Je ne repartirais pas en arrière. Ce que j’ai gagné, ' +
        'ce n’est pas de l’argent, c’est de savoir à qui je vends.',
      items: [
        {
          q: 'Quel est le bilan qu’elle tire ?',
          opts: [
            'Le gain n’est pas d’abord financier',
            'La vente directe rapporte nettement plus',
            'Elle envisage de revenir en arrière',
            'Elle a dû embaucher deux personnes',
          ],
          correct: 0,
          why: 'Par kilo c’est mieux, sur l’année moins clair. Ce qu’elle a gagné est de savoir à qui elle vend.',
          band: 'b1',
        },
      ],
    },
    {
      label: 'Document 16 · la ville et la campagne',
      playCount: 1,
      readWindowS: 18,
      durationS: 34,
      text:
        'UN HOMME : On dit toujours que la campagne coûte moins cher. ' +
        'Le loyer, oui, deux fois moins. Mais nous avons dû acheter une seconde voiture, ' +
        'et je fais quatre cents kilomètres par semaine.\n' +
        'UNE FEMME : Donc c’est pareil ?\n' +
        'UN HOMME : Financièrement, presque. Ce qui change, c’est le temps : ' +
        'je passe une heure de plus par jour dans la voiture, et mes enfants ont un jardin. ' +
        'Personne ne peut vous dire lequel des deux vaut le plus.',
      items: [
        {
          q: 'Que conclut cet homme ?',
          opts: [
            'Le coût s’équilibre, et le reste ne se compare pas',
            'La campagne revient nettement moins cher',
            'La ville est préférable pour les enfants',
            'Il regrette son déménagement',
          ],
          correct: 0,
          why: 'Le loyer moitié moins contre une seconde voiture : « financièrement, presque » pareil.',
          band: 'b1',
        },
      ],
    },
  ],
};
