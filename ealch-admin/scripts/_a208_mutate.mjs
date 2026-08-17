// a2.08 mutation harness. Breaks one thing at a time in the SOURCE, runs the
// batch's offline+db guards, and confirms each mutation goes red.
//
//   node scripts/_a208_mutate.mjs
//
// An assertion that cannot fail is worse than no assertion. Doctrine expects
// two of these to find a WEAKNESS rather than confirm a strength.
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const CORPUS = new URL('./data/comparatifs-corpus.ts', import.meta.url);
const LESSON = new URL('./data/comparatifs-lesson.ts', import.meta.url);
const TERMS = new URL('./data/comparatifs-terms.ts', import.meta.url);

const FILES = { CORPUS, LESSON, TERMS };
const original = Object.fromEntries(Object.entries(FILES).map(([k, u]) => [k, readFileSync(u, 'utf8')]));

const MUTATIONS = [
  // THE ONE THAT FOUND A WEAKNESS. It stayed GREEN the first time: the tapTable
  // carries an INLINE copy of the sentence, so the corpus row walked away and
  // required layout 1 was destroyed with every guard reporting clean. The
  // DISPLAY_PARITY table exists because of this mutation.
  { name: 'break the constant: move a corpus row out from under the card that shows it',
    file: 'CORPUS', from: "sent(134, 'Il est moins grand que moi.'", to: "sent(134, 'Il est moins rapide que moi.'" },
  { name: 'break the constant from the LESSON side instead',
    file: 'LESSON', from: "cells: ['moins', 'Il est moins grand que moi.', 'less']", to: "cells: ['moins', 'Il est moins rapide que moi.', 'less']" },
  { name: 'drop a superlative cell: les plus grandes becomes a second masculine',
    file: 'CORPUS', from: "sent(144, 'Ce sont les plus grandes maisons du quartier.'", to: "sent(144, 'Ce sont les plus grands jardins du parc.'" },
  { name: 'import the unseen describing word, which deletes the question',
    file: 'CORPUS', from: "'fr.sons.adjectifs-essentiels.176',   // cher       SHEHR", to: "'fr.sons.adjectifs-essentiels.176', 'fr.sons.adjectifs-essentiels.088'," },
  { name: 'name the unseen word on a teaching card',
    file: 'LESSON', from: "{ fr: 'Il est plus grand que moi.', en: 'He is taller than me.', note: 'grand' },", to: "{ fr: 'Il est plus poli que moi.', en: 'He is more polite than me.', note: 'poli' }," },
  { name: 'let a possessive pronoun reach a learner surface',
    file: 'LESSON', from: "user: 'Le premier est plus grand que le second.',", to: "user: 'Le premier est plus grand que le mien.'," },
  { name: 'import a possessive-pronoun row',
    file: 'CORPUS', from: "E(63),    // Le train est plus rapide que le bus.", to: "E(63), E(13)," },
  { name: 'put `plus bon` on a card that is not allowed to carry it',
    file: 'LESSON', from: "note: 'grand' },", to: "note: 'grand, and never plus bon' }," },
  { name: 'teach `ne … plus` on a learner surface',
    file: 'LESSON', from: "body: 'More than. The one you will reach for first", to: "body: 'Je ne mange plus ici. More than. The one you will reach for first" },
  { name: 'half-repair `moins`, which the checker then calls clean',
    file: 'CORPUS', from: "from: 'MWAN', half: 'MWAⁿ', to: 'MWEHⁿ',\n    blind: false, house: true,\n    why: 'THE BARE HEADWORD", to: "from: 'MWAN', half: 'MWAⁿ', to: 'MWAⁿ',\n    blind: false, house: true,\n    why: 'THE BARE HEADWORD" },
  { name: 'file a repair as blind when the checker can see it',
    file: 'CORPUS', from: "blind: false, house: false,\n    why: 'The one `grand` row", to: "blind: true, house: false,\n    why: 'The one `grand` row" },
  { name: 'break the dictée into word mode',
    file: 'CORPUS', from: "sent(136, 'Il est plus grand.'", to: "sent(136, 'Il est beaucoup plus grand que son frère.'" },
  { name: 'release a sentence no deck can serve',
    file: 'LESSON', from: "[E(138), E(141), E(142), E(143), E(144)],", to: "[E(138), E(141), E(142), E(143), E(144), E(29)]," },
  { name: 'name a practice item with no voiceflash',
    file: 'LESSON', from: "E(133), E(134), E(135),\n    // The superlative, all four forms.", to: "E(133), E(134), E(135), E(1),\n    // The superlative, all four forms." },
  // REPLACES A BADLY CHOSEN MUTATION. The first version changed `moins grand`
  // to `le moins grand`, which collides with nothing and so was never a
  // collision at all. THE REAL ONE is the defect the test file found: `mieux`
  // and `le mieux` both normalise to `mieux` under the flashcard hub's own
  // article-stripping norm.
  { name: 'author two rows that collide under the flashcard hub norm',
    file: 'CORPUS', from: "phrase(148, 'le mieux de tous', 'the best of all (after a verb)', 'luh MYUH duh TOOS'", to: "phrase(148, 'le mieux', 'the best (after a verb)', 'luh MYUH'" },
  { name: 'stop naming a2.17 on a learner surface',
    file: 'LESSON', from: "${ADVERB_UNIT} left mieux here.`,", to: "The other lesson left mieux here.`," },
  { name: 'put jargon in Lesson.intro, which is drawn on the cover',
    file: 'LESSON', from: "intro: 'Comparing two things in French", to: "intro: 'The comparative paradigm. Comparing two things in French" },
  // REPLACES A BADLY CHOSEN MUTATION. The first version added four
  // `adjective`s against a plain-phrase count of 38 and the ratio never
  // flipped, which proved nothing about the guard. This is what the failure
  // actually looks like: the house phrase is swapped out wholesale.
  // AND THE FINDING THIS PAIR PRODUCED. Replacing the plain phrase in the TERMS
  // file alone left both GREEN, and correctly so: the lesson file holds 43 of
  // the 48 occurrences, so five swaps against thirty-eight never flip a ratio.
  //
  // WHAT THAT MEANS ABOUT THE GUARD Corrections §14.5 PRESCRIBES: a ratio is a
  // guard against a wholesale register change and NOT against a slip on one
  // card. One card saying `adjective` passes it, by design. That is the right
  // trade — banning the word would be a build inventing a rule the house does
  // not have, and `adjective` is on 147 shipped cards — but it should be said
  // out loud rather than discovered by the next author.
  { name: 'let the technical word outnumber the plain phrase (terms only, five of forty-eight)',
    regex: true, file: 'TERMS', from: /describing word/g, to: 'adjective' },
  { name: 'let the technical word outnumber the plain phrase (lesson, forty-three of forty-eight)',
    regex: true, file: 'LESSON', from: /describing word/g, to: 'adjective' },
  // GREEN, AND CORRECTLY SO. It strips the plain phrase from the LESSON and
  // leaves the five in TERMS, so plain is 5 and technical is 0 and 5 > 0 holds.
  // The `plain === 0` branch of the guard fires only when BOTH files lose it,
  // which no realistic edit does. Kept and labelled rather than deleted,
  // because a mutation that stays green for a reason you can state is evidence
  // and a mutation that stays green silently is a hole.
  { name: 'strip the plain phrase from the lesson but not the terms (guard tolerates it, by design)',
    regex: true, file: 'LESSON', from: /describing word/g, to: 'word' },
  { name: 'gender an authored row, which joins a1.03 ending population',
    file: 'CORPUS', from: "  id: E(n), kind: 'word', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1,", to: "  id: E(n), kind: 'word', level: 'a2', theme: THEME, fr, en, respell, tags, drills, version: 1, gender: 'm' as const," },
  { name: 'drop `que` from an authored comparison',
    file: 'CORPUS', from: "sent(133, 'Il est plus grand que moi.'", to: "sent(133, 'Il est plus grand.'" },
  { name: 'make the trapDrill speak a form French refuses',
    file: 'LESSON', from: "fr: 'Elle chante mieux.', ipa: '/ɛl ʃɑ̃t mjø/'", to: "fr: 'Elle chante plus bien.', ipa: '/ɛl ʃɑ̃t mjø/'" },
  { name: 'shuffle the quiz so one option slot holds too many answers',
    file: 'LESSON', from: "opts: ['plus le grand', 'plus grand le', 'le plus grand'], correct: 2", to: "opts: ['le plus grand', 'plus le grand', 'plus grand le'], correct: 0" },
  { name: 'give the trap act more missions than the frame',
    file: 'LESSON', from: "sections: ['s04-middle', 's05-swap', 's06-hear', 's07-plus', 's08-unseen', 's09-flash'],", to: "sections: ['s04-middle'],\n      // mutation\n      // eslint-disable-next-line\n      // @ts-expect-error" },
];

const restore = () => { for (const [k, u] of Object.entries(FILES)) writeFileSync(u, original[k], 'utf8'); };

let red = 0; let green = 0;
const weaknesses = [];
for (const m of MUTATIONS) {
  restore();
  const u = FILES[m.file];
  const src = original[m.file];
  if (m.regex) {
    if (!m.from.test(src)) { console.log(`  SKIP  ${m.name}\n        pattern not found`); continue; }
    m.from.lastIndex = 0;
  } else if (!src.includes(m.from)) {
    console.log(`  SKIP  ${m.name}\n        anchor not found: ${m.from.slice(0, 60)}`); continue;
  }
  writeFileSync(u, m.regex ? src.replace(m.from, m.to) : src.replace(m.from, m.to), 'utf8');
  let out = '';
  try {
    out = execSync('npx tsx scripts/author-comparatifs-batch.ts --dry --reapply', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (e) { out = `${e.stdout ?? ''}${e.stderr ?? ''}`; }
  const caught = /STOP:/.test(out) || /error TS/.test(out) || /Error/.test(out);
  if (caught) { red++; console.log(`  RED   ${m.name}\n        ${(out.match(/STOP: .*/) ?? [out.split('\n').find((l) => l.trim()) ?? ''])[0].slice(0, 150)}`); }
  else { green++; weaknesses.push(m.name); console.log(`  GREEN ${m.name}   <-- THE GUARDS DID NOT SEE THIS`); }
}
restore();
console.log(`\n  ${red} mutations caught, ${green} not.`);
if (weaknesses.length) console.log(`  WEAKNESSES:\n${weaknesses.map((w) => `    - ${w}`).join('\n')}`);
