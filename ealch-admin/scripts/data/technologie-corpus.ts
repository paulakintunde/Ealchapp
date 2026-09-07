// a2.32.l1 « La technologie » — the authored corpus and the citation constants.
//
//   pnpm content:technologie              (author-technologie-batch.ts)
//   pnpm tsx scripts/merge-technologie-into-seed.ts
//
// ══════════════════════════════════════════════════════════════════════════
//  WHAT THIS UNIT OWNS, AND WHAT IT ONLY QUOTES
// ══════════════════════════════════════════════════════════════════════════
//
// Owns ONE thing, and it is lexical and register, not grammatical:
//
//   ONE REFERENT, THREE VOICES. Every tech object in French has more than one
//   name, and which name you use says who you are talking to. The flagship
//   case ships all three rungs already published, which is what makes it
//   teachable rather than aspirational:
//
//     SYSTEM  une adresse électronique   fr.a2.rp-technologie.012
//     AGENT   un courriel                fr.a2.internet.002  (+ 9 more headwords)
//     FRIEND  un mail                    NOWHERE. Authored here, at E(182).
//
//   This is the only error in the band that is wrong in BOTH directions.
//   Everywhere else over-politeness is safe. Here, `un mail` in Montreal is
//   marked and `un courriel` to a Parisian friend is marked the other way.
//
// QUOTED, NEVER TAUGHT:
//
//   a2.01  the -ER present. Quoted by unit id in the reframe. It is why the
//          screen chunks are readable at all.
//   a2.07  the repair move. SIX FROZEN IDS, cited, zero authored here. And
//          this unit teaches its ABSENCE: against a machine there is nobody
//          to say « Pardon ? » to.
//   a2.29  the register ladder. Three rung NAMES quoted verbatim, rows cited
//          by itemId, zero rung rows authored. See §D on why a2.29's ladder
//          and this unit's three voices are different objects.
//   a2.18  depuis. Used in fault descriptions, never taught.
//   a2.26  price, change, payment. `un forfait mobile` is a plan, not a
//          transaction, and this unit builds no payment moment.
//   a2.30  job-title feminisation, band policy C4. `un technicien` is on the
//          import list and this unit mints no competing feminine.
//
// ══════════════════════════════════════════════════════════════════════════
//  §A. WHAT THE PROMPT AND THE DESIGN GOT WRONG, MEASURED 2026-08-16
// ══════════════════════════════════════════════════════════════════════════
//
//  1. THE THEME RE-MAP IS ALREADY DONE, IN ALL THREE PLACES.
//     The prompt's §1.1 calls `themes: ['technologie']` a phantom and says
//     « This is the one field you change », with a before/after table. It is
//     already `['internet']` in `author-full-curriculum-spine.ts:839`, in the
//     `content_units` row, and in `seed.json`. a2.07's build did it under the
//     collation's blocking step 2 on 2026-08-15 and recorded it in
//     `07-BAND-ID-LEDGER.md` §2. The prompt was written in parallel and never
//     learned it. THIS BUILD CHANGES NO SPINE FIELD AT ALL.
//
//  2. THE THEME CELL WAS ALREADY CLOSED, AND THE PROBE AGREES.
//     `internet` 336 published, `technologie-quotidienne` 196. The primary
//     rule (« most published rows ») settles it at `internet` by 336 to 196
//     and the tie-break never fires. NEXT FREE ID was `fr.a2.internet.182`,
//     exactly the ledger's allocated block start.
//
//  3. `le clavardage` IS NOT A HEADWORD. The prompt's §8.2 table says the
//     four Quebec forms hold « 0, 1, 0 and 0 headwords respectively ». The 1
//     is wrong: `clavardage` appears in exactly one published row and that
//     row is a SENTENCE. `corpus:probe --words "le clavardage"` reports
//     ABSENT in every article form. All four are authored here.
//
//  4. THE `quebec` TAG EXISTS AND IS IN USE ON EIGHT PUBLISHED ROWS.
//     The design's §2.6 measured « rows carrying a `quebec` tag: 0 » and the
//     prompt's §5.2 forbids proposing one on the grounds that « there is no
//     schema field for region ». Both are stale. `tags` is a plain text array
//     and `quebec` is already a de-facto convention on:
//
//       fr.a2.ecole.027, fr.a2.ecole.028                    (a2.31, THIS BAND)
//       fr.a2.quebec-et-francophonie.197 .. .202            (six rows)
//
//     So this build PROPOSES NOTHING and adds no schema field. It follows the
//     precedent a2.31 set eight rows ago and tags its four regional rows
//     `quebec`, which is the opposite of inventing a mechanism.
//
//  5. « TWELVE CORPUS ROWS CARRY A vous-IMPERATIVE » IS RIGHT ABOUT THE
//     HEADWORDS AND WRONG ABOUT THE CORPUS. Measured with a subjectless-form
//     pattern anchored at a sentence boundary (so « Vous prenez » never
//     counts): 114 published rows carry one, across fifteen themes, and
//     EXACTLY TWELVE of them are headwords. The design's figure is the
//     headword slice. Both numbers are in §G, because the report needs them.
//
//  6. ZERO OF THE 114 SIT IN ANY OF THE FIVE TECH THEMES. « None of them
//     tech » is confirmed, and it is the strongest single piece of evidence
//     for the B1 slot this unit's report exists to open.
//
//  7. THE REPEATED-`scenario` DEVICE CHECK HAS ALREADY RUN, AND PASSED.
//     `46-DEVICE-CHECK-RESULTS.md`, Pixel 6, 2026-08-16: « a2.29 and a2.32
//     are released. Both may author two `scenario` sections as designed.
//     Neither needs a fallback. » The prompt's §0 row 6 and §6 mission 18
//     both tell this build to run it and take a `cardDeck` fallback if it
//     fails. It ran, it passed, and mission 18 ships as the second
//     `scenario`.
//
//  Confirmed EXACTLY as stated, and worth saying because most of the file is
//  corrections: voiceflash 61/181, dictation 39/181, phrase respell 3/23,
//  word respell 62/76, `internet` 336/181, `appareils` 321/62,
//  `rp-technologie` 421/111, `technologie-quotidienne` 196/70,
//  `reseaux-sociaux` 0 at a1 and 0 at a2, `un mail` 0 headwords,
//  `un mél` 0 rows, `courriel` 82 rows corpus-wide,
//  `fr.a2.rp-technologie.012` and `fr.a2.internet.002` at the ids claimed.
//
// ══════════════════════════════════════════════════════════════════════════

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

export const UNIT = {
  id: 'a2.32',
  seq: 31,
  title: 'Technology',
  sub: 'La technologie',
  canDo: 'Can talk about their phone, the internet and everyday digital tasks',
  themes: ['internet'],
  prereqUnitIds: ['a2.01'],
} as const;

export const LESSON_ID = 'a2.32.l1';
export const THEME = 'internet';

/* ── MEASURED AGAINST POSTGRES 2026-08-16, NOT CARRIED FROM ANY DOCUMENT ── */

export const THEME_ROWS_BEFORE = 336;   // published, all levels
export const THEME_A2_BEFORE = 181;     // max fr.a2.internet.181, no gaps
export const THEME_B1_BEFORE = 155;
export const THEME_A1_BEFORE = 0;       // WHY THIS THEME: a1.03 cannot be moved
export const THEME_SEED_BEFORE = 0;     // A CUT. This build pulls it across.

/** The five themes the spine's phantom `technologie` could have re-mapped to.
 *  Every figure a probe, every probe run 2026-08-16. */
export const THEME_CANDIDATES = {
  internet: { published: 336, a2: 181, seed: 0 },
  'technologie-quotidienne': { published: 196, a2: 70, seed: 0 },
  appareils: { published: 321, a2: 62, seed: 0 },
  'rp-technologie': { published: 421, a2: 111, seed: 0 },
  'reseaux-sociaux': { published: 320, a2: 0, seed: 0 },
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §B. THE ID BLOCK
 *
 *  `07-BAND-ID-LEDGER.md` §3 allocates `fr.a2.internet.182` – `.253`, and the
 *  probe's NEXT FREE ID on the day of the build is `.182`. The block held.
 *
 *  CHECK THE ROW COUNT AFTER THE APPLY, NOT THE MAXIMUM ID. a1.19/a1.20 and
 *  a1.14/a1.15 both had a concurrent lesson land BELOW the top of a range
 *  while a highest-id guard reported clean.
 * ══════════════════════════════════════════════════════════════════════════ */

export const ID_FIRST = 182;
export const ID_LAST = 253;   // allocated
export const ID_USED_LAST = 218;

export const E = (n: number) => `fr.a2.${THEME}.${String(n).padStart(3, '0')}`;

/** a2.30 and a2.31 were in the same parallel group and `bureau` shares eight
 *  headwords with this theme. THE COLLISION IS MOOT AND HERE IS WHY: every one
 *  of the eight is ALREADY PUBLISHED in `internet` as well as in `bureau`, so
 *  this build imports by itemId and authors none of them. Nothing had to be
 *  allocated. a2.30 wrote into `metiers` and a2.31 into `ecole`; `internet`
 *  ran to .181 with no gaps on the morning of this build, so neither landed
 *  here. Verified, not assumed. */
export const CONTENDED_HEADWORDS = {
  'un ordinateur': 'fr.a2.internet.042',
  'un clavier': 'fr.a2.internet.044',
  'une souris': 'fr.a2.internet.045',
  'une imprimante': 'fr.a2.internet.050',
  'un chargeur': 'fr.a2.internet.054',
  'un courriel': 'fr.a2.internet.002',
  taper: 'fr.a2.internet.088',
  recevoir: 'fr.a2.internet.082',
} as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §C. THE REFRAME AND THE THREE VOICES
 * ══════════════════════════════════════════════════════════════════════════ */

/** Carried verbatim across seven sections. The density validator wants three;
 *  doctrine §B.4 and the prompt's §6 both want six. */
export const REFRAME =
  "L'écran vous donne un ordre, l'agent vous pose une question, l'ami vous parle. "
  + 'Trois voix, un seul appareil.';

/** THE THREE VOICES. Not rungs.
 *
 *  Settled by the band consistency pass 2026-08-15: a numbered `rung N`
 *  belongs to a2.07's repair move and to NOTHING else; a2.29's ladder is cited
 *  by rung NAME; and this unit's three are VOICES, because nothing escalates
 *  between them. A learner meeting three different ladders in one band would
 *  remember none of them. The word "rung" appears in no authored string in
 *  this lesson and a test asserts it. */
export const VOICE_SYSTEM = 'SYSTEM';
export const VOICE_AGENT = 'AGENT';
export const VOICE_FRIEND = 'FRIEND';
export const VOICES = [VOICE_SYSTEM, VOICE_AGENT, VOICE_FRIEND] as const;

/** The flagship referent, all three names, with where each one lives. The
 *  required layout (§7.1) is that these three sit on ONE screen with the same
 *  referent visible; splitting it makes the Owns two small lessons. */
export const LADDER_OF_VOICES = [
  { voice: VOICE_SYSTEM, fr: 'une adresse électronique', itemId: 'fr.a2.rp-technologie.012' },
  { voice: VOICE_AGENT, fr: 'un courriel', itemId: 'fr.a2.internet.002' },
  { voice: VOICE_FRIEND, fr: 'un mail', itemId: E(182) },
] as const;

/** THE SCORED FORM IS ALWAYS THE FRANCE STANDARD (collation C3, rule 1).
 *  In a typeIn, an mcq key, a dictée target or a groupDrill gate: `un mail`
 *  and `un ordinateur`. The four below are NEVER a scored key, and the batch
 *  and the test both assert it over every scored surface.
 *
 *  NAMED FOR WHAT THE RULE ACTUALLY COVERS, not for Quebec. Three of these are
 *  Quebec forms and `un mél` is not: it is the French administrative
 *  abbreviation, the one printed next to `Tél.`, and filing it as Quebec would
 *  be exactly the error §5.2 rule 3 warns about in the other direction.
 *
 *  It is on the list because the rule is « the scored answer is the France
 *  SPOKEN standard », and `mél` is a thing France writes and does not say.
 *
 *  The three Quebec ones are separated out below, because C3 rule 2 counts
 *  Quebec cards and a list that quietly included `mél` would count wrong. */
export const NEVER_A_SCORED_KEY = [
  'un mél', 'le clavardage', 'la baladodiffusion', 'un téléphone intelligent',
] as const;

export const QUEBEC_ONLY_FORMS = [
  'le clavardage', 'la baladodiffusion', 'un téléphone intelligent',
] as const;

/** C3 rule 2 caps Quebec-naming at ONE cardDeck card per unit, as colour. The
 *  regional tranche of the anglicism map IS that card, so it is the one and
 *  there is no second. Asserted by section id. */
export const QUEBEC_CARD_SECTION = 's08-map';

/* ══════════════════════════════════════════════════════════════════════════
 *  §D. HOW THIS LADDER DIFFERS FROM a2.29'S, IN ONE SENTENCE A READER CAN
 *      CHECK
 *
 *    a2.29   ESCALATION. One referent, one voice, RISING FORCE. The axis is
 *            HOW HARD YOU PUSH, and the reframe is "take the person out of
 *            the sentence."
 *
 *    a2.32   REGISTER. One referent, THREE voices, no force at all. The axis
 *            is WHO YOU ARE TALKING TO. All three are equally polite; two of
 *            the three are simply wrong for the listener.
 *
 *  The check: in a2.29 the three are ordered and you climb them. Here they
 *  are not ordered and you pick one. A test asserts that no authored string
 *  in this lesson escalates a request.
 * ══════════════════════════════════════════════════════════════════════════ */

export const REPAIR_UNIT = 'a2.07';
export const LADDER_UNIT = 'a2.29';
export const VERB_UNIT = 'a2.01';
export const TIME_UNIT = 'a2.18';      // depuis. Used, never taught.
export const PRICE_UNIT = 'a2.26';
export const FEMINISE_UNIT = 'a2.30';
export const BILAN_UNIT = 'a2.35';
export const SHARED_FINDING_UNIT = 'a2.27';   // NOT a citation. See §G.

/** a2.07's SIX FROZEN REPAIR ROWS (`04-REPAIR-MOVE-IDS.md`). Cited by id,
 *  never re-typed, and this build authors ZERO repair rows. */
export const REPAIR_IDS = [
  'fr.a2.au-restaurant.132', 'fr.a2.au-restaurant.133', 'fr.a2.au-restaurant.134',
  'fr.a2.au-restaurant.135', 'fr.a2.au-restaurant.136', 'fr.a2.au-restaurant.137',
] as const;

export const REPAIR_FR = [
  'Pardon ?',
  "Vous pouvez répéter, s'il vous plaît ?",
  "Plus lentement, s'il vous plaît.",
  "Je n'ai pas bien compris.",
  "Qu'est-ce que ça veut dire ?",
  "Vous pouvez me l'écrire, s'il vous plaît ?",
] as const;

/** a2.29's THREE RUNG NAMES (`47-LADDER-RUNG-IDS.md`). Quoted VERBATIM or not
 *  at all: a paraphrase is a second ladder. Clause 4 of the contract forbids
 *  renaming, adding a fourth, or reordering. */
export const RUNG_1 = 'Ask once, softly.';
export const RUNG_2 = 'Say it again, without the person.';
export const RUNG_3 = 'Ask for the person who can fix it.';
export const RUNGS = [RUNG_1, RUNG_2, RUNG_3] as const;

/** One row per rung, which is clause 3's allowance used at its minimum: this
 *  unit adds its OWN column (the machine) filled with its OWN vocabulary, and
 *  reuses a2.29's rows rather than authoring any. */
export const LADDER_IDS = [
  'fr.a2.hebergement.074',   // rung 1 — Est-ce que je peux avoir ... ?
  'fr.a2.hebergement.087',   // rung 2 — Ça ne marche toujours pas.
  'fr.a2.hebergement.092',   // rung 3 — Est-ce que quelqu'un peut venir voir ?
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §E. THE FORTY PERCENT RULE (collation §1.5)
 *
 *  At least 40 percent of newly authored rows must be in the voice of the
 *  person the learner is talking to. The corpus authored only the learner's
 *  half of every situation; the other party's speech does not exist.
 *
 *  For this unit the other party is THREE people: the machine, the support
 *  agent and the friend. Measured in the batch and in the test, never claimed
 *  in prose, because a sentence in a report cannot fail.
 * ══════════════════════════════════════════════════════════════════════════ */

export const OTHER_VOICE_FLOOR = 0.4;

/* ══════════════════════════════════════════════════════════════════════════
 *  §F. THE ROWS
 *
 *  Doctrine §E as settled by a2.05 and a2.20: a conjugated form is not a
 *  corpus item and a participle is NEVER one. Everything here is a noun, a
 *  fixed chunk or a full sentence.
 *
 *  Sentence budget 14 words. Passé composé and futur proche are permitted and
 *  both are needed (`ça s'est bloqué`, `je vais vérifier`).
 *
 *  THE SIX INTERFACE CHUNKS AND THE FIVE MENU LINES ARE THE MACHINE'S VOICE
 *  AND THEY DID NOT EXIST. Probed 2026-08-16: `Veuillez patienter`,
 *  `Saisissez votre code`, `Réessayez plus tard`, `Appuyez sur Entrée`,
 *  `Sélectionnez une option` and `Mot de passe oublié` are pg=0 and seed=0,
 *  every one. So are `ça ne marche pas`, `ça bugue`, `un technicien` as a
 *  sentence and `le message dit`.
 * ══════════════════════════════════════════════════════════════════════════ */

type Voice = 'learner' | 'other' | 'neutral';
type Row = Item & { voice: Voice };

const sent = (n: number, fr: string, en: string, respell: string, voice: Voice, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'sentence', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1, voice,
});
const phrase = (n: number, fr: string, en: string, respell: string, voice: Voice, tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'phrase', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1, voice,
});
const word = (n: number, fr: string, en: string, respell: string, gender: 'm' | 'f', tags: string[], drills: Item['drills']): Row => ({
  id: E(n), kind: 'word', level: 'a2', theme: THEME, fr, en, respell, gender, tags, drills, version: 1, voice: 'neutral',
});

const FCV = ['flashcard', 'voiceflash'] as Item['drills'];
const FCVR = ['flashcard', 'voiceflash', 'review'] as Item['drills'];
const FCVDR = ['flashcard', 'voiceflash', 'dictation', 'review'] as Item['drills'];

/* ── THE THIRD VOICE, AND THE THREE REGIONAL FORMS. .182-.186 ───────────────
 *  `un mail` is the FRIEND rung and it is not a headword anywhere in 48,325
 *  rows: it appears only inside sentences (fr.sons.alphabet.012/.041/.046,
 *  fr.b1.universite.144). The Owns needs all three rungs as headwords, so it
 *  is authored, and it is the FRANCE-STANDARD scored form.
 *
 *  `un mél` is NOT a Quebec form and must not be filed as one. It is the
 *  French administrative abbreviation, the one that sits next to `Tél.` on a
 *  letterhead, and it is 0 rows at every level. The other three ARE Quebec,
 *  tagged `quebec` after the precedent a2.31 set at fr.a2.ecole.027/.028.
 *
 *  `un mél` and `un mail` are HOMOPHONES, both /œ̃ mɛl/, which is the whole
 *  joke of the abbreviation and is why both carry the same respelling.      */

export const VOICE_ROWS: Row[] = [
  word(182, 'un mail', 'an email (what people say in France)', 'uhⁿ MEL', 'm', ['voice', 'friend', 'france'], FCVR),
  word(183, 'un mél', 'an email (the abbreviation on a French form)', 'uhⁿ MEL', 'm', ['voice', 'system', 'colour'], FCVR),
  word(184, 'le clavardage', 'chat, online messaging', 'luh kla-var-DAHZH', 'm', ['voice', 'quebec', 'colour'], FCVR),
  word(185, 'la baladodiffusion', 'podcasting', 'la ba-la-do-dee-fü-ZYOHⁿ', 'f', ['voice', 'quebec', 'colour'], FCVR),
  word(186, 'un téléphone intelligent', 'a smartphone', 'uhⁿ tay-lay-FON ehⁿ-tay-lee-ZHAHⁿ', 'm', ['voice', 'quebec', 'colour'], FCVR),
];

/* ── THE MACHINE'S VOICE, PART ONE: THE SIX INTERFACE CHUNKS. .187-.193 ─────
 *  ACT 2 HAS NO PARADIGM (Paul, 2026-08-15, option B). These are a CHUNK
 *  INVENTORY: the things a French interface actually says, learned whole,
 *  with what each one means you should do. No production rule is stated,
 *  taught, drilled or quizzed anywhere in this lesson, and no card says a
 *  form is made by deleting anything.
 *
 *  Seven rather than six, because the prompt's §6 mission 5 list and the
 *  design's §7.2 list differ by one and both strings are real screen copy.
 *
 *  NOT ONE OF THEM ATTACHES A PRONOUN. `Connectez-vous` and `Abonnez-vous`
 *  are deliberately absent: a2.06 taught the preverbal position only, and the
 *  hyphen is invisible to fold() anyway.                                    */

export const INTERFACE_ROWS: Row[] = [
  phrase(187, 'Cliquez sur le lien', 'Click the link', 'klee-KAY sür luh LYEHⁿ', 'other', ['screen', 'system'], FCVR),
  phrase(188, 'Saisissez votre code', 'Enter your code', 'say-zee-SAY votr KOD', 'other', ['screen', 'system'], FCVDR),
  phrase(189, 'Appuyez sur Entrée', 'Press Enter', 'a-pwee-YAY sür ahⁿ-TRAY', 'other', ['screen', 'system'], FCVR),
  phrase(190, 'Veuillez patienter', 'Please wait', 'veu-YAY pa-syahⁿ-TAY', 'other', ['screen', 'system'], FCVDR),
  phrase(191, 'Sélectionnez une option', 'Choose an option', 'say-lek-syo-NAY ü-nop-SYOHⁿ', 'other', ['screen', 'system'], FCVDR),
  phrase(192, 'Réessayez plus tard', 'Try again later', 'ray-ay-say-YAY plü TAR', 'other', ['screen', 'system'], FCVDR),
  phrase(193, 'Mot de passe oublié ?', 'Forgotten your password?', 'moh duh PASS oo-BLYAY', 'other', ['screen', 'system'], FCVR),
];

/* ── THE MACHINE'S VOICE, PART TWO: THE AUTOMATED MENU. .194-.198 ───────────
 *  Mission 11's `listening`, and THE MOST LIFTABLE THING IN THE BAND: a phone
 *  menu needs no setup at all, so a2.35 can drop it into a mixed-situation CO
 *  set without a word of framing (§3.2 obligation 1).
 *
 *  TEF/TCF CO plays each recording ONCE, so the questions ask WHAT TO PRESS,
 *  never what the third option was.                                          */

export const MENU_ROWS: Row[] = [
  sent(194, 'Bienvenue au service technique.', 'Welcome to technical support.', 'byehⁿ-vuh-NÜ oh sehr-VEESS tek-NEEK', 'other', ['menu', 'system'], FCVR),
  sent(195, 'Pour un problème de connexion, tapez 1.', 'For a connection problem, press 1.', 'poor uhⁿ pro-BLEM duh ko-nek-SYOHⁿ ta-PAY UHⁿ', 'other', ['menu', 'system'], FCVDR),
  sent(196, 'Pour un mot de passe oublié, tapez 2.', 'For a forgotten password, press 2.', 'poor uhⁿ moh duh PASS oo-BLYAY ta-PAY DEU', 'other', ['menu', 'system'], FCVR),
  sent(197, 'Pour parler à un technicien, tapez 3.', 'To speak to a technician, press 3.', 'poor par-LAY ah uhⁿ tek-nee-SYEHⁿ ta-PAY TRWA', 'other', ['menu', 'system'], FCVR),
  sent(198, 'Pour réécouter ce menu, tapez 9.', 'To hear this menu again, press 9.', 'poor ray-ay-koo-TAY suh muh-NÜ ta-PAY NUHF', 'other', ['menu', 'system'], FCVR),
];

/* ── THE FAULT, IN THE LEARNER'S VOICE. .199-.206 ───────────────────────────
 *  Act 5 needs turns the corpus does not hold. The support agent CANNOT SEE
 *  THE SCREEN, so the learner has to be more explicit than a shared physical
 *  setting would ever require: what happened, when it started, what they
 *  already tried, and what the message said.
 *
 *  That is the only place in the band where explicitness is forced by the
 *  CHANNEL rather than by politeness, and it is TEF EO Section A.            */

export const FAULT_ROWS: Row[] = [
  sent(199, "Ça s'est bloqué ce matin.", 'It froze this morning.', 'sa seh blo-KAY suh ma-TEHⁿ', 'learner', ['fault', 'when'], FCVDR),
  sent(200, "J'ai déjà essayé de redémarrer.", 'I have already tried restarting it.', 'zhay day-ZHA ay-say-YAY duh ruh-day-ma-RAY', 'learner', ['fault', 'tried'], FCVDR),
  sent(201, 'Le message dit que le code a expiré.', 'The message says the code has expired.', 'luh may-SAHZH DEE kuh luh KOD a ek-spee-RAY', 'learner', ['fault', 'said'], FCVDR),
  sent(202, 'Ça fait deux jours que ça ne marche plus.', 'It has not worked for two days.', 'sa feh deu ZHOOR kuh sa nuh MARSH PLÜ', 'learner', ['fault', 'when'], FCVDR),
  sent(203, 'Le site refuse mon mot de passe.', 'The site is rejecting my password.', 'luh SEET ruh-FÜZ mohⁿ moh duh PASS', 'learner', ['fault', 'what'], FCVDR),
  sent(204, "J'ai reçu un code, mais il ne marche pas.", 'I received a code, but it does not work.', 'zhay ruh-SÜ uhⁿ KOD meh eel nuh marsh PAH', 'learner', ['fault', 'what'], FCVR),
  sent(205, "L'écran affiche un message d'erreur.", 'The screen is showing an error message.', 'lay-KRAHⁿ a-FEESH uhⁿ may-SAHZH day-RUR', 'learner', ['fault', 'what'], FCVDR),
  sent(206, "Je n'arrive pas à me connecter depuis hier.", 'I have not been able to log in since yesterday.', 'zhuh na-REEV pah ah muh ko-nek-TAY duh-pwee YEHR', 'learner', ['fault', 'when'], FCVR),
];

/* ── THE SUPPORT AGENT'S VOICE. .207-.212 ──────────────────────────────────
 *  The AGENT rung of the three voices, and six rows of the forty percent.
 *
 *  The agent is being ASKED FOR HELP, NOT PUSHED. a2.29 owns escalation and
 *  this unit does not re-teach it: nothing here says `parler au responsable`,
 *  nothing here restates a complaint, and no line rises in force.            */

export const AGENT_ROWS: Row[] = [
  sent(207, "Qu'est-ce qui s'affiche exactement à l'écran ?", 'What exactly is showing on the screen?', 'kess kee sa-FEESH eg-zak-tuh-MAHⁿ ah lay-KRAHⁿ', 'other', ['agent', 'vous'], FCVR),
  sent(208, "Depuis quand est-ce que ça ne marche plus ?", 'How long has it not been working?', 'duh-pwee KAHⁿ ess kuh sa nuh MARSH PLÜ', 'other', ['agent', 'vous'], FCVR),
  sent(209, "Vous avez essayé de redémarrer l'appareil ?", 'Have you tried restarting the device?', 'voo-za-VAY ay-say-YAY duh ruh-day-ma-RAY la-pa-RAY', 'other', ['agent', 'vous'], FCVR),
  sent(210, 'Je vais vérifier votre compte, ne quittez pas.', 'I am going to check your account, please hold.', 'zhuh VEH vay-ree-FYAY votr KOHⁿT nuh kee-TAY PAH', 'other', ['agent', 'vous'], FCVR),
  sent(211, 'Votre code arrive dans deux minutes par courriel.', 'Your code will arrive in two minutes by email.', 'votr KOD a-REEV dahⁿ deu mee-NÜT par koo-RYEL', 'other', ['agent', 'vous'], FCVR),
  sent(212, 'Rappelez demain si le problème continue.', 'Call back tomorrow if the problem continues.', 'ra-play duh-MEHⁿ see luh pro-BLEM kohⁿ-tee-NÜ', 'other', ['agent', 'vous'], FCVR),
];

/* ── THE FRIEND. .213-.218 ─────────────────────────────────────────────────
 *  The `tu` half of the ladder is ENTIRELY UNAUTHORED in 48,325 rows, and it
 *  is what makes the Owns producible rather than merely recognisable: the
 *  same fault, in the other voice, is the contrast the whole unit turns on.
 *
 *  `ça bugue` is familiar and `cela dysfonctionne` (fr.a2.internet.011) is
 *  its formal twin, which the corpus already published with a `notes` field
 *  saying exactly that. This build cites that row rather than restating it.  */

export const FRIEND_ROWS: Row[] = [
  phrase(213, 'ça bugue', "it's playing up", 'sa BÜG', 'learner', ['friend', 'tu'], FCVR),
  phrase(214, 'mon ordi rame', 'my computer is crawling', 'mohⁿ nor-dee RAM', 'learner', ['friend', 'tu'], FCVR),
  sent(215, "Je te l'envoie par mail.", "I'll send it to you by email.", 'zhuh tuh lahⁿ-VWA par MEL', 'learner', ['friend', 'tu'], FCVDR),
  sent(216, "T'as essayé de le redémarrer ?", 'Have you tried restarting it?', 'ta ay-say-YAY duh luh ruh-day-ma-RAY', 'other', ['friend', 'tu'], FCVR),
  sent(217, 'Ça me le fait aussi depuis hier.', 'Mine has been doing it since yesterday too.', 'sa muh luh FEH oh-SEE duh-pwee YEHR', 'other', ['friend', 'tu'], FCVR),
  sent(218, "Tu peux m'envoyer une capture d'écran ?", 'Can you send me a screenshot?', 'tü peu mahⁿ-vwa-YAY ün kap-TÜR day-KRAHⁿ', 'other', ['friend', 'tu'], FCVR),
];

export const ROWS: Row[] = [
  ...VOICE_ROWS, ...INTERFACE_ROWS, ...MENU_ROWS,
  ...FAULT_ROWS, ...AGENT_ROWS, ...FRIEND_ROWS,
];

export const ALL_ROWS = ROWS;

/* ══════════════════════════════════════════════════════════════════════════
 *  §G. THE CURRICULUM FINDING THIS BUILD FILES
 *
 *  PAUL ANSWERED DECISION ITEM 2 ON 2026-08-15: OPTION B. NOBODY OWNS THE
 *  IMPERATIVE. This unit does not take it, a2.27 does not take it, and both
 *  use it as unanalysed lexis. Path A is the build; Path B is dead and is not
 *  in this file in any form.
 *
 *  So this is not a choice being reported. It is a FINDING being filed, and
 *  it is the evidence a B1 slot gets opened against later.
 * ══════════════════════════════════════════════════════════════════════════ */

/** Rows carrying a subjectless `vous`-imperative, measured 2026-08-16 with a
 *  pattern anchored at a sentence boundary so `Vous prenez` never counts. */
export const IMPERATIVE_ROWS_CORPUS_WIDE = 114;
export const IMPERATIVE_ROWS_IN_TECH_THEMES = 0;

/** THE TWELVE. `kind <> 'sentence'`, which is the slice the design measured
 *  and reported as the whole. Not one of them is a technology row, not one is
 *  taught anywhere, and no unit in the 75-unit spine mentions the mood. */
export const IMPERATIVE_HEADWORDS = [
  { id: 'fr.a1.dictee.129', fr: 'Excusez-moi.' },
  { id: 'fr.a1.dictee.131', fr: "Répétez, s'il vous plaît." },
  { id: 'fr.a1.dictee.137', fr: 'Asseyez-vous.' },
  { id: 'fr.a1.dictee.140', fr: 'Écoutez bien.' },
  { id: 'fr.a1.dictee.141', fr: 'Regardez le tableau.' },
  { id: 'fr.a1.dictee.144', fr: 'Prenez un stylo.' },
  { id: 'fr.a1.dictee.145', fr: 'Sortez une feuille.' },
  { id: 'fr.a1.salutations.014', fr: 'Excusez-moi' },
  { id: 'fr.a1.salutations.093', fr: 'Entrez, je vous en prie' },
  { id: 'fr.a1.salutations.094', fr: 'Faites comme chez vous' },
  { id: 'fr.a1.salutations.110', fr: 'Passez une bonne journée' },
  { id: 'fr.a2.au-restaurant.063', fr: 'Prenez votre temps pour choisir.' },
] as const;

/** THE MOOD IS NEVER NAMED ON A LEARNER SURFACE, and no authored string
 *  states a rule for forming an order. This is the assertion that pins Paul's
 *  decision into the build, so it is exact and its failure message says why.
 *  a2.27's suite carries the same pair. */
export const FORBIDDEN_MOOD_WORDS = ['imperative', 'impératif', 'imperatif'] as const;

/** The paradigm with the label filed off. A lesson can avoid the word and
 *  still teach the rule, and this is the shape it would take. */
export const FORBIDDEN_FORM_RULES = [
  'drop the little word',
  'drop the pronoun',
  'remove the pronoun',
  'delete the pronoun',
  'take the vous off',
  'without the vous',
  'from the vous form',
  'is made by deleting',
  'built from the infinitive',
  'from an infinitive',
] as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §H. THE IMPORTS
 *
 *  Collation §1.3's settled rule: A DB ROW THAT IS PUBLISHED IS REACHABLE AND
 *  MUST BE IMPORTED BY itemId, NEVER RE-AUTHORED.
 *
 *  This unit is the most import-dominant in the band and it has to be. Every
 *  one of the 42 tech headwords the design checked already lives in two or
 *  more themes; `un ordinateur` exists SEVEN times. Authoring `un mot de
 *  passe` fresh would have created an eighth home for a word that has seven.
 *
 *  ─── THE DRILL TRAP, AND IT IS LIVE IN THIS THEME ─────────────────────────
 *
 *  `internet`/a2 splits into three drill populations and a section that names
 *  the wrong one draws nothing:
 *
 *    .001-.034   flashcard + voiceflash   deck-able AND practice-able
 *    .042-.076   flashcard + review       deck-able, NOT practice-able
 *    .077-.111   voiceflash + review      practice-able, NOT DECK-ABLE
 *
 *  The third population is the hazard: a `deckTranche` release of any of the
 *  35 screen-action verbs is a line that validates, publishes and serves no
 *  card, which is a1.08's failure and a2.31 met it again at eighteen rows.
 *  EVERY ROW IN `screenVerbs` BELOW IS NAMED BY itemId IN A groupDrill OR A
 *  practice SECTION AND RELEASED BY NO TRANCHE. The batch asserts it.
 *
 *  ─── AND THE TWO ROWS NOBODY MAY TOUCH ────────────────────────────────────
 *
 *  `fr.a2.internet.009` and `.010` are metalinguistic commentary stored as
 *  corpus rows. See §I.
 * ══════════════════════════════════════════════════════════════════════════ */

export const IMPORTED: Record<string, string[]> = {
  /** THE SYSTEM RUNG, and the fault vocabulary the design named. All from
   *  `rp-technologie`, which is the role-play theme and is import-only here. */
  system: [
    'fr.a2.rp-technologie.012',   // une adresse électronique — THE SYSTEM VOICE
    'fr.a2.rp-technologie.011',   // un identifiant
    'fr.a2.rp-technologie.032',   // un code de vérification
    'fr.a2.rp-technologie.033',   // un espace de stockage
  ],

  /** THE FAULT. `une panne` and `un technicien` are the two the design named
   *  and both are `flashcard, review`, so they are deck-able and not
   *  practice-able. Filed here rather than in `screenVerbs` for that reason. */
  fault: [
    'fr.a2.rp-technologie.027',   // une panne
    'fr.a2.rp-technologie.028',   // un technicien
    'fr.a2.rp-technologie.026',   // un virus informatique
    'fr.a2.rp-technologie.024',   // une visioconférence
    'fr.a2.rp-technologie.022',   // une capture d'écran
    'fr.a2.rp-technologie.029',   // un forfait mobile — a PLAN, not a transaction (a2.26)
    'fr.a2.rp-technologie.030',   // un opérateur téléphonique
    'fr.a2.internet.039',         // Il y a un problème avec ma connexion.
    'fr.a2.internet.041',         // Le site internet est fermé pour maintenance.
  ],

  /** THE FAULT VERBS. `flashcard + voiceflash + review` on all four, so these
   *  are the only fault rows that can be both released and spoken. */
  faultVerbs: [
    'fr.a2.rp-technologie.002',   // lent
    'fr.a2.rp-technologie.003',   // redémarrer
    'fr.a2.rp-technologie.004',   // faire réparer
  ],

  /** THE INTERFACE LEXICON. `.001-.034`, flashcard + voiceflash throughout,
   *  which is the one population that serves every surface this lesson has. */
  interface: [
    'fr.a2.internet.001',   // un mot de passe
    'fr.a2.internet.002',   // un courriel — THE AGENT VOICE
    'fr.a2.internet.003',   // télécharger
    'fr.a2.internet.012',   // Internet
    'fr.a2.internet.013',   // un site web
    'fr.a2.internet.014',   // une page web
    'fr.a2.internet.015',   // un moteur de recherche
    'fr.a2.internet.016',   // faire une recherche
    'fr.a2.internet.017',   // un lien
    'fr.a2.internet.018',   // le wifi — said weefee, and it earns its chip
    'fr.a2.internet.019',   // une connexion
    'fr.a2.internet.020',   // se connecter
    'fr.a2.internet.021',   // un navigateur
    'fr.a2.internet.022',   // enregistrer
    'fr.a2.internet.023',   // un fichier
    'fr.a2.internet.024',   // un onglet
    'fr.a2.internet.025',   // en ligne
    'fr.a2.internet.026',   // un identifiant
    'fr.a2.internet.027',   // l'application
    'fr.a2.internet.028',   // la mise à jour
    'fr.a2.internet.029',   // le compte en ligne
    'fr.a2.internet.030',   // la pièce jointe
    'fr.a2.internet.031',   // le dossier partagé
    'fr.a2.internet.032',   // imprimer
    'fr.a2.internet.033',   // copier
    'fr.a2.internet.034',   // coller
  ],

  /** THE DEVICE NOUNS. The eight `bureau` contends for are in here and every
   *  one is imported, not authored. `flashcard + review`. */
  devices: [
    'fr.a2.internet.042',   // un ordinateur         <- contended, imported
    'fr.a2.internet.043',   // un ordinateur portable
    'fr.a2.internet.044',   // un clavier            <- contended, imported
    'fr.a2.internet.045',   // une souris            <- contended, imported
    'fr.a2.internet.046',   // un écran
    'fr.a2.internet.047',   // un écran tactile
    'fr.a2.internet.048',   // un smartphone
    'fr.a2.internet.049',   // une tablette
    'fr.a2.internet.050',   // une imprimante        <- contended, imported
    'fr.a2.internet.052',   // un casque
    'fr.a2.internet.053',   // des écouteurs
    'fr.a2.internet.054',   // un chargeur           <- contended, imported
    'fr.a2.internet.055',   // une batterie
    'fr.a2.internet.056',   // une carte SIM
  ],

  /** THE SETTINGS SCREEN AND THE MESSAGE LEXICON. Mission 6 is a French app's
   *  settings screen delivered as a `cardDeck`, which is half of what the
   *  declined `uiScreen` would have bought, at zero engineering. */
  screenNouns: [
    'fr.a2.internet.058',   // un message
    'fr.a2.internet.059',   // un texto
    'fr.a2.internet.060',   // un emoji
    'fr.a2.internet.062',   // un appel
    'fr.a2.internet.063',   // un appel vidéo
    'fr.a2.internet.064',   // un appel manqué
    'fr.a2.internet.065',   // un numéro de téléphone
    'fr.a2.internet.069',   // une notification
    'fr.a2.internet.070',   // les paramètres
    'fr.a2.internet.071',   // le mode avion
  ],

  /** THE SCREEN ACTIONS. `voiceflash + review` AND NO `flashcard`.
   *
   *  NOT DECK-ABLE. Every one is named by itemId in `s09-sort` or `s19-speak`
   *  and released by NO tranche, and the batch asserts exactly that in both
   *  directions: a release draws nothing, and an import nothing names is
   *  unreachable.
   *
   *  TRIMMED FROM FOURTEEN TO TEN DURING THE BUILD, and the reachability half
   *  of that guard is what found it. `double-cliquer`, `glisser`, `zoomer` and
   *  `dézoomer` were on the list because they are in the theme, not because
   *  anything in this lesson says them. An import no section names is a row
   *  carried into the seed for nothing.
   *
   *  The ten that stayed are the ones a support agent actually asks you to do,
   *  which is what `s19-speak` is. */
  screenVerbs: [
    'fr.a2.internet.077',   // allumer
    'fr.a2.internet.078',   // éteindre
    'fr.a2.internet.086',   // cliquer
    'fr.a2.internet.088',   // taper                 <- contended, imported
    'fr.a2.internet.093',   // faire une capture d'écran
    'fr.a2.internet.102',   // ouvrir une application
    'fr.a2.internet.103',   // fermer une application
    'fr.a2.internet.107',   // redémarrer l'ordinateur
    'fr.a2.internet.108',   // verrouiller l'écran
    'fr.a2.internet.109',   // déverrouiller l'écran
  ],

  /** a2.07's repair move, and a2.29's ladder. Neither is this unit's and both
   *  render EMPTY on device if the merge does not carry them: `au-restaurant`
   *  and `hebergement` are foreign themes and the seed is a CUT. */
  cited: [...REPAIR_IDS, ...LADDER_IDS],
};

export const IMPORT_IDS = [...new Set(Object.values(IMPORTED).flat())];

/** Themes this unit reads from and never writes to. The merge prints the seed
 *  population of each before it runs, because all three are cut-affected. */
export const IMPORT_ONLY_THEMES = ['rp-technologie', 'au-restaurant', 'hebergement'] as const;

/** The `voiceflash`-only population, restated as a list the batch can assert
 *  against `deckTranche` rather than as a comment nobody runs. */
export const NOT_DECK_ABLE = IMPORTED.screenVerbs;

/* ══════════════════════════════════════════════════════════════════════════
 *  §I. THE TWO DEFECT ROWS. FLAGGED, NOT REPAIRED.
 *
 *  fr.a2.internet.009
 *    fr: "On dit sur Internet, sans article et avec une majuscule."
 *  fr.a2.internet.010
 *    fr: "Les trois se disent ; courriel est le terme officiel, mail est le
 *         plus courant."
 *
 *  Both verified present and `status: published` on 2026-08-16, and `.010`
 *  carries `flashcard`. They are notes ABOUT French, written IN French,
 *  sitting in a table whose rows are served as flashcards, dictée sentences
 *  and TTS lines. A learner meeting `.010` in the flashcard hub sees a French
 *  sentence explaining French with an English gloss explaining the
 *  explanation.
 *
 *  Same shape doctrine §E settled when it ruled a participle is never a
 *  corpus item.
 *
 *  THE REPAIR IS NOT PART OF THIS BUILD. They are published rows,
 *  `content:publish` is a separate reviewed step, and demoting them touches
 *  shipped content. PROPOSED AND NOT APPLIED:
 *
 *    .009  ->  a lesson `term` (the capital-I rule) plus a `notes` field
 *    .010  ->  a `commonErrors` card, which is what this lesson does with the
 *              material anyway, sourced from its OWN strings
 *
 *  The material is good and this lesson teaches BOTH points. It sources them
 *  from rows it authored, never from these two.
 * ══════════════════════════════════════════════════════════════════════════ */

export const DEFECT_ROWS = ['fr.a2.internet.009', 'fr.a2.internet.010'] as const;

export const DEFECT_PROPOSAL = {
  'fr.a2.internet.009': "demote to a lesson term plus notes: it is the capital-I rule, not an utterance",
  'fr.a2.internet.010': 'demote to a commonErrors card: it is a usage note, not an utterance',
} as const;

/** Scoped to THIS LESSON, never to the bundle (guard-false-positive rule): no
 *  `internet` row this lesson names may have an `fr` that is a sentence about
 *  French. Cheap, and it stops the next author reaching for them. */
export const SENTENCE_ABOUT_FRENCH = [
  /\bon dit\b/i, /\bse disent\b/i, /\ble terme officiel\b/i,
  /\bavec une majuscule\b/i, /\bsans article\b/i,
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §J. THE DICTÉE
 *
 *  `dicteeMode()` switches to WORD tiles above 16 letters when the target is
 *  more than one word. ALL FIVE TARGETS BELOW RESOLVE TO WORD MODE, checked
 *  through the real function in the batch rather than counted by eye, and
 *  that is the mode this mission wants: the exercise is WHICH WORDS THE
 *  MACHINE USED AND IN WHAT ORDER, which is the chunk inventory being tested
 *  as a chunk. Letter mode would be a spelling test on a form the learner was
 *  handed whole, which is one step from the paradigm Path A does not have.
 *
 *  §7.4 RULE 1 HOLDS: not one of the five turns on a hyphen. `Connectez-vous`
 *  and `connectez vous` are one string to the dictée check, so a tile
 *  exercise built on the hyphen cannot be got right or wrong. No target here
 *  contains a hyphen at all.
 * ══════════════════════════════════════════════════════════════════════════ */

export const DICTEE_IDS = [E(188), E(190), E(191), E(192), E(195)];
export const DICTEE_MODE_EXPECTED = 'words' as const;

/* ══════════════════════════════════════════════════════════════════════════
 *  §K. THE FOLD, AND THE BAND RULE
 *
 *  `matchesAccept` calls `fold()` (`answer.logic.ts:32`), which strips
 *  accents, case, punctuation, HYPHENS, the middle dot, BOTH APOSTROPHES and
 *  ALL WHITESPACE. The design's risk 4 was right and the supervisor's
 *  overrule of it has been withdrawn (`03-ANSWER-FOLD-FACT.md`).
 *
 *  The two that bite a technology lesson hardest:
 *
 *      e-mail        folds to   email          ONE ANSWER
 *      mot de passe  folds to   motdepasse     ONE ANSWER
 *
 *  Both are natural distractors and both are dead. `sur Internet` stays dead
 *  on the capital. Teach any of it in a card; do not quiz it.
 *
 *  BAND RULE: fold the expected answer AND the most plausible wrong answer
 *  before authoring any typeIn, errorSpot or dictée item. If they collide,
 *  the item tests nothing and moves to mcq or listenChoose. The pairs below
 *  are every near-miss this lesson leans on, asserted through the REAL fold().
 * ══════════════════════════════════════════════════════════════════════════ */

export const NEAR_MISSES: [string, string][] = [
  ['un mail', 'un mél'],
  ['un mail', 'un courriel'],
  ['un courriel', 'une adresse électronique'],
  ['Veuillez patienter', 'Veuillez patientez'],
  ['Saisissez votre code', 'Saisissez votre codes'],
  ['Réessayez plus tard', 'Réessayer plus tard'],
  ['Sélectionnez une option', 'Sélectionnez un option'],
  ['ça bugue', 'ça bug'],
  ['mon ordi rame', 'mon ordi ram'],
  ["Ça s'est bloqué ce matin.", 'Ça se bloqué ce matin.'],
  ['Le site refuse mon mot de passe.', 'Le site refuse mon mot de pass.'],
];

/** THE PAIRS THAT DO COLLIDE, kept as a list rather than discovered later.
 *  Each of these folds to ONE string, so each is banned from every scored
 *  surface. The test asserts fold(a) === fold(b) for all of them, so the day
 *  fold() changes this list goes stale and we find out. */
export const FOLD_COLLISIONS: [string, string][] = [
  ['e-mail', 'email'],
  ['mot de passe', 'motdepasse'],
  ['sur Internet', 'sur internet'],
  ['sur Internet', 'surinternet'],
  ["l'écran", 'lecran'],
  ['Réessayez', 'reessayez'],
  ['télécharger', 'telecharger'],
  ['ça', 'ca'],
  ['double-cliquer', 'double cliquer'],
];

/* ══════════════════════════════════════════════════════════════════════════
 *  §L. THE GUARDS
 * ══════════════════════════════════════════════════════════════════════════ */

/** Doctrine's jargon rule. The walk covers `Lesson.intro` and
 *  `Lesson.overview` as well as the sections (Corrections §9), runs over a
 *  display() walk so `sub` on a cardDeck card is seen (§13), and checks the
 *  `-s` plural of every entry (§13: `hasPhrase` is boundary-exact, so a list
 *  holding `paradigm` does not catch `paradigms`).
 *
 *  `imperative` and `impératif` are in FORBIDDEN_MOOD_WORDS and asserted
 *  separately BY NAME, because that assertion is what pins Paul's decision
 *  into the build and it must not be lost inside a list. */
export const JARGON = [
  'paradigm', 'conjugation', 'inflection', 'morpheme', 'lexeme',
  'anglicism', 'calque', 'loanword', 'borrowing term', 'diglossia',
  'sociolinguistic', 'register variable', 'code-switching', 'lexical set',
  'formulaic sequence', 'suppletive', 'deverbal', 'allomorph',
  'second person plural', 'mood', 'verbal mood',
] as const;

/** THE HOUSE WORD BOUNDARY EXCLUDES AN APOSTROPHE (Corrections §14.3), so a
 *  guard built on it cannot see `l'écran`, `j'ai` or `qu'est-ce`. This unit's
 *  whole lexicon elides. Drop the apostrophe from the LEFT boundary and keep
 *  it on the right. */
export const APOSTROPHE_EXPOSED = ["l'écran", "j'ai", "qu'est-ce", "d'erreur", "l'appareil"] as const;

/** House style, enforced across the whole seed.
 *
 *  A PLAIN SUBSTRING TEST IN BOTH DIRECTIONS, DELIBERATELY NOT WORD-BOUNDED:
 *  the band's inherited `\bhonest` guard cannot see "dishonest" (a2.06 found
 *  it and every A2 lesson before it carries the broken shape). */
export const BANNED_SUBSTRINGS = ['honest', 'honesty'] as const;

/** Claims the app cannot deliver.
 *
 *  Collation 1.9: `setInterval` is ZERO across all four render files, so
 *  THERE IS NO TIMER ANYWHERE IN THE APP. The design's mission 9 was
 *  "production against the clock" and it is VOID; the drill is gated and
 *  tap-to-continue, and no authored string says otherwise.
 *
 *  And `reading.questions` render as a Press that toggles the answer into
 *  view: nothing is typed and nothing is scored. */
export const FORBIDDEN_CLAIMS = [
  'against the clock', 'you have 30 seconds', 'time yourself', 'countdown',
  'as fast as you can', 'beat the timer', 'before time runs out',
  'type your answer below', 'we will mark your text', 'write 60 words',
  'graded essay', 'your composition will be scored',
] as const;

/** a2.29 owns escalation and this unit must not re-teach it. Nothing here
 *  asks for the person who can fix it, restates a complaint, or rises in
 *  force. `parler au responsable` is the sharpest single marker. */
export const ESCALATION_MARKERS = [
  'parler au responsable', 'le responsable', 'toujours pas', 'la deuxième fois',
  'ça fait deux fois que', "j'ai déjà appelé", 'je veux parler à',
] as const;

/** Collation §3.5: six audio fields validate, publish and are read by NO
 *  renderer. The seed already carries 31 of them. This build authors none. */
export const DEAD_AUDIO_FIELDS = [
  'modelPlayback', 'wrongThenRight', 'perSentenceReplay', 'scoreOn', 'autoplay', 'maxPlays',
] as const;

/** The three fields a2.07 shipped on a Lesson that draw NOTHING
 *  (`41-DEAD-FIELDS-WARNING.md`). `pnpm -C ealch-admin typecheck` is the only
 *  check in this project that sees them, and it is run as part of this build
 *  rather than recommended. */
export const DEAD_LESSON_FIELDS = ['canDo', 'track', 'teaches'] as const;

/** §8.5: `wifi`, `Internet` capitalised mid-sentence, `un ordi`, `SIM`, `USB`,
 *  `GPS` and `emoji` all look wrong to a checker built for ordinary French
 *  orthography. WHITELISTED EXPLICITLY AND DOCUMENTED, per the prompt, rather
 *  than discovered as a red run. */
export const ACRONYM_WHITELIST = [
  'SIM', 'USB', 'GPS', 'PDF', 'SMS', 'OK', 'wifi', 'Wifi', 'Internet',
  'emoji', 'ordi', 'texto', 'web',
] as const;

/** Collation §1.12, and Paul's decision item 4, ACCEPTED 2026-08-15.
 *
 *  This unit carries exam value by TEACHING WHAT THE EXAM TESTS, not by
 *  producing an ExamTask row and not by populating Scenario.exam. The
 *  design's §8.5 escalation (wiring mission 17 to `Scenario.exam`) is
 *  DECLINED: `Scenario.exam` is read by no code anywhere in `ealch-v2/src`,
 *  `EXAM_TASK_TYPES` is a tagging vocabulary with no runner, and `delf_a2` is
 *  not in `EXAM_FORMATS` and is deliberately not being added until the first
 *  `delf_a2` task exists.
 *
 *  Verified 2026-08-16: `content_exam_tasks` holds 2 rows, both `delf_b2`,
 *  both `in_review`. */
export const EXAM_POLICY = {
  examTaskRows: 0,
  examSeriesRows: 0,
  scenarioExam: false,
  addDelfA2ToFormats: false,
} as const;

/** The exam mapping, kept in the source so the report and the build agree.
 *  Authored: none of it. This is what makes the content right and what a
 *  future runner will consume. */
export const EXAM_MAPPING = [
  { exam: 'TEF Canada CO', section: 's11-menu', why: 'automated menu, one hearing, ask what to press' },
  { exam: 'TCF Canada CO', section: 's11-menu', why: 'same shape' },
  { exam: 'DELF A2 CO', section: 's07-heard', why: 'short screen prompts and what to do about them' },
  { exam: 'TEF Canada CE', section: 's12-notice', why: 'locating the actionable clause in a portal notice' },
  { exam: 'TCF Canada CE', section: 's12-notice', why: 'same shape' },
  { exam: 'DELF A2 CE', section: 's12-notice', why: 'notices and short instructions' },
  { exam: 'TEF Canada EO Section A', section: 's17-call', why: 'the learner must ASK, not only report' },
  { exam: 'TCF Canada PO task 2', section: 's17-call', why: 'register consistency across a service exchange' },
] as const;

/** §3.2: the three obligations to a2.35, and the one thing this unit refuses.
 *  Named here so the test can assert the hand-off rather than trust a report. */
export const HANDOFF_TO_BILAN = {
  liftableListening: ['s07-heard', 's11-menu'],
  liftableScenario: 's17-call',
  registerAxis: VOICES,
  /** DOCTRINE §B.5: a lesson owns one thing, and a consolidation act across
   *  the other seven would be a ninth unit hiding inside the eighth. Being
   *  last is a position, not a job. No review-of-the-band act, no
   *  cross-situation roundup, no quiz round drawn from another unit. */
  consolidationAct: false,
} as const;
