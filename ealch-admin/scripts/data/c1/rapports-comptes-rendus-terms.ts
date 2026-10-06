// c1.11.l1 « Rapports et comptes rendus » — the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER
// BUDGET on a Pixel 6 (labels joined, plus 2 per separator). Labels here run
// 9 to 13 characters; the scratch check asserts every section's row at 37 or
// under, so the two longest labels (« procès-verbal », « l’impersonnel »,
// 13 each) never share a row with a third label over 7 characters.
//
// C1 LANGUAGE RULE: the body is natural, unsimplified French, addressed as
// « tu », then ONE English line starting « EN: ».
//
// A GLOSSARY OF WORKING DOCUMENTS: one reader (le lecteur), the parts of a
// report (le constat, l’analyse, les options, les critères, préconiser, la
// synthèse), the three meeting documents (compte rendu, procès-verbal, le
// relevé) and two habits of the writing (l’impersonnel, le calque).

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './rapports-comptes-rendus-corpus.ts';

export const RAPPORTS_COMPTES_RENDUS_TERMS: Record<string, LessonTerm> = {
  /** The reframe's one idea, every act. */
  lecteur: {
    term: 'le lecteur',
    title: 'Celui qui n’était pas là',
    body: 'Un document de travail est lu par quelqu’un qui n’assistait pas à la réunion ou n’a pas mené l’enquête, et qui doit décider sans toi. Tout se règle sur lui : ce qu’il lit d’abord, ce qu’il peut vérifier, ce qu’il peut sauter. EN: A working document is read by someone who was not there and must decide without you.',
    examples: [
      { itemId: E(1204), note: 'la question à te poser' },
      { itemId: E(1208), note: 'le test du document' },
      { itemId: E(1200), note: 'la lectrice pressée' },
    ],
  },

  /** Act 3. */
  constat: {
    term: 'le constat',
    title: 'Ce qu’on observe, avec sa source',
    body: 'Le constat décrit la situation telle qu’elle est : des faits vérifiables, des chiffres dont tu donnes la source (selon, d’après, il ressort de). Une impression peut y figurer, à condition d’être présentée comme telle. Il ne dit ni pourquoi ni quoi faire. EN: The findings describe the situation with sourced facts; no causes, no proposals.',
    examples: [
      { itemId: E(1227), note: 'un chiffre et sa source' },
      { itemId: E(1225), note: 'il ressort de… que' },
      { itemId: 'fr.b2.strategies-de-comprehension.1654', note: 'le mot, déjà vu au B2' },
    ],
  },

  /** Act 4. */
  analyse: {
    term: 'l’analyse',
    title: 'Du symptôme aux causes',
    body: 'L’analyse explique pourquoi la situation est ce qu’elle est. Elle remonte du symptôme (la salle se vide) aux causes, et elle les classe : une cause principale, puis des facteurs aggravants. Une cause se prouve avec les faits du constat. EN: The analysis works back from the symptom to the causes, and ranks them.',
    examples: [
      { itemId: E(1238), note: 'un symptôme, pas une cause' },
      { itemId: E(1239), note: 'la cause principale' },
      { itemId: E(1240), note: 'un facteur aggravant' },
    ],
  },

  /** Act 5. */
  options: {
    term: 'les options',
    title: 'Les solutions possibles, comparées',
    body: 'Une analyse de cas présente plusieurs options, deux à quatre en général, et les compare toutes sur les mêmes critères. On en écarte certaines, on en retient une, et on dit pourquoi. Une seule option, c’est une décision déguisée. EN: Several options, compared on the same criteria; one is chosen, with reasons.',
    examples: [
      { itemId: E(1255), note: 'combien d’options' },
      { itemId: E(1260), note: 'écarter, et dire pourquoi' },
      { itemId: E(1264), note: 'la moins risquée' },
    ],
  },

  /** Act 5. */
  criteres: {
    term: 'les critères',
    title: 'La grille du choix',
    body: 'Les critères sont les questions que tu poses à chaque option : combien coûte-t-elle, qui en profite, quel risque, quel délai ? Ils sont annoncés avant la comparaison et appliqués à toutes les options, sinon le choix paraît arbitraire. EN: The questions you ask of every option, announced before the comparison.',
    examples: [
      { itemId: E(1259), note: 'quatre critères annoncés' },
      { itemId: E(1258), note: 'au regard de…' },
      { itemId: E(1262), note: 'la règle' },
    ],
  },

  /** Act 6. */
  preconiser: {
    term: 'préconiser',
    title: 'Recommander, dans le registre du rapport',
    body: 'Préconiser, c’est recommander vivement, dans une langue soutenue. Le rapport recommande avec « nous préconisons », « nous recommandons », « il conviendrait de », « il y aurait lieu de » ou « il est recommandé que » suivi du subjonctif. Une bonne recommandation dit qui fait quoi, et pour quand. EN: To recommend, formally; who does what by when.',
    examples: [
      { itemId: E(1268), note: 'le verbe' },
      { itemId: E(1269), note: 'il est recommandé que + subjonctif' },
      { itemId: E(1274), note: 'qui, quoi, quand' },
    ],
  },

  /** Act 7. */
  synthese: {
    term: 'la synthèse',
    title: 'La première page, qui tient seule',
    body: 'La synthèse, ou sommaire de gestion au Québec, ouvre le rapport : le problème, sa cause principale, la recommandation et la décision attendue, en une page au plus. On l’écrit en dernier et on la place en premier. Elle résume, elle n’annonce pas. EN: The executive summary, first: problem, cause, recommendation, decision.',
    examples: [
      { itemId: E(1287), note: 'trois choses' },
      { itemId: E(1286), note: 'écrite en dernier' },
      { itemId: E(1279), note: 'le terme de l’OQLF' },
    ],
  },

  /** Act 8. */
  compterendu: {
    term: 'compte rendu',
    title: 'L’essentiel d’une réunion',
    body: 'Le compte rendu présente l’essentiel des discussions et des décisions d’une réunion. Il est rédigé au présent, avec des verbes qui rapportent (rappeler, souligner, s’inquiéter, proposer), et le secrétaire n’y donne pas son avis. Il est ensuite approuvé par les participants. EN: The essence of a meeting’s discussions and decisions, in the present, without judging.',
    examples: [
      { itemId: E(1290), note: 'ce qu’il contient' },
      { itemId: E(1292), note: 'un verbe qui rapporte' },
      { itemId: E(1299), note: 'pas d’avis' },
    ],
  },

  /** Act 9. */
  procesverbal: {
    term: 'procès-verbal',
    title: 'Le document officiel',
    body: 'Le procès-verbal consigne officiellement ce qui a été discuté et décidé, point par point, dans l’ordre du jour, au présent et à la forme impersonnelle. On l’approuve à la séance suivante. En France, le mot désigne aussi l’acte d’un agent public, et « un PV », souvent, une amende. EN: The official record, tied to the agenda and approved at the next meeting.',
    examples: [
      { itemId: E(1307), note: 'officiel' },
      { itemId: E(1308), note: 'point par point' },
      { itemId: E(1311), note: 'adopter, approuver' },
    ],
  },

  /** Act 10. */
  releve: {
    term: 'le relevé',
    title: 'Le relevé de décisions',
    body: 'Le relevé de décisions ne garde que ce qui a été décidé : chaque décision, son responsable et son échéance. Pas de débat, pas d’opinion. C’est le document le plus court, utile quand le temps manque et qu’on veut surtout savoir qui fait quoi. EN: Only the decisions, each with an owner and a due date.',
    examples: [
      { itemId: E(1332), note: 'ce qu’il garde' },
      { itemId: E(1333), note: 'responsable et échéance' },
      { itemId: E(1331), note: 'une ligne type' },
    ],
  },

  /** Act 11. */
  impersonnel: {
    term: 'l’impersonnel',
    title: 'Une voix qui engage le service',
    body: 'Un rapport parle au nom d’un service, pas d’une personne : « il apparaît que », « on constate », « le présent rapport », et « nous » pour recommander. Les mots restent neutres : ils décrivent sans juger. Tu nuances quand les faits ne suffisent pas. EN: The report speaks for a department: impersonal turns, a « nous », neutral words.',
    examples: [
      { itemId: E(1338), note: 'il apparaît que' },
      { itemId: E(1342), note: 'le nous du rapport' },
      { itemId: E(1344), note: 'neutre ou chargé' },
    ],
  },

  /** Acts 7, 9 and 10. */
  calque: {
    term: 'le calque',
    title: 'Le mot du bureau venu de l’anglais',
    body: 'Les écrits de bureau attirent les mots anglais : deadline, implémenter, les minutes, varia, sommaire exécutif. Ils se comprennent, mais un rapport soigné les remplace : date limite ou échéance, mettre en œuvre, procès-verbal, questions diverses, sommaire de gestion ou synthèse. EN: Office anglicisms, and the French a careful report uses instead.',
    examples: [
      { itemId: E(1329), note: 'trois remplacements' },
      { itemId: E(1320), note: 'les minutes' },
      { itemId: E(1288), note: 'sommaire exécutif' },
    ],
  },
};
