/* Mutation harness for a2-06-pronoms-direct.test.ts.
 *
 * Breaks one claim at a time in a COPY of seed.json, runs the test file, and
 * reports whether it went red. An assertion that cannot fail is worse than no
 * assertion, and the measured rate across this band is that roughly two
 * mutations in a dozen find a weakness rather than confirming a strength.
 *
 *     node _a206_mutate.mjs
 */
import { readFileSync, writeFileSync, copyFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const SEED = '../ealch-v2/src/content/seed.json';
const BAK = '../ealch-v2/src/content/seed.json.mutbak';
const A = (n) => `fr.a2.pronoms-essentiels.${String(n).padStart(3, '0')}`;

const walkSet = (obj, pred, fn) => {
  let hits = 0;
  const rec = (v) => {
    if (Array.isArray(v)) { v.forEach((x, i) => { if (typeof x === 'string' && pred(x)) { v[i] = fn(x); hits += 1; } else rec(x); }); return; }
    if (v && typeof v === 'object') {
      for (const [k, x] of Object.entries(v)) {
        if (typeof x === 'string' && pred(x)) { v[k] = fn(x); hits += 1; } else rec(x);
      }
    }
  };
  rec(obj);
  return hits;
};

const L = (s) => s.lessons.find((l) => l.id === 'a2.06.l1');
const item = (s, id) => s.items.find((i) => i.id === id);
const sec = (s, id) => L(s).sections.find((x) => x.id === id);

const MUTATIONS = [
  ['the two orders are separated onto different cards',
    (s) => { sec(s, 's02-order').cards[0].fr = 'Je le vois.'; }],
  ["a2.02's term is paraphrased instead of quoted",
    (s) => { walkSet(sec(s, 's04-article'), (x) => x.includes('what comes next decides'), (x) => x.replace('what comes next decides', 'the next word decides')); }],
  ['the article and the pronoun stop sharing a card',
    (s) => { sec(s, 's04-article').cards[0].fr = 'Je vois le film.'; }],
  ['ne moves inside the cluster on the negation card',
    (s) => { const c = sec(s, 's14-negation').cards.find((x) => x.fr.includes('Je ne le vois pas.')); c.fr = 'Je le vois pas ne. · Je le vois.'; }],
  ['a correct card puts the pronoun after the verb',
    (s) => { sec(s, 's07-move').examples[0].note = 'Say Je vois le. and stop.'; }],
  ['the error is offered as the CORRECT option in the trap',
    (s) => { const d = sec(s, 's09-trap').drill[0]; d.opts = ['Je vois le.', 'Je le vois.']; d.correct = 0; }],
  ['the reframe is reworded in one place',
    (s) => { const l = L(s); l.sections[2].goals[0].s = l.sections[2].goals[0].s.replace('The pronoun goes in front of the verb, not after it.', 'Put the pronoun first.'); }],
  ["a2.19's negation line is harmonised with a1.18's",
    (s) => { walkSet(L(s), (x) => x.includes('Wrap the verb that changed, not the one carrying the meaning.'), (x) => x.replace('Wrap the verb that changed, not the one carrying the meaning.', 'Wrap the verb, then ask what the verb was.')); }],
  ["a2.22's extension loses the note that its reason does not apply",
    (s) => { const c = sec(s, 's14-negation').cards[2]; c.body = c.body.replace('and that reason does not apply here: this word does not change with the subject. Same behaviour, different cause.', 'and the same is true here.'); }],
  ['lui leaks into a role-play prompt',
    (s) => { sec(s, 's19-talk').turns[0].ai = 'Tu veux lui parler ?'; }],
  ['en as a pronoun leaks into a card',
    (s) => { sec(s, 's12-elision').cards[0].body += " J'en veux deux."; }],
  ['a2.24 stops being named anywhere',
    (s) => { walkSet(L(s), (x) => x.includes('a2.24'), (x) => x.replaceAll('a2.24', 'the next lesson')); }],
  ['the elision limit is reworded',
    (s) => { walkSet(L(s), (x) => x.includes("Before a vowel both le and la become l',"), (x) => x.replace("Before a vowel both le and la become l', and at that point nothing in the sentence tells you which one it was.", "Before a vowel le and la shorten.")); }],
  ['an ear question is added between vu and vue',
    (s) => { const q = sec(s, 's23-quiz').rounds[4].questions; q[0] = { format: 'listenChoose', q: 'Which one did you hear?', opts: ["Je l'ai vu.", "Je l'ai vue."], correct: 1, ref: 's16-agreement', why: 'x' }; }],
  ['the agreement rule is dropped from every surface',
    (s) => { walkSet(L(s), (x) => x.includes('When the pronoun comes before the verb, the second word takes its ending.'), (x) => x.replace('When the pronoun comes before the verb, the second word takes its ending.', 'The ending goes on.')); }],
  ['the receptive-only agreed row gains a voiceflash drill',
    (s) => { item(s, A(229)).drills = ['flashcard', 'voiceflash', 'sentence', 'review']; }],
  ['a dictée line is swapped for one word mode would break',
    (s) => { sec(s, 's18-dictation').itemIds[0] = A(217); }],
  ['grammar jargon reaches the intro',
    (s) => { L(s).intro += ' The clitic is preverbal.'; }],
  ['« direct object » appears on a card as well as the title',
    (s) => { sec(s, 's05-table').say += ' This is the direct object.'; }],
  ['an em dash reaches a card',
    (s) => { sec(s, 's03-goals').goals[1].s += ' See a1.04 — it has the forms.'; }],
  ['a fourth term chip is added to a section',
    (s) => { sec(s, 's05-table').terms = ['whichOne', 'inFront', 'shortened', 'theWrap']; }],
  ['the trapDrill loses its gate',
    (s) => { sec(s, 's09-trap').steps[3].gate = false; }],
  ['commonErrors loses its swipe',
    (s) => { delete sec(s, 's11-errors').swipe; }],
  ['a repaired row reverts to the flagged respelling',
    (s) => { item(s, 'fr.a1.cuisine.041').respell = 'mahn-ZHAY'; }],
  ['an authored respelling closes a nasal with a plain n',
    (s) => { item(s, A(204)).respell = 'noo lay zan-vee-TOHN'; }],
  ['an imported row is dropped from the seed cut',
    (s) => { s.items = s.items.filter((i) => i.id !== 'fr.a1.pronoms-essentiels.096'); }],
  ['an authored row is released by two tranches',
    (s) => { L(s).deckTranche[5].push(A(190)); }],
  ['a duplicate fr is created inside the theme',
    (s) => { item(s, A(202)).fr = 'Je le vois.'; }],
  ['the vu/vue pair stops sharing a respelling',
    (s) => { item(s, A(225)).respell = 'zhuh lay VÜÜ'; }],
  ['an mcq answer slot is loaded past 40%',
    (s) => { for (const r of sec(s, 's23-quiz').rounds) for (const q of r.questions) if (typeof q.correct === 'number') q.correct = 1; }],
  ['a quiz ref points at a section that does not exist',
    (s) => { sec(s, 's23-quiz').rounds[0].questions[0].ref = 's99-nope'; }],
  ['a drill stops leading any round',
    (s) => { sec(s, 's23-quiz').rounds[4].targets = ['err-after-verb']; }],
  ['the Owns loses a section to the paradigm',
    (s) => { const l = L(s); l.sections = l.sections.filter((x) => x.id !== 's10-unseen'); l.acts[2].sections = l.acts[2].sections.filter((x) => x !== 's10-unseen'); }],
  ['the unit sub reverts to the spine value with its em dash',
    (s) => { s.units.find((u) => u.id === 'a2.06').sub = 'le, la, les — position & past agreement'; }],
  ['a headword is authored inside the block',
    (s) => { item(s, A(220)).fr = 'prendre'; item(s, A(220)).kind = 'word'; }],
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
    execFileSync('node', ['--test', '../ealch-v2/src/content/a2-06-pronoms-direct.test.ts'], { stdio: 'pipe' });
  } catch { red = true; }
  if (red) { caught += 1; console.log(`  caught   ${name}`); }
  else { missed.push(name); console.log(`  MISSED   ${name}`); }
}
copyFileSync(BAK, SEED);
unlinkSync(BAK);
console.log(`\n  ${caught}/${MUTATIONS.length} caught, ${missed.length} missed`);
if (missed.length) console.log(`  MISSED:\n${missed.map((m) => `    ${m}`).join('\n')}`);
