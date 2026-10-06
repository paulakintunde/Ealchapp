// c1.13.l1 « Les références qui comptent » — the authored corpus, the
// imports, the anchor texts and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape: a TEXT and a MOVE
// per act) on top of B1-BUILD-PLAYBOOK.md, with the C1 rules of
// C1-BUILD-LOG.md (« What is different at C1 », decisions 1-35; decision 28
// sets the home). Structural model: b2.31 (`../b2/francais-regional-*`).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
//
// STABLE EXPORTS (later lessons may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS: lesson 13 of the C1 trail
// ══════════════════════════════════════════════════════════════════════════
//
//   HISTORICAL REFERENCES, RECEPTIVE AND EXPLANATORY. The learner recognises
//   the references francophone press and speech take for granted, unfolds
//   each one (what happened, when, what it has come to mean) and says what
//   INVOKING it does in a text, without endorsing a reading. Contested
//   history is taught as literacy: the positions are named with who holds
//   them, and no verdict is given.
//
//     act 1   the problem: « Le Waterloo du tramway » read literally; recap
//             of b2.31, b2.24 and b2.34 by trail position
//     act 2   1789 and the Enlightenment: la Bastille, la nuit du 4 août, the
//             Declaration (art. 1 quoted), the 14 juillet; apocrypha named
//             as apocrypha (« brioche », « L’État, c’est moi »)
//     act 3   names that became lessons: un Waterloo, la bérézina, aller à
//             Canossa, une victoire à la Pyrrhus, un Austerlitz; antonomasia;
//             what the expression keeps and drops (the Bérézina crossing)
//     act 4   laïcité: the law of 1905 (art. 1 and 2 quoted), Alsace-Moselle,
//             and Québec's Loi sur la laïcité de l’État (2019), both camps
//     act 5   1940-1944: l’appel du 18 juin, Vichy, the ordonnance of 9 August
//             1944 and the 1995 recognition: two named positions
//     act 6   Algeria and colonisation: naming (« événements » / « guerre » /
//             « guerre de libération »), Évian, two commemoration dates, the
//             2005 « rôle positif » clause and its removal
//     act 7   Mai 68 and the Trente Glorieuses: what happened, the two
//             readings, « un nouveau Mai 68 », anachronism
//     act 8   Québec and Acadia: « Je me souviens », the Conquest, the
//             Révolution tranquille, la loi 101, the referendums, the
//             Grand Dérangement and the 2003 proclamation
//     act 9   Belgium: 1830 and la Monnaie, 21 juillet 1831, the Congo and
//             the statues, the federal state, « un compromis à la belge »
//     act 10  Switzerland: the 1291 pact, Tell as legend, 1815, 1848, 1971 and
//             1990, the Röstigraben
//     act 11  francophone Africa: 1960, the négritude, « France-Afrique » /
//             « Françafrique »: one word, two uses
//     act 12  the task: a 250-400 word explanation of a reference used in an
//             invented editorial (« la nuit du 4 août » at a town council)
//
//   NOT OWNED, CITED BY TRAIL POSITION ONLY (act 1 recaps, never re-teaches):
//     - b2.31 « Les accents et le français régional » (« la leçon 31 du
//       B2 »): French as a pluricentric language, Africa as the largest
//       francophone population, institutions (OQLF, OIF). Its rows .1013 and
//       .1024 are reused in act 1; « L’Afrique n’est pas un pays » is cited in
//       act 11 as its rule.
//     - b2.24 « Lire de façon critique » (« la leçon 24 du B2 »): the writer's
//       stance and distance, « Qui le dit ? ». Rows .1407 and .1413 reused.
//     - b2.34 « Les proverbes et les expressions figées » (« la leçon 34 du
//       B2 »): fixed expressions conjugated inside a sentence (« franchir le
//       Rubicon » is that KIND). This lesson owns the REFERENCE used as a noun
//       (« un Waterloo »). Row fr.b2.expressions-imagees.1606 reused.
//     - c1.12 owns epistemic pairs; c1.15 political and social headwords;
//       c1.16 moral, aesthetic and MEMORIAL headwords (le devoir de mémoire,
//       la repentance): none is taught here as a headword.
//     - c1.24 « Analyser la presse » (live): framing; c1.20 (live): présupposé
//       and sous-entendu. Not re-taught.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED (Postgres read 2026-10-06 inside BEGIN TRANSACTION READ ONLY
//      … COMMIT, no SET; the local seed is a cut)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `culture-profonde` (« La culture en profondeur », culture,
//     c1-c2). Sub-themes: ["les références historiques"] (set at the wave 4
//     setup). Rows: c1 161 (.001-.161, legacy reaction and critique lines,
//     none reused). ZERO rows at .1000-.1199 at any level (probe, 2026-10-06).
//
//  2. ID BLOCK: `fr.c1.culture-profonde.1000` to `.1199` AND NOTHING ELSE
//     (decision 28, ledger). Rows run act by act; gaps are deliberate.
//
//  3. REUSED ROWS (§F). Six are in seedPlusPacks() and printed through
//     `src()`. Nine are PUBLISHED IN POSTGRES BUT ABSENT FROM THE SEED CUT and
//     ride in `DB_ONLY_ROWS`, fr / en / drills copied verbatim from Postgres
//     on 2026-10-06. Two of them are LEGACY C1 ROWS
//     (fr.c1.nuances-et-registres.027, .041): straight apostrophes, no ipa;
//     they need the decision 13 typography edit at the import, like every
//     Postgres-only reused row. Four carry straight apostrophes in all (the
//     two legacy rows, fr.b1.quebec-et-francophonie.132 and .188): none is
//     ever quoted inside the scenario.
//
//  4. NO AUTHORED ROW REPEATS A PUBLISHED HEADWORD. Avoided on purpose (they
//     exist in Postgres): « les Lumières » (b2.philosophie.190, reused),
//     « le siècle des Lumières », « la laïcité » (reused), « la révolution
//     tranquille », « le quatorze juillet » (reused), « l’Acadie ». Twin check
//     against every Postgres `fr`, folded, in the scratch harness.
//
//  5. RESPELLINGS SPELLED FOR THE NASAL CHECKER RATHER THAN THE EAR: a real
//     /n/ or /m/ after a vowel is doubled: personne pehr-SONN, Lumières is
//     plain, Somme SOMM, semaine suh-MENN, Unterwald oon-TEHR-vald (the
//     German name, said the French way), Taché ta-SHAY, Canossa ka-noss-SA,
//     Pyrrhus pee-RÜSS, reine RENN, Schwytz SHVEETS. No U+203F tie anywhere.
//
//  6. EVERY TEXT IN §I IS ORIGINAL, WRITTEN FOR THE LESSON (« texte original
//     écrit pour la leçon »). Invented outlets, places and people: Le Mensuel
//     des Idées, Lettre Horizon (a business newsletter), Radio Passerelle,
//     L’Écho du Val-Fleuri (Montréal), Le Fil de Bruxelles, Le Courrier du
//     Léman, Escale Dakar (a magazine), La Gazette du Val-d’Orme; the town of
//     Val-d’Orme; the companies Verdal, Hélior and Tessère; the people Inès
//     Morel, Malik Diop, Hugues Ferrand, Claire Veilleux, Sophie Lambert,
//     Thomas Renaud, Awa Ndiaye, Lucien Garon, Aline Reymond, Jules Masson,
//     Nadia Haddad, Élise Kabongo, Bernard Fortin, Marc Duval. No living
//     politician is named. Real historical people appear only as historical
//     figures (§A.7). No real outlet is quoted.
//
//  7. FACT CHECK LIST, with the source checked for each (2026-10-06).
//     QUOTATIONS (public domain, verified word for word):
//       Q1. « Les hommes naissent et demeurent libres et égaux en droits. »
//           Déclaration des droits de l’homme et du citoyen, art. 1 (row
//           1017, act 2 text). Conseil constitutionnel:
//           https://www.conseil-constitutionnel.fr/le-bloc-de-constitutionnalite/declaration-des-droits-de-l-homme-et-du-citoyen-de-1789
//       Q2. « Enfin je me rappelai le pis-aller d’une grande princesse à qui
//           l’on disait que les paysans n’avaient pas de pain, et qui
//           répondit : Qu’ils mangent de la brioche. » Rousseau, Les
//           Confessions, livre VI (Launette, 1889, t. 1), Wikisource:
//           https://fr.wikisource.org/wiki/Les_Confessions_(Rousseau)/Texte_entier
//           (row 1026 quotes only « Qu’ils mangent de la brioche. »; act 2
//           text quotes the whole sentence).
//       Q3. « La République assure la liberté de conscience. » and « La
//           République ne reconnaît, ne salarie ni ne subventionne aucun
//           culte. » Loi du 9 décembre 1905 concernant la séparation des
//           Eglises et de l’Etat, art. 1 (first sentence) and art. 2 (first
//           sentence). Légifrance:
//           https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006070169
//       Q4. « En droit celle-ci n’a pas cessé d’exister. » Ordonnance du 9 août
//           1944 relative au rétablissement de la légalité républicaine, art.
//           1 (« La forme du Gouvernement de la France est et demeure la
//           République. En droit celle-ci n’a pas cessé d’exister. »).
//           Légifrance: https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006071212
//       Q5. « La Belgique est un État fédéral qui se compose des communautés
//           et des régions. » Constitution belge, art. 1 (since 1993). Sénat
//           de Belgique, texte coordonné: https://senate.be/doc/20250625_CONSTITUTION.pdf
//       Q6. « Je me souviens » (devise du Québec, 1883). Gouvernement du
//           Québec: https://www.quebec.ca/gouvernement/portrait-quebec/drapeau-symboles-nationaux/devise
//       Official texts (Q1, Q3, Q4, Q5) are not protected by copyright; Q2 is
//       public domain (Rousseau, d. 1778). NOT QUOTED, ON PURPOSE: de Gaulle's
//       appeal, Chirac's 1995 speech, Césaire, Senghor (all protected: life
//       + 70), every Mai 68 slogan (anonymous, protected until 70 years after
//       publication); they are paraphrased and attributed.
//
//     DATES, NUMBERS, LAWS:
//       F1. 14 juillet 1789 prise de la Bastille; nuit du 4 août 1789
//           abolition des privilèges; DDHC adopted 26 août 1789 (Universalis;
//           info.gouv.fr below).
//       F2. The 14 juillet became the national holiday by the loi du 6
//           juillet 1880, and commemorates both 1789 and the fête de la
//           Fédération of 14 juillet 1790. info.gouv.fr:
//           https://www.info.gouv.fr/actualite/pourquoi-le-14-juillet-est-il-notre-fete-nationale
//       F3. The « brioche » line: Rousseau gives no name; written in the late
//           1760s, before Marie-Antoinette arrived in France (1770); the
//           attribution to her is later and unfounded. Wikisource (Q2) and
//           Guichet du Savoir: https://www.guichetdusavoir.org/question/voir/140332
//       F4. « L’État, c’est moi »: apocryphal; no source from Louis XIV's
//           time; first found in print in 1791; his attested words on 26
//           August 1715 say the opposite (« Je m’en vais, mais l’État
//           demeurera toujours »: NOT quoted in the lesson). Revue Conflits /
//           Dicocitations summary of Lemontey and later historians:
//           https://www.revueconflits.com/louis-xiv-monarchie/ (to recheck
//           against a scholarly source at the pre-review).
//       F5. The Terror (1793-1794) named as one reading of the Revolution:
//           standard periodisation.
//       F6. Waterloo, 18 juin 1815, Napoleon's last battle (Fondation
//           Napoléon, napoleon.org). « Un Waterloo » = a crushing, final
//           defeat: press usage; NO French dictionary entry was confirmed
//           online (open question 3).
//       F7. Bérézina crossing, 26-29 novembre 1812, during the retreat from
//           Russia; « bérézina » n.f., fam., « défaite cuisante », 20th c.,
//           « C’est la bérézina » (Dictionnaire de l’Académie française online; the fact-check
//           of 2026-10-06 places the entry in the 10e éd., added June 2026:
//           https://www.dictionnaire-academie.fr/article/B0B00145).
//           Historians see the crossing as a tactical success for Napoleon:
//           Chemins de mémoire (ministère des Armées):
//           https://www.cheminsdememoire.gouv.fr/sites/default/files/2022-08/Berezina.pdf
//       F8. Canossa, January 1077: the emperor Henri IV waits three days to be
//           received by Pope Gregory VII and lifted from excommunication;
//           « aller à Canossa » = to submit, to humble oneself before an
//           adversary; revived by Bismarck in the 19th c. Hérodote:
//           https://www.herodote.net/28_janvier_1077-evenement-10770128.php
//       F9. « Victoire à la Pyrrhus »: Pyrrhus beats the Romans (Héraclée,
//           280 av. J.-C.; Ausculum, 279) at such a cost that the victory is a
//           disaster. Larousse: https://www.larousse.fr/dictionnaires/francais/pyrrhus
//       F10. Austerlitz, 2 décembre 1805, a Napoleonic victory (napoleon.org).
//       F11. Loi du 9 décembre 1905 (Q3). Not applied to the cults in the
//           Bas-Rhin, Haut-Rhin and Moselle, where the earlier concordat
//           regime stayed (Conseil constitutionnel, décision 2012-297 QPC,
//           summarised by Eurojuris:
//           https://www.eurojuris.fr/articles/la-preservation-du-regime-concordataire-en-alsace-moselle-par-les-sages-de-la-rue-montpensier-1847.htm).
//       F12. Québec, Loi sur la laïcité de l’État: adopted 16 June 2019; bans
//           visible religious symbols for some state employees in a position
//           of authority, public-school teachers included; uses the
//           notwithstanding clause (disposition de dérogation). DATE-STAMPED:
//           the Supreme Court of Canada heard the challenge 23-26 March
//           2026; no ruling as of 2026-10-06 (re-checked at the pre-review: droit-inc, 28 Sept 2026, "l’arrêt n’est pas rendu"; open question 1). La
//           Presse, 2026-03-23:
//           https://lapresse.ca/actualites/justice-et-faits-divers/2026-03-23/contestation-de-la-loi-sur-la-laicite-de-l-etat/la-cour-supreme-amorce-ses-audiences-sur-la-loi-21.php
//           and Radio-Canada: https://ici.radio-canada.ca/nouvelle/2241126/loi-laicite-etat-cour-supreme
//           (LégisQuébec L-0.3 returned 403 to the fetcher.)
//       F13. 18 juin 1940: de Gaulle speaks on the BBC from London; the
//           broadcast was not recorded; it is known through texts; the 22 June
//           speech was recorded. Archives nationales:
//           https://www.archives-nationales.culture.gouv.fr/presentation-en-anglais-de-lexposition-lappel-du-18-juin-1940
//       F14. Vichy, the « État français », 1940-1944, collaborated with the
//           occupier: standard. The ordonnance of 9 August 1944 (Q4) declares
//           null the acts promulgated after 16 June 1940 (art. 2).
//       F15. Rafle du Vél d’Hiv, 16-17 juillet 1942, Paris, by the French
//           police at the occupier's initiative, in Paris and its suburbs
//           (row and text say « à Paris et en banlieue »): 12 884 (Mémorial de la Shoah,
//           Île-de-France journal) to 13 152 people; the lesson says « près de
//           13 000 ». https://memorialdelashoah.org/wp-content/uploads/2024/11/journal-de-la-region-idf-2022.pdf
//       F16. 16 juillet 1995: President Jacques Chirac (d. 2019) recognises
//           the responsibility of the French State in the persecution and
//           deportation of the Jews; no predecessor had. Public Sénat /
//           Europe 1: https://www.europe1.fr/politique/chirac-les-actions-que-lhistoire-retiendra-3921836
//       F17. Algeria: war from 1 November 1954; accords d’Évian signed 18 mars
//           1962, ceasefire 19 mars; referendum 1 July; France recognises
//           independence 3 July; Algeria celebrates it on 5 July. CEFAN
//           (Université Laval): https://www.axl.cefan.ulaval.ca/afrique/algerie-accords_d%27Evian.htm
//       F18. Loi n° 99-882 du 18 octobre 1999: « opérations effectuées en
//           Afrique du Nord » replaced by « guerre d’Algérie ou combats en
//           Tunisie et au Maroc ». Assemblée nationale, question écrite:
//           https://www.assemblee-nationale.fr/dyn/11/questions/QANR5L11QE50175.pdf
//       F19. Two commemorations: 5 December (décret n° 2003-925) and 19 March
//           (loi n° 2012-1361 du 6 décembre 2012); the 19 March date is
//           contested by harki and pied-noir associations because killings
//           continued after the ceasefire. Assemblée nationale, questions
//           écrites: https://www.assemblee-nationale.fr/dyn/14/questions/QANR5L14QE33096.pdf
//           and Sénat: https://www.senat.fr/leg/ppl08-217.html
//       F20. Loi n° 2005-158 du 23 février 2005, art. 4, al. 2 (« le rôle
//           positif de la présence française outre-mer, notamment en Afrique
//           du Nord »): declared regulatory by the Conseil constitutionnel
//           (décision 2006-203 L, 31 janvier 2006) and removed by decree in
//           February 2006. Assemblée nationale, rapport n° 2705:
//           https://www.assemblee-nationale.fr/12/pdf/rapports/r2705.pdf
//       F21. Mai 68: student revolt then general strike; Grenelle (27 May
//           1968) raises the SMIG by 35 %; dissolution 30 May; legislative
//           elections in June won largely by the Gaullists. Larousse,
//           Journal de l’année 1968: https://www.larousse.fr/archives/journaux_annee/1968/79/finances
//       F22. « Les Trente Glorieuses »: Jean Fourastié, Les Trente Glorieuses
//           ou la révolution invisible de 1946 à 1975, Fayard, 1979. Larousse:
//           https://www.larousse.fr/encyclopedie/divers/Trente_Glorieuses/185974
//       F23. « Je me souviens »: engraved in 1883 on the Hôtel du Parlement at
//           the request of the architect Eugène-Étienne Taché, who never
//           explained it; on licence plates since 1978; official in the coat
//           of arms of 1939. Encyclopédie canadienne:
//           https://encyclopediecanadienne.ca/article/quebecs-motto/
//       F24. Plaines d’Abraham, 13 septembre 1759; capitulation of Montréal,
//           8 septembre 1760; traité de Paris, 1763: New France becomes
//           British. Encyclopédie canadienne, « Du Régime français au Régime
//           anglais »: https://www.thecanadianencyclopedia.ca/fr/article/du-regime-francais-au-regime-anglais
//       F25. Révolution tranquille: from the election of 22 June 1960 (Jean
//           Lesage), through the 1960s. Encyclopédie canadienne:
//           https://encyclopediecanadienne.ca/article/quiet-revolution
//       F26. Charte de la langue française (loi 101), assented 26 août 1977.
//           Musée Pointe-à-Callière display and Érudit; LégisQuébec blocked.
//           https://pacmusee.qc.ca/en/exhibitions/detail/charter-french-language-45-years/
//       F27. Referendums: 20 mai 1980, non 59,56 %; 30 octobre 1995, non
//           50,58 % (oui 49,42 %). Élections Québec:
//           https://www.electionsquebec.qc.ca/en/results-and-statistics/1995-referendum-on-quebecs-accession-to-sovereignty/
//           https://www.electionsquebec.qc.ca/en/results-and-statistics/referendum-on-the-1980-sovereignty-association-proposal-for-quebec/
//       F28. Deportation of the Acadians from 1755 (decision of 28 July 1755),
//           to 1762-1763; more than 10 000 exiled. Proclamation royale of 10
//           December 2003 (TR/2003-188) acknowledging the wrongs and making 28
//           July, from 2005, the Journée de commémoration du Grand
//           Dérangement. Justice Canada:
//           https://laws-lois.justice.gc.ca/fra/reglements/TR-2003-188/TexteComplet.html
//       F29. 25 août 1830, La Muette de Portici (Auber) at the Théâtre de la
//           Monnaie: the riot that starts the Belgian revolution;
//           independence proclaimed 4 octobre 1830. Hérodote:
//           https://www.herodote.net/4_octobre_1830-evenement-18301004.php
//       F30. 21 juillet 1831: Léopold Ier swears the oath to the Constitution;
//           national day (law of 1890). Hérodote:
//           https://www.herodote.net/Les_Belges_se_donnent_un_roi-synthese-1846.php
//           (belgium.be sits behind a captcha.)
//       F31. Congo: État indépendant du Congo, personal possession of Léopold
//           II, 1885-1908; Belgian colony 1908-1960; independence 30 juin
//           1960. Special parliamentary commission on the colonial past set up
//           July 2020, closed December 2022 without agreement on conclusions.
//           JusticeInfo: https://www.justiceinfo.net/fr/79840-commission-passe-colonial-belge-fin-mission-experts.html
//       F32. Belgium federal since the 1993 revision of art. 1 (Q5).
//       F33. Pacte fédéral « début août 1291 », Uri, Schwytz, Unterwald; the 1st
//           of August celebrated since 1891. DHS:
//           https://hls-dhs-dss.ch/fr/articles/008951
//       F34. Guillaume Tell: legendary hero, first in the Livre blanc de
//           Sarnen (c. 1470); doubts on Tell's historicity from the 16th c., settled
//           after 1845 (Kopp rejects Tell and the Grütli oath as legend). The
//           « Aucun spécialiste… » line once noted here is NOT DHS wording
//           (pre-review 2026-10-06): row 1159 now says « Les historiens
//           tiennent le tir sur la pomme pour une légende ».
//           DHS: https://hls-dhs-dss.ch/fr/articles/017475
//       F35. Acte de Paris of 20 novembre 1815 (signed the same day as the
//           second treaty of Paris, a separate act): the powers guarantee
//           Switzerland's perpetual neutrality. DHS:
//           https://hls-dhs-dss.ch/fr/articles/016572
//       F36. 12 septembre 1848: the federal Constitution, first Swiss federal
//           state. DHS: https://hls-dhs-dss.ch/fr/articles/009811
//       F37. Women's federal vote: 7 février 1971 (65,7 % oui); Appenzell
//           Rhodes-Intérieures forced by the Tribunal fédéral, 27 novembre
//           1990. Parlement suisse:
//           https://www.parlament.ch/fr/%C3%BCber-das-parlament/femmes-politiques/conquete-de-egalite/suffrage-feminin
//       F38. Röstigraben: the latent opposition between German-speaking and
//           French-speaking Switzerland; the image appeared in the First World
//           War. DHS: https://hls-dhs-dss.ch/fr/articles/047131
//       F39. 1960: 17 African countries independent, 14 of them under French
//           administration. Senegal celebrates its independence on 4 April;
//           Senghor its president from 1960 to his resignation on 31 December
//           1980. SenePlus / Hérodote:
//           https://seneplus.com/node/148155
//           https://www.herodote.net/4_avril_1960-evenement-19600404.php
//       F40. Négritude: term forged in the 1930s in Paris by Black African and
//           Caribbean students and poets around Césaire, Senghor and Damas;
//           reclaims a contemptuous word. Larousse:
//           https://www.larousse.fr/encyclopedie/litterature/n%C3%A9gritude/175565
//       F41. « France-Afrique », used positively by Félix Houphouët-Boigny in
//           1955; « Françafrique », the title of François-Xavier Verschave's
//           1998 book, a critical name for Franco-African networks. Hérodote:
//           https://www.herodote.net/Francafrique_France_Afrique-mot-608.php
//
//     LEFT OUT, NOT SURE ENOUGH OR NOT WANTED: « les cent jours » (the
//     political sense is often traced to F. D. Roosevelt, not Napoleon);
//     « Paris vaut bien une messe » and « Après moi le déluge » (attribution
//     chains not checked); the « Amour sacré de la patrie » refrain (libretto
//     text not verified word for word); the 1980 / 1995 referendum
//     questions; Mai 68 slogans; any Rwanda or Indochina reference; any
//     living person.
//
//  8. NO VERDICT. Every contested reference carries two named positions and
//     the line « je rapporte, je ne tranche pas ». The only flat corrections
//     are FACTUAL (an apocryphal attribution, a date, the literal reading of
//     « un Waterloo »).
//
//  9. APOSTROPHES: every authored French string uses the typographic ’.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';
import { seedPlusPacks } from '../../../../ealch-v2/src/content/seed-plus-packs.ts';
const seed = seedPlusPacks();
import { unitRef } from '../_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c1.13',
  seq: 13,
  title: 'The References That Count',
  sub: 'Les références qui comptent',
  canDo: 'Can recognise the historical references francophone press and speech take for granted (1789, 1905, the 18th of June, Vichy, Algeria, Mai 68, the Conquest, the Révolution tranquille, 1830, 1291, 1960, the négritude), unfold what each one recalls, explain what invoking it does in a text, tell legend and apocrypha from fact, and report contested readings with their sources and without a verdict',
  prereqUnitIds: ['b2.31', 'b2.24', 'b2.34'],
} as const;

export const LESSON_ID = 'c1.13.l1';
export const THEME = 'culture-profonde';
export const LEVEL = 'c1' as const;

/** ONE block, by decision 28. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *  B1 and B2 units are in the seed with their `seq`; C1 positions come from
 *  the plan. Never a raw id on screen.
 * ══════════════════════════════════════════════════════════════════════════ */

type SeedUnit = { id: string; seq: number | string };
const SEQ = new Map((seed.units as unknown as SeedUnit[]).map((u) => [u.id, Number(u.seq)]));

/** TODO(import): drop once the c1 units are rows in `content_units`. */
const C1_SEQ_FROM_PLAN: Record<string, number> = { 'c1.13': 13, 'c1.20': 20, 'c1.24': 24 };

export function refFr(unitId: string): string {
  const band = unitId.slice(0, 2);
  if (band === 'b1' || band === 'b2') {
    const n = SEQ.get(unitId);
    if (!n) throw new Error(`c1.13: ${unitId} is not in the seed`);
    return `la leçon ${n} du ${band.toUpperCase()}`;
  }
  const planned = C1_SEQ_FROM_PLAN[unitId];
  return planned ? `la leçon ${planned} du C1` : unitRef(unitId);
}

export const REGIONAL_UNIT = 'b2.31';
export const CRITIQUE_UNIT = 'b2.24';
export const PROVERBES_UNIT = 'b2.34';
export const PRESSE_UNIT = 'c1.24';

export const REGIONAL_REF = refFr(REGIONAL_UNIT);
export const CRITIQUE_REF = refFr(CRITIQUE_UNIT);
export const PROVERBES_REF = refFr(PROVERBES_UNIT);
export const PRESSE_REF = refFr(PRESSE_UNIT);

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED (never retyped)
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B231_REFRAME } from '../b2/francais-regional-corpus.ts';
export { REFRAME as B224_REFRAME } from '../b2/lecture-critique-corpus.ts';
export { REFRAME as B234_REFRAME } from '../b2/proverbes-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE FOLDED MAP. A reference is a whole landscape (a day, a war, a law, a
 *  century) folded down to one word or one date so it fits in a sentence.
 *  To read it, you unfold it: what happened, when, what it has come to mean.
 *  Then you look at the hand that holds it: who invokes it, for what, and
 *  what it lets them say without saying it. The map is the same in every
 *  hand; the use is not. That is why the lesson never says which hand is
 *  right.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Une référence est un raccourci : déplie-la, puis regarde qui s’en sert.';
export const REFRAME_EN = 'A reference is a shortcut: unfold it, then look at who is using it.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Connais tes dates.',
    why: 'Turns the lesson into a quiz of facts. A learner who knows 1905 and still reads « l’esprit de 1905 » as neutral has missed the point: every reference here is a USE, not only a date.',
  },
  {
    text: 'L’histoire est écrite par les vainqueurs.',
    why: 'A verdict, and a cliché. It licenses the learner to dismiss one side of every contested act (Vichy, Algeria, the Conquest), which the brief forbids.',
  },
  {
    text: 'Ce qu’un texte affirme n’est pas ce qu’il prouve.',
    why: 'b2.24’s reframe, quoted in act 1. It judges evidence; a reference proves nothing and claims little: its force lies in what it lets the writer suggest.',
  },
  {
    text: 'Derrière chaque nom, une histoire.',
    why: 'True for act 3 and silent on the acts where the point is a contested NAME (Algeria, Françafrique) or an apocryphal line, where the story behind the name is the wrong one.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE IMPORTS, BY ACT
 *  Read from Postgres 2026-10-06 and, where present, from seedPlusPacks().
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED = {
  act1: [
    'fr.b2.quebec-et-francophonie.1013',         // Le français n’a pas un seul centre, il en a plusieurs.
    'fr.b2.quebec-et-francophonie.1024',         // La majorité des gens qui parlent français chaque jour vivent en Afrique.
    'fr.b2.strategies-de-comprehension.1407',    // Qui le dit ?
    'fr.b2.strategies-de-comprehension.1413',    // Ce qu’un texte affirme n’est pas ce qu’il prouve.  (flashcard only)
    'fr.b2.expressions-imagees.1606',            // Un proverbe se cite, une expression figée se conjugue.  (flashcard only)
  ],
  act2: [
    'fr.b2.philosophie.190',                     // les Lumières  (Postgres only; voiceflash, review)
    'fr.a1.les-fetes.011',                       // le quatorze juillet  (Postgres only)
    'fr.b2.litterature.1175',                    // Le 20 juin 1789, les députés ont trouvé la porte de leur salle fermée.
  ],
  act3: [] as string[],
  act4: [
    'fr.b2.questions-sociales.036',              // la laïcité  (Postgres only)
    'fr.c1.nuances-et-registres.027',            // La laïcité, telle qu'on la pratique ici, ne ressemble guère au modèle français.  (Postgres only, legacy)
  ],
  act5: [] as string[],
  act6: [
    'fr.c1.nuances-et-registres.041',            // La colonisation a laissé des traces profondes dont les sociétés contemporaines n'ont pas fini de débattre.  (Postgres only, legacy)
  ],
  act7: [] as string[],
  act8: [
    'fr.b2.quebec-et-francophonie.078',          // La Conquête de 1760 marqua un tournant décisif dans l'histoire du Canada français.  (Postgres only, dictation)
    'fr.b1.quebec-et-francophonie.132',          // Après la Révolution tranquille, l'Église a perdu une grande partie de son influence sur l'État.  (Postgres only)
    'fr.b1.quebec-et-francophonie.188',          // Le Grand Dérangement a forcé des milliers d'Acadiens à quitter leurs terres.  (Postgres only, dictation)
  ],
  act9: [] as string[],
  act10: [] as string[],
  act11: [
    'fr.a2.quebec-et-francophonie.182',          // Le Sénégal a obtenu son indépendance en mille neuf cent soixante.  (Postgres only, dictation)
  ],
  act12: [] as string[],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Published in Postgres, absent from the local seed cut: fr / en / drills
 *  copied verbatim on 2026-10-06, so `src()` can print them. */
export const DB_ONLY_ROWS: { id: string; fr: string; en: string; drills: string[] }[] = [
  { id: 'fr.b2.philosophie.190', fr: 'les Lumières', en: 'the Enlightenment', drills: ['voiceflash', 'review'] },
  { id: 'fr.a1.les-fetes.011', fr: 'le quatorze juillet', en: 'the Fourteenth of July, Bastille Day', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.b2.questions-sociales.036', fr: 'la laïcité', en: 'secularism', drills: ['flashcard', 'voiceflash'] },
  { id: 'fr.c1.nuances-et-registres.027', fr: "La laïcité, telle qu'on la pratique ici, ne ressemble guère au modèle français.", en: 'Secularism, as we practice it here, hardly resembles the French model.', drills: ['sentence', 'review'] },
  { id: 'fr.c1.nuances-et-registres.041', fr: "La colonisation a laissé des traces profondes dont les sociétés contemporaines n'ont pas fini de débattre.", en: 'Colonization left deep marks that contemporary societies have not finished debating.', drills: ['sentence', 'review'] },
  { id: 'fr.b2.quebec-et-francophonie.078', fr: "La Conquête de 1760 marqua un tournant décisif dans l'histoire du Canada français.", en: 'The Conquest of 1760 marked a decisive turning point in the history of French Canada.', drills: ['dictation'] },
  { id: 'fr.b1.quebec-et-francophonie.132', fr: "Après la Révolution tranquille, l'Église a perdu une grande partie de son influence sur l'État.", en: 'After the Quiet Revolution, the Church lost much of its influence over the state.', drills: ['sentence', 'review'] },
  { id: 'fr.b1.quebec-et-francophonie.188', fr: "Le Grand Dérangement a forcé des milliers d'Acadiens à quitter leurs terres.", en: 'The Great Upheaval forced thousands of Acadians to leave their land.', drills: ['dictation'] },
  { id: 'fr.a2.quebec-et-francophonie.182', fr: 'Le Sénégal a obtenu son indépendance en mille neuf cent soixante.', en: 'Senegal obtained its independence in nineteen sixty.', drills: ['dictation'] },
];

/** No `flashcard` drill: nameable, never releasable. */
export const NOT_DECK_ABLE = [
  'fr.b2.philosophie.190',                       // voiceflash, review
  'fr.c1.nuances-et-registres.027',              // sentence, review
  'fr.c1.nuances-et-registres.041',              // sentence, review
  'fr.b2.quebec-et-francophonie.078',            // dictation only
  'fr.b1.quebec-et-francophonie.132',            // sentence, review
  'fr.b1.quebec-et-francophonie.188',            // dictation only
  'fr.a2.quebec-et-francophonie.182',            // dictation only
];

/** No `voiceflash`: never in a `practice` speak section. */
export const NOT_SPEAKABLE = [
  ...NOT_DECK_ABLE.filter((id) => id !== 'fr.b2.philosophie.190'),
  'fr.b2.strategies-de-comprehension.1413',      // flashcard only
  'fr.b2.expressions-imagees.1606',              // flashcard only
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 *
 *  A WORKSHOP CORPUS HOLDS PHRASES THAT DO A JOB: a reference as it is met
 *  in a text, the fact that unfolds it, a line that says what invoking it
 *  does, or a line of the final explanation. Each act has one flashcard-only
 *  rule card (`rule()`), whose prompt is a situation and whose `fr` is the
 *  act's move. Quotations are rows only where verified (§A.7).
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];
const FCR = ['flashcard', 'review'] as Item['drills'];
const FC = ['flashcard'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['references-historiques'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the situation, `fr` the move. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE WATERLOO DU TRAMWAY ─────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(1000, 'Le Waterloo du tramway', 'The tramway’s Waterloo', '/lə va.tɛʁ.lo dy tʁam.wɛ/', 'luh va-tehr-LOH dü tramm-WEH', ['titre', 'waterloo']),
  sent(1001, 'Pour l’éditorialiste, le tramway est une défaite écrasante, et sans appel.', 'For the editorial writer, the tramway is a crushing defeat, with no way back.', '/puʁ le.di.tɔ.ʁja.list lə tʁam.wɛ ɛ.tyn de.fɛt e.kʁa.zɑ̃t e sɑ̃.za.pɛl/', 'poor lay-dee-to-rya-LEEST luh tramm-WEH eh-tün day-FET ay-kra-ZAHⁿT ay sahⁿ-za-PEL', ['lecture', 'waterloo']),
  sent(1002, 'Le projet de tramway passe par Waterloo, en Belgique.', 'The tramway project goes through Waterloo, in Belgium.', '/lə pʁɔ.ʒɛ də tʁam.wɛ pas paʁ va.tɛʁ.lo ɑ̃ bɛl.ʒik/', 'luh pro-ZHEH duh tramm-WEH pass par va-tehr-LOH ahⁿ bel-ZHEEK', ['contresens', 'waterloo']),
  sent(1003, 'Une référence est un raccourci.', 'A reference is a shortcut.', '/yn ʁe.fe.ʁɑ̃s ɛ.tœ̃ ʁa.kuʁ.si/', 'ün ray-fay-RAHⁿSS eh-tuhⁿ ra-koor-SEE', ['methode']),
  sent(1004, 'Qu’est-ce que cette date évoque, et pour qui ?', 'What does this date call up, and for whom?', '/kɛs kə sɛt dat e.vɔk e puʁ ki/', 'kess kuh set DAT ay-VOK ay poor KEE', ['question', 'methode']),
  sent(1005, 'Qui invoque cette référence, et dans quel but ?', 'Who invokes this reference, and to what end?', '/ki ɛ̃.vɔk sɛt ʁe.fe.ʁɑ̃s e dɑ̃ kɛl byt/', 'kee ehⁿ-VOK set ray-fay-RAHⁿSS ay dahⁿ kel BÜT', ['question', 'invoquer']),
  sent(1006, 'Je déplie la référence avant d’en juger l’usage.', 'I unfold the reference before judging how it is used.', '/ʒə de.pli la ʁe.fe.ʁɑ̃s a.vɑ̃ dɑ̃ ʒy.ʒe ly.zaʒ/', 'zhuh day-PLEE la ray-fay-RAHⁿSS a-vahⁿ dahⁿ zhü-zhay lü-ZAZH', ['methode', 'deplier'], FCVDR),
  sent(1007, REFRAME, REFRAME_EN, '/yn ʁe.fe.ʁɑ̃s ɛ.tœ̃ ʁa.kuʁ.si de.pli la pɥi ʁə.ɡaʁd ki sɑ̃ sɛʁ/', 'ün ray-fay-RAHⁿSS eh-tuhⁿ ra-koor-SEE | day-PLEE-la | pwee ruh-gard kee sahⁿ SEHR', ['regle'], FC,
    rule('Un titre parle du « Waterloo du tramway ». Que fais-tu d’abord ?', 'Je déplie la référence : Waterloo, le 18 juin 1815, la dernière défaite de Napoléon. Puis je regarde qui s’en sert, et pour dire quoi : ici, un éditorialiste qui juge le projet perdu.')),
  sent(1008, 'L’auteur propose une lecture de l’événement, parmi d’autres.', 'The writer offers one reading of the event, among others.', '/lo.tœʁ pʁɔ.poz yn lɛk.tyʁ də le.vɛn.mɑ̃ paʁ.mi do.tʁ/', 'loh-TUHR pro-POHZ ün lek-TÜR duh lay-venn-MAHⁿ par-mee DOHTR', ['lecture']),
  sent(1009, 'Une même date ne réveille pas les mêmes souvenirs partout.', 'The same date does not wake the same memories everywhere.', '/yn mɛm dat nə ʁe.vɛj pa le mɛm su.və.niʁ paʁ.tu/', 'ün mem DAT nuh ray-VEY pa lay mem soo-vuh-NEER par-TOO', ['lecture', 'francophonie']),
  sent(1010, 'Je l’explique sans dire si l’auteur a raison.', 'I explain it without saying whether the writer is right.', '/ʒə lɛk.splik sɑ̃ diʁ si lo.tœʁ a ʁɛ.zɔ̃/', 'zhuh lek-SPLEEK sahⁿ deer see loh-TUHR a reh-ZOHⁿ', ['methode', 'neutre'], FCVDR),
  sent(1011, 'Ce rapprochement a ses limites.', 'This comparison has its limits.', '/sə ʁa.pʁɔʃ.mɑ̃ a se li.mit/', 'suh ra-prosh-MAHⁿ a say lee-MEET', ['nuance']),
  sent(1012, 'Le mot a quitté le champ de bataille pour entrer dans la langue.', 'The word left the battlefield and entered the language.', '/lə mo a ki.te lə ʃɑ̃ d(ə) ba.taj puʁ ɑ̃.tʁe dɑ̃ la lɑ̃ɡ/', 'luh MOH a kee-TAY luh shahⁿ duh ba-TAÏ poor ahⁿ-TRAY dahⁿ la LAHⁿG', ['antonomase']),
];

/* ── ACT 2 · 1789 ET LES LUMIÈRES ───────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  phrase(1015, 'la prise de la Bastille', 'the storming of the Bastille', '/la pʁiz də la bas.tij/', 'la PREEZ duh la bass-TEEY', ['1789']),
  phrase(1016, 'la nuit du 4 août', 'the night of 4 August (1789, when privileges were abolished)', '/la nɥi dy ka.tʁut/', 'la NWEE dü ka-TROOT', ['1789', 'privileges']),
  sent(1017, 'Les hommes naissent et demeurent libres et égaux en droits.', 'Men are born and remain free and equal in rights.', '/le.zɔm nɛs e də.mœʁ libʁ e.ze.ɡo ɑ̃ dʁwa/', 'lay-ZOMM NESS ay duh-MUHR LEEBR ay-zay-GOH ahⁿ DRWA', ['1789', 'citation'], FCVDR),
  sent(1018, 'Le 14 juillet rappelle 1789, mais aussi la fête de la Fédération de 1790.', 'The 14th of July recalls 1789, but also the Festival of the Federation of 1790.', '/lə ka.tɔʁz ʒɥi.jɛ ʁa.pɛl mil sɛt sɑ̃ ka.tʁə.vɛ̃.nœf mɛ.zo.si la fɛt də la fe.de.ʁa.sjɔ̃ də mil sɛt sɑ̃ ka.tʁə.vɛ̃.dis/', 'luh ka-TORZ zhwee-YEH ra-PEL meel set sahⁿ ka-truh-vehⁿ-NUHF | meh-zoh-SEE la FET duh la fay-day-ra-SYOHⁿ duh meel set sahⁿ ka-truh-vehⁿ-DEESS', ['1789', '14juillet']),
  sent(1019, 'Les penseurs des Lumières opposaient la raison à l’autorité de la tradition.', 'Enlightenment thinkers set reason against the authority of tradition.', '/le pɑ̃.sœʁ de ly.mjɛʁ ɔ.po.zɛ la ʁɛ.zɔ̃ a lo.tɔ.ʁi.te də la tʁa.di.sjɔ̃/', 'lay pahⁿ-SUHR day lü-MYEHR o-poh-ZEH la reh-ZOHⁿ a loh-to-ree-TAY duh la tra-dee-SYOHⁿ', ['lumieres']),
  sent(1020, 'La direction a vécu sa nuit du 4 août : fin des places de parking réservées.', 'Management had its night of 4 August: an end to reserved parking spaces.', '/la di.ʁɛk.sjɔ̃ a ve.ky sa nɥi dy ka.tʁut fɛ̃ de plas də paʁ.kiŋ ʁe.zɛʁ.ve/', 'la dee-rek-SYOHⁿ a vay-KÜ sa NWEE dü ka-TROOT | fehⁿ day PLASS duh par-KEENG ray-zehr-VAY', ['privileges', 'usage']),
  sent(1021, 'Parler d’Ancien Régime, c’est dire qu’un système a fait son temps.', 'To speak of an Ancien Régime is to say that a system has had its day.', '/paʁ.le dɑ̃.sjɛ̃ ʁe.ʒim sɛ diʁ kœ̃ sis.tɛm a fɛ sɔ̃ tɑ̃/', 'par-LAY dahⁿ-syehⁿ ray-ZHEEMM | seh deer kuhⁿ sees-TEMM a feh sohⁿ TAHⁿ', ['usage']),
  sent(1022, 'Pour les uns, 1789 fonde les droits ; pour d’autres, la Révolution, c’est aussi la Terreur.', 'For some, 1789 founds rights; for others, the Revolution also means the Terror.', '/puʁ le.zœ̃ mil sɛt sɑ̃ ka.tʁə.vɛ̃.nœf fɔ̃d le dʁwa puʁ do.tʁ la ʁe.vɔ.ly.sjɔ̃ sɛ.to.si la tɛ.ʁœʁ/', 'poor lay-ZUHⁿ meel set sahⁿ ka-truh-vehⁿ-NUHF fohⁿd lay DRWA | poor DOHTR la ray-vo-lü-SYOHⁿ seh-toh-see la teh-RUHR', ['lecture', '1789']),
  sent(1023, 'Prendre la Bastille, c’est s’attaquer au symbole d’un pouvoir.', 'To take the Bastille is to attack the symbol of a power.', '/pʁɑ̃dʁ la bas.tij sɛ sa.ta.ke o sɛ̃.bɔl dœ̃ pu.vwaʁ/', 'prahⁿdr la bass-TEEY | seh sa-ta-KAY oh sehⁿ-BOL duhⁿ poo-VWAR', ['usage']),
  sent(1024, 'Invoquer 1789, c’est choisir une lecture de la Révolution.', 'To invoke 1789 is to choose a reading of the Revolution.', '/ɛ̃.vɔ.ke mil sɛt sɑ̃ ka.tʁə.vɛ̃.nœf sɛ ʃwa.ziʁ yn lɛk.tyʁ də la ʁe.vɔ.ly.sjɔ̃/', 'ehⁿ-vo-KAY meel set sahⁿ ka-truh-vehⁿ-NUHF | seh shwa-ZEER ün lek-TÜR duh la ray-vo-lü-SYOHⁿ', ['regle', 'invoquer'], FC,
    rule('Un éditorial réclame « un nouveau 1789 ». Que fait son auteur ?', 'Il promet une rupture, pas une simple réforme, et il choisit une lecture de la Révolution : celle des droits et de la fin des privilèges. D’autres y verraient aussi la Terreur. Je le dis, sans trancher.')),
  sent(1025, 'Un « nouveau 1789 » promet une rupture, pas une simple réforme.', 'A "new 1789" promises a break, not a mere reform.', '/œ̃ nu.vo mil sɛt sɑ̃ ka.tʁə.vɛ̃.nœf pʁɔ.mɛ yn ʁyp.tyʁ pa.zyn sɛ̃pl ʁe.fɔʁm/', 'uhⁿ noo-VOH meel set sahⁿ ka-truh-vehⁿ-NUHF pro-MEH ün rüp-TÜR | pa-zün sehⁿpl ray-FORM', ['usage', 'invoquer']),
  sent(1026, 'Qu’ils mangent de la brioche.', 'Let them eat brioche.', '/kil mɑ̃ʒ də la bʁi.jɔʃ/', 'keel mahⁿzh duh la bree-YOSH', ['apocryphe', 'citation'], FCR),
  sent(1027, 'Rousseau prête ce mot à « une grande princesse », sans la nommer.', 'Rousseau gives this line to "a great princess", without naming her.', '/ʁu.so pʁɛt sə mo a yn ɡʁɑ̃d pʁɛ̃.sɛs sɑ̃ la nɔ.me/', 'roo-SOH PRET suh MOH a ün grahⁿd prehⁿ-SESS | sahⁿ la no-MAY', ['apocryphe']),
  sent(1028, 'On l’attribue souvent à Marie-Antoinette, à tort.', 'It is often attributed to Marie-Antoinette, wrongly.', '/ɔ̃ la.tʁi.by su.vɑ̃ a ma.ʁi.ɑ̃.twa.nɛt a tɔʁ/', 'ohⁿ la-tree-BÜ soo-VAHⁿ a ma-ree-ahⁿ-twa-NET | a TOR', ['apocryphe']),
  phrase(1029, 'une citation apocryphe', 'an apocryphal quotation: one wrongly attributed', '/yn si.ta.sjɔ̃ a.pɔ.kʁif/', 'ün see-ta-SYOHⁿ a-po-KREEF', ['apocryphe']),
  sent(1030, 'On prête à Louis XIV « L’État, c’est moi », mais aucun texte de son vivant ne le rapporte.', 'Louis XIV is credited with "I am the State", but no text from his lifetime reports it.', '/ɔ̃ pʁɛt a lwi ka.tɔʁz le.ta sɛ mwa mɛ.zo.kœ̃ tɛkst də sɔ̃ vi.vɑ̃ nə lə ʁa.pɔʁt/', 'ohⁿ PRET a lwee ka-TORZ | lay-TA seh MWA | meh-zoh-KUHⁿ TEKST duh sohⁿ vee-VAHⁿ nuh luh ra-PORT', ['apocryphe']),
  sent(1031, 'Une phrase apocryphe se cite avec « on prête à ».', 'An apocryphal line is quoted with "on prête à" (X is credited with).', '/yn fʁaz a.pɔ.kʁif sə sit a.vɛk ɔ̃ pʁɛt a/', 'ün FRAHZ a-po-KREEF suh SEET a-VEK ohⁿ PRET A', ['apocryphe', 'methode'], FCVDR),
];

/* ── ACT 3 · LES NOMS DEVENUS DES LEÇONS ────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(1035, 'Ce match a été son Waterloo.', 'That match was his Waterloo.', '/sə matʃ a e.te sɔ̃ va.tɛʁ.lo/', 'suh MATCH a ay-TAY sohⁿ va-tehr-LOH', ['waterloo', 'usage']),
  sent(1036, 'À Waterloo, le 18 juin 1815, Napoléon perd sa dernière bataille.', 'At Waterloo, on 18 June 1815, Napoleon loses his last battle.', '/a va.tɛʁ.lo lə dis.ɥi ʒɥɛ̃ mil ɥi sɑ̃ kɛ̃z na.pɔ.le.ɔ̃ pɛʁ sa dɛʁ.njɛʁ ba.taj/', 'a va-tehr-LOH luh deez-WEE zhwehⁿ meel wee sahⁿ KEHⁿZ | na-po-lay-OHⁿ pehr sa dehr-nyehr ba-TAÏ', ['waterloo', 'fait']),
  sent(1037, 'Pour l’équipe, la saison tourne à la bérézina.', 'For the team, the season is turning into a rout.', '/puʁ le.kip la sɛ.zɔ̃ tuʁn a la be.ʁe.zi.na/', 'poor lay-KEEP la seh-ZOHⁿ TOORN a la bay-ray-zee-NA', ['berezina', 'usage']),
  sent(1038, 'En 1812, l’armée de Napoléon franchit la Bérézina en pleine retraite de Russie.', 'In 1812, Napoleon’s army crosses the Berezina in the middle of the retreat from Russia.', '/ɑ̃ mil ɥi sɑ̃ du.z laʁ.me də na.pɔ.le.ɔ̃ fʁɑ̃.ʃi la be.ʁe.zi.na ɑ̃ plɛn ʁə.tʁɛt də ʁy.si/', 'ahⁿ meel wee sahⁿ DOOZ | lar-MAY duh na-po-lay-OHⁿ frahⁿ-SHEE la bay-ray-zee-NA | ahⁿ plenn ruh-TRET duh rü-SEE', ['berezina', 'fait']),
  sent(1039, 'Les historiens y voient un succès tactique ; la langue n’a retenu que les pertes.', 'Historians see it as a tactical success; the language kept only the losses.', '/le.zis.tɔ.ʁjɛ̃ i vwa œ̃ syk.sɛ tak.tik la lɑ̃ɡ na ʁə.tə.ny kə le pɛʁt/', 'lay-zees-to-RYEHⁿ ee VWA uhⁿ sük-SEH tak-TEEK | la LAHⁿG na ruh-tuh-NÜ kuh lay PEHRT', ['berezina', 'nuance']),
  sent(1040, 'Le directeur a dû aller à Canossa.', 'The director had to go to Canossa (to humble himself).', '/lə di.ʁɛk.tœʁ a dy a.le a ka.nɔ.sa/', 'luh dee-rek-TUHR a DÜ a-lay a ka-noss-SA', ['canossa', 'usage']),
  sent(1041, 'En 1077, l’empereur Henri IV attend le pape à Canossa pour obtenir son pardon.', 'In 1077, the emperor Henry IV waits for the Pope at Canossa to obtain his pardon.', '/ɑ̃ mil swa.sɑ̃t.dis.sɛt lɑ̃.pʁœʁ ɑ̃.ʁi katʁ a.tɑ̃ lə pap a ka.nɔ.sa puʁ ɔp.tə.niʁ sɔ̃ paʁ.dɔ̃/', 'ahⁿ meel swa-sahⁿt-dee-SET | lahⁿ-PRUHR ahⁿ-ree KATR a-TAHⁿ luh PAP a ka-noss-SA | poor op-tuh-NEER sohⁿ par-DOHⁿ', ['canossa', 'fait']),
  sent(1042, 'C’est une victoire à la Pyrrhus : gagnée, mais à quel prix.', 'It is a Pyrrhic victory: won, but at what a cost.', '/sɛ.tyn vik.twaʁ a la pi.ʁys ɡa.ɲe mɛ.za kɛl pʁi/', 'seh-tün veek-TWAR a la pee-RÜSS | ga-NYAY | meh-za kel PREE', ['pyrrhus', 'usage']),
  sent(1043, 'Pyrrhus bat les Romains, mais il y perd une grande partie de son armée.', 'Pyrrhus beats the Romans, but loses a large part of his army doing it.', '/pi.ʁys ba le ʁɔ.mɛ̃ mɛ.zil i pɛʁ yn ɡʁɑ̃d paʁ.ti də sɔ̃.naʁ.me/', 'pee-RÜSS BA lay ro-MEHⁿ | meh-zeel ee PEHR ün grahⁿd par-TEE duh soh-nar-MAY', ['pyrrhus', 'fait']),
  phrase(1044, 'une antonomase', 'antonomasia: a proper name used as a common noun', '/y.nɑ̃.tɔ.nɔ.maz/', 'ü-nahⁿ-to-no-MAHZ', ['antonomase']),
  sent(1045, 'Un nom propre devient un nom commun : un Waterloo, une bérézina.', 'A proper name becomes a common noun: a Waterloo, a bérézina.', '/œ̃ nɔ̃ pʁɔpʁ də.vjɛ̃ œ̃ nɔ̃ kɔ.mœ̃ œ̃ va.tɛʁ.lo yn be.ʁe.zi.na/', 'uhⁿ nohⁿ PROPR duh-VYEHⁿ uhⁿ nohⁿ ko-MUHⁿ | uhⁿ va-tehr-LOH | ün bay-ray-zee-NA', ['antonomase'], FCVDR),
  sent(1046, 'On franchit le Rubicon, mais on subit son Waterloo.', 'You cross the Rubicon, but you suffer your Waterloo.', '/ɔ̃ fʁɑ̃.ʃi lə ʁy.bi.kɔ̃ mɛ.zɔ̃ sy.bi sɔ̃ va.tɛʁ.lo/', 'ohⁿ frahⁿ-SHEE luh rü-bee-KOHⁿ | meh-zohⁿ sü-BEE sohⁿ va-tehr-LOH', ['antonomase', 'expression']),
  sent(1047, 'L’expression garde un seul trait de l’événement.', 'The expression keeps a single feature of the event.', '/lɛk.spʁɛ.sjɔ̃ ɡaʁd œ̃ sœl tʁɛ də le.vɛn.mɑ̃/', 'lek-spreh-SYOHⁿ gard uhⁿ suhl TREH duh lay-venn-MAHⁿ', ['regle', 'antonomase'], FC,
    rule('Un journaliste écrit que l’équipe a vécu « une bérézina ». Que garde le mot de 1812 ?', 'Un seul trait : les pertes. Les historiens voient dans le passage de la Bérézina un succès tactique, mais l’expression ne garde que la défaite. Un nom devenu leçon simplifie l’histoire.')),
  sent(1048, 'Il a fait de cette réunion son Austerlitz.', 'He made that meeting his Austerlitz (his great victory).', '/i.la fɛ də sɛt ʁe.y.njɔ̃ sɔ̃.no.stɛʁ.lits/', 'ee-la FEH duh set ray-ü-NYOHⁿ soh-noh-stehr-LEETS', ['antonomase', 'usage']),
  sent(1049, 'Avant de reprendre l’image, je vérifie qu’elle dit bien ce que je veux dire.', 'Before reusing the image, I check that it says what I mean.', '/a.vɑ̃ d(ə) ʁə.pʁɑ̃dʁ li.maʒ ʒə ve.ʁi.fi kɛl di bjɛ̃ sə kə ʒə vø diʁ/', 'a-vahⁿ duh ruh-PRAHⁿDR lee-MAZH | zhuh vay-ree-FEE kel dee BYEHⁿ suh kuh zhuh veu DEER', ['methode']),
];

/* ── ACT 4 · LA LAÏCITÉ, DE 1905 À LA LOI 21 ────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(1052, 'La République assure la liberté de conscience.', 'The Republic ensures freedom of conscience.', '/la ʁe.py.blik a.syʁ la li.bɛʁ.te də kɔ̃.sjɑ̃s/', 'la ray-pü-BLEEK a-SÜR la lee-behr-TAY duh kohⁿ-SYAHⁿSS', ['1905', 'citation'], FCVDR),
  sent(1053, 'La République ne reconnaît, ne salarie ni ne subventionne aucun culte.', 'The Republic does not recognise, pay or subsidise any religion.', '/la ʁe.py.blik nə ʁə.kɔ.nɛ nə sa.la.ʁi ni nə syb.vɑ̃.sjɔn o.kœ̃ kylt/', 'la ray-pü-BLEEK nuh ruh-ko-NEH | nuh sa-la-REE | nee nuh süb-vahⁿ-SYONN oh-kuhⁿ KÜLT', ['1905', 'citation']),
  phrase(1054, 'la loi de 1905', 'the law of 1905 (separating the Churches and the State in France)', '/la lwa də mil nœf sɑ̃ sɛ̃k/', 'la LWA duh meel nuhf sahⁿ SEHⁿK', ['1905']),
  sent(1055, 'La loi de 1905 sépare les Églises et l’État.', 'The law of 1905 separates the Churches and the State.', '/la lwa də mil nœf sɑ̃ sɛ̃k se.paʁ le.ze.ɡliz e le.ta/', 'la LWA duh meel nuhf sahⁿ SEHⁿK | say-PAR lay-zay-GLEEZ ay lay-TA', ['1905']),
  sent(1056, 'En Alsace et en Moselle, un régime des cultes antérieur à 1905 est resté en vigueur.', 'In Alsace and Moselle, a system for religions older than 1905 has remained in force.', '/ɑ̃.nal.zas e ɑ̃ mɔ.zɛl œ̃ ʁe.ʒim de kylt ɑ̃.te.ʁjœʁ a mil nœf sɑ̃ sɛ̃k ɛ ʁɛs.te ɑ̃ vi.ɡœʁ/', 'ahⁿ-nal-ZASS ay ahⁿ mo-ZEL | uhⁿ ray-ZHEEMM day KÜLT ahⁿ-tay-RYUHR a meel nuhf sahⁿ SEHⁿK | eh res-TAY ahⁿ vee-GUHR', ['1905', 'fait']),
  sent(1057, 'Au Québec, la Loi sur la laïcité de l’État a été adoptée en juin 2019.', 'In Québec, the Act respecting the laicity of the State was passed in June 2019.', '/o ke.bɛk la lwa syʁ la la.i.si.te də le.ta a e.te a.dɔp.te ɑ̃ ʒɥɛ̃ dø mil dis.nœf/', 'oh kay-BEK | la LWA sür la la-ee-see-TAY duh lay-TA | a ay-tay a-dop-TAY ahⁿ zhwehⁿ deu meel deez-NUHF', ['loi21', 'fait']),
  sent(1058, 'Elle interdit les signes religieux à certains employés de l’État, dont les enseignants du public.', 'It bans religious symbols for some state employees, including public-school teachers.', '/ɛl ɛ̃.tɛʁ.di le siɲ ʁə.li.ʒjø a sɛʁ.tɛ̃.zɑ̃.plwa.je də le.ta dɔ̃ le.zɑ̃.sɛ.ɲɑ̃ dy py.blik/', 'el ehⁿ-tehr-DEE lay SEENY ruh-lee-ZHYEU | a sehr-tehⁿ-zahⁿ-plwa-YAY duh lay-TA | dohⁿ lay-zahⁿ-seh-NYAHⁿ dü pü-BLEEK', ['loi21', 'fait']),
  sent(1059, 'Le gouvernement a recouru à la disposition de dérogation.', 'The government used the notwithstanding clause.', '/lə ɡu.vɛʁ.nə.mɑ̃ a ʁə.ku.ʁy a la dis.po.zi.sjɔ̃ də de.ʁɔ.ɡa.sjɔ̃/', 'luh goo-vehr-nuh-MAHⁿ a ruh-koo-RÜ a la dees-poh-zee-SYOHⁿ duh day-ro-ga-SYOHⁿ', ['loi21']),
  sent(1060, 'Pour ses défenseurs, la loi garantit la neutralité de l’État.', 'For its defenders, the law guarantees the neutrality of the State.', '/puʁ se de.fɑ̃.sœʁ la lwa ɡa.ʁɑ̃.ti la nø.tʁa.li.te də le.ta/', 'poor say day-fahⁿ-SUHR | la LWA ga-rahⁿ-TEE la neu-tra-lee-TAY duh lay-TA', ['loi21', 'positions']),
  sent(1061, 'Pour ses opposants, elle restreint la liberté de religion des minorités.', 'For its opponents, it restricts minorities’ freedom of religion.', '/puʁ se.zɔ.po.zɑ̃ ɛl ʁɛs.tʁɛ̃ la li.bɛʁ.te də ʁə.li.ʒjɔ̃ de mi.nɔ.ʁi.te/', 'poor say-zo-poh-ZAHⁿ | el res-TREHⁿ la lee-behr-TAY duh ruh-lee-ZHYOHⁿ day mee-no-ree-TAY', ['loi21', 'positions']),
  sent(1062, 'En mars 2026, la Cour suprême du Canada a entendu la contestation.', 'In March 2026, the Supreme Court of Canada heard the challenge.', '/ɑ̃ maʁs dø mil vɛ̃t.sis la kuʁ sy.pʁɛm dy ka.na.da a ɑ̃.tɑ̃.dy la kɔ̃.tɛs.ta.sjɔ̃/', 'ahⁿ MARSS deu meel vehⁿt-SEESS | la koor sü-PREMM dü ka-na-DA a ahⁿ-tahⁿ-DÜ la kohⁿ-tes-ta-SYOHⁿ', ['loi21', 'dater']),
  sent(1063, 'Le même mot, laïcité, ne désigne pas le même modèle des deux côtés de l’Atlantique.', 'The same word, laïcité, does not name the same model on both sides of the Atlantic.', '/lə mɛm mo la.i.si.te nə de.ziɲ pa lə mɛm mɔ.dɛl de dø ko.te də lat.lɑ̃.tik/', 'luh mem MOH la-ee-see-TAY | nuh day-ZEENY pa luh mem mo-DEL day deu koh-TAY duh lat-lahⁿ-TEEK', ['comparaison']),
  sent(1064, 'Quand un texte invoque 1905, je demande quelle laïcité il défend.', 'When a text invokes 1905, I ask which laïcité it is defending.', '/kɑ̃.tœ̃ tɛkst ɛ̃.vɔk mil nœf sɑ̃ sɛ̃k ʒə də.mɑ̃d kɛl la.i.si.te il de.fɑ̃/', 'kahⁿ-tuhⁿ TEKST ehⁿ-VOK meel nuhf sahⁿ SEHⁿK | zhuh duh-MAHⁿD kel la-ee-see-TAY eel day-FAHⁿ', ['regle', 'invoquer'], FC,
    rule('Deux tribunes citent la loi de 1905, l’une pour, l’autre contre une même mesure. Laquelle a raison ?', 'Ce n’est pas ma question. Les deux camps se réclament de 1905 : l’un en lit surtout la liberté de conscience, l’autre la neutralité. Je rapporte les deux lectures, avec leurs arguments.')),
  sent(1065, 'Les deux camps se réclament de la laïcité.', 'Both camps claim laïcité as their own.', '/le dø kɑ̃ sə ʁe.klam də la la.i.si.te/', 'lay deu KAHⁿ suh ray-KLAMM duh la la-ee-see-TAY', ['positions']),
  sent(1066, 'Je rapporte les deux positions, avec leurs arguments.', 'I report both positions, with their arguments.', '/ʒə ʁa.pɔʁt le dø po.zi.sjɔ̃ a.vɛk lœʁ.zaʁ.ɡy.mɑ̃/', 'zhuh ra-PORT lay deu poh-zee-SYOHⁿ | a-vek luhr-zar-gü-MAHⁿ', ['methode', 'neutre'], FCVDR),
];

/* ── ACT 5 · LE 18 JUIN ET VICHY ────────────────────────────────────────── */

export const ACT5_ROWS: Row[] = [
  phrase(1070, 'l’appel du 18 juin', 'the appeal of 18 June (1940)', '/la.pɛl dy dis.ɥi ʒɥɛ̃/', 'la-PEL dü deez-WEE ZHWEHⁿ', ['18juin']),
  sent(1071, 'Le 18 juin 1940, de Gaulle parle à la radio de Londres.', 'On 18 June 1940, de Gaulle speaks on the radio from London.', '/lə dis.ɥi ʒɥɛ̃ mil nœf sɑ̃ ka.ʁɑ̃t də ɡol paʁl a la ʁa.djo də lɔ̃dʁ/', 'luh deez-WEE zhwehⁿ meel nuhf sahⁿ ka-RAHⁿT | duh GOHL parl a la ra-DYOH duh LOHⁿDR', ['18juin', 'fait']),
  sent(1072, 'Cet appel n’a pas été enregistré ; on le connaît par des textes.', 'That appeal was not recorded; it is known through texts.', '/sɛ.ta.pɛl na pa.ze.te ɑ̃.ʁə.ʒis.tʁe ɔ̃ lə kɔ.nɛ paʁ de tɛkst/', 'seh-ta-PEL na pa-zay-TAY ahⁿ-ruh-zhees-TRAY | ohⁿ luh ko-NEH par day TEKST', ['18juin', 'fait']),
  sent(1073, 'Lancer un appel du 18 juin, c’est refuser une défaite que d’autres acceptent.', 'To launch an appeal of 18 June is to refuse a defeat that others accept.', '/lɑ̃.se œ̃.na.pɛl dy dis.ɥi ʒɥɛ̃ sɛ ʁə.fy.ze yn de.fɛt kə do.tʁə.zak.sɛpt/', 'lahⁿ-SAY uh-na-PEL dü deez-WEE ZHWEHⁿ | seh ruh-fü-ZAY ün day-FET kuh doh-truh-zak-SEPT', ['18juin', 'usage']),
  phrase(1074, 'le régime de Vichy', 'the Vichy regime (1940-1944)', '/lə ʁe.ʒim də vi.ʃi/', 'luh ray-ZHEEMM duh vee-SHEE', ['vichy']),
  sent(1075, 'De 1940 à 1944, le régime de Vichy collabore avec l’occupant.', 'From 1940 to 1944, the Vichy regime collaborates with the occupier.', '/də mil nœf sɑ̃ ka.ʁɑ̃t a mil nœf sɑ̃ ka.ʁɑ̃t.ka.tʁ lə ʁe.ʒim də vi.ʃi kɔ.la.bɔʁ a.vɛk lɔ.ky.pɑ̃/', 'duh meel nuhf sahⁿ ka-RAHⁿT a meel nuhf sahⁿ ka-rahⁿt-KATR | luh ray-ZHEEMM duh vee-SHEE ko-la-BOR a-vek lo-kü-PAHⁿ', ['vichy', 'fait']),
  sent(1076, 'En droit celle-ci n’a pas cessé d’exister.', 'In law, it (the Republic) never ceased to exist.', '/ɑ̃ dʁwa sɛl.si na pa se.se dɛɡ.zis.te/', 'ahⁿ DRWA sel-SEE na pa say-SAY deg-zees-TAY', ['vichy', 'citation'], FCR),
  sent(1077, 'En 1944, une ordonnance déclare nuls les actes du régime de Vichy.', 'In 1944, an ordinance declares the acts of the Vichy regime null and void.', '/ɑ̃ mil nœf sɑ̃ ka.ʁɑ̃t.katʁ yn ɔʁ.dɔ.nɑ̃s de.klaʁ nyl le.zakt dy ʁe.ʒim də vi.ʃi/', 'ahⁿ meel nuhf sahⁿ ka-rahⁿt-KATR | ün or-do-NAHⁿSS day-KLAR NÜL lay-ZAKT dü ray-ZHEEMM duh vee-SHEE', ['vichy', 'fait']),
  sent(1078, 'En 1995, le président Chirac reconnaît la responsabilité de l’État français.', 'In 1995, President Chirac acknowledges the responsibility of the French State.', '/ɑ̃ mil nœf sɑ̃ ka.tʁə.vɛ̃.kɛ̃z lə pʁe.zi.dɑ̃ ʃi.ʁak ʁə.kɔ.nɛ la ʁɛs.pɔ̃.sa.bi.li.te də le.ta fʁɑ̃.sɛ/', 'ahⁿ meel nuhf sahⁿ ka-truh-vehⁿ-KEHⁿZ | luh pray-zee-DAHⁿ shee-RAK ruh-ko-NEH la res-pohⁿ-sa-bee-lee-TAY duh lay-TA frahⁿ-SEH', ['vichy', 'fait']),
  sent(1079, 'Les 16 et 17 juillet 1942, près de 13 000 Juifs sont arrêtés à Paris et en banlieue par la police française.', 'On 16 and 17 July 1942, nearly 13,000 Jews are arrested in Paris and its suburbs by the French police.', '/le sɛz e di.sɛt ʒɥi.jɛ mil nœf sɑ̃ ka.ʁɑ̃t.dø pʁɛ də tʁɛz mil ʒɥif sɔ̃.ta.ʁɛ.te a pa.ʁi e ɑ̃ bɑ̃.ljø paʁ la pɔ.lis fʁɑ̃.sɛz/', 'lay SEZ ay dee-SET zhwee-YEH meel nuhf sahⁿ ka-rahⁿt-DEU | preh duh trez MEEL ZHWEEF sohⁿ-ta-reh-TAY a pa-REE ay ahⁿ bahⁿ-LYEU | par la po-LEESS frahⁿ-SEZ', ['vichy', 'fait']),
  sent(1080, 'Pour certains, Vichy n’était pas la République.', 'For some, Vichy was not the Republic.', '/puʁ sɛʁ.tɛ̃ vi.ʃi ne.tɛ pa la ʁe.py.blik/', 'poor sehr-TEHⁿ | vee-SHEE nay-TEH pa la ray-pü-BLEEK', ['vichy', 'positions']),
  sent(1081, 'Pour d’autres, l’État français doit répondre de ses actes.', 'For others, the French State must answer for its acts.', '/puʁ do.tʁ le.ta fʁɑ̃.sɛ dwa ʁe.pɔ̃dʁ də se.zakt/', 'poor DOHTR | lay-TA frahⁿ-SEH dwa ray-POHⁿDR duh say-ZAKT', ['vichy', 'positions']),
  sent(1082, 'Le débat porte sur la responsabilité, pas sur les faits.', 'The debate is about responsibility, not about the facts.', '/lə de.ba pɔʁt syʁ la ʁɛs.pɔ̃.sa.bi.li.te pa syʁ le fɛ/', 'luh day-BA PORT sür la res-pohⁿ-sa-bee-lee-TAY | pa sür lay FEH', ['vichy', 'nuance']),
  sent(1083, 'Une date de mémoire porte un débat : je le rapporte, je ne le tranche pas.', 'A date of remembrance carries a debate: I report it, I do not settle it.', '/yn dat də me.mwaʁ pɔʁt œ̃ de.ba ʒə lə ʁa.pɔʁt ʒə nə lə tʁɑ̃ʃ pa/', 'ün DAT duh may-MWAR port uhⁿ day-BA | zhuh luh ra-PORT | zhuh nuh luh trahⁿsh PA', ['regle', 'neutre'], FC,
    rule('Un discours dit « Vichy, ce n’était pas la France ». Un autre dit le contraire. Que fais-tu ?', 'Je rapporte les deux positions et qui les a défendues : l’ordonnance de 1944 dit que la République n’a pas cessé d’exister ; en 1995, le président Chirac reconnaît la responsabilité de l’État français. Je ne tranche pas.')),
  sent(1084, 'Je nomme les positions, et qui les a défendues.', 'I name the positions, and who defended them.', '/ʒə nɔm le po.zi.sjɔ̃ e ki le.za de.fɑ̃.dy/', 'zhuh NOMM lay poh-zee-SYOHⁿ | ay kee lay-za day-fahⁿ-DÜ', ['methode', 'positions'], FCVDR),
];

/* ── ACT 6 · L’ALGÉRIE : LES MOTS POUR LE DIRE ──────────────────────────── */

export const ACT6_ROWS: Row[] = [
  phrase(1088, 'les « événements d’Algérie »', 'the "events in Algeria" (the official French phrase for decades)', '/le.ze.vɛn.mɑ̃ dal.ʒe.ʁi/', 'lay-zay-venn-MAHⁿ dal-zhay-REE', ['algerie', 'nommer']),
  phrase(1089, 'la guerre d’Algérie', 'the Algerian War', '/la ɡɛʁ dal.ʒe.ʁi/', 'la GEHR dal-zhay-REE', ['algerie', 'nommer']),
  sent(1090, 'Pendant des décennies, la France officielle a parlé des « événements d’Algérie ».', 'For decades, official France spoke of the "events in Algeria".', '/pɑ̃.dɑ̃ de de.se.ni la fʁɑ̃s ɔ.fi.sjɛl a paʁ.le de.ze.vɛn.mɑ̃ dal.ʒe.ʁi/', 'pahⁿ-dahⁿ day day-say-NEE | la FRAHⁿSS o-fee-SYEL a par-LAY day-zay-venn-MAHⁿ dal-zhay-REE', ['algerie', 'nommer']),
  sent(1091, 'En 1999, une loi a inscrit l’expression « guerre d’Algérie ».', 'In 1999, a law wrote in the phrase "Algerian War".', '/ɑ̃ mil nœf sɑ̃ ka.tʁə.vɛ̃.diz.nœf yn lwa a ɛ̃s.kʁi lɛk.spʁɛ.sjɔ̃ ɡɛʁ dal.ʒe.ʁi/', 'ahⁿ meel nuhf sahⁿ ka-truh-vehⁿ-deez-NUHF | ün LWA a ehⁿs-KREE lek-spreh-SYOHⁿ GEHR dal-zhay-REE', ['algerie', 'fait']),
  sent(1092, 'En Algérie, on parle aussi de guerre de libération nationale.', 'In Algeria, people also speak of a war of national liberation.', '/ɑ̃.nal.ʒe.ʁi ɔ̃ paʁl o.si də ɡɛʁ də li.be.ʁa.sjɔ̃ na.sjɔ.nal/', 'ahⁿ-nal-zhay-REE | ohⁿ parl oh-SEE duh GEHR duh lee-bay-ra-SYOHⁿ na-syo-NAL', ['algerie', 'nommer']),
  sent(1093, 'Choisir un mot, c’est déjà choisir un point de vue.', 'Choosing a word is already choosing a point of view.', '/ʃwa.ziʁ œ̃ mo sɛ de.ʒa ʃwa.ziʁ œ̃ pwɛ̃ d(ə) vy/', 'shwa-ZEER uhⁿ MOH | seh day-ZHA shwa-ZEER uhⁿ pwehⁿ duh VÜ', ['nommer'], FCVDR),
  sent(1094, 'Les accords d’Évian sont signés le 18 mars 1962.', 'The Évian Accords are signed on 18 March 1962.', '/le.za.kɔʁ de.vjɑ̃ sɔ̃ si.ɲe lə dis.ɥit maʁs mil nœf sɑ̃ swa.sɑ̃t.dø/', 'lay-za-KOR day-VYAHⁿ sohⁿ see-NYAY | luh deez-WEET MARSS meel nuhf sahⁿ swa-sahⁿt-DEU', ['algerie', 'fait']),
  sent(1095, 'L’Algérie fête son indépendance le 5 juillet.', 'Algeria celebrates its independence on 5 July.', '/lal.ʒe.ʁi fɛt sɔ̃.nɛ̃.de.pɑ̃.dɑ̃s lə sɛ̃k ʒɥi.jɛ/', 'lal-zhay-REE FET soh-nehⁿ-day-pahⁿ-DAHⁿSS | luh sehⁿk zhwee-YEH', ['algerie', 'fait']),
  sent(1096, 'En France, deux journées d’hommage coexistent : le 19 mars et le 5 décembre.', 'In France, two days of remembrance coexist: 19 March and 5 December.', '/ɑ̃ fʁɑ̃s dø ʒuʁ.ne dɔ.maʒ kɔ.ɛɡ.zist lə diz.nœf maʁs e lə sɛ̃k de.sɑ̃bʁ/', 'ahⁿ FRAHⁿSS | deu zhoor-NAY do-MAZH ko-eg-ZEEST | luh deez-nuhf MARSS ay luh sehⁿk day-SAHⁿBR', ['algerie', 'positions']),
  sent(1097, 'Des associations de harkis et de rapatriés contestent le 19 mars, car les violences ont continué après le cessez-le-feu.', 'Associations of harkis and repatriates contest 19 March, because the violence continued after the ceasefire.', '/de.za.sɔ.sja.sjɔ̃ də aʁ.ki e də ʁa.pa.tʁi.je kɔ̃.tɛst lə diz.nœf maʁs kaʁ le vjɔ.lɑ̃s ɔ̃ kɔ̃.ti.nɥe a.pʁɛ lə se.se.lə.fø/', 'day-za-so-sya-SYOHⁿ duh ar-KEE ay duh ra-pa-tree-YAY | kohⁿ-TEST luh deez-nuhf MARSS | kar lay vyo-LAHⁿSS ohⁿ kohⁿ-tee-NWAY a-preh luh say-say-luh-FEU', ['algerie', 'positions']),
  sent(1098, 'En 2005, une loi voulait que l’école reconnaisse le « rôle positif » de la présence française outre-mer.', 'In 2005, a law wanted schools to recognise the "positive role" of the French presence overseas.', '/ɑ̃ dø mil sɛ̃k yn lwa vu.lɛ kə le.kɔl ʁə.kɔ.nɛs lə ʁol po.zi.tif də la pʁe.zɑ̃s fʁɑ̃.sɛz u.tʁə.mɛʁ/', 'ahⁿ deu meel SEHⁿK | ün LWA voo-LEH kuh lay-KOL ruh-ko-NESS luh ROHL poh-zee-TEEF duh la pray-ZAHⁿSS frahⁿ-SEZ oo-truh-MEHR', ['colonisation', 'fait']),
  sent(1099, 'Cette phrase a été retirée en 2006, après un vif débat.', 'That sentence was removed in 2006, after a heated debate.', '/sɛt fʁaz a e.te ʁə.ti.ʁe ɑ̃ dø mil sis a.pʁɛ.zœ̃ vif de.ba/', 'set FRAHZ a ay-tay ruh-tee-RAY ahⁿ deu meel SEESS | a-preh-zuhⁿ veef day-BA', ['colonisation', 'fait']),
  sent(1100, 'Le nom d’un événement est déjà une lecture.', 'The name of an event is already a reading.', '/lə nɔ̃ dœ̃.ne.vɛn.mɑ̃ ɛ de.ʒa yn lɛk.tyʁ/', 'luh nohⁿ duh-nay-venn-MAHⁿ eh day-ZHA ün lek-TÜR', ['regle', 'nommer'], FC,
    rule('Un article parle des « événements d’Algérie », un autre de « guerre de libération ». Lequel écrire ?', 'Je cite les deux noms et je dis qui emploie chacun : la France officielle a longtemps dit « événements », la loi de 1999 dit « guerre d’Algérie », l’Algérie dit aussi « guerre de libération nationale ». Le nom est déjà une lecture.')),
  sent(1101, 'Je cite les deux noms et je dis qui emploie chacun.', 'I quote both names and say who uses each one.', '/ʒə sit le dø nɔ̃ e ʒə di ki ɑ̃.plwa ʃa.kœ̃/', 'zhuh SEET lay deu NOHⁿ | ay zhuh dee kee ahⁿ-PLWA sha-KUHⁿ', ['methode', 'nommer'], FCVDR),
  sent(1102, 'Le mot fait débat : je le mets entre guillemets et je dis pourquoi.', 'The word is disputed: I put it in quotation marks and say why.', '/lə mo fɛ de.ba ʒə lə mɛ ɑ̃.tʁə ɡij.mɛ e ʒə di puʁ.kwa/', 'luh MOH feh day-BA | zhuh luh meh ahⁿ-truh geey-MEH | ay zhuh dee poor-KWA', ['methode', 'nommer']),
];

/* ── ACT 7 · MAI 68 ET LES TRENTE GLORIEUSES ────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  phrase(1105, 'un nouveau Mai 68', 'a new May 68 (a protest compared with May 1968)', '/œ̃ nu.vo mɛ swa.sɑ̃t.ɥit/', 'uhⁿ noo-VOH meh swa-sahⁿt-WEET', ['mai68', 'usage']),
  sent(1106, 'En mai 1968, la révolte étudiante devient une grève générale.', 'In May 1968, the student revolt turns into a general strike.', '/ɑ̃ mɛ mil nœf sɑ̃ swa.sɑ̃t.ɥit la ʁe.vɔlt e.ty.djɑ̃t də.vjɛ̃ yn ɡʁɛv ʒe.ne.ʁal/', 'ahⁿ MEH meel nuhf sahⁿ swa-sahⁿt-WEET | la ray-VOLT ay-tü-DYAHⁿT duh-vyehⁿ ün GREV zhay-nay-RAL', ['mai68', 'fait']),
  sent(1107, 'Les accords de Grenelle augmentent le salaire minimum de 35 %.', 'The Grenelle agreements raise the minimum wage by 35%.', '/le.za.kɔʁ də ɡʁə.nɛl ɔɡ.mɑ̃t lə sa.lɛʁ mi.ni.mɔm də tʁɑ̃t.sɛ̃k puʁ sɑ̃/', 'lay-za-KOR duh gruh-NEL og-MAHⁿT luh sa-LEHR mee-nee-MOMM | duh trahⁿt-SEHⁿK poor SAHⁿ', ['mai68', 'fait']),
  sent(1108, 'Le 30 mai, de Gaulle dissout l’Assemblée nationale.', 'On 30 May, de Gaulle dissolves the National Assembly.', '/lə tʁɑ̃t mɛ də ɡol di.su la.sɑ̃.ble na.sjɔ.nal/', 'luh trahⁿt MEH | duh GOHL dee-SOO la-sahⁿ-BLAY na-syo-NAL', ['mai68', 'fait']),
  sent(1109, 'Aux élections de juin, les gaullistes l’emportent largement.', 'In the June elections, the Gaullists win by a wide margin.', '/o.ze.lɛk.sjɔ̃ də ʒɥɛ̃ le ɡo.list lɑ̃.pɔʁt laʁ.ʒə.mɑ̃/', 'oh-zay-lek-SYOHⁿ duh ZHWEHⁿ | lay goh-LEEST lahⁿ-PORT lar-zhuh-MAHⁿ', ['mai68', 'fait']),
  sent(1110, 'Pour les uns, Mai 68 a libéré la parole et les mœurs.', 'For some, May 68 freed speech and social mores.', '/puʁ le.zœ̃ mɛ swa.sɑ̃t.ɥit a li.be.ʁe la pa.ʁɔl e le mœʁ/', 'poor lay-ZUHⁿ | meh swa-sahⁿt-WEET a lee-bay-RAY la pa-ROL ay lay MUHR', ['mai68', 'positions']),
  sent(1111, 'Pour les autres, il a affaibli l’autorité.', 'For others, it weakened authority.', '/puʁ le.zotʁ i.la a.fɛ.bli lo.tɔ.ʁi.te/', 'poor lay-ZOHTR | ee-la a-feh-BLEE loh-to-ree-TAY', ['mai68', 'positions']),
  sent(1112, 'À chaque grève, un éditorial se demande s’il s’agit d’un nouveau Mai 68.', 'With every strike, an editorial asks whether this is a new May 68.', '/a ʃak ɡʁɛv œ̃.ne.di.tɔ.ʁjal sə də.mɑ̃d sil sa.ʒi dœ̃ nu.vo mɛ swa.sɑ̃t.ɥit/', 'a shak GREV | uh-nay-dee-to-RYAL suh duh-MAHⁿD seel sa-ZHEE duhⁿ noo-VOH meh swa-sahⁿt-WEET', ['mai68', 'usage']),
  phrase(1113, 'les Trente Glorieuses', 'the Thirty Glorious Years (France’s post-war boom)', '/le tʁɑ̃t ɡlɔ.ʁjøz/', 'lay trahⁿt glo-RYEUZ', ['trente']),
  sent(1114, 'L’économiste Jean Fourastié a forgé l’expression en 1979.', 'The economist Jean Fourastié coined the phrase in 1979.', '/le.kɔ.nɔ.mist ʒɑ̃ fu.ʁas.tje a fɔʁ.ʒe lɛk.spʁɛ.sjɔ̃ ɑ̃ mil nœf sɑ̃ swa.sɑ̃t.dis.nœf/', 'lay-ko-no-MEEST zhahⁿ foo-ras-TYAY a for-ZHAY lek-spreh-SYOHⁿ | ahⁿ meel nuhf sahⁿ swa-sahⁿt-deez-NUHF', ['trente', 'fait']),
  sent(1115, 'Elle désigne les années de forte croissance qui ont suivi la guerre.', 'It names the years of strong growth that followed the war.', '/ɛl de.ziɲ le.za.ne də fɔʁt kʁwa.sɑ̃s ki ɔ̃ sɥi.vi la ɡɛʁ/', 'el day-ZEENY lay-za-NAY duh fort krwa-SAHⁿSS | kee ohⁿ swee-VEE la GEHR', ['trente', 'fait']),
  sent(1116, 'Certains y voient un âge d’or ; d’autres rappellent ses mal-logés.', 'Some see a golden age in it; others recall its badly housed.', '/sɛʁ.tɛ̃ i vwa œ̃.naʒ dɔʁ do.tʁə ʁa.pɛl se mal.lɔ.ʒe/', 'sehr-TEHⁿ ee VWA uh-nahzh DOR | doh-truh ra-PEL say mal-lo-ZHAY', ['trente', 'positions']),
  sent(1117, 'Devant « un nouveau Mai 68 », je compare les faits, pas seulement l’image.', 'Faced with "a new May 68", I compare the facts, not just the image.', '/də.vɑ̃ œ̃ nu.vo mɛ swa.sɑ̃t.ɥit ʒə kɔ̃.paʁ le fɛ pa sœl.mɑ̃ li.maʒ/', 'duh-VAHⁿ uhⁿ noo-VOH meh swa-sahⁿt-WEET | zhuh kohⁿ-PAR lay FEH | pa suhl-mahⁿ lee-MAZH', ['regle', 'comparaison'], FC,
    rule('Une grève dure trois jours dans une université. Un titre parle d’« un nouveau Mai 68 ». Que fais-tu ?', 'Je compare les faits : en 1968, une révolte étudiante devenue grève générale, des accords, une dissolution. La comparaison éclaire une ressemblance et en cache d’autres. Je dis lesquelles.')),
  sent(1118, 'La comparaison éclaire une ressemblance, et en cache d’autres.', 'The comparison sheds light on one likeness, and hides others.', '/la kɔ̃.pa.ʁɛ.zɔ̃ e.klɛʁ yn ʁə.sɑ̃.blɑ̃s e ɑ̃ kaʃ do.tʁ/', 'la kohⁿ-pa-reh-ZOHⁿ ay-KLEHR ün ruh-sahⁿ-BLAHⁿSS | ay ahⁿ KASH DOHTR', ['comparaison', 'nuance'], FCVDR),
  phrase(1119, 'un anachronisme', 'an anachronism: judging a past age by the standards of another', '/œ̃.na.na.kʁɔ.nism/', 'uh-na-na-kro-NEESM', ['anachronisme']),
  sent(1120, 'Juger 1968 avec les mots de 2026, c’est risquer l’anachronisme.', 'To judge 1968 with the words of 2026 is to risk anachronism.', '/ʒy.ʒe mil nœf sɑ̃ swa.sɑ̃t.ɥit a.vɛk le mo də dø mil vɛ̃t.sis sɛ ʁis.ke la.na.kʁɔ.nism/', 'zhü-ZHAY meel nuhf sahⁿ swa-sahⁿt-WEET a-vek lay MOH duh deu meel vehⁿt-SEESS | seh rees-KAY la-na-kro-NEESM', ['anachronisme', 'dater']),
];

/* ── ACT 8 · LE QUÉBEC ET L’ACADIE ──────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(1122, 'Je me souviens.', 'I remember. (Québec’s motto)', '/ʒə mə su.vjɛ̃/', 'zhuh muh soo-VYEHⁿ', ['quebec', 'citation']),
  sent(1123, 'La devise est gravée sur l’hôtel du Parlement depuis 1883.', 'The motto has been carved on the Parliament building since 1883.', '/la də.viz ɛ ɡʁa.ve syʁ lo.tɛl dy paʁ.lə.mɑ̃ də.pɥi mil ɥi sɑ̃ ka.tʁə.vɛ̃.tʁwa/', 'la duh-VEEZ eh gra-VAY sür loh-TEL dü par-luh-MAHⁿ | duh-pwee meel wee sahⁿ ka-truh-vehⁿ-TRWA', ['quebec', 'fait']),
  sent(1124, 'Son auteur, l’architecte Eugène-Étienne Taché, n’en a jamais expliqué le sens.', 'Its author, the architect Eugène-Étienne Taché, never explained its meaning.', '/sɔ̃.no.tœʁ laʁ.ʃi.tɛkt ø.ʒɛn.e.tjɛn ta.ʃe nɑ̃.na ʒa.mɛ ɛk.spli.ke lə sɑ̃s/', 'soh-noh-TUHR | lar-shee-TEKT eu-zhenn-ay-TYENN ta-SHAY | nahⁿ-na zha-meh ek-splee-KAY luh SAHⁿSS', ['quebec', 'fait']),
  sent(1125, 'Elle figure sur les plaques d’immatriculation depuis 1978.', 'It has appeared on licence plates since 1978.', '/ɛl fi.ɡyʁ syʁ le plak di.ma.tʁi.ky.la.sjɔ̃ də.pɥi mil nœf sɑ̃ swa.sɑ̃t.diz.ɥit/', 'el fee-GÜR sür lay PLAK dee-ma-tree-kü-la-SYOHⁿ | duh-pwee meel nuhf sahⁿ swa-sahⁿt-deez-WEET', ['quebec', 'fait']),
  sent(1126, 'Selon le lecteur, la devise rappelle une fidélité, une perte ou une fierté.', 'Depending on the reader, the motto recalls a loyalty, a loss or a pride.', '/sə.lɔ̃ lə lɛk.tœʁ la də.viz ʁa.pɛl yn fi.de.li.te yn pɛʁt u yn fjɛʁ.te/', 'suh-LOHⁿ luh lek-TUHR | la duh-VEEZ ra-PEL ün fee-day-lee-TAY | ün PEHRT | oo ün fyehr-TAY', ['quebec', 'lecture']),
  sent(1127, 'En 1759, la bataille des plaines d’Abraham ouvre la voie à la Conquête.', 'In 1759, the battle of the Plains of Abraham opens the way to the Conquest.', '/ɑ̃ mil sɛt sɑ̃ siŋ.kɑ̃t.nœf la ba.taj de plɛn da.bʁa.am uvʁ la vwa a la kɔ̃.kɛt/', 'ahⁿ meel set sahⁿ sehⁿ-kahⁿt-NUHF | la ba-TAÏ day plenn da-bra-AMM | oovr la VWA a la kohⁿ-KET', ['quebec', 'conquete']),
  sent(1128, 'Par le traité de Paris de 1763, la Nouvelle-France devient britannique.', 'Under the Treaty of Paris of 1763, New France becomes British.', '/paʁ lə tʁe.te də pa.ʁi də mil sɛt sɑ̃ swa.sɑ̃t.tʁwa la nu.vɛl.fʁɑ̃s də.vjɛ̃ bʁi.ta.nik/', 'par luh tray-TAY duh pa-REE duh meel set sahⁿ swa-sahⁿt-TRWA | la noo-vel-FRAHⁿSS duh-vyehⁿ bree-ta-NEEK', ['quebec', 'conquete']),
  sent(1129, 'Pour certains historiens, la Conquête est une catastrophe ; d’autres en nuancent la portée.', 'For some historians the Conquest is a catastrophe; others qualify its impact.', '/puʁ sɛʁ.tɛ̃.zis.tɔ.ʁjɛ̃ la kɔ̃.kɛt ɛ.tyn ka.tas.tʁɔf do.tʁə.zɑ̃ nɥɑ̃s la pɔʁ.te/', 'poor sehr-tehⁿ-zees-to-RYEHⁿ | la kohⁿ-KET eh-tün ka-tas-TROF | doh-truh-zahⁿ NWAHⁿSS la por-TAY', ['quebec', 'positions']),
  sent(1130, 'La Révolution tranquille commence avec l’élection de 1960.', 'The Quiet Revolution begins with the election of 1960.', '/la ʁe.vɔ.ly.sjɔ̃ tʁɑ̃.kil kɔ.mɑ̃s a.vɛk le.lɛk.sjɔ̃ də mil nœf sɑ̃ swa.sɑ̃t/', 'la ray-vo-lü-SYOHⁿ trahⁿ-KEEL ko-MAHⁿSS | a-vek lay-lek-SYOHⁿ duh meel nuhf sahⁿ swa-SAHⁿT', ['quebec', 'fait']),
  sent(1131, 'La Charte de la langue française est adoptée le 26 août 1977.', 'The Charter of the French Language is passed on 26 August 1977.', '/la ʃaʁt də la lɑ̃ɡ fʁɑ̃.sɛz ɛ.ta.dɔp.te lə vɛ̃t.si.zut mil nœf sɑ̃ swa.sɑ̃t.di.sɛt/', 'la SHART duh la lahⁿg frahⁿ-SEZ | eh-ta-dop-TAY luh vehⁿt-see-ZOOT meel nuhf sahⁿ swa-sahⁿt-dee-SET', ['quebec', 'fait']),
  sent(1132, 'Dire « la loi 101 », c’est convoquer tout un débat sur la langue.', 'To say "Bill 101" is to summon a whole debate about language.', '/diʁ la lwa sɑ̃.te.œ̃ sɛ kɔ̃.vɔ.ke tu.tœ̃ de.ba syʁ la lɑ̃ɡ/', 'DEER la lwa sahⁿ-tay-UHⁿ | seh kohⁿ-vo-KAY too-tuhⁿ day-BA sür la LAHⁿG', ['quebec', 'invoquer']),
  sent(1133, 'En 1995, le non l’emporte avec 50,58 % des voix.', 'In 1995, the No side wins with 50.58% of the vote.', '/ɑ̃ mil nœf sɑ̃ ka.tʁə.vɛ̃.kɛ̃z lə nɔ̃ lɑ̃.pɔʁt a.vɛk sɛ̃.kɑ̃t viʁ.ɡyl sɛ̃.kɑ̃t.ɥi puʁ sɑ̃ de vwa/', 'ahⁿ meel nuhf sahⁿ ka-truh-vehⁿ-KEHⁿZ | luh NOHⁿ lahⁿ-PORT | a-vek sehⁿ-KAHⁿT veer-GÜL sehⁿ-kahⁿt-WEE poor SAHⁿ day VWA', ['quebec', 'fait']),
  sent(1134, 'En 1980, le non avait obtenu 59,56 % des voix.', 'In 1980, the No side had won 59.56% of the vote.', '/ɑ̃ mil nœf sɑ̃ ka.tʁə.vɛ̃ lə nɔ̃ a.vɛ.tɔp.tə.ny sɛ̃.kɑ̃t.nœf viʁ.ɡyl sɛ̃.kɑ̃t.sis puʁ sɑ̃ de vwa/', 'ahⁿ meel nuhf sahⁿ ka-truh-VEHⁿ | luh NOHⁿ a-veh-top-tuh-NÜ | sehⁿ-kahⁿt-NUHF veer-GÜL sehⁿ-kahⁿt-SEESS poor SAHⁿ day VWA', ['quebec', 'fait']),
  sent(1135, 'En 1755 commence la déportation des Acadiens.', 'In 1755, the deportation of the Acadians begins.', '/ɑ̃ mil sɛt sɑ̃ siŋ.kɑ̃t.sɛ̃k kɔ.mɑ̃s la de.pɔʁ.ta.sjɔ̃ de.za.ka.djɛ̃/', 'ahⁿ meel set sahⁿ sehⁿ-kahⁿt-SEHⁿK | ko-MAHⁿSS la day-por-ta-SYOHⁿ day-za-ka-DYEHⁿ', ['acadie', 'fait']),
  sent(1136, 'Plus de 10 000 Acadiens seront exilés.', 'More than 10,000 Acadians will be exiled.', '/ply də di mil.a.ka.djɛ̃ sə.ʁɔ̃.tɛɡ.zi.le/', 'plü duh dee MEEL a-ka-DYEHⁿ | suh-rohⁿ-teg-zee-LAY', ['acadie', 'fait']),
  sent(1137, 'En 2003, une proclamation royale reconnaît les torts causés aux Acadiens.', 'In 2003, a royal proclamation acknowledges the wrongs done to the Acadians.', '/ɑ̃ dø mil tʁwa yn pʁɔ.kla.ma.sjɔ̃ ʁwa.jal ʁə.kɔ.nɛ le tɔʁ ko.ze o.za.ka.djɛ̃/', 'ahⁿ deu meel TRWA | ün pro-kla-ma-SYOHⁿ rwa-YAL ruh-ko-NEH lay TOR koh-ZAY oh-za-ka-DYEHⁿ', ['acadie', 'fait']),
  sent(1138, 'Le 28 juillet est la Journée de commémoration du Grand Dérangement.', '28 July is the Day of Commemoration of the Great Upheaval.', '/lə vɛ̃t.ɥit ʒɥi.jɛ ɛ la ʒuʁ.ne də kɔ.me.mɔ.ʁa.sjɔ̃ dy ɡʁɑ̃ de.ʁɑ̃ʒ.mɑ̃/', 'luh vehⁿt-WEET zhwee-YEH | eh la zhoor-NAY duh ko-may-mo-ra-SYOHⁿ dü grahⁿ day-rahⁿzh-MAHⁿ', ['acadie', 'fait']),
  sent(1139, 'Une devise sans explication laisse chacun y lire son histoire.', 'A motto with no explanation leaves everyone free to read their own history into it.', '/yn də.viz sɑ̃.zɛk.spli.ka.sjɔ̃ lɛs ʃa.kœ̃ i liʁ sɔ̃.nis.twaʁ/', 'ün duh-VEEZ sahⁿ-zek-splee-ka-SYOHⁿ | less sha-KUHⁿ ee LEER soh-nees-TWAR', ['regle', 'lecture'], FC,
    rule('Un député cite « Je me souviens » pour défendre une loi. Que rappelle la devise ?', 'Son auteur ne l’a jamais expliquée : selon le lecteur, elle rappelle une fidélité, une perte ou une fierté. Je dis quelle lecture le député choisit, sans dire si elle est la bonne.')),
];

/* ── ACT 9 · LA BELGIQUE ────────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(1142, 'Le 25 août 1830, un opéra met le feu aux poudres à Bruxelles.', 'On 25 August 1830, an opera lights the powder keg in Brussels.', '/lə vɛ̃t.sɛ̃k ut mil ɥi sɑ̃ tʁɑ̃t œ̃.nɔ.pe.ʁa mɛ lə fø o pudʁ a bʁy.sɛl/', 'luh vehⁿt-sehⁿk OOT meel wee sahⁿ TRAHⁿT | uh-no-pay-RA meh luh FEU oh POODR a brü-SEL', ['belgique', 'fait']),
  sent(1143, 'Le 21 juillet 1831, Léopold Ier prête serment : c’est la fête nationale.', 'On 21 July 1831, Leopold I takes the oath: it is the national day.', '/lə vɛ̃.te.œ̃ ʒɥi.jɛ mil ɥi sɑ̃ tʁɑ̃t.e.œ̃ le.ɔ.pɔld pʁə.mje pʁɛt sɛʁ.mɑ̃ sɛ la fɛt na.sjɔ.nal/', 'luh vehⁿ-tay-UHⁿ zhwee-YEH meel wee sahⁿ trahⁿt-ay-UHⁿ | lay-o-POLD pruh-MYAY pret sehr-MAHⁿ | seh la FET na-syo-NAL', ['belgique', 'fait']),
  sent(1144, 'De 1885 à 1908, le Congo est la possession personnelle de Léopold II.', 'From 1885 to 1908, the Congo is the personal possession of Leopold II.', '/də mil ɥi sɑ̃ ka.tʁə.vɛ̃.sɛ̃k a mil nœf sɑ̃ ɥit lə kɔ̃.ɡo ɛ la pɔ.sɛ.sjɔ̃ pɛʁ.sɔ.nɛl də le.ɔ.pɔld dø/', 'duh meel wee sahⁿ ka-truh-vehⁿ-SEHⁿK a meel nuhf sahⁿ WEET | luh kohⁿ-GOH eh la po-seh-SYOHⁿ pehr-so-NEL duh lay-o-POLD DEU', ['belgique', 'congo']),
  sent(1145, 'Le Congo devient indépendant le 30 juin 1960.', 'The Congo becomes independent on 30 June 1960.', '/lə kɔ̃.ɡo də.vjɛ̃.tɛ̃.de.pɑ̃.dɑ̃ lə tʁɑ̃t ʒɥɛ̃ mil nœf sɑ̃ swa.sɑ̃t/', 'luh kohⁿ-GOH duh-vyehⁿ-tehⁿ-day-pahⁿ-DAHⁿ | luh trahⁿt ZHWEHⁿ meel nuhf sahⁿ swa-SAHⁿT', ['belgique', 'congo']),
  sent(1146, 'Les statues de Léopold II divisent : patrimoine pour les uns, blessure pour les autres.', 'The statues of Leopold II divide opinion: heritage for some, a wound for others.', '/le sta.ty də le.ɔ.pɔld dø di.viz pa.tʁi.mwan puʁ le.zœ̃ blɛ.syʁ puʁ le.zotʁ/', 'lay sta-TÜ duh lay-o-POLD DEU dee-VEEZ | pa-tree-MWANN poor lay-ZUHⁿ | bleh-SÜR poor lay-ZOHTR', ['belgique', 'positions']),
  sent(1147, 'Une commission parlementaire sur le passé colonial s’est achevée sans accord en 2022.', 'A parliamentary commission on the colonial past ended without agreement in 2022.', '/yn kɔ.mi.sjɔ̃ paʁ.lə.mɑ̃.tɛʁ syʁ lə pa.se kɔ.lɔ.njal sɛ.taʃ.ve sɑ̃.za.kɔʁ ɑ̃ dø mil vɛ̃t.dø/', 'ün ko-mee-SYOHⁿ par-luh-mahⁿ-TEHR sür luh pa-SAY ko-lo-NYAL | seh-tash-VAY sahⁿ-za-KOR | ahⁿ deu meel vehⁿt-DEU', ['belgique', 'congo']),
  sent(1148, 'La Belgique est un État fédéral qui se compose des communautés et des régions.', 'Belgium is a federal state made up of communities and regions.', '/la bɛl.ʒik ɛ.tœ̃.ne.ta fe.de.ʁal ki sə kɔ̃.poz de kɔ.my.no.te e de ʁe.ʒjɔ̃/', 'la bel-ZHEEK eh-tuh-nay-TA fay-day-RAL | kee suh kohⁿ-POHZ day ko-mü-noh-TAY ay day ray-ZHYOHⁿ', ['belgique', 'citation']),
  phrase(1149, 'un compromis à la belge', 'a Belgian-style compromise: a long-negotiated deal where everyone gives ground', '/œ̃ kɔ̃.pʁɔ.mi a la bɛlʒ/', 'uhⁿ kohⁿ-pro-MEE a la BELZH', ['belgique', 'usage']),
  sent(1150, 'Dans la presse, un compromis à la belge est un accord où chacun cède un peu.', 'In the press, a Belgian-style compromise is a deal in which each side gives a little.', '/dɑ̃ la pʁɛs œ̃ kɔ̃.pʁɔ.mi a la bɛlʒ ɛ.tœ̃.na.kɔʁ u ʃa.kœ̃ sɛd œ̃ pø/', 'dahⁿ la PRESS | uhⁿ kohⁿ-pro-MEE a la BELZH eh-tuh-na-KOR | oo sha-KUHⁿ SED uhⁿ PEU', ['belgique', 'usage']),
  sent(1151, 'Le 21 juillet est une date de serment, pas de bataille.', 'The 21st of July is a date of an oath, not of a battle.', '/lə vɛ̃.te.œ̃ ʒɥi.jɛ ɛ.tyn dat də sɛʁ.mɑ̃ pa d(ə) ba.taj/', 'luh vehⁿ-tay-UHⁿ zhwee-YEH eh-tün DAT duh sehr-MAHⁿ | pa duh ba-TAÏ', ['belgique', 'nuance']),
  sent(1152, 'La même statue n’a pas le même sens pour tous les passants.', 'The same statue does not mean the same thing to every passer-by.', '/la mɛm sta.ty na pa lə mɛm sɑ̃s puʁ tu le pa.sɑ̃/', 'la mem sta-TÜ na pa luh mem SAHⁿSS | poor too lay pa-SAHⁿ', ['regle', 'lecture'], FC,
    rule('Un article sur une statue de Léopold II dit « notre histoire ». Un autre dit « notre blessure ». Qui a raison ?', 'Je ne tranche pas. Je déplie la référence (le Congo, possession personnelle du roi de 1885 à 1908, puis colonie jusqu’en 1960) et je rapporte les deux lectures, avec qui les porte.')),
];

/* ── ACT 10 · LA SUISSE ─────────────────────────────────────────────────── */

export const ACT10_ROWS: Row[] = [
  sent(1155, 'Le Pacte fédéral est daté du début du mois d’août 1291.', 'The Federal Charter is dated to the beginning of August 1291.', '/lə pakt fe.de.ʁal ɛ da.te dy de.by dy mwa dut mil dø sɑ̃ ka.tʁə.vɛ̃.ɔ̃z/', 'luh PAKT fay-day-RAL eh da-TAY dü day-BÜ dü MWA DOOT | meel deu sahⁿ ka-truh-vehⁿ-OHⁿZ', ['suisse', 'fait']),
  sent(1156, 'Uri, Schwytz et Unterwald s’y promettent assistance.', 'Uri, Schwyz and Unterwalden promise each other help in it.', '/u.ʁi ʃvits e un.tɛʁ.vald si pʁɔ.mɛt a.sis.tɑ̃s/', 'oo-REE | SHVEETS | ay oon-tehr-VALD | see pro-MET a-sees-TAHⁿSS', ['suisse', 'fait']),
  sent(1157, 'Le 1er août est fêté depuis 1891.', 'The 1st of August has been celebrated since 1891.', '/lə pʁə.mje ut ɛ fe.te də.pɥi mil ɥi sɑ̃ ka.tʁə.vɛ̃.ɔ̃z/', 'luh pruh-myay OOT eh feh-TAY | duh-pwee meel wee sahⁿ ka-truh-vehⁿ-OHⁿZ', ['suisse', 'fait']),
  sent(1158, 'Guillaume Tell est un héros de légende.', 'William Tell is a legendary hero.', '/ɡi.jom tɛl ɛ.tœ̃ e.ʁo də le.ʒɑ̃d/', 'gee-YOHM TEL eh-tuhⁿ ay-ROH duh lay-ZHAHⁿD', ['suisse', 'legende']),
  sent(1159, 'Les historiens tiennent le tir sur la pomme pour une légende.', 'Historians regard the apple shot as a legend.', '/le.zis.tɔ.ʁjɛ̃ tjɛn lə tiʁ syʁ la pɔm puʁ yn le.ʒɑ̃d/', 'lay-zees-to-RYEHⁿ TYENN luh TEER sür la POMM | poor ün lay-ZHAHⁿD', ['suisse', 'legende']),
  sent(1160, 'En 1815, les grandes puissances garantissent la neutralité de la Suisse.', 'In 1815, the great powers guarantee Switzerland’s neutrality.', '/ɑ̃ mil ɥi sɑ̃ kɛ̃z le ɡʁɑ̃d pɥi.sɑ̃s ɡa.ʁɑ̃.tis la nø.tʁa.li.te də la sɥis/', 'ahⁿ meel wee sahⁿ KEHⁿZ | lay grahⁿd pwee-SAHⁿSS ga-rahⁿ-TEESS la neu-tra-lee-TAY duh la SWEESS', ['suisse', 'fait']),
  sent(1161, 'L’État fédéral suisse naît en 1848.', 'The Swiss federal state is born in 1848.', '/le.ta fe.de.ʁal sɥis nɛ ɑ̃ mil ɥi sɑ̃ ka.ʁɑ̃t.ɥit/', 'lay-TA fay-day-RAL SWEESS | neh ahⁿ meel wee sahⁿ ka-rahⁿt-WEET', ['suisse', 'fait']),
  sent(1162, 'Les Suissesses votent au niveau fédéral depuis 1971.', 'Swiss women have voted at federal level since 1971.', '/le sɥi.sɛs vɔt o ni.vo fe.de.ʁal də.pɥi mil nœf sɑ̃ swa.sɑ̃t.œ̃z/', 'lay swee-SESS VOT oh nee-VOH fay-day-RAL | duh-pwee meel nuhf sahⁿ swa-sahⁿt-ONZ', ['suisse', 'fait']),
  sent(1163, 'En 1990, le Tribunal fédéral impose le vote des femmes en Appenzell Rhodes-Intérieures.', 'In 1990, the Federal Supreme Court imposes women’s suffrage in Appenzell Innerrhoden.', '/ɑ̃ mil nœf sɑ̃ ka.tʁə.vɛ̃.dis lə tʁi.by.nal fe.de.ʁal ɛ̃.poz lə vɔt de fam ɑ̃.na.pɛn.zɛl ʁɔd.ɛ̃.te.ʁjœʁ/', 'ahⁿ meel nuhf sahⁿ ka-truh-vehⁿ-DEESS | luh tree-bü-NAL fay-day-RAL ehⁿ-POHZ luh VOT day FAMM | ahⁿ-na-penn-ZEL rod-ehⁿ-tay-RYUHR', ['suisse', 'fait']),
  phrase(1164, 'le Röstigraben', 'the Röstigraben: the divide between German- and French-speaking Switzerland', '/lə ʁøs.ti.ɡʁa.bən/', 'luh reus-tee-GRA-benn', ['suisse', 'usage']),
  sent(1165, 'Après chaque votation, la presse cherche le Röstigraben.', 'After every popular vote, the press looks for the Röstigraben.', '/a.pʁɛ ʃak vɔ.ta.sjɔ̃ la pʁɛs ʃɛʁʃ lə ʁøs.ti.ɡʁa.bən/', 'a-preh shak vo-ta-SYOHⁿ | la PRESS SHEHRSH luh reus-tee-GRA-benn', ['suisse', 'usage']),
  sent(1166, 'Je présente Tell comme une légende, et le pacte comme un document.', 'I present Tell as a legend, and the charter as a document.', '/ʒə pʁe.zɑ̃t tɛl kɔm yn le.ʒɑ̃d e lə pakt kɔ.mœ̃ dɔ.ky.mɑ̃/', 'zhuh pray-ZAHⁿT TEL komm ün lay-ZHAHⁿD | ay luh PAKT ko-muhⁿ do-kü-MAHⁿ', ['legende', 'methode'], FCVDR),
  sent(1167, 'Légende ou fait : je dis lequel avant de citer.', 'Legend or fact: I say which before I quote.', '/le.ʒɑ̃d u fɛ ʒə di lə.kɛl a.vɑ̃ d(ə) si.te/', 'lay-ZHAHⁿD oo FEH | zhuh dee luh-KEL a-vahⁿ duh see-TAY', ['regle', 'legende'], FC,
    rule('Un discours du 1er août évoque Guillaume Tell et le serment du Grütli comme des faits. Que dis-tu ?', 'Je distingue : le Pacte fédéral de 1291 est un document ; Tell et le serment du Grütli sont des légendes, que les historiens ne tiennent pas pour des faits. Une légende peut fonder une identité sans être un fait.')),
  sent(1168, 'Une légende peut fonder une identité sans être un fait.', 'A legend can found an identity without being a fact.', '/yn le.ʒɑ̃d pø fɔ̃.de yn i.dɑ̃.ti.te sɑ̃.zɛtʁ œ̃ fɛ/', 'ün lay-ZHAHⁿD peu fohⁿ-DAY ün ee-dahⁿ-tee-TAY | sahⁿ-zetr uhⁿ FEH', ['legende', 'nuance']),
];

/* ── ACT 11 · L’AFRIQUE FRANCOPHONE ─────────────────────────────────────── */

export const ACT11_ROWS: Row[] = [
  phrase(1172, 'les indépendances de 1960', 'the independences of 1960', '/le.zɛ̃.de.pɑ̃.dɑ̃s də mil nœf sɑ̃ swa.sɑ̃t/', 'lay-zehⁿ-day-pahⁿ-DAHⁿSS duh meel nuhf sahⁿ swa-SAHⁿT', ['afrique', '1960']),
  sent(1173, 'En 1960, dix-sept pays d’Afrique accèdent à l’indépendance.', 'In 1960, seventeen African countries gain independence.', '/ɑ̃ mil nœf sɑ̃ swa.sɑ̃t di.sɛt pe.i da.fʁik ak.sɛd a lɛ̃.de.pɑ̃.dɑ̃s/', 'ahⁿ meel nuhf sahⁿ swa-SAHⁿT | dee-SET pay-EE da-FREEK ak-SED a lehⁿ-day-pahⁿ-DAHⁿSS', ['afrique', '1960']),
  sent(1174, 'Quatorze d’entre eux étaient sous administration française.', 'Fourteen of them were under French administration.', '/ka.tɔʁz dɑ̃.tʁø e.tɛ su.zad.mi.nis.tʁa.sjɔ̃ fʁɑ̃.sɛz/', 'ka-TORZ dahⁿ-TREU ay-TEH | soo-zad-mee-nees-tra-SYOHⁿ frahⁿ-SEZ', ['afrique', '1960']),
  sent(1175, 'Le Sénégal fête son indépendance le 4 avril.', 'Senegal celebrates its independence on 4 April.', '/lə se.ne.ɡal fɛt sɔ̃.nɛ̃.de.pɑ̃.dɑ̃s lə katʁ a.vʁil/', 'luh say-nay-GAL FET soh-nehⁿ-day-pahⁿ-DAHⁿSS | luh katr a-VREEL', ['afrique', 'fait']),
  sent(1176, 'Léopold Sédar Senghor le préside de 1960 à 1980.', 'Léopold Sédar Senghor is its president from 1960 to 1980.', '/le.ɔ.pɔld se.daʁ sɛ̃.ɡɔʁ lə pʁe.zid də mil nœf sɑ̃ swa.sɑ̃t a mil nœf sɑ̃ ka.tʁə.vɛ̃/', 'lay-o-POLD say-DAR sehⁿ-GOR luh pray-ZEED | duh meel nuhf sahⁿ swa-SAHⁿT a meel nuhf sahⁿ ka-truh-VEHⁿ', ['afrique', 'fait']),
  phrase(1177, 'la négritude', 'négritude: the literary and political movement that reclaimed Black identity', '/la ne.ɡʁi.tyd/', 'la nay-gree-TÜD', ['afrique', 'negritude']),
  sent(1178, 'Le mot négritude naît dans les années 1930, chez des étudiants noirs à Paris.', 'The word négritude is born in the 1930s, among Black students in Paris.', '/lə mo ne.ɡʁi.tyd nɛ dɑ̃ le.za.ne mil nœf sɑ̃ tʁɑ̃t ʃe de.ze.ty.djɑ̃ nwaʁ a pa.ʁi/', 'luh MOH nay-gree-TÜD NEH | dahⁿ lay-za-NAY meel nuhf sahⁿ TRAHⁿT | shay day-zay-tü-DYAHⁿ NWAR a pa-REE', ['afrique', 'negritude']),
  sent(1179, 'Césaire, Senghor et Damas retournent un mot méprisant en mot de fierté.', 'Césaire, Senghor and Damas turn a contemptuous word into a word of pride.', '/se.zɛʁ sɛ̃.ɡɔʁ e da.ma ʁə.tuʁn œ̃ mo me.pʁi.zɑ̃ ɑ̃ mo də fjɛʁ.te/', 'say-ZEHR | sehⁿ-GOR | ay da-MA ruh-TOORN uhⁿ MOH may-pree-ZAHⁿ | ahⁿ MOH duh fyehr-TAY', ['afrique', 'negritude']),
  sent(1180, 'En 1955, Houphouët-Boigny parle de « France-Afrique » pour vanter une coopération étroite.', 'In 1955, Houphouët-Boigny speaks of "France-Afrique" to praise close cooperation.', '/ɑ̃ mil nœf sɑ̃ siŋ.kɑ̃t.sɛ̃k u.fwɛ.bwa.ɲi paʁl də fʁɑ̃s.a.fʁik puʁ vɑ̃.te yn kɔ.ɔ.pe.ʁa.sjɔ̃ e.tʁwat/', 'ahⁿ meel nuhf sahⁿ sehⁿ-kahⁿt-SEHⁿK | oo-fweh-bwa-NYEE parl duh frahⁿss-a-FREEK | poor vahⁿ-TAY ün ko-o-pay-ra-SYOHⁿ ay-TRWAT', ['afrique', 'francafrique']),
  sent(1181, 'En 1998, François-Xavier Verschave en fait « la Françafrique », un réseau à dénoncer.', 'In 1998, François-Xavier Verschave turns it into "la Françafrique", a network to denounce.', '/ɑ̃ mil nœf sɑ̃ ka.tʁə.vɛ̃.diz.ɥit fʁɑ̃.swa.ɡza.vje vɛʁ.ʃav ɑ̃ fɛ la fʁɑ̃.sa.fʁik œ̃ ʁe.zo a de.nɔ̃.se/', 'ahⁿ meel nuhf sahⁿ ka-truh-vehⁿ-deez-WEET | frahⁿ-swa-gza-VYAY vehr-SHAV ahⁿ FEH la frahⁿ-sa-FREEK | uhⁿ ray-ZOH a day-nohⁿ-SAY', ['afrique', 'francafrique']),
  sent(1182, 'Le même mot sert à vanter un lien et à dénoncer une emprise.', 'The same word serves to praise a bond and to denounce a hold.', '/lə mɛm mo sɛʁ a vɑ̃.te œ̃ ljɛ̃ e a de.nɔ̃.se y.nɑ̃.pʁiz/', 'luh mem MOH SEHR a vahⁿ-TAY uhⁿ LYEHⁿ | ay a day-nohⁿ-SAY ü-nahⁿ-PREEZ', ['afrique', 'francafrique'], FCVDR),
  sent(1183, 'Je nomme le pays et la date, pas seulement « l’Afrique ».', 'I name the country and the date, not just "Africa".', '/ʒə nɔm lə pe.i e la dat pa sœl.mɑ̃ la.fʁik/', 'zhuh NOMM luh pay-EE ay la DAT | pa suhl-mahⁿ la-FREEK', ['regle', 'methode'], FC,
    rule('Un article écrit : « L’Afrique a fêté ses indépendances en 1960. » Que corriges-tu ?', 'Je nomme les pays et les dates : dix-sept pays d’Afrique en 1960, dont quatorze sous administration française ; le Sénégal fête la sienne le 4 avril. L’Afrique n’est pas un pays.')),
  sent(1184, 'Retourner un mot, c’est en changer le sens sans en changer la forme.', 'To turn a word around is to change its meaning without changing its form.', '/ʁə.tuʁ.ne œ̃ mo sɛ.tɑ̃ ʃɑ̃.ʒe lə sɑ̃s sɑ̃.zɑ̃ ʃɑ̃.ʒe la fɔʁm/', 'ruh-toor-NAY uhⁿ MOH | seh-tahⁿ shahⁿ-ZHAY luh SAHⁿSS | sahⁿ-zahⁿ shahⁿ-ZHAY la FORM', ['negritude', 'nommer']),
];

/* ── ACT 12 · TON EXPLICATION ───────────────────────────────────────────── */

export const ACT12_ROWS: Row[] = [
  sent(1188, 'L’auteur compare la séance du conseil à la nuit du 4 août 1789.', 'The writer compares the council meeting to the night of 4 August 1789.', '/lo.tœʁ kɔ̃.paʁ la se.ɑ̃s dy kɔ̃.sɛj a la nɥi dy ka.tʁut mil sɛt sɑ̃ ka.tʁə.vɛ̃.nœf/', 'loh-TUHR kohⁿ-PAR la say-AHⁿSS dü kohⁿ-SEY | a la NWEE dü ka-TROOT meel set sahⁿ ka-truh-vehⁿ-NUHF', ['explication']),
  sent(1189, 'Cette nuit-là, les députés abolissent les privilèges.', 'That night, the deputies abolish privileges.', '/sɛt nɥi.la le de.py.te a.bɔ.lis le pʁi.vi.lɛʒ/', 'set nwee-LA | lay day-pü-TAY a-bo-LEESS lay pree-vee-LEZH', ['explication', 'privileges']),
  sent(1190, 'La référence suggère une rupture généreuse et soudaine.', 'The reference suggests a generous and sudden break.', '/la ʁe.fe.ʁɑ̃s syɡ.ʒɛʁ yn ʁyp.tyʁ ʒe.ne.ʁøz e su.dɛn/', 'la ray-fay-RAHⁿSS süg-ZHEHR ün rüp-TÜR zhay-nay-REUZ ay soo-DENN', ['explication', 'invoquer']),
  sent(1191, 'Le rapprochement a ses limites : il s’agit de places de parking, pas de droits féodaux.', 'The comparison has its limits: it is about parking spaces, not feudal rights.', '/lə ʁa.pʁɔʃ.mɑ̃ a se li.mit il sa.ʒi də plas də paʁ.kiŋ pa d(ə) dʁwa fe.ɔ.do/', 'luh ra-prosh-MAHⁿ a say lee-MEET | eel sa-ZHEE duh PLASS duh par-KEENG | pa duh DRWA fay-o-DOH', ['explication', 'nuance']),
  sent(1192, 'D’autres lecteurs y verront de l’ironie.', 'Other readers will see irony in it.', '/do.tʁə lɛk.tœʁ i vɛ.ʁɔ̃ d(ə) li.ʁɔ.ni/', 'doh-truh lek-TUHR ee veh-ROHⁿ duh lee-ro-NEE', ['explication', 'lecture']),
  sent(1193, 'Sans trancher, je montre ce que la référence apporte au texte.', 'Without taking sides, I show what the reference brings to the text.', '/sɑ̃ tʁɑ̃.ʃe ʒə mɔ̃tʁ sə kə la ʁe.fe.ʁɑ̃s a.pɔʁt o tɛkst/', 'sahⁿ trahⁿ-SHAY | zhuh MOHⁿTR suh kuh la ray-fay-RAHⁿSS a-PORT oh TEKST', ['explication', 'neutre'], FCVDR),
  sent(1194, 'En somme, la référence grandit l’événement qu’elle commente.', 'In short, the reference makes the event it comments on look bigger.', '/ɑ̃ sɔm la ʁe.fe.ʁɑ̃s ɡʁɑ̃.di le.vɛn.mɑ̃ kɛl kɔ.mɑ̃t/', 'ahⁿ SOMM | la ray-fay-RAHⁿSS grahⁿ-DEE lay-venn-MAHⁿ kel ko-MAHⁿT', ['explication']),
  sent(1195, 'Je date, je déplie, j’attribue, je nuance.', 'I date, I unfold, I attribute, I qualify.', '/ʒə dat ʒə de.pli ʒa.tʁi.by ʒə nɥɑ̃s/', 'zhuh DAT | zhuh day-PLEE | zha-tree-BÜ | zhuh NWAHⁿSS', ['explication', 'methode'], FCVDR),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE ROW INDEX
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS,
  ACT7_ROWS, ACT8_ROWS, ACT9_ROWS, ACT10_ROWS, ACT11_ROWS, ACT12_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

/** Rows a dictation mission can use, by act. */
export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE ANCHOR TEXTS. Every one is « texte original écrit pour la
 *  leçon ». Outlets, people and places invented (§A.6); every real-world
 *  fact is in §A.7.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Act 1: an editorial in a Montréal neighbourhood paper. */
export const TRAMWAY_TEXT =
  'L’Écho du Val-Fleuri, éditorial. Le Waterloo du tramway. Il aura fallu huit ans d’études, trois maquettes et deux consultations publiques pour en arriver là : mardi soir, le conseil a renoncé au tramway du Val-Fleuri. Officiellement, le projet est « mis en pause ». Personne n’est dupe. Les entreprises retenues se sont retirées une à une, la facture a doublé, et le dernier rapport, publié en catimini un vendredi d’été, ne recommande plus rien. Ce n’est pas un recul, c’est une déroute. Les commerçants de la rue des Érables, qui ont enduré deux ans de forages préparatoires, découvrent qu’ils ont subi les travaux sans jamais voir passer une rame. Les usagers de la ligne 55, eux, continueront d’attendre sous la neige un autobus bondé, en relisant les belles brochures de 2019. Nous avions défendu ce tramway dans ces colonnes, et nous ne le regrettons pas. Mais il faut nommer les choses : cette ville a perdu sa bataille la plus importante depuis vingt ans, et elle l’a perdue faute d’avoir su choisir son terrain. On nous dit qu’un projet plus modeste, un autobus rapide, verra le jour d’ici cinq ans. Peut-être. On nous disait la même chose du tramway en 2019. Aux élus qui parlent déjà de « nouveau départ », rappelons simplement que, le soir de Waterloo, Napoléon ne parlait pas de pause. Il savait. Bernard Fortin, pour la rédaction.';

/** Act 2: a magazine explainer on why everyone quotes 1789. */
export const REVOLUTION_TEXT =
  'Le Mensuel des Idées. Pourquoi tout le monde cite 1789. Il suffit d’une date pour faire passer un message : quand un syndicat réclame « un nouveau 1789 » ou qu’un patron annonce « la fin de l’Ancien Régime » dans son entreprise, chacun comprend qu’il s’agit d’une rupture, pas d’un ajustement. Encore faut-il savoir ce que l’on convoque. Le 14 juillet 1789, la prise de la Bastille, une forteresse royale servant de prison, devient le symbole de la chute d’un pouvoir arbitraire. Dans la nuit du 4 août, les députés de l’Assemblée abolissent les privilèges. Le 26 août, ils adoptent la Déclaration des droits de l’homme et du citoyen, dont l’article premier proclame : « Les hommes naissent et demeurent libres et égaux en droits. » Ces textes doivent beaucoup aux Lumières, ce mouvement d’idées qui, au XVIIIe siècle, oppose la raison à l’autorité de la tradition. Mais la mémoire de 1789 n’est pas unanime. Pour les uns, la Révolution fonde les droits dont nous jouissons ; pour d’autres, elle est indissociable de la Terreur de 1793-1794. Même la fête nationale ménage les deux lectures : la loi de 1880 qui en fait la fête nationale ne précise pas si elle célèbre la prise de la Bastille ou la fête de la Fédération de 1790, moment de concorde. Reste un piège classique, celui des citations. « Qu’ils mangent de la brioche » ? Rousseau écrit dans ses Confessions : « Enfin je me rappelai le pis-aller d’une grande princesse à qui l’on disait que les paysans n’avaient pas de pain, et qui répondit : Qu’ils mangent de la brioche. » Il ne la nomme pas, et il écrit ces lignes avant que Marie-Antoinette n’arrive en France. Inès Morel.';

/** Act 3: a business newsletter column on a failed merger. */
export const FUSION_TEXT =
  'Lettre Horizon, la chronique de Malik Diop. Une bérézina, vraiment ? Depuis l’échec de la fusion entre Verdal et Hélior, les métaphores pleuvent. Pour un analyste, l’opération restera « le Waterloo de Verdal » ; pour un autre, « une bérézina boursière ». Le directeur général de Verdal, qui avait juré de ne jamais céder aux actionnaires d’Hélior, a fini par signer leurs conditions : « Il est allé à Canossa », ricane un ancien cadre. Et Hélior ? Elle a gagné, certes, mais au prix de deux ans de procédures et d’une dette record : une victoire à la Pyrrhus, selon la presse spécialisée. Chacune de ces formules dit quelque chose, à condition de la déplier. Waterloo, le 18 juin 1815, c’est la dernière défaite de Napoléon : une défaite totale et définitive. La Bérézina, en 1812, c’est une rivière que l’armée française franchit en pleine retraite de Russie, au prix de pertes terribles ; or les historiens y voient un succès tactique, puisque l’armée échappe à l’encerclement. La langue, elle, n’a retenu que le désastre. Aller à Canossa, c’est refaire le chemin de l’empereur Henri IV qui, en 1077, attendit le pape trois jours dans la neige pour obtenir son pardon : s’humilier devant l’adversaire. Quant à Pyrrhus, il battit les Romains mais y perdit une si grande partie de son armée que sa victoire ressemblait à une défaite. Alors, Verdal a-t-elle vécu son Waterloo ? Pas tout à fait : l’entreprise existe toujours, ses usines tournent, et une nouvelle direction prépare la suite. Une bérézina, peut-être, si l’on garde à l’esprit que l’armée de 1812, elle aussi, avait fini par passer la rivière.';

/** Act 4: a radio column comparing 1905 and Québec's 2019 law. */
export const LAICITE_TEXT =
  'Radio Passerelle, chronique « Des deux côtés de l’Atlantique ». Le même mot, deux histoires. En France, la laïcité a une date : la loi du 9 décembre 1905 concernant la séparation des Églises et de l’État. Son premier article dit : « La République assure la liberté de conscience. » Le deuxième précise : « La République ne reconnaît, ne salarie ni ne subventionne aucun culte. » Détail souvent oublié : en Alsace et en Moselle, alors allemandes, la loi ne s’est pas appliquée, et un régime des cultes antérieur est resté en vigueur. Aujourd’hui, presque tous les débats français invoquent 1905, mais pas de la même façon : les uns en retiennent d’abord la liberté de conscience, d’autres la neutralité stricte de l’espace public. Au Québec, la Loi sur la laïcité de l’État, adoptée en juin 2019, interdit le port de signes religieux à certains employés de l’État en position d’autorité, dont les enseignants des écoles publiques. Le gouvernement a recouru à la disposition de dérogation, qui la soustrait à certains articles des chartes des droits. Pour ses défenseurs, la loi garantit la neutralité de l’État et prolonge la Révolution tranquille, qui avait éloigné l’Église des institutions. Pour ses opposants, elle restreint la liberté de religion de minorités déjà fragiles et ferme certaines carrières à des femmes qui portent le voile. En mars 2026, la Cour suprême du Canada a entendu la contestation. Que retenir ? Que les deux camps se réclament de la laïcité, des deux côtés de l’océan. Quand un texte invoque 1905, la bonne question n’est donc pas « est-il pour ou contre la laïcité ? », mais « laquelle défend-il ? ». Claire Veilleux.';

/** Act 5: a reader's-question column on the 18th of June and Vichy. */
export const JUIN_TEXT =
  'Le Mensuel des Idées, « Vos questions ». Une lectrice nous demande ce que veut dire un élu local qui promet « un appel du 18 juin » contre la fermeture d’une maternité. Le 18 juin 1940, au lendemain de la demande d’armistice, le général de Gaulle parle à la radio de Londres et appelle à poursuivre le combat. Ce soir-là, personne ne l’enregistre : on connaît ce premier appel par des textes, et c’est le discours du 22 juin qui a été conservé. L’expression est restée : lancer un appel du 18 juin, c’est refuser une défaite que d’autres acceptent, quitte à être seul. Mais cette date en appelle une autre. De 1940 à 1944, le régime de Vichy, qui se nomme lui-même « État français », collabore avec l’occupant. Les 16 et 17 juillet 1942, près de 13 000 Juifs sont arrêtés à Paris et en banlieue par la police française lors de la rafle dite du Vél d’Hiv. Comment la France en parle-t-elle ? Deux positions se sont succédé. En août 1944, une ordonnance déclare : « En droit celle-ci n’a pas cessé d’exister », celle-ci étant la République, et annule les actes de Vichy. Dans cette lecture, Vichy n’était pas la République. En juillet 1995, le président Jacques Chirac reconnaît pour la première fois la responsabilité de l’État français dans la persécution et la déportation des Juifs. Le débat ne porte pas sur les faits, établis par les historiens, mais sur la responsabilité. Notre lectrice voulait savoir si l’élu exagère. Ce n’est pas à nous de le dire : en invoquant le 18 juin, il se présente en résistant isolé. À chacun de juger si le rapprochement tient. Sophie Lambert.';

/** Act 6: a summary of a history podcast episode on naming the Algerian war. */
export const ALGERIE_TEXT =
  'Escale Histoire, résumé de l’épisode 41 : « Un nom pour une guerre ». La guerre commence le 1er novembre 1954. Pourtant, pendant des décennies, la France officielle ne parle pas de guerre : on dit « les événements d’Algérie » ou « les opérations de maintien de l’ordre ». Il faut attendre une loi du 18 octobre 1999 pour que l’expression « guerre d’Algérie » entre dans les textes. En Algérie, on parle aussi de « guerre de libération nationale », voire de « révolution ». Chaque nom raconte déjà une histoire : une affaire de police, un conflit entre deux armées, ou la naissance d’une nation. Les accords d’Évian sont signés le 18 mars 1962, et le cessez-le-feu entre en vigueur le lendemain. Après le référendum du 1er juillet, la France reconnaît l’indépendance le 3 juillet ; l’Algérie la fête le 5. Même le calendrier fait débat. En France, deux journées d’hommage coexistent : le 5 décembre, fixé par décret en 2003, et le 19 mars, date du cessez-le-feu, retenue par une loi en 2012. Des associations de harkis et de rapatriés contestent le 19 mars, parce que des violences ont continué après le cessez-le-feu. Plus largement, la colonisation reste un sujet brûlant. En 2005, une loi voulait que les programmes scolaires reconnaissent « le rôle positif de la présence française outre-mer » ; après un vif débat entre historiens et responsables politiques, cette phrase a été retirée au début de 2006. L’épisode se termine sur un conseil de méthode : quand un texte emploie l’un de ces noms, cite-le entre guillemets, dis qui l’emploie, et donne l’autre. Avec l’historienne Nadia Haddad et le documentariste Thomas Renaud.';

/** Act 7: an op-ed on the press habit of seeing « un nouveau Mai 68 ». */
export const MAI68_TEXT =
  'Le Courrier du Léman, tribune. Arrêtons de voir Mai 68 partout. Trois jours de blocage dans une faculté, et les titres fleurissent : « Un nouveau Mai 68 ? » La comparaison flatte les uns et inquiète les autres ; elle informe rarement. Rappelons les faits. En mai 1968, une révolte étudiante partie de Nanterre et de la Sorbonne gagne les usines et devient une grève générale qui paralyse la France. Les accords de Grenelle, négociés à la fin du mois, augmentent le salaire minimum de 35 %. Le 30 mai, le général de Gaulle dissout l’Assemblée nationale, et aux élections de juin les gaullistes l’emportent largement. Ce que la mémoire en a gardé dépend de qui se souvient. Pour les uns, Mai 68 a libéré la parole et les mœurs, ouvert l’université, fait entrer de nouvelles générations dans la vie publique. Pour les autres, il a affaibli l’autorité, à l’école comme dans la famille, et laissé un héritage qu’il faudrait corriger. Cette querelle dure depuis plus d’un demi-siècle. Le même réflexe vaut pour les Trente Glorieuses, expression forgée en 1979 par l’économiste Jean Fourastié pour désigner les années de forte croissance qui ont suivi la guerre. Certains y voient un âge d’or perdu ; d’autres rappellent ses bidonvilles, ses mal-logés et ses usines polluantes. Invoquer l’une ou l’autre de ces périodes, c’est souvent parler du présent plus que du passé. Avant de titrer sur « un nouveau Mai 68 », comparons les faits : une grève générale ? Des accords nationaux ? Une crise politique ? Si la réponse est non, l’image éclaire peut-être une humeur, mais elle cache tout le reste. Aline Reymond, historienne.';

/** Act 8: a Montréal magazine piece on what « Je me souviens » does not say. */
export const SOUVIENS_TEXT =
  'L’Écho du Val-Fleuri, magazine. Ce que « Je me souviens » ne dit pas. Elle est sur toutes les plaques d’immatriculation depuis 1978, et pourtant personne ne sait au juste ce qu’elle veut dire. La devise du Québec est gravée depuis 1883 sur l’hôtel du Parlement, à la demande de l’architecte Eugène-Étienne Taché, qui n’en a jamais expliqué le sens. Se souvenir de quoi ? De la Nouvelle-France, répondent les uns : en 1759, la bataille des plaines d’Abraham ouvre la voie à la Conquête, et par le traité de Paris de 1763 la colonie devient britannique. Pour certains historiens, la Conquête est une catastrophe dont le Québec porte encore la trace ; d’autres en nuancent la portée. D’une fidélité, disent d’autres, ou d’une fierté. Les références se sont ensuite accumulées. La Révolution tranquille, qui commence avec l’élection de 1960, modernise l’État et éloigne l’Église des écoles et des hôpitaux. La Charte de la langue française, adoptée le 26 août 1977, affirme le français comme langue officielle du Québec : dire « la loi 101 », c’est convoquer tout un débat sur la langue. Puis viennent deux référendums sur la souveraineté : en 1980, le non obtient 59,56 % des voix ; en 1995, il l’emporte avec 50,58 %. Et l’Acadie, voisine, a sa propre date. En 1755 commence la déportation des Acadiens : plus de 10 000 seront exilés. En 2003, une proclamation royale reconnaît les torts causés et fait du 28 juillet la Journée de commémoration du Grand Dérangement. Une devise sans explication laisse chacun y lire son histoire. C’est peut-être sa force. Jules Masson.';

/** Act 9: a Brussels column on the 21st of July and its shadows. */
export const BELGIQUE_TEXT =
  'Le Fil de Bruxelles, chronique. Un pays né à l’opéra. Le 25 août 1830, au théâtre de la Monnaie, on joue La Muette de Portici, un opéra où le peuple de Naples se soulève. Le public sort en ébullition, l’émeute gagne la ville, et quelques semaines plus tard l’indépendance est proclamée. Le 21 juillet 1831, Léopold Ier prête serment sur la Constitution : c’est la date de la fête nationale, une date de serment, pas de bataille. Mais l’histoire belge a aussi ses ombres. De 1885 à 1908, le Congo est la possession personnelle du roi Léopold II, avant de devenir une colonie belge jusqu’à son indépendance, le 30 juin 1960. Les violences de cette période sont documentées. Ce qui divise, c’est la manière de s’en souvenir : les statues de Léopold II sont, pour les uns, un patrimoine à expliquer, pour les autres, une blessure à retirer de l’espace public. Une commission parlementaire sur le passé colonial, créée en 2020, s’est achevée en décembre 2022 sans accord sur ses conclusions. Le pays lui-même a changé de forme. Depuis 1993, l’article premier de la Constitution dit : « La Belgique est un État fédéral qui se compose des communautés et des régions. » D’où une expression que la presse étrangère adore : « un compromis à la belge », un accord négocié longuement, où chacun cède un peu et que personne n’applaudit tout à fait. Quand un journaliste l’emploie, est-ce un éloge de la patience ou une pique contre la complication ? Cela dépend de l’article. Élise Kabongo.';

/** Act 10: a Swiss newspaper explainer for the 1st of August. */
export const SUISSE_TEXT =
  'Le Courrier du Léman, dossier du 1er août. Ce que la Suisse fête. Chaque année, les feux du 1er août rappellent le Pacte fédéral, un document daté du début du mois d’août 1291, par lequel Uri, Schwytz et Unterwald se promettent assistance. La date est fêtée depuis 1891. À côté du document, il y a la légende : Guillaume Tell, l’arbalétrier qui aurait tiré sur une pomme posée sur la tête de son fils, et le serment des trois Suisses sur la prairie du Grütli. Ces récits apparaissent dans des chroniques de la fin du XVe siècle ; depuis le XIXe siècle, les historiens les tiennent pour des légendes. Ils n’en disent pas moins ce qu’un pays veut être : une alliance de gens libres contre un pouvoir lointain. D’autres dates comptent davantage pour l’histoire institutionnelle. En 1815, les grandes puissances garantissent la neutralité de la Suisse. En 1848 naît l’État fédéral. Et la démocratie directe a ses lenteurs : les Suissesses votent au niveau fédéral depuis 1971 seulement, et en 1990 il a fallu que le Tribunal fédéral impose le vote des femmes en Appenzell Rhodes-Intérieures. Une autre image revient après chaque votation : le Röstigraben, ce fossé supposé entre Suisse alémanique et Suisse romande, qui doit son nom à une galette de pommes de terre. L’image du fossé apparaît pendant la Première Guerre mondiale, le mot dans les années 1970, et la presse le cherche chaque fois que les deux régions votent différemment. Faut-il en conclure que la Suisse est divisée ? Parfois, oui ; souvent, la carte des votes est plus compliquée. Lucien Garon.';

/** Act 11: a Dakar magazine column on 1960, the négritude and one disputed word. */
export const AFRIQUE_TEXT =
  'Escale Dakar, la chronique d’Awa Ndiaye. Une date, un mot, une querelle. En 1960, dix-sept pays d’Afrique accèdent à l’indépendance, dont quatorze étaient sous administration française. Le Sénégal fête la sienne le 4 avril, et Léopold Sédar Senghor le préside de 1960 à 1980, jusqu’à sa démission. Senghor était aussi poète, et l’un des pères d’un mot : la négritude. Il naît dans les années 1930, à Paris, chez des étudiants noirs venus d’Afrique et des Antilles, autour d’Aimé Césaire, de Senghor et de Léon-Gontran Damas. Ils prennent un mot méprisant et en font un mot de fierté : retourner un mot, c’est en changer le sens sans en changer la forme. Un autre mot a connu le chemin inverse. En 1955, Félix Houphouët-Boigny, futur président de la Côte d’Ivoire, parle de « France-Afrique » pour vanter une coopération étroite avec la France. En 1998, l’essayiste François-Xavier Verschave reprend la formule et en fait « la Françafrique », titre d’un livre qui dénonce des réseaux politiques et financiers opaques. Depuis, le même mot sert à vanter un lien et à dénoncer une emprise. Quand un dirigeant annonce « la fin de la Françafrique », que dit-il ? Qu’un système a existé, sans doute, et qu’il s’en démarque. Ses adversaires lui répondront que les mots ne suffisent pas. Notre rôle, à nous lecteurs, est de savoir d’où vient le mot avant de juger celui qui l’emploie. Et de nommer les pays et les dates, plutôt que de parler de « l’Afrique » comme d’un seul pays.';

/** Act 12, THE TASK TEXT: an editorial using « la nuit du 4 août ». */
export const NUIT_TEXT =
  'La Gazette du Val-d’Orme, éditorial. La nuit du 4 août de Val-d’Orme. Il était presque minuit, jeudi, quand le conseil municipal a fait ce que personne n’attendait. En une seule séance, les élus ont supprimé leurs places de parking réservées devant l’hôtel de ville, renoncé à la voiture de fonction du maire, plafonné leurs frais de repas et ouvert au public la salle de réception du dernier étage, jusqu’ici réservée aux cérémonies officielles. Une nuit du 4 août, en somme. Il faut saluer le geste. Depuis des années, les habitants reprochaient à leurs élus de vivre à part, au-dessus d’une ville qui ferme ses classes et réduit les horaires de sa piscine. Jeudi soir, ces mêmes élus ont renoncé à des avantages que la loi leur permettait de garder. On objectera que l’économie est modeste : quelques dizaines de milliers d’euros par an, à peine de quoi rouvrir la piscine le dimanche. On dira aussi que le calendrier n’est pas innocent, à six mois des élections. Sans doute. Mais en 1789 aussi, les députés de la nuit du 4 août avaient leurs calculs, et l’histoire a retenu le geste. Reste maintenant à transformer l’essai. Une nuit ne fait pas une politique. Si le conseil veut que la comparaison tienne, il lui faudra s’attaquer à ce qui pèse vraiment : l’attribution des logements sociaux, les marchés publics, la transparence des subventions. Faute de quoi, la nuit du 4 août de Val-d’Orme restera ce qu’elle risque d’être : une belle soirée. Marc Duval, rédacteur en chef.';

/** What an explanation of NUIT_TEXT must hold: the rubric and the graders
 *  read from this. */
export const NUIT_KEY = {
  unfold: 'Dans la nuit du 4 août 1789, les députés de l’Assemblée abolissent les privilèges (honorifiques sans compensation, d’autres rachetables).',
  use: 'L’éditorialiste compare la suppression des avantages des élus à l’abolition des privilèges : un renoncement volontaire, soudain, présenté comme une rupture.',
  effect: 'La référence grandit l’événement, salue le geste et, à la fin, sert d’exigence (« si le conseil veut que la comparaison tienne »).',
  limits: 'Des places de parking et des frais de repas ne sont pas des droits féodaux ; l’auteur reconnaît lui-même l’économie modeste et le calendrier électoral.',
  readings: 'On peut lire la référence comme un éloge, comme une pointe d’ironie (la dernière phrase), ou comme un défi lancé aux élus.',
} as const;
