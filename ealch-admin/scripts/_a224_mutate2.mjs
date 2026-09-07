/* Mutation harness for a2-24-pronoms-indirect.test.ts. WAVE 2.
 *
 * WAVE 1 CAUGHT 78 OF 78 AND THAT IS NOT EVIDENCE. It can equally mean the
 * mutations were too obvious. a2.06 caught 35 of 35 in its first wave and its
 * second wave, written deliberately at the EDGES, found two real holes.
 *
 * This wave aims at:
 *   - claims carried by one loose shape, where a different sentence satisfies
 *     the assertion instead of the one it is about
 *   - coverage checks that could pass on the WRONG ROW
 *   - rules the BATCH enforces and the TEST may not, which is where a seed
 *     edited by hand or by a later merge would slip through
 *   - counts derived from the content rather than asserted against a constant
 *
 *     node scripts/_a224_mutate2.mjs        (from ealch-admin)
 */
import { readFileSync, writeFileSync, copyFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const SEED = '../ealch-v2/src/content/seed.json';
const BAK = '../ealch-v2/src/content/seed.json.mutbak24b';
const A = (n) => `fr.a2.pronoms-essentiels.${String(n).padStart(3, '0')}`;

const L = (s) => s.lessons.find((l) => l.id === 'a2.24.l1');
const item = (s, id) => s.items.find((i) => i.id === id);
const sec = (s, id) => L(s).sections.find((x) => x.id === id);

const MUTATIONS = [
  /* ── A DIFFERENT SENTENCE SATISFYING THE ASSERTION ────────────────────── */
  ['every verb frame is deleted from the FLOW and kept only in the sheet',
    (s) => {
      const l = L(s);
      /* WALKS STRINGS INSIDE ARRAYS TOO. The first version did not, so it left
       * the roundup's `points` untouched and the neighbour still carried the
       * line once. That was a weak mutation rather than a hole in the test. */
      const REPLACE = (x) => x.replace(/\S+ à quelqu'un/gu, 'the verb');
      const strip = (v) => {
        if (Array.isArray(v)) {
          v.forEach((x, i) => { if (typeof x === 'string') v[i] = REPLACE(x); else strip(x); });
          return;
        }
        if (!v || typeof v !== 'object') return;
        for (const [k, x] of Object.entries(v)) {
          if (typeof x === 'string' && x.includes("à quelqu'un")) v[k] = x.replaceAll(/\S+ à quelqu'un/gu, 'the verb');
          else strip(x);
        }
      };
      strip(l.sections);
    }],
  ['the tapTable keeps the frames and loses every English gloss',
    (s) => { for (const r of sec(s, 's07-verbs').rows) r.cells[1] = 'French only'; }],
  ['the plain phrase drops to a single occurrence',
    (s) => {
      const l = L(s);
      let seen = 0;
      /* WALKS STRINGS INSIDE ARRAYS TOO. The first version did not, so it left
       * the roundup's `points` untouched and the neighbour still carried the
       * line once. That was a weak mutation rather than a hole in the test. */
      const REPLACE = (x) => x;
      const strip = (v) => {
        if (Array.isArray(v)) {
          v.forEach((x, i) => { if (typeof x === 'string') v[i] = REPLACE(x); else strip(x); });
          return;
        }
        if (!v || typeof v !== 'object') return;
        for (const [k, x] of Object.entries(v)) {
          if (typeof x === 'string' && (x.includes('the person behind à') || x.includes('the person you are talking to'))) {
            seen += 1;
            if (seen > 1) v[k] = x.replaceAll('the person behind à', 'the person').replaceAll('the person you are talking to', 'the person');
          } else strip(x);
        }
      };
      strip(l);
    }],
  ['the technical compound appears a second time, in the French intro',
    (s) => { L(s).overview.introFr = 'The indirect object goes first.'; }],

  /* ── COVERAGE CHECKS PASSING ON THE WRONG ROW ─────────────────────────── */
  ['the dictée swaps the possessive pair for two more pronoun rows',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.map((x) => (x === A(258) ? A(251) : x === A(259) ? A(252) : x)); }],
  ['the dictée loses its negative and keeps its length',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.map((x) => (x === A(264) ? A(253) : x === A(265) ? A(257) : x)); }],
  ['the dictée loses its past line',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.map((x) => (x === A(268) ? A(242) : x === A(269) ? A(244) : x)); }],
  ['a possessive row keeps leurs and loses the plural thing behind it',
    (s) => { item(s, A(259)).fr = 'Voici leurs, alors.'; }],
  ['the ear questions grow to three',
    (s) => {
      const r = sec(s, 's23-quiz').rounds[2];
      r.questions[4] = {
        format: 'listenChoose', q: 'Which one did you hear?',
        opts: ['Je lui écris.', 'Je leur écris.'], correct: 0,
        ref: 's05-listening', why: 'Lwee against luhr.',
      };
    }],
  ['a free-text answer becomes a sentence the lesson does not own',
    (s) => { sec(s, 's23-quiz').rounds[0].questions[1].accept = ['Je lui cause.']; }],

  /* ── THE RULES THE BATCH ENFORCES AND THE TEST MIGHT NOT ──────────────── */
  ['an item is released by a tranche BEFORE the act that shows it',
    (s) => {
      const t = L(s).deckTranche;
      t[5] = t[5].filter((x) => x !== A(276));
      t[0].push(A(276));
    }],
  ['a row on the speak surface loses its voiceflash drill',
    (s) => { item(s, A(251)).drills = ['sentence', 'review']; }],
  ['a role-play turn drops to one alt',
    (s) => { sec(s, 's19-talk').turns[0].alts = [sec(s, 's19-talk').turns[0].alts[0]]; }],
  ['a role-play turn says a sentence this lesson does not author',
    (s) => { sec(s, 's19-talk').turns[0].user = 'Oui, bien sûr.'; }],
  ['a dictée target loses its dictation drill',
    (s) => { item(s, A(240)).drills = ['flashcard', 'voiceflash', 'sentence', 'review']; }],
  ['a drill array is written out of DRILL_KINDS order',
    (s) => { item(s, A(238)).drills = ['voiceflash', 'flashcard', 'dictation', 'sentence', 'review']; }],
  ['a row is dropped from the block entirely',
    (s) => { s.items = s.items.filter((i) => i.id !== A(286)); L(s).itemIds = L(s).itemIds.filter((x) => x !== A(286)); L(s).deckTranche = L(s).deckTranche.map((t) => t.filter((x) => x !== A(286))); }],
  ['an authored row is not named by any section',
    (s) => { const l = L(s); l.itemIds = l.itemIds.filter((x) => x !== A(263)); l.deckTranche = l.deckTranche.map((t) => t.filter((x) => x !== A(263))); }],
  ['a second quiz section is added, which the pager silently never renders',
    (s) => { const l = L(s); const q = JSON.parse(JSON.stringify(sec(s, 's23-quiz'))); q.id = 's25-quiz2'; l.sections.push(q); l.acts[5].sections.push('s25-quiz2'); }],

  /* ── THE CLAIMS THAT REST ON A NEIGHBOUR STILL BEING THERE ────────────── */
  ["a2.06 drops the position rule this lesson quotes eight times",
    (s) => {
      const d = s.lessons.find((l) => l.id === 'a2.06.l1');
      /* WALKS STRINGS INSIDE ARRAYS TOO. The first version did not, so it left
       * the roundup's `points` untouched and the neighbour still carried the
       * line once. That was a weak mutation rather than a hole in the test. */
      const REPLACE = (x) => x.replaceAll('The pronoun goes in front of the verb, not after it.', 'The pronoun comes before the verb.');
      const strip = (v) => {
        if (Array.isArray(v)) {
          v.forEach((x, i) => { if (typeof x === 'string') v[i] = REPLACE(x); else strip(x); });
          return;
        }
        if (!v || typeof v !== 'object') return;
        for (const [k, x] of Object.entries(v)) {
          if (typeof x === 'string' && x.includes('The pronoun goes in front of the verb, not after it.')) {
            v[k] = x.replaceAll('The pronoun goes in front of the verb, not after it.', 'The pronoun comes before the verb.');
          } else strip(x);
        }
      };
      strip(d);
      d.reframe = 'The pronoun comes before the verb.';
    }],
  ['a2.23 stops pointing at this lesson',
    (s) => {
      const d = s.lessons.find((l) => l.id === 'a2.23.l1');
      /* WALKS STRINGS INSIDE ARRAYS TOO. The first version did not, so it left
       * the roundup's `points` untouched and the neighbour still carried the
       * line once. That was a weak mutation rather than a hole in the test. */
      const REPLACE = (x) => x.replaceAll('the reason the ending disappears on this screen is waiting there too', 'that is for later');
      const strip = (v) => {
        if (Array.isArray(v)) {
          v.forEach((x, i) => { if (typeof x === 'string') v[i] = REPLACE(x); else strip(x); });
          return;
        }
        if (!v || typeof v !== 'object') return;
        for (const [k, x] of Object.entries(v)) {
          if (typeof x === 'string' && x.includes('the reason the ending disappears on this screen is waiting there too')) {
            v[k] = x.replace('the reason the ending disappears on this screen is waiting there too', 'that is for later');
          } else strip(x);
        }
      };
      strip(d);
    }],
  ['a2.06 drops the negation extension this lesson quotes',
    (s) => {
      const d = s.lessons.find((l) => l.id === 'a2.06.l1');
      /* WALKS STRINGS INSIDE ARRAYS TOO. The first version did not, so it left
       * the roundup's `points` untouched and the neighbour still carried the
       * line once. That was a weak mutation rather than a hole in the test. */
      const REPLACE = (x) => x.replaceAll('The wrap goes round the pronoun and the verb together.', 'Ne and pas go round both.');
      const strip = (v) => {
        if (Array.isArray(v)) {
          v.forEach((x, i) => { if (typeof x === 'string') v[i] = REPLACE(x); else strip(x); });
          return;
        }
        if (!v || typeof v !== 'object') return;
        for (const [k, x] of Object.entries(v)) {
          if (typeof x === 'string' && x.includes('The wrap goes round the pronoun and the verb together.')) {
            v[k] = x.replace('The wrap goes round the pronoun and the verb together.', 'Ne and pas go round both.');
          } else strip(x);
        }
      };
      strip(d);
    }],
  ["a2.06's frame row is edited so the cross-lesson claim is a copy rather than the row",
    (s) => { item(s, 'fr.a2.pronoms-essentiels.190').fr = 'Je le regarde.'; }],

  /* ── THE EDGES OF THE TWO ERROR SHAPES ────────────────────────────────── */
  ['the wrong set appears in the reference SHEET, which no section allowlist covers',
    (s) => { L(s).sheets[0].sections[0].body += ' Never say Je le téléphone.'; }],
  ['the leurs error appears in a TERM body',
    (s) => { L(s).terms.theirWord.body += ' So Je leurs parle is what you avoid.'; }],
  ['the wrong set appears in the audio brief, which is a studio surface and still walked',
    (s) => { L(s).audio.recorded[0].desc += " Read Je le téléphone. slowly."; }],
  ['the error moves out of the errors card and only the trap keeps it',
    (s) => { sec(s, 's14-errors').errors = sec(s, 's14-errors').errors.slice(2); }],
  ['a common error has the same wrong and right',
    (s) => { const e = sec(s, 's14-errors').errors[0]; e.right = e.wrong; }],

  /* ── THE COUNTS ──────────────────────────────────────────────────────── */
  ['the reframe is authored one extra time',
    (s) => { sec(s, 's04-two').say += ' If the person sits behind à, the pronoun is lui or leur.'; }],
  ["a2.06's rule is quoted one extra time",
    (s) => { sec(s, 's04-two').say += ' The pronoun goes in front of the verb, not after it.'; }],
  ['the lesson version moves without the body changing',
    (s) => { L(s).version = 2; }],
  /* REPLACED. The first version added a row at .287, which is OUTSIDE this
   * build's block and is a2.25's to take, so it tested nothing at all. The edge
   * that matters is a row inside the block quietly leaving the theme: `MINE` is
   * selected by ID and nothing asserted the theme, so the flashcard hub would
   * serve it from somewhere else and every id-scoped check would stay green. */
  ['an authored row leaves the theme while keeping its id',
    (s) => { item(s, A(247)).theme = 'verbes'; }],
];

copyFileSync(SEED, BAK);
const base = readFileSync(BAK, 'utf8');
let caught = 0; const missed = [];
for (const [name, mutate] of MUTATIONS) {
  const s = JSON.parse(base);
  try { mutate(s); } catch (e) { console.log(`  SETUP FAILED  ${name}: ${e.message}`); continue; }
  writeFileSync(SEED, `${JSON.stringify(s, null, 2)}\n`);
  let red = false;
  try {
    execFileSync('node', ['--test', '../ealch-v2/src/content/a2-24-pronoms-indirect.test.ts'], { stdio: 'pipe' });
  } catch { red = true; }
  if (red) { caught += 1; console.log(`  caught   ${name}`); }
  else { missed.push(name); console.log(`  MISSED   ${name}`); }
}
copyFileSync(BAK, SEED);
unlinkSync(BAK);
console.log(`\n  ${caught}/${MUTATIONS.length} caught, ${missed.length} missed`);
if (missed.length) console.log(`  MISSED:\n${missed.map((m) => `    ${m}`).join('\n')}`);
