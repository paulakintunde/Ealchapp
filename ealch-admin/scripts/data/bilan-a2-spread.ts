// a2.35 "Bilan A2": answer spreading, the assembled homophone list, and the
// coverage arithmetic the two round files are checked against.
//
// a1.30 gave this file one job (answer spreading) and left coverage to its
// test. A2 has thirty-four units instead of twenty-nine and an exam that must
// NOT name any of them, so coverage is no longer a single assertion and it
// lives here beside the data it is computed from.
//
// ══════════════════════════════════════════════════════════════════════════
//  1. WHY THE ANSWERS ARE SPREAD RATHER THAN HAND-BALANCED
// ══════════════════════════════════════════════════════════════════════════
//
// The density validator caps any one option slot at 40% of a lesson's correct
// answers (LIMITS.quizSpreadPct). Authored by hand a capstone drifts hard,
// because the natural place to put the right answer is second: the author
// writes the wrong shape first to name the mistake, then the right one after
// it.
//
// Hand-balancing a hundred and thirty option lists is a transcription job with
// no way to verify it stayed balanced after the next edit, and the authored
// order carries meaning WHILE IT IS BEING WRITTEN. So the authored constants
// keep their readable order and the exported ones are spread. Deterministic,
// because a seed has to be reproducible: no randomness, just the position of
// the question in the list.
//
// This is spreading, not shuffling. The distractors keep their relative order
// and only the correct option moves. The rounds quiz renders authored order
// (MissionRich does; only LessonRich permutes), so the position in the data IS
// the position on the screen.
//
// ══════════════════════════════════════════════════════════════════════════
//  2. THE HOMOPHONE LIST, ASSEMBLED FROM ALL THIRTY-FOUR LESSONS
// ══════════════════════════════════════════════════════════════════════════
//
// No ear question may offer two members of one homophone group: a
// `listenChoose` between two spellings of one sound has no correct answer, and
// marking one right certifies a bug. Across a capstone quoting thirty-four
// lessons this is the single most likely defect, and a sentence in a report
// cannot fail.
//
// The list below is the UNION of every list the band already ships. Collecting
// it turned up something worth recording: THE BAND NEVER SETTLED ON ONE EXPORT
// NAME. Thirteen lessons carry a list and they call it five different things.
//
//   HOMOPHONE_FORMS      a2.02 a2.06 a2.08 a2.10 a2.11 a2.12 a2.15 a2.24
//                        a2.25 a2.33 a2.34
//   HOMOPHONE_GROUPS     a2.16 a2.22 a2.23
//   HOMOPHONE_PAIRS      a2.01   and it holds ITEM IDS, not forms
//   SUFFIX_HOMOPHONES    a2.17   and it holds SUFFIXES, not forms
//   SINGULAR_TRIPLES     a2.13   a paradigm slice, homophonous by construction
//
// So "assemble the list from the lessons' own lists" is not one grep. Three of
// the five shapes hold something other than a pair of surface forms and had to
// be converted: a2.01's item ids were resolved against the corpus, a2.17's
// suffixes were expanded onto the adverbs the band actually prints, and a2.13's
// triples were flattened.
//
// One more thing fell out of it. `pronoms-direct-corpus.ts` ships
//
//     ["Je l'aime.", "Je l'aime."]
//
// as its first group: two identical strings. Every guard in the band, this one
// included, fires only when the two forms differ, so that group can never fire
// and has been inert since a2.06 shipped. It is recorded in the build report
// and is not carried into the union below.

import type { QuizQuestion, QuizRound } from '../../../ealch-v2/src/content/schema.ts';

/* ══════════════════════════════════════════════════════════════════════════
 *  Answer spreading
 * ═══════════════════════════════════════════════════════════════════════ */

/** Move the correct option to `slot`, keeping the other options in order. */
function moveCorrect(opts: string[], from: number, slot: number): string[] {
  const rest = opts.filter((_, i) => i !== from);
  const target = Math.min(slot, rest.length);
  return [...rest.slice(0, target), opts[from], ...rest.slice(target)];
}

/**
 * Spread the correct answers of every closed question across the option slots.
 *
 * Walks the rounds in order and gives the nth closed question the slot
 * `n % opts.length`. With four options throughout that is a flat 25% per slot;
 * where a question offers three, it still cycles evenly within its own width.
 *
 * Only questions with `opts` and a numeric `correct` are touched. typeIn,
 * errorSpot, speak and tapSilent have no slots and pass through untouched.
 */
export function spreadAnswers(rounds: QuizRound[]): QuizRound[] {
  let n = 0;
  return rounds.map((round) => ({
    ...round,
    questions: round.questions.map((q) => {
      if (!Array.isArray(q.opts) || typeof q.correct !== 'number') return q;
      const slot = n++ % q.opts.length;
      if (slot === q.correct) return q;
      return { ...q, opts: moveCorrect(q.opts, q.correct, slot), correct: slot };
    }),
  }));
}

/* ══════════════════════════════════════════════════════════════════════════
 *  The homophone union
 * ═══════════════════════════════════════════════════════════════════════ */

/**
 * Every group of written forms this band has declared to be one sound.
 *
 * Sourced list by list from the thirty-four shipped lessons; see the header for
 * the five names they are declared under and what had to be converted. A group
 * is a set of spellings a learner cannot tell apart by ear, so no `listenChoose`
 * may offer two members of one group as its options.
 */
export const HOMOPHONE_FORMS: readonly (readonly string[])[] = [
  /* seq 1, a2.01. The four silent endings of the regular -er present. */
  ['parle', 'parles', 'parlent'],
  ['travaille', 'travailles', 'travaillent'],
  ['regarde', 'regardes', 'regardent'],
  ['aime', 'aimes', 'aiment'],
  /* seq 2, a2.09. The stem change is a spelling, so the pair is one sound. */
  ['appelle', 'appelles', 'appellent'],
  ['préfère', 'préfères', 'préfèrent'],
  ['jette', 'jettes', 'jettent'],
  /* seq 3, a2.10, verbatim from verbes-ir-corpus.ts. */
  ['finis', 'finit'],
  ['choisis', 'choisit'],
  ['réussis', 'réussit'],
  ['remplis', 'remplit'],
  ['grandis', 'grandit'],
  ['guéris', 'guérit'],
  ['obéis', 'obéit'],
  /* seq 4, a2.11, verbatim from verbes-re-corpus.ts. */
  ['vends', 'vend'],
  ['attends', 'attend'],
  ['réponds', 'répond'],
  ['entends', 'entend'],
  ['perds', 'perd'],
  ['rends', 'rend'],
  ['descends', 'descend'],
  /* seq 5, a2.02, verbatim from aller-venir-corpus.ts. */
  ['viens', 'vient'],
  ['tiens', 'tient'],
  ['vas', 'va'],
  ['reviens', 'revient'],
  ['deviens', 'devient'],
  ['obtiens', 'obtient'],
  /* seq 6, a2.12, verbatim from faire-dire-lire-corpus.ts. */
  ['fais', 'fait'],
  ['dis', 'dit'],
  ['lis', 'lit'],
  /* seq 7, a2.13, flattened out of SINGULAR_TRIPLES in modaux-corpus.ts.
   * Three persons, two spellings, one sound, in every column. */
  ['veux', 'veut'],
  ['peux', 'peut'],
  ['dois', 'doit'],
  /* seq 8, a2.14, verbatim from savoir-connaitre-corpus.ts. The circumflex is
   * inaudible AND, separately, invisible to fold(). */
  ['sais', 'sait'],
  ['connais', 'connaît', 'connait'],
  /* seq 9, a2.15, verbatim from prendre-mettre-corpus.ts. */
  ['prends', 'prend'],
  ['mets', 'met'],
  ['bats', 'bat'],
  /* seq 10, a2.03. Number is never realised; gender in these classes is. */
  ['heureuse', 'heureuses'],
  ['sportive', 'sportives'],
  ['content', 'contents'],
  ['contente', 'contentes'],
  /* seq 11, a2.16, verbatim from beau-nouveau-corpus.ts. */
  ['bel', 'belle', 'belles'],
  ['nouvel', 'nouvelle', 'nouvelles'],
  ['vieil', 'vieille', 'vieilles'],
  ['beau', 'beaux'],
  ['nouveau', 'nouveaux'],
  /* seq 12, a2.17, expanded from SUFFIX_HOMOPHONES onto the adverbs the band
   * prints. The -emment and -amment endings are both /amɑ̃/, which is the
   * whole trap, so the misspelling is a member of its own group. */
  ['évidemment', 'évidamment'],
  ['constamment', 'constemment'],
  ['récemment', 'récamment'],
  /* seq 15 against seq 16, a2.19 and a2.05. The -er infinitive and the -é
   * participle are one sound, and a2.05 names it as its own homophone. */
  ['manger', 'mangé', 'mangés', 'mangée', 'mangées'],
  ['parler', 'parlé', 'parlés', 'parlée', 'parlées'],
  ['travailler', 'travaillé', 'travaillés'],
  ['regarder', 'regardé', 'regardés', 'regardée', 'regardées'],
  ['acheter', 'acheté', 'achetés', 'achetée', 'achetées'],
  ['aller', 'allé', 'allés', 'allée', 'allées'],
  /* seq 17, a2.20. */
  ['pris', 'prise', 'prises'],
  ['mis', 'mise', 'mises'],
  ['dû', 'du', 'dus'],
  ['vu', 'vue', 'vus', 'vues'],
  /* seq 18, a2.21. Fourteen of the fifteen agree in writing only. `mourir` is
   * the one exception, so `mort` and `morte` are deliberately NOT a group. */
  ['venu', 'venue', 'venus', 'venues'],
  ['parti', 'partie', 'partis', 'parties'],
  ['sorti', 'sortie', 'sortis', 'sorties'],
  ['resté', 'restée', 'restés', 'restées'],
  ['né', 'née', 'nés', 'nées'],
  /* seq 19 and 20, a2.22 and a2.23, verbatim from their HOMOPHONE_GROUPS. */
  ['Il se lave.', 'Ils se lavent.'],
  ['Il se lève tôt.', 'Ils se lèvent tôt.'],
  ['Il ne se lave pas.', 'Ils ne se lavent pas.'],
  ["Il s'est lavé.", 'Ils se sont lavés.'],
  ["Elle s'est lavée.", 'Elles se sont lavées.'],
  ["Il s'est levé tôt.", 'Ils se sont levés tôt.'],
  ["Il s'est douché.", 'Ils se sont douchés.'],
  ["Il ne s'est pas levé.", 'Ils ne se sont pas levés.'],
  /* seq 21, a2.06, minus the degenerate self-pair; see the header. */
  ['invité', 'invitée', 'invités', 'invitées'],
  /* seq 22, a2.24, verbatim from pronoms-indirect-corpus.ts. */
  ['leur', 'leurs'],
  ['écrit', 'écrite', 'écrits', 'écrites'],
  ['répondu', 'répondue', 'répondus', 'répondues'],
  /* seq 23, a2.25, verbatim from y-en-corpus.ts. */
  ['pense', 'penses', 'pensent'],
  ['joue', 'joues', 'jouent'],
  ['répond', 'réponds', 'répondent'],
  ['bois', 'boit'],
  ['a', 'à'],
  ['ou', 'où'],
  /* seq 31, a2.32. Its own corpus header names the pair. */
  ['un mél', 'un mail'],
  /* seq 32, a2.08, verbatim from comparatifs-corpus.ts. */
  ['le plus grand', 'les plus grands'],
  ['la plus grande', 'les plus grandes'],
  ['meilleur', 'meilleure', 'meilleurs', 'meilleures'],
  ['plus grand', 'plus grands'],
  ['plus grande', 'plus grandes'],
  /* seq 33, a2.33, verbatim from demonstratifs-corpus.ts. */
  ['cet', 'cette'],
  ['celle', 'celles'],
  ['celle-ci', 'celles-ci'],
  ['celle-là', 'celles-là'],
  /* seq 34, a2.34, verbatim from pronoms-possessifs-corpus.ts, plus the
   * determiner spellings its own lesson pairs them against. */
  ['mien', 'miens'],
  ['mienne', 'miennes'],
  ['tien', 'tiens'],
  ['tienne', 'tiennes'],
  ['sien', 'siens'],
  ['sienne', 'siennes'],
  ['nôtre', 'nôtres', 'notre'],
  ['vôtre', 'vôtres', 'votre'],
];

/**
 * Ear questions whose options cannot be told apart, by EITHER of the two shapes
 * this band uses.
 *
 * THE BAND HAS TWO INCOMPATIBLE GUARD SHAPES AND A GROUP THAT WORKS IN ONE IS
 * DEAD IN THE OTHER. This was found by assembling the union and is the reason
 * this function runs both.
 *
 *   SWAP SHAPE      a2.10, a2.11 and Corrections §5's worked example. Fires when
 *                   substituting one member of a group for another turns one
 *                   option INTO another. Requires the two forms to differ, and
 *                   that requirement is what keeps « Il vend ici. » against
 *                   « Je vends ici. » legal: those differ by their subject
 *                   pronoun as well, so the substitution does not produce the
 *                   other option.
 *
 *   WHOLE-OPTION    a2.06. Fires when two or more options ARE members of one
 *   SHAPE           group outright. It does not care whether the members
 *                   differ, so a2.06's `["Je l'aime.", "Je l'aime."]` is doing
 *                   real work under it: the claim is that ONE string is
 *                   ambiguous with itself, because the elided l' carries no
 *                   gender, and two options both being it has no answer.
 *
 * Under the swap shape alone that group can never fire, which is how a lone
 * reader concludes it is dead. It is not dead; it is written for the other
 * shape. Running both is the only way to hold both claims.
 *
 * AND THE SECOND SHAPE MUST TEST EQUALITY, NOT CONTAINMENT. a2.06 compares with
 * `hasPhrase`, which is right THERE because every one of its groups holds whole
 * options. Transplanted onto a union whose groups hold bare forms it fires on
 * almost everything, because a longer option merely CONTAINING a member says
 * nothing about whether the ear can separate it from another one:
 *
 *   « Je parle français. » against « Tu parles français. »   je and tu differ
 *   « le mien » against « les miens »                        le and les differ
 *   « Three times a day » against « Three at a time »        both contain `a`,
 *                                                            which is a member
 *                                                            of a2.25's a/à
 *
 * All three are answerable and the containment version refused all three. This
 * is Corrections §14.4 one level down: guard the THING and not the letters.
 */
export function homophoneClashes(rounds: readonly QuizRound[]): string[] {
  const bad: string[] = [];
  for (const round of rounds) {
    for (const q of round.questions) {
      if (q.format !== 'listenChoose') continue;
      const opts = q.opts ?? [];

      // Swap shape.
      for (let i = 0; i < opts.length; i++) {
        for (let j = i + 1; j < opts.length; j++) {
          for (const group of HOMOPHONE_FORMS) {
            for (const x of group) {
              for (const y of group) {
                if (x === y) continue;
                if (opts[i].replace(x, y) === opts[j]) {
                  bad.push(`${round.id}: "${opts[i]}" against "${opts[j]}" differ only by ${x}/${y}`);
                }
              }
            }
          }
        }
      }

      // Whole-option shape. Equality, not containment; see the header.
      for (const group of HOMOPHONE_FORMS) {
        const hits = opts.filter((o) => group.some((form) => o.trim() === form));
        if (hits.length > 1) {
          bad.push(`${round.id}: "${hits.join('" and "')}" are each a whole member of one group, so the ear cannot separate them`);
        }
      }
    }
  }
  return bad;
}

/* ══════════════════════════════════════════════════════════════════════════
 *  Coverage
 * ═══════════════════════════════════════════════════════════════════════ */

/** The A2 trail in `seq` order, measured against `content_units` 2026-08-18.
 *
 *  `seq` and id disagree across this band and the teaching order is `seq`, so
 *  a round list numbered by id would review the band in an order no learner
 *  ever walked. Declared here rather than derived from the seed: a derived list
 *  compares the lesson to itself and passes after somebody drops a unit. */
export const A2_TRAIL: readonly { seq: number; id: string; title: string }[] = [
  { seq: 1, id: 'a2.01', title: 'Regular -ER Verbs' },
  { seq: 2, id: 'a2.09', title: '-ER Verbs: The Exceptions' },
  { seq: 3, id: 'a2.10', title: 'Regular -IR Verbs' },
  { seq: 4, id: 'a2.11', title: 'Regular -RE Verbs' },
  { seq: 5, id: 'a2.02', title: 'Irregular Verbs 1: Aller, Venir, Tenir' },
  { seq: 6, id: 'a2.12', title: 'Irregular Verbs 2: Faire, Dire, Lire' },
  { seq: 7, id: 'a2.13', title: 'Irregular Verbs 3: Vouloir, Pouvoir, Devoir' },
  { seq: 8, id: 'a2.14', title: 'Irregular Verbs 4: Savoir and Connaître' },
  { seq: 9, id: 'a2.15', title: 'Irregular Verbs 5: Prendre, Mettre, Battre' },
  { seq: 10, id: 'a2.03', title: 'Adjective Agreement' },
  { seq: 11, id: 'a2.16', title: 'Beau, Nouveau, Vieux' },
  { seq: 12, id: 'a2.17', title: 'Adverbs' },
  { seq: 13, id: 'a2.04', title: 'Prepositions of Place, in Depth' },
  { seq: 14, id: 'a2.18', title: 'Prepositions of Time' },
  { seq: 15, id: 'a2.19', title: 'The Near Future' },
  { seq: 16, id: 'a2.05', title: 'The Passé Composé with Avoir' },
  { seq: 17, id: 'a2.20', title: 'Irregular Past Participles' },
  { seq: 18, id: 'a2.21', title: 'The Passé Composé with Être' },
  { seq: 19, id: 'a2.22', title: 'Pronominal (Reflexive) Verbs' },
  { seq: 20, id: 'a2.23', title: 'Pronominal Verbs in the Passé Composé' },
  { seq: 21, id: 'a2.06', title: 'Direct Object Pronouns' },
  { seq: 22, id: 'a2.24', title: 'Indirect Object Pronouns' },
  { seq: 23, id: 'a2.25', title: 'The Pronouns Y and EN' },
  { seq: 24, id: 'a2.07', title: 'At the Restaurant' },
  { seq: 25, id: 'a2.26', title: 'Shopping and Money' },
  { seq: 26, id: 'a2.27', title: 'Transportation' },
  { seq: 27, id: 'a2.28', title: "At the Doctor's" },
  { seq: 28, id: 'a2.29', title: 'At the Hotel' },
  { seq: 29, id: 'a2.30', title: 'Work and Jobs' },
  { seq: 30, id: 'a2.31', title: 'School and Studies' },
  { seq: 31, id: 'a2.32', title: 'Technology' },
  { seq: 32, id: 'a2.08', title: 'Comparatives and Superlatives' },
  { seq: 33, id: 'a2.33', title: 'Demonstrative Adjectives and Pronouns' },
  { seq: 34, id: 'a2.34', title: 'Possessive Pronouns' },
];

/** Every A2 unit id, so a guard can ask whether a string names one. `a2.35` is
 *  included: the exam must not name itself either. */
export const A2_UNIT_IDS: readonly string[] = [...A2_TRAIL.map((u) => u.id), 'a2.35'];

/**
 * Which trail units a set of rounds names, keyed by unit id.
 *
 * The review round ids carry their unit in the form `r07-a2-13-modaux`, so the
 * unit is read off the ID rather than off the label. Reading the label would
 * make the check agree with itself the moment somebody rewords a label.
 */
export function unitsNamedByRoundIds(rounds: readonly QuizRound[]): Map<string, string[]> {
  const found = new Map<string, string[]>();
  for (const r of rounds) {
    const m = /^r\d\d-a2-(\d\d)-/.exec(r.id);
    if (!m) continue;
    const id = `a2.${m[1]}`;
    found.set(id, [...(found.get(id) ?? []), r.id]);
  }
  return found;
}

/** Trail units named by a round's id, label or `say`, by id or in words. The
 *  exam must return nothing at all from this: that is its whole property. */
export function unitsNamedInText(rounds: readonly QuizRound[]): string[] {
  const hits: string[] = [];
  for (const r of rounds) {
    const said = typeof r.say === 'string' ? r.say : (r.say?.text ?? '');
    const text = [r.id, r.label, said].join(' ');
    for (const id of A2_UNIT_IDS) {
      if (text.includes(id) || text.includes(id.replace('.', '-'))) hits.push(`${r.id}: names ${id}`);
    }
    // « Unit 18 », « Lesson 18 », « Leçon 18 »: the words a labelled round uses.
    if (/(unit|lesson|leçon|lecon)\s+\d+/i.test(text)) hits.push(`${r.id}: names a unit in words`);
  }
  return hits;
}

/** The format mix of a question list, as counts by format. `mcq` is the
 *  schema's default when `format` is absent. */
export function formatMix(questions: readonly QuizQuestion[]): Record<string, number> {
  const m: Record<string, number> = {};
  for (const q of questions) {
    const f = q.format ?? 'mcq';
    m[f] = (m[f] ?? 0) + 1;
  }
  return m;
}

/**
 * A2's shipped quiz format ratio, measured across all thirty-four units'
 * quizzes in seed.json on 2026-08-18.
 *
 * `A2-TAIL-AUDIT.md` §2 measured the same thing against Postgres on 2026-08-17
 * and got mcq 379 · typeIn 317 · errorSpot 166 · listenChoose 96 · tapSilent 17
 * · speak 17, from a band that was three units shorter. The two agree to within
 * a percentage point on every format, which is the reason to trust either.
 */
export const A2_MEASURED_MIX: Readonly<Record<string, number>> = {
  mcq: 403,
  typeIn: 358,
  errorSpot: 184,
  listenChoose: 103,
  speak: 17,
  tapSilent: 17,
};

/** Percentage-point tolerance on every format's share. Asserted, so an edit
 *  that turns the capstone into a multiple-choice test goes red rather than
 *  drifting. Five points is roughly twelve questions out of two hundred and
 *  thirty: wide enough that one reworded question does not fail the build, and
 *  narrow enough that a format collapsing to half its share does. */
export const MIX_TOLERANCE_PCT = 5;

/** Share of each format in the measured band, as a percentage. */
export function measuredShares(): Record<string, number> {
  const total = Object.values(A2_MEASURED_MIX).reduce((a, b) => a + b, 0);
  return Object.fromEntries(
    Object.entries(A2_MEASURED_MIX).map(([k, v]) => [k, (100 * v) / total]),
  );
}

/* ══════════════════════════════════════════════════════════════════════════
 *  The learner surface, and what is not on it
 * ═══════════════════════════════════════════════════════════════════════ */

/**
 * Keys that hold a MACHINE value rather than something a learner reads.
 *
 * Corrections §13 hole 3 says to run the house-copy and jargon checks over a
 * `display()` walk rather than `prose()`, because `prose()` drops `sub` and on
 * a `cardDeck` card `sub` holds prose. It does not say what a `display()` walk
 * keeps out, and this build found out the hard way why that matters.
 *
 * A RAW walk over the shipped A2 band reports `paradigm` on thirteen learner
 * surfaces and `clitic` on ten. Every one of the twenty-three is a machine key:
 *
 *   rec-a2-10-paradigm       audio.recordingId, five times
 *   sheet-endings-paradigm   sheets[].sections[].id
 *   err-wrong-clitic         a quiz round's targets[]
 *   drill-pick-clitic        drills[].id
 *
 * None is drawn anywhere. A guard built on a raw walk therefore fails on
 * content that is correct, which is the mirror image of the hole §13 records:
 * `prose()` drops something a learner reads, and a raw walk keeps things a
 * learner never sees. `display()` is the middle, and this is its definition.
 */
export const MACHINE_KEYS: ReadonlySet<string> = new Set([
  'id', 'ref', 'refs', 'sheetId', 'itemId', 'itemIds', 'targets', 'drill',
  'retest', 'detectOn', 'sections', 'recordingId', 'audioRef', 'imageRef',
  'clip', 'mode', 'voice', 'lang', 'timing', 'ambience', 'format', 'type',
  'kind', 'outcome', 'glyph', 'practiceOn', 'deckTranche', 'restPoints',
  'features', 'level', 'track', 'unitId', 'tag', 'grammarAssumed',
  'grammarIntroduced', 'scoreSegment', 'ipa',
]);

/**
 * Every string a learner can actually read, with its dotted path.
 *
 * Keeps `sub`, which `prose()` drops and which holds prose on a `cardDeck`
 * card. Drops the keys above, which a raw walk keeps and which a learner never
 * sees. Descends into arrays by index so a failure names the exact card.
 */
export function display(v: unknown, path = '', out: { path: string; s: string }[] = []): { path: string; s: string }[] {
  if (typeof v === 'string') out.push({ path, s: v });
  else if (Array.isArray(v)) v.forEach((x, i) => display(x, `${path}[${i}]`, out));
  else if (v && typeof v === 'object') {
    for (const [k, x] of Object.entries(v)) {
      if (MACHINE_KEYS.has(k)) continue;
      display(x, path ? `${path}.${k}` : k, out);
    }
  }
  return out;
}

/**
 * Grammar words that must not reach a learner surface.
 *
 * Measured across every shipped A2 lesson's drawn surfaces on 2026-08-18, so
 * this list is what the band ACTUALLY keeps off a card rather than a guess.
 * The house vocabulary the band uses freely is deliberately absent from it:
 *
 *   verb 2026 · plural 374 · noun 326 · pronoun 313 · stem 264 · feminine 214
 *   tense 196 · naming form 186 · past form 175 · masculine 167 · prepositions 114
 *   describing word 99 · adjective 26 · adverb 17
 *
 * Banning any of those would be this build inventing a rule, which Corrections
 * §14.5 records a2.17 doing with `adverb`. What is guarded instead is the RATIO
 * below.
 *
 * Corrections §13: `hasWord` is boundary-exact, so a list holding `participle`
 * does not catch `participles`. Every entry that has one carries its `-s`.
 */
export const JARGON: readonly string[] = [
  'auxiliary', 'auxiliaries', 'participle', 'participles', 'past participle',
  'past participles', 'clitic', 'clitics', 'proform', 'proforms', 'anaphoric',
  'antecedent', 'antecedents', 'referent', 'referents', 'nominal', 'substantive',
  'paradigm', 'paradigms', 'inflection', 'inflections', 'inflectional',
  'morphology', 'morphological', 'allomorph', 'allomorphs', 'noun phrase',
  'noun phrases', 'head noun', 'partitive', 'partitives', 'periphrastic',
  'suppletive', 'valency', 'intransitive', 'transitive', 'orthographic',
  'phonological', 'phonologically', 'deictic', 'conjugate', 'conjugates',
  'conjugated', 'conjugation', 'conjugations', 'determiner', 'determiners',
  'subjunctive', 'conditional', 'imperfect', 'dative', 'genitive', 'copula',
  'lexeme', 'lexemes', 'reflexive', 'reflexives', 'infinitive', 'infinitives',
  'copulas',
];

/**
 * The house prefers the plain phrase, and the RATIO is what is guarded rather
 * than the word (Corrections §14.5). Measured across the shipped A2 band's
 * drawn surfaces: `describing word` 99 against `adjective` 26.
 *
 * TWO WAYS OF CHOOSING THIS PAIR ARE WRONG AND THIS BUILD TRIED BOTH.
 *
 * `past form` against `participle` is a TAUTOLOGY, because `participle` is on
 * the JARGON list above and so is already zero: a guard comparing a constant to
 * itself cannot fail, which is a2.29's finding in a new place.
 *
 * `past form` against `past` is worse, because the boundary test matches the
 * `past` INSIDE `past form`, so the technical count includes every plain use
 * and the ratio is arithmetic rather than a measurement. It read 11 against 22
 * on a lesson whose plain phrasing was in fact winning.
 *
 * `describing word` against `adjective` is neither: both are live in the band,
 * neither is banned, and neither contains the other. It caught this build at
 * 1 against 4.
 */
export const TECHNICAL_WORD = 'adjective';
export const PLAIN_PHRASE = 'describing word';

export const BANNED_SUBSTRINGS: readonly string[] = ['honest', '—'];

/** AI-tell phrasing, doctrine §F. */
export const FORBIDDEN_CLAIMS: readonly string[] = [
  'falls fast', 'trip up', 'half of everything', 'this is the big one',
  'listen to the trap', 'get those two right', 'this is the part that pays',
  'here is the catch',
];

/**
 * Word-boundary test with the APOSTROPHE DROPPED FROM THE LEFT.
 *
 * Corrections §14.3: the house boundary `(?<![\p{L}\p{N}'’-])` excludes `'`, so
 * a guard built on it cannot see `j'ai`, `c'est`, `qu'il` or `celui-ci`. A
 * capstone quoting thirty-four lessons is dense with all four, and this file
 * alone carries `j'ai` thirty times over. The apostrophe stays in the RIGHT
 * class, so a search for `l` cannot match the `l'` of `l'addition`.
 */
const esc = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export function hasWord(hay: string, needle: string): boolean {
  return new RegExp(`(?<![\\p{L}\\p{N}])${esc(needle)}(?![\\p{L}\\p{N}'’])`, 'iu').test(hay);
}

export function countWord(hay: string, needle: string): number {
  return (hay.match(new RegExp(`(?<![\\p{L}\\p{N}])${esc(needle)}(?![\\p{L}\\p{N}'’])`, 'giu')) ?? []).length;
}

/** Formats whose share is further than `MIX_TOLERANCE_PCT` points from the
 *  band's. One readable line per offender. */
export function mixDrift(questions: readonly QuizQuestion[]): string[] {
  const mine = formatMix(questions);
  const total = questions.length;
  const want = measuredShares();
  const out: string[] = [];
  for (const f of Object.keys(A2_MEASURED_MIX)) {
    const got = (100 * (mine[f] ?? 0)) / total;
    const delta = got - want[f];
    if (Math.abs(delta) > MIX_TOLERANCE_PCT) {
      const sign = delta > 0 ? '+' : '';
      out.push(`${f}: ${got.toFixed(1)}% against the band's ${want[f].toFixed(1)}% (${sign}${delta.toFixed(1)} points)`);
    }
  }
  return out;
}
