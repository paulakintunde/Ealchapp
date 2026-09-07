/* Mutation harness for a2-25-y-en.test.ts. WAVE 1.
 *
 * Breaks one claim at a time in a COPY of seed.json, runs the test file, and
 * reports whether it went red. An assertion that cannot fail is worse than no
 * assertion, and the measured rate across this band is that roughly two
 * mutations in a dozen find a weakness rather than confirming a strength.
 *
 * WAVE 1 IS THE OBVIOUS ONE and a clean sweep here is NOT evidence: a2.06 caught
 * 35 of 35 in its first wave and its second, aimed at the edges, found two real
 * holes. `_a225_mutate2.mjs` is that second wave.
 *
 *     node scripts/_a225_mutate.mjs
 */
import { readFileSync, writeFileSync, copyFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const SEED = '../ealch-v2/src/content/seed.json';
const BAK = '../ealch-v2/src/content/seed.json.mutbak25';
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

const L = (s) => s.lessons.find((l) => l.id === 'a2.25.l1');
const item = (s, id) => s.items.find((i) => i.id === id);
const sec = (s, id) => L(s).sections.find((x) => x.id === id);

const POSITION = 'The pronoun goes in front of the verb, not after it.';
const A_FRAMING = 'À plus a person becomes lui or leur, and the à disappears with it.';
const A_FRAMING_MINE = 'À plus a thing becomes y, and the à disappears with it.';
const DE_FRAMING = 'De plus a thing becomes en, and the de disappears with it.';
const REFRAME = 'The preposition goes inside the pronoun, so it does not get said twice.';
const EN_POSITION = 'Before a thing it is a little word. Before a verb it is the pronoun. Nothing else separates them.';
const FROZEN = 'Il y a is three words that arrived together, and they do not come apart.';
const ORDER = 'When both turn up, y comes first. Il y en a.';

const MUTATIONS = [
  /* ── LAYOUT 1: both words, with the preposition VISIBLE inside each ───── */
  ['the two rows collapse onto one',
    (s) => { const c = sec(s, 's02-two').cards[0]; c.fr = 'y and en'; c.sub = 'two words'; }],
  ['the y row loses the à, so the preposition is no longer visible',
    (s) => { sec(s, 's02-two').cards[0].fr = 'y  =  a place'; }],
  ['the en row loses the de',
    (s) => { sec(s, 's02-two').cards[0].sub = 'en  =  some of it'; }],
  ["a2.06's position rule is paraphrased in LAYOUT 1",
    (s) => { walkSet(sec(s, 's02-two'), (x) => x.includes(POSITION), (x) => x.replace(POSITION, 'The pronoun comes before the verb.')); }],
  ['a2.06 stops being named beside its own rule',
    (s) => { walkSet(sec(s, 's02-two'), (x) => x.includes('a2.06'), (x) => x.replaceAll('a2.06', 'the lesson before last')); }],
  ['LAYOUT 1 stops saying what y replaces',
    (s) => { walkSet(sec(s, 's02-two'), (x) => x.includes(A_FRAMING_MINE), (x) => x.replace(A_FRAMING_MINE, 'Y stands in for a place.')); }],
  ['LAYOUT 1 stops saying what en replaces',
    (s) => { walkSet(sec(s, 's02-two'), (x) => x.includes(DE_FRAMING), (x) => x.replace(DE_FRAMING, 'En stands in for a thing.')); }],

  /* ── LAYOUT 2: the a2.24 handshake ───────────────────────────────────── */
  ['the person half and the place half stop sharing a card',
    (s) => { sec(s, 's04-person').cards[0].sub = '[zhuh PARL ah mah-REE]'; }],
  ['the two answers stop sharing a card',
    (s) => { sec(s, 's04-person').cards[1].sub = 'and the other one'; }],
  ["a2.24's à framing is paraphrased instead of quoted",
    (s) => { walkSet(L(s), (x) => x.includes(A_FRAMING), (x) => x.replace(A_FRAMING, 'À plus a person gives lui or leur.')); }],
  ['a2.24 stops being credited anywhere in LAYOUT 2',
    (s) => { walkSet(sec(s, 's04-person'), (x) => x.includes('a2.24'), (x) => x.replaceAll('a2.24', 'last lesson')); }],
  ['the two framings stop being the same sentence with one phrase changed',
    (s) => { walkSet(L(s), (x) => x.includes(A_FRAMING_MINE), (x) => x.replace(A_FRAMING_MINE, 'À plus a thing gives you y instead.')); }],

  /* ── LAYOUT 3: the three ens ─────────────────────────────────────────── */
  ['the tapTable grows to a fourth row',
    (s) => { const t = sec(s, 's11-threeens'); t.rows.push({ cells: ['En français', 'a language', 'a2.04'], say: 'en français' }); }],
  ['the three ens become a table at layer core',
    (s) => { const t = sec(s, 's11-threeens'); t.type = 'table'; t.cols = ['a', 'b', 'c']; t.rows = [['x', 'y', 'z']]; }],
  ['a2.04 stops being named on the three-ens screen',
    (s) => { walkSet(sec(s, 's11-threeens'), (x) => x.includes('a2.04'), (x) => x.replaceAll('a2.04', 'an earlier lesson')); }],
  ['a2.18 stops being named on the three-ens screen',
    (s) => { walkSet(sec(s, 's11-threeens'), (x) => x.includes('a2.18'), (x) => x.replaceAll('a2.18', 'an earlier lesson')); }],
  ['the position distinguisher is dropped from the three-ens screen',
    (s) => { walkSet(sec(s, 's11-threeens'), (x) => x.includes(EN_POSITION), (x) => x.replace(EN_POSITION, 'Three jobs for one word.')); }],
  ['two of the three rows carry the same sentence',
    (s) => { const t = sec(s, 's11-threeens'); t.rows[1].cells[0] = t.rows[0].cells[0]; }],

  /* ── LAYOUT 4: the obligatory en ─────────────────────────────────────── */
  ['the impossible answer stops being visible beside the right one',
    (s) => { sec(s, 's08-must').cards[0].sub = '[wee, zhahⁿ NAY]'; }],
  ['the obligatory rule stops being stated on its own screen',
    (s) => { walkSet(sec(s, 's08-must'), (x) => x.includes('will not let you leave it out'), (x) => 'You need the word.'); }],
  ['the scene stops dying on the impossible answer',
    (s) => { const b = sec(s, 's01-scene').beats.find((x) => x.kind === 'bubble' && x.from === 'you'); b.fr = "Oui, j'en ai."; }],
  ['the break marks the impossible answer as the right one',
    (s) => { const b = sec(s, 's01-scene').beats.find((x) => x.kind === 'break'); b.right.fr = "Oui, j'ai."; }],
  ['the scene offers the impossible answer as the one that works',
    (s) => { const c = sec(s, 's01-scene').beats.find((x) => x.kind === 'choice'); c.options[0].fr = "Oui, j'ai."; }],
  ['the break body goes over the 40-word budget',
    (s) => { const b = sec(s, 's01-scene').beats.find((x) => x.kind === 'break'); b.body = `${b.body} ${'And it does not close. '.repeat(6)}`; }],

  /* ── THE SURVIVING PREPOSITION ───────────────────────────────────────── */
  ['a correct card keeps the little word after the pronoun',
    (s) => { sec(s, 's05-there').cards[0].sub = "J'y vais au marché."; }],
  ['an authored row keeps the little word after the pronoun',
    (s) => { item(s, A(288)).fr = "J'y vais à Paris."; }],
  ['an audio brief carries the doubled preposition',
    (s) => { L(s).audio.recorded[4].desc += " Read « J'en parle de mon travail. » slowly."; }],
  ['the trap stops opening on the error',
    (s) => { sec(s, 's12-trap').cards[0].fr = "J'y vais."; }],
  ['the error is offered as the correct option in the trap drill',
    (s) => { const d = sec(s, 's12-trap').drill[0]; d.correct = 1; }],
  ['the lesson stops showing the doubled-preposition error at all',
    (s) => { walkSet(L(s), (x) => x.includes("J'y vais à Paris."), (x) => x.replaceAll("J'y vais à Paris.", "J'y vais.")); }],

  /* ── THE SLOT ORDER, AND THE RESERVED QUESTION ───────────────────────── */
  ['a two-pronoun sentence beyond « y en » appears',
    (s) => { sec(s, 's16-order').say += ' Je le lui donne demain.'; }],
  ['an authored row carries two pronouns beyond « y en »',
    (s) => { item(s, A(314)).fr = 'Je le lui donne.'; }],
  ['the order rule stops being stated',
    (s) => { walkSet(L(s), (x) => x.includes(ORDER), (x) => x.replace(ORDER, 'Both can turn up together.')); }],
  ['the reserved question stops being named',
    (s) => { walkSet(L(s), (x) => x.includes('further question, and it is not answered here'), (x) => 'That is the whole system.'); }],
  ['no authored row carries « y en » any more',
    (s) => { for (const n of [314, 315]) item(s, A(n)).fr = item(s, A(n)).fr.replace('y en', 'en'); }],

  /* ── il y a ──────────────────────────────────────────────────────────── */
  ['the frozen rule stops being stated',
    (s) => { walkSet(L(s), (x) => x.includes(FROZEN), (x) => x.replace(FROZEN, 'Il y a has a y in it.')); }],
  ['a2.18 stops being named on the frozen screen',
    (s) => { walkSet(sec(s, 's13-frozen'), (x) => x.includes('a2.18'), (x) => x.replaceAll('a2.18', 'an earlier lesson')); }],
  ['the frozen screen stops showing what decomposing it gives you',
    (s) => { walkSet(sec(s, 's13-frozen'), (x) => x.includes('Il en a.'), (x) => x.replaceAll('Il en a.', 'Il y en a.')); }],
  ['a second teaching section starts teaching the frozen rule',
    (s) => { sec(s, 's05-there').say += ` ${FROZEN}`; }],
  ['the frozen phrase gets a second spelling',
    (s) => { item(s, A(313)).respell = 'eel yah dü PEHⁿ'; }],

  /* ── THE QUIZ ────────────────────────────────────────────────────────── */
  ['the accent question becomes a typeIn',
    (s) => { const q = sec(s, 's23-quiz').rounds[3].questions[3]; q.format = 'typeIn'; q.accept = ['Je vais à Paris.']; delete q.opts; delete q.correct; }],
  ['the accent question loses the unaccented option',
    (s) => { sec(s, 's23-quiz').rounds[3].questions[3].opts[0] = 'Je vais de Paris.'; }],
  ['an ear question offers both jobs of en',
    (s) => { const q = sec(s, 's23-quiz').rounds[0].questions[4]; q.opts = ['Elle en parle.', 'Elle habite en France.']; }],
  ['an ear question offers a homophone swap',
    (s) => { const q = sec(s, 's23-quiz').rounds[0].questions[4]; q.opts = ['Tu prends du sucre ?', 'Tu prend du sucre ?']; }],
  ['a quiz ref points at a section that does not exist',
    (s) => { sec(s, 's23-quiz').rounds[0].questions[0].ref = 's99-nope'; }],
  ['a question loses its why',
    (s) => { delete sec(s, 's23-quiz').rounds[2].questions[1].why; }],
  ['a drill stops leading any round',
    (s) => { sec(s, 's23-quiz').rounds[3].targets = ['err-wrong-en']; }],
  ['the quiz answers cluster in slot 0',
    (s) => { for (const r of sec(s, 's23-quiz').rounds) for (const q of r.questions) if (typeof q.correct === 'number') q.correct = 0; }],
  ['the free-text backbone drops below the floor',
    (s) => { for (const r of sec(s, 's23-quiz').rounds) for (const q of r.questions) { if (q.format === 'typeIn' || q.format === 'errorSpot') { q.format = 'mcq'; q.opts = ['a', 'b', 'c']; q.correct = 0; delete q.accept; } } }],

  /* ── THE DICTÉE ──────────────────────────────────────────────────────── */
  ['a dictée line goes into WORD mode',
    (s) => { sec(s, 's18-dictation').itemIds[0] = A(291); }],
  ['the dictée stops asking for the obligatory answer',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.filter((x) => x !== A(296)); }],
  ['the dictée stops asking for « y en »',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.filter((x) => x !== A(314)); }],
  ['the dictée stops asking for a negative',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.filter((x) => x !== A(316) && x !== A(317)); }],

  /* ── THE COUNTS AND THE SHAPE ────────────────────────────────────────── */
  ['the reframe is reworded in one place',
    (s) => { const g = sec(s, 's03-goals'); g.goals[0].s = g.goals[0].s.replace(REFRAME, 'Swap the whole thing for one word.'); }],
  ["a2.06's rule is quoted one time fewer",
    (s) => { walkSet(sec(s, 's21-review'), (x) => x.includes(POSITION), (x) => x.replace(POSITION, 'It goes where it went before.')); }],
  ["a2.24's framing is quoted one time fewer",
    (s) => { walkSet(sec(s, 's21-review'), (x) => x.includes(A_FRAMING), (x) => x.replace(A_FRAMING, 'A person gives lui.')); }],
  ['the Owns loses a section',
    (s) => { const l = L(s); l.sections = l.sections.filter((x) => x.id !== 's10-unseen'); l.acts[2].sections = l.acts[2].sections.filter((x) => x !== 's10-unseen'); }],
  ['a section belongs to no act',
    (s) => { L(s).acts[3].sections = L(s).acts[3].sections.filter((x) => x !== 's13-frozen'); }],
  ['the unit sub grows a descriptive tail',
    (s) => { s.units.find((u) => u.id === 'a2.25').sub = 'Y et EN, les deux petits mots'; }],
  ['the unit sub reverts to the spine value with its em dash',
    (s) => { s.units.find((u) => u.id === 'a2.25').sub = 'the two neutral pronouns — à + thing, de + thing'; }],
  ['a headword is authored inside the block',
    (s) => { item(s, A(288)).fr = 'aller'; item(s, A(288)).kind = 'word'; }],
  ['an authored row goes over the 14-word budget',
    (s) => { item(s, A(287)).fr = 'Tu vas à Paris et à Lyon et à Nice et à Nantes et à Brest et à Tours ?'; }],

  /* ── THE RESPELLINGS ─────────────────────────────────────────────────── */
  ['an authored row closes a nasal with a plain n',
    (s) => { item(s, A(292)).respell = 'zhahn PARL'; }],
  ['the carried « j\'en veux » row goes back to its unrepaired value',
    (s) => { item(s, A(288)); item(s, 'fr.a2.pronoms-essentiels.031').respell = 'zhahn VUH'; }],
  ['the carried « j\'y pense » row goes back to its unrepaired BLIND value',
    (s) => { item(s, 'fr.a2.pronoms-essentiels.028').respell = 'zhee PAHNSS'; }],
  ['the carried « il y en a encore » row goes back',
    (s) => { item(s, 'fr.sons.expressions-utiles.158').respell = 'EEL YAHN NAH ahn-KOR'; }],
  ['the carried penser row goes back',
    (s) => { item(s, 'fr.sons.verbes-essentiels.020').respell = 'pahn-SAY'; }],
  ['the preposition en gets a different spelling from the pronoun',
    (s) => { item(s, A(312)).respell = 'ehl ah-BEET ohⁿ FRAHⁿSS'; }],

  /* ── THE HOUSE COPY ──────────────────────────────────────────────────── */
  ['grammar jargon reaches a card',
    (s) => { sec(s, 's05-there').say += ' These are adverbial pronouns.'; }],
  ['grammar jargon reaches the intro',
    (s) => { L(s).intro += ' They are neutral pronouns.'; }],
  ['a2.06 and a2.24 are named by their technical English titles',
    (s) => { sec(s, 's05-there').say += ' You met the direct object pronouns two lessons ago.'; }],
  ['an em dash reaches a card',
    (s) => { sec(s, 's05-there').say += ' Two words — one job.'; }],
  ['the banned word reaches a card, as a substring',
    (s) => { sec(s, 's05-there').say += ' That would be dishonest about what it tests.'; }],
  ['a fourth term chip is declared',
    (s) => { sec(s, 's05-there').terms = ['twoWords', 'inside', 'sameSlot', 'frozen']; }],
  ['the intro stops naming the little word',
    (s) => { L(s).intro = L(s).intro.replaceAll('little word', 'thing'); }],
  ['the intro stops saying the words cannot be left out',
    (s) => { L(s).intro = L(s).intro.replace('French will not let you leave these words out', 'French likes these words'); }],
  ['a sentence opens on a lowercase French fragment',
    (s) => { sec(s, 's05-there').say += " Look at it. du is de plus le."; }],

  /* ── THE TITLE WIDTH ─────────────────────────────────────────────────── */
  ['a mission title grows past the row budget',
    (s) => { sec(s, 's11-threeens').title = 'One Word With Three Different Jobs'; }],

  /* ── THE PREREQUISITES ───────────────────────────────────────────────── */
  ['a2.24 stops being a declared prerequisite',
    (s) => { s.units.find((u) => u.id === 'a2.25').prereqUnitIds = []; }],
  ["a2.24's shipped lesson disappears from its unit",
    (s) => { s.units.find((u) => u.id === 'a2.24').lessonIds = []; }],
  ["a2.06's shipped lesson disappears from its unit",
    (s) => { s.units.find((u) => u.id === 'a2.06').lessonIds = []; }],
  ['a2.24 stops carrying the à framing this lesson completes',
    (s) => { walkSet(s.lessons.find((l) => l.id === 'a2.24.l1'), (x) => x.includes(A_FRAMING), (x) => x.replaceAll(A_FRAMING, 'À plus a person gives lui.')); }],
  ['a2.06 stops carrying the position rule this lesson quotes',
    (s) => { walkSet(s.lessons.find((l) => l.id === 'a2.06.l1'), (x) => x.includes(POSITION), (x) => x.replaceAll(POSITION, 'It goes before the verb.')); }],

  /* ── THE TRAPDRILL CONTRACT ──────────────────────────────────────────── */
  ['the trapDrill loses its gate',
    (s) => { sec(s, 's12-trap').steps.find((x) => x.kind === 'drill').gate = false; }],
  ['the trapDrill goes back to the stacked shape',
    (s) => { const t = sec(s, 's12-trap'); delete t.steps; t.size = 'lg'; }],
  ['the trapDrill audio brief stops naming a card it plays',
    (s) => { const b = L(s).audio.recorded.find((r) => r.id === 'rec-a2-25-trap'); b.desc = b.desc.replace(" « J\'y vais à Paris. »,", ''); }],
  ['commonErrors loses its swipe',
    (s) => { sec(s, 's14-errors').swipe = false; }],
  ['a card rebuilds the one-line pair that clipped on a Pixel 6',
    (s) => { const c = sec(s, 's04-person').cards[0]; c.fr = 'Je parle à Marie.  ·  Tu vas à Paris ?'; c.sub = 'both'; }],

  /* ── THE SEED CUT ────────────────────────────────────────────────────── */
  ['an imported row this lesson leans on drops out of the seed',
    (s) => { s.items = s.items.filter((i) => i.id !== 'fr.a2.pronoms-essentiels.029'); }],
  ['one of the six published rows the paradigm rests on has moved',
    (s) => { item(s, 'fr.a2.pronoms-essentiels.031').fr = 'j en veux'; }],
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
    execFileSync('node', ['--test', '../ealch-v2/src/content/a2-25-y-en.test.ts'], { stdio: 'pipe' });
  } catch { red = true; }
  if (red) { caught += 1; console.log(`  caught   ${name}`); }
  else { missed.push(name); console.log(`  MISSED   ${name}`); }
}
copyFileSync(BAK, SEED);
unlinkSync(BAK);
console.log(`\n  ${caught}/${MUTATIONS.length} caught, ${missed.length} missed`);
if (missed.length) console.log(`  MISSED:\n${missed.map((m) => `    ${m}`).join('\n')}`);
