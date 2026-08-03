// The sons.07 lexeme corpus — every French unit sons.07.l1 teaches.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for these 72 entries. The lesson body
// (elision-lesson.ts) reads `fr`, `ipa`, `respell`, `en`, `full` and `trigger`
// FROM HERE and never restates them, for the same reason muettes-corpus.ts
// exists: before that file, one word's IPA was typed by hand in five sections
// and the five copies were free to drift.
//
// ── What this corpus is FOR, and why it is not a word list ─────────────────
//
// Elision is not a property of a word, it is a property of a JOIN. `aime` does
// not elide; `je + aime` does. So the unit of teaching here is the contracted
// FORM (j'aime), and every entry carries the uncontracted source it came from
// in `full` ("je aime"). That pairing is the entire lesson: the learner has to
// see what was there before the vowel dropped, or the apostrophe is just a
// piece of punctuation they copy without understanding.
//
// `full` is deliberately NOT valid French on the elidable entries. "je aime" is
// something no French speaker would write or say, and showing it as the
// discarded intermediate is the point. On the h aspiré entries `full` IS the
// correct form (le haricot), because there the whole teaching is that nothing
// drops. `elides` distinguishes the two so no screen has to infer it.
//
// ── Reuse, and why most of these are new items ─────────────────────────────
//
// 1,195 items already in the corpus carry an apostrophe, across 47 themes.
// They are the reason this lesson can teach from words the learner has already
// met rather than from invented demonstrations. Fourteen of them are named in
// REUSED below and referenced BY ID from the lesson: nothing about them
// changes, and no shipped screen moves.
//
// They are not, however, sufficient to teach from, for one structural reason:
// a corpus entry for `l'école` records the contracted form only. It has no
// `full`, no `trigger`, no `elides` flag, so it cannot drive a drill that asks
// "what dropped, and why". Those fields are what this lesson is about. So the
// teaching set is authored here with them, and the reused items appear where
// the job is recognition ("you already say this") rather than derivation.
//
// ── Respelling convention ─────────────────────────────────────────────────
//
// Same as muettes-corpus.ts: hyphenated syllables, stressed syllable
// capitalised, nasal vowels closed with a superscript n (never a plain n or m),
// /ø œ/ as EU, /y/ as Ü, /e/ as AY against /ɛ/ as EH. Brackets are added by the
// renderer, never stored here. The density validator checks the rendered form.
//
// One elision-specific convention: a contracted form is respelled as ONE word
// with no gap, because that is the whole phonetic claim. j'aime is [ZHEM], not
// [zhuh-EM]. Writing a gap there would teach the exact hesitation the lesson
// exists to remove.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** A corpus entry plus the lesson-facing display data the renderer needs. */
export type ElisionWord = Omit<Item, 'drills'> & {
  /** The uncontracted source. On an eliding entry this is the discarded
   *  intermediate ("je aime") and is deliberately not valid French. On an
   *  h aspiré entry it is the CORRECT form (le haricot), because nothing
   *  drops. Read `elides` to know which. */
  full: string;
  /** Does this join actually contract? False is the h aspiré minority and the
   *  handful of forms that never elide. */
  elides: boolean;
  /** The elidable word doing the dropping: 'je', 'le', 'de'. Null on entries
   *  that exist only to show elision being BLOCKED. */
  trigger: string | null;
  /** Which teaching family. Drives the drill pools and the deckTranche
   *  slices so neither restates a word list. */
  family: 'core' | 'grammar' | 'blocked' | 'phrase' | 'fixed';
  drills: Item['drills'];
};

const W: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const WD: Item['drills'] = ['flashcard', 'voiceflash', 'review', 'dictation'];

/** The lesson's 72 entries. Sequence numbers are stable and must not be
 *  renumbered: they are the SRS key and every attempt ever logged hangs off
 *  them. Append new entries at the end. */
export const ELISION: ElisionWord[] = [
  // ── je: the one the learner says every time they open their mouth ────────
  { id: 'fr.sons.elision.001', kind: 'word', level: 'sons', theme: 'elision', fr: "j'aime", en: 'I like, I love', ipa: '/ʒɛm/', respell: 'ZHEM', full: 'je aime', elides: true, trigger: 'je', family: 'core', tags: ['je', 'vowel-initial'], drills: WD, audioRef: null, version: 1, notes: 'je + aime. The E drops because aime starts with a vowel sound.' },
  { id: 'fr.sons.elision.002', kind: 'word', level: 'sons', theme: 'elision', fr: "j'ai", en: 'I have', ipa: '/ʒe/', respell: 'ZHAY', full: 'je ai', elides: true, trigger: 'je', family: 'core', tags: ['je', 'vowel-initial', 'high-frequency'], drills: WD, audioRef: null, version: 1, notes: 'Two letters and an apostrophe. One of the most common words in the language.' },
  { id: 'fr.sons.elision.003', kind: 'word', level: 'sons', theme: 'elision', fr: "j'habite", en: 'I live', ipa: '/ʒa.bit/', respell: 'zha-BEET', full: 'je habite', elides: true, trigger: 'je', family: 'core', tags: ['je', 'h-muet'], drills: WD, audioRef: null, version: 1, notes: 'The H is silent, so habite starts on a vowel SOUND. That is what counts.' },
  { id: 'fr.sons.elision.004', kind: 'word', level: 'sons', theme: 'elision', fr: "j'écoute", en: 'I listen', ipa: '/ʒe.kut/', respell: 'zhay-KOOT', full: 'je écoute', elides: true, trigger: 'je', family: 'core', tags: ['je', 'vowel-initial'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.005', kind: 'word', level: 'sons', theme: 'elision', fr: "j'arrive", en: 'I am coming', ipa: '/ʒa.ʁiv/', respell: 'zha-REEV', full: 'je arrive', elides: true, trigger: 'je', family: 'core', tags: ['je', 'vowel-initial'], drills: WD, audioRef: null, version: 1, notes: 'What you call out when someone is waiting for you.' },
  { id: 'fr.sons.elision.006', kind: 'word', level: 'sons', theme: 'elision', fr: "j'oublie", en: 'I forget', ipa: '/ʒu.bli/', respell: 'zhoo-BLEE', full: 'je oublie', elides: true, trigger: 'je', family: 'core', tags: ['je', 'vowel-initial'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.007', kind: 'word', level: 'sons', theme: 'elision', fr: "j'attends", en: 'I am waiting', ipa: '/ʒa.tɑ̃/', respell: 'zha-TAHⁿ', full: 'je attends', elides: true, trigger: 'je', family: 'core', tags: ['je', 'vowel-initial', 'nasal'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.008', kind: 'word', level: 'sons', theme: 'elision', fr: 'je parle', en: 'I speak', ipa: '/ʒə paʁl/', respell: 'zhuh PARL', full: 'je parle', elides: false, trigger: 'je', family: 'core', tags: ['je', 'consonant-initial', 'no-elision'], drills: WD, audioRef: null, version: 1, notes: 'A consonant follows, so nothing drops. This is the other half of the rule.' },

  // ── le / la: the articles, where elision is most visible on the page ─────
  { id: 'fr.sons.elision.009', kind: 'word', level: 'sons', theme: 'elision', fr: "l'école", en: 'the school', ipa: '/le.kɔl/', respell: 'lay-KOL', full: 'la école', elides: true, trigger: 'la', family: 'core', tags: ['la', 'vowel-initial', 'gender-hidden'], drills: WD, audioRef: null, version: 1, notes: "École is feminine, but l' hides that. You cannot hear gender here." },
  { id: 'fr.sons.elision.010', kind: 'word', level: 'sons', theme: 'elision', fr: "l'ami", en: 'the friend', ipa: '/la.mi/', respell: 'la-MEE', full: 'le ami', elides: true, trigger: 'le', family: 'core', tags: ['le', 'vowel-initial', 'gender-hidden'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.elision.011', kind: 'word', level: 'sons', theme: 'elision', fr: "l'amie", en: 'the friend (f)', ipa: '/la.mi/', respell: 'la-MEE', full: 'la amie', elides: true, trigger: 'la', family: 'core', tags: ['la', 'vowel-initial', 'gender-hidden'], drills: W, audioRef: null, version: 1, gender: 'f', notes: "Identical out loud to l'ami. Only the spelling tells you which." },
  { id: 'fr.sons.elision.012', kind: 'word', level: 'sons', theme: 'elision', fr: "l'homme", en: 'the man', ipa: '/lɔm/', respell: 'LOM', full: 'le homme', elides: true, trigger: 'le', family: 'core', tags: ['le', 'h-muet'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'H muet. The article shrinks and the word starts on the O.' },
  { id: 'fr.sons.elision.013', kind: 'word', level: 'sons', theme: 'elision', fr: "l'eau", en: 'the water', ipa: '/lo/', respell: 'LOH', full: 'la eau', elides: true, trigger: 'la', family: 'core', tags: ['la', 'vowel-initial', 'high-frequency'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'Three letters, one sound, and the article is welded to it.' },
  { id: 'fr.sons.elision.014', kind: 'word', level: 'sons', theme: 'elision', fr: "l'addition", en: 'the bill', ipa: '/la.di.sjɔ̃/', respell: 'la-dee-SYOHⁿ', full: 'la addition', elides: true, trigger: 'la', family: 'core', tags: ['la', 'vowel-initial', 'nasal', 'cafe'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'You have asked for this in a cafe. Now you know why it is not la addition.' },
  { id: 'fr.sons.elision.015', kind: 'word', level: 'sons', theme: 'elision', fr: "l'hôtel", en: 'the hotel', ipa: '/lo.tɛl/', respell: 'loh-TEL', full: 'le hôtel', elides: true, trigger: 'le', family: 'core', tags: ['le', 'h-muet'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.elision.016', kind: 'word', level: 'sons', theme: 'elision', fr: "l'heure", en: 'the hour, the time', ipa: '/lœʁ/', respell: 'LEUR', full: 'la heure', elides: true, trigger: 'la', family: 'core', tags: ['la', 'h-muet', 'high-frequency'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.elision.017', kind: 'word', level: 'sons', theme: 'elision', fr: "l'orange", en: 'the orange', ipa: '/lɔ.ʁɑ̃ʒ/', respell: 'lo-RAHⁿZH', full: 'la orange', elides: true, trigger: 'la', family: 'core', tags: ['la', 'vowel-initial', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.elision.018', kind: 'word', level: 'sons', theme: 'elision', fr: "l'avion", en: 'the plane', ipa: '/la.vjɔ̃/', respell: 'la-VYOHⁿ', full: 'le avion', elides: true, trigger: 'le', family: 'core', tags: ['le', 'vowel-initial', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.elision.019', kind: 'word', level: 'sons', theme: 'elision', fr: "l'argent", en: 'the money', ipa: '/laʁ.ʒɑ̃/', respell: 'lar-ZHAHⁿ', full: 'le argent', elides: true, trigger: 'le', family: 'core', tags: ['le', 'vowel-initial', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.elision.020', kind: 'word', level: 'sons', theme: 'elision', fr: "l'enfant", en: 'the child', ipa: '/lɑ̃.fɑ̃/', respell: 'lahⁿ-FAHⁿ', full: 'le enfant', elides: true, trigger: 'le', family: 'core', tags: ['le', 'vowel-initial', 'nasal'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.021', kind: 'word', level: 'sons', theme: 'elision', fr: 'le pain', en: 'the bread', ipa: '/lə pɛ̃/', respell: 'luh PEHⁿ', full: 'le pain', elides: false, trigger: 'le', family: 'core', tags: ['le', 'consonant-initial', 'no-elision', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'A consonant follows. The article stays whole and you hear the little uh.' },
  { id: 'fr.sons.elision.022', kind: 'word', level: 'sons', theme: 'elision', fr: 'la porte', en: 'the door', ipa: '/la pɔʁt/', respell: 'la PORT', full: 'la porte', elides: false, trigger: 'la', family: 'core', tags: ['la', 'consonant-initial', 'no-elision'], drills: W, audioRef: null, version: 1, gender: 'f' },

  // ── de: the preposition that hides inside half the phrases you know ──────
  { id: 'fr.sons.elision.023', kind: 'word', level: 'sons', theme: 'elision', fr: "d'accord", en: 'agreed, OK', ipa: '/da.kɔʁ/', respell: 'da-KOR', full: 'de accord', elides: true, trigger: 'de', family: 'grammar', tags: ['de', 'vowel-initial', 'high-frequency'], drills: WD, audioRef: null, version: 1, notes: 'You have said this without ever noticing it was two words.' },
  { id: 'fr.sons.elision.024', kind: 'word', level: 'sons', theme: 'elision', fr: "d'abord", en: 'first of all', ipa: '/da.bɔʁ/', respell: 'da-BOR', full: 'de abord', elides: true, trigger: 'de', family: 'grammar', tags: ['de', 'vowel-initial'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.025', kind: 'word', level: 'sons', theme: 'elision', fr: "beaucoup d'eau", en: 'a lot of water', ipa: '/bo.ku do/', respell: 'boh-koo DOH', full: 'beaucoup de eau', elides: true, trigger: 'de', family: 'grammar', tags: ['de', 'vowel-initial'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.026', kind: 'word', level: 'sons', theme: 'elision', fr: "une carafe d'eau", en: 'a jug of water', ipa: '/yn ka.ʁaf do/', respell: 'ün ka-raf DOH', full: 'une carafe de eau', elides: true, trigger: 'de', family: 'grammar', tags: ['de', 'vowel-initial', 'cafe'], drills: W, audioRef: null, version: 1, notes: 'The free thing you can always ask for in a French restaurant.' },
  { id: 'fr.sons.elision.027', kind: 'word', level: 'sons', theme: 'elision', fr: "l'huile d'olive", en: 'olive oil', ipa: '/lɥil dɔ.liv/', respell: 'lweel do-LEEV', full: 'la huile de olive', elides: true, trigger: 'de', family: 'grammar', tags: ['de', 'la', 'h-muet', 'double-elision'], drills: W, audioRef: null, version: 1, notes: 'Two elisions in three words. Both articles got out of the way.' },
  { id: 'fr.sons.elision.028', kind: 'word', level: 'sons', theme: 'elision', fr: "pas d'argent", en: 'no money', ipa: '/pa daʁ.ʒɑ̃/', respell: 'pa dar-ZHAHⁿ', full: 'pas de argent', elides: true, trigger: 'de', family: 'grammar', tags: ['de', 'vowel-initial', 'nasal'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.029', kind: 'word', level: 'sons', theme: 'elision', fr: 'de Paris', en: 'from Paris', ipa: '/də pa.ʁi/', respell: 'duh pa-REE', full: 'de Paris', elides: false, trigger: 'de', family: 'grammar', tags: ['de', 'consonant-initial', 'no-elision'], drills: W, audioRef: null, version: 1 },

  // ── ne: the negative that vanishes and takes the meaning with it ─────────
  { id: 'fr.sons.elision.030', kind: 'phrase', level: 'sons', theme: 'elision', fr: "je n'ai pas", en: 'I do not have', ipa: '/ʒə ne pa/', respell: 'zhuh nay PA', full: 'je ne ai pas', elides: true, trigger: 'ne', family: 'grammar', tags: ['ne', 'negation', 'high-frequency'], drills: WD, audioRef: null, version: 1, notes: 'Miss this elision and you have said the opposite of what you meant.' },
  { id: 'fr.sons.elision.031', kind: 'phrase', level: 'sons', theme: 'elision', fr: "je n'aime pas", en: 'I do not like', ipa: '/ʒə nɛm pa/', respell: 'zhuh nem PA', full: 'je ne aime pas', elides: true, trigger: 'ne', family: 'grammar', tags: ['ne', 'negation'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.032', kind: 'phrase', level: 'sons', theme: 'elision', fr: "ce n'est pas", en: 'it is not', ipa: '/sə nɛ pa/', respell: 'suh neh PA', full: 'ce ne est pas', elides: true, trigger: 'ne', family: 'grammar', tags: ['ne', 'negation', 'high-frequency'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.033', kind: 'phrase', level: 'sons', theme: 'elision', fr: 'je ne sais pas', en: 'I do not know', ipa: '/ʒə nə sɛ pa/', respell: 'zhuh nuh seh PA', full: 'je ne sais pas', elides: false, trigger: 'ne', family: 'grammar', tags: ['ne', 'negation', 'consonant-initial', 'no-elision'], drills: WD, audioRef: null, version: 1, notes: 'sais starts on a consonant, so ne stays whole. Compare je n\'ai pas.' },

  // ── ce / que / se / me / te: the rest of the closed set ──────────────────
  { id: 'fr.sons.elision.034', kind: 'word', level: 'sons', theme: 'elision', fr: "c'est", en: 'it is, this is', ipa: '/sɛ/', respell: 'SEH', full: 'ce est', elides: true, trigger: 'ce', family: 'grammar', tags: ['ce', 'vowel-initial', 'high-frequency'], drills: WD, audioRef: null, version: 1, notes: 'The single most common contraction in spoken French.' },
  { id: 'fr.sons.elision.035', kind: 'word', level: 'sons', theme: 'elision', fr: "c'était", en: 'it was', ipa: '/se.tɛ/', respell: 'say-TEH', full: 'ce était', elides: true, trigger: 'ce', family: 'grammar', tags: ['ce', 'vowel-initial'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.036', kind: 'phrase', level: 'sons', theme: 'elision', fr: "qu'est-ce que c'est ?", en: 'what is it?', ipa: '/kɛs kə sɛ/', respell: 'kess kuh SEH', full: 'que est-ce que ce est', elides: true, trigger: 'que', family: 'grammar', tags: ['que', 'ce', 'double-elision', 'high-frequency'], drills: WD, audioRef: null, version: 1, notes: 'Two elisions in one question. Nobody pauses anywhere in it.' },
  { id: 'fr.sons.elision.037', kind: 'word', level: 'sons', theme: 'elision', fr: "qu'il", en: 'that he', ipa: '/kil/', respell: 'KEEL', full: 'que il', elides: true, trigger: 'que', family: 'grammar', tags: ['que', 'vowel-initial'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.038', kind: 'word', level: 'sons', theme: 'elision', fr: "qu'elle", en: 'that she', ipa: '/kɛl/', respell: 'KEL', full: 'que elle', elides: true, trigger: 'que', family: 'grammar', tags: ['que', 'vowel-initial'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.039', kind: 'word', level: 'sons', theme: 'elision', fr: "je m'appelle", en: 'my name is', ipa: '/ʒə ma.pɛl/', respell: 'zhuh ma-PEL', full: 'je me appelle', elides: true, trigger: 'me', family: 'grammar', tags: ['me', 'vowel-initial', 'high-frequency'], drills: WD, audioRef: null, version: 1, notes: 'The first sentence you ever learned, and it was an elision all along.' },
  { id: 'fr.sons.elision.040', kind: 'word', level: 'sons', theme: 'elision', fr: "s'il vous plaît", en: 'please', ipa: '/sil vu plɛ/', respell: 'seel voo PLEH', full: 'si il vous plaît', elides: true, trigger: 'si', family: 'fixed', tags: ['si', 'vowel-initial', 'high-frequency'], drills: WD, audioRef: null, version: 1, notes: 'si only ever elides before il and ils. Nowhere else, ever.' },
  { id: 'fr.sons.elision.041', kind: 'word', level: 'sons', theme: 'elision', fr: "s'habiller", en: 'to get dressed', ipa: '/sa.bi.je/', respell: 'sa-bee-YAY', full: 'se habiller', elides: true, trigger: 'se', family: 'grammar', tags: ['se', 'h-muet'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.042', kind: 'word', level: 'sons', theme: 'elision', fr: "s'asseoir", en: 'to sit down', ipa: '/sa.swaʁ/', respell: 'sa-SWAR', full: 'se asseoir', elides: true, trigger: 'se', family: 'grammar', tags: ['se', 'vowel-initial'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.043', kind: 'word', level: 'sons', theme: 'elision', fr: "t'aime", en: 'love you', ipa: '/tɛm/', respell: 'TEM', full: 'te aime', elides: true, trigger: 'te', family: 'grammar', tags: ['te', 'vowel-initial'], drills: W, audioRef: null, version: 1, notes: 'As in je t\'aime. te drops its vowel exactly like me and se.' },
  { id: 'fr.sons.elision.044', kind: 'word', level: 'sons', theme: 'elision', fr: "aujourd'hui", en: 'today', ipa: '/o.ʒuʁ.dɥi/', respell: 'oh-zhoor-DWEE', full: 'au jour de hui', elides: true, trigger: 'de', family: 'fixed', tags: ['de', 'frozen', 'high-frequency'], drills: WD, audioRef: null, version: 1, notes: 'A frozen elision. Nobody has said hui on its own for 500 years.' },
  { id: 'fr.sons.elision.045', kind: 'word', level: 'sons', theme: 'elision', fr: "jusqu'à", en: 'until, as far as', ipa: '/ʒys.ka/', respell: 'zhüs-KA', full: 'jusque à', elides: true, trigger: 'jusque', family: 'fixed', tags: ['jusque', 'vowel-initial'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.046', kind: 'word', level: 'sons', theme: 'elision', fr: "lorsqu'il", en: 'when he', ipa: '/lɔʁs.kil/', respell: 'lors-KEEL', full: 'lorsque il', elides: true, trigger: 'lorsque', family: 'fixed', tags: ['lorsque', 'vowel-initial'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.047', kind: 'word', level: 'sons', theme: 'elision', fr: "puisqu'il", en: 'since he', ipa: '/pɥis.kil/', respell: 'pweess-KEEL', full: 'puisque il', elides: true, trigger: 'puisque', family: 'fixed', tags: ['puisque', 'vowel-initial'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.048', kind: 'word', level: 'sons', theme: 'elision', fr: "quelqu'un", en: 'someone', ipa: '/kɛl.kœ̃/', respell: 'kel-KUHⁿ', full: 'quelque un', elides: true, trigger: 'quelque', family: 'fixed', tags: ['quelque', 'vowel-initial', 'nasal'], drills: W, audioRef: null, version: 1 },

  // ── h aspiré: the closed list that blocks everything above ───────────────
  //
  // These are the trap. There are few enough of them that a learner can
  // memorise the set, which is exactly what the lesson asks them to do. The
  // test pins this list: if a word is added or removed here, the assertion
  // that the lesson teaches a COMPLETE closed set has to be updated with it.
  { id: 'fr.sons.elision.049', kind: 'word', level: 'sons', theme: 'elision', fr: 'le haricot', en: 'the bean', ipa: '/lə a.ʁi.ko/', respell: 'luh a-ree-KOH', full: 'le haricot', elides: false, trigger: null, family: 'blocked', tags: ['h-aspire', 'no-elision'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: "H aspiré. The article stays whole: le haricot, never l'haricot." },
  { id: 'fr.sons.elision.050', kind: 'word', level: 'sons', theme: 'elision', fr: 'le héros', en: 'the hero', ipa: '/lə e.ʁo/', respell: 'luh ay-ROH', full: 'le héros', elides: false, trigger: null, family: 'blocked', tags: ['h-aspire', 'no-elision'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: "H aspiré. And yet l'héroïne elides. The same root, two behaviours." },
  { id: 'fr.sons.elision.051', kind: 'word', level: 'sons', theme: 'elision', fr: 'le hibou', en: 'the owl', ipa: '/lə i.bu/', respell: 'luh ee-BOO', full: 'le hibou', elides: false, trigger: null, family: 'blocked', tags: ['h-aspire', 'no-elision'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'A tiny gap between le and ibou. That gap is the whole signal.' },
  { id: 'fr.sons.elision.052', kind: 'word', level: 'sons', theme: 'elision', fr: 'la honte', en: 'the shame', ipa: '/la ɔ̃t/', respell: 'la OHⁿT', full: 'la honte', elides: false, trigger: null, family: 'blocked', tags: ['h-aspire', 'no-elision', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.elision.053', kind: 'word', level: 'sons', theme: 'elision', fr: 'la hauteur', en: 'the height', ipa: '/la o.tœʁ/', respell: 'la oh-TEUR', full: 'la hauteur', elides: false, trigger: null, family: 'blocked', tags: ['h-aspire', 'no-elision'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.elision.054', kind: 'word', level: 'sons', theme: 'elision', fr: 'le hasard', en: 'chance, luck', ipa: '/lə a.zaʁ/', respell: 'luh a-ZAR', full: 'le hasard', elides: false, trigger: null, family: 'blocked', tags: ['h-aspire', 'no-elision'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.elision.055', kind: 'word', level: 'sons', theme: 'elision', fr: 'le hockey', en: 'hockey', ipa: '/lə ɔ.kɛ/', respell: 'luh o-KEH', full: 'le hockey', elides: false, trigger: null, family: 'blocked', tags: ['h-aspire', 'no-elision', 'loanword'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Borrowed words keep their own H. Almost all of them are aspiré.' },
  { id: 'fr.sons.elision.056', kind: 'word', level: 'sons', theme: 'elision', fr: 'la Hollande', en: 'Holland', ipa: '/la ɔ.lɑ̃d/', respell: 'la o-LAHⁿD', full: 'la Hollande', elides: false, trigger: null, family: 'blocked', tags: ['h-aspire', 'no-elision', 'proper-noun', 'nasal'], drills: W, audioRef: null, version: 1 },

  // ── The contrast pairs: elision is the only difference, and one is wrong ─
  //
  // NOTE, 2026-08-02: .057 was an l'homme entry here, duplicating .012 in the
  // core family. flashhub-coverage.test.ts caught it once the lesson reached
  // the seed: two items with the same `fr` in one theme let the flashcard hub
  // serve the same card twice, and the learner rates a word they have already
  // rated. .012 is the one every section, drill and glossary entry references;
  // .057 was referenced by nothing. Removed rather than renamed, and the
  // sequence number is deliberately NOT reused: ids are the SRS key and every
  // attempt ever logged hangs off them.
  //
  // The contrast it was carrying (l'homme against le hibou) is not lost. It
  // lives in the trap drill, which pairs .012 with .051 directly.
  { id: 'fr.sons.elision.058', kind: 'phrase', level: 'sons', theme: 'elision', fr: "l'hôpital", en: 'the hospital', ipa: '/lo.pi.tal/', respell: 'loh-pee-TAL', full: 'le hôpital', elides: true, trigger: 'le', family: 'blocked', tags: ['h-muet', 'contrast-pair'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'H muet, so it elides. Against le hockey, which does not.' },
  { id: 'fr.sons.elision.059', kind: 'phrase', level: 'sons', theme: 'elision', fr: "l'histoire", en: 'the story', ipa: '/lis.twaʁ/', respell: 'lees-TWAR', full: 'la histoire', elides: true, trigger: 'la', family: 'blocked', tags: ['h-muet', 'contrast-pair'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.elision.060', kind: 'phrase', level: 'sons', theme: 'elision', fr: "l'herbe", en: 'the grass', ipa: '/lɛʁb/', respell: 'LERB', full: "la herbe", elides: true, trigger: 'la', family: 'blocked', tags: ['h-muet', 'contrast-pair'], drills: W, audioRef: null, version: 1, gender: 'f' },

  // ── Sentences: elision is invisible in a word and obvious in a phrase ────
  { id: 'fr.sons.elision.061', kind: 'sentence', level: 'sons', theme: 'elision', fr: "Je m'appelle Marie.", en: 'My name is Marie.', ipa: '/ʒə ma.pɛl ma.ʁi/', respell: 'zhuh ma-pel ma-REE', full: 'Je me appelle Marie.', elides: true, trigger: 'me', family: 'phrase', tags: ['me', 'sentence'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.062', kind: 'sentence', level: 'sons', theme: 'elision', fr: "J'habite à Lyon.", en: 'I live in Lyon.', ipa: '/ʒa.bit a ljɔ̃/', respell: 'zha-beet a LYOHⁿ', full: 'Je habite à Lyon.', elides: true, trigger: 'je', family: 'phrase', tags: ['je', 'h-muet', 'sentence', 'nasal'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.063', kind: 'sentence', level: 'sons', theme: 'elision', fr: "L'addition, s'il vous plaît.", en: 'The bill, please.', ipa: '/la.di.sjɔ̃ sil vu plɛ/', respell: 'la-dee-syohⁿ seel voo PLEH', full: 'La addition, si il vous plaît.', elides: true, trigger: 'la', family: 'phrase', tags: ['la', 'si', 'double-elision', 'sentence', 'cafe'], drills: WD, audioRef: null, version: 1, notes: 'Two elisions, and you have been saying both since your first week.' },
  { id: 'fr.sons.elision.064', kind: 'sentence', level: 'sons', theme: 'elision', fr: "C'est l'heure.", en: 'It is time.', ipa: '/sɛ lœʁ/', respell: 'seh LEUR', full: 'Ce est la heure.', elides: true, trigger: 'ce', family: 'phrase', tags: ['ce', 'la', 'double-elision', 'sentence'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.065', kind: 'sentence', level: 'sons', theme: 'elision', fr: "Je n'ai pas d'argent.", en: 'I have no money.', ipa: '/ʒə ne pa daʁ.ʒɑ̃/', respell: 'zhuh nay pa dar-ZHAHⁿ', full: 'Je ne ai pas de argent.', elides: true, trigger: 'ne', family: 'phrase', tags: ['ne', 'de', 'double-elision', 'sentence', 'nasal'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.066', kind: 'sentence', level: 'sons', theme: 'elision', fr: "L'ami de l'école arrive.", en: 'The friend from school is arriving.', ipa: '/la.mi də le.kɔl a.ʁiv/', respell: 'la-mee duh lay-kol a-REEV', full: 'Le ami de la école arrive.', elides: true, trigger: 'le', family: 'phrase', tags: ['le', 'la', 'double-elision', 'sentence'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.067', kind: 'sentence', level: 'sons', theme: 'elision', fr: "J'aime l'eau froide.", en: 'I like cold water.', ipa: '/ʒɛm lo fʁwad/', respell: 'zhem loh FRWAD', full: 'Je aime la eau froide.', elides: true, trigger: 'je', family: 'phrase', tags: ['je', 'la', 'double-elision', 'sentence'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.068', kind: 'sentence', level: 'sons', theme: 'elision', fr: "Le hibou de la Hollande.", en: 'The owl from Holland.', ipa: '/lə i.bu də la ɔ.lɑ̃d/', respell: 'luh ee-boo duh la o-LAHⁿD', full: 'Le hibou de la Hollande.', elides: false, trigger: null, family: 'phrase', tags: ['h-aspire', 'no-elision', 'sentence', 'nasal'], drills: WD, audioRef: null, version: 1, notes: 'Three chances to elide and not one of them taken. Every H here is aspiré.' },
  { id: 'fr.sons.elision.069', kind: 'sentence', level: 'sons', theme: 'elision', fr: "Qu'est-ce que c'est ?", en: 'What is that?', ipa: '/kɛs kə sɛ/', respell: 'kess kuh SEH', full: 'Que est-ce que ce est ?', elides: true, trigger: 'que', family: 'phrase', tags: ['que', 'ce', 'double-elision', 'sentence'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.070', kind: 'sentence', level: 'sons', theme: 'elision', fr: "L'homme n'aime pas le haricot.", en: 'The man does not like the bean.', ipa: '/lɔm nɛm pa lə a.ʁi.ko/', respell: 'lom nem pa luh a-ree-KOH', full: 'Le homme ne aime pas le haricot.', elides: true, trigger: 'le', family: 'phrase', tags: ['le', 'ne', 'h-muet', 'h-aspire', 'sentence'], drills: WD, audioRef: null, version: 1, notes: 'Both H words in one sentence. One elides, one blocks.' },
  { id: 'fr.sons.elision.071', kind: 'sentence', level: 'sons', theme: 'elision', fr: "Aujourd'hui, j'arrive à l'hôtel.", en: 'Today, I arrive at the hotel.', ipa: '/o.ʒuʁ.dɥi ʒa.ʁiv a lo.tɛl/', respell: 'oh-zhoor-dwee zha-reev a loh-TEL', full: "Aujourd'hui, je arrive à le hôtel.", elides: true, trigger: 'je', family: 'phrase', tags: ['je', 'le', 'double-elision', 'sentence'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.elision.072', kind: 'sentence', level: 'sons', theme: 'elision', fr: "Je ne sais pas si c'est l'heure.", en: 'I do not know if it is time.', ipa: '/ʒə nə sɛ pa si sɛ lœʁ/', respell: 'zhuh nuh seh pa see seh LEUR', full: 'Je ne sais pas si ce est la heure.', elides: true, trigger: 'ce', family: 'phrase', tags: ['ne', 'ce', 'la', 'no-elision', 'sentence'], drills: W, audioRef: null, version: 1, notes: 'ne and si both stay whole here. Only ce and la had a vowel to collide with.' },
];

/** Lookup by id. The lesson body builds every screen through this. */
export const BY_ID: ReadonlyMap<string, ElisionWord> = new Map(ELISION.map((w) => [w.id, w]));

/** Lookup by the French spelling, for authoring convenience only. Never used
 *  at runtime: the lesson stores ids, not spellings. */
export const BY_FR: ReadonlyMap<string, ElisionWord> = new Map(ELISION.map((w) => [w.fr, w]));

/** Every id in this corpus, in sequence order. */
export const ELISION_IDS: string[] = ELISION.map((w) => w.id);

/** The ids of one teaching family, in sequence order. Drives the drill item
 *  pools and the SRS tranche slices so neither restates a word list. */
export const familyIds = (f: ElisionWord['family']): string[] =>
  ELISION.filter((w) => w.family === f).map((w) => w.id);

/** The ids carrying a given tag. Lets a section select a family without
 *  listing ids by hand, which is what keeps the h aspiré set in ONE place. */
export const taggedIds = (tag: string): string[] =>
  ELISION.filter((w) => w.tags?.includes(tag)).map((w) => w.id);

/** The h aspiré set, as a closed list. The lesson teaches these as something
 *  to memorise, so the set has to be enumerable from one place: a section that
 *  hand-listed them would drift from the corpus the moment one is added. */
export const H_ASPIRE_IDS: string[] = ELISION.filter((w) => w.family === 'blocked' && !w.elides).map((w) => w.id);

/** Items already in the shipped corpus that this lesson teaches FROM rather
 *  than teaching. Referenced by id from `practice` and `dictation` sections,
 *  where the job is "you already say this" rather than "here is a new word".
 *
 *  Every one of these was verified present in seed.json before being listed;
 *  the batch script re-checks them against the DATABASE before writing, since
 *  seed.json can run ahead of what is actually published. */
export const REUSED: { id: string; fr: string; why: string }[] = [
  { id: 'fr.a1.ecole.013', fr: "l'école", why: 'met in a1 school vocabulary, now explainable' },
  { id: 'fr.a1.cuisine.010', fr: "l'eau", why: 'met in a1 food vocabulary' },
  { id: 'fr.a1.maison.006', fr: "j'habite", why: 'met in a1 house vocabulary, an h muet elision' },
  { id: 'fr.a1.maison.007', fr: "J'habite dans une maison.", why: 'the sentence the learner already produces' },
  { id: 'fr.sons.alphabet.002', fr: "l'hôtel", why: 'met in sons.01, the canonical h muet' },
  { id: 'fr.sons.alphabet.006', fr: "aujourd'hui", why: 'met in sons.01, a frozen elision' },
  { id: 'fr.a1.cuisine.059', fr: "l'huile", why: 'met in a1 cooking vocabulary' },
  { id: 'fr.a1.ecole.132', fr: "l'histoire", why: 'met in a1 school vocabulary' },
  { id: 'fr.a1.marche.048', fr: "l'orange", why: 'met in a1 market vocabulary' },
  { id: 'fr.a1.animaux.044', fr: 'le hibou', why: 'met in a1 animals, and it is h aspiré' },
  { id: 'fr.a1.animaux.051', fr: 'le hamster', why: 'met in a1 animals, h aspiré' },
  { id: 'fr.a1.animaux.074', fr: 'le hérisson', why: 'met in a1 animals, h aspiré' },
  { id: 'fr.a1.corps.059', fr: 'la hanche', why: 'met in a1 body vocabulary, h aspiré' },
  { id: 'fr.a1.sports-et-loisirs.016', fr: 'le handball', why: 'met in a1 sports, h aspiré loanword' },
];

/** The display quadruple every card shows, assembled from the corpus so that
 *  no screen ever restates a transcription. Brackets and slashes are added
 *  HERE, once, rather than baked into the stored data: the validator checks the
 *  rendered form, and storing them would double them up. */
export function display(id: string): { fr: string; ipa: string; respell: string; en: string; full: string } {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`elision corpus: unknown id "${id}"`);
  return {
    fr: w.fr,
    ipa: w.ipa ?? '',
    respell: w.respell ? `[${w.respell}]` : '',
    en: w.en,
    full: w.full,
  };
}

/** The corpus Item, stripped of the lesson-only fields. What gets written to
 *  content_items: `full`, `elides`, `trigger` and `family` are lesson display
 *  data and live in the lesson's own section bodies, not on the shared row. */
export function toItem(w: ElisionWord): Item {
  const { full: _full, elides: _elides, trigger: _trigger, family: _family, ...item } = w;
  return item;
}
