// The a1.15 corpus: what this lesson imports, the eighteen rows it authors, and
// the nine shipped respellings it repairs.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for every `fr`, `ipa`, `respell` and
// `en` the lesson displays. famille-lesson.ts reads them FROM HERE and never
// restates them, for the same reason couleurs-corpus.ts and mois-corpus.ts do:
// before that convention one word's transcription was typed by hand in five
// sections and the five copies were free to drift.
//
// ══════════════════════════════════════════════════════════════════════════
//  A1-15-FAMILY-PROMPT.md IS RIGHT ABOUT THE BIG THING. IT IS WRONG ABOUT
//  FIVE SMALLER ONES, AND THIS TIME THEY ALL POINT THE OTHER WAY.
// ══════════════════════════════════════════════════════════════════════════
//
// The brief could not run its pre-flight probe and said so. It reasoned that
// `famille` being inside SEED_CUT.themes made the seed a complete read of the
// published set, and staked the whole brief on that.
//
// THE PROBE RAN. Measured 2026-08-06, `pnpm corpus:probe --unit a1.15
// --theme famille`:
//
//     published in postgres: 331      present in seed: 331
//     fr.a1.famille   count=234  max=234  NEXT FREE = fr.a1.famille.235  gaps: none
//     fr.a2.famille   count=12   fr.b1.famille   count=85
//
// The assumption holds exactly. 331 rather than the brief's "roughly 332", the
// block is genuinely contiguous, and .235 is genuinely the next free id. This is
// the first lesson on this track whose brief's corpus claim survived contact
// with Postgres, and it survived because the brief reasoned from the cut config
// rather than from the cut.
//
// Where it is wrong, it is wrong by UNDERSTATING what exists:
//
//   1. "`le petit-fils` / `la petite-fille`, which were not among the 23
//      confirmed" and "`le gendre`, `la belle-fille` and `les grands-parents`
//      were not found and were not exhaustively searched."
//
//      ALL FIVE EXIST, in famille, published, with respellings:
//
//          fr.a1.famille.023  les grands-parents   LAY grahn-pah-RAHN
//          fr.a1.famille.030  le petit-fils        LUH puh-tee-FEES
//          fr.a1.famille.031  la petite-fille      LAH puh-teet-FEE
//          fr.a1.famille.041  le gendre            LUH ZHAHNDR
//          fr.a1.famille.042  la belle-fille       LAH behl-FEE
//
//      So the headword set is 28 confirmed, not 23, and the authoring job is
//      smaller than the brief's own "small". This lesson imports .023, .030 and
//      .031 and leaves .041 and .042 alone, which is a curation decision rather
//      than a gap: `gendre` and `belle-fille` are not A1 and an itemId this
//      lesson declares has to be on a screen rather than merely resolvable.
//
//   2. "`les enfants` ... 23 verified present" and it is listed among the core
//      headwords present in famille.
//
//      FALSE for this theme. `les enfants` exists at fr.a1.mots-essentiels.001,
//      fr.a1.rp-famille.013 and fr.sons.alphabet.214, and NOWHERE in famille.
//      What famille holds is the SINGULAR, `l'enfant` at fr.a1.famille.020.
//      So `les enfants` is the one headword this lesson genuinely authors, at
//      .251, and it is free to author precisely because the theme does not hold
//      it. Checked through the real flashhub key (article-stripped, per theme):
//      norm("l'enfant") is "enfant" and norm("les enfants") is "enfants", which
//      are different keys, so the pair is legal.
//
//   3. "`la personne` is feminine whatever the person is" is offered as one of
//      the two exceptions to assert.
//
//      `la personne` is NOT in famille. It exists once, at
//      fr.sons.noms-essentiels.009. AUTHORING IT INTO famille WOULD BREAK
//      a1.03, and this is measured rather than feared. See THE WITHDRAWAL
//      below. The rule ships with `le bébé` and the masculine plurals instead,
//      which are already in the theme and cost nothing.
//
//   4. "One verified defect ... fr.a1.famille.021 la grand-mère."
//
//      NINE, in this theme, on rows this lesson displays. See RESPELL_REPAIRS.
//      Six the shared checker catches, three it cannot see, and one of the six
//      is a FALSE POSITIVE where the superscript would be the wrong fix.
//
//   5. "`de`-possession sentences ... A corpus of family *words* often has no
//      *relationship* sentences." Offered as a guess to be probed.
//
//      Correct, and stronger than the brief dared: across all 27,198 published
//      sentences, "la mère de" returns 0 and "le frère de" returns 0. There is
//      no `de`-possession evidence anywhere in the database. Every row proving
//      the reframe is authored here.
//
// ── THE WITHDRAWAL, measured through the real endingPopulation ─────────────
//
// The brief warns this is "the single most exposed [lesson] on the track" to
// a1.03's printed figures, and it is right. Measured in scripts/_famille_probe.ts
// against the REAL gender.logic.ts, not a copy:
//
//     baseline endingPopulation                     1824 nouns
//     + les enfants  (plural-only, excluded)        1824   no printed figure moves
//     + la mère de Paul (phrase, space in the bare) 1824   no printed figure moves
//     + la personne  (gendered singular word)       1825   -e: 873 -> 874   BREAKS a1.03
//
// `-e` is printed by a1.03 as a WORTHLESS_ENDING at `items: 873`, and
// a1-03-genre.test.ts recomputes it from the seed on every run and compares it
// exactly. So `la personne` was WITHDRAWN. It is not a small loss and it is not
// argued with: the brief itself says "check through the real endingPopulation
// and withdraw rather than argue."
//
// THIS LESSON AUTHORS EXACTLY ONE GENDERED WORD ROW, `les enfants`, and it is
// safe only because `les` makes it plural-only. Every other authored row is a
// phrase or a sentence. That is why eighteen new rows move nothing.
//
// ══════════════════════════════════════════════════════════════════════════
//  AN ID RACE WITH a1.17, WHICH IS BEING AUTHORED AT THE SAME TIME
// ══════════════════════════════════════════════════════════════════════════
//
// Found while typechecking, not by looking for it. `scripts/data/possessifs-*`
// and `scripts/_possessifs_*` exist on disk, are untracked by git, were written
// on 2026-08-06 between 15:45 and 16:00, and are a1.17's build in progress.
//
// IT CLAIMS THE SAME IDS. possessifs-corpus.ts takes fr.a1.famille.235-.257 for
// five headwords and a paradigm, and references up to .264. This file takes
// .235-.252. Both builds read the same probe and both got the same correct
// answer, because NEITHER HAS APPLIED ANYTHING YET.
//
// Verified against Postgres on 2026-08-06 (scripts/_famille_collision.ts):
//
//     fr.a1.famille.230-.234   published, and they are a1.07's avoir rows
//     fr.a1.famille.235+       NOTHING. Free.
//     content_units            neither a1.15.l1 nor a1.17.l1 exists
//
// So this is a RACE BETWEEN TWO UNAPPLIED BUILDS rather than a conflict with
// shipped content, and it resolves whichever way the two batches are run.
//
// WHAT THIS BUILD DOES ABOUT IT, and it is deliberately not "move out of the
// way": .235 is the genuine NEXT FREE, a1.15 is seq 19 and a1.17 is seq 20, and
// moving to .270 to dodge a file that may itself be rebased would leave a
// permanent hole in somebody else's sequence for no gain.
//
// Instead author-famille-batch.ts carries a HARD PRE-WRITE GUARD: before it
// opens a transaction it asks Postgres whether ANY of the eighteen authored ids
// already exists, and dies naming them if so. a1.13's batch upserts blindly
// with `on conflict (id) do update`, which would have silently overwritten
// a1.17's rows had it run second. Whichever of the two builds runs second now
// gets told to rebase instead of clobbering the first.
//
// TO REBASE, if a1.17 lands first: the eighteen ids below are literal on
// purpose, so they stay greppable. Change them, change AUTHORED_ROWS' order
// nowhere else, and re-run `pnpm corpus:probe --theme famille` for the new NEXT
// FREE. Nothing else in this lesson hardcodes a number.
//
// Reported rather than silently worked around. This is in the report.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { IMPORTED, type ImportedRow } from './famille-imported.ts';
import { WANTED, WANTED_IDS } from './famille-wanted.ts';
import { unitRef } from './_unit-ref.ts';

/** A citation that OPENS a sentence needs a capital, and the label is built at
 *  interpolation time rather than typed, so the capital has to be applied here.
 *  « lesson 22 said this first » is not a sentence. */
function Cap(s: string): string { return s.charAt(0).toUpperCase() + s.slice(1); }

export { IMPORTED, WANTED, WANTED_IDS };
export type { ImportedRow };

/* ─── Display strings, the single source of truth ──────────────────────────*/

export type Display = { fr: string; ipa: string; respell: string; en: string };

const unbracket = (s: string) => s.replace(/^\[|\]$/g, '');

/** Every French string this lesson puts on a screen, with the transcription it
 *  puts beside it. The lesson reads `sub()` and `ipaOf()` from here.
 *
 *  Where a row exists in Postgres, the respell below is what that row will hold
 *  AFTER this lesson's repairs, never what it holds today: a card reading
 *  LAH grahⁿ-MEHR while the flashcard hub reads LAH grahn-MEHR is a
 *  contradiction the learner can see. */
export const RESPELL: Record<string, Display> = {
  // the six matched pairs
  'le père': { fr: 'le père', ipa: '/lə pɛʁ/', respell: '[LUH PEHR]', en: 'the father' },
  'la mère': { fr: 'la mère', ipa: '/la mɛʁ/', respell: '[LAH MEHR]', en: 'the mother' },
  'le frère': { fr: 'le frère', ipa: '/lə fʁɛʁ/', respell: '[LUH FREHR]', en: 'the brother' },
  'la sœur': { fr: 'la sœur', ipa: '/la sœʁ/', respell: '[LAH SUHR]', en: 'the sister' },
  'le fils': { fr: 'le fils', ipa: '/lə fis/', respell: '[LUH FEES]', en: 'the son' },
  'la fille': { fr: 'la fille', ipa: '/la fij/', respell: '[LAH FEE]', en: 'the daughter' },
  "l'oncle": { fr: "l'oncle", ipa: '/lɔ̃kl/', respell: '[LOHⁿKL]', en: 'the uncle' },
  'la tante': { fr: 'la tante', ipa: '/la tɑ̃t/', respell: '[LAH TAHⁿT]', en: 'the aunt' },
  'le cousin': { fr: 'le cousin', ipa: '/lə ku.zɛ̃/', respell: '[LUH koo-ZAⁿ]', en: 'the cousin (male)' },
  'la cousine': { fr: 'la cousine', ipa: '/la ku.zin/', respell: '[LAH koo-ZEEN]', en: 'the cousin (female)' },
  'le neveu': { fr: 'le neveu', ipa: '/lə nə.vø/', respell: '[LUH nuh-VUH]', en: 'the nephew' },
  'la nièce': { fr: 'la nièce', ipa: '/la njɛs/', respell: '[LAH NYESS]', en: 'the niece' },

  // the generations either side
  'la famille': { fr: 'la famille', ipa: '/la fa.mij/', respell: '[LAH fah-MEE]', en: 'the family' },
  'les parents': { fr: 'les parents', ipa: '/le pa.ʁɑ̃/', respell: '[LAY pah-RAHⁿ]', en: 'the parents' },
  'la grand-mère': { fr: 'la grand-mère', ipa: '/la ɡʁɑ̃.mɛʁ/', respell: '[LAH grahⁿ-MEHR]', en: 'the grandmother' },
  'le grand-père': { fr: 'le grand-père', ipa: '/lə ɡʁɑ̃.pɛʁ/', respell: '[LUH grahⁿ-PEHR]', en: 'the grandfather' },
  'les grands-parents': { fr: 'les grands-parents', ipa: '/le ɡʁɑ̃.pa.ʁɑ̃/', respell: '[LAY grahⁿ-pah-RAHⁿ]', en: 'the grandparents' },
  'le petit-fils': { fr: 'le petit-fils', ipa: '/lə pə.ti.fis/', respell: '[LUH puh-tee-FEES]', en: 'the grandson' },
  'la petite-fille': { fr: 'la petite-fille', ipa: '/la pə.tit.fij/', respell: '[LAH puh-teet-FEE]', en: 'the granddaughter' },

  // married
  'le mari': { fr: 'le mari', ipa: '/lə ma.ʁi/', respell: '[LUH mah-REE]', en: 'the husband' },
  'la femme': { fr: 'la femme', ipa: '/la fam/', respell: '[LAH FAM]', en: 'the wife' },

  // where the rule stops
  'le bébé': { fr: 'le bébé', ipa: '/lə be.be/', respell: '[LUH bay-BAY]', en: 'the baby' },
  "l'enfant": { fr: "l'enfant", ipa: '/lɑ̃.fɑ̃/', respell: '[lahⁿ-FAHⁿ]', en: 'the child' },
  'les enfants': { fr: 'les enfants', ipa: '/le zɑ̃.fɑ̃/', respell: '[LAY zahⁿ-FAHⁿ]', en: 'the children' },

  // step and in-law
  'le beau-père': { fr: 'le beau-père', ipa: '/lə bo.pɛʁ/', respell: '[LUH boh-PEHR]', en: 'the father-in-law' },
  'la belle-mère': { fr: 'la belle-mère', ipa: '/la bɛl.mɛʁ/', respell: '[LAH behl-MEHR]', en: 'the mother-in-law' },
  'le demi-frère': { fr: 'le demi-frère', ipa: '/lə də.mi.fʁɛʁ/', respell: '[LUH duh-mee-FREHR]', en: 'the half brother' },
  'la demi-sœur': { fr: 'la demi-sœur', ipa: '/la də.mi.sœʁ/', respell: '[LAH duh-mee-SUHR]', en: 'the half sister' },

  // the thread, from sons.06. Stored bare, with no article, and shown that way.
  fil: { fr: 'fil', ipa: '/fil/', respell: '[FEEL]', en: 'thread, wire' },

  // the authored de-phrases
  'la mère de Paul': { fr: 'la mère de Paul', ipa: '/la mɛʁ də pɔl/', respell: '[lah MEHR duh POL]', en: "Paul's mother" },
  'le père de Marie': { fr: 'le père de Marie', ipa: '/lə pɛʁ də ma.ʁi/', respell: '[luh PEHR duh mah-REE]', en: "Marie's father" },
  'le frère de Paul': { fr: 'le frère de Paul', ipa: '/lə fʁɛʁ də pɔl/', respell: '[luh FREHR duh POL]', en: "Paul's brother" },
  'la sœur de Marie': { fr: 'la sœur de Marie', ipa: '/la sœʁ də ma.ʁi/', respell: '[lah SUHR duh mah-REE]', en: "Marie's sister" },
  'la fille de Paul': { fr: 'la fille de Paul', ipa: '/la fij də pɔl/', respell: '[lah FEE duh POL]', en: "Paul's daughter" },
  'le fils de Marie': { fr: 'le fils de Marie', ipa: '/lə fis də ma.ʁi/', respell: '[luh FEES duh mah-REE]', en: "Marie's son" },

  // the three frozen possessives
  'mon père': { fr: 'mon père', ipa: '/mɔ̃ pɛʁ/', respell: '[mohⁿ PEHR]', en: 'my father' },
  'ma mère': { fr: 'ma mère', ipa: '/ma mɛʁ/', respell: '[mah MEHR]', en: 'my mother' },
  'mes parents': { fr: 'mes parents', ipa: '/me pa.ʁɑ̃/', respell: '[may pah-RAHⁿ]', en: 'my parents' },
};

export function sub(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`famille-corpus: no respelling for "${fr}"`);
  return d.respell;
}

export function ipaOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`famille-corpus: no ipa for "${fr}"`);
  return d.ipa;
}

export function glossOf(fr: string): string {
  const d = RESPELL[fr];
  if (!d) throw new Error(`famille-corpus: no gloss for "${fr}"`);
  return d.en;
}

/** `fr` by id, read out of the imported manifest or the authored rows, so no
 *  section retypes a French string that a corpus row already holds. */
export function frOf(id: string): string {
  const hit = IMPORTED.find((r) => r.id === id) ?? AUTHORED_ROWS.find((r) => r.id === id);
  if (!hit) throw new Error(`famille-corpus: no row for ${id}`);
  return hit.fr;
}

export function enOf(id: string): string {
  const hit = IMPORTED.find((r) => r.id === id) ?? AUTHORED_ROWS.find((r) => r.id === id);
  if (!hit) throw new Error(`famille-corpus: no row for ${id}`);
  return hit.en;
}

/* ─── The respelling repairs ───────────────────────────────────────────────
 *
 * Display-only, on rows in this lesson's own theme that this lesson puts on a
 * screen. The batch prints each one and refuses to write if the stored value is
 * no longer the broken one it expects, because two people disagreeing about a
 * transcription is a decision rather than a merge.
 *
 * NINE, not the brief's one. Six the shared checker catches, THREE it cannot,
 * and one of the six is a false positive where a superscript would be wrong.
 * Every claim below was verified by running the REAL hasPlainNasalFor over both
 * the broken and the repaired value in scripts/_famille_probe.ts. */

export type RespellRepair = {
  id: string;
  fr: string;
  /** What the row carries today. The batch refuses if this has changed. */
  from: string;
  /** What it will carry. Always equal to this lesson's own RESPELL. */
  to: string;
  /** Does the SHARED checker catch the broken value? Recorded because three of
   *  these nine are invisible to it and a later author who trusts the checker
   *  alone will reintroduce them. */
  caughtByChecker: boolean;
  why: string;
};

export const RESPELL_REPAIRS: RespellRepair[] = [
  {
    id: 'fr.a1.famille.014', fr: 'les parents',
    from: 'LAY pah-RAHN', to: unbracket(RESPELL['les parents'].respell), caughtByChecker: true,
    why: `a plain n closes the genuine nasal /ɑ̃/ in -ents. Same class as ${unitRef('a1.13')}\'s blanc BLAHN.`,
  },
  {
    id: 'fr.a1.famille.018', fr: 'la femme',
    from: 'LAH FAHM', to: unbracket(RESPELL['la femme'].respell), caughtByChecker: true,
    why: 'THE FALSE POSITIVE, AND THE FIX IS NOT A SUPERSCRIPT. `la femme` is /fam/: the m is a REAL '
      + 'consonant and there is no nasal vowel in the word at all. hasPlainNasalFor flags LAH FAHM anyway, '
      + 'because its FIRST branch reads AH + M at a token end as a nasal and returns before the doubled-mm '
      + 'guard on the French spelling can save it. Writing LAH FAHⁿ would silence the checker AND teach a '
      + 'sound that is not there, and it is NOT flagged, so the checker cannot protect this row in either '
      + 'direction. LAH FAM passes, is verified in scripts/_famille_probe.ts, and matches the plain-A '
      + 'convention already shipped in this theme at .048 (luh pa-PA) and .053 (la ta-TA). Do not "fix" '
      + `this into a superscript. Same class as ${unitRef('a1.13')}\'s jaune ZHOHN -> ZHON.`,
  },
  {
    id: 'fr.a1.famille.020', fr: "l'enfant",
    from: 'lahn-FAHN', to: unbracket(RESPELL["l'enfant"].respell), caughtByChecker: true,
    why: 'TWO genuine nasals, /lɑ̃.fɑ̃/, and both are written with a plain n today.',
  },
  {
    id: 'fr.a1.famille.021', fr: 'la grand-mère',
    from: 'LAH grahn-MEHR', to: unbracket(RESPELL['la grand-mère'].respell), caughtByChecker: true,
    why: 'a plain n closes the nasal /ɑ̃/ in grand. The one defect the brief found, and it is real.',
  },
  {
    id: 'fr.a1.famille.022', fr: 'le grand-père',
    from: 'LUH grahn-PEHR', to: unbracket(RESPELL['le grand-père'].respell), caughtByChecker: true,
    why: 'the same nasal in the same word, on the partner row. Repairing one and not the other would put '
      + 'the two halves of one pair on one screen contradicting each other.',
  },
  {
    id: 'fr.a1.famille.023', fr: 'les grands-parents',
    from: 'LAY grahn-pah-RAHN', to: unbracket(RESPELL['les grands-parents'].respell), caughtByChecker: true,
    why: 'both nasals plain: grand and -ents. This row carries the error twice.',
  },
  {
    id: 'fr.a1.famille.024', fr: "l'oncle",
    from: 'LOHNKL', to: unbracket(RESPELL["l'oncle"].respell), caughtByChecker: false,
    why: 'a plain N closes the nasal /ɔ̃/ and hasPlainNasalFor CANNOT SEE IT: its test needs the n to end '
      + 'a token and KL follows it here, so the broken value passes every shared check. Invariant §3\'s '
      + 'first blind spot. Asserted by name.',
  },
  {
    id: 'fr.a1.famille.025', fr: 'la tante',
    from: 'LAH TAHNT', to: unbracket(RESPELL['la tante'].respell), caughtByChecker: false,
    why: 'a plain N closes the nasal /ɑ̃/ with a T behind it, so the checker is blind to it for the same '
      + 'reason as l\'oncle. The brief names `la tante` as a shape that trips the checker; measured, it '
      + 'does the opposite and slips past it. Asserted by name.',
  },
  {
    id: 'fr.a1.famille.026', fr: 'le cousin',
    from: 'LUH koo-ZAN', to: unbracket(RESPELL['le cousin'].respell), caughtByChecker: true,
    why: 'a plain N closes the nasal /ɛ̃/. Its partner `la cousine` is CORRECT as it stands at LAH koo-ZEEN, '
      + 'because /ku.zin/ has a real n, and this pair is exactly why the two must be judged separately '
      + 'rather than "fixed" together.',
  },
];

/** The repairs the shared checker cannot see. Exported so the batch, the merge
 *  and the test all assert these three by name rather than trusting the shared
 *  function to have covered them. */
export const REPAIRS_INVISIBLE_TO_CHECKER = RESPELL_REPAIRS
  .filter((r) => !r.caughtByChecker).map((r) => r.fr);

/** Flagged by the checker today and correct AFTER a repair that is NOT a
 *  superscript. Exported separately because the wrong fix passes the checker,
 *  so only an assertion by name can hold the line. */
export const REPAIRED_WITHOUT_SUPERSCRIPT = ['la femme'];

/** Broken rows this lesson deliberately does NOT touch, with the reason. Named
 *  rather than silently skipped, so the next author finds them as a list instead
 *  of as a surprise. */
export const KNOWN_BROKEN_NOT_REPAIRED: { id: string; fr: string; respell: string; why: string }[] = [
  {
    id: 'fr.a1.famille.041', fr: 'le gendre', respell: 'LUH ZHAHNDR',
    why: 'a word-internal nasal the checker cannot see, in THIS theme, and genuinely wrong. Not repaired '
      + 'because this lesson does not display `le gendre`: it is not A1 vocabulary. A repair on a row with '
      + 'no screen cannot be verified on a device, which is how a "fix" becomes an unreviewed edit.',
  },
  {
    id: 'fr.a1.rp-famille.*', fr: 'nine rows', respell: 'various',
    why: 'the rp-famille, evenements-familiaux, mots-essentiels and alphabet themes carry lower-case '
      + 'duplicates of most of these headwords, several with the same nasal defect (rp-famille.010 '
      + 'lay pah-RAHN, .016 luh grahn-PEHR, .017 lah grahn-MEHR, .013 lay zahn-FAHN, .020 luh koo-ZEHN; '
      + 'evenements-familiaux.062 lay grahn-pa-RAHN, .072 luh koo-ZAN, .073 LOHNKL, .074 la TAHNT; '
      + 'mots-essentiels.001 ahn-FAHN; alphabet.214 lay zahn-FAHN). Other themes, other lessons\' rows, '
      + 'and none of them is in this lesson\'s cut. Reported, not touched.',
  },
];

/* ─── The eighteen authored rows ───────────────────────────────────────────
 *
 * Sequence continues fr.a1.famille, whose highest published seq is 234 with no
 * gaps. NEXT FREE = .235, confirmed by pnpm corpus:probe on 2026-08-06.
 *
 * FOLLOWING famille's OWN CONVENTION, which is a third one: headwords and
 * sentences share the single prefix fr.a1.famille.*. couleurs splits them
 * across fr.sons.* and fr.a1.*; this theme does not, and a carried-in
 * convention would have put the phrases in a prefix that has never existed.
 *
 * ── What is authored and why nothing else is ──────────────────────────────
 *
 * TWELVE of the eighteen exist for ONE reason: there is no `de`-possession
 * evidence in the database. "la mère de" and "le frère de" both return 0 across
 * 27,198 published sentences. The reframe is the lesson and the corpus was
 * holding nothing that proves it.
 *
 * The six de-PHRASES (.235-.240) are the reframe in its smallest form: a
 * relationship and an owner, with the English beside it, and nothing else in
 * the string to distract from the fact that the two names appear in the
 * opposite order. They are `phrase` rather than `sentence` on purpose, so they
 * carry flashcard and voiceflash and can be drilled as units.
 *
 * .241 and .242 are THE MINIMAL PAIR, and they are minimal in the axis that
 * matters. Same two people, same two family words, and the ONLY thing that
 * moves between them is which name sits after `de`:
 *
 *     Marie est la sœur de Paul.     Marie is Paul's sister.
 *     Paul est le frère de Marie.    Paul is Marie's brother.
 *
 * a1.13's corpus header is explicit that the shipped corpus proves every rule
 * and proves almost none MINIMALLY, because its sentences differ in three or
 * four places at once. This pair differs in one, and it is the one that decides
 * the meaning.
 *
 * .248-.250 are `mon père`, `ma mère` and `mes parents` as THREE FROZEN WORDS.
 * They are authored as phrases rather than taught as a system because a1.17
 * owns the system. See the handover at the foot of famille-lesson.ts.
 *
 * .251 `les enfants` is the ONE headword this lesson authors, and the only
 * authored row carrying a gender. Safe because `les` makes it plural-only and
 * isPluralOnly() excludes it from a1.03's population. Measured, not assumed.  */

export type AuthoredRow = Item;

export const AUTHORED_ROWS: AuthoredRow[] = [
  /* ── the reframe, six times, in its smallest form (.235-.240) ─────────── */
  {
    id: 'fr.a1.famille.235', kind: 'phrase', level: 'a1', theme: 'famille',
    fr: 'la mère de Paul', en: "Paul's mother",
    ipa: ipaOf('la mère de Paul'), respell: unbracket(sub('la mère de Paul')),
    notes: 'English puts the owner first and adds an apostrophe. French puts the relationship first and '
      + 'joins it with de. The two names come out in the opposite order.',
    tags: ['famille', 'de-possession', `${Cap(unitRef('a1.15'))}`],
    drills: ['flashcard', 'voiceflash', 'dictation'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.a1.famille.236', kind: 'phrase', level: 'a1', theme: 'famille',
    fr: 'le père de Marie', en: "Marie's father",
    ipa: ipaOf('le père de Marie'), respell: unbracket(sub('le père de Marie')),
    notes: 'The relationship first, then de, then the owner.',
    tags: ['famille', 'de-possession', `${Cap(unitRef('a1.15'))}`],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.a1.famille.237', kind: 'phrase', level: 'a1', theme: 'famille',
    fr: 'le frère de Paul', en: "Paul's brother",
    ipa: ipaOf('le frère de Paul'), respell: unbracket(sub('le frère de Paul')),
    notes: 'Pairs with .235: same owner, different relationship, so only the first word moves.',
    tags: ['famille', 'de-possession', `${Cap(unitRef('a1.15'))}`],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.a1.famille.238', kind: 'phrase', level: 'a1', theme: 'famille',
    fr: 'la sœur de Marie', en: "Marie's sister",
    ipa: ipaOf('la sœur de Marie'), respell: unbracket(sub('la sœur de Marie')),
    notes: 'Pairs with .236: same owner, different relationship.',
    tags: ['famille', 'de-possession', `${Cap(unitRef('a1.15'))}`],
    drills: ['flashcard', 'voiceflash', 'dictation'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.a1.famille.239', kind: 'phrase', level: 'a1', theme: 'famille',
    fr: 'la fille de Paul', en: "Paul's daughter",
    ipa: ipaOf('la fille de Paul'), respell: unbracket(sub('la fille de Paul')),
    notes: 'Daughter, not girl. With de and a name behind it, la fille is a relationship.',
    tags: ['famille', 'de-possession', 'double-meaning', `${Cap(unitRef('a1.15'))}`],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.a1.famille.240', kind: 'phrase', level: 'a1', theme: 'famille',
    fr: 'le fils de Marie', en: "Marie's son",
    ipa: ipaOf('le fils de Marie'), respell: unbracket(sub('le fils de Marie')),
    notes: 'The l in fils is silent and the s is said: FEES, not FEELS.',
    tags: ['famille', 'de-possession', `${Cap(unitRef('a1.15'))}`],
    drills: ['flashcard', 'voiceflash', 'dictation'], version: 1, cardType: 'vocab',
  },

  /* ── the minimal pair (.241-.242) ─────────────────────────────────────── */
  {
    id: 'fr.a1.famille.241', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: 'Marie est la sœur de Paul.', en: "Marie is Paul's sister.",
    notes: 'Half of the pair. Only the name after de changes between this and .242, and the meaning '
      + 'changes with it.',
    tags: ['famille', 'de-possession', `${Cap(unitRef('a1.15'))}`],
    drills: ['sentence', 'flashcard', 'review', 'dictation'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.a1.famille.242', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: 'Paul est le frère de Marie.', en: "Paul is Marie's brother.",
    notes: 'The other half. The same two people, and de now points at Marie.',
    tags: ['famille', 'de-possession', `${Cap(unitRef('a1.15'))}`],
    drills: ['sentence', 'flashcard', 'review'], version: 1, cardType: 'vocab',
  },

  /* ── introducing somebody (.243-.244) ─────────────────────────────────── */
  {
    id: 'fr.a1.famille.243', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: 'Voici la mère de Paul.', en: "This is Paul's mother.",
    notes: `Voici puts somebody in front of the person you are talking to. ${Cap(unitRef('a1.01'))} already used it at `
      + 'fr.a1.salutations.073.',
    tags: ['famille', 'de-possession', `${Cap(unitRef('a1.15'))}`],
    drills: ['sentence', 'flashcard', 'review'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.a1.famille.244', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: 'Voici le grand-père de Marie.', en: "This is Marie's grandfather.",
    notes: 'The same frame with a longer relationship word in it. Nothing about the order changes.',
    tags: ['famille', 'de-possession', `${Cap(unitRef('a1.15'))}`],
    drills: ['sentence', 'flashcard', 'review'], version: 1, cardType: 'vocab',
  },

  /* ── counting your own family, on avoir (.245-.247) ───────────────────── */
  {
    id: 'fr.a1.famille.245', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "J'ai un frère et deux sœurs.", en: 'I have one brother and two sisters.',
    notes: `avoir plus a number. ${Cap(unitRef('a1.07'))} owns the verb and ${unitRef('a1.02')} owns the numbers, so this sentence needs `
      + 'nothing new.',
    tags: ['famille', 'avoir', `${Cap(unitRef('a1.15'))}`],
    drills: ['sentence', 'flashcard', 'review'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.a1.famille.246', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "Je n'ai pas de frère.", en: 'I do not have a brother.',
    notes: 'After a negative, un and une flatten to de. The same frame as fr.a1.famille.233, '
      + '« Je n\'ai pas de voiture. »',
    tags: ['famille', 'avoir', 'negation', `${Cap(unitRef('a1.15'))}`],
    drills: ['sentence', 'flashcard', 'review', 'dictation'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.a1.famille.247', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: 'Tu as des frères et sœurs ?', en: 'Do you have any brothers and sisters?',
    notes: 'The question you will be asked. Rising intonation, no inversion, which is how it is really '
      + 'said.',
    tags: ['famille', 'avoir', 'question', `${Cap(unitRef('a1.15'))}`],
    drills: ['sentence', 'flashcard', 'review'], version: 1, cardType: 'vocab',
  },

  /* ── the three frozen possessives (.248-.250) ─────────────────────────── */
  {
    id: 'fr.a1.famille.248', kind: 'phrase', level: 'a1', theme: 'famille',
    fr: 'mon père', en: 'my father',
    ipa: ipaOf('mon père'), respell: unbracket(sub('mon père')),
    notes: 'Learn it as one word. Mon goes with the words that take le.',
    tags: ['famille', 'frozen-possessive', `${Cap(unitRef('a1.15'))}`],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.a1.famille.249', kind: 'phrase', level: 'a1', theme: 'famille',
    fr: 'ma mère', en: 'my mother',
    ipa: ipaOf('ma mère'), respell: unbracket(sub('ma mère')),
    notes: 'Ma goes with the words that take la.',
    tags: ['famille', 'frozen-possessive', `${Cap(unitRef('a1.15'))}`],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
  },
  {
    id: 'fr.a1.famille.250', kind: 'phrase', level: 'a1', theme: 'famille',
    fr: 'mes parents', en: 'my parents',
    ipa: ipaOf('mes parents'), respell: unbracket(sub('mes parents')),
    notes: 'Mes goes with anything plural, whichever kind of word it is.',
    tags: ['famille', 'frozen-possessive', `${Cap(unitRef('a1.15'))}`],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
  },

  /* ── the one authored headword (.251) ─────────────────────────────────── */
  {
    id: 'fr.a1.famille.251', kind: 'word', level: 'a1', theme: 'famille',
    fr: 'les enfants', en: 'the children',
    ipa: ipaOf('les enfants'), respell: unbracket(sub('les enfants')), gender: 'm',
    notes: 'Masculine plural, whatever mix of boys and girls it covers. The theme holds the singular '
      + 'l\'enfant and has never held the plural.',
    tags: ['famille', 'noun', 'plural', `${Cap(unitRef('a1.15'))}`],
    drills: ['flashcard', 'voiceflash'], version: 1, cardType: 'vocab',
  },

  /* ── the double meaning, stated as a relationship (.252) ──────────────── */
  {
    id: 'fr.a1.famille.252', kind: 'sentence', level: 'a1', theme: 'famille',
    fr: "C'est la fille de Paul.", en: "That is Paul's daughter.",
    notes: 'La fille is girl or daughter. With de and a name behind it, only one reading is available, '
      + 'and that is what de buys you.',
    tags: ['famille', 'de-possession', 'double-meaning', `${Cap(unitRef('a1.15'))}`],
    drills: ['sentence', 'flashcard', 'review'], version: 1, cardType: 'vocab',
  },
];

export const AUTHORED_IDS: string[] = AUTHORED_ROWS.map((r) => r.id);

/* ─── Groups the lesson sequences ──────────────────────────────────────────*/

/** The twelve where the article matches the actual person, as six pairs. The
 *  pairing IS the teaching: the two columns of the tapTable are the two
 *  articles, so the gender lesson comes for free from the layout. */
export const MATCHED_PAIRS: { m: string; f: string; relation: string }[] = [
  { m: 'le père', f: 'la mère', relation: 'parent' },
  { m: 'le frère', f: 'la sœur', relation: 'sibling' },
  { m: 'le fils', f: 'la fille', relation: 'child' },
  { m: "l'oncle", f: 'la tante', relation: "parent's sibling" },
  { m: 'le cousin', f: 'la cousine', relation: 'cousin' },
  { m: 'le neveu', f: 'la nièce', relation: "sibling's child" },
];

/** Flat, in deck order. Twelve. */
export const THE_TWELVE: string[] = MATCHED_PAIRS.flatMap((p) => [p.m, p.f]);

/** Where the matching rule stops, and it ships WITH the rule rather than after
 *  it. A rule shipped without its exception is one a learner disproves on their
 *  own within a week. */
export const WHERE_IT_STOPS: { fr: string; what: string }[] = [
  { fr: 'le bébé', what: 'Masculine whatever the baby is. Nobody switches to la for a girl.' },
  { fr: "l'enfant", what: 'Masculine for a boy or a girl, and the l apostrophe hides the article anyway.' },
  { fr: 'les parents', what: 'Masculine plural over a mother and a father together.' },
  { fr: 'les enfants', what: 'Masculine plural over any mix of children.' },
  { fr: 'les grands-parents', what: 'Masculine plural again, over a grandmother and a grandfather.' },
];

/** The generations, for the tapTable that is the closest thing to a tree this
 *  app can draw. Generations down the side, masculine and feminine across. */
export const GENERATIONS: { label: string; m: string; f: string; both: string | null }[] = [
  { label: 'Grandparents', m: 'le grand-père', f: 'la grand-mère', both: 'les grands-parents' },
  { label: 'Parents', m: 'le père', f: 'la mère', both: 'les parents' },
  { label: 'Their brothers and sisters', m: "l'oncle", f: 'la tante', both: null },
  { label: 'You and yours', m: 'le frère', f: 'la sœur', both: null },
  { label: 'Cousins', m: 'le cousin', f: 'la cousine', both: null },
  { label: 'Children', m: 'le fils', f: 'la fille', both: 'les enfants' },
  { label: "Their children", m: 'le neveu', f: 'la nièce', both: null },
  { label: 'Grandchildren', m: 'le petit-fils', f: 'la petite-fille', both: null },
];

/** Step and in-law. The half most likely to be trimmed later, so the test
 *  asserts every one of them by name. */
export const EXTENDED: string[] = ['le beau-père', 'la belle-mère', 'le demi-frère', 'la demi-sœur'];

/** Married, and the two rows the double-meaning mission is built on. */
export const MARRIED: string[] = ['le mari', 'la femme'];

/** Words doing two jobs, where a learner who does not know will hear something
 *  that was not said. No quiz format can test this: ambiguity needs two
 *  contexts and every format gives one stem. It is a card and a `why`. */
export const DOUBLE_DUTY: { fr: string; one: string; two: string; decides: string }[] = [
  {
    fr: 'la femme', one: 'woman', two: 'wife',
    decides: 'With la in front of it and nothing else, a French ear reaches for wife. Une femme is a woman.',
  },
  {
    fr: 'la fille', one: 'girl', two: 'daughter',
    decides: 'De and a name behind it makes it daughter. La fille de Paul is his daughter, never a girl he knows.',
  },
];

/** The sound pair no lesson has ever put on one screen. Both rows already
 *  exist, in different themes, and .058's own note already points at fils. */
export const FILS_PAIR = { word: 'le fils', thread: 'fil', wordId: 'fr.a1.famille.015', threadId: 'fr.sons.muettes.058' };

/** The three possessives this lesson takes, and NOTHING else. a1.17 owns the
 *  rest. Exported so the batch, the merge and the test all assert the boundary
 *  against the same list. */
export const TAKEN_POSSESSIVES = ['mon', 'ma', 'mes'];

/** The possessives a1.17 keeps.
 *
 *  NOT probed as bare words, and that is a correction made during the build
 *  rather than a preference. The first draft of the guard checked for `son`
 *  with an accent-aware whole-word walk and fired immediately on « Marie's
 *  son », which is one of this lesson's own English glosses. `sa`, `ta`, `ses`,
 *  `nos` and `vos` are all equally unsafe as bare probes: they are short, and
 *  several of them are ordinary English or appear inside French words the
 *  lesson legitimately uses (`sont`, `personne`, `raison`).
 *
 *  Invariant §6 and a1.13's own header both warn about exactly this: a guard
 *  that fires on legitimate content gets deleted rather than fixed. So the
 *  probe is the POSSESSIVE PLUS A FAMILY NOUN, which is the only shape in which
 *  one of these could actually teach a1.17's lesson here. See
 *  reservedPossessivePhrases(). */
export const RESERVED_POSSESSIVES = ['ton', 'ta', 'tes', 'son', 'sa', 'ses', 'notre', 'nos', 'votre', 'vos', 'leur', 'leurs'];

/** The bare nouns a possessive would attach to in this lesson. Article
 *  stripped, because a possessive replaces the article. */
const FAMILY_BARE_NOUNS = [
  'père', 'mère', 'frère', 'frères', 'sœur', 'sœurs', 'fils', 'fille', 'filles',
  'oncle', 'tante', 'cousin', 'cousine', 'neveu', 'nièce', 'famille', 'parents',
  'grand-mère', 'grand-père', 'grands-parents', 'enfant', 'enfants', 'mari', 'femme',
  'bébé', 'petit-fils', 'petite-fille', 'beau-père', 'belle-mère', 'demi-frère', 'demi-sœur',
];

/** Every way one of a1.17's possessives could reach a learner surface HERE.
 *  A phrase probe cannot fire on an English gloss, which a bare `son` does. */
export function reservedPossessivePhrases(): string[] {
  const out: string[] = [];
  for (const p of RESERVED_POSSESSIVES) {
    for (const n of FAMILY_BARE_NOUNS) out.push(`${p} ${n}`);
  }
  return out;
}

/** The rule a1.17 opens with, which is the single most tempting thing to
 *  explain here. Multi-word phrases only: a guard built out of single common
 *  words fires on legitimate content and gets deleted rather than fixed.
 *  a1.13 shipped exactly that mistake and its header says so. */
export const POSSESSIVE_RULE_PHRASES = [
  'mon before a feminine',
  'mon in front of a feminine',
  'feminine noun starting with a vowel',
  'feminine word beginning with a vowel',
  'mon amie',
  'mon école',
  'switches to mon',
  'becomes mon before',
];

/** Agreement teaching a1.14 and a1.16 own. `grand-mère` is a FROZEN NOUN here,
 *  never an agreement example, or this lesson has opened a1.16's subject. */
export const AGREEMENT_PHRASES = [
  'adjectives agree',
  'the adjective agrees',
  'agrees with the noun',
  'before the noun',
  'after the noun',
  'grande-mère',
];

/** The misspelling that must never appear. `grand-mère` is fossilised: the form
 *  stopped agreeing centuries ago and `grande-mère` is not a word. */
export const FORBIDDEN_FORMS = ['grande-mère', 'grande mère', 'grands-mères', 'la femme de Paul est une femme'];

/** Withdrawn on purpose, with the measurement that withdrew it. */
export const WITHDRAWN: { fr: string; where: string; why: string }[] = [
  {
    fr: 'la personne', where: 'fr.sons.noms-essentiels.009',
    why: 'the brief asks for it as the second exception to the matching rule. Authoring it into famille '
      + `as a gendered singular word joins ${unitRef('a1.03')}\'s measured ending population and moves the printed -e `
      + 'figure from 873 to 874, which a1-03-genre.test.ts compares exactly. MEASURED in '
      + 'scripts/_famille_probe.ts through the real endingPopulation. The rule ships with le bébé and the '
      + 'masculine plurals instead, both already in the theme, both costing nothing.',
  },
  {
    fr: 'le gendre, la belle-fille', where: 'fr.a1.famille.041, .042',
    why: 'both exist and the brief believed neither did. Neither is A1 vocabulary and an itemId this '
      + 'lesson declares must be on a screen, so they are named here and imported by nothing.',
  },
];

/** Deliberately NOT imported, and this is a curation decision rather than an
 *  oversight: famille holds 234 a1 rows and this lesson names 50 of them. */
export const NOT_IMPORTED_COUNT = 234 - WANTED_IDS.filter((id) => id.startsWith('fr.a1.famille.')).length;
