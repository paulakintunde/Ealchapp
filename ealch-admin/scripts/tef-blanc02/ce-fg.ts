// TEF Canada blanc-02 — Compréhension écrite, blocks D+E, F and G.
//
//   D+E  5 · lecture rapide                            · 2 documents
//   F   10 · documents administratifs et professionnels · 2 documents
//   G    8 · articles de presse                         · 1 article
//
// D and E are one task because the published breakdown treats them as a single
// timed run: the candidate is finding facts fast, not reading closely, and
// splitting them would give two clocks where the format has one.
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

/* ═══ Blocks D + E — Lecture rapide ═══════════════════════════════════════ */
//
// Two commercial offers, dense with figures and conditions. The skill is
// locating one condition among several that look alike, which is why every
// distractor is a real figure from the same document.
//
// SELF-VERIFY (DE1–DE5): every option is a number or a term that appears in the
// document. No key can be reached by elimination without reading the condition
// it depends on.

export const CE_DE: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '004'),
  level: 'b1',
  label: 'Sections D et E',
  prompt: 'Lisez les documents et retrouvez les informations demandées.',
  timingS: 480,
  targetItemIds: uniq(ITEMS.internet, ITEMS.musique),
  parts: [
    {
      label: 'Document 1 · forfait mobile',
      text:
        'FORFAIT MOBILE · trois formules\n' +
        'ESSENTIEL · 9,99 €/mois · 20 Go · appels et SMS illimités en France\n' +
        'LARGE · 15,99 €/mois · 100 Go · appels illimités France et Europe · 25 Go utilisables en Europe\n' +
        'MAXI · 24,99 €/mois · 200 Go · appels illimités France, Europe et Canada · 50 Go en Europe\n' +
        '\n' +
        'Sans engagement. Frais de mise en service : 10 € une seule fois, offerts en cas de portabilité ' +
        'du numéro. Changement de formule possible une fois par mois, sans frais. ' +
        'Au-delà du volume inclus, le débit est réduit ; aucun dépassement n’est facturé.',
      items: [
        {
          q: 'Quel est le prix de la formule LARGE la première année, hors portabilité ?',
          opts: ['201,88 €', '191,88 €', '190,00 €', '181,88 €'],
          correct: 0,
          why: '15,99 × 12 = 191,88 €, plus 10 € de mise en service, soit 201,88 €. Les frais ne sont offerts qu’en cas de portabilité.',
          band: 'b1',
        },
        {
          q: 'Que se passe-t-il si l’on dépasse le volume inclus ?',
          opts: [
            'Le débit est réduit sans facturation supplémentaire',
            'Le dépassement est facturé au gigaoctet',
            'La ligne est suspendue jusqu’au mois suivant',
            'Le forfait passe automatiquement à la formule supérieure',
          ],
          correct: 0,
          why: '« Le débit est réduit ; aucun dépassement n’est facturé. »',
          band: 'b1',
        },
        {
          q: 'Quelle formule permet d’appeler depuis le Canada ?',
          opts: ['MAXI seulement', 'LARGE et MAXI', 'Les trois formules', 'Aucune des trois'],
          correct: 0,
          why: 'Seule MAXI mentionne le Canada ; LARGE s’arrête à la France et à l’Europe.',
          band: 'a2',
        },
      ],
    },
    {
      label: 'Document 2 · carte d’abonnement, salle de concert',
      text:
        'CARTE SAISON · 45 € pour l’année\n' +
        'Tarif réduit sur tous les concerts : 14 € au lieu de 22 €.\n' +
        'Deux places au tarif réduit par concert, pour vous et un accompagnant.\n' +
        'Priorité de réservation : 48 h avant l’ouverture au public.\n' +
        'Non nominative jusqu’au premier usage, nominative ensuite.\n' +
        'Les concerts du festival de juin sont exclus du tarif réduit.',
      items: [
        {
          q: 'À partir de combien de concerts la carte devient-elle avantageuse ?',
          opts: ['6 concerts', '5 concerts', '4 concerts', '3 concerts'],
          correct: 0,
          why: 'La carte fait économiser 8 € par place (22 − 14). Il faut 45 ÷ 8 = 5,6 places, donc 6 concerts pour que l’économie dépasse le prix de la carte.',
          band: 'b2',
        },
        {
          q: 'Quels concerts ne donnent pas droit au tarif réduit ?',
          opts: [
            'Ceux du festival de juin',
            'Ceux réservés moins de 48 h à l’avance',
            'Ceux auxquels on vient accompagné',
            'Ceux qui suivent le premier usage de la carte',
          ],
          correct: 0,
          why: '« Les concerts du festival de juin sont exclus du tarif réduit. »',
          band: 'a2',
        },
      ],
    },
  ],
};

/* ═══ Block F — Documents administratifs et professionnels ════════════════ */
//
// Ten questions on two documents, and the longest reading in the paper. These
// are the texts a candidate actually meets after arriving: a written procedure
// with conditions, and a contract clause that says what happens when something
// goes wrong.
//
// SELF-VERIFY (F1–F10): each key rests on a stated condition, never on an
// inference about intent. Where two conditions interact, the `why` names both.

export const CE_F: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '005'),
  level: 'b2',
  label: 'Section F',
  prompt: 'Lisez les documents et choisissez la bonne réponse.',
  timingS: 900,
  targetItemIds: uniq(ITEMS.bureau, ITEMS.affaires, ITEMS.droit),
  parts: [
    {
      label: 'Document 1 · demande de congé sans solde',
      text:
        'NOTE DE SERVICE · Congé sans solde\n' +
        '\n' +
        'Tout salarié justifiant d’un an d’ancienneté peut demander un congé sans solde pour suivre une ' +
        'formation. La demande est écrite et déposée au moins deux mois avant la date souhaitée.\n' +
        '\n' +
        'La direction répond dans un délai de trente jours. L’absence de réponse dans ce délai vaut accord.\n' +
        '\n' +
        'La direction peut reporter le congé une fois, de six mois au maximum, si l’absence désorganise le ' +
        'service. Elle ne peut le refuser que si le salarié ne remplit pas la condition d’ancienneté.\n' +
        '\n' +
        'Pendant le congé, le contrat est suspendu : la rémunération cesse, mais l’ancienneté continue de ' +
        'courir. Le salarié retrouve son poste ou un poste équivalent à son retour.\n' +
        '\n' +
        'Le salarié qui ne reprend pas à la date prévue, sans avoir prévenu, est considéré comme ' +
        'démissionnaire après quinze jours.',
      items: [
        {
          q: 'Que signifie l’absence de réponse de la direction après trente jours ?',
          opts: [
            'La demande est acceptée',
            'La demande est refusée',
            'Le délai est prolongé de trente jours',
            'La demande doit être déposée à nouveau',
          ],
          correct: 0,
          why: '« L’absence de réponse dans ce délai vaut accord. »',
          band: 'b2',
        },
        {
          q: 'Dans quel cas la direction peut-elle refuser le congé ?',
          opts: [
            'Si le salarié a moins d’un an d’ancienneté',
            'Si l’absence désorganise le service',
            'Si la demande est déposée moins de deux mois avant',
            'Si le salarié a déjà pris un congé sans solde',
          ],
          correct: 0,
          why: 'La note distingue report et refus : la désorganisation permet un REPORT, et le refus n’est possible que faute d’ancienneté.',
          band: 'b2',
        },
        {
          q: 'De combien la direction peut-elle reporter le congé ?',
          opts: [
            'De six mois au maximum, une seule fois',
            'De trente jours, renouvelables',
            'De deux mois, autant de fois que nécessaire',
            'Elle ne peut pas le reporter',
          ],
          correct: 0,
          why: '« La direction peut reporter le congé une fois, de six mois au maximum. »',
          band: 'b1',
        },
        {
          q: 'Qu’advient-il de l’ancienneté pendant le congé ?',
          opts: [
            'Elle continue de courir',
            'Elle est suspendue comme le contrat',
            'Elle est recalculée au retour',
            'Elle est perdue au-delà de six mois',
          ],
          correct: 0,
          why: '« Le contrat est suspendu : la rémunération cesse, mais l’ancienneté continue de courir. »',
          band: 'b2',
        },
        {
          q: 'Que risque un salarié qui ne reprend pas à la date prévue sans prévenir ?',
          opts: [
            'Être considéré comme démissionnaire au bout de quinze jours',
            'Être licencié immédiatement pour une faute grave',
            'Perdre son poste tout en conservant un poste jugé équivalent par la direction',
            'Voir son congé prolongé de six mois',
          ],
          correct: 0,
          why: '« Est considéré comme démissionnaire après quinze jours », et seulement s’il n’a pas prévenu.',
          band: 'b2',
        },
      ],
    },
    {
      label: 'Document 2 · contrat de prestation',
      text:
        'CONTRAT DE PRESTATION · extrait\n' +
        '\n' +
        'Article 4 · Délais. Le prestataire livre au plus tard le 30 du mois suivant la commande. Tout ' +
        'retard donne lieu à une pénalité de 0,5 % du montant de la commande par jour ouvré, plafonnée à ' +
        '10 % de ce montant.\n' +
        '\n' +
        'Article 5 · Réception. Le client dispose de dix jours ouvrés pour signaler un défaut. Passé ce ' +
        'délai, la prestation est réputée acceptée. Un défaut signalé dans le délai suspend le paiement du ' +
        'solde jusqu’à sa correction.\n' +
        '\n' +
        'Article 6 · Force majeure. Aucune pénalité n’est due si le retard résulte d’un événement ' +
        'extérieur, imprévisible et irrésistible. Le prestataire doit alors en informer le client sous ' +
        '48 heures, faute de quoi il ne peut plus s’en prévaloir.\n' +
        '\n' +
        'Article 7 · Résiliation. Chaque partie peut résilier avec un préavis de trente jours. En cas de ' +
        'manquement grave, la résiliation est immédiate, après une mise en demeure restée sans effet ' +
        'pendant huit jours.',
      items: [
        {
          q: 'À combien la pénalité de retard est-elle plafonnée ?',
          opts: [
            'À 10 % du montant de la commande',
            'À 0,5 % du montant de la commande',
            'À dix jours ouvrés de retard',
            'Il n’y a pas de plafond',
          ],
          correct: 0,
          why: '« Plafonnée à 10 % de ce montant » ; les 0,5 % sont le taux journalier.',
          band: 'b1',
        },
        {
          q: 'Que se passe-t-il si le client ne signale aucun défaut en dix jours ouvrés ?',
          opts: [
            'La prestation est réputée acceptée',
            'Le paiement du solde est suspendu',
            'Le contrat est résilié de plein droit',
            'Le délai est prolongé de dix jours',
          ],
          correct: 0,
          why: '« Passé ce délai, la prestation est réputée acceptée. »',
          band: 'b2',
        },
        {
          q: 'Quel effet a un défaut signalé dans le délai ?',
          opts: [
            'Il suspend le paiement du solde jusqu’à correction',
            'Il annule la commande',
            'Il déclenche la pénalité de retard',
            'Il ouvre un nouveau délai de dix jours',
          ],
          correct: 0,
          why: '« Un défaut signalé dans le délai suspend le paiement du solde jusqu’à sa correction. »',
          band: 'b2',
        },
        {
          q: 'À quelle condition le prestataire peut-il invoquer la force majeure ?',
          opts: [
            'S’il informe le client dans les 48 heures',
            'Si le retard dépasse dix jours ouvrés',
            'Si le client a déjà accepté la prestation',
            'Si la pénalité atteint son plafond',
          ],
          correct: 0,
          why: 'L’article 6 conditionne le bénéfice de la clause à l’information sous 48 heures, « faute de quoi il ne peut plus s’en prévaloir ».',
          band: 'b2',
        },
        {
          q: 'Comment une résiliation pour manquement grave se déroule-t-elle ?',
          opts: [
            'Immédiatement, après une mise en demeure restée huit jours sans effet',
            'Immédiatement, sans aucune formalité ni mise en demeure adressée au préalable',
            'Avec un préavis de trente jours comme les autres cas',
            'Après une pénalité portée à son plafond',
          ],
          correct: 0,
          why: 'L’article 7 exige une mise en demeure restée sans effet pendant huit jours avant la résiliation immédiate.',
          band: 'b2',
        },
      ],
    },
  ],
};

/* ═══ Block G — Article de presse ═════════════════════════════════════════ */
//
// Eight questions on one argued article, and the top of the reading épreuve.
// Two of the eight ask what the article does NOT claim, because a candidate who
// reads only for topic will agree with anything that sounds related.
//
// SELF-VERIFY (G1–G8): the figures are invented and attributed to an invented
// observatory. Questions 6 and 7 turn on positions the article reports without
// endorsing, and their `why` names the sentence that separates the two.

export const CE_G: ExamTask = {
  ...base,
  id: taskId('ce_mcq', '006'),
  level: 'b2',
  label: 'Section G',
  prompt: 'Lisez l’article et choisissez la bonne réponse.',
  timingS: 780,
  targetItemIds: uniq(ITEMS.economie, ITEMS.courses, ITEMS.marche),
  parts: [
    {
      label: 'Article · pourquoi le panier ne baisse pas quand les prix baissent',
      text:
        'Depuis dix-huit mois, les prix de gros de plusieurs denrées reculent. Le blé a perdu près d’un ' +
        'quart de sa valeur, le lait un cinquième. Dans les rayons, pourtant, le panier moyen n’a pas ' +
        'suivi : il a reculé de 1,2 % sur la même période, selon l’observatoire de Nervaux.\n' +
        '\n' +
        'L’explication tient d’abord à la structure du prix. Dans une plaquette de beurre, la matière ' +
        'première représente environ un tiers du prix payé en caisse. Le reste se partage entre la ' +
        'transformation, l’emballage, le transport, l’énergie et la marge du distributeur. Or ces postes ' +
        'n’ont pas baissé : l’énergie a reculé, mais les salaires du secteur ont progressé de 4,1 %.\n' +
        '\n' +
        'Un deuxième facteur est contractuel. Les négociations entre industriels et distributeurs sont ' +
        'annuelles. Un prix de gros qui baisse en mars ne se répercute donc, au mieux, qu’à la ' +
        'renégociation suivante. Ce décalage joue dans les deux sens : il avait retardé les hausses en ' +
        '2022, il retarde les baisses aujourd’hui.\n' +
        '\n' +
        'Certaines associations de consommateurs y voient une rétention délibérée de la baisse. Les ' +
        'distributeurs répondent que leur marge nette sur l’alimentaire se situe autour de 2 %, et qu’une ' +
        'rétention de cette ampleur se verrait dans leurs comptes. L’observatoire, prudent, note que les ' +
        'deux thèses sont difficiles à départager tant que le détail des contrats reste confidentiel.\n' +
        '\n' +
        'Reste un effet dont on parle peu : la composition du panier change. À budget constant, les ' +
        'ménages achètent davantage de produits premiers prix, ce qui fait baisser le montant moyen sans ' +
        'qu’aucun prix n’ait bougé. L’observatoire estime que ce glissement explique à lui seul la moitié ' +
        'du recul de 1,2 % observé.',
      items: [
        {
          q: 'De combien le panier moyen a-t-il reculé ?',
          opts: ['1,2 %', '4,1 %', 'Un quart', 'Un cinquième'],
          correct: 0,
          why: 'Le panier recule de 1,2 %. Le quart et le cinquième sont les baisses du blé et du lait ; 4,1 % est la hausse des salaires du secteur.',
          band: 'b1',
        },
        {
          q: 'Quelle part la matière première représente-t-elle dans une plaquette de beurre ?',
          opts: ['Environ un tiers', 'Environ la moitié', 'Environ un cinquième', 'Environ 2 %'],
          correct: 0,
          why: '« La matière première représente environ un tiers du prix payé en caisse. » Les 2 % sont la marge nette des distributeurs.',
          band: 'b1',
        },
        {
          q: 'Pourquoi les autres postes du prix n’ont-ils pas baissé ?',
          opts: [
            'Parce que la hausse des salaires a compensé le recul de l’énergie',
            'Parce que le coût de l’énergie a augmenté plus vite que les salaires du secteur',
            'Parce que le coût du transport routier a doublé',
            'Parce que l’emballage est désormais facturé au poids',
          ],
          correct: 0,
          why: '« L’énergie a reculé, mais les salaires du secteur ont progressé de 4,1 %. »',
          band: 'b2',
        },
        {
          q: 'Quel est l’effet du caractère annuel des négociations ?',
          opts: [
            'Les variations de prix de gros ne se répercutent qu’avec un décalage',
            'Les prix de gros sont fixés unilatéralement par les distributeurs eux-mêmes',
            'Les industriels peuvent refuser toute hausse',
            'Les contrats sont renégociés chaque trimestre',
          ],
          correct: 0,
          why: '« Un prix de gros qui baisse en mars ne se répercute donc, au mieux, qu’à la renégociation suivante. »',
          band: 'b2',
        },
        {
          q: 'Que dit l’article du décalage contractuel ?',
          opts: [
            'Il joue dans les deux sens, sur les hausses comme sur les baisses',
            'Il ne joue que sur les baisses, jamais sur les hausses de prix de gros',
            'Il a disparu depuis la crise de 2022',
            'Il est propre au seul secteur laitier',
          ],
          correct: 0,
          why: '« Il avait retardé les hausses en 2022, il retarde les baisses aujourd’hui. »',
          band: 'b2',
        },
        {
          q: 'Quelle position l’article attribue-t-il aux distributeurs ?',
          opts: [
            'Une rétention se verrait dans leurs comptes, où la marge nette est d’environ 2 %',
            'La baisse des prix de gros est un phénomène passager',
            'Les associations de consommateurs exagèrent la hausse des salaires',
            'La composition du panier des ménages explique à elle seule la totalité du recul observé',
          ],
          correct: 0,
          why: 'C’est leur réponse rapportée : marge nette autour de 2 %, « et qu’une rétention de cette ampleur se verrait dans leurs comptes ».',
          band: 'b2',
        },
        {
          q: 'Quelle est la position de l’observatoire sur ce désaccord ?',
          opts: [
            'Il juge les deux thèses difficiles à départager faute d’accès aux contrats',
            'Il donne raison aux associations de consommateurs et met en cause les distributeurs',
            'Il donne raison aux distributeurs sur tous les points',
            'Il estime que le désaccord n’a pas d’importance',
          ],
          correct: 0,
          why: '« L’observatoire, prudent, note que les deux thèses sont difficiles à départager tant que le détail des contrats reste confidentiel. »',
          band: 'c1',
        },
        {
          q: 'Quel rôle joue le changement de composition du panier ?',
          opts: [
            'Il explique la moitié du recul sans qu’aucun prix ait bougé',
            'Il explique la totalité du recul observé',
            'Il fait augmenter le montant moyen du panier',
            'Il ne concerne que les produits laitiers',
          ],
          correct: 0,
          why: 'Le glissement vers les premiers prix « explique à lui seul la moitié du recul de 1,2 % observé », à budget constant.',
          band: 'b2',
        },
      ],
    },
  ],
};
