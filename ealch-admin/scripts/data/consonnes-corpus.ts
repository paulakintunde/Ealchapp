// The sons.04 lexeme corpus: every French unit the consonnes lesson teaches.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for these 160 words. The lesson body
// reads `fr`, `ipa`, `respell`, `en`, `family` and `sounds` FROM HERE and never
// restates them. Same rule as accents-corpus.ts and muettes-corpus.ts, for the
// same reason: before that convention existed, one word's IPA was typed by hand
// in the group drill, the flashcards, the examples, the dictation and the quiz,
// five copies free to drift apart. Change a transcription here and every screen
// that shows the word changes with it.
//
// ── What this corpus is for ────────────────────────────────────────────────
//
// French consonants are not hard because the sounds are exotic. Only two of
// them have no English equivalent at all (/ʁ/ and /ɲ/). They are hard because
// the SPELLING lies to an English reader in five specific, learnable ways:
//
//   1. Digraphs say one thing and mean another. ch is SH, not CH. gn is NY.
//      qu is a bare K with no W in it. th is a plain T. ph is F.
//   2. c and g each have two values, and which one you get is decided by the
//      NEXT LETTER, not by the word. a/o/u keeps them hard; e/i/y turns them
//      soft. The cedilla exists solely to override rule.
//   3. The r is not the English r. It is made at the back, near where you say
//      the k in "back". Nothing about the letter says so.
//   4. Most final consonants are silent, but not all of them, and the ones
//      that survive are close to the set CaReFuL spells out.
//   5. A doubled consonant is ONE sound, never two. English readers lengthen
//      it; French does not.
//
// Every entry below exists to make one of those five points, and `family`
// records which, so a drill pool can select "every gn word" without listing
// ids by hand.
//
// ── Why these are new items and not reuses ─────────────────────────────────
//
// Ten consonnes items already exist (fr.sons.consonnes.001-010) and are left
// exactly as they are. They are NOT reused here, for the reason the accents
// and muettes corpora both recorded:
//
//   WRONG LEXICAL FORM. Every one of the ten is an article+noun phrase ("le
//   chien", "la gare", "le gilet") or a full sentence. This corpus teaches the
//   BARE word, because the thing being taught is the consonant inside the word
//   itself. MissionRich's dictation builds its letter-tile bank from `item.fr`
//   and grades against it, so pointing at "le chien" would demand the learner
//   spell LECHIEN to answer a screen that shows `chien`. The same `item.fr` is
//   the stt.listen() target in the pronunciation rows.
//
// Bare forms that already exist elsewhere in the sons level (chat, café,
// école, garçon, français, leçon, frère, avec, thé, quatre and about forty
// more) are deliberately absent below rather than duplicated. Where the family
// still needed covering, a different word of the same family stands in. See
// the EXCLUSIONS note at the foot of this file.
//
// ── Notation, and where it comes from ──────────────────────────────────────
//
// `respell` follows the house convention already dominant in the corpus, which
// was checked before a single line here was written rather than invented:
// ch → SH, g-soft/j → ZH, gn → NY, r → R, ill/y → Y, qu/c-hard → K,
// c-soft/ç → SS, th → T, ph → F, silent h → nothing at all.
//
// Nasal vowels close with a superscript n (never a plain n or m), the same
// convention muettes-corpus.ts introduced and the density validator's
// nasal-convention rule enforces. Where a French word carries a REAL final
// m or n (pomme, bonne, homme), the respelling keeps the plain letter: that
// consonant genuinely sounds, and hasPlainNasalFor() reads the source spelling
// to tell the two apart. See the MIGRATION DEBT note in muettes-corpus.ts:
// the older bulk of the corpus still uses the plain-n style, and this lesson
// deliberately does not migrate it.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** A corpus entry plus the lesson-facing teaching data the renderer needs.
 *
 *  `family` is the GRAPHEME family: what is written on the page. `sounds` is
 *  the IPA phoneme that spelling produces here. The two are separate fields
 *  because the whole lesson is the gap between them: `c` is one family with
 *  two sounds, `/k/` is one sound with three families (c, qu, k). A drill that
 *  keyed on either alone could not ask both questions.
 *
 *  `focusAt` is the character-index array into `fr` naming every letter that
 *  CARRIES the consonant being taught. It indexes `fr` EXACTLY as written
 *  here, counting characters and not UTF-16 code units, so « chien » counts
 *  c-h-i-e-n and the digraph sits at 0 and 1. It drives the same highlight
 *  machinery the accents card uses: sons.05 lights the letters that change a
 *  vowel, this lesson lights the letters an English reader will misread.
 *
 *  All three are teaching metadata rather than display copy: they drive the
 *  drill pools, the deckTranche slices and the tag families, so a section can
 *  select "every word where c is hard" without listing ids by hand. */
export type ConsonantWord = Omit<Item, 'drills'> & {
  /** Character indices into `fr` that carry the taught consonant. */
  focusAt: number[];
  /** The grapheme family this word is in the corpus to teach. */
  family:
    | 'ch'
    | 'gn'
    | 'g-hard'
    | 'g-soft'
    | 'c-hard'
    | 'c-soft'
    | 'cedille'
    | 'r'
    | 'final-consonant'
    | 'doubled'
    | 'qu'
    | 'th'
    | 'ph'
    | 'h-muet'
    | 'ill'
    | 's-z';
  /** The IPA phoneme the family produces in THIS word. Bare, not slashed:
   *  it is a single phoneme rather than a transcription of the whole word. */
  sounds: string;
  drills: Item['drills'];
};

const W: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const WD: Item['drills'] = ['flashcard', 'voiceflash', 'review', 'dictation'];

/** The lesson's 160 words. Sequence numbers are stable and must not be
 *  renumbered: they are the SRS key and every attempt ever logged hangs off
 *  them. Numbering opens at 011 because 001-010 already ship. Append new words
 *  at the end. */
export const CONSONNES: ConsonantWord[] = [
  // ── CH → /ʃ/: the digraph that is never the English CH ───────────────────
  //
  // The single most reliable rule in the lesson and the first one taught,
  // because it is the one an English reader breaks in every single word. There
  // is no "church" sound in native French vocabulary at all.
  // `chien`, `gare`, `gomme` and `gilet` are NOT authored here. Each already
  // ships as an article phrase (fr.sons.consonnes.001/002/008/005, "le chien"
  // and friends) that sons.04.l1 references by id. Adding the bare form would
  // put the same headword in the same theme twice, which flashhub-coverage's
  // "no theme holds the same word twice under different articles" test bans:
  // the two rows become two cards in one deck and the learner meets the word
  // twice. Retiring the shipped rows instead would break the ids the lesson
  // names, so the bare forms are the ones that give way. See the note above
  // the g-hard block for what the pair-g minimal pair uses in their place.
  { id: 'fr.sons.consonnes.011', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'chocolatier', en: 'chocolate maker', ipa: '/ʃɔ.kɔ.la.tje/', respell: 'sho-ko-la-TYAY', focusAt: [0, 1], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Four syllables, one SH at the front. Not the CH of church.' },
  { id: 'fr.sons.consonnes.012', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'chaud', en: 'hot', ipa: '/ʃo/', respell: 'SHOH', focusAt: [0, 1], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph', 'silent-final'], drills: WD, audioRef: null, version: 1, notes: 'Two letters at the front do one job, and the d at the back does none.' },
  { id: 'fr.sons.consonnes.013', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'chercher', en: 'to look for', ipa: '/ʃɛʁ.ʃe/', respell: 'shehr-SHAY', focusAt: [0, 1, 4, 5], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph', 'r'], drills: W, audioRef: null, version: 1, notes: 'The same digraph twice, with the French r between them. A whole lesson in one verb.' },
  { id: 'fr.sons.consonnes.014', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'dimanche', en: 'Sunday', ipa: '/di.mɑ̃ʃ/', respell: 'dee-MAHⁿSH', focusAt: [5, 6], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.015', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'chaise', en: 'chair', ipa: '/ʃɛz/', respell: 'SHEZ', focusAt: [0, 1], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'English chair and French chaise are the same word. Only the first sound moved.' },
  { id: 'fr.sons.consonnes.016', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'chambre', en: 'bedroom', ipa: '/ʃɑ̃bʁ/', respell: 'SHAHⁿBR', focusAt: [0, 1], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.017', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'cheval', en: 'horse', ipa: '/ʃə.val/', respell: 'shuh-VAL', focusAt: [0, 1], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.018', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'marcher', en: 'to walk', ipa: '/maʁ.ʃe/', respell: 'mar-SHAY', focusAt: [3, 4], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph', 'r'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.019', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'acheter', en: 'to buy', ipa: '/aʃ.te/', respell: 'ash-TAY', focusAt: [1, 2], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.020', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'bouche', en: 'mouth', ipa: '/buʃ/', respell: 'BOOSH', focusAt: [3, 4], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'The word for the thing you are making the sound with.' },
  { id: 'fr.sons.consonnes.021', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'vache', en: 'cow', ipa: '/vaʃ/', respell: 'VASH', focusAt: [1, 2], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.022', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'riche', en: 'rich', ipa: '/ʁiʃ/', respell: 'REESH', focusAt: [2, 3], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph', 'r'], drills: W, audioRef: null, version: 1, notes: 'Same spelling as English rich, and both consonants are different.' },
  { id: 'fr.sons.consonnes.023', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'chanter', en: 'to sing', ipa: '/ʃɑ̃.te/', respell: 'shahⁿ-TAY', focusAt: [0, 1], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph', 'nasal'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.024', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'blanche', en: 'white', ipa: '/blɑ̃ʃ/', respell: 'BLAHⁿSH', focusAt: [5, 6], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph', 'nasal'], drills: W, audioRef: null, version: 1, notes: 'The feminine form. Its masculine blanc ends silent, this one ends in SH.' },
  { id: 'fr.sons.consonnes.025', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'douche', en: 'shower', ipa: '/duʃ/', respell: 'DOOSH', focusAt: [3, 4], family: 'ch', sounds: 'ʃ', tags: ['ch', 'digraph'], drills: W, audioRef: null, version: 1, gender: 'f' },

  // ── GN → /ɲ/: one sound, and it is not two ───────────────────────────────
  //
  // The nearest English has is the ny of canyon, which is itself a borrowed
  // Spanish ñ. The error to kill is reading it as a hard g followed by an n.
  { id: 'fr.sons.consonnes.026', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'montagne', en: 'mountain', ipa: '/mɔ̃.taɲ/', respell: 'mohⁿ-TANY', focusAt: [5, 6], family: 'gn', sounds: 'ɲ', tags: ['gn', 'digraph', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'No g sound anywhere in it. The gn is the ny of canyon.' },
  { id: 'fr.sons.consonnes.027', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'agneau', en: 'lamb', ipa: '/a.ɲo/', respell: 'a-NYOH', focusAt: [1, 2], family: 'gn', sounds: 'ɲ', tags: ['gn', 'digraph'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.028', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'champignon', en: 'mushroom', ipa: '/ʃɑ̃.pi.ɲɔ̃/', respell: 'shahⁿ-pee-NYOHⁿ', focusAt: [7, 8], family: 'gn', sounds: 'ɲ', tags: ['gn', 'ch', 'digraph', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Three of the lesson\'s rules in one word: ch, gn and two nasals.' },
  { id: 'fr.sons.consonnes.029', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'ligne', en: 'line', ipa: '/liɲ/', respell: 'LEENY', focusAt: [2, 3], family: 'gn', sounds: 'ɲ', tags: ['gn', 'digraph'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'What the metro map calls its routes. You will read it before you say it.' },
  { id: 'fr.sons.consonnes.030', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'signe', en: 'sign', ipa: '/siɲ/', respell: 'SEENY', focusAt: [2, 3], family: 'gn', sounds: 'ɲ', tags: ['gn', 'digraph'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.031', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'magnifique', en: 'magnificent', ipa: '/ma.ɲi.fik/', respell: 'ma-nyee-FEEK', focusAt: [2, 3], family: 'gn', sounds: 'ɲ', tags: ['gn', 'digraph', 'qu'], drills: W, audioRef: null, version: 1, notes: 'English says mag-nificent with a real g. French does not.' },
  { id: 'fr.sons.consonnes.032', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'oignon', en: 'onion', ipa: '/ɔ.ɲɔ̃/', respell: 'oh-NYOHⁿ', focusAt: [2, 3], family: 'gn', sounds: 'ɲ', tags: ['gn', 'digraph', 'nasal', 'irregular'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'The i here is not said. It is a spelling left over from old French.' },
  { id: 'fr.sons.consonnes.033', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'espagnol', en: 'Spanish', ipa: '/ɛs.pa.ɲɔl/', respell: 'ehs-pa-NYOL', focusAt: [5, 6], family: 'gn', sounds: 'ɲ', tags: ['gn', 'digraph'], drills: W, audioRef: null, version: 1, notes: 'The gn is doing exactly the job the Spanish ñ does in español.' },
  { id: 'fr.sons.consonnes.034', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'peigne', en: 'comb', ipa: '/pɛɲ/', respell: 'PENY', focusAt: [3, 4], family: 'gn', sounds: 'ɲ', tags: ['gn', 'digraph'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.035', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'araignée', en: 'spider', ipa: '/a.ʁɛ.ɲe/', respell: 'a-reh-NYAY', focusAt: [4, 5], family: 'gn', sounds: 'ɲ', tags: ['gn', 'digraph', 'r'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.036', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'campagne', en: 'countryside', ipa: '/kɑ̃.paɲ/', respell: 'kahⁿ-PANY', focusAt: [5, 6], family: 'gn', sounds: 'ɲ', tags: ['gn', 'digraph', 'nasal', 'c-hard'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.037', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'baigner', en: 'to bathe', ipa: '/be.ɲe/', respell: 'bay-NYAY', focusAt: [3, 4], family: 'gn', sounds: 'ɲ', tags: ['gn', 'digraph'], drills: W, audioRef: null, version: 1 },

  // ── G hard /ɡ/: g before a, o, u and before another consonant ────────────
  //
  // The rule is the next letter, and nothing else. a, o, u keep the g hard;
  // e, i, y turn it soft. The u in gue and gui is a SPACER: it is there only
  // to keep the g hard in front of a letter that would otherwise soften it,
  // and it makes no sound of its own.
  { id: 'fr.sons.consonnes.038', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'gâteau', en: 'cake', ipa: '/ɡɑ.to/', respell: 'gah-TOH', focusAt: [0], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'c-g-rule'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'g before a is hard, whatever accent sits on the a.' },
  { id: 'fr.sons.consonnes.039', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'guitare', en: 'guitar', ipa: '/ɡi.taʁ/', respell: 'ghee-TAR', focusAt: [0, 1], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'c-g-rule', 'silent-u', 'r'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'The u makes no sound. It is there only to stop the g going soft before i.' },
  { id: 'fr.sons.consonnes.040', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'guerre', en: 'war', ipa: '/ɡɛʁ/', respell: 'GEHR', focusAt: [0, 1], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'c-g-rule', 'silent-u', 'doubled', 'r'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'Same silent u as guitare, this time in front of an e.' },
  { id: 'fr.sons.consonnes.041', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'gris', en: 'grey', ipa: '/ɡʁi/', respell: 'GREE', focusAt: [0], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'c-g-rule', 'r-cluster', 'silent-final'], drills: WD, audioRef: null, version: 1, notes: 'g before another consonant is always hard. The s at the end is silent.' },
  { id: 'fr.sons.consonnes.042', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'grand', en: 'big, tall', ipa: '/ɡʁɑ̃/', respell: 'GRAHⁿ', focusAt: [0], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'r-cluster', 'nasal', 'silent-final'], drills: W, audioRef: null, version: 1, notes: 'Nothing after the nasal vowel sounds. No D at the end at all.' },
  { id: 'fr.sons.consonnes.043', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'bagage', en: 'luggage', ipa: '/ba.ɡaʒ/', respell: 'ba-GAZH', focusAt: [2, 4], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'c-g-rule', 'pivot'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Both g letters in one word: hard before a, soft before e.' },
  { id: 'fr.sons.consonnes.044', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'gauche', en: 'left', ipa: '/ɡoʃ/', respell: 'GOHSH', focusAt: [0], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'c-g-rule', 'ch', 'minimal-pair', 'pair-g'], drills: W, audioRef: null, version: 1, notes: 'g before a is hard. Compare girafe, where the same letter is soft.' },
  { id: 'fr.sons.consonnes.045', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'légume', en: 'vegetable', ipa: '/le.ɡym/', respell: 'lay-GÜM', focusAt: [2], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'c-g-rule'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'g before u is hard, and this u is a real vowel rather than a spacer.' },
  { id: 'fr.sons.consonnes.046', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'langue', en: 'tongue, language', ipa: '/lɑ̃ɡ/', respell: 'LAHⁿG', focusAt: [3, 4], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'silent-u', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'The word means both the organ and the thing you are learning.' },
  { id: 'fr.sons.consonnes.047', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'baguette', en: 'baguette', ipa: '/ba.ɡɛt/', respell: 'ba-GET', focusAt: [2, 3], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'silent-u', 'doubled'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'A silent spacer u and a doubled t that is one sound. Two rules in one loaf.' },
  { id: 'fr.sons.consonnes.048', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'grave', en: 'serious', ipa: '/ɡʁav/', respell: 'GRAV', focusAt: [0], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'r-cluster'], drills: W, audioRef: null, version: 1 },

  // ── G soft /ʒ/: g before e, i, y ─────────────────────────────────────────
  //
  // Not the English j of jam. The tongue never touches: it is the middle of
  // pleasure, the s of measure, held on its own.
  { id: 'fr.sons.consonnes.049', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'gyroscope', en: 'gyroscope', ipa: '/ʒi.ʁɔs.kɔp/', respell: 'zhee-ros-KOP', focusAt: [0], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'c-g-rule', 'r'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'g before y is soft, the same as before e and i.' },
  { id: 'fr.sons.consonnes.050', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'girafe', en: 'giraffe', ipa: '/ʒi.ʁaf/', respell: 'zhee-RAF', focusAt: [0], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'c-g-rule', 'r', 'minimal-pair', 'pair-g'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'g before i is soft. Same letter as gauche, completely different sound. English softens it too, but into a J; French keeps the tongue down.' },
  { id: 'fr.sons.consonnes.051', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'genou', en: 'knee', ipa: '/ʒə.nu/', respell: 'zhuh-NOO', focusAt: [0], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'c-g-rule'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.052', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'rouge', en: 'red', ipa: '/ʁuʒ/', respell: 'ROOZH', focusAt: [4], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'c-g-rule', 'r'], drills: WD, audioRef: null, version: 1, notes: 'Opens on the French r and closes on the soft g. Two of the hardest sounds, four letters apart.' },
  { id: 'fr.sons.consonnes.053', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'gens', en: 'people', ipa: '/ʒɑ̃/', respell: 'ZHAHⁿ', focusAt: [0], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'c-g-rule', 'nasal', 'silent-final'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.054', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'plage', en: 'beach', ipa: '/plaʒ/', respell: 'PLAZH', focusAt: [3], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'c-g-rule'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.055', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'orange', en: 'orange', ipa: '/ɔ.ʁɑ̃ʒ/', respell: 'oh-RAHⁿZH', focusAt: [4], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'c-g-rule', 'r', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.056', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'fromage', en: 'cheese', ipa: '/fʁɔ.maʒ/', respell: 'froh-MAZH', focusAt: [5], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'c-g-rule', 'r-cluster'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.057', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'village', en: 'village', ipa: '/vi.laʒ/', respell: 'vee-LAZH', focusAt: [5], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'c-g-rule'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.058', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'neige', en: 'snow', ipa: '/nɛʒ/', respell: 'NEZH', focusAt: [3], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'c-g-rule'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.059', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'nuage', en: 'cloud', ipa: '/nɥaʒ/', respell: 'NWAZH', focusAt: [3], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'c-g-rule'], drills: W, audioRef: null, version: 1, gender: 'm' },

  // ── The g pivot: same letter, both values, side by side ──────────────────
  { id: 'fr.sons.consonnes.060', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'garage', en: 'garage', ipa: '/ɡa.ʁaʒ/', respell: 'ga-RAZH', focusAt: [0, 5], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'g-hard', 'c-g-rule', 'r', 'pivot'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'Both g values in one word. Hard before a, soft before e. The rule is visible on the page.' },
  { id: 'fr.sons.consonnes.061', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'garçon', en: 'boy', ipa: '/ɡaʁ.sɔ̃/', respell: 'gar-SOHⁿ', focusAt: [0, 3], family: 'cedille', sounds: 's', tags: ['cedille', 'g-hard', 'c-g-rule', 'r', 'nasal', 'pivot'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'A hard g and a cedilla in five letters. Without the tail it would end in KOHⁿ.' },

  // ── C hard /k/: c before a, o, u and before another consonant ────────────
  { id: 'fr.sons.consonnes.062', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'cuisine', en: 'kitchen, cooking', ipa: '/kɥi.zin/', respell: 'kwee-ZEEN', focusAt: [0], family: 'c-hard', sounds: 'k', tags: ['c-hard', 'c-g-rule', 's-z'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'c before u is hard. The single s between two vowels says Z.' },
  { id: 'fr.sons.consonnes.063', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'couleur', en: 'colour', ipa: '/ku.lœʁ/', respell: 'koo-LEUR', focusAt: [0], family: 'c-hard', sounds: 'k', tags: ['c-hard', 'c-g-rule', 'r'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.064', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'classe', en: 'class', ipa: '/klas/', respell: 'KLASS', focusAt: [0], family: 'c-hard', sounds: 'k', tags: ['c-hard', 'c-g-rule', 'doubled'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'c before a consonant is hard, and the double s stays a hissing S.' },
  { id: 'fr.sons.consonnes.065', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'cravate', en: 'tie', ipa: '/kʁa.vat/', respell: 'kra-VAT', focusAt: [0], family: 'c-hard', sounds: 'k', tags: ['c-hard', 'c-g-rule', 'r-cluster'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'c before a consonant is hard, and the r cluster takes no vowel to help it.' },
  { id: 'fr.sons.consonnes.066', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'écouter', en: 'to listen', ipa: '/e.ku.te/', respell: 'ay-koo-TAY', focusAt: [1], family: 'c-hard', sounds: 'k', tags: ['c-hard', 'c-g-rule'], drills: W, audioRef: null, version: 1, notes: 'The instruction the app gives you most often.' },
  { id: 'fr.sons.consonnes.067', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'copain', en: 'friend, mate', ipa: '/kɔ.pɛ̃/', respell: 'koh-PEHⁿ', focusAt: [0], family: 'c-hard', sounds: 'k', tags: ['c-hard', 'c-g-rule', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.068', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'cadeau', en: 'gift', ipa: '/ka.do/', respell: 'ka-DOH', focusAt: [0], family: 'c-hard', sounds: 'k', tags: ['c-hard', 'c-g-rule'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.069', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'croire', en: 'to believe', ipa: '/kʁwaʁ/', respell: 'KRWAR', focusAt: [0], family: 'c-hard', sounds: 'k', tags: ['c-hard', 'r-cluster', 'r'], drills: W, audioRef: null, version: 1, notes: 'Two French r sounds in five letters, with the whole word between them.' },
  { id: 'fr.sons.consonnes.070', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'école', en: 'school', ipa: '/e.kɔl/', respell: 'ay-KOL', focusAt: [1], family: 'c-hard', sounds: 'k', tags: ['c-hard', 'c-g-rule', 'duplicate-form'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.071', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'cube', en: 'cube', ipa: '/kyb/', respell: 'KÜB', focusAt: [0], family: 'c-hard', sounds: 'k', tags: ['c-hard', 'c-g-rule'], drills: W, audioRef: null, version: 1, gender: 'm' },

  // ── C soft /s/: c before e, i, y ─────────────────────────────────────────
  { id: 'fr.sons.consonnes.072', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'cerise', en: 'cherry', ipa: '/sə.ʁiz/', respell: 'suh-REEZ', focusAt: [0], family: 'c-soft', sounds: 's', tags: ['c-soft', 'c-g-rule', 'r', 's-z'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'c before e is soft. The s between two vowels is a Z. Neither letter says what it looks like.' },
  { id: 'fr.sons.consonnes.073', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'citron', en: 'lemon', ipa: '/si.tʁɔ̃/', respell: 'see-TROHⁿ', focusAt: [0], family: 'c-soft', sounds: 's', tags: ['c-soft', 'c-g-rule', 'r-cluster', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.074', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'centre', en: 'centre', ipa: '/sɑ̃tʁ/', respell: 'SAHⁿTR', focusAt: [0], family: 'c-soft', sounds: 's', tags: ['c-soft', 'c-g-rule', 'nasal', 'r-cluster'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.075', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'cinq', en: 'five', ipa: '/sɛ̃k/', respell: 'SEHⁿK', focusAt: [0], family: 'c-soft', sounds: 's', tags: ['c-soft', 'c-g-rule', 'nasal', 'sounded-final'], drills: WD, audioRef: null, version: 1, notes: 'A soft c at the front and a genuinely sounded q at the back.' },
  { id: 'fr.sons.consonnes.076', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'ciel', en: 'sky', ipa: '/sjɛl/', respell: 'SYEL', focusAt: [0], family: 'c-soft', sounds: 's', tags: ['c-soft', 'c-g-rule'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.077', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'ceinture', en: 'belt', ipa: '/sɛ̃.tyʁ/', respell: 'sehⁿ-TÜR', focusAt: [0], family: 'c-soft', sounds: 's', tags: ['c-soft', 'c-g-rule', 'nasal', 'r'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.078', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'cygne', en: 'swan', ipa: '/siɲ/', respell: 'SEENY', focusAt: [0], family: 'c-soft', sounds: 's', tags: ['c-soft', 'c-g-rule', 'gn'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'c before y is soft, the same as before e or i. It sounds exactly like signe.' },
  { id: 'fr.sons.consonnes.079', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'cirque', en: 'circus', ipa: '/siʁk/', respell: 'SEERK', focusAt: [0], family: 'c-soft', sounds: 's', tags: ['c-soft', 'c-g-rule', 'qu', 'r'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'A soft c and a hard qu in one short word. Same K sound, two spellings.' },
  { id: 'fr.sons.consonnes.080', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'cinéma', en: 'cinema', ipa: '/si.ne.ma/', respell: 'see-nay-MA', focusAt: [0], family: 'c-soft', sounds: 's', tags: ['c-soft', 'c-g-rule', 'duplicate-form'], drills: W, audioRef: null, version: 1, gender: 'm' },

  // ── The c pivot and the cédille ──────────────────────────────────────────
  //
  // ç is not a new letter and never a new sound. It is a c that has been
  // FORCED soft in front of a, o or u, where it would otherwise be hard. That
  // is why you will never see ç before an e, an i or a y: there would be
  // nothing for it to do.
  { id: 'fr.sons.consonnes.081', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'commencer', en: 'to begin', ipa: '/kɔ.mɑ̃.se/', respell: 'koh-mahⁿ-SAY', focusAt: [0, 6], family: 'c-soft', sounds: 's', tags: ['c-soft', 'c-hard', 'c-g-rule', 'nasal', 'doubled', 'pivot'], drills: W, audioRef: null, version: 1, notes: 'Both c values in one verb. Hard before o, soft before e, and neither is a choice.' },
  { id: 'fr.sons.consonnes.082', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'commençons', en: 'let us begin', ipa: '/kɔ.mɑ̃.sɔ̃/', respell: 'koh-mahⁿ-SOHⁿ', focusAt: [0, 6], family: 'cedille', sounds: 's', tags: ['cedille', 'c-hard', 'c-g-rule', 'nasal', 'doubled', 'pivot'], drills: W, audioRef: null, version: 1, notes: 'The same verb, one ending later. The o would harden the c, so the tail goes on.' },
  { id: 'fr.sons.consonnes.083', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'ça va', en: 'how is it going', ipa: '/sa va/', respell: 'SA VA', focusAt: [0], family: 'cedille', sounds: 's', tags: ['cedille', 'c-g-rule', 'phrase'], drills: W, audioRef: null, version: 1, notes: 'The commonest greeting in the language opens on a cedilla.' },
  { id: 'fr.sons.consonnes.084', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'façon', en: 'way, manner', ipa: '/fa.sɔ̃/', respell: 'fa-SOHⁿ', focusAt: [2], family: 'cedille', sounds: 's', tags: ['cedille', 'c-g-rule', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.085', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'français', en: 'French', ipa: '/fʁɑ̃.sɛ/', respell: 'frahⁿ-SEH', focusAt: [4], family: 'cedille', sounds: 's', tags: ['cedille', 'c-g-rule', 'nasal', 'r-cluster', 'silent-final', 'duplicate-form'], drills: W, audioRef: null, version: 1, notes: 'Without the tail the c before a would be a K, and the language would be frankay.' },
  { id: 'fr.sons.consonnes.086', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'reçu', en: 'receipt', ipa: '/ʁə.sy/', respell: 'ruh-SÜ', focusAt: [2], family: 'cedille', sounds: 's', tags: ['cedille', 'c-g-rule', 'r', 'duplicate-form'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.087', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'maçon', en: 'bricklayer', ipa: '/ma.sɔ̃/', respell: 'ma-SOHⁿ', focusAt: [2], family: 'cedille', sounds: 's', tags: ['cedille', 'c-g-rule', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm' },

  // ── R → /ʁ/: the sound the whole unit is named for ───────────────────────
  //
  // It is made at the BACK of the mouth, in the same place as the k of "back",
  // not at the front where the English r lives. The tongue tip stays down and
  // touches nothing. Start from a gargle, not from an English r.
  //
  // Ordered by position, because position is what changes the difficulty:
  // initial, then medial, then final, then the consonant clusters where an
  // English mouth is most likely to give up and insert a vowel.
  { id: 'fr.sons.consonnes.088', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'radio', en: 'radio', ipa: '/ʁa.djo/', respell: 'ra-DYOH', focusAt: [0], family: 'r', sounds: 'ʁ', tags: ['r', 'r-initial'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'The r opens the word, so there is nowhere to hide it. Start here.' },
  { id: 'fr.sons.consonnes.089', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'rue', en: 'street', ipa: '/ʁy/', respell: 'RÜ', focusAt: [0], family: 'r', sounds: 'ʁ', tags: ['r', 'r-initial'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'Two letters, and both of them are sounds English does not have.' },
  { id: 'fr.sons.consonnes.090', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'riz', en: 'rice', ipa: '/ʁi/', respell: 'REE', focusAt: [0], family: 'r', sounds: 'ʁ', tags: ['r', 'r-initial', 'silent-final'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'The z is silent. What is left is the r and a single vowel.' },
  { id: 'fr.sons.consonnes.091', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'robe', en: 'dress', ipa: '/ʁɔb/', respell: 'ROB', focusAt: [0], family: 'r', sounds: 'ʁ', tags: ['r', 'r-initial'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.092', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'rien', en: 'nothing', ipa: '/ʁjɛ̃/', respell: 'RYEHⁿ', focusAt: [0], family: 'r', sounds: 'ʁ', tags: ['r', 'r-initial', 'nasal'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.093', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'rire', en: 'to laugh', ipa: '/ʁiʁ/', respell: 'REER', focusAt: [0, 3], family: 'r', sounds: 'ʁ', tags: ['r', 'r-initial', 'r-final'], drills: W, audioRef: null, version: 1, notes: 'The r at both ends of four letters. If you can say this, the sound is yours.' },
  { id: 'fr.sons.consonnes.094', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'rond', en: 'round', ipa: '/ʁɔ̃/', respell: 'ROHⁿ', focusAt: [0], family: 'r', sounds: 'ʁ', tags: ['r', 'r-initial', 'nasal', 'silent-final'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.095', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'regarder', en: 'to watch, to look at', ipa: '/ʁə.ɡaʁ.de/', respell: 'ruh-gar-DAY', focusAt: [0, 4], family: 'r', sounds: 'ʁ', tags: ['r', 'r-initial', 'r-medial', 'g-hard'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.096', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'mercredi', en: 'Wednesday', ipa: '/mɛʁ.kʁə.di/', respell: 'mehr-kruh-DEE', focusAt: [3, 6], family: 'r', sounds: 'ʁ', tags: ['r', 'r-medial', 'r-cluster'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'Two r sounds three letters apart, one closing a syllable and one opening one.' },
  { id: 'fr.sons.consonnes.097', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'parler', en: 'to speak', ipa: '/paʁ.le/', respell: 'par-LAY', focusAt: [2], family: 'r', sounds: 'ʁ', tags: ['r', 'r-medial'], drills: W, audioRef: null, version: 1, notes: 'The r closes the first syllable. Do not let it colour the a in front of it.' },
  { id: 'fr.sons.consonnes.098', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'partir', en: 'to leave', ipa: '/paʁ.tiʁ/', respell: 'par-TEER', focusAt: [2, 5], family: 'r', sounds: 'ʁ', tags: ['r', 'r-medial', 'r-final'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.099', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'voiture', en: 'car', ipa: '/vwa.tyʁ/', respell: 'vwa-TÜR', focusAt: [6], family: 'r', sounds: 'ʁ', tags: ['r', 'r-final'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.100', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'bonjour', en: 'hello', ipa: '/bɔ̃.ʒuʁ/', respell: 'bohⁿ-ZHOOR', focusAt: [6], family: 'r', sounds: 'ʁ', tags: ['r', 'r-final', 'g-soft', 'nasal', 'sounded-final'], drills: WD, audioRef: null, version: 1, notes: 'A final r that really does sound. It is in CaReFuL, and so are most of them.' },
  { id: 'fr.sons.consonnes.101', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'toujours', en: 'always', ipa: '/tu.ʒuʁ/', respell: 'too-ZHOOR', focusAt: [6], family: 'r', sounds: 'ʁ', tags: ['r', 'r-final', 'g-soft', 'silent-final'], drills: W, audioRef: null, version: 1, notes: 'The r sounds and the s after it does not.' },
  { id: 'fr.sons.consonnes.102', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'jour', en: 'day', ipa: '/ʒuʁ/', respell: 'ZHOOR', focusAt: [3], family: 'r', sounds: 'ʁ', tags: ['r', 'r-final', 'g-soft', 'sounded-final'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.103', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'pour', en: 'for', ipa: '/puʁ/', respell: 'POOR', focusAt: [3], family: 'r', sounds: 'ʁ', tags: ['r', 'r-final', 'sounded-final'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.104', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'soeur', en: 'sister', ipa: '/sœʁ/', respell: 'SEUR', focusAt: [4], family: 'r', sounds: 'ʁ', tags: ['r', 'r-final', 'sounded-final'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.105', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'peur', en: 'fear', ipa: '/pœʁ/', respell: 'PEUR', focusAt: [3], family: 'r', sounds: 'ʁ', tags: ['r', 'r-final', 'sounded-final'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.106', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'train', en: 'train', ipa: '/tʁɛ̃/', respell: 'TREHⁿ', focusAt: [1], family: 'r', sounds: 'ʁ', tags: ['r', 'r-cluster', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'No vowel between the t and the r. Do not say tuh-rain.' },
  { id: 'fr.sons.consonnes.107', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'prendre', en: 'to take', ipa: '/pʁɑ̃dʁ/', respell: 'PRAHⁿDR', focusAt: [1, 5], family: 'r', sounds: 'ʁ', tags: ['r', 'r-cluster', 'nasal'], drills: W, audioRef: null, version: 1, notes: 'Two clusters and a nasal, and not one extra vowel anywhere.' },
  { id: 'fr.sons.consonnes.108', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'livre', en: 'book', ipa: '/livʁ/', respell: 'LEEVR', focusAt: [3], family: 'r', sounds: 'ʁ', tags: ['r', 'r-cluster'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'The word ends on two consonants with nothing after them. English wants to add an uh.' },
  { id: 'fr.sons.consonnes.109', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'arbre', en: 'tree', ipa: '/aʁbʁ/', respell: 'ARBR', focusAt: [1, 3], family: 'r', sounds: 'ʁ', tags: ['r', 'r-cluster', 'r-medial'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Five letters, one vowel, two r sounds. The hardest short word in the lesson.' },
  { id: 'fr.sons.consonnes.110', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'écrire', en: 'to write', ipa: '/e.kʁiʁ/', respell: 'ay-KREER', focusAt: [2, 5], family: 'r', sounds: 'ʁ', tags: ['r', 'r-cluster', 'r-final', 'c-hard'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.111', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'brun', en: 'brown', ipa: '/bʁœ̃/', respell: 'BRUHⁿ', focusAt: [1], family: 'r', sounds: 'ʁ', tags: ['r', 'r-cluster', 'nasal'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.112', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'vendredi', en: 'Friday', ipa: '/vɑ̃.dʁə.di/', respell: 'vahⁿ-druh-DEE', focusAt: [5], family: 'r', sounds: 'ʁ', tags: ['r', 'r-cluster', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm' },

  // ── Final consonants: CaReFuL, and everything it leaves out ──────────────
  //
  // Most written final consonants are silent. The ones that usually survive
  // are C, R, F and L, which spell CaReFuL. It is a rule of thumb rather than
  // a law: it does not cover the exceptions in either direction, and the words
  // below include both kinds so the learner meets the limit at the same time
  // as the rule.
  { id: 'fr.sons.consonnes.113', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'lac', en: 'lake', ipa: '/lak/', respell: 'LAK', focusAt: [2], family: 'final-consonant', sounds: 'k', tags: ['final-consonant', 'sounded-final', 'careful-c'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'The C of CaReFuL. It sounds.' },
  { id: 'fr.sons.consonnes.114', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'parc', en: 'park', ipa: '/paʁk/', respell: 'PARK', focusAt: [3], family: 'final-consonant', sounds: 'k', tags: ['final-consonant', 'sounded-final', 'careful-c', 'r'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.115', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'bonsoir', en: 'good evening', ipa: '/bɔ̃.swaʁ/', respell: 'bohⁿ-SWAR', focusAt: [6], family: 'final-consonant', sounds: 'ʁ', tags: ['final-consonant', 'sounded-final', 'careful-r', 'nasal'], drills: WD, audioRef: null, version: 1, notes: 'The R of CaReFuL, and the second thing you will say to anyone after dark.' },
  { id: 'fr.sons.consonnes.116', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'neuf', en: 'nine, new', ipa: '/nœf/', respell: 'NEUF', focusAt: [3], family: 'final-consonant', sounds: 'f', tags: ['final-consonant', 'sounded-final', 'careful-f'], drills: W, audioRef: null, version: 1, notes: 'The F of CaReFuL. Also two words at once: the number and the adjective.' },
  { id: 'fr.sons.consonnes.117', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'actif', en: 'active', ipa: '/ak.tif/', respell: 'ak-TEEF', focusAt: [4], family: 'final-consonant', sounds: 'f', tags: ['final-consonant', 'sounded-final', 'careful-f', 'c-hard'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.118', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'animal', en: 'animal', ipa: '/a.ni.mal/', respell: 'a-nee-MAL', focusAt: [5], family: 'final-consonant', sounds: 'l', tags: ['final-consonant', 'sounded-final', 'careful-l'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'The L of CaReFuL.' },
  { id: 'fr.sons.consonnes.119', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'hôtel', en: 'hotel', ipa: '/o.tɛl/', respell: 'oh-TEL', focusAt: [4], family: 'final-consonant', sounds: 'l', tags: ['final-consonant', 'sounded-final', 'careful-l', 'h-muet', 'duplicate-form'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Silent h at the front, sounded l at the back. Both ends break an English expectation.' },
  { id: 'fr.sons.consonnes.120', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'bonheur', en: 'happiness', ipa: '/bɔ.nœʁ/', respell: 'boh-NEUR', focusAt: [7], family: 'final-consonant', sounds: 'ʁ', tags: ['final-consonant', 'sounded-final', 'careful-r', 'h-muet'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'The h in the middle is silent too, so the n slides straight onto the eu.' },
  { id: 'fr.sons.consonnes.121', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'salut', en: 'hi', ipa: '/sa.ly/', respell: 'sa-LÜ', focusAt: [4], family: 'final-consonant', sounds: '', tags: ['final-consonant', 'silent-final'], drills: WD, audioRef: null, version: 1, notes: 'T is not in CaReFuL, so it says nothing. The word ends on the vowel.' },
  { id: 'fr.sons.consonnes.122', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'tard', en: 'late', ipa: '/taʁ/', respell: 'TAR', focusAt: [3], family: 'final-consonant', sounds: '', tags: ['final-consonant', 'silent-final', 'r'], drills: W, audioRef: null, version: 1, notes: 'The r sounds and the d after it does not. Only the LAST letter is silent.' },
  { id: 'fr.sons.consonnes.123', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'nez', en: 'nose', ipa: '/ne/', respell: 'NAY', focusAt: [2], family: 'final-consonant', sounds: '', tags: ['final-consonant', 'silent-final'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'Three letters, two sounds. The z is written and never said.' },
  { id: 'fr.sons.consonnes.124', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'nuit', en: 'night', ipa: '/nɥi/', respell: 'NWEE', focusAt: [3], family: 'final-consonant', sounds: '', tags: ['final-consonant', 'silent-final'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.125', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'temps', en: 'time, weather', ipa: '/tɑ̃/', respell: 'TAHⁿ', focusAt: [3, 4], family: 'final-consonant', sounds: '', tags: ['final-consonant', 'silent-final', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Two written consonants at the end and neither is said. The word is one syllable.' },
  { id: 'fr.sons.consonnes.126', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'nord', en: 'north', ipa: '/nɔʁ/', respell: 'NOR', focusAt: [3], family: 'final-consonant', sounds: '', tags: ['final-consonant', 'silent-final', 'r'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.127', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'vert', en: 'green', ipa: '/vɛʁ/', respell: 'VEHR', focusAt: [3], family: 'final-consonant', sounds: '', tags: ['final-consonant', 'silent-final', 'r'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.128', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'sport', en: 'sport', ipa: '/spɔʁ/', respell: 'SPOR', focusAt: [4], family: 'final-consonant', sounds: '', tags: ['final-consonant', 'silent-final', 'r'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Spelled like the English word and missing its last sound.' },
  { id: 'fr.sons.consonnes.129', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'bus', en: 'bus', ipa: '/bys/', respell: 'BÜSS', focusAt: [2], family: 'final-consonant', sounds: 's', tags: ['final-consonant', 'sounded-final', 'exception'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'An exception in the other direction: s is not in CaReFuL and this one sounds anyway.' },
  { id: 'fr.sons.consonnes.130', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'sud', en: 'south', ipa: '/syd/', respell: 'SÜD', focusAt: [2], family: 'final-consonant', sounds: 'd', tags: ['final-consonant', 'sounded-final', 'exception'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'A sounded d, which the rule does not predict. Compare nord, where it is silent.' },
  { id: 'fr.sons.consonnes.131', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'blanc', en: 'white', ipa: '/blɑ̃/', respell: 'BLAHⁿ', focusAt: [4], family: 'final-consonant', sounds: '', tags: ['final-consonant', 'silent-final', 'nasal', 'exception'], drills: W, audioRef: null, version: 1, notes: 'A silent final c, which CaReFuL gets wrong. The n before it made a nasal vowel and swallowed it.' },
  { id: 'fr.sons.consonnes.132', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'chef', en: 'chief, chef', ipa: '/ʃɛf/', respell: 'SHEF', focusAt: [3], family: 'final-consonant', sounds: 'f', tags: ['final-consonant', 'sounded-final', 'careful-f', 'ch', 'duplicate-form'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'SH at the front, F at the back. English borrowed it and kept both.' },

  // ── Doubled consonants: two letters, one sound ───────────────────────────
  //
  // Never held longer, never said twice. The doubling is a signal about the
  // VOWEL in front of it more often than about the consonant itself.
  { id: 'fr.sons.consonnes.133', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'elle', en: 'she', ipa: '/ɛl/', respell: 'EL', focusAt: [1, 2], family: 'doubled', sounds: 'l', tags: ['doubled'], drills: WD, audioRef: null, version: 1, notes: 'One L, said once. The doubling keeps the e open rather than lengthening anything.' },
  { id: 'fr.sons.consonnes.134', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'pomme', en: 'apple', ipa: '/pɔm/', respell: 'POM', focusAt: [2, 3], family: 'doubled', sounds: 'm', tags: ['doubled'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'The double m is a real M, and it stops the o becoming a nasal. Compare pont.' },
  { id: 'fr.sons.consonnes.135', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'bonne', en: 'good', ipa: '/bɔn/', respell: 'BON', focusAt: [3, 4], family: 'doubled', sounds: 'n', tags: ['doubled', 'minimal-pair', 'pair-bon'], drills: WD, audioRef: null, version: 1, notes: 'The double n sounds, so the o stays a plain vowel. Its masculine bon is nasal.' },
  { id: 'fr.sons.consonnes.136', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'bon', en: 'good', ipa: '/bɔ̃/', respell: 'BOHⁿ', focusAt: [2], family: 'doubled', sounds: '', tags: ['minimal-pair', 'pair-bon', 'nasal'], drills: WD, audioRef: null, version: 1, notes: 'One n, and it makes a nasal vowel instead of a sound of its own. Doubling it would change that.' },
  { id: 'fr.sons.consonnes.137', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'terre', en: 'earth, land', ipa: '/tɛʁ/', respell: 'TEHR', focusAt: [2, 3], family: 'doubled', sounds: 'ʁ', tags: ['doubled', 'r'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'Two r on the page, one gargle in the mouth.' },
  { id: 'fr.sons.consonnes.138', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'belle', en: 'beautiful', ipa: '/bɛl/', respell: 'BEL', focusAt: [2, 3], family: 'doubled', sounds: 'l', tags: ['doubled'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.139', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'ville', en: 'town, city', ipa: '/vil/', respell: 'VEEL', focusAt: [2, 3], family: 'doubled', sounds: 'l', tags: ['doubled', 'exception', 'minimal-pair', 'pair-ille'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'An exception to the ill rule below: here it is a plain L, not a Y.' },
  { id: 'fr.sons.consonnes.140', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'donner', en: 'to give', ipa: '/dɔ.ne/', respell: 'doh-NAY', focusAt: [2, 3], family: 'doubled', sounds: 'n', tags: ['doubled'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.141', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'année', en: 'year', ipa: '/a.ne/', respell: 'a-NAY', focusAt: [1, 2], family: 'doubled', sounds: 'n', tags: ['doubled'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.142', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'appeler', en: 'to call', ipa: '/a.ple/', respell: 'a-PLAY', focusAt: [1, 2], family: 'doubled', sounds: 'p', tags: ['doubled'], drills: W, audioRef: null, version: 1, notes: 'Two p, one sound, and the e between them disappears entirely.' },
  { id: 'fr.sons.consonnes.143', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'aller', en: 'to go', ipa: '/a.le/', respell: 'a-LAY', focusAt: [1, 2], family: 'doubled', sounds: 'l', tags: ['doubled'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.144', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'nourriture', en: 'food', ipa: '/nu.ʁi.tyʁ/', respell: 'noo-ree-TÜR', focusAt: [4, 5], family: 'doubled', sounds: 'ʁ', tags: ['doubled', 'r', 'r-final'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.145', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'addition', en: 'bill, addition', ipa: '/a.di.sjɔ̃/', respell: 'a-dee-SYOHⁿ', focusAt: [1, 2], family: 'doubled', sounds: 'd', tags: ['doubled', 'nasal', 'ti-s'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'What you ask for at the end of a meal. The tion is said SYOHⁿ, never SHUN.' },
  { id: 'fr.sons.consonnes.146', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'attendre', en: 'to wait', ipa: '/a.tɑ̃dʁ/', respell: 'a-TAHⁿDR', focusAt: [1, 2], family: 'doubled', sounds: 't', tags: ['doubled', 'nasal', 'r-cluster'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.147', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'dessert', en: 'dessert', ipa: '/de.sɛʁ/', respell: 'day-SEHR', focusAt: [2, 3], family: 'doubled', sounds: 's', tags: ['doubled', 's-z', 'minimal-pair', 'pair-desert', 'r'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'A double s is a hissing S. A single one between vowels would be a Z.' },
  { id: 'fr.sons.consonnes.148', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'désert', en: 'desert', ipa: '/de.zɛʁ/', respell: 'day-ZEHR', focusAt: [3], family: 's-z', sounds: 'z', tags: ['s-z', 'minimal-pair', 'pair-desert', 'r'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'One s between two vowels, and it says Z. The doubling in dessert is the whole difference.' },
  { id: 'fr.sons.consonnes.149', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'poisson', en: 'fish', ipa: '/pwa.sɔ̃/', respell: 'pwa-SOHⁿ', focusAt: [4, 5], family: 's-z', sounds: 's', tags: ['s-z', 'doubled', 'minimal-pair', 'pair-poison', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'Double s, hissing S. Say it single and you have ordered poison.' },
  { id: 'fr.sons.consonnes.150', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'poison', en: 'poison', ipa: '/pwa.zɔ̃/', respell: 'pwa-ZOHⁿ', focusAt: [4], family: 's-z', sounds: 'z', tags: ['s-z', 'minimal-pair', 'pair-poison', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'One letter apart from poisson, and the difference is worth getting right in a restaurant.' },

  // ── QU → /k/, TH → /t/, PH → /f/, H → nothing ───────────────────────────
  //
  // Four spellings that all mislead an English reader in the same way: the
  // second letter of the pair is not doing what English trained you to expect.
  { id: 'fr.sons.consonnes.151', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'quand', en: 'when', ipa: '/kɑ̃/', respell: 'KAHⁿ', focusAt: [0, 1], family: 'qu', sounds: 'k', tags: ['qu', 'digraph', 'nasal', 'silent-final'], drills: WD, audioRef: null, version: 1, notes: 'No W anywhere in it. qu is a bare K, and the d is silent.' },
  { id: 'fr.sons.consonnes.152', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'quel', en: 'which', ipa: '/kɛl/', respell: 'KEL', focusAt: [0, 1], family: 'qu', sounds: 'k', tags: ['qu', 'digraph'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.153', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'quitter', en: 'to leave', ipa: '/ki.te/', respell: 'kee-TAY', focusAt: [0, 1], family: 'qu', sounds: 'k', tags: ['qu', 'digraph', 'doubled'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.154', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'quelque', en: 'some', ipa: '/kɛlk/', respell: 'KELK', focusAt: [0, 1, 4, 5], family: 'qu', sounds: 'k', tags: ['qu', 'digraph'], drills: W, audioRef: null, version: 1, notes: 'The digraph twice in six letters, and both times a plain K.' },
  { id: 'fr.sons.consonnes.155', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'musique', en: 'music', ipa: '/my.zik/', respell: 'mü-ZEEK', focusAt: [4, 5], family: 'qu', sounds: 'k', tags: ['qu', 'digraph', 's-z'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.156', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'banque', en: 'bank', ipa: '/bɑ̃k/', respell: 'BAHⁿK', focusAt: [3, 4], family: 'qu', sounds: 'k', tags: ['qu', 'digraph', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.157', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'théâtre', en: 'theatre', ipa: '/te.ɑtʁ/', respell: 'tay-ATR', focusAt: [1, 2], family: 'th', sounds: 't', tags: ['th', 'digraph', 'r-cluster'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'A plain T. French has no th sound of any kind, voiced or not.' },
  { id: 'fr.sons.consonnes.158', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'mathématiques', en: 'mathematics', ipa: '/ma.te.ma.tik/', respell: 'ma-tay-ma-TEEK', focusAt: [2, 3], family: 'th', sounds: 't', tags: ['th', 'digraph', 'qu'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.159', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'bibliothèque', en: 'library', ipa: '/bi.bli.jɔ.tɛk/', respell: 'bee-blee-yoh-TEK', focusAt: [7, 8], family: 'th', sounds: 't', tags: ['th', 'digraph', 'qu'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'A silent-h T and a W-less qu in one long word.' },
  { id: 'fr.sons.consonnes.160', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'sympathique', en: 'nice, likeable', ipa: '/sɛ̃.pa.tik/', respell: 'sehⁿ-pa-TEEK', focusAt: [5, 6], family: 'th', sounds: 't', tags: ['th', 'digraph', 'qu', 'nasal'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.161', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'photo', en: 'photo', ipa: '/fɔ.to/', respell: 'foh-TOH', focusAt: [1, 2], family: 'ph', sounds: 'f', tags: ['ph', 'digraph'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'ph is F, exactly as in English. One digraph that does not surprise you.' },
  { id: 'fr.sons.consonnes.162', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'pharmacie', en: 'pharmacy, chemist', ipa: '/faʁ.ma.si/', respell: 'far-ma-SEE', focusAt: [1, 2], family: 'ph', sounds: 'f', tags: ['ph', 'digraph', 'r', 'c-soft'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'The green cross you look for when something hurts.' },
  { id: 'fr.sons.consonnes.163', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'téléphone', en: 'telephone', ipa: '/te.le.fɔn/', respell: 'tay-lay-FON', focusAt: [5, 6], family: 'ph', sounds: 'f', tags: ['ph', 'digraph'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.consonnes.164', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'photographie', en: 'photography', ipa: '/fɔ.tɔ.ɡʁa.fi/', respell: 'foh-toh-gra-FEE', focusAt: [1, 2, 8, 9], family: 'ph', sounds: 'f', tags: ['ph', 'digraph', 'g-hard', 'r-cluster'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'The digraph twice, and a hard g between them.' },
  { id: 'fr.sons.consonnes.165', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'huit', en: 'eight', ipa: '/ɥit/', respell: 'WEET', focusAt: [0], family: 'h-muet', sounds: '', tags: ['h-muet', 'sounded-final', 'duplicate-form'], drills: W, audioRef: null, version: 1, notes: 'The h says nothing and the t at the end says something. Both are backwards from English.' },
  { id: 'fr.sons.consonnes.166', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'habiter', en: 'to live somewhere', ipa: '/a.bi.te/', respell: 'a-bee-TAY', focusAt: [0], family: 'h-muet', sounds: '', tags: ['h-muet'], drills: WD, audioRef: null, version: 1, notes: 'Start on the a. There is no breath at the front of a French word, ever.' },
  { id: 'fr.sons.consonnes.167', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'hiver', en: 'winter', ipa: '/i.vɛʁ/', respell: 'ee-VEHR', focusAt: [0], family: 'h-muet', sounds: '', tags: ['h-muet', 'r', 'sounded-final', 'careful-r', 'duplicate-form'], drills: W, audioRef: null, version: 1, gender: 'm' },

  // ── ILL and Y → /j/: the glide ───────────────────────────────────────────
  { id: 'fr.sons.consonnes.168', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'fille', en: 'girl, daughter', ipa: '/fij/', respell: 'FEEY', focusAt: [1, 2, 3], family: 'ill', sounds: 'j', tags: ['ill', 'glide', 'minimal-pair', 'pair-ille'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'The ill is a Y, not an L. Compare ville, where the same three letters are an L.' },
  { id: 'fr.sons.consonnes.169', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'travailler', en: 'to work', ipa: '/tʁa.va.je/', respell: 'tra-va-YAY', focusAt: [6, 7, 8], family: 'ill', sounds: 'j', tags: ['ill', 'glide', 'r-cluster', 'doubled'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.170', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'soleil', en: 'sun', ipa: '/sɔ.lɛj/', respell: 'soh-LAY', focusAt: [5], family: 'ill', sounds: 'j', tags: ['ill', 'glide'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'A final il is the same glide, with no second l needed.' },
  { id: 'fr.sons.consonnes.171', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'famille', en: 'family', ipa: '/fa.mij/', respell: 'fa-MEEY', focusAt: [3, 4, 5], family: 'ill', sounds: 'j', tags: ['ill', 'glide'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.172', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'oreille', en: 'ear', ipa: '/ɔ.ʁɛj/', respell: 'oh-RAY', focusAt: [4, 5, 6], family: 'ill', sounds: 'j', tags: ['ill', 'glide', 'r'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.consonnes.173', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'billet', en: 'ticket', ipa: '/bi.jɛ/', respell: 'bee-YEH', focusAt: [2, 3, 4], family: 'ill', sounds: 'j', tags: ['ill', 'glide', 'silent-final'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'What the machine sells you before the train. The t at the end is silent.' },
  { id: 'fr.sons.consonnes.174', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'yeux', en: 'eyes', ipa: '/jø/', respell: 'YEU', focusAt: [0], family: 'ill', sounds: 'j', tags: ['ill', 'glide', 'y-initial'], drills: W, audioRef: null, version: 1, notes: 'A y at the front is the same glide the ill makes in the middle.' },
  { id: 'fr.sons.consonnes.175', kind: 'word', level: 'sons', theme: 'consonnes', fr: 'crayon', en: 'pencil', ipa: '/kʁɛ.jɔ̃/', respell: 'kreh-YOHⁿ', focusAt: [3], family: 'ill', sounds: 'j', tags: ['ill', 'glide', 'r-cluster', 'nasal', 'c-hard'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'The y between two vowels does the work of two: it closes one and opens the next.' },

  // ── Phrases and sentences: the rules in running speech ───────────────────
  //
  // Placed last because every one of them is a recombination of words already
  // taught above. Stress is phrasal, so the respelling capitalises the last
  // full syllable of each rhythmic group and nothing else.
  { id: 'fr.sons.consonnes.176', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'un chien blanc', en: 'a white dog', ipa: '/œ̃ ʃjɛ̃ blɑ̃/', respell: 'UHⁿ SHYEHⁿ BLAHⁿ', focusAt: [3, 4], family: 'ch', sounds: 'ʃ', tags: ['ch', 'phrase', 'nasal', 'final-consonant'], drills: W, audioRef: null, version: 1, notes: 'Three nasals in three words, and a silent c at the very end.' },
  { id: 'fr.sons.consonnes.177', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'la gare Saint-Lazare', en: 'Saint-Lazare station', ipa: '/la ɡaʁ sɛ̃.la.zaʁ/', respell: 'la GAR sehⁿ-la-ZAR', focusAt: [3], family: 'r', sounds: 'ʁ', tags: ['r', 'r-final', 'g-hard', 'phrase', 'nasal'], drills: W, audioRef: null, version: 1, notes: 'Three French r sounds in four words. A real Paris terminus, and a real workout.' },
  { id: 'fr.sons.consonnes.178', kind: 'phrase', level: 'sons', theme: 'consonnes', fr: 'du fromage et du pain', en: 'some cheese and some bread', ipa: '/dy fʁɔ.maʒ e dy pɛ̃/', respell: 'dü froh-MAZH ay dü PEHⁿ', focusAt: [8], family: 'g-soft', sounds: 'ʒ', tags: ['g-soft', 'phrase', 'r-cluster', 'nasal'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.consonnes.179', kind: 'sentence', level: 'sons', theme: 'consonnes', fr: 'Le garçon cherche la guitare rouge.', en: 'The boy is looking for the red guitar.', ipa: '/lə ɡaʁ.sɔ̃ ʃɛʁʃ la ɡi.taʁ ʁuʒ/', respell: 'luh gar-SOHⁿ SHEHRSH la ghee-TAR ROOZH', focusAt: [3, 21], family: 'g-hard', sounds: 'ɡ', tags: ['g-hard', 'g-soft', 'cedille', 'ch', 'r', 'sentence'], drills: ['sentence', 'review'], audioRef: null, version: 1, notes: 'A hard g, a cedilla, the ch digraph and four r sounds in one line.' },
  { id: 'fr.sons.consonnes.180', kind: 'sentence', level: 'sons', theme: 'consonnes', fr: 'Ma fille travaille à la pharmacie.', en: 'My daughter works at the pharmacy.', ipa: '/ma fij tʁa.vaj a la faʁ.ma.si/', respell: 'ma FEEY tra-VAY a la far-ma-SEE', focusAt: [3, 4, 5, 6], family: 'ill', sounds: 'j', tags: ['ill', 'glide', 'ph', 'r', 'sentence'], drills: ['sentence', 'review'], audioRef: null, version: 1, notes: 'Two ill glides and a ph, with the French r closing the sentence.' },
];

/** Fast lookup by id. The lesson goes through this rather than scanning. */
export const BY_ID = new Map<string, ConsonantWord>(CONSONNES.map((w) => [w.id, w]));

/** Every id in this corpus, in authored order. */
export const CONSONNES_IDS: string[] = CONSONNES.map((w) => w.id);

/** The ids of one grapheme family, in authored order. Sections select a family
 *  through this rather than listing ids by hand, so adding a word to a family
 *  above adds it to every drill that teaches that family. */
export function familyIds(family: ConsonantWord['family']): string[] {
  return CONSONNES.filter((w) => w.family === family).map((w) => w.id);
}

/** The ids of every word producing one PHONEME, whatever it is spelled with.
 *  The inverse handle to familyIds: /k/ is written c, qu and k, and a drill
 *  that asks "which of these say K" needs the sound, not the spelling. */
export function soundIds(sound: string): string[] {
  return CONSONNES.filter((w) => w.sounds === sound).map((w) => w.id);
}

/** The ids carrying a given tag. The handle a section uses when the family it
 *  wants cuts across graphemes, e.g. every minimal pair or every nasal. */
export function tagIds(tag: string): string[] {
  return CONSONNES.filter((w) => w.tags.includes(tag)).map((w) => w.id);
}

/** The two halves of a minimal pair, by its `pair-*` tag, in authored order.
 *  Returns exactly the words tagged with that pair so a drill never has to
 *  restate either spelling. */
export function pairIds(pairTag: string): string[] {
  return tagIds(pairTag);
}

/** A corpus row as a plain `Item`, which is what the database and the schema
 *  validator take. Strips the lesson-facing teaching metadata: `focusAt`,
 *  `family` and `sounds` drive the lesson's own rendering and pools, and there
 *  is no column for them. */
export function toItem(w: ConsonantWord): import('../../../ealch-v2/src/content/schema.ts').Item {
  const { focusAt: _focusAt, family: _family, sounds: _sounds, ...item } = w as ConsonantWord & Record<string, unknown>;
  return item as import('../../../ealch-v2/src/content/schema.ts').Item;
}

// ── EXCLUSIONS: words deliberately not authored here ───────────────────────
//
// DUPLICATE BARE FORMS. Words already carried as a bare `fr` elsewhere in the
// sons level were mostly dropped rather than defined twice: chat, gâteau,
// goût, manger, café, carte, ceci, ce, merci, ça, déçu, mer, frère, trois,
// très, quatre, sac, avec, petit, qui, quinze, thé, éléphant, heure, homme,
// histoire, fils, sept, vingt, tous, plus, os, cher, longue and gagner. Where
// a family still needed a word, a different one of the same family stands in:
// chaise for chat, cadeau for gâteau, quel for quatre, hôtel for heure,
// cravate for carte.
//
// TWENTY-TWO forms above DO repeat a bare `fr` from another theme: blanche,
// grand, garçon, école, cinq, cinéma, français, reçu, parler, brun, parc,
// neuf, actif, hôtel, nez, temps, blanc, chef, bonne, bon, huit and hiver.
// That is deliberate and it is not a collision. Each lives in muettes,
// nasales, accents or nombres, never in consonnes; ids are disjoint; and the
// same word genuinely belongs to two units, because `temps` is a silent-letter
// word AND a nasal AND the clearest double-silent ending in the lesson. The
// transcriptions here were checked against those rows and match them
// character for character wherever the existing row carries one, which is the
// point of checking: a learner meeting `chef` in sons.06 and again here must
// read the identical respelling on both screens. The one older row that
// disagrees is nombres/004 `cinq`, respelled SANK under the pre-superscript
// house style. This file uses SEHⁿK. That is the documented MIGRATION DEBT,
// not a contradiction to resolve here.
//
// SOUNDS OUTSIDE THE UNIT. No x words (six, dix, deux), because x is four
// different sounds in French and belongs with the numbers unit that already
// teaches it. No -tion words beyond `addition`, because that ending is a
// vowel problem more than a consonant one. No h aspiré (le héros, la honte):
// it is a LIAISON rule, and sons.03 owns liaison.
//
// WORDS THE AUTHOR COULD NOT VERIFY. Regional and low-frequency items whose
// standard Parisian transcription is genuinely contested were left out rather
// than guessed: août, gageure, oignon's plural, and the several -ille words
// that split between /il/ and /ij/ by region (bacille, tranquille). `ville`
// and `fille` are in because their split is the textbook example and both
// readings are settled.
