# TOPICS — TEF Canada

**Blueprint:** `tef-canada-2025.09` · **296 situations**
**Compiled:** 2026-08-24 (phase E0)

Our own topic bank. Built from the CEFR can-do descriptors and the 128 themes already in `content_themes`. Nothing here is drawn from an exam paper. See [README.md](README.md).

---

## How to use this

A paper plan assigns one topic per block. Rules:

1. **No topic is reused across TEF papers.** The paper plan tracks what papers 1..N-1 consumed.
   **A paper consumes ~45 situations, not ~20.** The original estimate here said five papers × ~20 blocks and concluded 66 was ample; measured against the finished Examen 1 it is not, and the error is block size. A paper has ~20 blocks but block CO-G alone is 17 separate documents and CE-A is 7, so Examen 1 spent 45 situations and left 21. Five papers need ~225. The bank was expanded to 226 in phase E9 for exactly this reason — check `pnpm tsx scripts/topic-demand.ts <papers>` before planning, rather than trusting a total.
2. **The `Suits` column is a suggestion, not a constraint.** A situation that works as a listening interview usually also works as a press article. What it must not do is appear twice in the same paper wearing two hats.
3. **The `Theme` column resolves against `content_themes`**, which is how `targetItemIds` gets populated from real corpus items. A block whose theme has no published items at the needed band is a block whose misses cannot route back to the SRS.
4. **Every proper noun in the finished stimulus is invented** (STANDARD-common §6). The situations below name no real place, business or person, and neither should the items.

TEF is centred on **B1–B2** with A2 at the bottom of each block and C1 at the top. The `Bands` column is the range the situation supports, not a single target.

**Suits codes.** `CO-A` conversations avec dessins · `CO-B` annonces publiques · `CO-C` micros-trottoirs · `CO-D` chroniques radio · `CO-E` interviews · `CO-F` reportage · `CO-G` documents divers · `CE-A` documents de la vie quotidienne · `CE-BC` phrases et textes lacunaires · `CE-DE` lecture rapide · `CE-F` documents administratifs et professionnels · `CE-G` articles de presse · `EE-A` fait divers · `EE-B` lettre argumentée · `EO-A` obtenir de l'information · `EO-B` convaincre

---

## Logement et voisinage

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-01 | Un locataire signale une infiltration d'eau au gestionnaire de l'immeuble | A2–B1 | `maison` | CO-G, CE-F, EE-A |
| TEF-02 | Une copropriété vote des travaux de ravalement et certains propriétaires s'y opposent | B1–B2 | `voisinage` | CO-E, CE-G, EE-B |
| TEF-03 | Une annonce de colocation précise les charges et les conditions | A2–B1 | `hebergement` | CE-A, CE-DE, EO-A |
| TEF-04 | Un règlement intérieur d'immeuble interdit le bruit après vingt-deux heures | A2–B1 | `voisinage` | CE-F, CO-B |
| TEF-05 | Un déménagement raté : le camion arrive avec trois heures de retard | A2–B1 | `maison` | CO-G, EE-A |
| TEF-06 | Un débat sur l'encadrement des loyers dans les grandes villes | B2–C1 | `questions-sociales` | CO-C, CE-G, EE-B |

## Travail et emploi

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-07 | Une offre d'emploi mentionne un télétravail partiel et une période d'essai | A2–B1 | `recherche-emploi` | CE-A, CE-DE, EO-A |
| TEF-08 | Un entretien d'embauche pour un poste de gestionnaire de stock | B1–B2 | `recherche-emploi` | CO-E |
| TEF-09 | Une note de service annonce un changement d'horaires d'ouverture | A2–B1 | `bureau` | CE-F, CO-B |
| TEF-10 | Un salarié demande un congé sans solde pour suivre une formation | B1 | `bureau` | CE-F |
| TEF-11 | Micro-trottoir : faut-il limiter les réunions à trente minutes ? | B1–B2 | `collegues` | CO-C |
| TEF-12 | Une chronique sur la semaine de quatre jours | B2 | `affaires` | CO-D, CE-G |
| TEF-13 | Un contrat de prestation précise les délais et les pénalités de retard | B2–C1 | `affaires` | CE-F |
| TEF-14 | Une reconversion professionnelle à quarante ans | B1–B2 | `metiers` | CO-E |
| TEF-15 | Un désaccord entre deux collègues sur le partage d'un bureau | A2–B1 | `collegues` | CO-G |

## Santé et services

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-16 | Une prise de rendez-vous chez un spécialiste avec un délai de trois mois | A2–B1 | `systeme-de-sante` | CO-G, EO-A |
| TEF-17 | Une notice de médicament précise la posologie et les contre-indications | B1–B2 | `soins` | CE-F |
| TEF-18 | Une campagne de vaccination annoncée dans une pharmacie | A2–B1 | `systeme-de-sante` | CO-B, CE-A |
| TEF-19 | Un reportage sur les zones rurales sans médecin traitant | B2–C1 | `systeme-de-sante` | CO-F, CE-G |
| TEF-20 | Micro-trottoir : la téléconsultation peut-elle remplacer le médecin ? | B1–B2 | `bien-etre` | CO-C |
| TEF-21 | Un formulaire de remboursement de frais de santé et ses justificatifs | B1–B2 | `systeme-de-sante` | CE-F |

## Démarches et citoyenneté

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-22 | Un guide explique comment renouveler un titre de séjour | B1–B2 | `immigration-et-citoyennete` | CE-F |
| TEF-23 | Une permanence juridique gratuite annoncée en mairie | A2–B1 | `droit` | CE-A, CO-B |
| TEF-24 | Un litige avec un fournisseur d'énergie porté devant un médiateur | B2 | `droit` | CE-F, EE-B |
| TEF-25 | Une consultation publique sur un projet de tramway | B2 | `gouvernement` | CO-E, CE-G, EE-B |
| TEF-26 | Les conditions d'accès à une aide au logement | B1–B2 | `gouvernement` | CE-F |
| TEF-27 | Un contrôle des bagages à l'aéroport et une déclaration de douane | A2–B1 | `douane-et-immigration` | CO-G, CE-A |

## Transports et déplacements

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-28 | Une annonce de retard en gare et un report sur un autre train | A1–A2 | `transports-quotidiens` | CO-B, CO-A |
| TEF-29 | Un abonnement de transport en commun et ses tarifs réduits | A2–B1 | `transports-quotidiens` | CE-DE, EO-A |
| TEF-30 | Micro-trottoir : faut-il piétonniser le centre-ville ? | B1–B2 | `la-ville` | CO-C |
| TEF-31 | Un accrochage sans gravité à un carrefour et un constat amiable | A2–B1 | `transports-quotidiens` | EE-A |
| TEF-32 | Une chronique sur le covoiturage entre le domicile et le travail | B2 | `ecologie` | CO-D |
| TEF-33 | Un plan de circulation modifié pendant des travaux de voirie | B1 | `la-ville` | CE-A, CO-B |

## Commerce et argent

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-34 | Un remboursement refusé faute de ticket de caisse | A2–B1 | `courses` | CO-G, EE-A |
| TEF-35 | Les conditions d'une garantie sur un appareil ménager | B1–B2 | `appareils` | CE-F |
| TEF-36 | Une offre d'abonnement avec engagement de douze mois | B1 | `argent-quotidien` | CE-DE, EO-A |
| TEF-37 | Une chronique sur la hausse des prix alimentaires | B2 | `economie` | CO-D, CE-G |
| TEF-38 | Un marché de producteurs ouvert le samedi matin | A1–A2 | `marche` | CE-A, CO-A |
| TEF-39 | Une contestation de frais bancaires non annoncés | B2 | `argent-quotidien` | CE-F, EE-B |

## Formation et études

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-40 | Une inscription en ligne à un cours du soir | A2–B1 | `examens-et-diplomes` | CE-DE, EO-A |
| TEF-41 | Un entretien avec une étudiante qui reprend ses études à trente ans | B1–B2 | `universite` | CO-E |
| TEF-42 | Un règlement d'examen précise les cas d'absence justifiée | B2 | `examens-et-diplomes` | CE-F |
| TEF-43 | Un reportage sur l'orientation après le lycée | B2–C1 | `ecole` | CO-F |
| TEF-44 | Micro-trottoir : les diplômes ont-ils encore de la valeur ? | B2 | `examens-et-diplomes` | CO-C, EE-B |

## Environnement

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-45 | Une consigne de tri affichée dans un local à poubelles | A2–B1 | `ecologie` | CE-A, CO-B |
| TEF-46 | Un bulletin météo annonce un épisode de vent violent | A2–B1 | `meteo` | CO-B, CO-G |
| TEF-47 | Un désaccord sur l'installation d'éoliennes près d'un village | B2–C1 | `ecologie` | CO-E, CE-G, EE-B |
| TEF-48 | Une association organise un ramassage de déchets en bord de rivière | A2–B1 | `ecologie` | CE-A, EO-B |
| TEF-49 | Un graphique de la consommation d'eau par ménage sur cinq ans | B1–B2 | `ecologie` | CE-DE |
| TEF-50 | Une chronique sur les fortes chaleurs en ville | B2–C1 | `ecologie` | CO-D |

## Technologie et information

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-51 | Une panne de connexion et un service client saturé | A2–B1 | `internet` | CO-G, EE-A |
| TEF-52 | Les conditions d'utilisation d'une application de messagerie | B2 | `internet` | CE-F |
| TEF-53 | Micro-trottoir : faut-il limiter les écrans chez les enfants ? | B1–B2 | `reseaux-sociaux` | CO-C |
| TEF-54 | Un reportage sur la fermeture des rédactions locales | B2–C1 | `journalisme` | CO-F, CE-G |
| TEF-55 | Un guide d'installation d'un routeur | A2–B1 | `appareils` | CE-F, CO-G |

## Vie sociale et culture

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-56 | Un stage de poterie proposé par une association de quartier | A2–B1 | `rp-loisirs` | CE-A, EO-A, EO-B |
| TEF-57 | Une exposition temporaire prolongée de trois semaines | B1 | `musees` | CO-B, CE-A |
| TEF-58 | Un club de course cherche des bénévoles pour une épreuve | A2–B1 | `sports-et-loisirs` | EO-B, CE-A |
| TEF-59 | Une fête de quartier annulée pour des raisons de sécurité | A2–B1 | `communaute` | EE-A, CO-B |
| TEF-60 | Une chronique sur le recul du bénévolat associatif | B2 | `communaute` | CO-D, EE-B |
| TEF-61 | Un festival de cinéma en plein air, programme et tarifs | A2–B1 | `cinema` | CE-DE, EO-A |

## Questions de société

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-62 | Un échange sur le télétravail et la vie de bureau | B2 | `questions-sociales` | CO-E, EE-B |
| TEF-63 | Micro-trottoir : faut-il rendre le bénévolat obligatoire au lycée ? | B2 | `valeurs` | CO-C |
| TEF-64 | Un article sur la place du français dans les milieux de travail bilingues | B2–C1 | `quebec-et-francophonie` | CE-G |
| TEF-65 | Un reportage sur l'accueil des nouveaux arrivants dans une petite ville | B2 | `immigration-et-citoyennete` | CO-F, CE-G |
| TEF-66 | Un article commente une enquête sur le temps de trajet et le bien-être | B2–C1 | `bien-etre` | CE-G, EE-B |

---

## Logement et voisinage — suite

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-67 | Un préavis de fin de bail et l'état des lieux de sortie | A2–B1 | `hebergement` | CO-G, CE-F |
| TEF-68 | Une annonce de sous-location meublée pour trois mois | A2–B1 | `hebergement` | CE-A, CE-DE, EO-A |
| TEF-69 | Un voisin demande de garder un double des clés pendant les vacances | A2–B1 | `voisinage` | CO-A, CO-G |
| TEF-70 | Une assemblée de copropriété reporte le vote sur l'isolation | B1–B2 | `voisinage` | CO-E, CE-F, EE-B |
| TEF-71 | Un répondeur du syndic annonce une coupure d'eau de deux heures | A2–B1 | `maison` | CO-G, CO-B |
| TEF-72 | Des consignes pour utiliser la laverie collective de l'immeuble | A2–B1 | `maison` | CO-G, CE-F |
| TEF-73 | Micro-trottoir : faut-il autoriser les locations de courte durée ? | B1–B2 | `hebergement` | CO-C, CE-G |
| TEF-74 | Un logement étudiant refusé faute de garant | B1–B2 | `hebergement` | CO-E |
| TEF-75 | Une notice de montage d'une étagère avec une pièce manquante | A2–B1 | `bricolage` | CO-G, CE-F |
| TEF-76 | Un jardin partagé cherche des parcelles et fixe ses règles | A2–B1 | `jardinage` | CE-A, CO-B, CO-G |
| TEF-77 | Une chronique sur la vacance des logements en centre-ville | B2–C1 | `la-ville` | CO-D, CE-G |
| TEF-78 | Un dégât des eaux entre deux appartements et le partage des torts | B1–B2 | `maison` | EE-A, CO-G |

## Travail et emploi — suite

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-79 | Une convocation à un entretien précise les documents à apporter | A2–B1 | `recherche-emploi` | CE-F, CO-G |
| TEF-80 | Un répondeur de cabinet de recrutement propose deux créneaux | A2–B1 | `recherche-emploi` | CO-G |
| TEF-81 | Des consignes de sécurité à l'entrée d'un entrepôt | A2–B1 | `metiers` | CO-G, CE-F |
| TEF-82 | Un désaccord sur la répartition des congés d'été | B1–B2 | `collegues` | CO-G |
| TEF-83 | Micro-trottoir : le télétravail a-t-il changé l'ambiance d'équipe ? | B1–B2 | `collegues` | CO-C |
| TEF-84 | Une interview d'une artisane qui forme des apprentis | B1–B2 | `metiers` | CO-E, CE-G |
| TEF-85 | Une note interne instaure un badge d'accès et inquiète le personnel | B1–B2 | `bureau` | CE-F, EE-B |
| TEF-86 | Une chronique sur les démissions dans l'hôtellerie | B2 | `affaires` | CO-D, CE-G |
| TEF-87 | Un reportage sur une usine reconvertie en atelier partagé | B2–C1 | `affaires` | CO-F, CE-G |
| TEF-88 | Une offre de stage rémunéré en gestion de projet | A2–B1 | `recherche-emploi` | CE-A, CE-DE |
| TEF-89 | Une demande d'aménagement d'horaires pour raison familiale | B1 | `bureau` | CE-F, CO-G |
| TEF-90 | Un pot de départ à organiser et un budget à tenir | A2–B1 | `collegues` | CO-A, CO-G |

## Santé et services — suite

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-91 | Un rappel de rendez-vous par message et la procédure d'annulation | A2–B1 | `systeme-de-sante` | CO-G, CE-A |
| TEF-92 | Des consignes de préparation avant une prise de sang | A2–B1 | `soins` | CO-G, CE-F |
| TEF-93 | Une annonce en salle d'attente sur les retards de consultation | A2–B1 | `systeme-de-sante` | CO-B, CO-G |
| TEF-94 | Micro-trottoir : les écrans nuisent-ils au sommeil ? | B1–B2 | `bien-etre` | CO-C |
| TEF-95 | Une interview d'une infirmière en soins à domicile | B1–B2 | `soins` | CO-E |
| TEF-96 | Une chronique sur la marche comme prescription médicale | B2 | `bien-etre` | CO-D, CE-G |
| TEF-97 | Un formulaire de consentement avant une intervention légère | B2–C1 | `soins` | CE-F |
| TEF-98 | Une pharmacie annonce un service de dépistage sans rendez-vous | A2–B1 | `systeme-de-sante` | CO-B, CE-A, CO-G |
| TEF-99 | Un reportage sur les délais aux urgences la nuit | B2–C1 | `systeme-de-sante` | CO-F, CE-G |
| TEF-100 | Une brochure sur les gestes de premiers secours | A2–B1 | `corps` | CE-A, CO-G |
| TEF-101 | Un arrêt de travail contesté par l'employeur | B2 | `droit` | EE-B, CE-F |
| TEF-102 | Une demande de changement de médecin traitant | B1 | `systeme-de-sante` | CE-F |

## Démarches et citoyenneté — suite

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-103 | Un guichet annonce un nouveau système de tickets numérotés | A2–B1 | `gouvernement` | CO-B, CO-G |
| TEF-104 | Des consignes pour renouveler une pièce d'identité en ligne | A2–B1 | `gouvernement` | CO-G, CE-F |
| TEF-105 | Un répondeur de préfecture indique les pièces manquantes d'un dossier | B1 | `immigration-et-citoyennete` | CO-G |
| TEF-106 | Une attestation de résidence demandée pour une inscription | A2–B1 | `gouvernement` | CE-F |
| TEF-107 | Micro-trottoir : faut-il voter aux élections locales en venant d'arriver ? | B1–B2 | `immigration-et-citoyennete` | CO-C |
| TEF-108 | Une interview d'un médiateur qui accompagne les nouveaux arrivants | B1–B2 | `communaute` | CO-E |
| TEF-109 | Une chronique sur la simplification des formulaires administratifs | B2 | `gouvernement` | CO-D, CE-G |
| TEF-110 | Un recours après un refus de subvention associative | B2–C1 | `droit` | EE-B, CE-F |
| TEF-111 | Une déclaration de perte de documents au commissariat | B1 | `droit` | EE-A |
| TEF-112 | Une demande de visa de visiteur refusée pour une pièce manquante | B1–B2 | `douane-et-immigration` | CO-G |
| TEF-113 | Un dépliant sur la médiation gratuite entre voisins | A2–B1 | `droit` | CE-A, CO-B, CO-G |
| TEF-114 | Un reportage sur le regroupement familial et ses délais | B2–C1 | `immigration-et-citoyennete` | CO-F, CE-G |

## Transports et déplacements — suite

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-115 | Une annonce de quai signale un changement de voie | A2–B1 | `transports-quotidiens` | CO-B, CO-G |
| TEF-116 | Des consignes pour valider un titre de transport rechargeable | A2–B1 | `transports-quotidiens` | CO-G, CE-F |
| TEF-117 | Un répondeur de compagnie annonce le remboursement d'un billet | A2–B1 | `deplacements` | CO-G |
| TEF-118 | Un objet oublié dans un autobus et la procédure de récupération | A2–B1 | `transports-quotidiens` | CO-A, CO-G |
| TEF-119 | Micro-trottoir : la gratuité des transports est-elle une bonne idée ? | B1–B2 | `transports-quotidiens` | CO-C, CE-G |
| TEF-120 | Une interview d'un conducteur de tramway sur les horaires de nuit | B1–B2 | `transports-quotidiens` | CO-E |
| TEF-121 | Une chronique sur le retour du train de nuit | B2 | `deplacements` | CO-D, CE-G |
| TEF-122 | Un horaire de navette d'aéroport et ses arrêts | A2–B1 | `deplacements` | CE-A, CE-DE |
| TEF-123 | Un aménagement cyclable divise un quartier commerçant | B2–C1 | `la-ville` | EE-B, CO-C |
| TEF-124 | Un covoiturage annulé la veille et le remboursement demandé | B1 | `deplacements` | EE-A, CO-G |
| TEF-125 | Un reportage sur les zones à faibles émissions | B2–C1 | `ecologie` | CO-F, CE-G |
| TEF-126 | Une demande d'accessibilité en gare pour une personne en fauteuil | B1–B2 | `transports-quotidiens` | CE-F |

## Commerce et argent — suite

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-127 | Un ticket de caisse contesté et un article facturé deux fois | A2–B1 | `courses` | CO-A, CO-G |
| TEF-128 | Des consignes pour retourner un article acheté en ligne | A2–B1 | `courses` | CO-G, CE-F |
| TEF-129 | Un répondeur de service client annonce un délai de livraison | A2–B1 | `courses` | CO-G |
| TEF-130 | Une annonce de braderie de quartier et ses conditions | A2–B1 | `marche` | CE-A, CO-B, CO-G |
| TEF-131 | Micro-trottoir : payer sans espèces, gêne ou progrès ? | B1–B2 | `argent-quotidien` | CO-C |
| TEF-132 | Une interview d'une gérante de recyclerie | B1–B2 | `ecologie` | CO-E |
| TEF-133 | Une chronique sur les monnaies locales et leur usage | B2 | `economie` | CO-D, CE-G |
| TEF-134 | Des conditions générales d'un abonnement à durée minimale | B2–C1 | `droit` | CE-F |
| TEF-135 | Un devis de réparation dépassé sans accord préalable | B1–B2 | `argent-quotidien` | CO-G, CE-F |
| TEF-136 | Une garantie refusée pour usage non conforme | B2 | `droit` | EE-B, CE-F |
| TEF-137 | Un guide des tailles et une politique d'échange | A2–B1 | `vetements` | CE-A, CE-DE |
| TEF-138 | Un reportage sur les commerces de centre-ville face à la vente en ligne | B2–C1 | `economie` | CO-F, CE-G |

## Formation et études — suite

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-139 | Une convocation à un examen envoyée à la mauvaise adresse | A2–B1 | `examens-et-diplomes` | CO-G |
| TEF-140 | Des consignes pour se présenter le jour d'un examen | A2–B1 | `examens-et-diplomes` | CO-G, CE-F |
| TEF-141 | Un répondeur de secrétariat annonce le report d'un partiel | A2–B1 | `universite` | CO-G |
| TEF-142 | Une annonce de rentrée dans une école de langues | A2–B1 | `ecole` | CO-B, CE-A, CO-G |
| TEF-143 | Micro-trottoir : apprend-on mieux en petit groupe ou en amphithéâtre ? | B1–B2 | `universite` | CO-C |
| TEF-144 | Une interview d'une responsable de validation des acquis | B1–B2 | `examens-et-diplomes` | CO-E |
| TEF-145 | Une chronique sur l'apprentissage des langues à l'âge adulte | B2 | `matieres` | CO-D, CE-G |
| TEF-146 | Une demande d'équivalence de diplôme étranger | B1–B2 | `examens-et-diplomes` | CE-F |
| TEF-147 | Un règlement de bibliothèque universitaire sur le prêt et les retards | B2 | `universite` | CE-F |
| TEF-148 | Un reportage sur les étudiants qui travaillent la nuit | B2–C1 | `universite` | CO-F, CE-G |

## Environnement — suite

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-149 | Des consignes de tri pour les déchets électroniques | A2–B1 | `ecologie` | CO-G, CE-F |
| TEF-150 | Une annonce de ramonage obligatoire des conduits avant l'hiver | A2–B1 | `maison` | CO-B, CO-G |
| TEF-151 | Micro-trottoir : faut-il limiter l'éclairage nocturne ? | B1–B2 | `ecologie` | CO-C |
| TEF-152 | Une interview d'une gardienne de réserve naturelle | B1–B2 | `paysages` | CO-E |
| TEF-153 | Une chronique sur la végétalisation des cours d'école | B2 | `ecologie` | CO-D, CE-G |
| TEF-154 | Un bulletin d'alerte à la chaleur et ses recommandations | A2–B1 | `meteo` | CO-B, CE-A, CO-G |
| TEF-155 | Un débat sur l'interdiction des bouteilles en plastique à l'école | B2–C1 | `ecologie` | EE-B, CO-C |
| TEF-156 | Un reportage sur la réintroduction d'une espèce protégée | B2–C1 | `animaux` | CO-F, CE-G |

## Technologie et information — suite

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-157 | Des consignes pour activer la double authentification | A2–B1 | `internet` | CO-G, CE-F |
| TEF-158 | Un répondeur d'assistance annonce une panne de réseau | A2–B1 | `technologie-quotidienne` | CO-G |
| TEF-159 | Une notice d'installation d'une enceinte connectée | A2–B1 | `appareils` | CO-G, CE-F |
| TEF-160 | Micro-trottoir : faut-il montrer le visage de ses enfants en ligne ? | B1–B2 | `reseaux-sociaux` | CO-C |
| TEF-161 | Une interview d'une formatrice au numérique pour les seniors | B1–B2 | `technologie-quotidienne` | CO-E |
| TEF-162 | Une chronique sur les fausses informations en période d'élection | B2–C1 | `journalisme` | CO-D, CE-G |
| TEF-163 | Une charte d'usage du matériel informatique au travail | B2 | `bureau` | CE-F |
| TEF-164 | Une offre d'abonnement mobile et ses options | A2–B1 | `internet` | CE-A, CE-DE |
| TEF-165 | Un compte piraté et les démarches à suivre | B1–B2 | `internet` | EE-A |
| TEF-166 | Un reportage sur les réparateurs de téléphones indépendants | B2–C1 | `appareils` | CO-F, CE-G |

## Vie sociale et culture — suite

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-167 | Une annonce de fermeture anticipée d'un musée | A2–B1 | `musees` | CO-B, CO-G |
| TEF-168 | Des consignes de visite dans une exposition photographique | A2–B1 | `musees` | CO-G, CE-F |
| TEF-169 | Un répondeur de cinéma annonce le changement d'horaire d'une séance | A2–B1 | `cinema` | CO-G |
| TEF-170 | Micro-trottoir : la culture doit-elle être gratuite ? | B1–B2 | `musees` | CO-C, CE-G |
| TEF-171 | Une interview d'un libraire de quartier | B1–B2 | `litterature` | CO-E |
| TEF-172 | Une chronique sur la fréquentation des salles en semaine | B2 | `cinema` | CO-D |
| TEF-173 | Une carte d'abonnement à une salle de concert et ses avantages | A2–B1 | `musique` | CE-A, CE-DE |
| TEF-174 | Une salle de concert menacée par le bruit du voisinage | B2–C1 | `musique` | EE-B, CO-C |
| TEF-175 | Une brocante annuelle et les règles d'installation des exposants | A2–B1 | `les-fetes` | CO-G, CE-A |
| TEF-176 | Un reportage sur la transmission d'un savoir-faire artisanal | B2–C1 | `traditions` | CO-F, CE-G |

## Questions de société — suite

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-177 | Micro-trottoir : le bénévolat devrait-il compter dans un CV ? | B1–B2 | `questions-sociales` | CO-C |
| TEF-178 | Une interview d'une chercheuse sur l'isolement des personnes âgées | B2–C1 | `questions-sociales` | CO-E |
| TEF-179 | Une chronique sur le droit à la déconnexion | B2 | `ethique` | CO-D, CE-G |
| TEF-180 | Un débat sur l'encadrement de la publicité destinée aux enfants | B2–C1 | `ethique` | EE-B, CO-C |
| TEF-181 | Une tribune sur la place des langues régionales | B2–C1 | `valeurs` | CE-G, EE-B |
| TEF-182 | Un reportage sur les tiers-lieux en zone rurale | B2–C1 | `communaute` | CO-F |
| TEF-183 | Une pétition de quartier contre la fermeture d'un bureau de poste | B1–B2 | `communaute` | EE-B, CE-A |
| TEF-184 | Une chronique sur le temps passé devant les écrans en famille | B2 | `questions-sociales` | CO-D, CE-G |

## Alimentation et restauration

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-185 | Une réservation modifiée pour un plus grand groupe | A2–B1 | `au-restaurant` | CO-A, CO-G |
| TEF-186 | Des consignes de conservation sur un plat à emporter | A2–B1 | `cuisine` | CO-G, CE-A |
| TEF-187 | Un répondeur de traiteur confirme une commande | A2–B1 | `au-restaurant` | CO-G |
| TEF-188 | Une annonce de distribution de paniers de légumes au point relais | A2–B1 | `marche` | CO-B, CE-A, CO-G |
| TEF-189 | Micro-trottoir : mange-t-on trop de plats préparés ? | B1–B2 | `cuisine` | CO-C |
| TEF-190 | Une interview d'une cheffe qui cuisine les invendus | B1–B2 | `cuisine` | CO-E |
| TEF-191 | Une chronique sur les cantines scolaires et le gaspillage | B2 | `ecologie` | CO-D, CE-G |
| TEF-192 | Une allergie signalée et un plat servi malgré tout | B1–B2 | `au-restaurant` | EE-A, CO-G |
| TEF-193 | Un menu et ses mentions d'allergènes | A2–B1 | `au-restaurant` | CE-A, CE-DE |
| TEF-194 | Un reportage sur les épiceries solidaires | B2–C1 | `entraide` | CO-F, CE-G |

## Sports et loisirs

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-195 | Une inscription à un cours collectif et son certificat médical | A2–B1 | `sports-et-loisirs` | CO-G, CE-F, EO-A |
| TEF-196 | Des consignes d'accès à une piscine municipale | A2–B1 | `sports-et-loisirs` | CO-G, CE-F |
| TEF-197 | Un répondeur de club annonce l'annulation d'un entraînement | A2–B1 | `sports-et-loisirs` | CO-G |
| TEF-198 | Micro-trottoir : le sport en ville manque-t-il d'équipements ? | B1–B2 | `sports-et-loisirs` | CO-C |
| TEF-199 | Une interview d'une entraîneuse bénévole | B1–B2 | `sports-et-loisirs` | CO-E |
| TEF-200 | Une chronique sur la randonnée et la fréquentation des sentiers | B2 | `paysages` | CO-D, CE-G |
| TEF-201 | Un règlement de parc canin et les obligations des maîtres | A2–B1 | `animaux-domestiques` | CE-F, CO-B, CO-G |
| TEF-202 | Un tournoi amateur cherche des arbitres | A2–B1 | `sports-et-loisirs` | CE-A, EO-B |

## Vie associative et bénévolat

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-203 | Un appel à bénévoles pour une collecte alimentaire | A2–B1 | `entraide` | CO-B, CE-A, CO-G |
| TEF-204 | Des consignes pour les bénévoles d'une course solidaire | A2–B1 | `entraide` | CO-G, CE-F |
| TEF-205 | Un répondeur d'association indique les horaires de permanence | A2–B1 | `communaute` | CO-G |
| TEF-206 | Micro-trottoir : donner du temps ou donner de l'argent ? | B1–B2 | `entraide` | CO-C |
| TEF-207 | Une interview d'une présidente d'association de quartier | B1–B2 | `communaute` | CO-E |
| TEF-208 | Un désaccord entre bénévoles sur la répartition des tâches | B1–B2 | `conflits-reconciliation` | CO-G |
| TEF-209 | Une demande de subvention et son rapport d'activité | B2–C1 | `communaute` | CE-F, EE-B |
| TEF-210 | Un reportage sur les banques alimentaires en forte demande | B2–C1 | `entraide` | CO-F, CE-G |
| TEF-251 | Une sortie nature organisée par une association et le covoiturage proposé | A2–B1 | `communaute` | EO-B, CE-A |
| TEF-252 | Un atelier de réparation de vélos ouvert aux débutants | A2–B1 | `bricolage` | EO-B, CE-A |
| TEF-253 | Un club de lecture cherche de nouveaux membres | A2–B1 | `litterature` | EO-B, CE-A |
| TEF-254 | Une chorale de quartier recrute pour son concert de fin d'année | A2–B1 | `musique` | EO-B, CE-A |
| TEF-255 | Une séance d'essai gratuite dans un club de sport adapté | A2–B1 | `sports-et-loisirs` | EO-B, CE-A |

## Voyages et tourisme

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-211 | Une confirmation de réservation d'hôtel et l'heure d'arrivée | A2–B1 | `tourisme` | CO-G, CE-A |
| TEF-212 | Des consignes de sécurité avant une excursion en montagne | A2–B1 | `tourisme` | CO-G, CE-F |
| TEF-213 | Un répondeur d'office de tourisme donne les horaires d'été | A2–B1 | `tourisme` | CO-G |
| TEF-214 | Micro-trottoir : le tourisme abîme-t-il les villes ? | B1–B2 | `tourisme` | CO-C, CE-G |
| TEF-215 | Une interview d'une guide qui travaille en plusieurs langues | B1–B2 | `tourisme` | CO-E |
| TEF-216 | Une chronique sur les vacances hors saison | B2 | `tourisme` | CO-D |
| TEF-217 | Un bagage égaré et la déclaration à remplir | B1 | `deplacements` | EE-A, CO-G |
| TEF-218 | Une brochure d'un gîte et ses conditions d'annulation | A2–B1 | `hebergement` | CE-A, CE-DE |

## Famille et générations

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-219 | Une inscription en crèche et la liste d'attente | A2–B1 | `famille` | CO-G, EO-A |
| TEF-220 | Des consignes pour la sortie scolaire d'une classe | A2–B1 | `ecole` | CO-G, CE-F |
| TEF-221 | Un répondeur d'école signale l'absence d'un enfant | A2–B1 | `ecole` | CO-G |
| TEF-222 | Micro-trottoir : faut-il un congé plus long pour les deux parents ? | B1–B2 | `famille` | CO-C |
| TEF-223 | Une interview d'une éducatrice en maison de retraite | B1–B2 | `famille` | CO-E |
| TEF-224 | Une chronique sur les familles qui vivent à distance | B2 | `famille` | CO-D, CE-G |
| TEF-225 | Une invitation à un mariage et ses informations pratiques | A2–B1 | `evenements-familiaux` | CE-A, CO-G |
| TEF-226 | Un partage d'héritage qui divise une fratrie | B2–C1 | `droit` | EE-B, CO-E |

---

## Objets et services du quotidien

Written for the blocks the first expansion left thin: `CO-A` needs a concrete
object and two turns, and `CE-A` needs a short everyday document. Both are
deliberately small, low-band situations — that is what those blocks are.

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-227 | Un parapluie oublié au vestiaire d'un théâtre | A2 | `objets` | CO-A, CO-G |
| TEF-228 | Une commande de pain pour le lendemain matin | A2 | `marche` | CO-A, CO-G |
| TEF-229 | Un colis trop grand pour la boîte aux lettres | A2–B1 | `objets` | CO-A, CO-G, CE-A |
| TEF-230 | Une clé cassée dans la serrure et le dépannage | A2–B1 | `maison` | CO-A, CO-G |
| TEF-231 | Un vélo à réparer avant le week-end | A2–B1 | `objets` | CO-A |
| TEF-232 | Une paire de lunettes à ajuster | A2 | `corps` | CO-A, CO-G |
| TEF-233 | Un chariot de supermarché bloqué et la pièce à récupérer | A2 | `courses` | CO-A |
| TEF-234 | Une machine à café en panne dans une salle de pause | A2–B1 | `collegues` | CO-A, CO-G |
| TEF-235 | Un pull rétréci au lavage et l'échange demandé | A2–B1 | `vetements` | CO-A, CO-G |
| TEF-236 | Une plante à arroser pendant une absence | A2 | `jardinage` | CO-A, CO-G |
| TEF-237 | Un four à micro-ondes et sa notice perdue | A2–B1 | `appareils` | CO-A, CO-G |
| TEF-238 | Une trousse de secours à compléter avant un départ | A2–B1 | `corps` | CO-A, CE-A |
| TEF-239 | Une affiche de perte d'un chat dans le quartier | A2 | `animaux-domestiques` | CE-A, CO-G |
| TEF-240 | Un tarif de pressing et ses délais | A2 | `vetements` | CE-A, CE-DE, CO-G |
| TEF-241 | Une carte de fidélité et ses conditions d'usage | A2–B1 | `courses` | CE-A, CE-DE |
| TEF-242 | Un horaire de déchetterie et les déchets acceptés | A2–B1 | `ecologie` | CE-A, CO-B, CO-G |
| TEF-243 | Une consigne à bagages en gare et ses tarifs | A2–B1 | `deplacements` | CE-A, CO-G |
| TEF-244 | Un avis de passage du facteur | A2 | `objets` | CE-A, CO-G |
| TEF-245 | Une annonce de vente d'un canapé entre particuliers | A2–B1 | `maison` | CE-A, CE-DE, EO-A |
| TEF-246 | Un panneau d'information sur les travaux d'un trottoir | A2–B1 | `la-ville` | CE-A, CO-B, CO-G |
| TEF-247 | Une annonce d'ascenseur en panne dans un immeuble | A2 | `maison` | CO-B, CO-G |
| TEF-248 | Une annonce d'ouverture d'une nouvelle ligne d'autobus | A2–B1 | `transports-quotidiens` | CO-B, CE-A, CO-G |
| TEF-249 | Une annonce de fermeture d'une bibliothèque pour inventaire | A2 | `ecole` | CO-B, CO-G |
| TEF-250 | Une annonce de distribution de composteurs par la mairie | A2–B1 | `ecologie` | CO-B, CE-A, CO-G |

---

## Petites annonces et services

Written for the codes papers 1 to 3 drained: `CO-A` (a concrete object and two
turns), `CE-A` and `CE-DE` (a short everyday document with figures to scan), and
`CO-B` (a public announcement). Deliberately small and low-band, because that is
what those blocks are.

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-256 | Une chaise de bureau à échanger, le modèle n'est plus fabriqué | A2–B1 | `objets` | CO-A, CO-G |
| TEF-257 | Un billet de train imprimé au mauvais nom | A2–B1 | `deplacements` | CO-A, CO-G |
| TEF-258 | Une commande de fleurs à livrer un dimanche | A2–B1 | `evenements-familiaux` | CO-A, CE-A |
| TEF-259 | Une paire de chaussures à ressemeler avant lundi | A2 | `vetements` | CO-A, CO-G |
| TEF-260 | Une bouteille de gaz consignée à rapporter | A2–B1 | `maison` | CO-A, CO-G |
| TEF-261 | Un règlement de piscine affiché à l'entrée | A2–B1 | `sports-et-loisirs` | CE-A, CO-B, CO-G |
| TEF-262 | Une carte de bibliothèque et ses conditions de prêt | A2–B1 | `musees` | CE-A, CE-DE |
| TEF-263 | Une fiche d'inscription à la cantine et ses tarifs | A2 | `ecole` | CE-A, CE-DE |
| TEF-264 | Un dépliant sur le prêt de vélos électriques | A2–B1 | `transports-quotidiens` | CE-A, CO-B |
| TEF-265 | Une affiche de vaccination des animaux au village | A2–B1 | `animaux-domestiques` | CE-A, CO-B, CO-G |
| TEF-266 | Un mode d'emploi de borne de recharge électrique | A2–B1 | `technologie-quotidienne` | CE-A, CO-G |
| TEF-267 | Un comparatif de trois assurances habitation | B1 | `hebergement` | CE-DE, CE-F, EO-A |
| TEF-268 | Une grille tarifaire d'un parking longue durée | A2–B1 | `deplacements` | CE-DE, CE-A, EO-A |
| TEF-269 | Un tableau des jours de collecte des déchets | A2 | `ecologie` | CE-DE, CE-A, CO-B |
| TEF-270 | Une annonce de test des sirènes le premier mercredi | A2–B1 | `gouvernement` | CO-B, CO-G |
| TEF-271 | Une campagne de dératisation annoncée dans le quartier | A2–B1 | `voisinage` | CO-B, CO-G |

---

## Formalités et vie de quartier

The last top-up, for paper 5. `CE-A` was one short and several codes sat exactly
at their requirement with no slack at all, which is the same as being short the
moment a band filter excludes one.

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-272 | Un formulaire de changement d'adresse à remplir en ligne | A2–B1 | `gouvernement` | CE-A, CO-G |
| TEF-273 | Une carte de stationnement résident et ses justificatifs | A2–B1 | `transports-quotidiens` | CE-A, CE-DE, EO-A |
| TEF-274 | Un bulletin d'inscription à un atelier de cuisine | A2–B1 | `cuisine` | CE-A, EO-A |
| TEF-275 | Une attestation de scolarité et son délai de délivrance | A2–B1 | `ecole` | CE-A, CE-F |
| TEF-276 | Un tableau des permanences d'un centre social | A2–B1 | `communaute` | CE-A, CO-B |
| TEF-277 | Une commande de lunettes prête à retirer | A2 | `corps` | CO-A, CO-G |
| TEF-278 | Un colis à réexpédier au vendeur | A2–B1 | `courses` | CO-A, EO-A |
| TEF-279 | Une reprise des cours de gymnastique douce annoncée | A2–B1 | `sports-et-loisirs` | CO-B, CE-A |
| TEF-280 | Une équipe de pétanque du village cherche des joueurs | A2–B1 | `sports-et-loisirs` | EO-B, CE-A |
| TEF-281 | Une troupe de théâtre amateur monte un spectacle | A2–B1 | `litterature` | EO-B, CE-A |

---

## Micros-trottoirs et formalités — complément

Six vox-pops, because `topic-demand.ts` under-reports them: block G borrows four
micro-trottoirs from the `CO-C` pool under its documented fallback, and the
demand table counts CO-C's two without counting G's four. Six per paper, not
two. Plus the last documents `CE-DE`, `EE-A` and `EO-A` needed.

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-282 | Micro-trottoir : faut-il fermer les commerces le dimanche ? | B1–B2 | `courses` | CO-C |
| TEF-283 | Micro-trottoir : les livraisons du soir gênent-elles le quartier ? | B1–B2 | `questions-sociales` | CO-C |
| TEF-284 | Micro-trottoir : doit-on apprendre à cuisiner à l'école ? | B1–B2 | `matieres` | CO-C |
| TEF-285 | Micro-trottoir : faut-il limiter la taille des supermarchés ? | B1–B2 | `economie` | CO-C |
| TEF-286 | Micro-trottoir : les animaux sont-ils bienvenus au travail ? | B1–B2 | `collegues` | CO-C |
| TEF-287 | Micro-trottoir : faut-il payer pour trier ses déchets ? | B1–B2 | `ecologie` | CO-C |
| TEF-288 | Un barème de remboursement de frais kilométriques | B1 | `argent-quotidien` | CE-DE, CE-F |
| TEF-289 | Un tableau comparatif de trois forfaits de salle de sport | A2–B1 | `sports-et-loisirs` | CE-DE, CE-A |
| TEF-290 | Un incendie de conteneurs maîtrisé sans blessé | A2–B1 | `voisinage` | EE-A, CO-G |
| TEF-291 | Un vol de bicyclettes dans un local fermé à clé | A2–B1 | `objets` | EE-A, CO-G |
| TEF-292 | Une annonce de stage de photographie pendant les vacances | A2–B1 | `musees` | EO-A, CE-A |
| TEF-293 | Une offre de cours de conduite en auto-école | A2–B1 | `deplacements` | EO-A, CE-A |

---

## Objets à rapporter

Three more `CO-A` exchanges: a concrete object and two turns, which is what the
block is and what the bank runs out of first.

| ID | Situation | Bands | Theme | Suits |
|---|---|---|---|---|
| TEF-294 | Une valise dont la poignée est cassée | A2 | `objets` | CO-A, CO-G |
| TEF-295 | Un pot de peinture à refaire à la bonne teinte | A2–B1 | `bricolage` | CO-A, CO-G |
| TEF-296 | Une plante achetée déjà malade | A2 | `jardinage` | CO-A, CO-G |

---

## Coverage check

Counts are of situations TAGGED for a block, across the whole bank of 250. "Per
paper" is what Examen 1 actually spent, measured from its ledger rather than
estimated. Run `pnpm tsx scripts/topic-demand.ts <papers>` for the live figures
and the remaining headroom — this table goes stale the moment the bank grows,
and it did: it was written when the bank held 66.

| Block | Tagged | Per paper | Enough for papers 2–5? |
|---|---|---|---|
| CO-A conversations avec dessins | 19 | 3 | yes |
| CO-B annonces publiques | 31 | 4 | yes |
| CO-C micros-trottoirs | 27 | 2 | yes |
| CO-D chroniques radio | 21 | 1 | yes |
| CO-E interviews | 25 | 1 | yes |
| CO-F reportage | 16 | 1 | yes |
| CO-G documents divers | 94 | 17 | yes |
| CE-A vie quotidienne | 47 | 7 | yes |
| CE-DE lecture rapide | 18 | 2 | yes |
| CE-F admin et professionnel | 49 | 2 | yes |
| CE-G articles de presse | 42 | 1 | yes |
| EE-A fait divers | 19 | 1 | yes |
| EE-B lettre argumentée | 24 | 1 | yes |
| EO-A obtenir | 27 | 1 | yes |
| EO-B convaincre | 10 | 1 | yes |

A situation may be tagged for several blocks but can only be **spent once**, so
these are upper bounds, not a budget. The binding number is the total: a paper
consumes ~45 situations and four more papers need 180, against 205 untouched.

**`CO-G` is the block that sizes the bank.** It is 17 documents per paper under
the `G-elastic` fill rule, and rule 2 forbids a situation appearing twice in one
paper wearing two hats — a voicemail and a set of instructions ARE two hats. So
CO-G costs seventeen situations per paper, not five. An earlier version of this
section advised "roughly five topics per paper covering the five sub-types",
which contradicted rule 2 and under-counted the bank's requirement by about
fifty situations across the pack. Examen 1 followed rule 2 and spent 17.

`CE-BC` (phrases et textes lacunaires) carries no topic tags at all, on purpose.
Gap-fill items test grammar and collocation, not content, and their sentences are
written to the grammar point rather than to a situation. Draw the grammar targets
from what the corpus already teaches: `prepositions-essentielles`,
`pronoms-essentiels`, `connecteurs-logiques`, `negation-et-restriction`,
`recits-au-passe`, `comparaisons`.
