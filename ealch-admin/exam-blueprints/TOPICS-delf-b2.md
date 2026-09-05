# TOPICS — DELF B2 tout public

**Blueprint:** `delf-b2-2026.09` · **124 situations, all B2**
**Compiled:** 2026-09-05 (phase E0)

Our own topic bank. Built from the CEFR B2 can-do descriptors and the 66 themes
that already carry published B2 items in `content_themes`. Nothing here is drawn
from an exam paper. See [README.md](README.md).

---

## How to use this

**This bank is organised by SUIT, not by band**, because DELF B2 has only one
band. What differs between slots is not difficulty but *shape*: a document that
works as a three-minute broadcast debate is useless as a 70-second bulletin
item, and a topic that sustains four signed opinions is a different animal from
one that sustains a single argued column.

A paper spends **11 topics**:

| Suit | Slot | Per paper | In bank |
|---|---|---|---|
| `CO-L` | Listening exercises 1 and 2 — long, two plays | 2 | 24 |
| `CO-S` | Listening exercise 3 — three short documents | 3 | 34 |
| `CE-T` | Reading exercises 1 and 2 — single continuous text | 2 | 24 |
| `CE-O` | Reading exercise 3 — several signed opinions on one question | 1 | 12 |
| `PE` | Production écrite | 1 | 12 |
| `PO` | Production orale — two drawn, one chosen | 2 | 18 |

Five papers spend 55 of 124, which leaves room for a sixth and for rejecting a
topic that will not carry.

Rules:

1. **No topic is reused across DELF papers.** The paper plan tracks what papers
   1..N-1 consumed, the same accumulator the TCF planner uses.
2. **A `CO-L` or `CE-T` topic must have two defensible sides.** At B2 the
   questions test stance, so a topic everyone agrees about yields a paper of
   retrieval items. Where the tension is not obvious from the situation, it is
   named in the row.
3. **A `CE-O` topic must sustain four DISTINCT positions**, not four degrees of
   the same one. This is the hardest constraint in the bank and the reason that
   suit is the smallest.
4. **A `PO` topic must raise a problem, not report a fact.** The candidate's
   first task is to identify the problem; a document with no tension leaves them
   describing.
5. **The `Theme` column resolves against `content_themes`** for
   `targetItemIds`. Every theme named here has published B2 items.
6. **Every proper noun in the finished stimulus is invented**
   (`STANDARD-common` §6).

---

## CO-L · Listening, long, two plays (24)

Broadcast speech, 2 min 30 to 3 min 15, a presenter and one or two guests who
agree on the facts and differ on what follows.

| ID | Situation | Theme |
|---|---|---|
| DELF-01 | Whether a four-day week measured productivity or measured who volunteered | `rp-travail-etudes` |
| DELF-02 | A city's night-time noise mediators, and whether mediation displaces enforcement | `voisinage` |
| DELF-03 | Open-access publishing: who ends up paying when reading becomes free | `recherche` |
| DELF-04 | A museum returning objects, and what "provenance" is asked to settle | `musees` |
| DELF-05 | Whether ranking hospitals improves them or teaches them to select patients | `systeme-de-sante` |
| DELF-06 | The end of a rural bank branch, and what a cash machine does not replace | `argent-quotidien` |
| DELF-07 | Whether teaching debate at school makes better citizens or better arguers | `examens-et-diplomes` |
| DELF-08 | A river given legal standing, and who is entitled to speak for it | `ecologie` |
| DELF-09 | Anonymised CVs: whether removing a name moves the bias or hides it | `recherche-emploi` |
| DELF-10 | A publisher's decision to keep a difficult book in print | `litterature` |
| DELF-11 | Whether a heritage label preserves a quarter or empties it | `traditions` |
| DELF-12 | Municipal composting that works in one district and fails in the next | `communaute` |
| DELF-13 | Whether patient-reported outcomes belong in a clinical trial | `soins` |
| DELF-14 | A regional language on road signs, and what signage is for | `quebec-et-francophonie` |
| DELF-15 | Whether a jury of citizens should set a public budget | `gouvernement` |
| DELF-16 | The economics of a bookshop that hosts more events than sales | `economie` |
| DELF-17 | Whether sports funding should follow medals or participation | `rp-loisirs` |
| DELF-18 | A newsroom that publishes its corrections more prominently than its stories | `journalisme` |
| DELF-19 | Whether a right to disconnect can be written into a contract | `droit` |
| DELF-20 | Housing first: giving a flat before treatment, and what the figures show | `hebergement` |
| DELF-21 | Whether university rankings measure teaching or measure wealth | `universite` |
| DELF-22 | A festival that caps its own attendance | `tourisme` |
| DELF-23 | Whether an algorithm should be allowed to allocate school places | `questions-sociales` |
| DELF-24 | The case for and against paying research participants | `ethique` |

---

## CO-S · Listening, short, one play (34)

60 to 80 seconds, self-contained, answered before the next begins. A bulletin
item, a vox pop, a short interview. Two questions each, so the document must
carry exactly two answerable points and no more.

| ID | Situation | Theme |
|---|---|---|
| DELF-25 | A library extends its opening hours and reports who actually came | `communaute` |
| DELF-26 | A commuter explains why they went back to the train after a year of driving | `rp-voyage` |
| DELF-27 | A pharmacist on what changed when repeat prescriptions moved online | `soins` |
| DELF-28 | A short bulletin on a bridge closure and the diversion nobody uses | `rp-quotidien` |
| DELF-29 | A teacher on marking coursework she suspects was not written by the student | `examens-et-diplomes` |
| DELF-30 | A vox pop on whether a neighbourhood's new market changed anything | `voisinage` |
| DELF-31 | An engineer on why a repair took longer than the original build | `rp-technologie` |
| DELF-32 | A short item on a museum that stopped labelling its exhibits | `musees` |
| DELF-33 | A grower on selling direct and what the middleman actually did | `economie` |
| DELF-34 | A nurse on the handover conversation that no software replaced | `systeme-de-sante` |
| DELF-35 | A bulletin on a town that renamed a street, and the vote that followed | `traditions` |
| DELF-36 | A student on choosing a course for the timetable rather than the subject | `universite` |
| DELF-37 | A short interview on why a company stopped publishing its staff survey | `collegues` |
| DELF-38 | A resident on a car-free week that became permanent by accident | `rp-quotidien` |
| DELF-39 | A translator on the word that has no equivalent and what they did about it | `decouvertes` |
| DELF-40 | A bulletin on a lake reopened for swimming after thirty years | `rp-meteo-nature` |
| DELF-41 | A volunteer on why the food bank now asks for money rather than tins | `entraide` |
| DELF-42 | A short item on a school that abolished homework for one year group | `examens-et-diplomes` |
| DELF-43 | A researcher on a result they could not reproduce and published anyway | `methode-scientifique` |
| DELF-44 | A cyclist on the lane that ends where it is most needed | `rp-quotidien` |
| DELF-45 | A bulletin on a factory converted to housing, and the noise complaints since | `hebergement` |
| DELF-46 | A shopkeeper on the reviews they no longer read | `reseaux-sociaux` |
| DELF-47 | A short interview on a village that shares one car | `entraide` |
| DELF-48 | An archivist on what was lost when a newspaper digitised badly | `journalisme` |
| DELF-49 | A parent on a school trip cancelled for cost, and the alternative offered | `rp-famille` |
| DELF-50 | A bulletin on a public toilet that a business now maintains | `gouvernement` |
| DELF-51 | A trainer on the qualification employers ask for and never check | `recherche-emploi` |
| DELF-52 | A short item on a bus route restored after a petition | `rp-voyage` |
| DELF-53 | A gardener on a park left deliberately unmown | `ecologie` |
| DELF-54 | A doctor on the appointment length that has not changed in twenty years | `soins` |
| DELF-55 | A vox pop on a town square redesigned twice in five years | `communaute` |
| DELF-56 | A curator on an exhibition nobody visited and what they learned | `musees` |
| DELF-57 | A short interview on the office that removed its clocks | `collegues` |
| DELF-58 | A bulletin on a swimming pool kept open by its users | `rp-loisirs` |

---

## CE-T · Reading, single continuous text (24)

420 to 500 words. A magazine feature, a report summary, an opinion column. Must
contain a position and at least one competing consideration.

| ID | Situation | Theme |
|---|---|---|
| DELF-59 | Whether repair cafés reduce waste or mainly change who feels responsible | `ecologie` |
| DELF-60 | The evidence on homework, and why it keeps being asked the wrong question | `examens-et-diplomes` |
| DELF-61 | Remote work and the city centre that emptied on Mondays | `rp-travail-etudes` |
| DELF-62 | Why a language dies while everyone says they support it | `quebec-et-francophonie` |
| DELF-63 | Whether prize culture helps writers or narrows what gets written | `litterature` |
| DELF-64 | The cost of a screening programme measured against what it finds | `systeme-de-sante` |
| DELF-65 | Whether transparency laws made meetings open or made them performances | `gouvernement` |
| DELF-66 | A profession that abolished its entrance exam and what happened to entry | `recherche-emploi` |
| DELF-67 | Why a museum's free entry did not change who walks in | `musees` |
| DELF-68 | The second-hand market and whether it displaces new purchases | `economie` |
| DELF-69 | Whether a city can regulate short-term lets without pushing them underground | `hebergement` |
| DELF-70 | Peer review defended by someone who lists its failures first | `recherche` |
| DELF-71 | The right to be forgotten and the archive it argues with | `droit` |
| DELF-72 | Whether volunteering fills a gap or excuses one | `entraide` |
| DELF-73 | A newspaper that stopped covering crime and its readers' reaction | `journalisme` |
| DELF-74 | Naturalisation tests: what they measure and what they are for | `immigration-et-citoyennete` |
| DELF-75 | Whether green roofs are climate policy or decoration | `ecologie` |
| DELF-76 | The four-year degree examined by someone who thinks it survived by accident | `universite` |
| DELF-77 | Wellbeing programmes at work, and the working conditions they leave alone | `bien-etre` |
| DELF-78 | Whether a heritage building should be finished as designed or as intended | `traditions` |
| DELF-79 | The ethics of teaching with material the students disagree with | `ethique` |
| DELF-80 | Why fixing a road is politically harder than building one | `questions-sociales` |
| DELF-81 | Reconciliation processes and what an apology is expected to do | `conflits-reconciliation` |
| DELF-82 | Whether a museum's biggest donor should be named on the wall | `affaires` |

---

## CE-O · Reading, several signed opinions on one question (12)

Three or four short signed pieces, 360 to 420 words in total, each holding a
**distinct** position. The item asks which person said something. Each row names
the question the speakers divide on, because that division is the whole exercise.

| ID | The question they divide on | Theme |
|---|---|---|
| DELF-83 | Should a city make public transport free? | `rp-voyage` |
| DELF-84 | Does remote study serve or shortchange students? | `universite` |
| DELF-85 | Should sport at school be compulsory to the end? | `rp-loisirs` |
| DELF-86 | Is a shorter working week affordable, and for whom? | `rp-travail-etudes` |
| DELF-87 | Should museums charge tourists and not residents? | `musees` |
| DELF-88 | Does social media help or hollow out local news? | `reseaux-sociaux` |
| DELF-89 | Should cities cap the number of visitors? | `tourisme` |
| DELF-90 | Is a citizens' assembly better than a referendum? | `gouvernement` |
| DELF-91 | Should employers see a candidate's age? | `recherche-emploi` |
| DELF-92 | Does a neighbourhood benefit from being filmed? | `voisinage` |
| DELF-93 | Should prescriptions for exercise replace some medicines? | `soins` |
| DELF-94 | Is it right to rebuild a monument that burned? | `traditions` |

---

## PE · Production écrite (12)

Each row supplies the four things the prompt must carry: situation, role,
addressee, purpose. Shape rotates so no pack defaults to the letter.

| ID | Situation, role, addressee, purpose | Shape | Theme |
|---|---|---|---|
| DELF-95 | Your building's shared garden is to become parking; as residents' representative, write to the council contesting it | letter | `voisinage` |
| DELF-96 | A magazine praised a redevelopment you live beside; write a critical response | article | `hebergement` |
| DELF-97 | Your employer proposes replacing the staff canteen with vouchers; contribute to the staff consultation | debate | `collegues` |
| DELF-98 | The local library plans to cut its opening hours; as a user group member, argue against | letter | `communaute` |
| DELF-99 | A national paper argued that volunteering should count toward a qualification; respond | article | `entraide` |
| DELF-100 | Your town proposes charging for its parks; write to the mayor proposing an alternative | letter | `ecologie` |
| DELF-101 | A forum debates whether workplaces should ban internal email after hours; contribute | debate | `rp-travail-etudes` |
| DELF-102 | Your university plans to record all lectures; as a course representative, set out the case against | letter | `universite` |
| DELF-103 | A review dismissed a local festival you attended; write a critical article in reply | article | `rp-loisirs` |
| DELF-104 | Your region proposes a tourist tax; contribute to the public consultation | debate | `tourisme` |
| DELF-105 | A clinic replaced its phone line with an app; write to the director on behalf of patients | letter | `systeme-de-sante` |
| DELF-106 | A columnist argued that regional languages waste school hours; reply | article | `quebec-et-francophonie` |

---

## PO · Production orale trigger documents (18)

Short and journalistic. Each must raise a **problem with two defensible sides**;
the candidate identifies it, takes a position, and defends it for ten to thirteen
minutes. Two are drawn per paper and one chosen, so pair them across subjects.

| ID | The problem it raises | Theme |
|---|---|---|
| DELF-107 | A town bans cars from its centre and its shops report falling takings | `economie` |
| DELF-108 | A hospital publishes its waiting times and the shortest lists get longer | `systeme-de-sante` |
| DELF-109 | A school replaces exams with continuous assessment and appeals rise | `examens-et-diplomes` |
| DELF-110 | A charity refuses a large donation on ethical grounds | `ethique` |
| DELF-111 | A city offers cash for old cars and mostly reaches people who had a choice | `ecologie` |
| DELF-112 | An employer monitors keystrokes and calls it a safety measure | `droit` |
| DELF-113 | A village's last shop survives on volunteers who are all the same age | `entraide` |
| DELF-114 | A museum charges for a collection that was donated to the public | `musees` |
| DELF-115 | A newspaper pays sources and says so | `journalisme` |
| DELF-116 | A university admits students by lottery above a threshold | `universite` |
| DELF-117 | A landlord renovates to the point that no existing tenant can stay | `hebergement` |
| DELF-118 | A festival is funded by a company its performers criticise | `affaires` |
| DELF-119 | A council installs benches nobody can lie down on | `questions-sociales` |
| DELF-120 | A research team publishes a null result and loses its funding | `methode-scientifique` |
| DELF-121 | A neighbourhood group vets who may join its messaging channel | `voisinage` |
| DELF-122 | A country requires a language test for a residence permit | `immigration-et-citoyennete` |
| DELF-123 | An employer offers to pay for staff to live nearer the office | `rp-travail-etudes` |
| DELF-124 | A library removes a book after complaints and republishes the complaints | `litterature` |

---

## Coverage against the corpus

Measured, not asserted. All **38** distinct themes used above carry published B2
items, so every `targetItemIds` resolves.

The heaviest are `musees`, `ecologie` and `universite` at six rows each, then
`rp-travail-etudes`, `voisinage`, `systeme-de-sante`, `examens-et-diplomes` and
`hebergement` at five. That is acceptable: a paper draws 11 rows from 124 and the
planner enforces no reuse across papers, so a theme appearing six times cannot
appear twice in one paper unless the planner is broken.

**One thin theme.** `rp-quotidien` has 19 published B2 items, the only theme in
the bank under 20, and three rows point at it (DELF-28, 38, 44). A miss routed
there lands in a small pool. Either author more of that theme before those rows
are drawn, or re-point them; it is not a blocker, but it is the first thing to
degrade if the bank is used heavily.

**Untouched themes with published B2 items** — 28 of them, kept here so a sixth
paper has somewhere to go:

`argot-afrique` `argot-classique` `argot-des-jeunes` `comparaisons`
`connecteurs-logiques` `conseils-et-suggestions` `disciplines`
`expressions-argot` `expressions-de-quantite` `heure-et-date` `maison`
`negation-et-restriction` `opinions-et-avis` `philosophie`
`prepositions-essentielles` `projets-et-futur` `pronoms-essentiels`
`recits-au-passe` `rp-achats` `rp-etiquette` `rp-identite` `rp-maison`
`rp-recits-temps` `rp-repas` `rp-sante` `rp-societe` `salutations-de-base`
`valeurs`

Several of those are grammar or register themes rather than subjects
(`connecteurs-logiques`, `pronoms-essentiels`, the argot family) and will not
carry a B2 document on their own, so the usable remainder is smaller than 28.
`philosophie`, `valeurs`, `disciplines`, `rp-societe` and `rp-sante` are the
ones a sixth paper should reach for first.
