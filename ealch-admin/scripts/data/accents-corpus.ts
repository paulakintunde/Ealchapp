// The sons.05 lexeme corpus — every French unit sons.05.l1 teaches.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for these 62 words. The lesson body
// (accents-lesson.ts) reads `fr`, `ipa`, `respell`, `en` and `mark` FROM HERE
// and never restates them. Same rule as muettes-corpus.ts, for the same reason:
// before that convention existed, one word's IPA was typed by hand in the
// group drill, the flashcards, the examples, the dictation and the quiz, five
// copies free to drift apart. Change a transcription here and every screen
// that shows the word changes with it.
//
// ── Why these are new items and not reuses ─────────────────────────────────
//
// The corpus already holds 1,961 items containing an é, and a handful of them
// are these very words (fr.a1.cafe.009 "un café", fr.a1.maison.022 "la clé").
// They are deliberately NOT reused, for the same three reasons the muettes
// corpus recorded, found by inspection rather than assumed:
//
//   1. WRONG LEXICAL FORM. The corpus carries article+noun phrases ("un café",
//      "la clé", "le père"); this lesson teaches the BARE word, because the
//      thing being taught is the mark inside the word itself. MissionRich's
//      dictation builds its letter-tile bank from `item.fr` and grades against
//      it, so pointing at "un café" would demand the learner spell UNCAFÉ to
//      answer a screen that shows `café`. The same `item.fr` is the
//      stt.listen() target in the pronunciation rows.
//   2. NO MARK METADATA. Nothing in the existing entries records WHICH mark a
//      word carries or what that mark does, so no section could select "every
//      è word" without listing ids by hand. `mark` and `role` below are what
//      let a drill pool select a family.
//   3. INCONSISTENT IPA DELIMITING. Existing entries are mixed: some
//      slash-wrapped (/kle/), some bare (le.ze.pi.naʁ, med.sɛ̃). Every entry
//      here is slash-wrapped, which the density validator enforces.
//
// The overlapping entries are left exactly as they are. Nothing outside this
// lesson changes, no shipped screen moves.
//
// ── Notation, and where it comes from ──────────────────────────────────────
//
// `respell` follows the house convention already dominant in the corpus, which
// was checked before a single line here was written rather than invented:
// é → AY (570 existing items), è/ê → EH (328 existing items). That is not a
// coincidence of spelling, it is the exact contrast this lesson teaches, and
// matching it means a learner meeting « café » here and « un café » in the A1
// café deck reads the same respelling on both screens.
//
// Nasal vowels close with a superscript n (never a plain n or m), the same
// convention muettes-corpus.ts introduced and the density validator's
// nasal-convention rule enforces. See the MIGRATION DEBT note in that file:
// the older bulk of the corpus still uses the plain-n style, and this lesson
// deliberately does not migrate it.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** A corpus entry plus the lesson-facing display data the renderer needs.
 *
 *  `markAt` is the character-index array into `fr` naming every letter that
 *  CARRIES a mark. It indexes `fr` EXACTLY as written here, counting
 *  characters and not UTF-16 code units, so « déjà » counts d-é-j-à and the
 *  accented glyphs sit at 1 and 3. It drives the same highlight machinery the
 *  silent-letter card uses, inverted: sons.06 greys the letters you do not
 *  say, this lesson lights the letters that change what you say.
 *
 *  `mark` is the diacritic itself, `role` is what that mark DOES in this word.
 *  Both are teaching metadata rather than display copy: they drive the drill
 *  pools, the deckTranche slices and the tag families, so a section can select
 *  "every word where the mark changes the vowel" without listing ids by hand. */
export type AccentWord = Omit<Item, 'drills'> & {
  /** Character indices into `fr` that carry a diacritic. */
  markAt: number[];
  /** The mark this word is in the corpus to teach. */
  mark: 'aigu' | 'grave-e' | 'circonflexe' | 'trema' | 'cedille' | 'grave-other' | 'none';
  /** What the mark does here. `sound` changes which sound comes out;
   *  `split` forces two vowels apart; `nothing` is the mark that changes no
   *  sound at all and exists to stop the rule being over-applied. */
  role: 'sound' | 'split' | 'nothing';
  drills: Item['drills'];
};

const W: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const WD: Item['drills'] = ['flashcard', 'voiceflash', 'review', 'dictation'];

/** The lesson's 62 words. Sequence numbers are stable and must not be
 *  renumbered: they are the SRS key and every attempt ever logged hangs off
 *  them. Append new words at the end. */
export const ACCENTS: AccentWord[] = [
  // ── É aigu: the mark that makes /e/ ──────────────────────────────────────
  //
  // Weighted heaviest of the five. É is far and away the mark a beginner meets
  // most: it is on the past participle of every -er verb in the language.
  { id: 'fr.sons.accents.001', kind: 'word', level: 'sons', theme: 'accents', fr: 'café', en: 'coffee', ipa: '/ka.fe/', respell: 'ka-FAY', markAt: [3], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'final-e'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'The é is the reason the final vowel is said at all. A bare final e would be silent.' },
  { id: 'fr.sons.accents.002', kind: 'word', level: 'sons', theme: 'accents', fr: 'été', en: 'summer', ipa: '/e.te/', respell: 'ay-TAY', markAt: [0, 2], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'final-e'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'Two marks, two identical sounds. Nothing else in the word.' },
  { id: 'fr.sons.accents.003', kind: 'word', level: 'sons', theme: 'accents', fr: 'école', en: 'school', ipa: '/e.kɔl/', respell: 'ay-KOL', markAt: [0], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'initial-e'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.accents.004', kind: 'word', level: 'sons', theme: 'accents', fr: 'éléphant', en: 'elephant', ipa: '/e.le.fɑ̃/', respell: 'ay-lay-FAHⁿ', markAt: [0, 2], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.accents.005', kind: 'word', level: 'sons', theme: 'accents', fr: 'métro', en: 'metro, subway', ipa: '/me.tʁo/', respell: 'may-TROH', markAt: [1], mark: 'aigu', role: 'sound', tags: ['e-aigu'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.accents.006', kind: 'word', level: 'sons', theme: 'accents', fr: 'télé', en: 'TV', ipa: '/te.le/', respell: 'tay-LAY', markAt: [1, 3], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'final-e'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.accents.007', kind: 'word', level: 'sons', theme: 'accents', fr: 'clé', en: 'key', ipa: '/kle/', respell: 'KLAY', markAt: [2], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'final-e'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.accents.008', kind: 'word', level: 'sons', theme: 'accents', fr: 'thé', en: 'tea', ipa: '/te/', respell: 'TAY', markAt: [2], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'final-e'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.accents.009', kind: 'word', level: 'sons', theme: 'accents', fr: 'santé', en: 'health', ipa: '/sɑ̃.te/', respell: 'sahⁿ-TAY', markAt: [4], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'final-e', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'What you say when glasses touch.' },
  { id: 'fr.sons.accents.010', kind: 'word', level: 'sons', theme: 'accents', fr: 'côté', en: 'side', ipa: '/ko.te/', respell: 'koh-TAY', markAt: [1, 3], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'circonflexe', 'two-marks'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Two different marks in four letters. Only the é changes a sound.' },
  { id: 'fr.sons.accents.011', kind: 'word', level: 'sons', theme: 'accents', fr: 'idée', en: 'idea', ipa: '/i.de/', respell: 'ee-DAY', markAt: [2], mark: 'aigu', role: 'sound', tags: ['e-aigu'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'The é sounds, the final e after it does not.' },
  { id: 'fr.sons.accents.012', kind: 'word', level: 'sons', theme: 'accents', fr: 'désolé', en: 'sorry', ipa: '/de.zɔ.le/', respell: 'day-zoh-LAY', markAt: [1, 5], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'final-e'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.accents.013', kind: 'word', level: 'sons', theme: 'accents', fr: 'préféré', en: 'favourite', ipa: '/pʁe.fe.ʁe/', respell: 'pray-fay-RAY', markAt: [2, 4, 6], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'final-e'], drills: W, audioRef: null, version: 1, notes: 'Three é, three identical sounds. The mark is completely regular.' },
  { id: 'fr.sons.accents.014', kind: 'word', level: 'sons', theme: 'accents', fr: 'cinéma', en: 'cinema', ipa: '/si.ne.ma/', respell: 'see-nay-MA', markAt: [3], mark: 'aigu', role: 'sound', tags: ['e-aigu'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.accents.015', kind: 'word', level: 'sons', theme: 'accents', fr: 'décembre', en: 'December', ipa: '/de.sɑ̃bʁ/', respell: 'day-SAHⁿBR', markAt: [1], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.accents.016', kind: 'word', level: 'sons', theme: 'accents', fr: 'vérité', en: 'truth', ipa: '/ve.ʁi.te/', respell: 'vay-ree-TAY', markAt: [1, 5], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'final-e'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.accents.017', kind: 'word', level: 'sons', theme: 'accents', fr: 'américain', en: 'American', ipa: '/a.me.ʁi.kɛ̃/', respell: 'a-may-ree-KEHⁿ', markAt: [2], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'nasal'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.accents.018', kind: 'word', level: 'sons', theme: 'accents', fr: 'étudiant', en: 'student', ipa: '/e.ty.djɑ̃/', respell: 'ay-tü-DYAHⁿ', markAt: [0], mark: 'aigu', role: 'sound', tags: ['e-aigu', 'initial-e', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm' },

  // ── È grave: the mark that makes /ɛ/ ─────────────────────────────────────
  { id: 'fr.sons.accents.019', kind: 'word', level: 'sons', theme: 'accents', fr: 'père', en: 'father', ipa: '/pɛʁ/', respell: 'PEHR', markAt: [1], mark: 'grave-e', role: 'sound', tags: ['e-grave'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.accents.020', kind: 'word', level: 'sons', theme: 'accents', fr: 'mère', en: 'mother', ipa: '/mɛʁ/', respell: 'MEHR', markAt: [1], mark: 'grave-e', role: 'sound', tags: ['e-grave'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.accents.021', kind: 'word', level: 'sons', theme: 'accents', fr: 'frère', en: 'brother', ipa: '/fʁɛʁ/', respell: 'FREHR', markAt: [2], mark: 'grave-e', role: 'sound', tags: ['e-grave'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.accents.022', kind: 'word', level: 'sons', theme: 'accents', fr: 'très', en: 'very', ipa: '/tʁɛ/', respell: 'TREH', markAt: [2], mark: 'grave-e', role: 'sound', tags: ['e-grave', 'silent-final'], drills: WD, audioRef: null, version: 1, notes: 'The è sounds and the s does not. One of the most common words you will say.' },
  { id: 'fr.sons.accents.023', kind: 'word', level: 'sons', theme: 'accents', fr: 'après', en: 'after', ipa: '/a.pʁɛ/', respell: 'a-PREH', markAt: [3], mark: 'grave-e', role: 'sound', tags: ['e-grave', 'silent-final'], drills: W, audioRef: null, version: 1 },
  // 024 and 025 were problème and crème until the density validator's
  // nasal-convention rule was run over them. Both end in a genuinely
  // pronounced /m/, but the rule cannot tell a real final m from a nasal
  // vowel respelled with a plain one when the source has no doubled mm, and
  // it says so in its own comment (see hasPlainNasalFor). Rather than widen a
  // shared validator to fit one lesson, these two teach the same è with an
  // ending the rule reads unambiguously. Both are commoner words anyway.
  { id: 'fr.sons.accents.024', kind: 'word', level: 'sons', theme: 'accents', fr: 'élève', en: 'pupil', ipa: '/e.lɛv/', respell: 'ay-LEV', markAt: [0, 2], mark: 'grave-e', role: 'sound', tags: ['e-grave', 'e-aigu', 'two-marks'], drills: WD, audioRef: null, version: 1, notes: 'Both marks on an e, in one short word, making two different vowels.' },
  { id: 'fr.sons.accents.025', kind: 'word', level: 'sons', theme: 'accents', fr: 'chèvre', en: 'goat', ipa: '/ʃɛvʁ/', respell: 'SHEHVR', markAt: [2], mark: 'grave-e', role: 'sound', tags: ['e-grave'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.accents.026', kind: 'word', level: 'sons', theme: 'accents', fr: 'mètre', en: 'metre', ipa: '/mɛtʁ/', respell: 'MEHTR', markAt: [1], mark: 'grave-e', role: 'sound', tags: ['e-grave', 'minimal-pair'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Compare métro. One mark apart, and the vowel changes.' },
  { id: 'fr.sons.accents.027', kind: 'word', level: 'sons', theme: 'accents', fr: 'bière', en: 'beer', ipa: '/bjɛʁ/', respell: 'BYEHR', markAt: [2], mark: 'grave-e', role: 'sound', tags: ['e-grave'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.accents.028', kind: 'word', level: 'sons', theme: 'accents', fr: 'première', en: 'first', ipa: '/pʁə.mjɛʁ/', respell: 'pruh-MYEHR', markAt: [5], mark: 'grave-e', role: 'sound', tags: ['e-grave'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.accents.029', kind: 'word', level: 'sons', theme: 'accents', fr: 'collège', en: 'secondary school', ipa: '/kɔ.lɛʒ/', respell: 'koh-LEZH', markAt: [4], mark: 'grave-e', role: 'sound', tags: ['e-grave'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.accents.030', kind: 'word', level: 'sons', theme: 'accents', fr: 'sincère', en: 'sincere', ipa: '/sɛ̃.sɛʁ/', respell: 'sehⁿ-SEHR', markAt: [4], mark: 'grave-e', role: 'sound', tags: ['e-grave', 'nasal'], drills: W, audioRef: null, version: 1 },

  // ── The minimal pairs: where the mark is the ONLY difference ─────────────
  //
  // These are the lesson's best drill material and the reason the corpus is
  // authored rather than borrowed. In each pair the spelling is identical
  // except for one mark, and the meaning is not related at all.
  { id: 'fr.sons.accents.031', kind: 'word', level: 'sons', theme: 'accents', fr: 'ou', en: 'or', ipa: '/u/', respell: 'OO', markAt: [], mark: 'none', role: 'nothing', tags: ['minimal-pair', 'pair-ou', 'no-mark'], drills: WD, audioRef: null, version: 1, notes: 'No mark. Say OO. Compare où, which sounds identical and means where.' },
  { id: 'fr.sons.accents.032', kind: 'word', level: 'sons', theme: 'accents', fr: 'où', en: 'where', ipa: '/u/', respell: 'OO', markAt: [1], mark: 'grave-other', role: 'nothing', tags: ['minimal-pair', 'pair-ou', 'grave-other'], drills: WD, audioRef: null, version: 1, notes: 'The grave on a u changes no sound at all. It exists only to tell this word from ou.' },
  { id: 'fr.sons.accents.033', kind: 'word', level: 'sons', theme: 'accents', fr: 'a', en: 'has', ipa: '/a/', respell: 'A', markAt: [], mark: 'none', role: 'nothing', tags: ['minimal-pair', 'pair-a', 'no-mark'], drills: W, audioRef: null, version: 1, notes: 'The verb: il a, he has.' },
  { id: 'fr.sons.accents.034', kind: 'word', level: 'sons', theme: 'accents', fr: 'à', en: 'to, at', ipa: '/a/', respell: 'A', markAt: [0], mark: 'grave-other', role: 'nothing', tags: ['minimal-pair', 'pair-a', 'grave-other'], drills: W, audioRef: null, version: 1, notes: 'Identical sound to a. The mark is doing grammar, not sound.' },
  { id: 'fr.sons.accents.035', kind: 'word', level: 'sons', theme: 'accents', fr: 'sur', en: 'on', ipa: '/syʁ/', respell: 'SÜR', markAt: [], mark: 'none', role: 'nothing', tags: ['minimal-pair', 'pair-sur', 'no-mark'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.accents.036', kind: 'word', level: 'sons', theme: 'accents', fr: 'sûr', en: 'sure, certain', ipa: '/syʁ/', respell: 'SÜR', markAt: [1], mark: 'circonflexe', role: 'nothing', tags: ['minimal-pair', 'pair-sur', 'circonflexe'], drills: W, audioRef: null, version: 1, notes: 'A circumflex that changes nothing you can hear. It separates two words on the page.' },
  { id: 'fr.sons.accents.037', kind: 'word', level: 'sons', theme: 'accents', fr: 'des', en: 'some', ipa: '/de/', respell: 'DAY', markAt: [], mark: 'none', role: 'nothing', tags: ['minimal-pair', 'pair-des', 'no-mark'], drills: W, audioRef: null, version: 1, notes: 'No mark, and still /e/: the -es ending does the same job an é would.' },
  { id: 'fr.sons.accents.038', kind: 'word', level: 'sons', theme: 'accents', fr: 'dès', en: 'from, as early as', ipa: '/dɛ/', respell: 'DEH', markAt: [1], mark: 'grave-e', role: 'sound', tags: ['minimal-pair', 'pair-des', 'e-grave'], drills: W, audioRef: null, version: 1, notes: 'Here the grave DOES change the sound: DAY becomes DEH.' },

  // ── Ê circonflexe: the mark that usually means a lost S ──────────────────
  { id: 'fr.sons.accents.039', kind: 'word', level: 'sons', theme: 'accents', fr: 'fête', en: 'party, celebration', ipa: '/fɛt/', respell: 'FEHT', markAt: [1], mark: 'circonflexe', role: 'sound', tags: ['circonflexe', 'lost-s'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'Once feste. The s left and the mark took its place. English kept it: feast.' },
  { id: 'fr.sons.accents.040', kind: 'word', level: 'sons', theme: 'accents', fr: 'tête', en: 'head', ipa: '/tɛt/', respell: 'TEHT', markAt: [1], mark: 'circonflexe', role: 'sound', tags: ['circonflexe', 'lost-s'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.accents.041', kind: 'word', level: 'sons', theme: 'accents', fr: 'forêt', en: 'forest', ipa: '/fɔ.ʁɛ/', respell: 'foh-REH', markAt: [3], mark: 'circonflexe', role: 'sound', tags: ['circonflexe', 'lost-s', 'silent-final'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'forest without its s. The English word still carries it.' },
  { id: 'fr.sons.accents.042', kind: 'word', level: 'sons', theme: 'accents', fr: 'hôpital', en: 'hospital', ipa: '/o.pi.tal/', respell: 'oh-pee-TAL', markAt: [1], mark: 'circonflexe', role: 'sound', tags: ['circonflexe', 'lost-s'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'hospital, minus the s. The trick works on most circumflexes.' },
  { id: 'fr.sons.accents.043', kind: 'word', level: 'sons', theme: 'accents', fr: 'être', en: 'to be', ipa: '/ɛtʁ/', respell: 'EHTR', markAt: [0], mark: 'circonflexe', role: 'sound', tags: ['circonflexe'], drills: WD, audioRef: null, version: 1, notes: 'The most common verb in French, and it opens on a marked vowel.' },
  { id: 'fr.sons.accents.044', kind: 'word', level: 'sons', theme: 'accents', fr: 'gâteau', en: 'cake', ipa: '/ɡɑ.to/', respell: 'ga-TOH', markAt: [1], mark: 'circonflexe', role: 'nothing', tags: ['circonflexe', 'no-sound-change'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'On an a the circumflex changes almost nothing a beginner needs to hear.' },
  { id: 'fr.sons.accents.045', kind: 'word', level: 'sons', theme: 'accents', fr: 'château', en: 'castle', ipa: '/ʃɑ.to/', respell: 'sha-TOH', markAt: [2], mark: 'circonflexe', role: 'nothing', tags: ['circonflexe', 'lost-s', 'no-sound-change'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.accents.046', kind: 'word', level: 'sons', theme: 'accents', fr: 'île', en: 'island', ipa: '/il/', respell: 'EEL', markAt: [0], mark: 'circonflexe', role: 'nothing', tags: ['circonflexe', 'lost-s', 'no-sound-change'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'isle, without the s. The mark changes nothing you say.' },
  { id: 'fr.sons.accents.047', kind: 'word', level: 'sons', theme: 'accents', fr: 'goût', en: 'taste', ipa: '/ɡu/', respell: 'GOO', markAt: [2], mark: 'circonflexe', role: 'nothing', tags: ['circonflexe', 'no-sound-change', 'silent-final'], drills: W, audioRef: null, version: 1, gender: 'm' },

  // ── Ë tréma: the mark that splits two vowels apart ───────────────────────
  { id: 'fr.sons.accents.048', kind: 'word', level: 'sons', theme: 'accents', fr: 'Noël', en: 'Christmas', ipa: '/nɔ.ɛl/', respell: 'noh-EL', markAt: [2], mark: 'trema', role: 'split', tags: ['trema', 'split-vowel'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'Without the tréma, oe would fuse into one sound. The two dots force two syllables.' },
  { id: 'fr.sons.accents.049', kind: 'word', level: 'sons', theme: 'accents', fr: 'maïs', en: 'corn, maize', ipa: '/ma.is/', respell: 'ma-EESS', markAt: [2], mark: 'trema', role: 'split', tags: ['trema', 'split-vowel', 'minimal-pair', 'pair-mais'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'Compare mais, which is one syllable and means but. The dots are the whole difference.' },
  { id: 'fr.sons.accents.050', kind: 'word', level: 'sons', theme: 'accents', fr: 'mais', en: 'but', ipa: '/mɛ/', respell: 'MEH', markAt: [], mark: 'none', role: 'nothing', tags: ['minimal-pair', 'pair-mais', 'no-mark'], drills: WD, audioRef: null, version: 1, notes: 'One syllable. ai is a single sound here, which is exactly what maïs refuses.' },
  { id: 'fr.sons.accents.051', kind: 'word', level: 'sons', theme: 'accents', fr: 'naïf', en: 'naive', ipa: '/na.if/', respell: 'na-EEF', markAt: [2], mark: 'trema', role: 'split', tags: ['trema', 'split-vowel'], drills: W, audioRef: null, version: 1, notes: 'English borrowed the word and kept the dots, then mostly stopped printing them.' },
  { id: 'fr.sons.accents.052', kind: 'word', level: 'sons', theme: 'accents', fr: 'égoïste', en: 'selfish', ipa: '/e.ɡɔ.ist/', respell: 'ay-goh-EEST', markAt: [0, 3], mark: 'trema', role: 'split', tags: ['trema', 'split-vowel', 'e-aigu', 'two-marks'], drills: W, audioRef: null, version: 1, notes: 'Two marks doing two different jobs in one word: é makes a sound, ï splits one.' },
  { id: 'fr.sons.accents.053', kind: 'word', level: 'sons', theme: 'accents', fr: 'Haïti', en: 'Haiti', ipa: '/a.i.ti/', respell: 'a-ee-TEE', markAt: [2], mark: 'trema', role: 'split', tags: ['trema', 'split-vowel', 'proper-noun'], drills: W, audioRef: null, version: 1 },

  // ── Ç cédille: the mark that keeps C soft ────────────────────────────────
  { id: 'fr.sons.accents.054', kind: 'word', level: 'sons', theme: 'accents', fr: 'français', en: 'French', ipa: '/fʁɑ̃.sɛ/', respell: 'frahⁿ-SEH', markAt: [4], mark: 'cedille', role: 'sound', tags: ['cedille', 'nasal', 'silent-final'], drills: WD, audioRef: null, version: 1, notes: 'Without the tail, the c before a would be a K. The word would be frankay.' },
  { id: 'fr.sons.accents.055', kind: 'word', level: 'sons', theme: 'accents', fr: 'garçon', en: 'boy', ipa: '/ɡaʁ.sɔ̃/', respell: 'gar-SOHⁿ', markAt: [3], mark: 'cedille', role: 'sound', tags: ['cedille', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.accents.056', kind: 'word', level: 'sons', theme: 'accents', fr: 'ça', en: 'that, it', ipa: '/sa/', respell: 'SA', markAt: [0], mark: 'cedille', role: 'sound', tags: ['cedille'], drills: WD, audioRef: null, version: 1, notes: 'Two letters, and one of them is doing the work. Without the tail it would be KA.' },
  { id: 'fr.sons.accents.057', kind: 'word', level: 'sons', theme: 'accents', fr: 'leçon', en: 'lesson', ipa: '/lə.sɔ̃/', respell: 'luh-SOHⁿ', markAt: [2], mark: 'cedille', role: 'sound', tags: ['cedille', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.accents.058', kind: 'word', level: 'sons', theme: 'accents', fr: 'reçu', en: 'receipt', ipa: '/ʁə.sy/', respell: 'ruh-SÜ', markAt: [2], mark: 'cedille', role: 'sound', tags: ['cedille'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.accents.059', kind: 'word', level: 'sons', theme: 'accents', fr: 'déçu', en: 'disappointed', ipa: '/de.sy/', respell: 'day-SÜ', markAt: [1, 2], mark: 'cedille', role: 'sound', tags: ['cedille', 'e-aigu', 'two-marks'], drills: W, audioRef: null, version: 1, notes: 'Two marks side by side, each doing a different job.' },

  // ── The contrast set: c with no cedilla, to prove what the tail is for ───
  { id: 'fr.sons.accents.060', kind: 'word', level: 'sons', theme: 'accents', fr: 'carte', en: 'card, map', ipa: '/kaʁt/', respell: 'KART', markAt: [], mark: 'none', role: 'nothing', tags: ['no-mark', 'hard-c'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'c before a is a K. That is the default the cedilla exists to override.' },
  { id: 'fr.sons.accents.061', kind: 'word', level: 'sons', theme: 'accents', fr: 'ceci', en: 'this', ipa: '/sə.si/', respell: 'suh-SEE', markAt: [], mark: 'none', role: 'nothing', tags: ['no-mark', 'soft-c'], drills: W, audioRef: null, version: 1, notes: 'c before e or i is already soft, so no cedilla is ever needed there.' },
  { id: 'fr.sons.accents.062', kind: 'phrase', level: 'sons', theme: 'accents', fr: 'cinéma français', en: 'French cinema', ipa: '/si.ne.ma fʁɑ̃.sɛ/', respell: 'see-nay-MA frahⁿ-SEH', markAt: [3, 11], mark: 'cedille', role: 'sound', tags: ['cedille', 'e-aigu', 'phrase', 'two-marks'], drills: W, audioRef: null, version: 1, notes: 'Two words, two marks, two different jobs. This is the whole lesson in one phrase.' },
];

/** Fast lookup by id. The lesson goes through this rather than scanning. */
export const BY_ID = new Map<string, AccentWord>(ACCENTS.map((w) => [w.id, w]));

/** Every id in this corpus, in authored order. */
export const ACCENTS_IDS: string[] = ACCENTS.map((w) => w.id);

/** The ids of one mark family, in authored order. Sections select a family
 *  through this rather than listing ids by hand, so adding a word to a family
 *  above adds it to every drill that teaches that family. */
export function markIds(mark: AccentWord['mark']): string[] {
  return ACCENTS.filter((w) => w.mark === mark).map((w) => w.id);
}

/** The ids carrying a given tag. The handle a section uses when the family it
 *  wants cuts across marks, e.g. every minimal pair. */
export function tagIds(tag: string): string[] {
  return ACCENTS.filter((w) => w.tags.includes(tag)).map((w) => w.id);
}

/** The two halves of a minimal pair, by its `pair-*` tag, in authored order.
 *  Returns exactly the words tagged with that pair so a drill never has to
 *  restate either spelling. */
export function pairIds(pairTag: string): string[] {
  return tagIds(pairTag);
}

/** A corpus row as a plain `Item`, which is what the database and the schema
 *  validator take. Strips the lesson-facing teaching metadata: `markAt`,
 *  `mark` and `role` drive the lesson's own rendering and pools, and there is
 *  no column for them. */
export function toItem(w: AccentWord): import('../../../ealch-v2/src/content/schema.ts').Item {
  const { markAt: _markAt, mark: _mark, role: _role, ...item } = w as AccentWord & Record<string, unknown>;
  return item as import('../../../ealch-v2/src/content/schema.ts').Item;
}
