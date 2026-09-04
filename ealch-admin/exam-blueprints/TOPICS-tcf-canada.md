# TOPICS — TCF Canada

**Blueprint:** `tcf-canada-2026.01` · **72 situations, A1 to C2**
**Compiled:** 2026-08-24 (phase E0)

Our own topic bank. Built from the CEFR can-do descriptors and the 128 themes already in `content_themes`. Nothing here is drawn from an exam paper. See [README.md](README.md).

---

## How to use this

**This bank is organised by band, because TCF is organised by band.** TEF's bank groups by subject; this one cannot, because a paper is built by walking the slope from position 1 to position 39 and the only question that matters at each step is "what belongs at this band?"

Rules:

1. **No topic is reused across TCF papers.** The paper plan tracks what papers 1..N-1 consumed.
2. **A topic sits at its band.** Moving a C1 topic down to B1 by simplifying the language produces a thin text about something abstract, which is the commonest way a fake ramp gets built. Pick a topic that genuinely belongs where you need it.
3. **The `Theme` column resolves against `content_themes`** for `targetItemIds`.
4. **Every proper noun in the finished stimulus is invented** (STANDARD-common §6).

Per-paper draw, matching the blueprint's distribution:

> **Two themes do not resolve.** `nuances-et-registres` and `culture-profonde`
> are named by situations below but are not slugs in `content_themes`, so rule 3
> does not hold for them: those situations route no `targetItemIds` and a miss on
> them teaches the learner nothing. Found by `pnpm tsx scripts/theme-fitness.ts`
> on 2026-09-01, before any TCF paper was authored. Fix by repointing them at real
> slugs when TCF is scoped — not by adding themes to the catalogue, which would
> create themes with no published items behind them.

| Band | CO items | CE items | Topics to draw |
|---|---|---|---|
| A1 | 3 | 3 | ~6 |
| A2 | 6 | 6 | ~12 |
| B1 | 10 | 10 | ~14 |
| B2 | 10 | 10 | ~8 (documents carry 2 items each) |
| C1 | 7 | 7 | ~5 (documents carry 2–3 items) |
| C2 | 3 | 3 | ~2 (documents carry 3 items) |

**Suits codes.** `CO` listening · `CE` reading · `EE-T1` message · `EE-T2` article or note with comment · `EE-T3` compare two viewpoints · `EO-T1` entretien dirigé · `EO-T2` interaction · `EO-T3` point de vue

---

## A1 — positions 1 to 3

Concrete, literal, one fact. The answer is stated once, plainly.

| ID | Situation | Theme | Suits |
|---|---|---|---|
| TCF-01 | Un message pour prévenir qu'on arrive en retard | `salutations` | CO, CE, EE-T1 |
| TCF-02 | Une étiquette de prix dans un magasin | `marche` | CE |
| TCF-03 | Un horaire d'autobus affiché à un arrêt | `transports-quotidiens` | CE |
| TCF-04 | Quelqu'un demande où se trouvent les toilettes | `deplacements` | CO |
| TCF-05 | Une carte d'anniversaire pour une collègue | `evenements-familiaux` | CE, EE-T1 |
| TCF-06 | Une annonce : le magasin ferme dans dix minutes | `courses` | CO |
| TCF-07 | Un menu du jour avec trois plats | `au-restaurant` | CE |
| TCF-08 | Quelqu'un commande un café et paie | `cafe` | CO, EO-T1 |

## A2 — positions 4 to 9

Still literal, but one competing fact must be ignored.

| ID | Situation | Theme | Suits |
|---|---|---|---|
| TCF-09 | Un mot laissé au voisin pour récupérer un colis | `voisinage` | CE, EE-T1 |
| TCF-10 | Une petite annonce pour un vélo d'occasion | `objets` | CE, EO-T2 |
| TCF-11 | Une annonce de retard en gare | `transports-quotidiens` | CO |
| TCF-12 | Un rendez-vous chez le dentiste à déplacer | `rp-sante` | CO, EO-T2 |
| TCF-13 | Une liste de courses et un budget de trente euros | `courses` | CE |
| TCF-14 | Une invitation à un repas de quartier | `communaute` | CE, EE-T1 |
| TCF-15 | Un dépliant sur les horaires de la piscine municipale | `sports-et-loisirs` | CE, EO-T2 |
| TCF-16 | Quelqu'un explique comment aller à la gare à pied | `deplacements` | CO |
| TCF-17 | Un message pour annuler un cours de gym | `rp-loisirs` | EE-T1 |
| TCF-18 | Une consigne de tri des déchets | `ecologie` | CE |
| TCF-19 | Un appel pour réserver une table pour quatre personnes | `au-restaurant` | CO, EO-T2 |
| TCF-20 | Un bulletin météo pour le week-end | `meteo` | CO |

## B1 — positions 10 to 19

Two facts must be held together, or one tracked across a turn change. Redundancy thins out.

| ID | Situation | Theme | Suits |
|---|---|---|---|
| TCF-21 | Une lettre pour signaler une panne de chauffage au propriétaire | `maison` | CE, EE-T1 |
| TCF-22 | Un entretien avec une personne qui a changé de métier | `metiers` | CO |
| TCF-23 | Un article sur l'ouverture d'une médiathèque de quartier | `la-ville` | CE |
| TCF-24 | Un règlement de piscine avec deux exceptions | `sports-et-loisirs` | CE |
| TCF-25 | Une offre d'emploi à temps partiel avec horaires variables | `recherche-emploi` | CE, EO-T2 |
| TCF-26 | Un message aux collègues pour organiser un pot de départ | `collegues` | EE-T1, EE-T2 |
| TCF-27 | Une discussion sur le choix d'une école pour un enfant | `ecole` | CO |
| TCF-28 | Un compte rendu de réunion de copropriété | `voisinage` | CE, EE-T2 |
| TCF-29 | Un guide d'utilisation d'un lave-linge | `appareils` | CE |
| TCF-30 | Un court reportage sur un marché de producteurs | `marche` | CO |
| TCF-31 | Une brochure sur les aides au permis de conduire | `gouvernement` | CE |
| TCF-32 | Une conversation sur des vacances annulées à cause d'une grève | `tourisme` | CO |
| TCF-33 | Un article de bulletin associatif sur une sortie annulée | `communaute` | EE-T2 |
| TCF-34 | Une interview d'un boulanger sur ses horaires de travail | `metiers` | CO |
| TCF-35 | Une notice pour installer une application bancaire | `internet` | CE |
| TCF-36 | Une conversation sur le partage des tâches ménagères | `rp-quotidien` | CO, EO-T3 |

## B2 — positions 20 to 29

The answer is distributed, or depends on stance rather than words. Hedging appears. Documents carry two items.

| ID | Situation | Theme | Suits |
|---|---|---|---|
| TCF-37 | Un article d'opinion sur les zones à circulation restreinte | `ecologie` | CE, EE-T3 |
| TCF-38 | Une table ronde sur le télétravail et la cohésion d'équipe | `collegues` | CO |
| TCF-39 | Un rapport interne sur l'absentéisme et ses causes | `bureau` | CE |
| TCF-40 | Un éditorial sur le financement des bibliothèques publiques | `questions-sociales` | CE, EE-T3 |
| TCF-41 | Un débat radio sur l'âge de départ à la retraite | `gouvernement` | CO |
| TCF-42 | Un courrier de réclamation à un opérateur téléphonique | `argent-quotidien` | EE-T2 |
| TCF-43 | Une interview d'une chercheuse sur le sommeil et la concentration | `recherche` | CO |
| TCF-44 | Un article sur l'apprentissage des langues à l'âge adulte | `universite` | CE, EE-T3 |
| TCF-45 | Deux tribunes opposées sur l'uniforme à l'école | `ecole` | EE-T3 |
| TCF-46 | Une discussion sur l'accueil des saisonniers dans une station | `recherche-emploi` | CO |
| TCF-47 | Un texte sur la place des femmes dans les métiers techniques | `metiers` | CE, EE-T3 |
| TCF-48 | Un compte rendu d'enquête sur la fréquentation des cinémas | `cinema` | CE |
| TCF-49 | Un débat sur la publicité ciblée et la vie privée | `reseaux-sociaux` | CO, EE-T3 |
| TCF-50 | Une chronique sur le tourisme de masse dans les villes historiques | `tourisme` | CO, CE |
| TCF-51 | Un article sur le coût réel des livraisons express | `economie` | CE, EE-T3 |
| TCF-52 | Une discussion entre urbanistes sur la densification | `la-ville` | CO |
| TCF-53 | Un texte sur le droit à la déconnexion | `droit` | CE |
| TCF-54 | Point de vue : faut-il taxer les vols de courte distance ? | `ecologie` | EO-T3 |

## C1 — positions 30 to 36

The answer is implicit: a reservation, an irony, a disagreement expressed politely. Specialised lexis. Documents carry two to three items.

| ID | Situation | Theme | Suits |
|---|---|---|---|
| TCF-55 | Un essai sur la notion de mérite dans l'accès aux études | `ethique` | CE |
| TCF-56 | Un débat spécialisé sur la reproductibilité des résultats scientifiques | `methode-scientifique` | CO |
| TCF-57 | Un article de fond sur la transformation des métiers par l'automatisation | `decouvertes` | CE |
| TCF-58 | Une table ronde sur la mémoire collective et les monuments | `traditions` | CO |
| TCF-59 | Un texte juridique commenté sur la protection des données | `droit` | CE |
| TCF-60 | Une chronique ironique sur le vocabulaire managérial | `nuances-et-registres` | CE |
| TCF-61 | Un débat sur la responsabilité éditoriale des plateformes | `journalisme` | CO |
| TCF-62 | Un article sur les limites des indicateurs de croissance | `economie` | CE |
| TCF-63 | Une discussion entre soignants sur le consentement éclairé | `ethique` | CO |
| TCF-64 | Un texte sur l'aménagement du littoral face à l'érosion | `paysages` | CE |
| TCF-65 | Point de vue : la culture doit-elle être gratuite ? | `philosophie` | EO-T3 |
| TCF-66 | Un entretien avec une traductrice sur l'intraduisible | `litterature` | CO |

## C2 — positions 37 to 39

Literary or academic register, allusion, marked syntax. Three per paper, and the hardest thing in the paper to author without faking. Documents carry three items.

| ID | Situation | Theme | Suits |
|---|---|---|---|
| TCF-67 | Un extrait de roman en style indirect libre | `litterature` | CE |
| TCF-68 | Un article académique sur l'évolution du sens d'un mot courant | `nuances-et-registres` | CE |
| TCF-69 | Un débat philosophique sur la notion de progrès | `philosophie` | CO |
| TCF-70 | Un texte critique sur la réception d'une œuvre à sa parution | `culture-profonde` | CE |
| TCF-71 | Une discussion entre historiens sur l'usage des archives privées | `recherche` | CO |
| TCF-72 | Un essai sur l'ambiguïté comme ressource littéraire | `litterature` | CE |

---

## Coverage check

| Band | Topics available | Topics needed per paper | Papers supported |
|---|---|---|---|
| A1 | 8 | ~6 | thin at 5 papers |
| A2 | 12 | ~12 | **thin at 5 papers** |
| B1 | 16 | ~14 | **thin at 5 papers** |
| B2 | 18 | ~8 | comfortable |
| C1 | 12 | ~5 | comfortable |
| C2 | 6 | ~2 | adequate |

**This is the real production risk in TCF and it is the opposite of what you would expect.** The C1 and C2 tiers are fine. The bottom of the slope is where the bank runs out.

The reason: A1 and A2 topics are *small*. A bus timetable is one document with one fact, and there are only so many everyday transactions before they start repeating. Five papers need roughly 30 A1 and 60 A2 draws across CO and CE, and eight plus twelve topics will not stretch that far without the papers feeling like each other.

**Mitigation, to apply during the E9 paper plan and not before:** at A1 and A2 a *topic* can legitimately yield several distinct documents, because the situations are transactional and the variables are concrete. TCF-03 (a bus timetable) can become a train timetable, a ferry schedule, a clinic's opening hours and a library's holiday closure, each a genuinely different document testing a genuinely different fact. Track that expansion in the paper plan so two papers never draw the same variant.

Do **not** mitigate by pushing B1 topics down to A2. That produces a text that is short but conceptually adult, which is exactly the fake-ramp failure STANDARD-tcf-canada §2 warns about, and it corrupts the band tags the whole score map depends on.

Re-measure this after paper 1. If the expansion rule does not hold in practice, the bank needs another 20 low-band situations before paper 2 starts.
