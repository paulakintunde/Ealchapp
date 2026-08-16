/* Mutation harness for a2-24-pronoms-indirect.test.ts. WAVE 1.
 *
 * Breaks one claim at a time in a COPY of seed.json, runs the test file, and
 * reports whether it went red. An assertion that cannot fail is worse than no
 * assertion, and the measured rate across this band is that roughly two
 * mutations in a dozen find a weakness rather than confirming a strength.
 *
 * WAVE 1 IS THE OBVIOUS ONE and a clean sweep here is NOT evidence: a2.06 caught
 * 35 of 35 in its first wave and its second wave, aimed at the edges, found two
 * real holes. `_a224_mutate2.mjs` is that second wave.
 *
 *     node _a224_mutate.mjs
 */
import { readFileSync, writeFileSync, copyFileSync, unlinkSync } from 'node:fs';
import { execFileSync } from 'node:child_process';

const SEED = '../ealch-v2/src/content/seed.json';
const BAK = '../ealch-v2/src/content/seed.json.mutbak24';
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

const L = (s) => s.lessons.find((l) => l.id === 'a2.24.l1');
const item = (s, id) => s.items.find((i) => i.id === id);
const sec = (s, id) => L(s).sections.find((x) => x.id === id);

const POSITION = 'The pronoun goes in front of the verb, not after it.';
const REFRAME = 'If the person sits behind à, the pronoun is lui or leur.';

const MUTATIONS = [
  /* ── LAYOUT 1: six words in two rows ──────────────────────────────────── */
  ['the two sets collapse onto one row',
    (s) => { const c = sec(s, 's02-sets').cards[0]; c.fr = 'le · la · les · lui · lui · leur'; c.sub = 'six words'; }],
  ['the indirect row shows lui ONCE, losing the lost gender',
    (s) => { sec(s, 's02-sets').cards[0].sub = 'lui · leur'; }],
  ["a2.06's position rule is paraphrased in LAYOUT 1",
    (s) => { walkSet(sec(s, 's02-sets'), (x) => x.includes(POSITION), (x) => x.replace(POSITION, 'The pronoun comes before the verb.')); }],
  ['a2.06 stops being named beside its own rule',
    (s) => { walkSet(sec(s, 's02-sets'), (x) => x.includes('a2.06'), (x) => x.replaceAll('a2.06', 'last lesson')); }],
  ['the gender loss stops being stated on the sets card',
    (s) => { walkSet(sec(s, 's02-sets'), (x) => x.includes('you lose the gender'), (x) => 'Two rows of words.'); }],

  /* ── LAYOUT 2: the pronoun beside the possessive ──────────────────────── */
  /* UPDATED FOR v2's TWO-ROW SHAPE. The first version set `fr` to
   * « Je leur parle. », which BECAME the correct value when the one-line pair
   * was split into fr/sub, so the mutation quietly turned into a no-op and
   * reported MISSED. A mutation that stops mutating is worse than none. */
  ['the pronoun and the possessive stop sharing a card',
    (s) => { sec(s, 's11-leurs').cards[0].sub = '[zhuh luhr PARL]'; }],
  ['the two rows are rebuilt as the one line that clipped',
    (s) => { const c = sec(s, 's11-leurs').cards[0]; c.fr = 'Je leur parle.  ·  Voici leurs clés.'; c.sub = 'both at once'; }],
  ["a1.17's test is paraphrased instead of quoted",
    (s) => { walkSet(L(s), (x) => x.includes('a possessive has a thing behind it'), (x) => x.replace('a possessive has a thing behind it', 'a possessive is followed by a noun')); }],
  ['a1.17 stops being credited anywhere',
    (s) => { walkSet(L(s), (x) => x.includes('a1.17'), (x) => x.replaceAll('a1.17', 'an earlier lesson')); }],

  /* ── LAYOUT 3: the tapTable, and the six-and-four split ───────────────── */
  ['the tapTable grows to seven rows',
    (s) => { const t = sec(s, 's07-verbs'); t.rows.push({ ...t.rows[0], cells: ["parler à quelqu'un", 'talk to someone', 'Je lui parle'] }); }],
  ['a marked verb is smuggled onto the tapTable',
    (s) => { sec(s, 's07-verbs').rows[5].cells = ["écrire à quelqu'un", 'write to someone', 'Je leur écris']; }],
  ['a verb loses its English gloss column',
    (s) => { sec(s, 's07-verbs').rows[0].cells[1] = 'téléphoner'; }],
  ['one of the ten verbs disappears from every surface',
    (s) => { walkSet(L(s), (x) => x.includes("offrir à quelqu'un"), (x) => x.replaceAll("offrir à quelqu'un", 'giving something')); }],
  ['the paradigm becomes a table at layer core',
    (s) => { sec(s, 's04-two').type = 'table'; }],
  ['the reference sheet loses the ten-verb table',
    (s) => { const sh = L(s).sheets[0]; sh.sections = sh.sections.filter((x) => x.id !== 'sheet-verbs'); }],

  /* ── THE TWO ERRORS ──────────────────────────────────────────────────── */
  ['a correct card uses a2.06 words for a person behind à',
    (s) => { sec(s, 's06-behind').cards[0].body = "Say Je le téléphone. and stop."; }],
  ['a correct card puts an s on the pronoun',
    (s) => { sec(s, 's15-negation').cards[0].body = 'Je ne leurs parle pas.'; }],
  ['the wrong set is offered as the CORRECT option in a drill',
    (s) => { const g = sec(s, 's09-pick').groups[0].check; g.opts = ['Je le téléphone.', 'Je lui parle.']; g.correct = 0; }],
  ['the leurs error is offered as the CORRECT option in the trap',
    (s) => { const d = sec(s, 's12-trap').drill[0]; d.opts = ['Je leurs parle.', 'Je leur parle.']; d.correct = 0; }],
  ['the trap stops showing the error it exists for',
    (s) => { walkSet(sec(s, 's12-trap'), (x) => x.includes('Je leurs parle.'), (x) => x.replaceAll('Je leurs parle.', 'Je leur parle.')); }],
  ['the scene marks the error as the sentence that WORKS',
    (s) => { const b = sec(s, 's01-scene').beats.find((x) => x.kind === 'choice'); b.options[0].fr = "Oui, je l'ai téléphoné hier."; }],
  ["the scene's break puts the error in the RIGHT half",
    (s) => { const b = sec(s, 's01-scene').beats.find((x) => x.kind === 'break'); b.right.fr = "Oui, je l'ai téléphoné hier."; }],
  ['an authored row carries leurs with a verb behind it',
    (s) => { item(s, A(240)).fr = 'Je leurs parle.'; }],
  ['an authored row carries leurs with nothing plural behind it',
    (s) => { item(s, A(259)).fr = 'Voici leurs.'; }],

  /* ── THE NEIGHBOURS, RESERVED ────────────────────────────────────────── */
  ['a two-pronoun sentence reaches a card',
    (s) => { sec(s, 's08-signal').examples[0].note += ' Je le lui donne demain.'; }],
  ['an authored row carries two object pronouns',
    (s) => { item(s, A(250)).fr = 'Je le leur donne souvent.'; }],
  ['y as a pronoun leaks into a card',
    (s) => { sec(s, 's06-behind').cards[1].body += " J'y vais demain."; }],
  ['en as a pronoun leaks into a card',
    (s) => { sec(s, 's06-behind').cards[1].body += " J'en veux deux."; }],
  ['a2.25 stops being named anywhere',
    (s) => { walkSet(L(s), (x) => x.includes('a2.25'), (x) => x.replaceAll('a2.25', 'the next lesson')); }],

  /* ── THE à FRAMING a2.25 INHERITS ────────────────────────────────────── */
  ['the à framing is reworded',
    (s) => { walkSet(L(s), (x) => x.includes('À plus a person becomes lui or leur, and the à disappears with it.'), (x) => x.replace('À plus a person becomes lui or leur, and the à disappears with it.', 'The à goes away when you use a pronoun.')); }],
  ['a2.04 stops being named',
    (s) => { walkSet(L(s), (x) => x.includes('a2.04'), (x) => x.replaceAll('a2.04', 'an earlier lesson')); }],
  ["a2.04's own machinery is taught here",
    (s) => { sec(s, 's06-behind').cards[2].body += ' The contraction gives au and aux.'; }],

  /* ── THE NEGATION ARC ────────────────────────────────────────────────── */
  ["a2.19's line is harmonised with a1.18's",
    (s) => { walkSet(L(s), (x) => x.includes('Wrap the verb that changed, not the one carrying the meaning.'), (x) => x.replace('Wrap the verb that changed, not the one carrying the meaning.', 'Wrap the verb, then ask what the verb was.')); }],
  ["a2.06's negation extension is reworded",
    (s) => { walkSet(L(s), (x) => x.includes('The wrap goes round the pronoun and the verb together.'), (x) => x.replace('The wrap goes round the pronoun and the verb together.', 'Ne and pas go round both words.')); }],
  ["a2.06 stops being named beside the negation sentence it lends",
    (s) => { const c = sec(s, 's15-negation').cards[1]; c.body = c.body.replaceAll('a2.06', 'the last lesson'); }],

  /* ── a2.23's SHIPPED POINTER ─────────────────────────────────────────── */
  ['the ending rule is reworded',
    (s) => { walkSet(L(s), (x) => x.includes('The second word never answers to lui or leur. Nothing is added.'), (x) => x.replace('The second word never answers to lui or leur. Nothing is added.', 'No agreement after lui or leur.')); }],
  ["a2.23's promise stops being quoted",
    (s) => { walkSet(sec(s, 's16-ending'), (x) => x.includes('the reason the ending disappears on this screen is waiting there too'), (x) => 'a2.23 sent you here.'); }],
  ["a2.23's own sentence disappears from the ending section",
    (s) => { const e = sec(s, 's16-ending'); e.examples = e.examples.filter((x) => !x.fr.includes("Elle s'est lavé les mains.")); }],
  ['an authored row agrees a participle after leur',
    (s) => { item(s, A(269)).fr = 'Je leur ai parlés.'; }],
  ['the ending act swells to the size of the Owns',
    (s) => { const l = L(s); l.acts[4].sections = [...l.acts[4].sections, ...l.acts[5].sections.slice(0, 2)]; l.acts[5].sections = l.acts[5].sections.slice(2); }],

  /* ── THE SIXTH OCCURRENCE ────────────────────────────────────────────── */
  ["a2.02's term is paraphrased instead of quoted",
    (s) => { walkSet(L(s), (x) => x.includes('what comes next decides'), (x) => x.replace('what comes next decides', 'the next word decides')); }],
  ['the instance stops being marked as the sixth',
    (s) => { walkSet(L(s), (x) => /sixth/i.test(x), (x) => x.replace(/sixth/gi, 'latest')); }],
  ['the stressed-pronoun rule is reworded',
    (s) => { walkSet(L(s), (x) => x.includes('After a little word like avec, sans or pour, lui stands on its own and stays where English puts it.'), (x) => x.replace('After a little word like avec, sans or pour, lui stands on its own and stays where English puts it.', 'After a preposition lui goes at the end.')); }],

  /* ── THE QUIZ ────────────────────────────────────────────────────────── */
  ['the accent question becomes a typeIn',
    (s) => { const q = sec(s, 's23-quiz').rounds[1].questions[2]; q.format = 'typeIn'; q.accept = ['Je parle à Marie.']; delete q.opts; delete q.correct; }],
  ['the accent question loses the unaccented option',
    (s) => { const q = sec(s, 's23-quiz').rounds[1].questions[2]; q.opts[0] = 'Je parle de Marie aussi.'; }],
  ['an ear question offers leur against leurs',
    (s) => { const q = sec(s, 's23-quiz').rounds[0].questions[4]; q.opts = ['Je leur parle.', 'Voici leurs clés.']; }],
  ['a quiz ref points at a section that does not exist',
    (s) => { sec(s, 's23-quiz').rounds[0].questions[0].ref = 's99-nope'; }],
  ['a question loses its why',
    (s) => { delete sec(s, 's23-quiz').rounds[2].questions[1].why; }],
  ['a drill stops leading any round',
    (s) => { sec(s, 's23-quiz').rounds[4].targets = ['err-wrong-set']; }],
  ['a typed question asks for an agreed participle after lui',
    (s) => { const q = sec(s, 's23-quiz').rounds[4].questions[0]; q.accept = ['Je leur ai parlés.']; }],
  ['the quiz answers cluster in slot 0',
    (s) => { for (const r of sec(s, 's23-quiz').rounds) for (const q of r.questions) if (typeof q.correct === 'number') q.correct = 0; }],

  /* ── THE DICTÉE ──────────────────────────────────────────────────────── */
  ['a dictée line goes into WORD mode',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds[0] = A(246); }],
  ['the dictée stops asking for leurs',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.filter((x) => x !== A(259)); }],
  ['the dictée stops asking for the singular possessive',
    (s) => { const d = sec(s, 's18-dictation'); d.itemIds = d.itemIds.filter((x) => x !== A(258)); }],

  /* ── THE COUNTS AND THE SHAPE ────────────────────────────────────────── */
  ['the reframe is reworded in one place',
    (s) => { const g = L(s).sections.find((x) => x.id === 's03-goals'); g.goals[0].s = g.goals[0].s.replace(REFRAME, 'Pick lui or leur.'); }],
  ["a2.06's rule is quoted one time fewer",
    (s) => { const g = L(s).sections.find((x) => x.id === 's03-goals'); g.goals[3].s = g.goals[3].s.replace(POSITION, 'It goes where it went last time.'); }],
  ['the Owns loses a section',
    (s) => { const l = L(s); l.sections = l.sections.filter((x) => x.id !== 's10-unseen'); l.acts[2].sections = l.acts[2].sections.filter((x) => x !== 's10-unseen'); }],
  ['a section belongs to no act',
    (s) => { const l = L(s); l.acts[3].sections = l.acts[3].sections.filter((x) => x !== 's13-stressed'); }],
  ['the unit sub reverts to the spine value with its em dash',
    (s) => { s.units.find((u) => u.id === 'a2.24').sub = 'lui, leur — the verbs that take à'; }],
  ['a headword is authored inside the block',
    (s) => { item(s, A(275)).fr = 'obéir'; item(s, A(275)).kind = 'word'; }],
  ['an authored row goes over the 14-word budget',
    (s) => { item(s, A(237)).fr = 'Je parle à Marie et à Paul et à Camille et à Théo et à Louise et à Anne.'; }],

  /* ── THE RESPELLINGS ─────────────────────────────────────────────────── */
  ['an authored row closes a nasal with a plain n',
    (s) => { item(s, A(254)).respell = 'noo luhr par-LOHN'; }],
  ['a row goes back to the false-positive respelling',
    (s) => { item(s, A(243)).respell = 'zhuh lwee tay-lay-FOHN'; }],
  ['the carried envoyer row goes back to its unrepaired value',
    (s) => { item(s, 'fr.sons.verbes-essentiels.046').respell = 'ahn-vwah-YAY'; }],
  ['the repaired répondre row in the seed goes back',
    (s) => { item(s, 'fr.a1.dictee.108').respell = 'ray-POHNDR'; }],

  /* ── THE HOUSE COPY ──────────────────────────────────────────────────── */
  ['grammar jargon reaches a card',
    (s) => { sec(s, 's04-two').say += ' These are indirect object pronouns.'; }],
  ['grammar jargon reaches the intro',
    (s) => { L(s).intro += ' They are indirect objects.'; }],
  ['an em dash reaches a card',
    (s) => { sec(s, 's04-two').say += ' Two words — one question.'; }],
  ['the banned word reaches a card, as a substring',
    (s) => { sec(s, 's04-two').say += ' That would be dishonest about what it tests.'; }],
  ['a fourth term chip is declared',
    (s) => { sec(s, 's04-two').terms = ['twoWords', 'sameSlot', 'behindA', 'theirWord']; }],
  ['the intro stops naming the ten verbs',
    (s) => { L(s).intro = L(s).intro.replace('Ten verbs', 'Some verbs'); }],
  ['the intro stops stating where the person sits',
    (s) => { L(s).intro = L(s).intro.replaceAll('behind à', 'after the verb'); }],

  /* ── THE TITLE WIDTH ─────────────────────────────────────────────────── */
  ['a mission title grows past the row budget',
    (s) => { sec(s, 's07-verbs').title = 'Six Verbs That Give You No Warning At All'; }],

  /* ── THE PREREQUISITE ────────────────────────────────────────────────── */
  ['a2.06 stops being a declared prerequisite',
    (s) => { s.units.find((u) => u.id === 'a2.24').prereqUnitIds = []; }],
  ["a2.06's shipped lesson disappears from its unit",
    (s) => { s.units.find((u) => u.id === 'a2.06').lessonIds = []; }],

  /* ── THE TRAPDRILL CONTRACT ──────────────────────────────────────────── */
  ['the trapDrill loses its gate',
    (s) => { sec(s, 's12-trap').steps.find((x) => x.kind === 'drill').gate = false; }],
  ['the trapDrill goes back to the stacked shape',
    (s) => { const t = sec(s, 's12-trap'); delete t.steps; t.size = 'lg'; }],
  ['the trapDrill audio brief stops naming a card it plays',
    (s) => { const b = L(s).audio.recorded.find((r) => r.id === 'rec-a2-24-trap'); b.desc = b.desc.replace('« Je leurs parle. », ', ''); }],
  ['commonErrors loses its swipe',
    (s) => { sec(s, 's14-errors').swipe = false; }],
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
