// c2.04.l1 « Verlan, argot et registres : l’usage littéraire » — the
// authored corpus, the identity block and the citation constants. DRAFT,
// fourth lesson of the C2 band, wave 1. To RICH-LESSON-STANDARD.md and the
// B1-BUILD-PLAYBOOK.md house rules, with the C2 rules of C2-BUILD-PLAN.md
// ("What is different at C2") and the c2.04 brief in C2-BUILD-LOG.md
// ("Wave 1 author briefs").
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
// No import or merge script was run. The id home (argot-classique theme,
// block 1000-1199, widened b2-c2 2026-10-09, sub-theme « l’argot et le
// registre en littérature » appended) was re-verified READ-ONLY against live
// Postgres by this draft's own author, 2026-10-09, via
// `ealch-admin/scratch/_c204-probe.mts` (BEGIN TRANSACTION READ ONLY, no SET,
// ROLLBACK at the end, never committed): the theme row and sub-theme match
// C2-BUILD-PLAN.md exactly, no id in 1000-1199 exists at ANY level inside
// argot-classique, and the predecessor lesson b2.32 (`fr.b2.argot-des-
// jeunes.1000`-`.1199`, THE OTHER theme, never this one) holds exactly 200
// published rows, confirming the b2.32 brief description.
//
// STABLE EXPORTS (a later lesson may import REFRAME from this file and quote
// it; do not rename): REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E,
// ALL_ROWS, ROWS_BY_ACT, IMPORTED, IMPORT_IDS, Cap, refFr, PASTICHE_DIRECT,
// PASTICHE_INDIRECT_LIBRE, PASTICHE_IRONIQUE, PASTICHE_FINAL (+ _EN).
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   THE OPPOSITE DIRECTION FROM « LA LEÇON 32 DU B2 ». That lesson taught
//   recognise-and-avoid: know a slang or verlan term exists, place it on the
//   four-rung register ladder (argotique / familier / courant / soutenu),
//   and never use it where it does not belong. This lesson never re-teaches
//   that vocabulary list or that ladder (cited once, by trail position, and
//   left alone). Here, the learner reads a text where an author or a formal
//   document has ALREADY put a slang or argot term exactly where "it does
//   not belong", ON PURPOSE, and explains why.
//
//     act 1   the problem: a seminar misreads a deliberate choice as an
//             error; the task announced; the one metaphor introduced
//     act 2   six reasons an author deploys argot on purpose: vraisemblance,
//             réalisme social, décalage ironique, économie de
//             caractérisation, connivence, distance narrative
//     act 3   discours direct: a quoted character line, marked by a
//             reporting verb and guillemets, inside a soigné narration
//     act 4   discours indirect libre: an argot word with NO guillemets and
//             NO reporting verb, blended straight into third-person
//             narration as the character’s own perspective
//     act 5   a formal, soutenu text (a newspaper chronicle) that quotes
//             someone’s own argot for ironic, critical contrast
//     act 6   the reading grid: accidental register slip (a real mistake, no
//             guillemets, no framing, no intent) versus deliberate literary
//             or ironic use (framed, marked, chosen)
//     act 7   the trap, named exactly by the brief: mistaking a literary
//             quotation for a licence to use the same word in one’s own
//             formal analysis
//     act 8   the method, the model analysis, then the graded task: a new
//             extract, analysed in writing, never imitated in speech
//
//   NOT OWNED, CITED ONLY (published, b2 band closed):
//     - the four-rung register ladder (argotique / familier / courant /
//       soutenu), verlan’s own mechanism, clipping, resuffixation,
//       borrowings, texting abbreviations, and the recognise-and-avoid
//       judgement itself are all « la leçon 32 du B2 »’s (b2.32, theme
//       `argot-des-jeunes`). Quoted once by REFRAME import, never retaught,
//       never reused by row id (this draft opened no seed/Postgres read
//       against b2.32’s own published rows; see §B).
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. ID DISCIPLINE
// ══════════════════════════════════════════════════════════════════════════
//
//   THEME `argot-classique` (domain `argot`) ranges b2-c2 in Postgres,
//   verified read-only 2026-10-09 (see header above): sub_themes =
//   ["l’argot et le registre en littérature"]. Legacy rows occupy only
//   .001-.070 across b2 and c1 (40 + 70, all below 1000, untouched by this
//   draft). This lesson owns block 1000-1199 AND NOTHING ELSE.
//
//   USED: .1000-.1131 across eight act blocks (see each act’s row comment
//   below), leaving .1132-.1199 free inside the claimed block for the
//   pre-review pass, the same margin c2.01 left.
//
// ══════════════════════════════════════════════════════════════════════════
//  §B. WHAT IS NOT REUSED, AND WHY
// ══════════════════════════════════════════════════════════════════════════
//
//   No row from b2.32 is reused by id. b2.32 is published and its ids
//   resolve through Postgres and the content packs, not through a local
//   draft authored with no Postgres session open for that purpose (the
//   probe above was read-only and touched no row content, only the theme
//   row and an id-range count). b2.32’s REFRAME is instead imported by name
//   from its own corpus file and quoted verbatim, and its trail position is
//   produced by a small local `refFr`, mirroring the exact rule b2.32’s own
//   corpus file states for citing B1/B2 neighbours: "a B1 or B2 unit id’s
//   number IS its trail position", so `b2.32` reads as "la leçon 32 du B2"
//   with no lookup needed.
//
// ══════════════════════════════════════════════════════════════════════════
//  §C. SOURCES AND THE FACT CHECK
// ══════════════════════════════════════════════════════════════════════════
//
//   EVERY EXTRACT IN THIS LESSON IS AN ORIGINAL PASTICHE, WRITTEN FOR THIS
//   DRAFT, NEVER ATTRIBUTED TO A REAL AUTHOR OR BOOK. The brief names Bruant,
//   Céline and Queneau as the period flavour this lesson's register aims
//   for, but no line from any of them is quoted, paraphrased or claimed as
//   theirs: this session opened no live source (no WebFetch/WebSearch call
//   was made) so no word-for-word public-domain quotation could be verified
//   against a real text, and c2.02’s own sourcing rule ("never paraphrase a
//   quotation") makes an unverified near-quote the wrong kind of risk to
//   take. The lesson itself NAMES this choice to the learner once, in the
//   scene (act 1): every extract is introduced as "un texte imaginé pour
//   cette leçon", never as a real author’s work.
//
//   ARGOT VOCABULARY, EACH USED AS A DELIBERATE REGISTER CHOICE BY AN
//   INVENTED CHARACTER, NEVER AS NEW VOCABULARY TO ACQUIRE (checked against
//   general knowledge of Le Robert / CNRTL / "Dictionnaire de l’argot"
//   entries; FLAG FOR PRE-REVIEW, since no live dictionary was queried this
//   session):
//     un pèze / fauché     l’argent / sans argent (classic, pre-verlan argot,
//                          attested since the late 19th century)
//     becter               manger (classic argot; also "becqueter")
//     la rousse            la police (classic, dated argot; names the
//                          police the same careful way b2.32 named "les
//                          keufs": recognised, never aimed at anyone real)
//     le costard            un costume, un complet (classic argot for a suit;
//                          chosen here partly because it echoes this
//                          lesson’s own reframe, a costume an author
//                          chooses for a character)
//     chouette (adjectif)  bien, agréable (classic, dated argot; still
//                          lightly current)
//     fauché(e) comme les blés   locution figée, très fauché (a classic
//                          intensifying idiom on "fauché", period-flavoured)
//   NO SLUR, NO INSULT, NO WORD NAMING A GROUP BY ORIGIN IS USED ANYWHERE IN
//   THIS LESSON. "La rousse" names an institution (the police), not a
//   person, the same careful line b2.32 drew for "les keufs".
//
// ══════════════════════════════════════════════════════════════════════════
//  §D. FACT CHECK, INVENTED CONTENT
// ══════════════════════════════════════════════════════════════════════════
//
//   PEOPLE, ALL INVENTED: Professeure Aline Berthier, Raphaël Nguyen (the
//   seminar); le vieux Jules, Fernand (the apartment-building pastiche);
//   Georges Maillard, adjoint aux travaux, and Yvon Castel, chroniqueur (the
//   council pastiche); Lucienne Berthoud (the task extract).
//   ORGANISATIONS, ALL INVENTED: le conseil municipal and the "comité
//   d’attribution des logements" named only as generic institutions, no
//   real town or committee.
//   REAL PLACES, AS PLACES ONLY: Lyon (act 1’s seminar room).
//   LOW-HEAT TOPICS ONLY: an old man's poverty and a landlady's generic
//   council budget meeting, a tenant's housing file. No living person, no
//   political topic beyond a generic, unnamed town council, no health
//   claim, no legal fact asserted as true outside the fiction.
//   QUOTATIONS: none from a real person or text; every quoted line inside
//   every pastiche is invented for this lesson (§C above).
//
// ══════════════════════════════════════════════════════════════════════════
//  §E. HOUSE RULES APPLIED
// ══════════════════════════════════════════════════════════════════════════
//
//   tu for the learner; invented characters use vous or tu as their own
//   situation calls for (Fernand and Jules are old friends, tu; the seminar
//   is vous between student and professor). No em dash. No U+203F tie.
//   Never "honnête" / "honest" / "honnêtement". Typographic ’ throughout. No
//   spaced « ? » or « ! » in a scene or story bubble. French only on the
//   learner surface; English authored behind every `en` field and every
//   trailing « EN: », never shown by default. Citations by trail position in
//   French words only (« la leçon 32 du B2 »), never a raw id. No row is
//   ever released (flashcard/voiceflash) as an instruction to SAY or WRITE
//   an argot word in the learner's own voice: every argotique row in this
//   lesson is `drills: SR` (sentence + review only), analysis material, not
//   a speaking target, the same NOT_SPEAKABLE discipline b2.32 applied in
//   the other direction.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.04',
  seq: 4,
  title: 'Verlan, Slang and Registers: Literary Use',
  sub: 'Verlan, argot et registres : l’usage littéraire',
  canDo: 'Can read a literary or formal text that deploys verlan or classic argot deliberately, for voice, realism or ironic effect, name the device that frames it (direct quotation, free indirect style, ironic contrast within a soutenu text), distinguish it from an accidental register slip, and explain in writing why the author chose it there, without ever mistaking the quotation for an instruction to use the word in one’s own formal register',
  prereqUnitIds: ['b2.32'],
} as const;

export const LESSON_ID = 'c2.04.l1';
export const THEME = 'argot-classique';
export const LEVEL = 'c2' as const;

/** ONE block. Legacy rows (.001-.070) sit below 1000, untouched. */
export const ID_RANGES = [[1000, 1199]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. HOW THIS LESSON NAMES ITS NEIGHBOUR
 *
 *  b2.32’s own corpus file states the rule directly: "a B1 or B2 unit id’s
 *  number IS its trail position". No seed/Postgres lookup is needed to cite
 *  it; a small regex reproduces the same rule locally.
 * ══════════════════════════════════════════════════════════════════════════ */

export function refFr(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  if (!m) throw new Error(`c2.04: ${unitId} is not a B1/B2 unit id`);
  return `la leçon ${Number(m[2])} du ${m[1].toUpperCase()}`;
}
export function refEn(unitId: string): string {
  const m = /^(b1|b2)\.(\d{2})$/.exec(unitId);
  if (!m) throw new Error(`c2.04: ${unitId} is not a B1/B2 unit id`);
  return `lesson ${Number(m[2])} in ${m[1].toUpperCase()}`;
}

export const B232_UNIT = 'b2.32';
export const B232_REF = refFr(B232_UNIT);
export const B232_REF_EN = refEn(B232_UNIT);

export { REFRAME as B232_REFRAME, REFRAME_EN as B232_REFRAME_EN } from '../b2/verlan-argot-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE REFRAME AND THE ONE METAPHOR
 *
 *  LE COSTUME. An argot word placed deliberately in a text is a costume the
 *  author chooses for a character or a moment, never a piece of clothing
 *  the text hands the reader to wear. b2.32’s échelle asked "which rung is
 *  this word for". This lesson asks a different question of the SAME word,
 *  already placed on a rung by someone else, on purpose: "why did they
 *  dress this character in it, and what does that dressing tell me" versus
 *  "may I wear it too" (never, in one’s own formal register, per act 7).
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Un mot d’argot cité est un costume choisi pour un personnage, jamais un vêtement que le texte te tend.';
export const REFRAME_EN = 'A quoted slang word is a costume chosen for a character, never a garment the text hands to you.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Si un auteur l’emploie, c’est que ce mot est devenu courant.',
    why: `False where act 5 has to hold: l’élu cité par Yvon Castel reste un cas isolé, cité justement parce qu’il contraste avec le compte rendu officiel ; une citation littéraire ou journalistique ne change pas le registre réel d’un mot, ${B232_REF} a déjà fixé ce registre.`,
  },
  {
    text: 'Comprendre pourquoi un mot d’argot est cité revient à apprendre à l’employer soi-même.',
    why: 'False where act 7 has to hold, exactly the trap this lesson is built to catch: analyser une citation, entre guillemets, est l’inverse d’adopter le mot dans son propre texte soigné.',
  },
  {
    text: 'Un texte qui contient de l’argot a mal choisi son registre.',
    why: 'False where acts 3 to 5 have to hold: le décalage est souvent le point précis que l’auteur vise, pour la voix d’un personnage, le réalisme ou l’ironie, jamais un accident de rédaction en soi.',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE ORIGINAL PASTICHE EXTRACTS (never attributed to a real author)
 * ══════════════════════════════════════════════════════════════════════════ */

export const PASTICHE_DIRECT =
  'Jules habitait au quatrième étage depuis trente ans, et personne, dans l’immeuble, n’aurait su dire de quoi il vivait vraiment. Ce matin-là, Fernand le croisa dans l’escalier, un sac de provisions à la main.\n\n« Encore fauché, ce mois-ci, mon vieux, dit Jules en riant à moitié. Mais on becte quand même, hein. »\n\nFernand ne répondit rien. Il connaissait cette manière qu’avait Jules de rire de sa propre misère, comme pour l’empêcher de lui faire trop mal. Le narrateur, lui, continuait d’écrire dans une langue soignée, presque littéraire, comme si la phrase de Jules venait d’un autre monde que le sien, posée là, entre deux paragraphes mesurés, exactement comme on la lui avait dite.';

export const PASTICHE_DIRECT_EN =
  'Jules had lived on the fourth floor for thirty years, and nobody in the building could really have said what he lived on. That morning, Fernand ran into him on the stairs, a bag of groceries in hand.\n\n"Broke again this month, old friend," said Jules, half laughing. "But we still eat, eh."\n\nFernand said nothing. He knew this way Jules had of laughing at his own hardship, as if to stop it from hurting too much. The narrator, meanwhile, kept writing in a careful, almost literary language, as if Jules’s line came from another world than his own, set there, between two measured paragraphs, exactly as it had been said to him.';

export const PASTICHE_INDIRECT_LIBRE =
  'Jules descendit l’escalier à pas lents. Il n’avait plus un pèze, et ça n’avait plus grand sens de s’en inquiéter à son âge. La rue, en bas, sentait le pain chaud et l’hiver qui finissait. Il n’irait pas chez le boulanger ce matin, tant pis pour le pèze qu’il n’avait pas et pour le pain qu’il ne mangerait pas. Après tout, à quoi bon se faire du souci pour si peu.';

export const PASTICHE_INDIRECT_LIBRE_EN =
  'Jules went down the stairs slowly. He had no money left, and at his age there was not much point worrying about it. The street below smelled of warm bread and a winter coming to an end. He would not go to the baker this morning, too bad for the money he did not have and the bread he would not eat. After all, what good was it to worry over so little.';

export const PASTICHE_IRONIQUE =
  'Le conseil municipal s’est réuni mardi soir pour discuter du budget du quartier. Après deux heures de débats mesurés, Georges Maillard, l’adjoint aux travaux, a conclu avec une franchise qu’on ne lui connaissait pas encore : « De toute façon, on est fauchés, messieurs, y a plus un pèze dans les caisses. » La phrase, prononcée devant un parterre de notables en costard, a jeté un silence que le compte rendu officiel, lui, s’est bien gardé de retranscrire.';

export const PASTICHE_IRONIQUE_EN =
  'The town council met on Tuesday evening to discuss the district budget. After two hours of measured debate, Georges Maillard, the deputy for public works, concluded with a frankness nobody had seen in him before: "Either way, we are broke, gentlemen, there is not a cent left in the coffers." The line, delivered in front of a row of notables in suits, drew a silence the official minutes carefully declined to transcribe.';

export const PASTICHE_FINAL =
  'Le rapport du comité d’attribution des logements, rédigé dans les formes, consacrait un paragraphe entier à Lucienne Berthoud, soixante-dix-huit ans, locataire depuis 1962. Elle avait déclaré, lors de son entretien, qu’elle ne quitterait jamais son appartement, « même fauchée comme les blés, même si on me propose la lune ». Le comité, dans sa conclusion, notait sobrement que la requérante souhaitait rester sur place « pour des raisons personnelles », sans juger utile de reproduire la formule exacte de Madame Berthoud.';

export const PASTICHE_FINAL_EN =
  'The housing allocation committee’s report, written in proper form, gave an entire paragraph to Lucienne Berthoud, seventy eight, a tenant since 1962. She had declared, during her interview, that she would never leave her apartment, "even dirt poor, even if they offered me the moon." The committee, in its conclusion, noted soberly that the applicant wished to remain in place "for personal reasons", without judging it useful to reproduce Madame Berthoud’s exact words.';

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. ROW CONSTRUCTORS
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
/** Named for analysis, a rule, a trap or a quiz distractor: never released,
 *  never a speaking or flashcard target. Every argotique row in this
 *  lesson carries this, never FCVR (§E above: analysis, never production). */
const SR = ['sentence', 'review'] as Item['drills'];

const sent = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, tags, drills, version: 1,
  grammarPoints: ['registre-et-citation'], ...extra,
});
const phrase = (n: number, fr: string, en: string, tags: string[], drills: Item['drills'] = FCVR, extra: Partial<Row> = {}): Row => ({
  ...sent(n, fr, en, tags, drills, extra), kind: 'phrase',
});

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 1 ROWS — Un mot entre guillemets (1000-1013)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT1_ROWS: Row[] = [
  sent(1000, 'Le vieux Jules n’avait plus un pèze, et ça, toute la rue le savait.', 'Old Jules had no money left, and the whole street knew it.', ['extrait-ouverture', 'pastiche'], SR),
  sent(1001, 'Il y a sans doute une faute ; il faudrait écrire de l’argent.', 'There is probably a mistake; it should say money.', ['reflexe-correcteur', 'faux'], SR),
  sent(1002, 'L’auteur a choisi ce mot pour nous faire entendre comment Jules voit sa propre vie.', 'The author chose this word to let us hear how Jules sees his own life.', ['lecture-correcte']),
  sent(1003, 'Le pèze, ici, n’est pas une erreur de registre : c’est la façon dont Jules pense sa propre pauvreté.', 'Le pèze here is not a register slip: it is how Jules himself thinks about his own poverty.', ['regle']),
  sent(1004, 'Un texte peut citer un mot que son propre registre général n’emploierait jamais.', 'A text can quote a word its own general register would never use itself.', ['regle']),
  sent(1005, `${Cap(B232_REF)} t’a appris à placer un mot d’argot sur une échelle, et à ne jamais l’employer là où il ne va pas.`, `The lesson in B2 taught you to place a slang word on a ladder, and never to use it where it does not belong.`, ['acquis']),
  sent(1006, 'Cette leçon part du même mot, déjà mal placé par quelqu’un d’autre, à dessein : pourquoi l’a-t-il mis là.', 'This lesson starts from the same word, already placed where it does not belong by someone else, on purpose: why did they put it there.', ['acquis']),
  sent(1007, 'Comprendre ce choix ne veut jamais dire l’imiter dans ta propre écriture soignée.', 'Understanding this choice never means imitating it in your own careful writing.', ['regle']),
  phrase(1008, 'la lecture attentive', 'close reading', ['metalangage']),
  phrase(1009, 'le choix délibéré', 'the deliberate choice', ['metalangage']),
  phrase(1010, 'la voix du personnage', 'the character’s voice', ['metalangage']),
  phrase(1011, 'un texte imaginé pour cette leçon', 'a text invented for this lesson', ['metalangage']),
  sent(1012, 'Chaque extrait de cette leçon est un texte imaginé pour cette leçon, jamais attribué à un auteur réel.', 'Every extract in this lesson is a text invented for this lesson, never attributed to a real author.', ['avertissement']),
  sent(1013, 'Avant la fin de cette leçon, tu écriras une analyse d’un nouvel extrait, jamais une imitation de son argot.', 'By the end of this lesson, you will write an analysis of a new extract, never an imitation of its slang.', ['annonce']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 2 ROWS — Pourquoi cet auteur choisit ce mot (1014-1033)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT2_ROWS: Row[] = [
  // Raison 1 : vraisemblance / la voix du personnage
  sent(1014, '« Encore fauché, ce mois-ci, mon vieux », dit Jules : on entend l’homme, pas seulement le fait.', '"Broke again this month, old friend," says Jules: we hear the man, not only the fact.', ['raison-vraisemblance']),
  phrase(1015, 'la vraisemblance', 'verisimilitude, believability', ['metalangage']),
  // Raison 2 : réalisme social
  sent(1016, '« On becte quand même » situe Jules dans un milieu, une génération, un quartier, en trois mots.', '"We still eat anyway" places Jules in a milieu, a generation, a neighbourhood, in three words.', ['raison-realisme']),
  phrase(1017, 'le réalisme social', 'social realism', ['metalangage']),
  // Raison 3 : décalage ironique
  sent(1018, 'Un élu cité en pleine réunion, « on est fauchés, messieurs », crée un contraste que la suite du texte ne referme jamais.', 'A councillor quoted mid-meeting, "we are broke, gentlemen," creates a contrast the rest of the text never closes.', ['raison-ironie']),
  phrase(1019, 'le décalage ironique', 'ironic contrast', ['metalangage']),
  // Raison 4 : économie de caractérisation
  sent(1020, 'Un seul mot, costard, et le lecteur voit déjà l’homme, son âge, sa seule tenue correcte.', 'One single word, costard, and the reader already sees the man, his age, his one decent suit.', ['raison-economie']),
  phrase(1021, 'l’économie de caractérisation', 'economy of characterisation', ['metalangage']),
  // Raison 5 : connivence avec le lecteur
  sent(1022, '« Chouette, cette matinée », pense Jules : le mot familier invite le lecteur à partager son regard, pas à le juger.', '"Chouette, this morning," thinks Jules: the familiar word invites the reader to share his view, not to judge it.', ['raison-connivence']),
  phrase(1023, 'la connivence', 'complicity, shared understanding', ['metalangage']),
  // Raison 6 : distance narrative
  sent(1024, 'En citant « la rousse » dans la bouche d’un personnage, le narrateur montre un point de vue sans jamais le cautionner lui-même.', 'By quoting "la rousse" in a character’s mouth, the narrator shows a point of view without ever endorsing it himself.', ['raison-distance']),
  phrase(1025, 'la distance narrative', 'narrative distance', ['metalangage']),
  // Support rows for the tapTable / groupDrill
  sent(1026, 'Le même fait, dit par le narrateur, perdrait tout ce que le mot de Jules lui donnait.', 'The same fact, said by the narrator, would lose everything Jules’s own word gave it.', ['regle']),
  sent(1027, 'Six raisons, un seul principe : le mot sert le texte, jamais le hasard.', 'Six reasons, one principle: the word serves the text, never chance.', ['regle']),
  phrase(1028, 'l’effet voulu', 'the intended effect', ['metalangage']),
  phrase(1029, 'l’intention de l’auteur', 'the author’s intent', ['metalangage']),
  sent(1030, 'Reconnaître la raison d’un choix n’efface jamais le registre réel du mot choisi.', 'Recognising the reason for a choice never erases the real register of the chosen word.', ['regle']),
  sent(1031, 'Costard, chouette, pèze, fauché, becter, la rousse : six mots, un seul test à chaque fois, pourquoi ici.', 'Costard, chouette, pèze, fauché, becter, la rousse: six words, the same test every time, why here.', ['bilan']),
  sent(1032, 'Un roman peut faire parler un personnage comme la rue le fait vraiment parler, sans que le narrateur parle ainsi lui-même.', 'A novel can make a character speak the way the street really speaks, without the narrator himself speaking that way.', ['regle']),
  sent(1033, 'Nomme d’abord la raison, puis cherche l’indice dans le texte qui la prouve.', 'Name the reason first, then look for the textual cue that proves it.', ['methode']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 3 ROWS — Discours direct : la voix citée (1034-1047)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT3_ROWS: Row[] = [
  sent(1034, '« Encore fauché, ce mois-ci, mon vieux, dit Jules en riant à moitié. Mais on becte quand même, hein. »', '"Broke again this month, old friend," said Jules, half laughing. "But we still eat, eh."', ['extrait-direct']),
  sent(1035, 'Les guillemets encadrent la phrase de Jules comme un cadre encadre un tableau : ce qui est dedans n’est pas signé par le peintre du mur.', 'The quotation marks frame Jules’s line the way a frame surrounds a painting: what is inside is not signed by whoever painted the wall.', ['regle']),
  sent(1036, '« dit Jules » est un verbe de parole : il annonce que la phrase qui suit appartient à quelqu’un, pas au narrateur.', '"said Jules" is a reporting verb: it announces that the sentence which follows belongs to someone, not to the narrator.', ['regle']),
  phrase(1037, 'le discours direct', 'direct speech', ['metalangage']),
  phrase(1038, 'le verbe de parole', 'the reporting verb', ['metalangage']),
  phrase(1039, 'les guillemets', 'quotation marks', ['metalangage']),
  sent(1040, 'Le reste du texte continue dans une langue soignée, presque littéraire, autour de la phrase de Jules.', 'The rest of the text keeps going in a careful, almost literary language, around Jules’s line.', ['extrait-direct']),
  sent(1041, 'Fernand ne répondit rien ; il connaissait cette manière qu’avait Jules de rire de sa propre misère.', 'Fernand said nothing; he knew this way Jules had of laughing at his own hardship.', ['extrait-direct']),
  sent(1042, 'Deux voix coexistent dans ce court passage : celle, soignée, qui raconte, et celle, argotique, qui est racontée.', 'Two voices coexist in this short passage: the careful one that narrates, and the slang one that is being narrated.', ['regle']),
  sent(1043, 'Retirer les guillemets de la phrase de Jules la rendrait indiscernable de la voix du narrateur, ce qui changerait tout.', 'Removing the quotation marks from Jules’s line would make it indistinguishable from the narrator’s voice, which would change everything.', ['regle']),
  sent(1044, 'Le registre de la phrase citée (familier, voire argotique) contraste avec le registre du paragraphe qui l’entoure (soigné).', 'The register of the quoted line (familiar, even slang) contrasts with the register of the surrounding paragraph (careful, literary).', ['regle']),
  sent(1045, 'Ce contraste, ici, dit la tendresse du narrateur pour Jules, pas une erreur de rédaction.', 'This contrast, here, speaks to the narrator’s tenderness toward Jules, not a writing mistake.', ['regle']),
  phrase(1046, 'le cadre narratif', 'the narrative frame', ['metalangage']),
  sent(1047, 'Un dialogue cité, encadré par des guillemets et un verbe de parole, est toujours un choix délibéré de l’auteur.', 'A quoted dialogue, framed by quotation marks and a reporting verb, is always a deliberate choice by the author.', ['regle']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 4 ROWS — Discours indirect libre : la voix fondue (1048-1059)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT4_ROWS: Row[] = [
  sent(1048, 'Jules descendit l’escalier à pas lents. Il n’avait plus un pèze, et ça n’avait plus grand sens de s’en inquiéter à son âge.', 'Jules went down the stairs slowly. He had no money left, and at his age there was not much point worrying about it.', ['extrait-indirect-libre']),
  sent(1049, 'Aucun guillemet, aucun verbe de parole : « il n’avait plus un pèze » semble sortir directement du narrateur.', 'No quotation marks, no reporting verb: "he had no money left" seems to come straight from the narrator.', ['regle']),
  sent(1050, 'Pourtant, le pèze, c’est le mot de Jules, pas celui que le narrateur emploierait pour lui-même.', 'And yet, le pèze is Jules’s word, not one the narrator would use for himself.', ['regle']),
  phrase(1051, 'le discours indirect libre', 'free indirect style', ['metalangage']),
  sent(1052, 'Le discours indirect libre fond la voix du personnage dans celle du narrateur, sans jamais l’annoncer.', 'Free indirect style blends the character’s voice into the narrator’s, without ever announcing it.', ['regle']),
  sent(1053, 'L’indice n’est pas un guillemet : c’est un mot, un registre, qui ne ressemble pas au reste du paragraphe.', 'The cue is not a quotation mark: it is a word, a register, that does not match the rest of the paragraph.', ['methode']),
  sent(1054, 'Il n’irait pas chez le boulanger ce matin, tant pis pour le pèze qu’il n’avait pas et pour le pain qu’il ne mangerait pas.', 'He would not go to the baker this morning, too bad for the money he did not have and the bread he would not eat.', ['extrait-indirect-libre']),
  sent(1055, 'Après tout, à quoi bon se faire du souci pour si peu : la phrase sonne comme la propre résignation de Jules, prêtée au narrateur.', 'After all, what good was it to worry over so little: the line sounds like Jules’s own resignation, lent to the narrator.', ['extrait-indirect-libre']),
  sent(1056, 'Comparé à l’acte précédent, ce passage ne cite jamais Jules ; il pense comme lui, sans jamais le dire ouvertement.', 'Compared to the previous act, this passage never quotes Jules; it thinks like him, without ever stating it openly.', ['regle']),
  sent(1057, 'Repérer le discours indirect libre demande de comparer le registre d’une phrase à celui du paragraphe qui la porte.', 'Spotting free indirect style means comparing a sentence’s register to that of the paragraph carrying it.', ['methode']),
  phrase(1058, 'la fusion des voix', 'the fusion of voices', ['metalangage']),
  sent(1059, 'Le discours direct encadre la voix du personnage ; le discours indirect libre la dissout dans celle du narrateur.', 'Direct speech frames the character’s voice; free indirect style dissolves it into the narrator’s.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 5 ROWS — Le décalage ironique dans un texte officiel (1060-1073)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT5_ROWS: Row[] = [
  sent(1060, 'Le conseil municipal s’est réuni mardi soir pour discuter du budget du quartier, après deux heures de débats mesurés.', 'The town council met on Tuesday evening to discuss the district budget, after two hours of measured debate.', ['extrait-ironique']),
  sent(1061, '« De toute façon, on est fauchés, messieurs, y a plus un pèze dans les caisses », conclut Georges Maillard, l’adjoint aux travaux.', '"Either way, we are broke, gentlemen, there is not a cent left in the coffers," concluded Georges Maillard, the deputy for public works.', ['extrait-ironique']),
  sent(1062, 'La phrase, prononcée devant des notables en costard, a jeté un silence que le compte rendu officiel s’est bien gardé de retranscrire.', 'The line, delivered in front of notables in suits, drew a silence the official minutes carefully declined to transcribe.', ['extrait-ironique']),
  sent(1063, 'Le reste de la chronique de Yvon Castel reste au registre soutenu ; seule la citation bascule dans l’argot.', 'The rest of Yvon Castel’s chronicle stays at a soutenu register; only the quotation drops into argot.', ['regle']),
  sent(1064, 'Ce décalage, entre le cadre officiel et les mots exacts de l’élu, est le point que le chroniqueur veut faire sentir.', 'This gap, between the official setting and the councillor’s exact words, is the very point the columnist wants the reader to feel.', ['regle']),
  sent(1065, 'Citer mot pour mot, plutôt que résumer poliment, est déjà un jugement du chroniqueur sur la scène qu’il décrit.', 'Quoting word for word, rather than paraphrasing politely, is already the columnist’s own judgement on the scene he describes.', ['regle']),
  sent(1066, 'Un compte rendu officiel qui aurait écrit « des difficultés budgétaires sont à prévoir » aurait effacé tout ce décalage.', 'An official report that had written "budgetary difficulties are to be expected" would have erased the whole contrast.', ['regle']),
  phrase(1067, 'la citation directe', 'the direct quotation', ['metalangage']),
  phrase(1068, 'le compte rendu officiel', 'the official minutes', ['metalangage']),
  sent(1069, 'Le décalage ironique ne vient jamais du mot seul : il vient du mot, posé juste là où personne ne l’attendait.', 'Ironic contrast never comes from the word alone: it comes from the word, placed exactly where nobody expected it.', ['regle']),
  sent(1070, 'Un texte soutenu qui cite un mot argotique ne devient pas lui-même argotique : il reste soutenu, et la citation reste citée.', 'A soutenu text that quotes an argot word does not itself become argotic: it stays soutenu, and the quotation stays quoted.', ['regle']),
  sent(1071, 'La même citation, rapportée dans un roman au lieu d’une chronique, servirait la vraisemblance plutôt que l’ironie.', 'The same quotation, reported in a novel instead of a chronicle, would serve verisimilitude rather than irony.', ['bilan']),
  sent(1072, 'Reconnaître l’ironie demande de comparer le cadre (soutenu, officiel) à la citation (argotique, inattendue) qu’il porte.', 'Recognising the irony means comparing the frame (soutenu, official) to the quotation (argotic, unexpected) it carries.', ['methode']),
  sent(1073, 'Trois textes, trois cadres, un même principe : le registre cité contraste toujours avec le registre qui l’entoure, pour une raison précise.', 'Three texts, three frames, one same principle: the quoted register always contrasts with the register around it, for a precise reason.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 6 ROWS — Accidentel ou voulu : la grille de lecture (1074-1093)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT6_ROWS: Row[] = [
  // La grille : quatre indices du choix délibéré
  sent(1074, 'Un indice du choix délibéré : des guillemets ou un verbe de parole qui encadrent le mot.', 'A cue of deliberate choice: quotation marks or a reporting verb framing the word.', ['grille']),
  sent(1075, 'Un indice du choix délibéré : un contraste net avec le registre du paragraphe qui l’entoure.', 'A cue of deliberate choice: a clear contrast with the register of the surrounding paragraph.', ['grille']),
  sent(1076, 'Un indice du choix délibéré : un effet nommable, pour un personnage, pour l’ironie, pour le réalisme.', 'A cue of deliberate choice: a nameable effect, for a character, for irony, for realism.', ['grille']),
  sent(1077, 'L’absence de ces indices, dans un texte qui se veut soigné de bout en bout, signale plutôt un accident.', 'The absence of these cues, in a text meant to stay careful throughout, signals an accident instead.', ['grille']),
  // Exemples DÉLIBÉRÉS, nouveaux ou repris en un trait
  sent(1078, '« Encore fauché, ce mois-ci, mon vieux », dit Jules : guillemets, verbe de parole, personnage nommé.', '"Broke again this month, old friend," said Jules: quotation marks, reporting verb, a named character.', ['voulu']),
  sent(1079, 'Il n’avait plus un pèze, pense Jules sans le dire : registre décalé du reste du paragraphe, aucune autre explication.', 'He had no money left, Jules thinks without saying so: a register out of step with the rest of the paragraph, no other explanation.', ['voulu']),
  sent(1080, '« On est fauchés, messieurs », cité dans une chronique par ailleurs soutenue : contraste net, effet ironique nommable.', '"We are broke, gentlemen," quoted inside an otherwise soutenu chronicle: a clear contrast, a nameable ironic effect.', ['voulu']),
  // Exemples ACCIDENTELS, nouveaux
  sent(1081, 'Madame, je me permets de vous écrire concernant le dossier numéro quatre mille cinq cent vingt et un. Bref, j’ai un peu la rage parce que ça traîne depuis trois mois. Cordialement.', 'Madam, I am writing to you regarding file number four thousand five hundred and twenty one. Anyway, I am a bit furious because it has been dragging on for three months. Regards.', ['accidentel'], SR),
  sent(1082, '« J’ai un peu la rage » glisse dans une lettre par ailleurs soutenue, sans guillemets, sans verbe de parole, sans effet nommable : une vraie glissade.', '"I am a bit furious" slips into an otherwise soutenu letter, with no quotation marks, no reporting verb, no nameable effect: a real slip.', ['accidentel']),
  sent(1083, 'Dans cet extrait, l’auteur montre bien que le personnage est carrément à cran, ce qui prouve son style littéraire.', 'In this extract, the author clearly shows that the character is totally on edge, which proves his literary style.', ['accidentel'], SR),
  sent(1084, '« Carrément à cran » glisse dans une phrase d’analyse qui se voulait soignée : le registre de l’analyse elle-même déraille.', '"Totally on edge" slips into an analytical sentence meant to stay careful: the analysis’s own register derails.', ['accidentel']),
  // La règle du tri
  sent(1085, 'Le tri ne porte jamais sur le mot seul : « fauché » peut être voulu dans un roman et accidentel dans une lettre.', 'The sort is never about the word alone: "fauché" can be deliberate in a novel and accidental in a letter.', ['regle']),
  sent(1086, 'Le tri porte sur le cadre : guillemets, verbe de parole, contraste net, effet nommable, ou leur absence complète.', 'The sort is about the frame: quotation marks, a reporting verb, a clear contrast, a nameable effect, or their complete absence.', ['regle']),
  sent(1087, 'Une lettre officielle qui glisse dans l’argot, sans aucun de ces indices, reste une faiblesse d’écriture, pas un procédé.', 'An official letter that slips into argot, with none of these cues, remains a writing weakness, not a device.', ['regle']),
  phrase(1088, 'la glissade de registre', 'the register slip', ['metalangage']),
  phrase(1089, 'la grille de lecture', 'the reading grid', ['metalangage']),
  sent(1090, 'Avant de juger un mot d’argot dans un texte, cherche toujours son cadre avant de chercher son sens.', 'Before judging a slang word in a text, always look for its frame before looking for its meaning.', ['methode']),
  sent(1091, 'Un devoir d’étudiant qui glisse dans l’argot en analysant un texte n’est jamais, lui, un procédé littéraire.', 'A student essay that slips into argot while analysing a text is never, itself, a literary device.', ['regle']),
  sent(1092, 'Cette dernière remarque annonce le piège du prochain acte : analyser l’argot d’un texte, sans jamais l’attraper soi-même.', 'This last remark announces the next act’s trap: analysing a text’s slang, without ever catching it oneself.', ['transition']),
  sent(1093, 'Quatre textes, deux catégories : le voulu se prouve, l’accidentel se corrige.', 'Four texts, two categories: the deliberate is proven, the accidental is corrected.', ['bilan']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 7 ROWS — Le piège : citer n’est pas conseiller (1094-1115)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT7_ROWS: Row[] = [
  sent(1094, 'Citer un mot d’argot pour l’analyser et l’employer dans son propre texte sont deux gestes opposés, pas deux degrés du même geste.', 'Quoting a slang word to analyse it and using it in one’s own text are two opposite gestures, not two degrees of the same gesture.', ['regle']),
  // Paire 1 : fauché
  sent(1095, 'L’auteur est fauché de mots pour décrire Jules, ce qui montre son style.', 'The author is broke of words to describe Jules, which shows his style.', ['piege-fauche'], SR),
  sent(1096, 'En employant le terme argotique fauché, l’auteur fait entendre la voix même de Jules, dans un récit par ailleurs soigné.', 'By using the slang term fauché, the author lets us hear Jules’s own voice, inside an otherwise careful narrative.', ['piege-fauche', 'reglage']),
  // Paire 2 : becter
  sent(1097, 'On a vraiment envie de becter après cette lecture, tellement l’extrait donne faim.', 'You really want to becter after this reading, the extract makes you so hungry.', ['piege-becter'], SR),
  sent(1098, 'Le verbe becter, mis dans la bouche de Jules, ancre le personnage dans un milieu populaire que la langue soignée du narrateur ne partage pas.', 'The verb becter, put in Jules’s mouth, anchors the character in a working class milieu the narrator’s careful language does not share.', ['piege-becter', 'reglage']),
  // Paire 3 : pèze / élu
  sent(1099, 'Comme l’élu, on peut dire que la commune est bien fauchée cette année ; il n’y a plus un pèze dans le budget réel.', 'Like the councillor, one could say the town is really broke this year; there is not a cent left in the real budget.', ['piege-peze'], SR),
  sent(1100, 'La citation directe des mots de l’élu, « on est fauchés... plus un pèze », crée un contraste ironique avec le compte rendu officiel qui l’entoure.', 'The direct quotation of the councillor’s own words, "we are broke... not a cent left," creates an ironic contrast with the official minutes around it.', ['piege-peze', 'reglage']),
  // Paire 4 : la rousse
  sent(1101, 'Le texte parle de la police avec le mot rousse ; je dirai donc, moi aussi, que la rousse a raison d’intervenir dans mon rapport officiel.', 'The text speaks of the police with the word rousse; so I too will say, in my official report, that la rousse was right to intervene.', ['piege-rousse'], SR),
  sent(1102, 'Le texte emploie le mot argotique la rousse pour la police, un choix qui situe le point de vue du personnage, jamais une recommandation d’emploi dans un rapport officiel.', 'The text uses the slang word la rousse for the police, a choice that places the character’s point of view, never a recommendation to use it in an official report.', ['piege-rousse', 'reglage']),
  // Paire 5 : costard
  sent(1103, 'Jules porte son costard, ce qui est un terme familier ; je peux donc aussi écrire que je mets mon costard pour l’examen oral.', 'Jules wears his costard, which is a familiar term; so I too can write that I am wearing my costard for my oral exam.', ['piege-costard'], SR),
  sent(1104, 'Jules porte son costard, terme familier qui rappelle sa condition modeste, un détail à analyser, jamais à reproduire dans son propre registre d’examen.', 'Jules wears his costard, a familiar term recalling his modest condition, a detail to analyse, never to reproduce in one’s own exam register.', ['piege-costard', 'reglage']),
  // Paire 6 : chouette
  sent(1105, 'L’extrait est vraiment chouette à lire ; on sent le style de l’auteur.', 'The extract is really chouette to read; you can feel the author’s style.', ['piege-chouette'], SR),
  sent(1106, 'L’adjectif familier chouette, employé ici du point de vue de Jules, donne de la chaleur au personnage sans jamais devenir le vocabulaire du commentaire qui l’analyse.', 'The familiar adjective chouette, used here from Jules’s point of view, gives the character warmth without ever becoming the vocabulary of the commentary that analyses it.', ['piege-chouette', 'reglage']),
  // Règle et méthode
  sent(1107, 'Dans un devoir, tu peux citer un mot d’argot entre guillemets pour l’analyser, jamais l’employer toi-même dans ton propre texte soigné.', 'In an essay, you can quote a slang word between quotation marks to analyse it, never use it yourself in your own careful text.', ['regle-centrale']),
  sent(1108, 'Même deux mots modernes bien connus (relou, wesh) suivent la même règle : citables entre guillemets, jamais adoptés dans ta propre voix d’analyse.', 'Even two well-known modern words (relou, wesh) follow the same rule: quotable between quotation marks, never adopted into your own analytical voice.', ['regle-centrale']),
  phrase(1109, 'analyser, ce n’est pas adopter', 'to analyse is not to adopt', ['metalangage']),
  sent(1110, 'Le piège prend d’abord la forme d’un mot du texte qui se glisse, sans guillemets, dans ta propre phrase d’analyse.', 'The trap first takes the shape of a word from the text slipping, without quotation marks, into your own analytical sentence.', ['methode']),
  sent(1111, 'Pour t’en garder, mets le mot cité entre guillemets chaque fois que tu le nommes, et change de mot pour ta propre phrase.', 'To guard against it, put the quoted word between quotation marks every time you name it, and switch to your own word for your own sentence.', ['methode']),
  sent(1112, 'Une phrase d’analyse reste soutenue même quand le texte qu’elle commente ne l’est pas.', 'An analytical sentence stays soutenu even when the text it comments on is not.', ['regle-centrale']),
  sent(1113, 'La règle de cet acte prolonge celle du précédent : le cadre décide, jamais le mot seul.', 'This act’s rule extends the previous one: the frame decides, never the word alone.', ['bilan']),
  sent(1114, 'Six mots, un seul piège répété : croire qu’une analyse réussie autorise un emprunt dans sa propre langue.', 'Six words, one repeated trap: believing a successful analysis licenses a borrowing into one’s own language.', ['bilan']),
  sent(1115, 'Après ce piège, il ne reste qu’une chose à apprendre : écrire soi-même une analyse complète, du début à la fin.', 'After this trap, only one thing remains to learn: writing a complete analysis oneself, start to finish.', ['transition']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. ACT 8 ROWS — Rédiger l’analyse (1116-1131)
 * ══════════════════════════════════════════════════════════════════════════ */

const ACT8_ROWS: Row[] = [
  sent(1116, 'Lucienne Berthoud, soixante-dix-huit ans, locataire depuis 1962, a déclaré qu’elle ne quitterait jamais son appartement.', 'Lucienne Berthoud, seventy eight, a tenant since 1962, declared she would never leave her apartment.', ['modele']),
  sent(1117, '« Même fauchée comme les blés, même si on me propose la lune » : la citation directe garde le mot exact de Madame Berthoud.', '"Even dirt poor, even if they offered me the moon": the direct quotation keeps Madame Berthoud’s exact words.', ['modele']),
  sent(1118, 'Le comité, lui, écrit « pour des raisons personnelles », sans reproduire la formule de Madame Berthoud dans sa propre conclusion.', 'The committee itself writes "for personal reasons," without reproducing Madame Berthoud’s own phrasing in its own conclusion.', ['modele']),
  sent(1119, 'La citation garde la voix vive de Madame Berthoud ; la conclusion, elle, l’efface derrière une formule neutre.', 'The quotation keeps Madame Berthoud’s living voice; the conclusion, by contrast, erases it behind a neutral phrase.', ['modele']),
  sent(1120, 'Nomme d’abord le mot ou la formule argotique citée, puis le cadre qui l’entoure, puis l’effet probable, puis la preuve dans le texte.', 'Name first the quoted slang word or phrase, then its surrounding frame, then its probable effect, then the proof in the text.', ['plan']),
  sent(1121, 'Un rapport administratif qui garde une citation vive, au milieu d’un style par ailleurs neutre, choisit de préserver quelque chose.', 'An administrative report that keeps a vivid quotation, amid an otherwise neutral style, chooses to preserve something.', ['plan']),
  sent(1122, 'Ce que la citation préserve ici, c’est la personnalité et la détermination de Madame Berthoud, contre la froideur de la conclusion.', 'What the quotation preserves here is Madame Berthoud’s personality and determination, against the coldness of the conclusion.', ['plan']),
  sent(1123, 'Une analyse réussie nomme le procédé exact : citation directe, discours indirect libre, ou décalage ironique dans un cadre soutenu.', 'A successful analysis names the exact device: direct quotation, free indirect style, or ironic contrast within a soutenu frame.', ['plan']),
  sent(1124, 'Une analyse réussie justifie toujours son effet par un mot précis du texte, jamais par une impression générale.', 'A successful analysis always justifies its effect with a precise word from the text, never with a general impression.', ['plan']),
  sent(1125, 'Pour Lucienne Berthoud, dénoncer le comité comme froid et bureaucratique serait aller plus loin que ce que le texte prouve réellement.', 'For Lucienne Berthoud, denouncing the committee as cold and bureaucratic would go further than what the text actually proves.', ['scenario-alt']),
  sent(1126, 'Le comité a choisi de garder la citation exacte de Madame Berthoud pour montrer qu’il l’a vraiment écoutée.', 'The committee chose to keep Madame Berthoud’s exact quotation to show it had really listened to her.', ['scenario-reponse']),
  sent(1127, 'La formule fauchée comme les blés reste citée entre guillemets ; une analyse qui la reprendrait sans guillemets commettrait exactement le piège de l’acte précédent.', 'The phrase fauchée comme les blés stays quoted between quotation marks; an analysis that repeated it without quotation marks would commit exactly the previous act’s trap.', ['scenario-alt']),
  phrase(1128, 'la préservation de la voix', 'the preservation of voice', ['vocabulaire']),
  phrase(1129, 'le rapport administratif', 'the administrative report', ['vocabulaire']),
  sent(1130, 'Une mission écrite marque la lecture du procédé et la précision de l’analyse, jamais la gravité du cas de Madame Berthoud elle-même.', 'A written mission marks the reading of the device and the precision of the analysis, never the severity of Madame Berthoud’s situation itself.', ['bilan']),
  sent(1131, 'Un costume que l’auteur choisit pour un personnage reste un costume : à toi de le décrire, jamais de l’enfiler.', 'A costume the author chooses for a character stays a costume: your job is to describe it, never to put it on.', ['bilan']),
];

export const ROWS_BY_ACT: Row[][] = [ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS, ACT8_ROWS];
export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

export const dicteeFor = (act: number): string[] =>
  (ROWS_BY_ACT[act - 1] ?? []).filter((r) => (r.drills as string[]).includes('dictation')).map((r) => r.id);

/** No row is reused from b2.32 in this draft (§B above): every act imports
 *  nothing. Kept as an export so the lesson file’s assembly code is
 *  identical in shape to every other B1+/C1/C2 lesson. */
export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [], act7: [], act8: [],
};
export const IMPORT_IDS: string[] = [...new Set(Object.values(IMPORTED).flat())];

/** Every argotique or wrong-register row (§E) is named but never released:
 *  `SR` drills = {sentence, review}, no flashcard, no voiceflash. Analysis
 *  material, never a speaking or recall target. */
export const NOT_DECK_ABLE: string[] = ALL_ROWS.filter((r) => !(r.drills as string[]).includes('flashcard')).map((r) => r.id);
export const NOT_SPEAKABLE: string[] = [...NOT_DECK_ABLE];
