// c2.11.l1 « Compréhension orale experte » — the authored corpus, the
// imports, the anchor listenings and the citation constants. DRAFT, to
// B1-WORKSHOP-AND-VOCAB-SHAPES.md §1 (the workshop shape, strategy variant)
// on top of B1-BUILD-PLAYBOOK.md, with the C2 rules of C2-BUILD-LOG.md and
// C2-BUILD-PLAN.md's **R** shape definition ("recognition only — never asks
// for production"). The exact successor of b2.25 « Écouter à vitesse réelle »
// and the closest-listening C1 lesson, c1.21 « Débats et entretiens » : same
// file layout, same helpers, same act loop MINUS the production beat, since
// this lesson is R shape (see the lesson file header for what that removes).
//
// DRAFT. Nothing here is imported into Postgres or merged into seed.json.
// NOT a seed/Postgres row is reused by id anywhere in this file: b2.25 and
// c1.21 are cited by TRAIL POSITION ONLY (in words, per the house rule). Their
// REFRAME constants are re-exported by name below (§D) straight from each
// lesson's own corpus file, never retyped. REFRAME_REJECTED (§E) separately
// quotes both reframe SENTENCES by hand, for its own why-rejected notes only
// (a stable re-export cannot be read as a local value inside this same
// file); both were read from the source before this file was written, with
// this file's own curly-apostrophe house rule applied (c1.21's own REFRAME
// constant still has a straight one; not fixed here, out of this file's
// scope). No other row from either lesson is quoted, so nothing here
// depends on a guess at unread text.
//
// STABLE EXPORTS (do not rename; a later lesson may quote the reframe):
// REFRAME, REFRAME_EN, UNIT, LESSON_ID, THEME, LEVEL, E, ALL_ROWS.
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS
// ══════════════════════════════════════════════════════════════════════════
//
//   LISTENING UNDER STACKED, REALISTIC INTERFERENCE, RECOGNITION ONLY. b2.25
//   taught following natural speed for structure and stance; c1.21 taught
//   following three voices and a moderator, cleanly recorded. Both handled
//   ONE difficulty at a time. c2.11 stacks several real obstacles onto that
//   same structure-and-stance task, and NEVER asks the learner to produce a
//   word of French, spoken or written: every mission here is spot, map,
//   understand.
//
//     le signal / le bruit   the governing metaphor: what b2.25 and c1.21
//                             already taught to find (the frame, the dividing
//                             line) is the SIGNAL; four new obstacles are the
//                             BRUIT that sits on top of it
//     le chevauchement       two speakers overlapping: who resumes, which
//                             idea survives, reading the host's recadrage
//     le registre            a mid-exchange register shift read as an
//                             attitude change (footing, distance, authority),
//                             never as noise or confusion
//     la variante             regional vocabulary and accent, received only:
//                             Québec, Belgique/Suisse, Afrique de l'Ouest,
//                             resolved from context, never derailing
//                             comprehension
//     la panne               degraded audio: a dropped word, competing
//                             background noise, a weak or variable signal,
//                             each with its own repair
//     le triage               combining every strategy above in ONE passage:
//                             naming which obstacle is active before fixing it
//     l'épreuve experte       DALF C2 / TCF / TEF style listening under these
//                             stacked conditions, once-only, MCQ only
//
//   NOT OWNED, CITED ONLY:
//     - b2.25 owns natural-speed listening for the announced plan, notes as a
//       frame, positions, turn-taking, concession/doubt/irony, fact vs claim,
//       the polite no and recovering after a missed chunk, all at a CLEAN
//       recording. Cited by trail position only ("la leçon 25 du B2"),
//       recapped in act 1 and the roundup, never re-taught.
//     - c1.21 owns three-voice debates and moderation, agreement before
//       disagreement, C1 concession formulas and their scope, a narrowed
//       claim, answering an objection, analogy and allusion in context, all
//       at a CLEAN recording. Cited by trail position only ("la leçon 21 du
//       C1"), recapped in act 1 and the roundup, never re-taught.
//     - producing a spoken or written reply belongs to no lesson in this
//       file: the band's oral PRODUCTION lessons are c2.08/c2.09, and C2's
//       reading twin to this lesson (dense, unsimplified academic text) is
//       c2.12, the next R-shape lesson, cited forward in the roundup only.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. MEASURED, DRAFT-ONLY — no seed/DB read, by design (see the file-head
//      note on why no predecessor row is reused by id)
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THEME `strategies-de-comprehension` (b1-c2 after the widen recorded in
//     C2-RESEARCH-PLAN.md's c2.11 section, read-back verified). The
//     sub-theme for these rows, « compréhension orale experte », is NEW and
//     must be ADDED to the theme's sub_themes at import.
//
//  2. ID BLOCK: `fr.c2.strategies-de-comprehension.2200`-`.2399`, assigned by
//     C2-BUILD-PLAN.md / C2-RESEARCH-PLAN.md. `.2400`-`.2599` belongs to
//     c2.12 (not touched here). Used: `.2200`-`.2325`, 126 rows, no gaps
//     (§G).
//
//  3. THE ANCHOR LISTENINGS ARE AUTHORED, NOT QUOTED, and they are NOT all
//     corpus rows, exactly as b2.25 and c1.21 built theirs: a recording here
//     is 30 seconds to 2 minutes of natural speech; its lines are 10 to 30
//     words of connected talk, which make poor flashcards. Each anchor is a
//     list of LINES (§I) in which the lines that carry the act's move ARE
//     corpus rows, and the connecting talk is free text owned by this file.
//     Every event, name, station, show and company is invented. Real places
//     are used only as places.
//
//  4. WRITTEN FOR TTS TODAY, REAL VOICES NEEDED FOR THE WHOLE POINT OF THE
//     LESSON. Every line is spoken by one fr-FR TTS voice until the studio
//     delivers. That is a real gap here specifically, more than in any prior
//     listening lesson: this lesson's entire premise is MULTIPLE DISTINCT
//     VOICES overlapping and FIVE DIFFERENT REGIONAL ACCENTS (France, Québec,
//     Belgique, Suisse, Afrique de l'Ouest), and ElevenLabs voice
//     availability for stacked/overlapping audio and for distinct regional
//     accents is UNCONFIRMED at authoring time. Every REC_DESC in the lesson
//     file names its required voices and accents; the acts that depend on it
//     MOST are named explicitly in the build report (acts 2, 6, 8 and 9).
//     Until real voices land, the words alone must carry the content, which
//     is why no anchor's questions depend on actually HEARING an accent or
//     an overlap rather than reasoning about what the lines, once resolved,
//     must mean. This keeps the lesson usable on TTS and strictly better on
//     real voices, same posture as b2.25 and c1.21.
//
//  5. RESPELLINGS. Hyphenated syllables, the last stressed syllable of each
//     breath group in caps, ü for French u, nasals closed with ⁿ, no U+203F
//     tie. A pipe `|` marks a breath group inside a longer line.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../../ealch-v2/src/content/schema.ts';

/** A citation that OPENS a sentence needs a capital. */
export function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. IDENTITY
 * ══════════════════════════════════════════════════════════════════════════ */

export const UNIT = {
  id: 'c2.11',
  seq: 11,
  title: 'Expert Listening Comprehension',
  sub: 'Compréhension orale experte',
  canDo: 'Can follow natural, unscripted French when several real obstacles stack at once, overlapping speakers, a mid-exchange register shift, an unfamiliar regional accent (Québec, Belgique, Suisse, Afrique de l\'Ouest), and degraded audio (static, a dropped word, competing background noise), extracting who said what, each one\'s position, and the information that survives the interference, without ever producing a spoken or written response',
  prereqUnitIds: ['b2.25', 'c1.21'],
} as const;

export const LESSON_ID = 'c2.11.l1';
export const THEME = 'strategies-de-comprehension';
export const LEVEL = 'c2' as const;

/** ONE block, assigned by the orchestrator. */
export const ID_RANGES = [[2200, 2399]] as const;

export const E = (n: number) => `fr.${LEVEL}.${THEME}.${String(n).padStart(3, '0')}`;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. HOW THIS LESSON NAMES ITS NEIGHBOURS
 *
 *  By trail position, in French words (« la leçon 25 du B2 »), never a raw
 *  unit id, per the house rule for this lesson's brief.
 * ══════════════════════════════════════════════════════════════════════════ */

export const ECOUTE_B2_UNIT = 'b2.25';
export const DEBATS_C1_UNIT = 'c1.21';

const SEQ_FROM_PLAN: Record<string, number> = { 'b2.25': 25, 'c1.21': 21, 'c2.12': 12 };
export function refFr(unitId: string): string {
  const n = SEQ_FROM_PLAN[unitId];
  if (!n) throw new Error(`c2.11: no trail position for ${unitId}`);
  return `la leçon ${n} du ${unitId.slice(0, 2).toUpperCase()}`;
}

export const ECOUTE_B2_REF = refFr('b2.25');
export const DEBATS_C1_REF = refFr('c1.21');
export const LECTURE_C2_REF = refFr('c2.12');

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. THE QUOTATIONS, IMPORTED, never retyped. Both strings were read
 *  verbatim from their own corpus file before this file was written.
 * ══════════════════════════════════════════════════════════════════════════ */

export { REFRAME as B225_REFRAME, REFRAME_EN as B225_REFRAME_EN } from '../b2/ecoute-vitesse-reelle-corpus.ts';
export { REFRAME as C121_REFRAME, REFRAME_EN as C121_REFRAME_EN } from '../c1/debats-entretiens-corpus.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE REFRAME AND THE ONE METAPHOR
 *
 *  THE SIGNAL, IN THE BRUIT. b2.25 taught finding the frame (the plan, the
 *  positions, the tone) at natural speed. c1.21 taught finding the dividing
 *  line between close voices, cleanly recorded. Both are, from here, THE
 *  SIGNAL: the thing worth keeping. c2.11 does not re-teach how to find it;
 *  it teaches finding it THROUGH four kinds of bruit that a real recording
 *  adds on top: two voices at once, a register that shifts mid-exchange, an
 *  accent or a regional word the learner has never met, and audio that is
 *  itself damaged. Act 8 stacks more than one bruit in the same passage,
 *  which is the lesson's reason to exist (its brief's exact ask).
 *
 *  It is NOT « ignore the noise ». The noise carries information too (a
 *  register shift IS the content, in act 3); the reframe says to keep
 *  reaching for the signal underneath it, never to give up and guess.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REFRAME = 'Cherche le signal, même dans le bruit.';
export const REFRAME_EN = 'Look for the signal, even in the noise.';

export const REFRAME_REJECTED: readonly { text: string; why: string }[] = [
  {
    text: 'Écoute la charpente : le plan, les positions, le ton.',
    why: "b2.25's reframe, quoted here verbatim (not a live import; see the file-head note). Still true at C2, but it assumes a clean recording: it says nothing about what to do when two voices sit on top of each other, or when the signal itself is damaged. c2.11 keeps it as the SIGNAL, not the lesson's own rule.",
  },
  {
    text: 'Trouve la ligne de partage : ce que chacun accorde, ce qu’il refuse.',
    why: "c1.21's reframe, quoted here verbatim (not a live import; see the file-head note). Same problem: it names what to listen FOR, not what stands between the learner and hearing it at C2. Also kept as part of the signal, not restated as new.",
  },
  {
    text: 'Ignore le bruit.',
    why: 'False, and dangerous as a rule: act 3 shows a register shift that IS the content (an attitude change, not interference), and ignoring it would drop the one thing the act asks the learner to notice. Noise is identified and routed, never simply discarded.',
  },
  {
    text: 'Devine le mot qui manque.',
    why: "Covers act 7 (degraded audio) only, and invites exactly the error trigger this lesson flags: guessing a plausible word that fits the silence instead of the one the context actually supports. The reframe keeps 'signal', which the learner must still VERIFY, not invent.",
  },
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. NO IMPORTS. This lesson reuses no seed or Postgres row by id (file-
 *  head note). The constants below exist only so the lesson file's helper
 *  shape matches every other C2 lesson's, with empty content.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED: Record<string, string[]> = {
  act1: [], act2: [], act3: [], act4: [], act5: [], act6: [], act7: [], act8: [], act9: [],
};
export const IMPORT_IDS: string[] = [];
export const NOT_DECK_ABLE: string[] = [];
export const NOT_SPEAKABLE: string[] = [];

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE AUTHORED ROWS, ONE BLOCK PER ACT
 * ══════════════════════════════════════════════════════════════════════════ */

type Row = Item;

const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];

const sent = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'sentence', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, grammarPoints: ['ecoute-experte'], ...extra,
});

const phrase = (
  n: number, fr: string, en: string, ipa: string, respell: string, tags: string[],
  drills: Item['drills'] = FCVR, extra: Partial<Item> = {},
): Row => ({
  id: E(n), kind: 'phrase', level: LEVEL, theme: THEME, fr, en, ipa, respell,
  tags, drills, version: 1, ...extra,
});

/** A rule card: `prompt` is the question, `fr` the rule. */
const rule = (prompt: string, notes: string): Partial<Item> => ({ cardType: 'grammar', prompt, notes });

/* ── ACT 1 · LE SIGNAL PERDU ─────────────────────────────────────────────── */

export const ACT1_ROWS: Row[] = [
  sent(2200, 'Cherche le signal, même dans le bruit.', REFRAME_EN, '/ʃɛʁʃ lə si.ɡnal mɛm dɑ̃ lə bʁɥi/', 'shehrsh luh see-NYAL | mem dahⁿ luh BRWEE', ['rule', 'reframe'], ['flashcard'],
    rule('Deux voix, un accent inconnu, une ligne qui crépite. Que cherches-tu ?', 'Le signal que tu sais déjà entendre (le plan, la position), même déformé par le bruit. Le bruit se trie, il ne se devine pas.')),
  sent(2201, 'Je n’écoute plus des mots, j’écoute un signal dans du bruit.', 'I’m no longer listening for words, I’m listening for a signal inside noise.', '/ʒə nekut ply de mo ʒekut œ̃ si.ɡnal dɑ̃ dy bʁɥi/', 'zhuh nay-KOOT plü day MOH | zhay-koot uhⁿ see-NYAL dahⁿ dü BRWEE', ['strategie']),
  sent(2202, 'Le bruit a quatre visages : les voix qui se chevauchent, le registre qui change, l’accent qui surprend, le son qui s’abîme.', 'Noise wears four faces: overlapping voices, a shifting register, a surprising accent, sound that degrades.', '/lə bʁɥi a katʁ vi.zaʒ le vwa ki sə ʃə.vɔʃ lə ʁə.ʒistʁ ki ʃɑ̃ʒ lak.sɑ̃ ki syʁ.pʁɑ̃ lə sɔ̃ ki sa.bim/', 'luh brwee a katr vee-ZAZH | lay VWA kee suh shuh-VOSH | luh ruh-ZHEESTR kee SHAHⁿZH | lak-SAHⁿ kee sür-PRAHⁿ | luh SOHⁿ kee sa-BEEM', ['rule']),
  sent(2203, 'À ce niveau, le problème n’est plus un obstacle à la fois, mais plusieurs en même temps.', 'At this level, the problem is no longer one obstacle at a time, but several at once.', '/a sə ni.vo lə pʁɔ.blɛm nɛ ply.zœ̃.nɔps.takl a la fwa mɛ ply.zjœʁ ɑ̃ mɛm tɑ̃/', 'a suh nee-VOH | luh pro-BLEM neh plü-zuhⁿ-nop-STAKL a la FWA | meh plü-ZYEUR ahⁿ mem TAHⁿ', ['strategie']),
  sent(2204, 'J’avais déjà la charpente et la ligne de partage ; ici, je dois les retrouver à travers le bruit.', 'I already had the frame and the dividing line; here, I have to find them again through the noise.', '/ʒa.vɛ de.ʒa la ʃaʁ.pɑ̃t e la liɲ də paʁ.taʒ i.si ʒə dwa le ʁə.tʁu.ve a tʁa.vɛʁ lə bʁɥi/', 'zha-veh day-ZHA la shar-PAHⁿT | ay la LEENY duh par-TAZH | ee-SEE | zhuh dwa luh ruh-troo-VAY a tra-VEHR luh BRWEE', ['strategie', 'recap']),
  sent(2205, 'Un signal reste un signal, même mal transmis.', 'A signal stays a signal, even transmitted badly.', '/œ̃ si.ɡnal ʁɛst œ̃ si.ɡnal mɛm mal tʁɑ̃z.mi/', 'uhⁿ see-NYAL rest uhⁿ see-NYAL | mem mal trahⁿz-MEE', ['strategie']),
  phrase(2206, 'un signal', 'a signal (the useful part of a recording)', '/œ̃ si.ɡnal/', 'uhⁿ see-NYAL', ['vocab']),
  phrase(2207, 'du bruit', 'noise, interference', '/dy bʁɥi/', 'dü BRWEE', ['vocab']),
  sent(2208, 'Je repère d’abord quel bruit me gêne, avant de chercher à le réparer.', 'I work out which noise is in my way before I try to fix it.', '/ʒə ʁə.pɛʁ dabɔʁ kɛl bʁɥi mə ʒɛn avɑ̃ də ʃɛʁ.ʃe a lə ʁe.pa.ʁe/', 'zhuh ruh-PEHR da-BOR kel BRWEE muh ZHEN | a-vahⁿ duh shehr-SHAY a luh ray-pa-RAY', ['rule', 'triage'], ['flashcard'],
    rule('Quatre bruits possibles, une seule minute pour écouter. Par quoi commences-tu ?', 'Tu nommes le bruit avant de le réparer : un chevauchement se traite autrement qu’une coupure.')),
  sent(2209, 'Perdre un mot n’est pas perdre le signal.', 'Losing a word isn’t losing the signal.', '/pɛʁdʁ œ̃ mo nɛ pa pɛʁdʁ lə si.ɡnal/', 'pehrdr uhⁿ MOH | neh pa pehrdr luh see-NYAL', ['strategie']),
];

export const SIGNAL_LINES: { fr: string; en: string }[] = [
  { fr: 'Bonsoir, bienvenue à Fréquence Monde. Ce soir, le télétravail transfrontalier, avec un auditeur de Genève en ligne.', en: 'Good evening, welcome to Fréquence Monde. Tonight, cross-border remote work, with a listener from Geneva on the line.' },
  { fr: 'Bonsoir. Chez nous, le télétravail a changé le marché : les loyers ont grimpé de nonante pour cent en dix ans, dans certains quartiers.', en: 'Good evening. Where I live, remote work has changed the market: rents have gone up ninety per cent in ten years, in some neighbourhoods.' },
  { fr: 'Nonante pour cent, c’est énorme, et dans le canton de Vaud particulièrement.', en: 'Ninety per cent, that’s huge, and in the canton of Vaud especially.' },
  { fr: 'Exactement, et ça pousse les gens vers la France voisine.', en: 'Exactly, and it’s pushing people toward neighbouring France.' },
  { fr: 'On reviendra sur ces chiffres avec notre invitée, dans un instant.', en: 'We’ll come back to these figures with our guest, in a moment.' },
  { fr: 'Il faut dire aussi que le réseau n’est pas toujours bon depuis mon bureau, alors coupez-moi si ça grésille.', en: 'I should also say the network isn’t always great from my office, so cut me off if it crackles.' },
  { fr: 'Pas de souci, on vous entend bien pour l’instant.', en: 'No worries, we can hear you fine for now.' },
];

/* ── ACT 2 · DEUX VOIX À LA FOIS ─────────────────────────────────────────── */

export const ACT2_ROWS: Row[] = [
  sent(2210, 'Deux personnes qui parlent en même temps ne disent pas deux fois rien.', 'Two people talking at once aren’t both saying nothing.', '/dø pɛʁ.sɔn ki paʁl ɑ̃ mɛm tɑ̃ nə diz pa dø fwa ʁjɛ̃/', 'deu pehr-SON kee parl ahⁿ mem TAHⁿ | nuh deez pa deu fwa RYEHⁿ', ['rule', 'chevauchement'], ['flashcard'],
    rule('Deux invités parlent en même temps. Que fais-tu ?', 'Tu gardes le fil des deux, et tu attends que l’animateur relance l’un d’eux : c’est lui qui te dit lequel reprend.')),
  sent(2211, 'Les deux voix se chevauchent une seconde, puis l’une reprend seule.', 'The two voices overlap for a second, then one carries on alone.', '/le dø vwa sə ʃə.voʃ yn sə.ɡɔ̃d pɥi lyn ʁə.pʁɑ̃ sœl/', 'lay deu VWA | suh shuh-VOSH ün suh-GOHⁿD | pwee lün ruh-PRAHⁿ SEUL', ['chevauchement']),
  sent(2212, 'Celui qui hausse le ton garde rarement la parole plus longtemps.', 'The one who raises their voice rarely keeps the floor for much longer.', '/sə.lɥi ki os lə tɔ̃ ɡaʁd ʁaʁ.mɑ̃ la pa.ʁɔl ply lɔ̃.tɑ̃/', 'suh-LWEE kee ohs luh TOHⁿ | gard rar-MAHⁿ la pa-ROL plü lohⁿ-TAHⁿ', ['chevauchement']),
  phrase(2213, 'le chevauchement', 'the overlap (of two voices)', '/lə ʃə.voʃ.mɑ̃/', 'luh shuh-vosh-MAHⁿ', ['vocab']),
  sent(2214, 'L’animateur répète la question pour remettre chacun sur une seule piste.', 'The host repeats the question to put everyone back on a single track.', '/la.ni.ma.tœʁ ʁe.pɛt la kɛs.tjɔ̃ puʁ ʁə.mɛtʁ ʃa.kœ̃ syʁ yn sœl pist/', 'la-nee-ma-TEUR ray-PET la kes-TYOHⁿ | poor ruh-METR sha-kuhⁿ sür ün seul PEEST', ['chevauchement']),
  sent(2215, 'Comme je le disais avant d’être interrompu.', 'As I was saying before I was interrupted.', '/kɔm ʒə lə di.zɛ avɑ̃ dɛtʁ ɛ̃.tɛ.ʁɔ̃.py/', 'kom zhuh luh dee-ZEH | a-vahⁿ detr ehⁿ-tay-rohⁿ-PÜ', ['chevauchement']),
  sent(2216, 'Deux voix en même temps, deux idées à suivre, pas une bouillie.', 'Two voices at once, two ideas to follow, not a blur.', '/dø vwa ɑ̃ mɛm tɑ̃ dø i.de a sɥivʁ pa yn bu.ji/', 'deu VWA ahⁿ mem TAHⁿ | deu ee-DAY a SWEEVR | pa ün boo-YEE', ['chevauchement']),
  sent(2217, 'Je laisse la seconde voix de côté sans l’effacer : elle reviendra.', 'I set the second voice aside without erasing it: it will come back.', '/ʒə lɛs la sə.ɡɔ̃d vwa də ko.te sɑ̃ le.fa.se ɛl ʁə.vjɛ̃.dʁa/', 'zhuh less la suh-GOHⁿD vwa duh ko-TAY | sahⁿ lay-fa-SAY | el ruh-vyehⁿ-DRA', ['strategie']),
  sent(2218, 'Le silence d’une seconde, après un chevauchement, annonce souvent une reprise.', 'A second of silence, after an overlap, often signals a resumption.', '/lə si.lɑ̃s dyn sə.ɡɔ̃d a.pʁɛ œ̃ ʃə.voʃ.mɑ̃ a.nɔ̃s su.vɑ̃ yn ʁə.pʁiz/', 'luh see-LAHⁿS dün suh-GOHⁿD | a-preh uhⁿ shuh-vosh-MAHⁿ | a-nohⁿs soo-VAHⁿ ün ruh-PREEZ', ['chevauchement']),
  phrase(2219, 'reprendre son idée', 'to pick one’s idea back up', '/ʁə.pʁɑ̃dʁ sɔ̃.ni.de/', 'ruh-PRAHⁿDR sohⁿ-nee-DAY', ['vocab']),
  sent(2220, 'Dans le brouhaha, le prénom que l’animateur lance te dit qui va parler.', 'In the hubbub, the first name the host throws out tells you who’s about to speak.', '/dɑ̃ lə bʁu.a.a lə pʁe.nɔ̃ kə la.ni.ma.tœʁ lɑ̃s tə di ki va paʁ.le/', 'dahⁿ luh broo-a-AH | luh pray-NOHⁿ kuh la-nee-ma-teur LAHⁿS | tuh dee kee va par-LAY', ['chevauchement']),
  sent(2221, 'Deux phrases collées ne sont presque jamais la même idée.', 'Two sentences stuck together are almost never the same idea.', '/dø fʁaz kɔ.le nə sɔ̃ pʁɛsk ʒa.mɛ la mɛm i.de/', 'deu FRAHZ ko-LAY | nuh sohⁿ presk zha-MEH la mem ee-DAY', ['strategie']),
  sent(2222, 'Je note les deux positions séparément, même si je les ai entendues ensemble.', 'I note both positions separately, even if I heard them together.', '/ʒə nɔt le dø po.zi.sjɔ̃ se.pa.ʁe.mɑ̃ mɛm si ʒə le.ze ɑ̃.tɑ̃.dy ɑ̃.sɑ̃bl/', 'zhuh not lay deu po-zee-SYOHⁿ say-pa-ray-MAHⁿ | mem see zhuh lay-zahⁿ-tahⁿ-DÜ ahⁿ-SAHⁿBL', ['notes']),
  sent(2223, 'Le chevauchement cache une idée, il ne l’efface pas.', 'An overlap hides an idea, it doesn’t erase it.', '/lə ʃə.voʃ.mɑ̃ kaʃ yn i.de il nə le.fas pa/', 'luh shuh-vosh-MAHⁿ kash ün ee-DAY | eel nuh lay-FASS pa', ['chevauchement']),
];

export const PANEL_LINES: { fr: string; en: string }[] = [
  { fr: 'Bonsoir à tous, ce soir on parle du plafonnement des loyers, avec Camille Aznar et Bertrand Soler.', en: 'Good evening everyone, tonight we’re talking about rent caps, with Camille Aznar and Bertrand Soler.' },
  { fr: 'Dans mon quartier, trois familles sur dix ont déjà dû partir cette année.', en: 'In my neighbourhood, three families out of ten have already had to leave this year.' },
  { fr: 'Ça, c’est faux, les chiffres de la préfecture disent autre chose.', en: 'That’s not true, the prefecture’s figures say something else.' },
  { fr: 'Et ce n’est pas un hasard si les loyers ont grimpé de vingt pour cent.', en: 'And it’s no coincidence that rents have gone up twenty per cent.' },
  { fr: 'Attendez, attendez, un instant chacun. Bertrand, vous disiez ?', en: 'Wait, wait, one moment each. Bertrand, you were saying?' },
  { fr: 'Je disais que les chiffres de la préfecture parlent d’une hausse de huit pour cent, pas vingt.', en: 'I was saying that the prefecture’s figures talk about an eight per cent rise, not twenty.' },
  { fr: 'Huit pour cent sur le papier, mais les petites annonces racontent une autre histoire.', en: 'Eight per cent on paper, but the classified ads tell a different story.' },
  { fr: 'Et ça, c’est justement ce qu’on va vérifier après la pause.', en: 'And that’s exactly what we’ll check after the break.' },
];

/* ── ACT 3 · LE REGISTRE QUI BASCULE ─────────────────────────────────────── */

export const ACT3_ROWS: Row[] = [
  sent(2224, 'Un registre qui change n’est pas un bruit à ignorer : c’est souvent le message.', 'A register that shifts isn’t noise to ignore: it’s often the message itself.', '/œ̃ ʁə.ʒistʁ ki ʃɑ̃ʒ nɛ pa œ̃ bʁɥi a i.ɲɔ.ʁe sɛ su.vɑ̃ lə mɛ.saʒ/', 'uhⁿ ruh-ZHEESTR kee SHAHⁿZH | neh pa uhⁿ brwee a ee-nyo-RAY | seh soo-vahⁿ luh may-SAZH', ['rule', 'registre'], ['flashcard'],
    rule('Un interlocuteur très soutenu bascule soudain vers le familier. Que fais-tu ?', 'Tu ne cherches pas une faute de français : tu cherches ce que ce changement signale, une émotion le plus souvent.')),
  sent(2225, 'Le notaire garde le vouvoiement ; le locataire glisse vers le tutoiement quand il s’énerve.', 'The notary keeps using vous; the tenant slides into tu when he gets annoyed.', '/lə nɔ.tɛʁ ɡaʁd lə vu.vwa.jə.mɑ̃ lə lɔ.ka.tɛʁ ɡlis vɛʁ lə ty.twa.jə.mɑ̃ kɑ̃.til se.nɛʁv/', 'luh no-TEHR gard luh voo-vwa-yuh-MAHⁿ | luh lo-ka-TEHR gleess vehr luh tü-twa-yuh-MAHⁿ | kahⁿ-teel say-NEHRV', ['registre']),
  sent(2226, 'Un même mot, dit en soutenu puis en familier, ne dit pas tout à fait la même chose.', 'The same word, said formally and then casually, doesn’t quite mean the same thing.', '/œ̃ mɛm mo di ɑ̃ sut.ny pɥi ɑ̃ fa.mi.lje nə di pa tu.ta.fɛ la mɛm ʃoz/', 'uhⁿ mem MOH | dee ahⁿ soot-NÜ pwee ahⁿ fa-mee-LYAY | nuh dee pa too-ta-FEH la mem SHOHZ', ['registre']),
  phrase(2227, 'changer de registre', 'to shift register', '/ʃɑ̃.ʒe də ʁə.ʒistʁ/', 'shahⁿ-ZHAY duh ruh-ZHEESTR', ['vocab']),
  sent(2228, 'Le passage au familier signale souvent une colère contenue, pas un relâchement innocent.', 'The shift to informal speech often signals contained anger, not an innocent lapse.', '/lə pa.saʒ o fa.mi.lje si.ɲal su.vɑ̃ yn ko.lɛʁ kɔ̃.tə.ny pa œ̃.ʁə.la.ʃə.mɑ̃ i.nɔ.sɑ̃/', 'luh pa-SAZH oh fa-mee-LYAY | see-NYAL soo-vahⁿ ün ko-LEHR kohⁿ-tuh-NÜ | pa uhⁿ-ruh-la-shuh-mahⁿ ee-no-SAHⁿ', ['registre']),
  sent(2229, 'Le vouvoiement qui revient, après le tutoiement, referme la distance qu’on venait d’ouvrir.', 'The return of vous, after tu, closes the distance that had just opened up.', '/lə vu.vwa.jə.mɑ̃ ki ʁə.vjɛ̃ a.pʁɛ lə ty.twa.jə.mɑ̃ ʁə.fɛʁm la dis.tɑ̃s kɔ̃ və.nɛ du.vʁiʁ/', 'luh voo-vwa-yuh-MAHⁿ kee ruh-VYEHⁿ | a-preh luh tü-twa-yuh-MAHⁿ | ruh-FEHRM la dees-TAHⁿS | kohⁿ vuh-neh doo-VREER', ['registre']),
  sent(2230, 'Je n’entends pas une confusion : j’entends un changement de posture.', 'I’m not hearing confusion: I’m hearing a change of stance.', '/ʒə nɑ̃.tɑ̃ pa yn kɔ̃.fy.zjɔ̃ ʒɑ̃.tɑ̃ œ̃ ʃɑ̃ʒ.mɑ̃ də pɔs.tyʁ/', 'zhuh nahⁿ-tahⁿ pa ün kohⁿ-fü-ZYOHⁿ | zhahⁿ-tahⁿ uhⁿ shahⁿzh-MAHⁿ duh post-ÜR', ['strategie']),
  phrase(2231, 'reprendre ses distances', 'to put some distance back (in a conversation)', '/ʁə.pʁɑ̃dʁ se dis.tɑ̃s/', 'ruh-PRAHⁿDR say dees-TAHⁿS', ['vocab']),
  sent(2232, 'Au téléphone, le registre soutenu protège celui qui le garde.', 'On the phone, a formal register protects whoever keeps it up.', '/o te.le.fɔn lə ʁə.ʒistʁ sut.ny pʁɔ.tɛʒ sə.lɥi ki lə ɡaʁd/', 'oh tay-lay-FON | luh ruh-ZHEESTR soot-NÜ pro-TEZH suh-LWEE kee luh GARD', ['registre']),
  sent(2233, 'Un registre familier, chez un professionnel, est rarement un hasard.', 'An informal register, from a professional, is rarely an accident.', '/œ̃ ʁə.ʒistʁ fa.mi.lje ʃe.zœ̃ pʁɔ.fɛ.sjɔ.nɛl ɛ ʁaʁ.mɑ̃ œ̃.na.zaʁ/', 'uhⁿ ruh-ZHEESTR fa-mee-LYAY | shay-zuhⁿ pro-fes-yo-NEL | eh rar-MAHⁿ uhⁿ-na-ZAR', ['registre']),
  sent(2234, 'Le même dossier, raconté en soutenu, puis en argot, cache deux versions d’une même colère.', 'The same file, told formally, then in slang, hides two versions of the same anger.', '/lə mɛm dɔ.sje ʁa.kɔ̃.te ɑ̃ sut.ny pɥi ɑ̃.naʁ.ɡo kaʃ dø vɛʁ.sjɔ̃ dyn mɛm ko.lɛʁ/', 'luh mem do-SYAY | ra-kohⁿ-TAY ahⁿ soot-NÜ | pwee ahⁿ-nar-GOH | kash deu vehr-SYOHⁿ dün mem ko-LEHR', ['registre']),
  sent(2235, 'Je repère la bascule, puis je me demande ce qu’elle signale.', 'I spot the shift, then I ask myself what it signals.', '/ʒə ʁə.pɛʁ la bas.kyl pɥi ʒə mə də.mɑ̃d sə kɛl si.ɲal/', 'zhuh ruh-PEHR la bas-KÜL | pwee zhuh muh duh-MAHⁿD suh kel see-NYAL', ['strategie']),
  sent(2236, 'Entre deux voix d’un même métier, le registre dit souvent qui domine l’échange.', 'Between two voices in the same profession, register often says who controls the exchange.', '/ɑ̃tʁ dø vwa dœ̃ mɛm me.tje lə ʁə.ʒistʁ di su.vɑ̃ ki dɔ.min le.ʃɑ̃ʒ/', 'ahⁿtr deu VWA duhⁿ mem may-TYAY | luh ruh-ZHEESTR dee soo-vahⁿ kee do-MEEN lay-SHAHⁿZH', ['registre']),
  sent(2237, 'Un registre très soutenu, soudain, referme une porte que le familier avait ouverte.', 'A suddenly very formal register closes a door that informality had opened.', '/œ̃ ʁə.ʒistʁ tʁɛ sut.ny su.dɛ̃ ʁə.fɛʁm yn pɔʁt kə lə fa.mi.lje a.vɛ u.vɛʁt/', 'uhⁿ ruh-ZHEESTR treh soot-NÜ | soo-DEHⁿ | ruh-FEHRM ün PORT kuh luh fa-mee-LYAY a-veh oo-VEHRT', ['registre']),
];

export const MEDIATION_LINES: { fr: string; en: string }[] = [
  { fr: 'Monsieur Rouillon, je vous rappelle que le bail stipule un préavis de trois mois.', en: 'Monsieur Rouillon, I remind you that the lease requires three months’ notice.' },
  { fr: 'Oui, je sais, mais trois mois, c’est franchement n’importe quoi, j’ai pas le temps pour ça.', en: 'Yes, I know, but three months is frankly ridiculous, I don’t have time for that.' },
  { fr: 'Je comprends votre position, cela dit la clause reste valable.', en: 'I understand your position, that said the clause still stands.' },
  { fr: 'Ça m’énerve, cette histoire de clause, on dirait que vous cherchez juste à m’embêter.', en: 'This clause business annoys me, it’s like you’re just trying to bother me.' },
  { fr: 'Ce n’est absolument pas mon intention, croyez-moi.', en: 'That is absolutely not my intention, believe me.' },
  { fr: 'Excusez-moi, je me suis emporté. Pourriez-vous, s’il vous plaît, regarder s’il existe une exception pour un déménagement professionnel.', en: 'Sorry, I got carried away. Could you please check whether there is an exception for a job relocation.' },
  { fr: 'Oui, tout à fait, laissez-moi vérifier ce point avec le service juridique.', en: 'Yes, absolutely, let me check that point with the legal department.' },
];

/* ── ACT 4 · DES MOTS D’AILLEURS : LE QUÉBEC ─────────────────────────────── */

export const ACT4_ROWS: Row[] = [
  sent(2238, 'Au Québec, dîner, c’est le midi ; souper, c’est le soir.', 'In Québec, dîner means lunch; souper means dinner.', '/o ke.bɛk di.ne sɛ lə mi.di su.pe sɛ lə swaʁ/', 'oh kay-BEK | dee-NAY seh luh mee-DEE | soo-PAY seh luh SWAR', ['rule', 'variante', 'quebec'], ['flashcard'],
    rule('Un Québécois vous invite à « dîner ». À quelle heure arrivez-vous ?', 'Vers midi : au Québec, dîner et souper désignent le repas de midi et celui du soir, pas déjeuner et dîner comme en France.')),
  sent(2239, 'Faque, on a décidé de reporter la réunion.', 'So, we decided to put the meeting off.', '/fak ɔ̃.na de.si.de də ʁə.pɔʁ.te la ʁe.y.njɔ̃/', 'FAK | ohⁿ-na day-see-DAY duh ruh-por-TAY la ray-ü-NYOHⁿ', ['variante', 'quebec']),
  phrase(2240, 'pantoute', 'not at all (Québécois)', '/pɑ̃.tut/', 'pahⁿ-TOOT', ['variante', 'quebec']),
  sent(2241, 'C’est pas pantoute ce que je voulais dire.', 'That’s not at all what I meant.', '/sɛ pa pɑ̃.tut sə kə ʒə vu.lɛ diʁ/', 'seh pa pahⁿ-TOOT | suh kuh zhuh voo-leh DEER', ['variante', 'quebec']),
  phrase(2242, 'là là', 'right now, really (emphatic tag, Québécois)', '/la la/', 'la LA', ['variante', 'quebec']),
  sent(2243, 'Faut que je parte, là là.', 'I really have to go, right now.', '/fo kə ʒə paʁt la la/', 'foh kuh zhuh PART | la LA', ['variante', 'quebec']),
  phrase(2244, 'un breuvage', 'a beverage (any drink, Québécois)', '/œ̃ bʁœ.vaʒ/', 'uhⁿ breu-VAZH', ['variante', 'quebec']),
  sent(2245, 'Le cellulaire sonne depuis cinq minutes, là.', 'The cellphone’s been ringing for five minutes now.', '/lə sɛ.ly.lɛʁ sɔn də.pɥi sɛ̃k mi.nyt la/', 'luh sel-ü-LEHR son | duh-pwee sehⁿk mee-nüt LA', ['variante', 'quebec']),
  sent(2246, 'C’est correct, on réglera ça la semaine prochaine.', 'It’s fine, we’ll sort that out next week.', '/sɛ kɔ.ʁɛkt ɔ̃ ʁe.ɡlə.ʁa sa la sə.mɛn pʁɔ.ʃɛn/', 'seh ko-REKT | ohⁿ ray-gluh-RA sa la suh-mehn pro-SHEN', ['variante', 'quebec']),
  phrase(2247, 'achaler quelqu’un', 'to bother, to pester someone (Québécois)', '/a.ʃa.le kɛl.kœ̃/', 'a-sha-LAY kel-KUHⁿ', ['variante', 'quebec']),
  sent(2248, 'Arrête de m’achaler avec ce dossier, c’est réglé.', 'Stop bothering me about that file, it’s settled.', '/a.ʁɛt də ma.ʃa.le a.vɛk sə dɔ.sje sɛ ʁe.ɡle/', 'a-RET duh ma-sha-LAY | a-vek suh do-SYAY | seh ray-GLAY', ['variante', 'quebec']),
  sent(2249, 'C’est dispendieux pour ce que ça vaut.', 'It’s expensive for what it’s worth.', '/sɛ dis.pɑ̃.djø puʁ sə kə sa vo/', 'seh dees-pahⁿ-DYEU | poor suh kuh sa VOH', ['variante', 'quebec']),
  sent(2250, 'On va placoter de ça au dîner.', 'We’ll chat about that at lunch.', '/ɔ̃ va pla.kɔ.te də sa o di.ne/', 'ohⁿ va pla-ko-TAY | duh sa oh dee-NAY', ['variante', 'quebec']),
  sent(2251, 'Ça se décide-tu avant vendredi, cette affaire-là ?', 'Does this get decided before Friday, or what?', '/sa sə de.sid ty avɑ̃ vɑ̃.dʁə.di sɛt a.fɛʁ la/', 'sa suh day-SEED tü | a-vahⁿ vahⁿ-druh-DEE | set a-FEHR LA', ['variante', 'quebec']),
];

export const QUEBEC_LINES: { fr: string; en: string }[] = [
  { fr: 'Alors, comment le télétravail a changé vos habitudes de bureau là-bas ?', en: 'So, how has remote work changed your office habits over there?' },
  { fr: 'Ben, faque, on dîne plus souvent ensemble au bureau depuis qu’on revient deux jours par semaine.', en: 'Well, so, we have lunch together more often at the office since we started coming back two days a week.' },
  { fr: 'Vous dînez ensemble, c’est-à-dire le midi ?', en: 'You have dîner together, meaning at midday?' },
  { fr: 'Oui, exactement, le midi. Le soir, nous on soupe plus tôt qu’avant, en fait.', en: 'Yes, exactly, midday. In the evening, we have souper earlier than before, actually.' },
  { fr: 'Et le reste de l’équipe, ça se passe bien avec cette nouvelle organisation ?', en: 'And the rest of the team, is this new setup going well for them?' },
  { fr: 'Globalement oui, mais y’en a qui achalent encore pour revenir cinq jours, faque on négocie, là là.', en: 'Overall yes, but some of them still keep pestering us to come back five days, so we’re negotiating, right now.' },
  { fr: 'Et niveau coûts, le bureau reste dispendieux pour l’entreprise ?', en: 'And cost-wise, is the office still expensive for the company?' },
  { fr: 'Pantoute, en fait, on a même sous-loué un étage.', en: 'Not at all, actually, we even sublet a floor.' },
];

/* ── ACT 5 · DES MOTS D’AILLEURS : BELGIQUE ET SUISSE ────────────────────── */

export const ACT5_ROWS: Row[] = [
  sent(2252, 'Septante, huitante ou quatre-vingts, nonante : en Belgique et en Suisse, les dizaines se disent autrement.', 'Septante, huitante or quatre-vingts, nonante: in Belgium and Switzerland, the tens are said differently.', '/sɛp.tɑ̃t ɥi.tɑ̃t u katʁə.vɛ̃ nɔ.nɑ̃t ɑ̃ bɛl.ʒik e ɑ̃ sɥis le di.zɛn sə diz o.tʁə.mɑ̃/', 'sep-TAHⁿT | wee-TAHⁿT oo katr-VEHⁿ | no-NAHⁿT | ahⁿ bel-ZHEEK ay ahⁿ sweess | lay dee-ZEN suh deez oh-truh-MAHⁿ', ['rule', 'variante'], ['flashcard'],
    rule('Un interlocuteur belge ou suisse dit « nonante ». Quel nombre vient de passer ?', 'Quatre-vingt-dix (90) ; septante vaut soixante-dix (70), et huitante, en Suisse seulement, vaut quatre-vingts (80).')),
  sent(2253, 'Le trajet dure septante-cinq minutes depuis Namur.', 'The trip takes seventy-five minutes from Namur.', '/lə tʁa.ʒɛ dyʁ sɛp.tɑ̃t sɛ̃k mi.nyt də.pɥi na.myʁ/', 'luh tra-ZHEH dür | sep-tahⁿt-SEHⁿK mee-nüt | duh-pwee na-MÜR', ['variante']),
  sent(2254, 'On a reçu nonante dossiers cette semaine.', 'We received ninety files this week.', '/ɔ̃.na ʁə.sy nɔ.nɑ̃t dɔ.sje sɛt sə.mɛn/', 'ohⁿ-na ruh-SÜ | no-NAHⁿT do-SYAY | set suh-MEHN', ['variante']),
  phrase(2255, 'une fois', 'just, you know (Belgian filler word)', '/yn fwa/', 'ün FWA', ['variante']),
  sent(2256, 'Passe-moi ça une fois, s’il te plaît.', 'Just pass me that, would you.', '/pas mwa sa yn fwa sil tə plɛ/', 'pass mwa sa ün FWA | seel tuh PLEH', ['variante']),
  sent(2257, 'Tiens, s’il vous plaît.', 'Here you go.', '/tjɛ̃ sil vu plɛ/', 'TYEHⁿ | seel voo PLEH', ['variante']),
  sent(2258, 'Je ne sais pas venir avant seize heures.', 'I can’t come before four o’clock.', '/ʒə nə sɛ pa və.niʁ avɑ̃ sɛ.zœʁ/', 'zhuh nuh seh pa vuh-NEER | a-vahⁿ seh-ZEUR', ['variante']),
  phrase(2259, 'ça goûte quoi ?', 'what does it taste like? (Belgian)', '/sa ɡut kwa/', 'sa GOOT kwa', ['variante']),
  sent(2260, 'Ça goûte quoi, ce plat-là, exactement ?', 'What does this dish actually taste like?', '/sa ɡut kwa sə pla la ɛɡ.zak.tə.mɑ̃/', 'sa GOOT kwa | suh pla LA | eg-zak-tuh-MAHⁿ', ['variante']),
  phrase(2261, 'le natel', 'the mobile phone (Swiss)', '/lə na.tɛl/', 'luh na-TEL', ['variante']),
  sent(2262, 'J’ai laissé mon natel au bureau, désolé.', 'I left my mobile phone at the office, sorry.', '/ʒe lɛ.se mɔ̃ na.tɛl o by.ʁo de.zɔ.le/', 'zhay leh-SAY mohⁿ na-TEL | oh bü-ROH | day-zo-LAY', ['variante']),
  sent(2263, 'Il faut poutzer la salle avant la réunion de seize heures.', 'The room needs cleaning before the four o’clock meeting.', '/il fo put.se la sal avɑ̃ la ʁe.y.njɔ̃ də sɛ.zœʁ/', 'eel foh poot-SAY la SAL | a-vahⁿ la ray-ü-nyohⁿ duh seh-ZEUR', ['variante']),
  sent(2264, 'Il y a une action sur les imprimantes jusqu’à vendredi.', 'There’s a special offer on printers until Friday.', '/il j a yn ak.sjɔ̃ syʁ le.zɛ̃.pʁi.mɑ̃t ʒys.ka vɑ̃.dʁə.di/', 'eel ya ün ak-SYOHⁿ | sür lay-zehⁿ-pree-MAHⁿT | zhüs-ka vahⁿ-druh-DEE', ['variante']),
  sent(2265, 'Quel cheni dans ce bureau partagé.', 'What a mess in this shared office.', '/kɛl ʃə.ni dɑ̃ sə by.ʁo paʁ.ta.ʒe/', 'kel shuh-NEE | dahⁿ suh bü-roh par-ta-ZHAY', ['variante']),
];

export const SUPPORT_LINES: { fr: string; en: string }[] = [
  { fr: 'Bonjour, vous êtes en ligne avec le support, je m’appelle Nadia.', en: 'Hello, you’re through to support, my name is Nadia.' },
  { fr: 'Bonjour, une fois, j’ai un problème avec l’imprimante du deuxième étage.', en: 'Hello, so, I have a problem with the printer on the second floor.' },
  { fr: 'D’accord, sachez qu’il y a une action sur les nouvelles imprimantes jusqu’à vendredi, si la vôtre est trop vieille.', en: 'Alright, just so you know there’s a special offer on the new printers until Friday, if yours is too old.' },
  { fr: 'Ah bon ? Elle a septante mois déjà, alors ça m’intéresse peut-être.', en: 'Oh really? It’s already seventy months old, so that might interest me.' },
  { fr: 'Très bien. En attendant, pouvez-vous me donner le numéro de série, s’il vous plaît.', en: 'Very well. In the meantime, could you give me the serial number, please.' },
  { fr: 'Attendez, je ne sais pas le lire, il y a du cheni sur l’étiquette.', en: 'Hold on, I can’t read it, there’s a mess on the label.' },
  { fr: 'Pas de souci, essuyez-la, ou alors notez simplement la référence du modèle.', en: 'No worries, wipe it off, or just note down the model reference.' },
  { fr: 'D’accord, je vous rappelle sur mon natel dans deux minutes.', en: 'Alright, I’ll call you back on my mobile in two minutes.' },
];

/* ── ACT 6 · DES MOTS D’AILLEURS : L’AFRIQUE DE L’OUEST ──────────────────── */

export const ACT6_ROWS: Row[] = [
  sent(2266, 'En français d’Afrique de l’Ouest, « tout à l’heure » peut désigner un moment déjà passé, pas seulement un moment à venir.', 'In West African French, tout à l’heure can refer to a moment already past, not only one still to come.', '/ɑ̃ fʁɑ̃.sɛ da.fʁik də lwɛst tu.ta.lœʁ pø de.zi.ɲe œ̃ mɔ.mɑ̃ de.ʒa pa.se pa sœl.mɑ̃ œ̃ mɔ.mɑ̃ a və.niʁ/', 'ahⁿ frahⁿ-SEH da-freek duh LWEST | too-ta-LEUR peu day-zee-NYAY | uhⁿ mo-MAHⁿ day-ZHA pa-SAY | pa seul-mahⁿ uhⁿ mo-mahⁿ a vuh-NEER', ['rule', 'variante'], ['flashcard'],
    rule('Un collègue dakarois dit : « je vous ai appelé tout à l’heure ». C’était quand ?', 'Déjà passé, souvent plus tôt le même jour : dans cette variante, tout à l’heure n’annonce pas toujours l’avenir.')),
  sent(2267, 'Je vous ai appelé tout à l’heure, vers neuf heures.', 'I called you earlier, around nine o’clock.', '/ʒə vu.ze a.pə.le tu.ta.lœʁ vɛʁ nœ.vœʁ/', 'zhuh voo-zay a-puh-LAY | too-ta-LEUR | vehr neu-VEUR', ['variante']),
  sent(2268, 'On causait justement de ce projet avec le directeur.', 'We were just talking about that project with the director.', '/ɔ̃ ko.zɛ ʒys.tə.mɑ̃ də sə pʁɔ.ʒɛ a.vɛk lə di.ʁɛk.tœʁ/', 'ohⁿ koh-ZEH zhüs-tuh-MAHⁿ | duh suh pro-ZHEH | a-vek luh dee-rek-TEUR', ['variante']),
  phrase(2269, 'le goudron', 'the paved road, the highway', '/lə ɡu.dʁɔ̃/', 'luh goo-DROHⁿ', ['variante']),
  sent(2270, 'La réunion est annulée, la route n’est plus praticable, le goudron est coupé.', 'The meeting is cancelled, the road is no longer passable, the highway is cut off.', '/la ʁe.y.njɔ̃ ɛ.ta.ny.le la ʁut nɛ ply pʁa.ti.kabl lə ɡu.dʁɔ̃ ɛ ku.pe/', 'la ray-ü-nyohⁿ eh-ta-nü-LAY | la ROOT neh plü pra-tee-KABL | luh goo-drohⁿ eh koo-PAY', ['variante']),
  phrase(2271, 'ça va aller', 'it will be fine (reassurance)', '/sa va a.le/', 'sa va a-LAY', ['variante']),
  sent(2272, 'Ne vous inquiétez pas pour le retard, ça va aller.', 'Don’t worry about the delay, it will be fine.', '/nə vu.zɛ̃.kje.te pa puʁ lə ʁə.taʁ sa va a.le/', 'nuh voo-zehⁿ-kyay-TAY pa | poor luh ruh-TAR | sa va a-LAY', ['variante']),
  sent(2273, 'Je vous prie de bien vouloir patienter un instant.', 'Please be so kind as to wait a moment.', '/ʒə vu pʁi də bjɛ̃ vu.lwaʁ pa.sjɑ̃.te œ̃.nɛ̃s.tɑ̃/', 'zhuh voo PREE | duh byehⁿ voo-LWAR | pa-syahⁿ-TAY uhⁿ-nehⁿs-TAHⁿ', ['variante']),
  sent(2274, 'Véritablement, ce dossier mérite qu’on y revienne avec le directeur.', 'Truly, this file deserves another look with the director.', '/ve.ʁi.tablə.mɑ̃ sə dɔ.sje me.ʁit kɔ̃.ni ʁə.vjɛn a.vɛk lə di.ʁɛk.tœʁ/', 'vay-ree-tabluh-MAHⁿ | suh do-SYAY may-REET | kohⁿ-nee ruh-VYEN | a-vek luh dee-rek-TEUR', ['variante']),
  sent(2275, 'Il est sur place depuis ce matin, à son bureau.', 'He has been there, at his desk, since this morning.', '/il ɛ syʁ plas də.pɥi sə ma.tɛ̃ a sɔ̃ by.ʁo/', 'eel eh sür PLASS | duh-pwee suh ma-TEHⁿ | a sohⁿ bü-ROH', ['variante']),
  sent(2276, 'Je reviens vers vous dès que j’ai une réponse, sans faute.', 'I will get back to you as soon as I have an answer, without fail.', '/ʒə ʁə.vjɛ̃ vɛʁ vu dɛ kə ʒe yn ʁe.pɔ̃s sɑ̃ fot/', 'zhuh ruh-VYEHⁿ vehr VOO | deh kuh zhay ün ray-POHⁿS | sahⁿ FOHT', ['variante']),
  sent(2277, 'La ligne a coupé tout à l’heure, pendant que je vous causais.', 'The line cut off earlier, while I was talking to you.', '/la liɲ a ku.pe tu.ta.lœʁ pɑ̃.dɑ̃ kə ʒə vu ko.zɛ/', 'la LEENY a koo-PAY | too-ta-LEUR | pahⁿ-dahⁿ kuh zhuh voo koh-ZEH', ['variante']),
  phrase(2278, 'revenir vers quelqu’un', 'to get back to someone', '/ʁə.və.niʁ vɛʁ kɛl.kœ̃/', 'ruh-vuh-NEER vehr kel-KUHⁿ', ['vocab']),
  sent(2279, 'Même avec le retard, ça va aller pour la livraison.', 'Even with the delay, it will be fine for the delivery.', '/mɛm a.vɛk lə ʁə.taʁ sa va a.le puʁ la li.vʁɛ.zɔ̃/', 'mem a-vek luh ruh-TAR | sa va a-LAY | poor la lee-vreh-ZOHⁿ', ['variante']),
];

export const DAKAR_LINES: { fr: string; en: string }[] = [
  { fr: 'Bonsoir, je vous prie de bien vouloir m’excuser pour l’heure tardive.', en: 'Good evening, please forgive me for the late hour.' },
  { fr: 'Pas de souci, je vous écoute.', en: 'No worries, I’m listening.' },
  { fr: 'Je vous ai appelé tout à l’heure, vers quinze heures, mais la ligne a coupé.', en: 'I called you earlier, around three in the afternoon, but the line cut off.' },
  { fr: 'Ah, je n’ai rien reçu. C’était pour le dossier de livraison ?', en: 'Ah, I didn’t get anything. Was it about the delivery file?' },
  { fr: 'Exactement. Le camion est bloqué, le goudron est coupé après la pluie d’hier.', en: 'Exactly. The truck is stuck, the highway is cut off after yesterday’s rain.' },
  { fr: 'D’accord, et pour la date de livraison, on fait comment ?', en: 'Alright, and for the delivery date, what do we do?' },
  { fr: 'Ne vous en faites pas, ça va aller, on causait justement de ça avec le transporteur ce matin.', en: 'Don’t worry, it will be fine, we were just talking about that with the carrier this morning.' },
  { fr: 'Je reviens vers vous dès que j’ai une date précise, sans faute.', en: 'I’ll get back to you as soon as I have an exact date, without fail.' },
];

/* ── ACT 7 · LE SON ABÎMÉ ─────────────────────────────────────────────────── */

export const ACT7_ROWS: Row[] = [
  sent(2280, 'Un mot perdu se répare avec ce qui l’entoure, jamais en l’inventant au hasard.', 'A lost word is repaired with what surrounds it, never invented at random.', '/œ̃ mo pɛʁ.dy sə ʁe.paʁ a.vɛk sə ki lɑ̃.tuʁ ʒa.mɛ ɑ̃ lɛ̃.vɑ̃.tɑ̃ o a.zaʁ/', 'uhⁿ moh pehr-DÜ | suh ray-PAR | a-vek suh kee lahⁿ-TOOR | zha-meh ahⁿ lehⁿ-vahⁿ-TAHⁿ oh a-ZAR', ['rule', 'panne'], ['flashcard'],
    rule('Un mot entier disparaît derrière un bruit de fond. Que fais-tu ?', 'Tu attends ce que la suite confirme : jamais un mot inventé qui sonnerait juste.')),
  sent(2281, 'Si le mot entier a disparu, j’attends la suite pour voir ce qu’elle confirme.', 'If the whole word is gone, I wait for what follows to see what it confirms.', '/si lə mo.tɑ̃.tje a dis.pa.ʁy ʒa.tɑ̃ la sɥit puʁ vwaʁ sə kɛl kɔ̃.fiʁm/', 'see luh mo-tahⁿ-TYAY a dees-pa-RÜ | zha-TAHⁿ la sweet | poor vwar suh kel kohⁿ-FEERM', ['panne']),
  sent(2282, 'Si seulement la fin du mot grésille, le début suffit souvent à deviner le reste.', 'If only the end of the word crackles, the beginning is often enough to guess the rest.', '/si sœl.mɑ̃ la fɛ̃ dy mo ɡʁe.zij lə de.by syfi su.vɑ̃ a də.vi.ne lə ʁɛst/', 'see seul-MAHⁿ la fehⁿ dü MOH gray-ZEEY | luh day-BÜ sü-FEE soo-vahⁿ | a duh-vee-NAY luh REST', ['panne']),
  phrase(2283, 'une coupure de son', 'a sound dropout', '/yn ku.pyʁ də sɔ̃/', 'ün koo-PÜR duh SOHⁿ', ['vocab']),
  sent(2284, 'Le bruit de fond ne mange pas toujours le même type de son.', 'Background noise doesn’t always eat the same type of sound.', '/lə bʁɥi də fɔ̃ nə mɑ̃ʒ pa tu.ʒuʁ lə mɛm tip də sɔ̃/', 'luh brwee duh FOHⁿ | nuh mahⁿzh pa too-ZHOOR | luh mem TEEP duh SOHⁿ', ['panne']),
  sent(2285, 'J’attends la reformulation plutôt que de deviner n’importe quoi.', 'I wait for the rephrasing rather than guessing just anything.', '/ʒa.tɑ̃ la ʁə.fɔʁ.my.la.sjɔ̃ ply.to kə də də.vi.ne nɛ̃.pɔʁt kwa/', 'zha-TAHⁿ la ruh-for-mü-la-SYOHⁿ | plü-TOH kuh duh duh-vee-NAY | nehⁿ-port KWA', ['strategie']),
  phrase(2286, 'reformuler', 'to restate, to put differently', '/ʁə.fɔʁ.my.le/', 'ruh-for-mü-LAY', ['vocab']),
  sent(2287, 'Quand la ligne est mauvaise, les chiffres sont ce qu’on perd le plus souvent.', 'When the line is bad, numbers are what gets lost most often.', '/kɑ̃ la liɲ ɛ mo.vɛz le ʃifʁ sɔ̃ sə kɔ̃ pɛʁ lə ply su.vɑ̃/', 'kahⁿ la LEENY eh mo-VEHZ | lay SHEEFR sohⁿ suh kohⁿ pehr luh plü soo-VAHⁿ', ['panne']),
  sent(2288, 'Un bruit de moteur sous une phrase n’efface pas toute la phrase.', 'An engine noise under a sentence doesn’t erase the whole sentence.', '/œ̃ bʁɥi də mɔ.tœʁ su.zyn fʁaz ne.fas pa tut la fʁaz/', 'uhⁿ brwee duh mo-TEUR | soo-zün FRAHZ | nay-FASS pa toot la FRAHZ', ['panne']),
  sent(2289, 'Je range la coupure dans l’une de trois cases : mot entier perdu, mot abîmé, phrase couverte par un bruit.', 'I file the dropout into one of three boxes: a whole word lost, a damaged word, a sentence covered by noise.', '/ʒə ʁɑ̃ʒ la ku.pyʁ dɑ̃ lyn də tʁwa kaz mo.tɑ̃.tje pɛʁ.dy mo.ta.bi.me fʁaz ku.vɛʁt paʁ œ̃ bʁɥi/', 'zhuh rahⁿzh la koo-PÜR | dahⁿ lün duh trwa KAHZ | moh-tahⁿ-tyay pehr-DÜ | moh-ta-bee-MAY | frahz koo-VEHRT par uhⁿ BRWEE', ['panne', 'triage']),
  sent(2290, 'La répétition, plus loin dans l’appel, confirme souvent ce que j’avais mal entendu.', 'The repetition, later in the call, often confirms what I had misheard.', '/la ʁe.pe.ti.sjɔ̃ ply lwɛ̃ dɑ̃ la.pɛl kɔ̃.fiʁm su.vɑ̃ sə kə ʒa.vɛ ma.lɑ̃.tɑ̃.dy/', 'la ray-pay-tee-SYOHⁿ | plü lwehⁿ dahⁿ la-PEL | kohⁿ-FEERM soo-vahⁿ | suh kuh zha-veh ma-lahⁿ-tahⁿ-DÜ', ['panne']),
  phrase(2291, 'le signal faiblit', 'the signal weakens', '/lə si.ɡnal fɛ.bli/', 'luh see-NYAL feh-BLEE', ['vocab']),
  sent(2292, 'Le signal faiblit, puis revient, sans que le sens change.', 'The signal weakens, then comes back, without the meaning changing.', '/lə si.ɡnal fɛ.bli pɥi ʁə.vjɛ̃ sɑ̃ kə lə sɑ̃s ʃɑ̃ʒ/', 'luh see-NYAL feh-BLEE | pwee ruh-VYEHⁿ | sahⁿ kuh luh SAHⁿS SHAHⁿZH', ['panne']),
  sent(2293, 'Une syllabe mangée par la friture se retrouve grâce au mot qui suit.', 'A syllable eaten by static can be recovered thanks to the word that follows.', '/yn si.lab mɑ̃.ʒe paʁ la fʁi.tyʁ sə ʁə.tʁuv ɡʁas o mo ki sɥi/', 'ün see-LAB mahⁿ-ZHAY | par la free-TÜR | suh ruh-TROOV grass oh moh kee SWEE', ['panne']),
];

export const CHANTIER_LINES: { fr: string; en: string }[] = [
  { fr: 'Allô, je t’entends assez mal, il y a du bruit de ton côté.', en: 'Hello, I can’t hear you very well, there’s noise on your end.' },
  { fr: 'Oui, c’est le chantier juste à côté du bureau, désolé.', en: 'Yes, it’s the construction site right next to the office, sorry.' },
  { fr: 'Tu disais que la livraison arrive à quelle heure, déjà ?', en: 'You were saying what time the delivery arrives, again?' },
  { fr: 'Quatorze heures, non pardon, je reprends : quatorze heures trente.', en: 'Two o’clock, no sorry, let me redo that: two thirty.' },
  { fr: 'D’accord, quatorze heures trente, c’est noté.', en: 'Alright, two thirty, noted.' },
  { fr: 'Et il faudra ouvrir la porte du local technique avant qu’ils arrivent.', en: 'And we’ll need to open the utility room door before they arrive.' },
  { fr: 'Pardon, le signal a faibli une seconde, tu peux reformuler la fin ?', en: 'Sorry, the signal weakened for a second, can you restate the end?' },
  { fr: 'Je disais : la porte du local technique, il faut l’ouvrir avant leur arrivée.', en: 'I was saying: the utility room door, it needs to be opened before they arrive.' },
  { fr: 'Ah, voilà, c’est noté, la porte du local technique.', en: 'Ah, there we go, noted, the utility room door.' },
];

/* ── ACT 8 · TOUT EN MÊME TEMPS ──────────────────────────────────────────── */

export const ACT8_ROWS: Row[] = [
  sent(2294, 'Dans un passage qui empile plusieurs bruits, je nomme chacun avant de chercher à le résoudre.', 'In a passage stacking several kinds of noise, I name each one before trying to resolve it.', '/dɑ̃ zœ̃ pa.saʒ ki ɑ̃.pil ply.zjœʁ bʁɥi ʒə nɔm ʃa.kœ̃ avɑ̃ də ʃɛʁ.ʃe a lə ʁe.zudʁ/', 'dahⁿ-zuhⁿ pa-SAZH | kee ahⁿ-PEEL plü-ZYEUR BRWEE | zhuh nom sha-KUHⁿ | a-vahⁿ duh shehr-SHAY a luh ray-ZOODR', ['rule', 'triage'], ['flashcard'],
    rule('Un accent nouveau, une ligne faible et deux voix qui se chevauchent, tout dans la même phrase. Par quoi commences-tu ?', 'Tu nommes les trois bruits, tu isoles la voix la plus claire, puis tu traites chaque bruit avec son propre réflexe.')),
  sent(2295, 'Un chevauchement, un accent inconnu et une ligne qui grésille peuvent arriver dans la même phrase.', 'An overlap, an unfamiliar accent and a crackling line can all land in the same sentence.', '/œ̃ ʃə.voʃ.mɑ̃ œ̃.nak.sɑ̃ ɛ̃.kɔ.ny e yn liɲ ki ɡʁe.zij pœv a.ʁi.ve dɑ̃ la mɛm fʁaz/', 'uhⁿ shuh-vosh-MAHⁿ | uhⁿ-nak-SAHⁿ ehⁿ-ko-NÜ | ay ün LEENY kee gray-ZEEY | peuv a-ree-VAY dahⁿ la mem FRAHZ', ['triage']),
  sent(2296, 'Je traite un bruit à la fois, même si plusieurs arrivent ensemble.', 'I deal with one kind of noise at a time, even when several arrive together.', '/ʒə tʁɛt œ̃ bʁɥi a la fwa mɛm si ply.zjœʁ a.ʁiv ɑ̃.sɑ̃bl/', 'zhuh TREHT uhⁿ brwee a la FWA | mem see plü-zyeur a-REEV ahⁿ-SAHⁿBL', ['triage']),
  sent(2297, 'L’accent qui m’intrigue n’est pas forcément celui qui gêne le plus la compréhension.', 'The accent that catches my attention isn’t necessarily the one that hurts comprehension the most.', '/lak.sɑ̃ ki mɛ̃.tʁiɡ nɛ pa fɔʁ.se.mɑ̃ sə.lɥi ki ʒɛn lə ply la kɔ̃.pʁe.ɑ̃.sjɔ̃/', 'lak-SAHⁿ kee mehⁿ-TREEG | neh pa for-say-MAHⁿ | suh-LWEE kee zhen luh plü la kohⁿ-pray-ahⁿ-SYOHⁿ', ['triage']),
  sent(2298, 'Un registre qui bascule, en pleine coupure de son, double la difficulté sans doubler le message.', 'A register shifting, right in the middle of a sound dropout, doubles the difficulty without doubling the message.', '/œ̃ ʁə.ʒistʁ ki bas.kyl ɑ̃ plɛn ku.pyʁ də sɔ̃ dubl la di.fi.kyl.te sɑ̃ du.ble lə mɛ.saʒ/', 'uhⁿ ruh-ZHEESTR kee bas-KÜL | ahⁿ plen koo-PÜR duh SOHⁿ | DOOBL la dee-fee-kül-TAY | sahⁿ doo-BLAY luh may-SAZH', ['triage']),
  sent(2299, 'Je garde la charpente et la ligne de partage même quand trois bruits arrivent en même temps.', 'I keep the frame and the dividing line even when three kinds of noise land at once.', '/ʒə ɡaʁd la ʃaʁ.pɑ̃t e la liɲ də paʁ.taʒ mɛm kɑ̃ tʁwa bʁɥi a.ʁiv ɑ̃ mɛm tɑ̃/', 'zhuh gard la shar-PAHⁿT | ay la LEENY duh par-TAZH | mem kahⁿ trwa brwee a-REEV ahⁿ mem TAHⁿ', ['triage', 'recap']),
  phrase(2300, 'faire le tri', 'to sort things out, to triage', '/fɛʁ lə tʁi/', 'fehr luh TREE', ['vocab']),
  sent(2301, 'Faire le tri avant de réagir évite de réparer le mauvais problème.', 'Sorting things out before reacting avoids fixing the wrong problem.', '/fɛʁ lə tʁi avɑ̃ də ʁe.a.ʒiʁ e.vit də ʁe.pa.ʁe lə mo.vɛ pʁɔ.blɛm/', 'fehr luh TREE | a-vahⁿ duh ray-a-ZHEER | ay-VEET duh ray-pa-RAY luh mo-veh pro-BLEM', ['triage']),
  sent(2302, 'Si je ne sais pas par où commencer, je commence par la voix la plus claire.', 'If I don’t know where to start, I start with the clearest voice.', '/si ʒə nə sɛ pa paʁ u kɔ.mɑ̃.se ʒə kɔ.mɑ̃s paʁ la vwa la ply klɛʁ/', 'see zhuh nuh seh pa par OO ko-mahⁿ-SAY | zhuh ko-MAHⁿS par la vwa la plü KLEHR', ['triage']),
  sent(2303, 'Le bruit le plus fort n’est pas toujours celui qui cache l’information la plus importante.', 'The loudest noise isn’t always the one hiding the most important information.', '/lə bʁɥi lə ply fɔʁ nɛ pa tu.ʒuʁ sə.lɥi ki kaʃ lɛ̃.fɔʁ.ma.sjɔ̃ la ply.zɛ̃.pɔʁ.tɑ̃t/', 'luh brwee luh plü FOR | neh pa too-zhoor suh-LWEE | kee kash lehⁿ-for-ma-SYOHⁿ la plü-zehⁿ-por-TAHⁿT', ['triage']),
  sent(2304, 'Trois bruits en même temps restent trois bruits, pas un seul mur.', 'Three kinds of noise at once are still three kinds of noise, not a single wall.', '/tʁwa bʁɥi ɑ̃ mɛm tɑ̃ ʁɛst tʁwa bʁɥi pa.zœ̃ sœl myʁ/', 'trwa brwee ahⁿ mem TAHⁿ | rest trwa BRWEE | pa-zuhⁿ seul MÜR', ['triage']),
  sent(2305, 'J’isole d’abord la voix que je comprends, avant de revenir vers celle qui résiste.', 'I isolate the voice I understand first, before coming back to the one that resists.', '/ʒi.zɔl da.bɔʁ la vwa kə ʒə kɔ̃.pʁɑ̃ avɑ̃ də ʁə.və.niʁ vɛʁ sɛl ki ʁe.zist/', 'zhee-ZOL da-BOR la vwa kuh zhuh kohⁿ-PRAHⁿ | a-vahⁿ duh ruh-vuh-NEER vehr sel kee ray-ZEEST', ['triage']),
  sent(2306, 'Une phrase à moitié perdue, dans un accent nouveau, se complète souvent avec la phrase suivante, plus claire.', 'A half-lost sentence, in a new accent, is often completed by the next sentence, which is clearer.', '/yn fʁaz a mwa.tje pɛʁ.dy dɑ̃.zœ̃.nak.sɑ̃ nu.vo sə kɔ̃.plɛt su.vɑ̃ a.vɛk la fʁaz sɥi.vɑ̃t ply klɛʁ/', 'ün frahz a mwa-TYAY pehr-DÜ | dahⁿ-zuhⁿ-nak-SAHⁿ noo-VOH | suh kohⁿ-PLET soo-vahⁿ | a-vek la frahz swee-VAHⁿT plü KLEHR', ['triage']),
  sent(2307, 'Le triage n’efface aucun bruit : il décide seulement par lequel commencer.', 'Triage doesn’t erase any noise: it only decides which one to start with.', '/lə tʁi.aʒ ne.fas o.kœ̃ bʁɥi il de.sid sœl.mɑ̃ paʁ lə.kɛl kɔ.mɑ̃.se/', 'luh tree-AZH nay-FASS oh-KUHⁿ BRWEE | eel day-SEED seul-MAHⁿ | par luh-KEL ko-mahⁿ-SAY', ['triage']),
  sent(2308, 'Même empilés, le chevauchement, le registre, l’accent et la coupure se traitent chacun avec son propre réflexe.', 'Even stacked together, the overlap, the register, the accent and the dropout are each handled with their own reflex.', '/mɛm ɑ̃.pi.le lə ʃə.voʃ.mɑ̃ lə ʁə.ʒistʁ lak.sɑ̃ e la ku.pyʁ sə tʁɛt ʃa.kœ̃ a.vɛk sɔ̃ pʁɔpʁ ʁe.flɛks/', 'mem ahⁿ-pee-LAY | luh shuh-vosh-MAHⁿ | luh ruh-ZHEESTR | lak-SAHⁿ | ay la koo-PÜR | suh TREHT sha-KUHⁿ | a-vek sohⁿ propr ray-FLEKS', ['triage']),
  sent(2309, 'Garder son calme devant trois bruits à la fois est la moitié du travail.', 'Staying calm in front of three kinds of noise at once is half the work.', '/ɡaʁ.de sɔ̃ kalm də.vɑ̃ tʁwa bʁɥi a la fwa ɛ la mwa.tje dy tʁa.vaj/', 'gar-DAY sohⁿ KALM | duh-vahⁿ trwa brwee a la FWA | eh la mwa-TYAY dü tra-VAY', ['triage']),
];

export const STACKED_LINES: { fr: string; en: string }[] = [
  { fr: 'Bonsoir à tous, ce soir, le télétravail transfrontalier, avec en studio Mme Diatta, consultante à Dakar, et au téléphone, un auditeur de Fribourg.', en: 'Good evening everyone, tonight, cross-border remote work, with in studio Mrs Diatta, a consultant from Dakar, and on the phone, a listener from Fribourg.' },
  { fr: 'Bonsoir, je vous prie de bien vouloir m’excuser, j’étais sur la route il y a quelques minutes à peine.', en: 'Good evening, please forgive me, I was on the road just a few minutes ago.' },
  { fr: 'Bonsoir, ici, euh, le réseau n’est pas fameux de mon côté, dites-moi si ça coupe.', en: 'Good evening, here, uh, the network isn’t great on my end, tell me if it cuts out.' },
  { fr: 'On vous entend, allez-y.', en: 'We can hear you, go ahead.' },
  { fr: 'Chez nous, le loyer a grimpé de nonante pour cent en dix ans, et...', en: 'Where I live, rent has gone up ninety per cent in ten years, and...' },
  { fr: 'Nonante pour cent, c’est colossal, et vous, Mme Diatta, qu’en pensez-vous ?', en: 'Ninety per cent, that’s colossal, and you, Mrs Diatta, what do you think?' },
  { fr: 'Véritablement, chez nous aussi ça va aller difficilement si rien ne change, le goudron vers les nouveaux quartiers n’est même pas terminé.', en: 'Truly, for us too things will go badly if nothing changes, the highway toward the new neighbourhoods isn’t even finished.' },
  { fr: 'Exactement, et en plus la ligne faiblit, je crois que je vous ai perdus une seconde.', en: 'Exactly, and on top of that the line is weakening, I think I lost you for a second.' },
  { fr: 'Non, on vous a bien suivi. Mme Diatta, vous disiez que la route n’est pas terminée ?', en: 'No, we followed you fine. Mrs Diatta, you were saying the road isn’t finished?' },
  { fr: 'Oui, et ça va aller, mais ça retarde toute la zone.', en: 'Yes, and it will be fine, but it’s delaying the whole area.' },
];

/* ── ACT 9 · L’ÉPREUVE EXPERTE ────────────────────────────────────────────── */

export const ACT9_ROWS: Row[] = [
  sent(2310, 'À l’épreuve, je lis la consigne et les options avant d’écouter, pas après.', 'In the exam, I read the instructions and the options before listening, not after.', '/a le.pʁœv ʒə li la kɔ̃.siɲ e le.zɔp.sjɔ̃ avɑ̃ de.ku.te pa a.pʁɛ/', 'a lay-PREUV | zhuh lee la kohⁿ-SEENY | ay lay-zop-SYOHⁿ | a-vahⁿ day-koo-TAY | pa a-PREH', ['rule', 'epreuve'], ['flashcard'],
    rule('Il te reste trente secondes avant une écoute unique. Que fais-tu ?', 'Tu lis la consigne et chaque option : tu sais déjà ce que tu cherches avant le premier mot entendu.')),
  sent(2311, 'Une option qui répète exactement un mot entendu est parfois un piège, pas une confirmation.', 'An option that exactly repeats a word you heard is sometimes a trap, not a confirmation.', '/yn ɔp.sjɔ̃ ki ʁe.pɛt ɛɡ.zak.tə.mɑ̃ œ̃ mo ɑ̃.tɑ̃.dy ɛ paʁ.fwa œ̃ pjɛʒ pa yn kɔ̃.fiʁ.ma.sjɔ̃/', 'ün op-SYOHⁿ kee ray-PET | eg-zak-tuh-MAHⁿ uhⁿ moh ahⁿ-tahⁿ-DÜ | eh par-FWA uhⁿ PYEZH | pa ün kohⁿ-feer-ma-SYOHⁿ', ['epreuve']),
  sent(2312, 'Un accent inconnu, dans une épreuve, n’est jamais un hasard : il fait partie de l’évaluation.', 'An unfamiliar accent, in an exam, is never an accident: it’s part of what’s being tested.', '/œ̃.nak.sɑ̃ ɛ̃.kɔ.ny dɑ̃.zyn e.pʁœv nɛ ʒa.mɛ œ̃.na.zaʁ il fɛ paʁ.ti də le.va.ly.a.sjɔ̃/', 'uhⁿ-nak-SAHⁿ ehⁿ-ko-NÜ | dahⁿ-zün ay-PREUV | neh zha-meh uhⁿ-na-ZAR | eel feh par-TEE duh lay-va-lü-a-SYOHⁿ', ['epreuve']),
  sent(2313, 'Je garde mon triage même en une seule écoute.', 'I keep my triage strategy even with only one listen.', '/ʒə ɡaʁd mɔ̃ tʁi.aʒ mɛm ɑ̃.nyn sœl e.kut/', 'zhuh gard mohⁿ tree-AZH | mem ahⁿ-nün seul ay-KOOT', ['epreuve', 'triage']),
  phrase(2314, 'une seule écoute', 'a single listen-through (as in an exam)', '/yn sœl e.kut/', 'ün seul ay-KOOT', ['vocab']),
  sent(2315, 'Une seule écoute laisse moins de place à l’erreur de triage, pas plus.', 'A single listen leaves less room for a triage mistake, not more.', '/yn sœl e.kut lɛs mwɛ̃ də plas a le.ʁœʁ də tʁi.aʒ pa plys/', 'ün seul ay-KOOT lehs mwehⁿ duh PLASS | a lay-REUR duh tree-AZH | pa PLÜS', ['epreuve']),
  sent(2316, 'Document un. Une auditrice de Namur demande si le télétravail est encore possible après la réforme.', 'Document one. A listener from Namur asks whether remote work is still possible after the reform.', '/dɔ.ky.mɑ̃ œ̃ yn o.di.tʁis də na.myʁ də.mɑ̃d si lə te.le.tʁa.vaj ɛ.tɑ̃.kɔʁ pɔ.sibl a.pʁɛ la ʁe.fɔʁm/', 'do-kü-MAHⁿ UHⁿ | ün oh-dee-TREESS duh na-MÜR | duh-MAHⁿD see luh tay-lay-tra-VAY | eh-tahⁿ-kor po-SEEBL | a-preh la ray-FORM', ['epreuve']),
  sent(2317, 'La réponse est oui, sous réserve d’un accord écrit avec l’employeur.', 'The answer is yes, subject to a written agreement with the employer.', '/la ʁe.pɔ̃s ɛ wi su ʁe.zɛʁv dœ̃.na.kɔʁ e.kʁi a.vɛk lɑ̃.plwa.jœʁ/', 'la ray-POHⁿS eh WEE | soo ray-ZEHRV | duhⁿ-na-kor ay-KREE | a-vek lahⁿ-plwa-YEUR', ['epreuve']),
  sent(2318, 'Document deux. Un responsable de Dakar explique que le goudron reliant les deux bureaux sera refait en mars.', 'Document two. A manager from Dakar explains that the road linking the two offices will be redone in March.', '/dɔ.ky.mɑ̃ dø œ̃ ʁɛs.pɔ̃.sabl də da.kaʁ ɛks.plik kə lə ɡu.dʁɔ̃ ʁə.ljɑ̃ le dø by.ʁo sə.ʁa ʁə.fɛ ɑ̃ maʁs/', 'do-kü-MAHⁿ DEU | uhⁿ res-pohⁿ-SABL duh da-KAR | eks-PLEEK kuh luh goo-DROHⁿ | ruh-LYAHⁿ lay deu bü-ROH | suh-ra ruh-FEH ahⁿ MARS', ['epreuve']),
  sent(2319, 'Il précise que les équipes resteront donc à distance jusqu’à cette date.', 'He specifies that the teams will therefore stay remote until that date.', '/il pʁe.siz kə le.ze.kip ʁɛs.tə.ʁɔ̃ dɔ̃k a dis.tɑ̃s ʒys.ka sɛt dat/', 'eel pray-SEEZ kuh lay-zay-KEEP | res-tuh-ROHⁿ dohⁿk a dees-TAHⁿS | zhüs-ka set DAT', ['epreuve']),
  sent(2320, 'Document trois. Un technicien explique au téléphone, malgré une ligne faible, que le nouveau logiciel sera installé jeudi.', 'Document three. A technician explains over the phone, despite a weak line, that the new software will be installed on Thursday.', '/dɔ.ky.mɑ̃ tʁwa œ̃ tɛk.ni.sjɛ̃ ɛks.plik o te.le.fɔn mal.ɡʁe yn liɲ fɛbl kə lə nu.vo lɔ.ʒi.sjɛl sə.ʁa.ɛ̃s.ta.le ʒø.di/', 'do-kü-MAHⁿ TRWA | uhⁿ tek-nee-SYEHⁿ | eks-PLEEK oh tay-lay-FON | mal-GRAY ün LEENY FEBL | kuh luh noo-voh lo-zhee-SYEL | suh-ra-ehⁿs-ta-LAY zheu-DEE', ['epreuve']),
  sent(2321, 'Mesdames et messieurs, je vous prie de bien vouloir excuser ce léger retard.', 'Ladies and gentlemen, please excuse this slight delay.', '/me.dam e me.sjø ʒə vu pʁi də bjɛ̃ vu.lwaʁ ɛks.ky.ze sə le.ʒe ʁə.taʁ/', 'may-DAM ay may-SYEU | zhuh voo PREE | duh byehⁿ voo-LWAR | eks-kü-ZAY suh lay-ZHAY ruh-TAR', ['epreuve']),
  sent(2322, 'Véritablement, la question du télétravail transfrontalier dépasse largement le cadre de notre seul bureau.', 'Truly, the question of cross-border remote work goes well beyond the scope of our office alone.', '/ve.ʁi.tablə.mɑ̃ la kɛs.tjɔ̃ dy te.le.tʁa.vaj tʁɑ̃s.fʁɔ̃.ta.lje de.pas laʁ.ʒə.mɑ̃ lə kadʁ də nɔtʁ sœl by.ʁo/', 'vay-ree-tabluh-MAHⁿ | la kes-TYOHⁿ dü tay-lay-tra-VAY trahⁿs-frohⁿ-ta-LYAY | day-PASS lar-zhuh-MAHⁿ | luh KADR duh notr seul bü-ROH', ['epreuve']),
  sent(2323, 'Trois éléments retardent encore une décision commune : le goudron, la couverture réseau, et le registre des contrats.', 'Three things are still delaying a joint decision: the road, network coverage, and the wording of contracts.', '/tʁwa.ze.le.mɑ̃ ʁə.taʁd ɑ̃.kɔʁ yn de.si.zjɔ̃ kɔ.myn lə ɡu.dʁɔ̃ la ku.vɛʁ.tyʁ ʁe.zo e lə ʁə.ʒistʁ de kɔ̃.tʁa/', 'trwa-zay-lay-MAHⁿ ruh-TARD | ahⁿ-kor ün day-see-ZYOHⁿ ko-MÜN | luh goo-DROHⁿ | la koo-vehr-TÜR ray-ZOH | ay luh ruh-ZHEESTR day kohⁿ-TRA', ['epreuve']),
  sent(2324, 'Nous reviendrons vers chaque équipe dès que ces trois points seront réglés.', 'We will get back to each team as soon as these three points are settled.', '/nu ʁə.vjɛ̃.dʁɔ̃ vɛʁ ʃak e.kip dɛ kə se tʁwa pwɛ̃ sə.ʁɔ̃ ʁe.ɡle/', 'noo ruh-vyehⁿ-DROHⁿ | vehr shak ay-KEEP | deh kuh say trwa PWEHⁿ | suh-rohⁿ ray-GLAY', ['epreuve']),
  sent(2325, 'Le signal, même empilé de bruit, reste le même depuis le premier acte.', 'The signal, even stacked with noise, has been the same since the first act.', '/lə si.ɡnal mɛm ɑ̃.pi.le də bʁɥi ʁɛst lə mɛm də.pɥi lə pʁə.mje akt/', 'luh see-NYAL | mem ahⁿ-pee-LAY duh BRWEE | rest luh mem | duh-pwee luh pruh-myay AKT', ['rule', 'recap']),
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. ASSEMBLY OF THE CORPUS
 * ══════════════════════════════════════════════════════════════════════════ */

export const ROWS_BY_ACT: Row[][] = [
  ACT1_ROWS, ACT2_ROWS, ACT3_ROWS, ACT4_ROWS, ACT5_ROWS, ACT6_ROWS, ACT7_ROWS, ACT8_ROWS, ACT9_ROWS,
];

export const ALL_ROWS: Row[] = ROWS_BY_ACT.flat();

const ROW_LOOKUP = new Map(ALL_ROWS.map((r) => [r.id, r]));
/** The act's own rows, never retyped: every exam line IS one of §G's rows. */
const L = (n: number): { fr: string; en: string } => {
  const r = ROW_LOOKUP.get(E(n));
  if (!r) throw new Error(`c2.11: no row ${E(n)} for an exam line`);
  return { fr: r.fr as string, en: r.en as string };
};

/** TCF-style sitting: three short, unrelated documents, each heard once. */
export const EXAM_A_LINES: { fr: string; en: string }[] = [L(2316), L(2317), L(2318), L(2319), L(2320)];

/** DALF C2-style sitting: one longer, single-voice extract, heard once. */
export const EXAM_B_LINES: { fr: string; en: string }[] = [L(2321), L(2322), L(2323), L(2324)];

