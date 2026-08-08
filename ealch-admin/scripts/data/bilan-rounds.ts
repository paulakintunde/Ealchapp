// a1.30's fifteen BY-UNIT exam rounds, generated from the selection.
//
// ── WHY THESE ARE DERIVED AND NOT HAND-WRITTEN ─────────────────────────────
//
// Seventy-five questions written by hand drift from the coverage rule the moment
// the corpus moves: a unit's three contributions change, the round still asks
// about the old ones, and nothing goes red because the question text is just a
// string. Derived from REVIEW, a round cannot ask about a row the selector did
// not choose, and re-running the selector re-writes the exam with it.
//
// ── AND WHY BY-UNIT IS A PRECONDITION, NOT A PREFERENCE ────────────────────
//
// v2 cuts s10-bank, s21-flash and s22-review, which are the only screens 87 of
// the 101 items currently live on. Every itemId must be ON A SCREEN: that is
// a1.08's failure, where 43 ids resolved perfectly and were drawn by nothing.
//
// A by-unit round names its own two units' SIX contributions in its stems, its
// options and its explanations, so THE EXAM BECOMES THE SCREEN. Fifteen rounds
// times six is ninety, which covers all 87. A mixed-topic exam cannot do this,
// which is why reverting to mixed while keeping the cut goes red on reachability.
//
// ── The shape of a round ───────────────────────────────────────────────────
//
// Five questions pairing two units in curriculum order. Formats rotate so no
// round is more than two-fifths mcq, and the correct index is spread by position
// so no slot can cluster across seventy-five questions.

import type { QuizRound } from '../../../ealch-v2/src/content/schema.ts';
import { REVIEW, type ReviewRow } from './bilan-imported.ts';

/** The fifteen pairs, in curriculum order. Every one of the 29 units appears
 *  exactly once; the last round carries a1.25 alone beside the repair kit,
 *  which is the only material this lesson owns. */
export const ROUND_PAIRS: { id: string; label: string; units: string[]; targets: string[] }[] = [
  { id: 'r01-greetings-numbers', label: 'Greetings and small numbers', units: ['a1.01', 'a1.02'], targets: ['err-one-lesson'] },
  { id: 'r02-bigger-numbers', label: 'Counting higher', units: ['a1.27', 'a1.28'], targets: ['err-number'] },
  { id: 'r03-gender-definite', label: 'Gender, and the word in front', units: ['a1.03', 'a1.04'], targets: ['err-article'] },
  { id: 'r04-indefinite-partitive', label: 'One of them, or some of it', units: ['a1.11', 'a1.29'], targets: ['err-article'] },
  { id: 'r05-pronouns-etre', label: 'Who is doing it, and being', units: ['a1.05', 'a1.06'], targets: ['err-one-lesson'] },
  { id: 'r06-avoir-negation', label: 'Having, and not having', units: ['a1.07', 'a1.18'], targets: ['err-article'] },
  { id: 'r07-days-months', label: 'Days and months', units: ['a1.08', 'a1.09'], targets: ['err-time'] },
  { id: 'r08-weather-clock', label: 'The weather and the clock', units: ['a1.10', 'a1.12'], targets: ['err-time'] },
  { id: 'r09-colours-adjectives', label: 'Colours and describing', units: ['a1.13', 'a1.14'], targets: ['err-agreement'] },
  { id: 'r10-placement-family', label: 'Where the adjective goes, and family', units: ['a1.16', 'a1.15'], targets: ['err-agreement'] },
  { id: 'r11-possessives-place', label: 'Whose, and where', units: ['a1.17', 'a1.21'], targets: ['err-agreement'] },
  { id: 'r12-questions', label: 'Asking', units: ['a1.19', 'a1.20'], targets: ['err-question'] },
  { id: 'r13-countries-food', label: 'Where you are from, and what you eat', units: ['a1.22', 'a1.23'], targets: ['err-silence', 'err-one-lesson'] },
  { id: 'r14-body-house', label: 'The body and the house', units: ['a1.24', 'a1.26'], targets: ['err-english', 'err-one-lesson'] },
  { id: 'r15-routine-repair', label: 'Your day, and being lost', units: ['a1.25'], targets: ['err-no-repair', 'err-english'] },
];

const ofUnit = (u: string): ReviewRow[] => REVIEW.filter((r) => r.unit === u);

/** Three distractors for a row, taken from OTHER units so a wrong answer is
 *  always a real French word the learner has met. A distractor invented for the
 *  occasion teaches nothing and is obviously wrong on sight. */
function distractors(target: ReviewRow, n: number): string[] {
  const pool = REVIEW.filter((r) => r.unit !== target.unit && r.kind !== 'sentence' && r.fr !== target.fr);
  const out: string[] = [];
  // Deterministic: walk the pool at a stride seeded by the target's id, so the
  // set is stable across runs and a rebuild does not silently reshuffle an exam.
  const seed = target.id.split('').reduce((a, ch) => a + ch.charCodeAt(0), 0);
  for (let k = 0; out.length < n && k < pool.length; k++) {
    const cand = pool[(seed + k * 7) % pool.length];
    if (!out.includes(cand.fr) && cand.fr !== target.fr) out.push(cand.fr);
  }
  return out;
}

/** Which unit taught a row, in words a learner can act on: the number is what
 *  the app shows them, so a failed round points somewhere real. */
const unitName: Record<string, string> = {
  'a1.01': 'greetings', 'a1.02': 'numbers 1 to 20', 'a1.03': 'noun gender', 'a1.04': 'the little word in front',
  'a1.05': 'subject pronouns', 'a1.06': 'the verb être', 'a1.07': 'the verb avoir', 'a1.08': 'days of the week',
  'a1.09': 'months', 'a1.10': 'seasons and weather', 'a1.11': 'one of something', 'a1.12': 'telling the time',
  'a1.13': 'colours', 'a1.14': 'basic adjectives', 'a1.15': 'family', 'a1.16': 'adjective placement',
  'a1.17': 'possessives', 'a1.18': 'negation', 'a1.19': 'yes or no questions', 'a1.20': 'question words',
  'a1.21': 'prepositions of place', 'a1.22': 'countries', 'a1.23': 'food', 'a1.24': 'the body',
  'a1.25': 'daily routine', 'a1.26': 'the house', 'a1.27': 'numbers 21 to 100', 'a1.28': 'large numbers',
  'a1.29': 'some of something',
};

/** Strip a leading article so a typeIn can accept either form. `fold()` keeps a
 *  final -e and -s but not much else, so the accept list carries both. */
const bare = (fr: string) => fr.replace(/^(le|la|les|l'|un|une|des|du|de la)\s*/i, '').trim();

/** Build one round. `ref` names the section a failed question sends the learner
 *  back to; it must exist, and s10-bank does not survive v2, so every ref here
 *  points at a section the exam keeps. */
export function buildRound(pair: (typeof ROUND_PAIRS)[number], ix: number): QuizRound {
  const a = ofUnit(pair.units[0]);
  const b = pair.units[1] ? ofUnit(pair.units[1]) : [];
  const both = [...a, ...b];
  if (both.length < 3) throw new Error(`a1.30 round ${pair.id}: only ${both.length} contributions for ${pair.units.join('+')}`);

  const nameA = unitName[pair.units[0]] ?? pair.units[0];
  const nameB = pair.units[1] ? (unitName[pair.units[1]] ?? pair.units[1]) : nameA;

  // Slots are spread by ROUND INDEX so no position can cluster across 75
  // questions. QuizDeckView shuffles at runtime anyway; this is the authoring
  // cap that stops one slot holding more than 40%.
  const s1 = ix % 4;
  const s2 = (ix + 2) % 4;

  const t1 = both[0]; const t2 = both[1]; const t3 = both[2];
  const t4 = both[3] ?? both[0]; const t5 = both[4] ?? both[1]; const t6 = both[5] ?? both[2];

  const opts1 = (() => { const o = distractors(t2, 3); o.splice(s1, 0, t2.fr); return o; })();
  const opts2 = (() => { const o = distractors(t4, 3); o.splice(s2, 0, t4.fr); return o; })();

  return {
    id: pair.id,
    label: pair.label,
    targets: pair.targets,
    say: `${nameA}${pair.units[1] ? ` and ${nameB}` : ''}. Miss two and you get the drill.`,
    questions: [
      {
        q: `Write the French for: ${t1.en}`,
        format: 'typeIn',
        accept: [t1.fr, t1.fr.toLowerCase(), bare(t1.fr), bare(t1.fr).toLowerCase()],
        answer: t1.fr,
        why: `${t1.fr}. From the ${nameA} lesson. If this one went, that is the lesson to go back to rather than this one.`,
        ref: 's24-quiz',
      },
      {
        q: `Which of these means: ${t2.en}`,
        format: 'mcq',
        opts: opts1,
        correct: s1,
        why: `${t2.fr}, from the ${nameA} lesson. The other three are real words from other units, so getting it wrong means a word has blurred rather than that you guessed.`,
        ref: 's24-quiz',
      },
      {
        q: `Write the French for: ${t3.en}`,
        format: 'typeIn',
        accept: [t3.fr, t3.fr.toLowerCase(), bare(t3.fr), bare(t3.fr).toLowerCase()],
        answer: t3.fr,
        why: `${t3.fr}. Also ${nameA}. Two from one lesson in a round is how you tell a single forgotten word from a lesson that has gone.`,
        ref: 's24-quiz',
      },
      {
        q: `Which of these means: ${t4.en}`,
        format: 'mcq',
        opts: opts2,
        correct: s2,
        why: `${t4.fr}, from the ${nameB} lesson. This round pairs two lessons on purpose: a real turn almost never comes from one.`,
        ref: 's24-quiz',
      },
      {
        q: `Say it: ${t5.en}`,
        format: 'speak',
        target: t5.fr,
        accept: [t5.fr, t5.fr.toLowerCase(), bare(t5.fr)],
        answer: t5.fr,
        why: `${t5.fr}, from the ${nameB} lesson. Saying it is a different test from recognising it, and this is the half most learners skip. ${t6.fr} is the third from that lesson.`,
        ref: 's24-quiz',
      },
    ],
  };
}

export const BILAN_ROUNDS: QuizRound[] = ROUND_PAIRS.map(buildRound);

/** Every review row the rounds put on a screen. v2 cuts the vocab, flashcard and
 *  review sections, so THIS is what keeps the 87 reachable. Exported so the
 *  batch, the merge and the test all check the same set. */
export const ROWS_ON_SCREEN: string[] = [...new Set(
  ROUND_PAIRS.flatMap((p) => p.units.flatMap((u) => ofUnit(u).map((r) => r.id))),
)];
