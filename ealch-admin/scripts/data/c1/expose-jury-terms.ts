// c1.09.l1 « L’exposé et le jury » · the lesson glossary. DRAFT.
//
// Defined once, surfaced wherever used: a section names a key in `terms` and
// the renderer draws a tappable chip.
//
// THREE CHIPS PER SECTION AT MOST, and the chip row has a 37-CHARACTER BUDGET
// on a Pixel 6 (labels joined plus 2 per separator). The labels here are 6
// to 11 characters; the scratch check asserts every section’s chips fit in
// 37 and that every term is surfaced by at least one section.
//
// C1 LANGUAGE RULE: the body is unsimplified French, addressed as « tu »,
// then ONE English line starting « EN: ».

import type { LessonTerm } from '../../../../ealch-v2/src/content/schema.ts';
import { E } from './expose-jury-corpus.ts';

export const EXPOSE_JURY_TERMS: Record<string, LessonTerm> = {
  /** The reframe: the one question that runs through everything. */
  fil: {
    term: 'le fil',
    title: 'Le fil conducteur',
    body: 'Le fil, c’est la question que tu as tirée du dossier. La synthèse est choisie pour elle, le plan la porte, et chaque réponse au jury y ramène, même quand tu concèdes un point. EN: The thread is your question; everything, including your answers to the jury, leads back to it.',
    examples: [
      { itemId: E(1202), note: 'le mot' },
      { itemId: E(1272), note: 'le fil, repris avant la conclusion' },
      { itemId: E(1345), note: 'le fil, tenu jusqu’à la fin de l’entretien' },
    ],
  },

  /** The genre. */
  expose: {
    term: 'l’exposé',
    title: 'Un genre qui se parle',
    body: 'Un exposé n’est pas un écrit lu à voix haute. Le jury ne peut pas revenir en arrière : tu annonces où tu vas, tu répètes l’essentiel, tu t’adresses à lui, et tu réponds à une question au lieu de résumer. EN: An exposé is spoken, addressed and announced; it answers a question rather than summarising.',
    examples: [
      { itemId: E(1204), note: 'la règle' },
      { itemId: E(1213), note: 'annoncer ce qui vient' },
      { itemId: E(1222), note: 'pourquoi annoncer' },
    ],
  },

  /** The dossier. */
  dossier: {
    term: 'le dossier',
    title: 'Lire un dossier',
    body: 'Un dossier réunit plusieurs documents de genres différents. Pour chacun, demande-toi qui parle, d’où, et pour dire quoi ; puis cherche où ils se rejoignent et où ils se séparent. EN: For each document: who speaks, from where, to say what; then where they meet and part.',
    examples: [
      { itemId: E(1232), note: 'les trois questions' },
      { itemId: E(1233), note: 'ce que chaque genre fait' },
      { itemId: E(1235), note: 'où passe la vraie différence' },
    ],
  },

  /** Synthesis aloud. */
  synthese: {
    term: 'la synthèse',
    title: 'Faire dialoguer les documents',
    body: 'Une synthèse ne présente pas les documents l’un après l’autre : elle part de ce qu’ils ont en commun, puis montre où ils divergent, avec un verbe qui dit la position de chacun (souligner, avancer, soutenir, mettre en garde). EN: Start from common ground, then show where they part, with a verb that carries each stance.',
    examples: [
      { itemId: E(1228), note: 'le point commun' },
      { itemId: E(1240), note: 'le même point, une autre conclusion' },
      { itemId: E(1206), note: 'ce que le jury attend' },
    ],
  },

  /** The spoken problématique. */
  question: {
    term: 'la question',
    title: 'La problématique, dite à voix haute',
    body: 'La problématique est une question que le dossier pose sans y répondre. À l’oral, on l’annonce par une formule (dès lors, on peut se demander si ; toute la question est de savoir) et on la construit comme une question indirecte, sans est-ce que et sans pronom repris. EN: A question the dossier raises but does not settle, said as an indirect question.',
    examples: [
      { itemId: E(1253), note: 'dès lors, on peut se demander si' },
      { itemId: E(1254), note: 'toute la question est de savoir' },
      { itemId: E(1260), note: 'la règle' },
    ],
  },

  /** Spoken signposts. */
  balise: {
    term: 'la balise',
    title: 'Les balises de l’oral',
    body: 'Une balise est une phrase courte qui dit au jury où tu en es : premier temps, donc ; j’en viens à mon second temps ; je reviens à ma question. Elle remplace les titres qu’un lecteur verrait sur la page. EN: A signpost tells the listener where you are, as headings do for a reader.',
    examples: [
      { itemId: E(1269), note: 'ouvrir une partie' },
      { itemId: E(1271), note: 'passer à la suivante' },
      { itemId: E(1270), note: 'tenir son temps' },
    ],
  },

  /** The formal floor toward a jury. */
  jury: {
    term: 'le jury',
    title: 'S’adresser au jury',
    body: 'Devant un jury, on vouvoie, on reformule la question pour vérifier qu’on l’a comprise, on y répond d’abord, on nuance ensuite, et l’on vérifie qu’on a répondu. Une question n’est jamais une attaque. EN: Say vous, rephrase, answer first, qualify second, then check you have answered.',
    examples: [
      { itemId: E(1281), note: 'reformuler' },
      { itemId: E(1282), note: 'demander une précision' },
      { itemId: E(1284), note: 'vérifier' },
    ],
  },

  /** Buying time. */
  temps: {
    term: 'le temps',
    title: 'Gagner du temps sans meubler',
    body: 'Gagner du temps, c’est réfléchir à voix haute : reprendre la question, distinguer deux choses, donner une première réponse. Meubler, c’est remplir le silence de mots vides ; inventer un chiffre, c’est pire. EN: Think aloud to buy time; never fill the silence with empty words or invented figures.',
    examples: [
      { itemId: E(1295), note: 'demander un instant' },
      { itemId: E(1298), note: 'ne pas savoir, sans inventer' },
      { itemId: E(1311), note: 'la règle' },
    ],
  },

  /** Conceding in public. */
  conceder: {
    term: 'concéder',
    title: 'Concéder sans abandonner',
    body: 'Concéder, c’est reconnaître qu’une objection a raison sur un point, puis dire ce que ce point change à ta position, et ce qu’il ne change pas. Ce n’est ni nier, ni tout abandonner. EN: Grant the point, then say what it changes in your position and what it does not.',
    examples: [
      { itemId: E(1312), note: 'reconnaître' },
      { itemId: E(1316), note: 'nuancer sans renverser' },
      { itemId: E(1317), note: 'maintenir' },
    ],
  },

  /** The scope of a claim. */
  portee: {
    term: 'la portée',
    title: 'Resserrer sa thèse',
    body: 'Une objection porte souvent sur une partie de ce que tu dis. Nomme cette partie, accorde-la, et resserre ta thèse sur ce que tu maintiens : l’accès, je vous l’accorde ; la valeur, je la maintiens. EN: Name what the objection is really about, grant it, and narrow your claim to what you keep.',
    examples: [
      { itemId: E(1325), note: 'ce sur quoi porte l’objection' },
      { itemId: E(1326), note: 'accorder une part, garder l’autre' },
      { itemId: E(1315), note: 'je ne dis pas que…, je dis que…' },
    ],
  },

  /** Closing the exchange. */
  cloture: {
    term: 'la clôture',
    title: 'Clore l’entretien',
    body: 'On finit l’entretien comme l’exposé : une phrase qui redit ta question et ta réponse, précisée par l’échange, puis un remerciement. Pas de « voilà », pas d’excuse. EN: End with one sentence restating your question and answer, refined by the exchange, then thanks.',
    examples: [
      { itemId: E(1342), note: 'annoncer la fin' },
      { itemId: E(1346), note: 'nuancer sans changer de question' },
      { itemId: E(1344), note: 'remercier' },
    ],
  },

  /** The app’s own format. */
  format: {
    term: 'le format',
    title: 'Le format de l’application',
    body: 'Dans l’application, la tâche finale est un exposé de trois à cinq minutes à partir d’un dossier imprimé ; les questions du jury se répètent dans un jeu de rôle. Ce format est celui de l’application : il ne reproduit les règles d’aucun examen, et un examen réel a ses propres consignes officielles. EN: The app’s own practice format; a real exam has its own official instructions.',
    examples: [
      { itemId: E(1351), note: 'le modèle commence ainsi' },
      { itemId: E(1354), note: 'sa question' },
      { itemId: E(1356), note: 'sa réponse' },
    ],
  },
};
