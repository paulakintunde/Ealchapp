// The sons.06 lexeme corpus — every French unit sons.06.l1 teaches.
//
// THIS FILE IS THE SINGLE SOURCE OF TRUTH for these 63 words. The lesson body
// (author-muettes-batch.ts) reads `fr`, `ipa`, `respell`, `en` and `silent`
// FROM HERE and never restates them. That is the whole point: before this
// existed the same word's IPA was typed by hand in the groupDrill, the
// flashcards, the examples, the dictation and the quiz, five copies free to
// drift apart. Change a transcription here and every screen that shows the
// word changes with it.
//
// ── Why these are new items and not reuses ─────────────────────────────────
//
// 27 of these words already have corpus entries (fr.sons.voyelles.078 "le nez",
// fr.a1.objets.008 "un sac", and so on). They are deliberately NOT reused,
// for three reasons found by inspection, not assumption:
//
//   1. WRONG LEXICAL FORM. The corpus carries article+noun phrases ("le nez",
//      "un sac", "la porte"); this lesson teaches the BARE word, because the
//      thing being taught is what happens at the end of the word itself.
//      MissionRich's dictation builds its letter-tile bank from `item.fr` and
//      grades against it, so pointing at "le nez" would demand the learner
//      spell LENEZ to answer a screen that shows `nez`. The same `item.fr` is
//      the stt.listen() target in the pronunciation rows.
//   2. CONFLICTING NASAL RESPELL. The corpus house style writes nasals as a
//      plain n ("le temps" → TAHN, "vingt" → VAN). This lesson's whole subject
//      is that a written consonant is not pronounced, so a respelling that
//      spells a nasal vowel with a consonant teaches the exact error the
//      lesson exists to kill. Here nasals are a superscript n: [TAHⁿ], [VEHⁿ].
//   3. INCONSISTENT IPA DELIMITING. Existing entries are mixed — some
//      slash-wrapped (/dø/), some bare (ne, ʃa, tɑ̃). Every entry here is
//      slash-wrapped, which the density validator enforces.
//
// The 27 overlapping entries are left exactly as they are. Nothing outside
// this lesson changes, no shipped screen moves. See MIGRATION-DEBT below.
//
// ── MIGRATION DEBT (deliberate, recorded, not forgotten) ───────────────────
//
// The corpus now holds two respelling conventions: 2,734 pre-existing entries
// using the plain-n nasal style, and 63 here using the superscript-n style.
// That is a real inconsistency and it was an explicit decision (Paul,
// 2026-07-31) to scope it to this lesson rather than migrate 2,734 items
// mid-build. The migration, when it runs, is mechanical: AHN|AHNN → AHⁿ,
// OHN → OHⁿ, AN(final) → AHⁿ, UHN → UHⁿ, and it needs a human pass because
// "bonne" → BUN is a real n and must not be touched. Item.respell's own
// doc comment in schema.ts still documents the OLD convention and should be
// updated in the same pass, not before — it describes what most of the corpus
// actually is today.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** A corpus entry plus the lesson-facing display data the renderer needs.
 *
 *  `silent` is the character-index array into `fr` that the XL card and every
 *  other silent-aware surface greys and fades. It indexes `fr` EXACTLY as
 *  written here, including spaces and apostrophes, so "ils parlent" counts
 *  from the i of ils. An empty array means every letter is pronounced, which
 *  is information — the CaReFuL words rely on it.
 *
 *  `respell` uses the lesson's notation: hyphenated syllables, the stressed
 *  syllable capitalised, nasal vowels closed with a superscript n (never a
 *  plain n or m), /ø œ/ as EU (never UH), /y/ as Ü, /e/ as AY against /ɛ/ as
 *  EH. Held in brackets by the renderer, never in the data. */
export type MuetteWord = Omit<Item, 'drills'> & {
  /** Character indices into `fr` that are written and not pronounced. */
  silent: number[];
  /** Which teaching family this word belongs to. Drives the drill pools and
   *  the deckTranche slices; not display copy. */
  family: 'default' | 'careful' | 'h' | 'switch' | 'exception';
  drills: Item['drills'];
};

const W: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const WD: Item['drills'] = ['flashcard', 'voiceflash', 'review', 'dictation'];

/** The lesson's 63 words. Sequence numbers are stable and must not be
 *  renumbered: they are the SRS key and every attempt ever logged hangs off
 *  them. Append new words at the end. */
export const MUETTES: MuetteWord[] = [
  // ── The silent default: final consonants that are written and not said ───
  { id: 'fr.sons.muettes.001', kind: 'word', level: 'sons', theme: 'muettes', fr: 'petit', en: 'small', ipa: '/pə.ti/', respell: 'pə-TEE', silent: [4], family: 'default', tags: ['silent-final', 'silent-t'], drills: WD, audioRef: null, version: 1, notes: 'The T is on the page and nowhere else.' },
  { id: 'fr.sons.muettes.002', kind: 'word', level: 'sons', theme: 'muettes', fr: 'grand', en: 'big, tall', ipa: '/ɡʁɑ̃/', respell: 'GRAHⁿ', silent: [4], family: 'default', tags: ['silent-final', 'silent-d', 'nasal'], drills: WD, audioRef: null, version: 1, notes: 'The D goes, and the AN is one nasal sound.' },
  { id: 'fr.sons.muettes.003', kind: 'word', level: 'sons', theme: 'muettes', fr: 'beaucoup', en: 'a lot', ipa: '/bo.ku/', respell: 'boh-KOO', silent: [7], family: 'default', tags: ['silent-final', 'silent-p'], drills: WD, audioRef: null, version: 1, notes: 'Eight letters, four sounds.' },
  { id: 'fr.sons.muettes.004', kind: 'word', level: 'sons', theme: 'muettes', fr: 'Paris', en: 'Paris', ipa: '/pa.ʁi/', respell: 'pa-REE', silent: [4], family: 'default', tags: ['silent-final', 'silent-s', 'proper-noun'], drills: WD, audioRef: null, version: 1, notes: 'No S, ever, including in the city.' },
  { id: 'fr.sons.muettes.005', kind: 'word', level: 'sons', theme: 'muettes', fr: 'trop', en: 'too much', ipa: '/tʁo/', respell: 'TROH', silent: [3], family: 'default', tags: ['silent-final', 'silent-p'], drills: WD, audioRef: null, version: 1 },
  { id: 'fr.sons.muettes.006', kind: 'word', level: 'sons', theme: 'muettes', fr: 'nez', en: 'nose', ipa: '/ne/', respell: 'NAY', silent: [2], family: 'default', tags: ['silent-final', 'silent-z'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'Final Z behaves exactly like final S.' },
  { id: 'fr.sons.muettes.007', kind: 'word', level: 'sons', theme: 'muettes', fr: 'deux', en: 'two', ipa: '/dø/', respell: 'DEU', silent: [3], family: 'default', tags: ['silent-final', 'silent-x', 'number'], drills: WD, audioRef: null, version: 1, notes: 'The one that cost you a croissant.' },
  { id: 'fr.sons.muettes.008', kind: 'word', level: 'sons', theme: 'muettes', fr: 'chat', en: 'cat', ipa: '/ʃa/', respell: 'SHA', silent: [3], family: 'default', tags: ['silent-final', 'silent-t'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.muettes.009', kind: 'word', level: 'sons', theme: 'muettes', fr: 'chez', en: 'at the home of', ipa: '/ʃe/', respell: 'SHAY', silent: [3], family: 'default', tags: ['silent-final', 'silent-z'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.muettes.010', kind: 'word', level: 'sons', theme: 'muettes', fr: 'tout', en: 'all, everything', ipa: '/tu/', respell: 'TOO', silent: [3], family: 'default', tags: ['silent-final', 'silent-t'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.muettes.011', kind: 'word', level: 'sons', theme: 'muettes', fr: 'pied', en: 'foot', ipa: '/pje/', respell: 'PYAY', silent: [3], family: 'default', tags: ['silent-final', 'silent-d'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.muettes.012', kind: 'word', level: 'sons', theme: 'muettes', fr: 'froid', en: 'cold', ipa: '/fʁwa/', respell: 'FRWA', silent: [4], family: 'default', tags: ['silent-final', 'silent-d'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.muettes.013', kind: 'word', level: 'sons', theme: 'muettes', fr: 'prix', en: 'price', ipa: '/pʁi/', respell: 'PREE', silent: [3], family: 'default', tags: ['silent-final', 'silent-x'], drills: WD, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.muettes.014', kind: 'word', level: 'sons', theme: 'muettes', fr: 'temps', en: 'time, weather', ipa: '/tɑ̃/', respell: 'TAHⁿ', silent: [2, 3, 4], family: 'default', tags: ['silent-final', 'silent-cluster', 'nasal'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'Five letters, two sounds. The M, P and S all go.' },
  { id: 'fr.sons.muettes.015', kind: 'word', level: 'sons', theme: 'muettes', fr: 'corps', en: 'body', ipa: '/kɔʁ/', respell: 'KOR', silent: [3, 4], family: 'default', tags: ['silent-final', 'silent-cluster'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.muettes.016', kind: 'word', level: 'sons', theme: 'muettes', fr: 'vingt', en: 'twenty', ipa: '/vɛ̃/', respell: 'VEHⁿ', silent: [3, 4], family: 'default', tags: ['silent-final', 'silent-cluster', 'nasal', 'number'], drills: WD, audioRef: null, version: 1, notes: 'The T returns in vingt-deux /vɛ̃t.dø/.' },
  { id: 'fr.sons.muettes.017', kind: 'word', level: 'sons', theme: 'muettes', fr: 'doigt', en: 'finger', ipa: '/dwa/', respell: 'DWA', silent: [3, 4], family: 'default', tags: ['silent-final', 'silent-cluster'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.muettes.018', kind: 'word', level: 'sons', theme: 'muettes', fr: 'printemps', en: 'spring', ipa: '/pʁɛ̃.tɑ̃/', respell: 'prehⁿ-TAHⁿ', silent: [6, 7, 8], family: 'default', tags: ['silent-final', 'silent-cluster', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm' },

  // ── CaReFuL: the four finals that stay awake ─────────────────────────────
  { id: 'fr.sons.muettes.019', kind: 'word', level: 'sons', theme: 'muettes', fr: 'sac', en: 'bag', ipa: '/sak/', respell: 'SAK', silent: [], family: 'careful', tags: ['careful', 'careful-c'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'C sounded. Compare tabac /ta.ba/, where it is not.' },
  { id: 'fr.sons.muettes.020', kind: 'word', level: 'sons', theme: 'muettes', fr: 'avec', en: 'with', ipa: '/a.vɛk/', respell: 'a-VEK', silent: [], family: 'careful', tags: ['careful', 'careful-c'], drills: WD, audioRef: null, version: 1, notes: 'One of the most common words in the language, and it keeps its C.' },
  { id: 'fr.sons.muettes.021', kind: 'word', level: 'sons', theme: 'muettes', fr: 'parc', en: 'park', ipa: '/paʁk/', respell: 'PARK', silent: [], family: 'careful', tags: ['careful', 'careful-c', 'careful-r'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.muettes.022', kind: 'word', level: 'sons', theme: 'muettes', fr: 'hiver', en: 'winter', ipa: '/i.vɛʁ/', respell: 'ee-VEHR', silent: [0], family: 'careful', tags: ['careful', 'careful-r', 'h-muet'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'R sounded. And the H at the front does nothing at all.' },
  { id: 'fr.sons.muettes.023', kind: 'word', level: 'sons', theme: 'muettes', fr: 'mer', en: 'sea', ipa: '/mɛʁ/', respell: 'MEHR', silent: [], family: 'careful', tags: ['careful', 'careful-r'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.muettes.024', kind: 'word', level: 'sons', theme: 'muettes', fr: 'cher', en: 'expensive, dear', ipa: '/ʃɛʁ/', respell: 'SHEHR', silent: [], family: 'careful', tags: ['careful', 'careful-r'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.muettes.025', kind: 'word', level: 'sons', theme: 'muettes', fr: 'chef', en: 'chef, boss', ipa: '/ʃɛf/', respell: 'SHEF', silent: [], family: 'careful', tags: ['careful', 'careful-f'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'F sounded, same as in English.' },
  { id: 'fr.sons.muettes.026', kind: 'word', level: 'sons', theme: 'muettes', fr: 'neuf', en: 'nine, new', ipa: '/nœf/', respell: 'NEUF', silent: [], family: 'careful', tags: ['careful', 'careful-f'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.muettes.027', kind: 'word', level: 'sons', theme: 'muettes', fr: 'actif', en: 'active', ipa: '/ak.tif/', respell: 'ak-TEEF', silent: [], family: 'careful', tags: ['careful', 'careful-f'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.muettes.028', kind: 'word', level: 'sons', theme: 'muettes', fr: 'avril', en: 'April', ipa: '/a.vʁil/', respell: 'a-VREEL', silent: [], family: 'careful', tags: ['careful', 'careful-l'], drills: WD, audioRef: null, version: 1, notes: 'L sounded, clear at the end.' },
  { id: 'fr.sons.muettes.029', kind: 'word', level: 'sons', theme: 'muettes', fr: 'sel', en: 'salt', ipa: '/sɛl/', respell: 'SEL', silent: [], family: 'careful', tags: ['careful', 'careful-l'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Short word, L fully alive.' },
  { id: 'fr.sons.muettes.030', kind: 'word', level: 'sons', theme: 'muettes', fr: 'mal', en: 'badly, pain', ipa: '/mal/', respell: 'MAL', silent: [], family: 'careful', tags: ['careful', 'careful-l'], drills: W, audioRef: null, version: 1 },

  // ── The CaReFuL exceptions: look like they should sound, and do not ──────
  { id: 'fr.sons.muettes.031', kind: 'word', level: 'sons', theme: 'muettes', fr: 'tabac', en: 'tobacco, tobacconist', ipa: '/ta.ba/', respell: 'ta-BA', silent: [4], family: 'careful', tags: ['careful-exception', 'silent-c'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'A CaReFuL C that stays silent. Memorise it against sac.' },
  { id: 'fr.sons.muettes.032', kind: 'word', level: 'sons', theme: 'muettes', fr: 'clef', en: 'key', ipa: '/kle/', respell: 'KLAY', silent: [3], family: 'careful', tags: ['careful-exception', 'silent-f'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'A CaReFuL F that stays silent. Compare chef /ʃɛf/.' },
  { id: 'fr.sons.muettes.033', kind: 'word', level: 'sons', theme: 'muettes', fr: 'gentil', en: 'kind, nice', ipa: '/ʒɑ̃.ti/', respell: 'zhahⁿ-TEE', silent: [5], family: 'careful', tags: ['careful-exception', 'silent-l', 'nasal'], drills: W, audioRef: null, version: 1, notes: 'A CaReFuL L that stays silent. Compare avril /a.vʁil/.' },
  { id: 'fr.sons.muettes.034', kind: 'word', level: 'sons', theme: 'muettes', fr: 'outil', en: 'tool', ipa: '/u.ti/', respell: 'oo-TEE', silent: [4], family: 'careful', tags: ['careful-exception', 'silent-l'], drills: W, audioRef: null, version: 1, gender: 'm' },
  { id: 'fr.sons.muettes.035', kind: 'word', level: 'sons', theme: 'muettes', fr: 'blanc', en: 'white', ipa: '/blɑ̃/', respell: 'BLAHⁿ', silent: [4], family: 'careful', tags: ['careful-exception', 'silent-c', 'nasal'], drills: W, audioRef: null, version: 1, notes: 'A CaReFuL C that stays silent, and the AN is nasal.' },

  // ── The -ER trap: the R that CaReFuL claims and the ending takes back ────
  { id: 'fr.sons.muettes.036', kind: 'word', level: 'sons', theme: 'muettes', fr: 'parler', en: 'to speak', ipa: '/paʁ.le/', respell: 'par-LAY', silent: [5], family: 'careful', tags: ['er-ending', 'silent-r', 'infinitive'], drills: WD, audioRef: null, version: 1, notes: 'The -er ending is one clean /e/. Nothing after it. The FIRST r does sound.' },
  { id: 'fr.sons.muettes.037', kind: 'word', level: 'sons', theme: 'muettes', fr: 'manger', en: 'to eat', ipa: '/mɑ̃.ʒe/', respell: 'mahⁿ-ZHAY', silent: [5], family: 'careful', tags: ['er-ending', 'silent-r', 'infinitive', 'nasal'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.muettes.038', kind: 'word', level: 'sons', theme: 'muettes', fr: 'boulanger', en: 'baker', ipa: '/bu.lɑ̃.ʒe/', respell: 'boo-lahⁿ-ZHAY', silent: [8], family: 'careful', tags: ['er-ending', 'silent-r', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'A job noun in -er. Same ending as the infinitives, same silence.' },

  // ── The ghost letter: H, silent everywhere, grammatical anyway ───────────
  { id: 'fr.sons.muettes.039', kind: 'word', level: 'sons', theme: 'muettes', fr: 'homme', en: 'man', ipa: '/ɔm/', respell: 'OM', silent: [0, 4], family: 'h', tags: ['h-muet'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'H muet. The article shrinks to l\' and the word starts on the O.' },
  { id: 'fr.sons.muettes.040', kind: 'word', level: 'sons', theme: 'muettes', fr: 'hôtel', en: 'hotel', ipa: '/o.tɛl/', respell: 'oh-TEL', silent: [0], family: 'h', tags: ['h-muet', 'careful-l'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'No puff of air. Straight onto the vowel.' },
  { id: 'fr.sons.muettes.041', kind: 'word', level: 'sons', theme: 'muettes', fr: 'heure', en: 'hour, time', ipa: '/œʁ/', respell: 'EUR', silent: [0, 4], family: 'h', tags: ['h-muet', 'careful-r'], drills: W, audioRef: null, version: 1, gender: 'f', notes: 'H muet again, and the R is fully sounded.' },
  { id: 'fr.sons.muettes.042', kind: 'word', level: 'sons', theme: 'muettes', fr: 'histoire', en: 'story, history', ipa: '/is.twaʁ/', respell: 'ees-TWAR', silent: [0, 7], family: 'h', tags: ['h-muet'], drills: W, audioRef: null, version: 1, gender: 'f' },
  { id: 'fr.sons.muettes.043', kind: 'word', level: 'sons', theme: 'muettes', fr: 'héros', en: 'hero', ipa: '/e.ʁo/', respell: 'ay-ROH', silent: [0, 4], family: 'h', tags: ['h-aspire'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'H aspiré. Still silent, but the article stays whole: le héros, not l\'.' },
  { id: 'fr.sons.muettes.044', kind: 'word', level: 'sons', theme: 'muettes', fr: 'hibou', en: 'owl', ipa: '/i.bu/', respell: 'ee-BOO', silent: [0], family: 'h', tags: ['h-aspire'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'H aspiré. A tiny gap between le and ibou.' },
  { id: 'fr.sons.muettes.045', kind: 'word', level: 'sons', theme: 'muettes', fr: 'haricot', en: 'bean', ipa: '/a.ʁi.ko/', respell: 'a-ree-KOH', silent: [0, 6], family: 'h', tags: ['h-aspire', 'silent-t'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'H aspiré, and the T at the end is silent as usual.' },
  { id: 'fr.sons.muettes.046', kind: 'word', level: 'sons', theme: 'muettes', fr: 'honte', en: 'shame', ipa: '/ɔ̃t/', respell: 'OHⁿT', silent: [0, 4], family: 'h', tags: ['h-aspire', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'f' },

  // ── The alarm clock: a silent -e that wakes the consonant before it ──────
  { id: 'fr.sons.muettes.047', kind: 'word', level: 'sons', theme: 'muettes', fr: 'grande', en: 'big, tall (feminine)', ipa: '/ɡʁɑ̃d/', respell: 'GRAHⁿD', silent: [5], family: 'switch', tags: ['e-switch', 'gender-audible', 'nasal'], drills: WD, audioRef: null, version: 1, notes: 'The E stays silent. The D wakes up.' },
  { id: 'fr.sons.muettes.048', kind: 'word', level: 'sons', theme: 'muettes', fr: 'petite', en: 'small (feminine)', ipa: '/pə.tit/', respell: 'pə-TEET', silent: [5], family: 'switch', tags: ['e-switch', 'gender-audible'], drills: WD, audioRef: null, version: 1, notes: 'Now you can hear which one it is.' },
  { id: 'fr.sons.muettes.049', kind: 'word', level: 'sons', theme: 'muettes', fr: 'verte', en: 'green (feminine)', ipa: '/vɛʁt/', respell: 'VEHRT', silent: [4], family: 'switch', tags: ['e-switch', 'gender-audible'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.muettes.050', kind: 'word', level: 'sons', theme: 'muettes', fr: 'porte', en: 'door', ipa: '/pɔʁt/', respell: 'PORT', silent: [4], family: 'switch', tags: ['e-switch'], drills: WD, audioRef: null, version: 1, gender: 'f', notes: 'Not POR-tuh. The E adds no syllable, it only wakes the T.' },
  { id: 'fr.sons.muettes.051', kind: 'word', level: 'sons', theme: 'muettes', fr: 'française', en: 'French (feminine)', ipa: '/fʁɑ̃.sɛz/', respell: 'frahⁿ-SEHZ', silent: [8], family: 'switch', tags: ['e-switch', 'gender-audible', 'nasal'], drills: WD, audioRef: null, version: 1, notes: 'The woken S comes back as a Z sound.' },
  { id: 'fr.sons.muettes.052', kind: 'word', level: 'sons', theme: 'muettes', fr: 'longue', en: 'long (feminine)', ipa: '/lɔ̃ɡ/', respell: 'LOHⁿG', silent: [5], family: 'switch', tags: ['e-switch', 'gender-audible', 'nasal'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.muettes.053', kind: 'word', level: 'sons', theme: 'muettes', fr: 'heureuse', en: 'happy (feminine)', ipa: '/œ.ʁøz/', respell: 'eu-REUZ', silent: [0, 7], family: 'switch', tags: ['e-switch', 'gender-audible', 'h-muet'], drills: W, audioRef: null, version: 1 },
  { id: 'fr.sons.muettes.054', kind: 'word', level: 'sons', theme: 'muettes', fr: 'blanche', en: 'white (feminine)', ipa: '/blɑ̃ʃ/', respell: 'BLAHⁿSH', silent: [6], family: 'switch', tags: ['e-switch', 'gender-audible', 'nasal'], drills: W, audioRef: null, version: 1 },

  // ── The silent verb ending: -ent, four letters, no sound ─────────────────
  { id: 'fr.sons.muettes.055', kind: 'phrase', level: 'sons', theme: 'muettes', fr: 'ils parlent', en: 'they speak', ipa: '/il paʁl/', respell: 'eel PARL', silent: [8, 9, 10], family: 'switch', tags: ['silent-ent', 'verb'], drills: WD, audioRef: null, version: 1, notes: 'All four letters of -ent, gone. Stop after the L.' },
  { id: 'fr.sons.muettes.056', kind: 'phrase', level: 'sons', theme: 'muettes', fr: 'elles habitent', en: 'they live', ipa: '/ɛl.zⁿa.bit/', respell: 'el-za-BEET', silent: [6, 11, 12, 13], family: 'switch', tags: ['silent-ent', 'verb', 'h-muet', 'liaison'], drills: W, audioRef: null, version: 1, notes: 'Silent H, silent -ent, and a preview of liaison in that Z.' },

  // ── The memorised exceptions: the rules will not save you ────────────────
  { id: 'fr.sons.muettes.057', kind: 'word', level: 'sons', theme: 'muettes', fr: 'fils', en: 'son', ipa: '/fis/', respell: 'FEES', silent: [2], family: 'exception', tags: ['exception', 'sounded-s'], drills: WD, audioRef: null, version: 1, gender: 'm', notes: 'The S sounds and the L does not. Bank it as a fact.' },
  { id: 'fr.sons.muettes.058', kind: 'word', level: 'sons', theme: 'muettes', fr: 'fil', en: 'thread, wire', ipa: '/fil/', respell: 'FEEL', silent: [], family: 'exception', tags: ['exception', 'careful-l'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'The word fils is NOT this. This is thread.' },
  { id: 'fr.sons.muettes.059', kind: 'word', level: 'sons', theme: 'muettes', fr: 'tous', en: 'all (pronoun)', ipa: '/tus/', respell: 'TOOS', silent: [], family: 'exception', tags: ['exception', 'sounded-s'], drills: W, audioRef: null, version: 1, notes: 'As a PRONOUN the S sounds. As an adjective (tous les jours) it does not.' },
  { id: 'fr.sons.muettes.060', kind: 'word', level: 'sons', theme: 'muettes', fr: 'plus', en: 'more, plus', ipa: '/plys/', respell: 'PLÜS', silent: [], family: 'exception', tags: ['exception', 'sounded-s'], drills: W, audioRef: null, version: 1, notes: 'Sounded when it means more or plus; silent in the negative ne... plus.' },
  { id: 'fr.sons.muettes.061', kind: 'word', level: 'sons', theme: 'muettes', fr: 'net', en: 'clear, sharp', ipa: '/nɛt/', respell: 'NET', silent: [], family: 'exception', tags: ['exception', 'sounded-t'], drills: W, audioRef: null, version: 1, notes: 'A final T that sounds. Compare nez /ne/, which does not.' },
  { id: 'fr.sons.muettes.062', kind: 'word', level: 'sons', theme: 'muettes', fr: 'os', en: 'bone', ipa: '/ɔs/', respell: 'OSS', silent: [], family: 'exception', tags: ['exception', 'sounded-s'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'Singular /ɔs/ with the S. The plural les os is /le.zo/, no S at all.' },
  { id: 'fr.sons.muettes.063', kind: 'word', level: 'sons', theme: 'muettes', fr: 'sens', en: 'meaning, direction', ipa: '/sɑ̃s/', respell: 'SAHⁿS', silent: [], family: 'exception', tags: ['exception', 'sounded-s', 'nasal'], drills: W, audioRef: null, version: 1, gender: 'm', notes: 'The S sounds here, against every default. One of the six to memorise.' },
];

/** Lookup by id. The lesson body builds every screen through this. */
export const BY_ID: ReadonlyMap<string, MuetteWord> = new Map(MUETTES.map((w) => [w.id, w]));

/** Lookup by the bare French spelling, for authoring convenience only.
 *  Never used at runtime — the lesson stores ids, not spellings. */
export const BY_FR: ReadonlyMap<string, MuetteWord> = new Map(MUETTES.map((w) => [w.fr, w]));

/** Every id in this corpus, in sequence order. */
export const MUETTES_IDS: string[] = MUETTES.map((w) => w.id);

/** The ids of one teaching family, in sequence order. Drives the drill item
 *  pools and the SRS tranche slices so neither restates a word list. */
export const familyIds = (f: MuetteWord['family']): string[] =>
  MUETTES.filter((w) => w.family === f).map((w) => w.id);

/** The display triple every card shows, assembled from the corpus so that no
 *  screen ever restates a transcription. Brackets and slashes are added HERE,
 *  once, rather than being baked into the stored data — the validator checks
 *  the rendered form, and storing them would double them up. */
export function display(id: string): { fr: string; ipa: string; respell: string; en: string; silent: number[] } {
  const w = BY_ID.get(id);
  if (!w) throw new Error(`muettes corpus: unknown id "${id}"`);
  return {
    fr: w.fr,
    ipa: w.ipa ?? '',
    respell: w.respell ? `[${w.respell}]` : '',
    en: w.en,
    silent: w.silent,
  };
}

/** The corpus Item, stripped of the lesson-only fields. What gets written to
 *  content_items — `silent` and `family` are lesson display data and live in
 *  the lesson's own section bodies, not on the shared corpus row. */
export function toItem(w: MuetteWord): Item {
  const { silent: _silent, family: _family, ...item } = w;
  return item;
}
