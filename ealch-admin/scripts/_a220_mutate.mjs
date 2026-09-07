/* a2.20 mutation harness.
 *
 *   node scripts/_a220_mutate.mjs            all mutations
 *   node scripts/_a220_mutate.mjs 3 7        only those rows
 *
 * Breaks one claim at a time and asks all three layers whether they notice.
 *
 * ── WHAT THE HARNESSES BEFORE THIS ONE LEARNED THE HARD WAY ──────────────
 *
 * 1. RUN EVERY LAYER UNMUTATED FIRST (a2.13 §7). If the baseline is not green,
 *    every row below it is noise.
 * 2. A MISSING ANCHOR IS SKIPPED RATHER THAN COUNTED AS A PASS, which is what
 *    makes a stale harness visible instead of quietly reassuring.
 * 3. ONCE THE LESSON HAS BEEN APPLIED, EVERY CONTENT MUTATION TRIPS THE BATCH'S
 *    VERSION CHECK (a2.14 §7), so the batch reports "caught" with that message
 *    rather than on the guard you meant to test. This harness prints the last
 *    line of the failure precisely so the column can be read against the reason.
 *    READ THE MESSAGE, NOT THE COLUMN.
 * 4. THE TEST READS seed.json AND NOTHING ELSE. A source-only mutation it cannot
 *    see is reported n/a, not MISS.
 * 5. ONE ANCHOR IS OFTEN NOT ENOUGH (a2.14 §8). A claim stated in a label, a
 *    `say`, a `why` and a card body is not removed by touching one of them.
 * 6. A GUARD WHOSE EXPECTED VALUE COMES FROM THE SAME MODULE AS THE CONTENT IS
 *    GUARDING NOTHING (a2.18 §6).
 *
 * The five the brief names by name are rows 1 to 5:
 *   strip the circumflex from dû · merge two families into one section · teach
 *   an auxiliary choice · drop a participle · replace a typeIn with an mcq.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const CORPUS = join(here, 'data/participes-corpus.ts');
const LESSON = join(here, 'data/participes-lesson.ts');
const TERMS = join(here, 'data/participes-terms.ts');
const SEED = join(here, '../../ealch-v2/src/content/seed.json');
const FILES = [CORPUS, LESSON, TERMS, SEED];

/** { label, src: [file, from, to], also: [...], seed: [from, to] } */
const M = [
  /* ── The five the brief asks for by name ─────────────────────────────── */
  {
    // STRIP THE CIRCUMFLEX FROM dû. Without the roof it is the word for "some",
    // which is a different word that happens to be spelled the same way. The
    // brief asks for this to be asserted by name so a future author who trims it
    // goes red rather than shipping the wrong word.
    label: 'strip the circumflex from dû, in FORMS',
    src: [CORPUS, "  { past: 'dû', verb: 'devoir',", "  { past: 'du', verb: 'devoir',"],
    also: [
      [CORPUS, "export const DU_WITH_CIRCUMFLEX = 'dû';", "export const DU_WITH_CIRCUMFLEX = 'du';"],
      [CORPUS, "  past: 'dû',\n  bare: 'du',", "  past: 'du',\n  bare: 'du',"],
    ],
    seed: ['"fr": "J\'ai dû partir."', '"fr": "J\'ai du partir."'],
  },
  {
    // AND THE SAME MUTATION ON THE ROW ALONE, because a learner reads the row
    // and not the constant. This is the anchor a2.14 §8 says one is not enough
    // of: the constant above and the sentence here are two different claims.
    label: 'strip the circumflex from dû, on the corpus row only',
    src: [CORPUS, `  S(607, "J'ai dû partir.",`, `  S(607, "J'ai du partir.",`],
    seed: ['"fr": "J\'ai dû partir."', '"fr": "J\'ai du partir."'],
  },
  {
    // MERGE TWO FAMILIES INTO ONE SECTION. This is the failure the whole lesson
    // exists to avoid: a group whose members are not visible together is a list
    // with a heading on it.
    label: 'merge the -ert group into the -u section',
    src: [LESSON, "  { group: '-ert', sectionId: ERT_SECTION_ID },", "  { group: '-ert', sectionId: U_SECTION_ID },"],
  },
  {
    // TEACH AN AUXILIARY CHOICE. a2.21's whole canDo, and the brief calls this
    // boundary genuinely awkward.
    label: 'teach which first word a verb takes, on the deferral screen',
    src: [CORPUS, "export const ETRE_DEFERRAL =\n  `Three of these put a different word in front instead of avoir",
      "export const ETRE_DEFERRAL =\n  `Choose avoir or être depending on the verb"],
    seed: ['Three of these put a different word in front instead of avoir', 'Choose avoir or être depending on the verb'],
  },
  {
    // DROP A PARTICIPLE. The brief asks for all of them to be asserted
    // individually by name rather than as a count, and this is why.
    label: 'drop souffert from the -ert group',
    src: [CORPUS, "  { past: 'souffert', verb: 'souffrir',", "  { past: 'souffertX', verb: 'souffrir',"],
    seed: ['"fr": "J\'ai beaucoup souffert."', '"fr": "J\'ai beaucoup souffertX."'],
  },
  {
    // REPLACE A typeIn WITH AN mcq. Recognition tests something easier than what
    // the canDo asks for, and four of these would tip the whole exam.
    label: 'turn four typeIn questions into mcq',
    src: [LESSON, "            q: 'prendre. Write the past form.',\n            format: 'typeIn',\n            accept: ['pris'],\n            answer: 'pris',",
      "            q: 'prendre. Write the past form.',\n            format: 'mcq',\n            opts: ['prendu', 'pris', 'prendi'],\n            correct: 1,"],
    also: [
      [LESSON, "            q: 'ouvrir. Write the past form.',\n            format: 'typeIn',\n            accept: ['ouvert'],\n            answer: 'ouvert',",
        "            q: 'ouvrir. Write the past form.',\n            format: 'mcq',\n            opts: ['ouvri', 'ouvert', 'ouvru'],\n            correct: 1,"],
      [LESSON, "            q: 'courir. Write the past form.',\n            format: 'typeIn',\n            accept: ['couru'],\n            answer: 'couru',",
        "            q: 'courir. Write the past form.',\n            format: 'mcq',\n            opts: ['couri', 'couru', 'courert'],\n            correct: 1,"],
      [LESSON, "            q: 'connaître. Write the past form.',\n            format: 'typeIn',\n            accept: ['connu'],\n            answer: 'connu',",
        "            q: 'connaître. Write the past form.',\n            format: 'mcq',\n            opts: ['connaîtru', 'connu', 'connaissu'],\n            correct: 1,"],
    ],
    seed: ['"q": "prendre. Write the past form.",\n        "format": "typeIn"', '"q": "prendre. Write the past form.",\n        "format": "mcq"'],
  },

  /* ── The split with a2.05, and the guard it rests on ─────────────────── */
  {
    // AUTHOR A BARE PAST FORM AS A CORPUS ROW. a2.05 §4: the corpus helper
    // writes kind:'sentence' unconditionally, so `kind` cannot see this. A row
    // with no whitespace is a bare word whatever it calls itself, and that one
    // line is the assertion the whole ledger decision rests on.
    label: 'author a bare past form as a corpus row',
    src: [CORPUS, `  S(601, "J'ai vu Marie.", 'I saw Marie.',`, `  S(601, "vu", 'I saw Marie.',`],
    seed: ['"fr": "J\'ai vu Marie."', '"fr": "vu"'],
  },
  {
    // LAND A ROW INSIDE a2.05's BLOCK. Neither side may re-author the other's.
    label: "put a row inside a2.05's block",
    src: [CORPUS, '  S(633, "Je n\'ai pas compris.",', '  S(577, "Je n\'ai pas compris.",'],
  },
  {
    // CARRY A GENDERED ROW. a2.04 §0: the ending population is measured off the
    // SEED, so a CARRY puts a row there even when Postgres already had it.
    label: 'import the gendered copy of écrire',
    src: [CORPUS, "  { past: 'écrit', verb: 'écrire', verbId: 'fr.sons.consonnes.110',",
      "  { past: 'écrit', verb: 'écrire', verbId: 'fr.a1.ecole.049',"],
  },

  /* ── The organisation ────────────────────────────────────────────────── */
  {
    // MOVE A MEMBER OUT OF ITS GROUP'S SECTION. The group table would still name
    // it and the screen would not, which is the shape a count cannot see.
    label: 'take compris off the -is screen',
    src: [LESSON, "        items: [formCard('appris'), formCard('compris'), formCard('remis'), formCard('promis')],",
      "        items: [formCard('appris'), formCard('remis'), formCard('promis')],"],
    also: [
      [LESSON, "      { label: 'and the other two', head: `compris · promis`,", "      { label: 'and the other one', head: `promis`,"],
    ],
    // AND THE SEED LAYER DROPS THE FORM RATHER THAN A LABEL, so the by-name
    // assertion has something to fire on. The first version of this row changed
    // a question's capitalisation and reported the test blind while it was
    // correct: a mutation that does not remove the claim proves nothing.
    seed: ['compris', 'compri'],
  },
  {
    // CHANGE A GROUP SIZE WITHOUT CHANGING THE LIST. The declared constant and
    // the derived list are two different claims and both are asserted.
    label: 'say the -u group has twelve members',
    src: [CORPUS, "  '-is': 7, '-it': 4, '-u': 13, '-ert': 4, odd: 5,", "  '-is': 7, '-it': 4, '-u': 12, '-ert': 4, odd: 5,"],
  },
  {
    // DROP THE COVERAGE OF a2.05's THIRTY-FIVE. refait and aperçu are the two
    // this lesson derives on the sheet rather than teaching; remove them from
    // the sheet and two of a2.05's names are owned by nobody.
    label: 'drop the derived-only pair from the sheet',
    src: [LESSON, "        body: DERIVED_ONLY.map((d) => `${d.verb} gives ${d.past}, which is ${d.from} with a front on it.`).join(' ')",
      "        body: 'Two more exist and this lesson does not name them.'"],
    seed: ['refaire gives refait, which is fait with a front on it.', 'Two more exist.'],
  },

  /* ── The traps ───────────────────────────────────────────────────────── */
  {
    // SHOW A TRAP WITHOUT ITS WRONG FORM. « pris » next to a struck-through
    // « prendu » is more memorable than « pris » alone, and the brief asks for
    // the PAIRING to be asserted rather than the presence.
    label: 'show pris without prendu beside it',
    src: [CORPUS, "  { verb: 'prendre', wrong: 'prendu', right: 'pris',", "  { verb: 'prendre', wrong: 'pris', right: 'pris',"],
  },
  {
    // PUT AN INVENTED FORM WHERE THE ERROR IS NOT THE CONTENT.
    label: 'put an invented form on the reference sheet',
    src: [LESSON, "        body: `${REFRAME} ${THE_MOVE}`,", "        body: `${REFRAME} Say j'ai prendu and you will be understood.`,"],
    seed: ['Say the first word, and while it is out of your mouth', 'Say j\'ai prendu and you will be understood. Say the first word, and while it is out of your mouth'],
  },
  {
    // REMOVE THE « not a word » MARKER FROM A TERM. A chip is surfaced on every
    // section that declares it, so an unmarked non-word in one is a non-word the
    // learner meets on nine screens.
    label: 'print an invented form in a term without marking it',
    src: [TERMS, "      { itemId: 'fr.a2.verbes.591', note: 'What the rule would have given here is prendu, which is not a word.' },",
      "      { itemId: 'fr.a2.verbes.591', note: 'What the rule would have given here is prendu.' },"],
    seed: ['What the rule would have given here is prendu, which is not a word.', 'What the rule would have given here is prendu.'],
  },
  {
    // DROP THE SCENE'S NON-WORD. This lesson's failure IS a non-word, which is
    // what separates its scene from a2.05's.
    label: 'make the scene fail on a correct sentence instead',
    src: [CORPUS, `export const SCENE_STALL = "Samedi, j'ai... j'ai prendu...";`, `export const SCENE_STALL = "Samedi, j'ai... j'ai...";`],
    also: [
      [CORPUS, `export const SCENE_ERROR = "J'ai prendu le bus.";`, `export const SCENE_ERROR = "Je prends le bus.";`],
    ],
    // AND THE SEED MUTATION HAS TO REACH THE BREAK CARD AND THE CHOICE OPTION.
    // The first version moved SCENE_STALL alone and reported the test blind
    // while it was correct: the break card's `wrong.fr` still held « prendu »
    // and the scene still failed on a non-word, which is what the guard asks.
    seed: ['"fr": "J\'ai prendu le bus.",\n                  "en": "I took the bus, except that prendu is not a word.",',
      '"fr": "Je prends le bus.",\n                  "en": "I am taking the bus, which is tonight.",'],
    alsoSeed: ['"fr": "J\'ai prendu le bus.",\n                "ipa": "/ʒe pʁɑ̃.dy lə bys/",',
      '"fr": "Je prends le bus.",\n                "ipa": "/ʒə pʁɑ̃ lə bys/",'],
    thirdSeed: ['Samedi, j\'ai... j\'ai prendu...', 'Samedi, j\'ai... j\'ai...'],
  },

  /* ── The boundary with a2.21 ─────────────────────────────────────────── */
  {
    // PUT AN être ROW ON A PRODUCTION SURFACE. This lesson teaches the form and
    // a2.21 owns the choice, so a dictée line asking for one is a learner being
    // scored on something they have not been taught.
    label: 'make the venu row a dictée target',
    src: [CORPUS, "  S(620, 'Il est venu hier.', 'He came yesterday.', 'eel eh vuh-NÜ YEHR', '/il ɛ və.ny jɛʁ/', 'etre', NO_D,",
      "  S(620, 'Il est venu hier.', 'He came yesterday.', 'eel eh vuh-NÜ YEHR', '/il ɛ və.ny jɛʁ/', 'etre', D,"],
  },
  {
    // AGREE A PARTICIPLE. a2.21 says the opposite one lesson later and the
    // contrast only works against a clean background.
    label: 'agree a past form on an être row',
    src: [CORPUS, "  S(620, 'Il est venu hier.',", "  S(620, 'Elle est venue hier.',"],
    seed: ['"fr": "Il est venu hier."', '"fr": "Elle est venue hier."'],
  },
  {
    // PUT être SOMEWHERE IT DOES NOT BELONG.
    label: 'put an être sentence in the exam',
    src: [LESSON, "            q: 'dire. Write the past form.',", "            q: 'Elle est venue hier. dire. Write the past form.',"],
    seed: ['"q": "dire. Write the past form."', '"q": "Elle est venue hier. dire. Write the past form."'],
  },

  /* ── The back-references ─────────────────────────────────────────────── */
  {
    // PARAPHRASE a2.15's REFRAME. a2.16 §3: a back-reference to another unit's
    // line is a literal, not a variable, and the brief asks for a2.15 by name.
    label: "paraphrase a2.15's reframe",
    src: [LESSON, "      { label: `${FAMILY_UNIT} said this`, head: A215_REFRAME,",
      "      { label: `${FAMILY_UNIT} said this`, head: 'Hide the start of the verb and build the rest.',"],
    seed: ['"head": "Cover the front of the verb. Build what is left."', '"head": "Hide the start of the verb and build the rest."'],
  },
  {
    // AND REMOVE THE CREDIT ENTIRELY, in all four places it is written.
    label: 'stop naming a2.15 anywhere',
    src: [CORPUS, "export const FAMILY_UNIT = 'a2.15';", "export const FAMILY_UNIT = 'that earlier lesson';"],
  },
  {
    // NAME A UNIT ID IN THE INTRO. a2.05 measured that it was the only one of 58
    // lessons whose intro did, and that the cover is the first screen a learner
    // sees, before any card has credited anything.
    label: 'name a unit id in the intro',
    src: [LESSON, "    'Last lesson you were given a way of building the second word",
      "    'In a2.05 you were given a way of building the second word"],
    seed: ['"intro": "Last lesson you were given', '"intro": "In a2.05 you were given'],
  },

  /* ── The respellings and the dictée ──────────────────────────────────── */
  {
    // BREAK A NASAL THE CHECKER CAN SEE.
    label: 'break a visible nasal superscript',
    src: [CORPUS, "'ZHAY kohⁿ-PREE la kehs-TYOHⁿ'", "'ZHAY kohn-PREE la kehs-TYOHⁿ'"],
    seed: ['"respell": "ZHAY kohⁿ-PREE la kehs-TYOHⁿ"', '"respell": "ZHAY kohn-PREE la kehs-TYOHⁿ"'],
  },
  {
    // BREAK ONE THE CHECKER CANNOT. Corrections §6 and a2.17 §14.1: this is the
    // one the shared function is blind to, and it is asserted by name for
    // exactly this reason.
    label: 'break the blind nasal in construit',
    src: [CORPUS, "'ZHAY kohⁿs-TRWEE uhⁿ MÜR'", "'ZHAY kohns-TRWEE uhⁿ MÜR'"],
    seed: ['"respell": "ZHAY kohⁿs-TRWEE uhⁿ MÜR"', '"respell": "ZHAY kohns-TRWEE uhⁿ MÜR"'],
  },
  {
    // PUT A DICTÉE TARGET IN WORD MODE. Corrections §4: word mode hands every
    // real word over pre-spelled, which for a lesson about a spelling is the
    // answer.
    label: 'make a WORD-mode row a dictée target',
    src: [CORPUS, `  S(614, "J'ai offert des fleurs.", 'I gave flowers.', 'ZHAY oh-FEHR day FLEUR', '/ʒe ɔ.fɛʁ de flœʁ/', 'group', NO_D,`,
      `  S(614, "J'ai offert des fleurs.", 'I gave flowers.', 'ZHAY oh-FEHR day FLEUR', '/ʒe ɔ.fɛʁ de flœʁ/', 'group', D,`],
  },
  {
    // UNDO THE REPAIR. construire is displayed on the -it group screen and its
    // stored value is flagged.
    label: 'undo the construire repair',
    src: [CORPUS, "    to: 'kohⁿ-STRWEER',\n    half: 'kohⁿ-STRWEER',", "    to: 'kohn-STRWEER',\n    half: 'kohn-STRWEER',"],
    seed: ['"respell": "kohⁿ-STRWEER"', '"respell": "kohn-STRWEER"'],
  },

  /* ── The exam ────────────────────────────────────────────────────────── */
  {
    // DROP THE COLD QUESTION. The whole claim of the lesson is that sorting
    // generalises to forms it never printed.
    label: 'ask for a taught form instead of refait',
    src: [LESSON, "          q: `Refaire. I did the exercise again. J'ai ___ l'exercice.`,",
      "          q: `Faire. I did the housework. J'ai ___ le menage.`,"],
    also: [
      [LESSON, "            accept: ['refait'],\n            answer: 'refait',", "            accept: ['fait'],\n            answer: 'fait',"],
    ],
    seed: ['"accept": [\n                    "refait"\n                  ],\n                  "answer": "refait"',
      '"accept": [\n                    "fait"\n                  ],\n                  "answer": "fait"'],
  },
  {
    // ASK THE EAR TO CHOOSE BETWEEN dû AND du. There is no correct answer and
    // marking one right certifies a bug.
    label: 'offer dû against du in the ear question',
    src: [LESSON, "            opts: [fr(rowOf('bu')), fr(rowOf('eu')), fr(rowOf('vu'))],",
      "            opts: [fr(rowOf('dû')), \"J'ai du partir.\", fr(rowOf('vu'))],"],
    seed: ['"say": "J\'ai eu peur.",\n            "opts": [\n              "J\'ai bu un café.",\n              "J\'ai eu peur.",\n              "J\'ai vu Marie."\n            ]',
      '"say": "J\'ai eu peur.",\n            "opts": [\n              "J\'ai dû partir.",\n              "J\'ai du partir.",\n              "J\'ai vu Marie."\n            ]'],
  },
  {
    // ASK FOR dû TYPED. fold() strips the circumflex, so the question would
    // accept du and tell the learner they spelled it right.
    label: 'ask for dû in a typed question',
    src: [LESSON, "            q: 'vouloir. Write the past form.',\n            format: 'typeIn',\n            accept: ['voulu'],\n            answer: 'voulu',",
      "            q: 'devoir. Write the past form.',\n            format: 'typeIn',\n            accept: ['dû'],\n            answer: 'dû',"],
    // THE SEED MUTATION HAS TO MOVE THE `accept` LIST, because that is the field
    // the guard reads. The first version changed only `q` and reported the test
    // blind while it was correct, which is the harness proving nothing rather
    // than the layer being weak.
    seed: ['"accept": [\n                    "voulu"\n                  ],\n                  "answer": "voulu"',
      '"accept": [\n                    "dû"\n                  ],\n                  "answer": "dû"'],
  },
  {
    // TWO ROUNDS LEADING ONE TRIGGER, so one drill becomes dead content. a1.05
    // shipped two such drills and a1.07's first draft a third.
    label: 'point two rounds at the same trigger',
    src: [LESSON, "        targets: ['err-circumflex', 'err-eu'],", "        targets: ['err-built-form', 'err-eu'],"],
    seed: ['"targets": [\n            "err-circumflex",\n            "err-eu"\n          ]', '"targets": [\n            "err-built-form",\n            "err-eu"\n          ]'],
  },

  /* ── The layout rules that have each cost a build ────────────────────── */
  {
    // MISCOUNT A trapDrill CARDS LABEL. a2.18 §3: the pager draws one dot per
    // card directly under it, and nothing in any layer checked it before.
    label: 'label four trap cards as three',
    src: [LESSON, "      { kind: 'cards', label: 'Four cards', title: 'What It Looks Like' },",
      "      { kind: 'cards', label: 'Three cards', title: 'What It Looks Like' },"],
    seed: ['"label": "Four cards",\n            "title": "What It Looks Like"', '"label": "Three cards",\n            "title": "What It Looks Like"'],
  },
  {
    // STACK A trapDrill. lesson-contract.test.ts enforces the walk seed-wide and
    // two lessons in this band shipped without it.
    label: 'strip the steps off a trapDrill',
    src: [LESSON, "    steps: [\n      { kind: 'rule', label: 'The rule', title: 'One Sound, Two Words' },",
      "    size: 'lg',\n    stepsRemoved: [\n      { kind: 'rule', label: 'The rule', title: 'One Sound, Two Words' },"],
  },
  {
    // TAKE THE swipe OFF commonErrors, which draws a blank screen. a1.01
    // mission 5 and sons.08 mission 22 both shipped exactly this.
    label: 'take swipe off commonErrors',
    src: [LESSON, "    id: ERRORS_SECTION_ID,\n    title: 'The Five You Will Make',\n    frSub: 'Les cinq erreurs',\n    layer: 'core',\n    swipe: true,",
      "    id: ERRORS_SECTION_ID,\n    title: 'The Five You Will Make',\n    frSub: 'Les cinq erreurs',\n    layer: 'core',"],
  },
  {
    // PUT GRAMMAR JARGON ON A LEARNER SURFACE, in the plural, because hasPhrase
    // is boundary-exact and a2.15 shipped « Three paradigms » past all three of
    // its layers.
    label: 'put "past participles" on a card, in the plural',
    src: [LESSON, "      { label: 'the list', head: 'thirty-three verbs',", "      { label: 'the list', head: 'thirty-three past participles',"],
    seed: ['"head": "thirty-three verbs"', '"head": "thirty-three past participles"'],
  },
  {
    // PUT A BANNED WORD IN AN AUDIO BRIEF. a2.05 §3: every house-copy walk in
    // this band built its string out of sections + sheets + terms + intro +
    // overview + acts + drills and stopped, and the seed-wide test found the
    // word after all three of that build's layers were green.
    label: 'put the banned word in an audio brief',
    src: [LESSON, "          + 'THE VOWEL IS THE SAME IN ALL FIVE AND MUST BE THE SAME.",
      "          + 'Honestly, THE VOWEL IS THE SAME IN ALL FIVE AND MUST BE THE SAME."],
    seed: ['THE VOWEL IS THE SAME IN ALL FIVE AND MUST BE THE SAME.', 'Honestly, THE VOWEL IS THE SAME IN ALL FIVE AND MUST BE THE SAME.'],
  },
  {
    // AND AN EM DASH IN ONE, which is the same hole in the other house rule.
    label: 'put an em dash in an audio brief',
    src: [LESSON, "          + 'APART, THE LEARNER COMPARES FIVE PERFORMANCES INSTEAD OF ONE VOWEL WITH AND WITHOUT A CONSONANT IN FRONT OF IT. '",
      "          + 'APART, THE LEARNER COMPARES FIVE PERFORMANCES — instead of one vowel. '"],
    seed: ['APART, THE LEARNER COMPARES FIVE PERFORMANCES INSTEAD OF ONE VOWEL WITH AND WITHOUT A CONSONANT IN FRONT OF IT.',
      'APART, THE LEARNER COMPARES FIVE PERFORMANCES — instead of one vowel.'],
  },
  {
    // DECLARE A FOURTH TERM CHIP. The renderer shows three and collapses the
    // rest, which is how seven sons.06 sections came to declare chips nobody
    // sees.
    label: 'declare a fourth term chip',
    src: [LESSON, "    terms: ['theGroup', 'theFront', 'pastForm'],\n  },\n\n  {\n    /* THE COMPOUND PAYOFF",
      "    terms: ['theGroup', 'theFront', 'pastForm', 'theMachine'],\n  },\n\n  {\n    /* THE COMPOUND PAYOFF"],
    seed: ['"theGroup",\n      "theFront",\n      "pastForm"\n    ]', '"theGroup",\n      "theFront",\n      "pastForm",\n      "theMachine"\n    ]'],
  },
  {
    // GIVE A ROLE-PLAY TURN ONE ALTERNATIVE. scenario.logic.test.ts is a
    // SEED-WIDE test requiring two and no document in this band mentions it;
    // a2.03 shipped three such turns with every gate green.
    label: 'give a role-play turn one alternative',
    src: [LESSON, "        alts: [\n          { fr: fr(A(628)), en: en(A(628)) },\n          { fr: fr(rowOf('fait')), en: en(rowOf('fait')) },\n        ],",
      "        alts: [\n          { fr: fr(A(628)), en: en(A(628)) },\n        ],"],
  },
];

const only = process.argv.slice(2).map(Number).filter((n) => !Number.isNaN(n));
const backup = new Map(FILES.map((f) => [f, readFileSync(f, 'utf8')]));
const restore = () => { for (const [f, s] of backup) writeFileSync(f, s, 'utf8'); };
process.on('exit', restore);
process.on('SIGINT', () => { restore(); process.exit(130); });

function run(cmd) {
  try {
    execSync(cmd, { cwd: join(here, '..'), stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' });
    return { ok: true, msg: '' };
  } catch (e) {
    const out = `${e.stdout ?? ''}${e.stderr ?? ''}`.split(/\r?\n/).map((l) => l.trim()).filter(Boolean)
      .filter((l) => !l.startsWith('$') && !/ELIFECYCLE|Command failed with exit code/.test(l));
    const interesting = out.filter((l) => !/^(ℹ|✔|›|#)/.test(l));
    const line = interesting[interesting.length - 1] ?? out[out.length - 1] ?? '(no output)';
    return { ok: false, msg: line.slice(0, 150) };
  }
}

const BATCH = 'npx tsx scripts/author-participes-batch.ts --dry-run';
const MERGE = 'npx tsx scripts/merge-participes-into-seed.ts --dry-run';
const TEST = 'node --test ../ealch-v2/src/content/a2-20-participes.test.ts';

console.log('\n  BASELINE, unmutated. If this is not green every row below it is noise.\n');
for (const [name, cmd] of [['batch', BATCH], ['merge', MERGE], ['test', TEST]]) {
  const r = run(cmd);
  console.log(`    ${name.padEnd(6)} ${r.ok ? 'GREEN' : `RED  ${r.msg}`}`);
  if (!r.ok) { console.error('\n  baseline is not green; stopping.\n'); process.exit(1); }
}

console.log('\n  MUTATIONS\n');
console.log('   #  batch  merge  test   claim');
let blind = 0;
let skipped = 0;
let seedSkipped = 0;
M.forEach((mut, i) => {
  if (only.length && !only.includes(i + 1)) return;
  let srcOk = true;
  let seedOk = false;
  const edits = [...(mut.src ? [mut.src] : []), ...(mut.also ?? [])];
  for (const [file, from, to] of edits) {
    const cur = readFileSync(file, 'utf8');
    if (!cur.includes(from)) continue;
    writeFileSync(file, cur.replace(from, to), 'utf8');
  }
  if (mut.src) {
    const cur = backup.get(mut.src[0]);
    if (!cur.includes(mut.src[1])) srcOk = false;
  }
  if (mut.seed) {
    const [from, to] = mut.seed;
    let s = backup.get(SEED);
    if (s.includes(from)) { s = s.split(from).join(to); seedOk = true; }
    // A CLAIM STATED ON THREE SCREENS IS NOT REMOVED BY TOUCHING ONE OF THEM.
    // a2.14 §8, and it cost this harness two rows that reported a correct layer
    // blind before the extra anchors were added.
    if (mut.alsoSeed && s.includes(mut.alsoSeed[0])) s = s.split(mut.alsoSeed[0]).join(mut.alsoSeed[1]);
    if (mut.thirdSeed && s.includes(mut.thirdSeed[0])) s = s.split(mut.thirdSeed[0]).join(mut.thirdSeed[1]);
    if (seedOk) writeFileSync(SEED, s, 'utf8');
  }
  if (mut.src && !srcOk) {
    skipped += 1;
    console.log(`  ${String(i + 1).padStart(2)}  SKIPPED — source anchor not found: ${mut.label}`);
    restore();
    return;
  }
  // A MISSING SEED ANCHOR IS A SKIPPED LAYER, NOT A SKIPPED MUTATION.
  if (mut.seed && !seedOk) seedSkipped += 1;

  const b = mut.src ? run(BATCH) : { ok: true, msg: 'n/a' };
  const m = mut.src ? run(MERGE) : { ok: true, msg: 'n/a' };
  const t = seedOk ? run(TEST) : { ok: true, msg: 'n/a' };
  const col = (r, applicable) => (applicable ? (r.ok ? 'MISS ' : 'caught') : ' n/a ');
  const caught = (mut.src && (!b.ok || !m.ok)) || (seedOk && !t.ok);
  if (!caught) blind += 1;
  console.log(`  ${String(i + 1).padStart(2)}  ${col(b, !!mut.src).padEnd(6)} ${col(m, !!mut.src).padEnd(6)} ${col(t, seedOk).padEnd(6)} ${mut.label}`);
  for (const [who, r, applicable] of [['batch', b, !!mut.src], ['merge', m, !!mut.src], ['test ', t, seedOk]]) {
    if (applicable && !r.ok) console.log(`      ${who}: ${r.msg}`);
  }
  restore();
});

restore();
console.log(`\n  ${blind} mutation(s) caught by NOTHING, ${skipped} skipped, ${seedSkipped} with the seed layer n/a.\n`);
