// DALF C1 blanc-04: shared constants and the paper's topic draw.
//
// ── The draw ────────────────────────────────────────────────────────────────
//
// Seven topics from TOPICS-dalf-c1.md, pre-assigned so this paper cannot
// overlap blanc-01, blanc-02 or blanc-03. Exported as TOPICS at the foot of
// this file, so `topicLedgerViolations` (scripts/dalf/paper-rules.ts) enforces
// rule 1 (no topic reused across DALF papers) rather than trusting it.
//
//   CO-L  DALF-04  a philosopher on whether we owe anything to people
//                  not yet born                                      ethique
//   CO-S  DALF-16  advert: a service pairing secondary pupils with
//                  retired tutors                                    examens-et-diplomes
//         DALF-17  flash: a library starts lending musical
//                  instruments                                       communaute
//   CE    DALF-35  the ideal of transparency: do exposed institutions
//                  improve, or only grow cautious and rehearsed      gouvernement
//   PE    DALF-44  marks at school (dossier) and a letter from a
//                  parents' representative to a governing board      examens-et-diplomes
//   PO    DALF-54  La ville doit-elle être pensée pour les enfants ?  communaute
//         DALF-57  Le journalisme peut-il être neutre ?              journalisme
//
// Five themes for seven rows. DALF-16 and DALF-44 are both
// `examens-et-diplomes` (a ninety-second advert and the writing dossier), and
// DALF-17 and DALF-54 are both `communaute` (a flash and a speaking subject):
// the same pattern blanc-02 accepted for `soins`, never twice in one épreuve.
// The PO pair differs in theme (TOPICS-dalf-c1 rule 7: communaute against
// journalisme), so the choice is real.
//
// Part 2 mixes genres as the bank asks: one advert, one flash.
//
// ── Steering clear of the excluded topics ───────────────────────────────────
//
// DALF-04 (future generations) sits next to two FEI demo topics: biodiversity
// and the human role in preserving it, and anything on languages. The
// interview never mentions species, nature conservation or languages; its
// examples are buried waste, public debt, a youth council and long building
// projects. DALF-44 says nothing of which languages schools teach.
//
// ── Integrity ───────────────────────────────────────────────────────────────
//
// Every proper noun in this paper is invented (STANDARD-common §6.1,
// STANDARD-dalf-c1 §2): towns, outlets, institutes, schools, libraries,
// services, speakers. Every figure is invented and attributed to an invented
// source, and each is marked `INVENTED` in a comment beside the text that
// carries it. No real person, living or dead, is quoted, paraphrased or named.
// Nothing here comes from an FEI paper.

export const FORMAT = 'dalf_c1' as const;
export const VARIANT = 'blanc-04';
export const FORMAT_VERSION = 'dalf-c1-2026.10';
/** paper.<format>.<variant>.<paperNo>: the number is the paper's place in the
 *  pack, as on blanc-01 and blanc-02. */
export const PAPER_NO = 4;
export const PAPER_ID = `paper.${FORMAT}.${VARIANT}.${PAPER_NO}`;

export const taskId = (taskType: string, seq: string) =>
  `exam.${FORMAT}.${VARIANT}.${taskType}.${seq}`;

/** Carried by every closed task. The scoring disclaimer: pass/fail at 50/100
 *  with a floor of 5/25 per épreuve, no scale to convert to. */
export const NOTES_CLOSED = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel et aucun extrait ne provient d’un sujet réel.',
  'Le DALF C1 s’obtient à 50/100, avec un minimum de 5/25 à chacune des quatre épreuves. Un total suffisant ne compense pas une épreuve sous ce seuil.',
  'Réponses rédigées : l’orthographe et la syntaxe ne sont pas sanctionnées si le sens reste clair. Toute reformulation cohérente avec la question est acceptée. Les mots clés servent à valider vite ; une réponse qui les manque est relue, jamais comptée fausse d’office.',
  'Vrai ou faux justifié : les points exigent à la fois le bon choix et une citation du texte qui le justifie. Sinon, la question vaut zéro.',
];

export const NOTES_OPEN = [
  'Épreuve blanche rédigée par Ealch d’après le format publié. Ce n’est pas un sujet officiel.',
  'La grille de correction est notre propre construction : le centre d’examen publie ses grilles et ses descripteurs, et les nôtres sont rédigés séparément, sur les mêmes trois niveaux (en dessous du niveau visé, C1, C1+).',
  'La correction est assistée par IA et s’appuie sur cette grille et sur cette réponse modèle. Le résultat est une estimation d’entraînement, jamais un score équivalent.',
];

/**
 * The seven bank rows this paper spends, in slot order: CO-L, CO-S ×2, CE, PE,
 * PO ×2. Data rather than a comment, so the ledger is enforced across the pack.
 */
export const TOPICS = [
  'DALF-04',
  'DALF-16', 'DALF-17',
  'DALF-35',
  'DALF-44',
  'DALF-54', 'DALF-57',
] as const;
