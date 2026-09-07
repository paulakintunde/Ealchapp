// The sons.09 masterclass corpus — 56 authored entries, plus 22 reused by id.
//
// READ THIS BEFORE EDITING.
//
// ── What this corpus is FOR ────────────────────────────────────────────────
//
// Every other sons corpus is a word list for ONE rule. This one is a list of
// COLLISIONS. A masterclass entry exists because two or more of the five rules
// fire on the same phrase, and the interesting thing about it is the way they
// interact. That is why almost every entry here is a sentence: a single word
// cannot show one rule waking a letter that another rule put to sleep.
//
// `rules` is the machine-readable claim, and it is what sons-09-masterclass.test.ts
// asserts coverage against. An entry with fewer than two rules is refused by
// the batch, because a single-rule item belongs in the lesson that taught that
// rule and teaches nothing new here.
//
// A rule is listed when the entry EXERCISES it, which includes exercising it by
// being blocked. `les héros` carries 'liaison' precisely because no liaison is
// made: a learner who cannot say why it is absent has not learned the rule.
//
// ── Reuse, and why 56 is the right number of new entries ───────────────────
//
// The sons corpus already holds 1,299 items, and 68 of them carry BOTH an
// apostrophe and a liaison tie, so multi-rule material is not scarce. 22 of
// those are named in REUSED below and referenced BY ID from the lesson:
// nothing about them changes, and no shipped screen moves.
//
// What the existing corpus does NOT hold is CONTRAST. Ten of the entries here
// exist in pairs (`un grand arbre` / `un grand parc`, `les hôtels` / `les
// héros`, `Il n'a pas encore mangé` / `Il n'a pas mangé`) where the same
// letters behave two different ways in two frames. A pair cannot be assembled
// out of two items authored years apart for two different lessons, because
// nothing guarantees they are transcribed to the same convention or that the
// contrast is the only difference between them. So the pairs are authored here,
// together, and the halves sit next to each other in this file.
//
// ── The five rules ─────────────────────────────────────────────────────────
//
// Taken from the unit's own canDo, not from the set of lessons that happen to
// have a reframe: "nasals, silent letters, liaison, elision and rhythm
// together". sons.05 (accents) has a reframe and is deliberately NOT one of the
// five, because the unit does not promise it. Accents appear where they change
// a vowel that another rule then acts on, and nowhere else.
//
// ── Notation ───────────────────────────────────────────────────────────────
//
// The house conventions, unchanged. This lesson invents no notation, which
// matters more here than anywhere else: it is the lesson where five notations
// meet, and a sixth mark would be the one thing a learner has never seen.
//
//   syllables inside a word     joined by '-'
//   the phrase break            ' | '   (sons.08, at a real break only)
//   the prominent syllable      CAPS, always group-final  (sons.08)
//   a liaison                   '‿' attached to the FOLLOWING syllable (sons.10)
//   nasal vowels                superscript 'ⁿ', never a plain n or m (sons.06)
//   /ø œ/ as EU or UH · /y/ as Ü · /e/ as AY against /ɛ/ as EH · /u/ as OO
//
// `ipa` is stored slash-wrapped, as in elision-corpus.ts, so the lesson's
// accessor passes it straight into a section `ipa` field and the density
// validator's ipa-notation rule is satisfied without the lesson re-delimiting
// anything. `respell` is stored WITHOUT brackets; the lesson's `re()` adds them
// in exactly one place.
//
// ── One thing this file deliberately does not mark ─────────────────────────
//
// A liaison blocked by a subject/verb boundary (`les enfants || arrivent`) is
// NOT written with ' | '. In sons.08 that mark means a real break, normally a
// comma, and reusing it for a boundary the page does not show would teach the
// learner to look for a comma that is not there. The block shows as what it
// actually is: no tie, and a capitalised syllable ending the group. The `notes`
// field says why.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';
import { unitRef } from './_unit-ref.ts';

/** The tie character sons.10 uses for a liaison. Renders as a low underscore on
 *  a Pixel 6 (a pre-existing defect that already affects 213 shipped liaison
 *  items); reused here rather than replaced, because inventing a second tie
 *  would make this the one lesson whose notation nobody has seen. */
export const TIE = '‿';

/** The five rules the unit's canDo names. Order is teaching order, not
 *  alphabetical: it is the order the pipeline applies them in. */
export const RULES = ['rythme', 'elision', 'liaison', 'muettes', 'nasales'] as const;
export type Rule = (typeof RULES)[number];

/** Which teaching family. Drives the drill pools and the deckTranche slices so
 *  neither has to restate a word list.
 *
 *  contrast  a minimal pair: the same letters, two behaviours
 *  blocked   a rule that could fire and does not, and the reason why
 *  join      two or three joins inside one rhythm group
 *  pipeline  a real break, then the joins inside it, then the push
 *  silence   what survives when neither elision nor liaison fires
 */
export type Family = 'contrast' | 'blocked' | 'join' | 'pipeline' | 'silence';

export type MasterclassItem = Omit<Item, 'drills' | 'tags'> & {
  /** The rules this entry exercises, including by blocking them. Two or more,
   *  always: see the header. */
  rules: Rule[];
  family: Family;
  /** The other half of a minimal pair, by id. Null on entries that stand alone.
   *  Authored rather than inferred, because "these two differ in exactly one
   *  thing" is a teaching claim and not something a script can check. */
  pair: string | null;
  /** Descriptive tags beyond the rule names. `rules` is merged into `tags` by
   *  toItem(), so the shipped row carries both. */
  extra: string[];
  drills: Item['drills'];
};

// Drill pools. A sentence carries 'sentence' so the sentence drill can select
// it, and 'flashcard'/'voiceflash' so a deck-only entry released by a tranche
// is actually servable. An entry whose drills name no drill that can reach it
// is dead weight, and sons-09-masterclass.test.ts fails on it.
const S: Item['drills'] = ['sentence', 'review', 'flashcard', 'voiceflash'];
const SD: Item['drills'] = ['sentence', 'review', 'flashcard', 'voiceflash', 'dictation'];
const P: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const PD: Item['drills'] = ['flashcard', 'voiceflash', 'review', 'dictation'];

/** The lesson's 56 authored entries.
 *
 *  Sequence numbers are stable and must not be renumbered: they are the SRS key
 *  and every attempt ever logged hangs off them. Append new entries at the end.
 *  Pairs are adjacent on purpose, so a change to one half is visible next to
 *  the other. */
export const MASTERCLASS: MasterclassItem[] = [
  // ── contrast · the same letter, two fates ────────────────────────────────
  //
  // The deepest collision in the system, and the one no earlier lesson could
  // show: sons.06 taught that a final consonant is silent, sons.10 taught that
  // it comes back before a vowel. Both are true of the SAME letter, and which
  // one applies is decided by the phrase, not by the word.
  { id: 'fr.sons.masterclass.001', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'les amis', en: 'the friends', ipa: '/le.z‿a.mi/', respell: 'lay-z‿a-MEE',
    rules: ['liaison', 'muettes'], family: 'contrast', pair: 'fr.sons.masterclass.002',
    extra: ['liaison-z', 'plural-s'], drills: PD, audioRef: null, version: 1,
    notes: 'The S of les is silent everywhere else in French. A vowel follows, so it sounds, as a Z.' },
  { id: 'fr.sons.masterclass.002', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'les copains', en: 'the mates', ipa: '/le kɔ.pɛ̃/', respell: 'lay ko-PAⁿ',
    rules: ['muettes', 'nasales'], family: 'contrast', pair: 'fr.sons.masterclass.001',
    extra: ['no-liaison', 'plural-s'], drills: PD, audioRef: null, version: 1,
    notes: 'Same S, same determiner. A consonant follows, so nothing wakes and both S sounds stay away.' },

  { id: 'fr.sons.masterclass.003', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'un petit ami', en: 'a boyfriend', ipa: '/œ̃ pə.ti.t‿a.mi/', respell: 'uhⁿ puh-tee-t‿a-MEE',
    rules: ['liaison', 'muettes', 'nasales'], family: 'contrast', pair: 'fr.sons.masterclass.004',
    extra: ['liaison-t', 'after-adjective'], drills: PD, audioRef: null, version: 1,
    notes: 'The T of petit is written and never said. Here a vowel follows it, so it says itself.' },
  { id: 'fr.sons.masterclass.004', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'un petit chien', en: 'a small dog', ipa: '/œ̃ pə.ti ʃjɛ̃/', respell: 'uhⁿ puh-tee SHYAⁿ',
    rules: ['muettes', 'nasales'], family: 'contrast', pair: 'fr.sons.masterclass.003',
    extra: ['no-liaison'], drills: PD, audioRef: null, version: 1,
    notes: 'Same adjective, same T. A consonant follows, so it goes back to being written only.' },

  { id: 'fr.sons.masterclass.005', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'les hôtels', en: 'the hotels', ipa: '/le.z‿o.tɛl/', respell: 'lay-z‿oh-TEL',
    rules: ['liaison', 'muettes'], family: 'contrast', pair: 'fr.sons.masterclass.006',
    extra: ['liaison-z', 'h-muet'], drills: PD, audioRef: null, version: 1,
    notes: 'H muet, so the word opens on a vowel sound and the plural S wakes.' },
  { id: 'fr.sons.masterclass.006', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'les héros', en: 'the heroes', ipa: '/le e.ʁo/', respell: 'lay ay-ROH',
    rules: ['liaison', 'muettes'], family: 'contrast', pair: 'fr.sons.masterclass.005',
    extra: ['h-aspire', 'blocked-liaison'], drills: PD, audioRef: null, version: 1,
    notes: 'H aspiré. Nothing on the page differs from les hôtels, and the liaison is blocked anyway.' },

  { id: 'fr.sons.masterclass.007', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'deux heures', en: 'two hours', ipa: '/dø.z‿œʁ/', respell: 'duh-z‿UHR',
    rules: ['liaison', 'muettes'], family: 'contrast', pair: 'fr.sons.masterclass.008',
    extra: ['liaison-z', 'h-muet'], drills: PD, audioRef: null, version: 1,
    notes: 'The X of deux comes back as a Z, which is what an X does in liaison.' },
  { id: 'fr.sons.masterclass.008', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'deux hiboux', en: 'two owls', ipa: '/dø i.bu/', respell: 'duh ee-BOO',
    rules: ['liaison', 'muettes'], family: 'contrast', pair: 'fr.sons.masterclass.007',
    extra: ['h-aspire', 'blocked-liaison'], drills: PD, audioRef: null, version: 1,
    notes: 'H aspiré blocks it, so both X stay silent and a small gap opens where the Z would have been.' },

  { id: 'fr.sons.masterclass.009', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'ils ont', en: 'they have', ipa: '/il.z‿ɔ̃/', respell: 'eel-z‿OHⁿ',
    rules: ['liaison', 'muettes', 'nasales'], family: 'contrast', pair: 'fr.sons.masterclass.010',
    extra: ['liaison-z', 'after-pronoun'], drills: PD, audioRef: null, version: 1,
    notes: 'Two syllables. The S of ils sounds, and ont is one nasal vowel with no T at the end of it.' },
  { id: 'fr.sons.masterclass.010', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'ils sont', en: 'they are', ipa: '/il sɔ̃/', respell: 'eel SOHⁿ',
    rules: ['muettes', 'nasales'], family: 'contrast', pair: 'fr.sons.masterclass.009',
    extra: ['no-liaison'], drills: PD, audioRef: null, version: 1,
    notes: 'Two syllables again, and the only audible difference between them is the Z.' },

  { id: 'fr.sons.masterclass.011', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'un grand arbre', en: 'a big tree', ipa: '/œ̃ ɡʁɑ̃.t‿aʁbʁ/', respell: 'uhⁿ grahⁿ-t‿ARBR',
    rules: ['liaison', 'muettes', 'nasales'], family: 'contrast', pair: 'fr.sons.masterclass.012',
    extra: ['liaison-t', 'after-adjective', 'devoicing'], drills: PD, audioRef: null, version: 1,
    notes: 'The D wakes as a T. A liaison consonant is not always the letter you see.' },
  { id: 'fr.sons.masterclass.012', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'un grand parc', en: 'a big park', ipa: '/œ̃ ɡʁɑ̃ paʁk/', respell: 'uhⁿ grahⁿ PARK',
    rules: ['muettes', 'nasales'], family: 'contrast', pair: 'fr.sons.masterclass.011',
    extra: ['no-liaison'], drills: PD, audioRef: null, version: 1,
    notes: 'Same D, asleep. The vowel of grand stays nasal either way.' },

  { id: 'fr.sons.masterclass.013', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'un bon ami', en: 'a good friend', ipa: '/œ̃ bɔ̃.n‿a.mi/', respell: 'uhⁿ bohⁿ-n‿a-MEE',
    rules: ['liaison', 'muettes', 'nasales'], family: 'contrast', pair: 'fr.sons.masterclass.014',
    extra: ['liaison-n', 'after-adjective'], drills: PD, audioRef: null, version: 1,
    notes: 'The N does two jobs at once: it keeps the vowel nasal AND it links. It is not spent on either.' },
  { id: 'fr.sons.masterclass.014', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'un bon copain', en: 'a good mate', ipa: '/œ̃ bɔ̃ kɔ.pɛ̃/', respell: 'uhⁿ bohⁿ ko-PAⁿ',
    rules: ['muettes', 'nasales'], family: 'contrast', pair: 'fr.sons.masterclass.013',
    extra: ['no-liaison'], drills: PD, audioRef: null, version: 1,
    notes: 'Three nasal vowels and not one audible N. The N only surfaces when a vowel needs it.' },

  // ── blocked · a rule that could fire and does not ────────────────────────
  { id: 'fr.sons.masterclass.015', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Les enfants arrivent.', en: 'The children are arriving.',
    ipa: '/le.z‿ɑ̃.fɑ̃ a.ʁiv/', respell: 'lay-z‿ahⁿ-FAHⁿ a-REEV',
    rules: ['liaison', 'muettes', 'nasales', 'rythme'], family: 'blocked', pair: 'fr.sons.masterclass.016',
    extra: ['liaison-z', 'blocked-liaison', 'subject-verb'], drills: SD, audioRef: null, version: 1,
    notes: 'One S links and one does not. A noun subject closes its group before the verb, and no join crosses that edge.' },
  { id: 'fr.sons.masterclass.016', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Ils arrivent en retard.', en: 'They are arriving late.',
    ipa: '/il.z‿a.ʁiv ɑ̃ ʁə.taʁ/', respell: 'eel-z‿a-REEV ahⁿ ruh-TAR',
    rules: ['liaison', 'muettes', 'nasales'], family: 'blocked', pair: 'fr.sons.masterclass.015',
    extra: ['liaison-z', 'after-pronoun'], drills: SD, audioRef: null, version: 1,
    notes: 'A pronoun subject does not close a group, so here the S does link.' },

  { id: 'fr.sons.masterclass.017', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Mes amis parlent bien.', en: 'My friends speak well.',
    ipa: '/me.z‿a.mi paʁl bjɛ̃/', respell: 'may-z‿a-MEE parl BYAⁿ',
    rules: ['liaison', 'muettes', 'nasales'], family: 'blocked', pair: null,
    extra: ['liaison-z', 'blocked-liaison', 'subject-verb'], drills: SD, audioRef: null, version: 1,
    notes: 'The S of amis is followed by a consonant anyway, so two separate reasons keep it quiet.' },

  { id: 'fr.sons.masterclass.018', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Le petit hôtel est ouvert.', en: 'The small hotel is open.',
    ipa: '/lə pə.ti.t‿o.tɛl ɛ.t‿u.vɛʁ/', respell: 'luh puh-tee-t‿oh-TEL eh-t‿oo-VEHR',
    rules: ['liaison', 'muettes'], family: 'blocked', pair: 'fr.sons.masterclass.019',
    extra: ['liaison-t', 'h-muet'], drills: SD, audioRef: null, version: 1,
    notes: 'Two sleeping T, both woken, in one short sentence.' },
  { id: 'fr.sons.masterclass.019', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Le petit héros est parti.', en: 'The little hero has left.',
    ipa: '/lə pə.ti e.ʁo ɛ paʁ.ti/', respell: 'luh puh-tee ay-ROH eh par-TEE',
    rules: ['liaison', 'muettes'], family: 'blocked', pair: 'fr.sons.masterclass.018',
    extra: ['h-aspire', 'blocked-liaison'], drills: SD, audioRef: null, version: 1,
    notes: 'The same two T, both asleep: an h aspiré blocks the first and a consonant blocks the second.' },

  { id: 'fr.sons.masterclass.020', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "Il n'a pas encore mangé.", en: 'He has not eaten yet.',
    ipa: '/il na pa.z‿ɑ̃.kɔʁ mɑ̃.ʒe/', respell: 'eel na pa-z‿ahⁿ-kohr mahⁿ-ZHAY',
    rules: ['elision', 'liaison', 'muettes', 'nasales'], family: 'blocked', pair: 'fr.sons.masterclass.021',
    extra: ['liaison-z', 'after-adverb'], drills: SD, audioRef: null, version: 1,
    notes: "Three rules on four words: ne elides, the S of pas wakes as a Z, and mangé keeps its silent E." },
  { id: 'fr.sons.masterclass.021', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "Il n'a pas mangé.", en: 'He has not eaten.',
    ipa: '/il na pa mɑ̃.ʒe/', respell: 'eel na pa mahⁿ-ZHAY',
    rules: ['elision', 'muettes', 'nasales'], family: 'blocked', pair: 'fr.sons.masterclass.020',
    extra: ['no-liaison'], drills: SD, audioRef: null, version: 1,
    notes: 'Remove one word and the Z disappears with it. The elision is untouched: it never depended on encore.' },

  { id: 'fr.sons.masterclass.022', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "C'est un très bon exemple.", en: 'That is a very good example.',
    ipa: '/sɛ.t‿œ̃ tʁɛ bɔ̃.n‿ɛɡ.zɑ̃pl/', respell: 'seh-t‿uhⁿ treh bohⁿ-n‿eg-ZAHⁿPL',
    rules: ['elision', 'liaison', 'muettes', 'nasales'], family: 'blocked', pair: null,
    extra: ['liaison-t', 'liaison-n', 'blocked-liaison'], drills: SD, audioRef: null, version: 1,
    notes: 'The S of très sits between two liaisons and makes none, because bon opens on a consonant.' },

  { id: 'fr.sons.masterclass.023', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "Prenez un grand verre d'eau.", en: 'Have a large glass of water.',
    ipa: '/pʁə.ne.z‿œ̃ ɡʁɑ̃ vɛʁ do/', respell: 'pruh-nay-z‿uhⁿ grahⁿ vehr DOH',
    rules: ['elision', 'liaison', 'muettes', 'nasales'], family: 'blocked', pair: null,
    extra: ['liaison-z', 'blocked-liaison'], drills: SD, audioRef: null, version: 1,
    notes: 'The Z of prenez wakes and the D of grand does not, four words apart, for the same one reason.' },

  { id: 'fr.sons.masterclass.024', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "Je n'ai pas d'amis ici.", en: 'I have no friends here.',
    ipa: '/ʒə ne pa da.mi i.si/', respell: 'zhuh nay pa da-mee ee-SEE',
    rules: ['elision', 'muettes'], family: 'blocked', pair: null,
    extra: ['no-liaison', 'hiatus'], drills: SD, audioRef: null, version: 1,
    notes: 'Two elisions, then two vowels meeting with nothing to join them. French tolerates that gap: no rule applies.' },

  // ── join · two or three joins inside one rhythm group ────────────────────
  { id: 'fr.sons.masterclass.025', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "C'est un ancien hôtel.", en: 'It is a former hotel.',
    ipa: '/sɛ.t‿œ̃.n‿ɑ̃.sjɛ̃.n‿o.tɛl/', respell: 'seh-t‿uhⁿ-n‿ahⁿ-syaⁿ-n‿oh-TEL',
    rules: ['elision', 'liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-t', 'liaison-n', 'h-muet'], drills: SD, audioRef: null, version: 1,
    notes: 'Four written words, one unbroken run of syllables. Every join in it is compulsory.' },
  { id: 'fr.sons.masterclass.026', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'On est en avance.', en: 'We are early.',
    ipa: '/ɔ̃.n‿ɛ.t‿ɑ̃.n‿a.vɑ̃s/', respell: 'ohⁿ-n‿eh-t‿ahⁿ-n‿a-VAHⁿS',
    rules: ['liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-n', 'liaison-t'], drills: SD, audioRef: null, version: 1,
    notes: 'Three liaisons in four words, and not one of the linking letters is audible on its own.' },
  { id: 'fr.sons.masterclass.027', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Vous avez un accent charmant.', en: 'You have a charming accent.',
    ipa: '/vu.z‿a.ve.z‿œ̃.n‿ak.sɑ̃ ʃaʁ.mɑ̃/', respell: 'voo-z‿a-vay-z‿uhⁿ-n‿ak-SAHⁿ shar-MAHⁿ',
    rules: ['liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-z', 'liaison-n'], drills: SD, audioRef: null, version: 1,
    notes: 'Three liaisons, then a stop: the T of accent has a consonant after it and stays down.' },
  { id: 'fr.sons.masterclass.028', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "Qu'est-ce qu'on attend ?", en: 'What are we waiting for?',
    ipa: '/kɛs.kɔ̃.n‿a.tɑ̃/', respell: 'kehs-kohⁿ-n‿a-TAHⁿ',
    rules: ['elision', 'liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-n', 'question'], drills: SD, audioRef: null, version: 1,
    notes: 'Four written words and four spoken syllables. Two elisions took two of them away.' },
  { id: 'fr.sons.masterclass.029', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Nous avons deux enfants.', en: 'We have two children.',
    ipa: '/nu.z‿a.vɔ̃ dø.z‿ɑ̃.fɑ̃/', respell: 'noo-z‿a-vohⁿ duh-z‿ahⁿ-FAHⁿ',
    rules: ['liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-z'], drills: SD, audioRef: null, version: 1,
    notes: 'An S and an X, both silent as written, both saying Z here.' },
  { id: 'fr.sons.masterclass.030', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Nous en avons deux.', en: 'We have two of them.',
    ipa: '/nu.z‿ɑ̃.n‿a.vɔ̃ dø/', respell: 'noo-z‿ahⁿ-n‿a-vohⁿ DUH',
    rules: ['liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-z', 'liaison-n'], drills: SD, audioRef: null, version: 1,
    notes: 'The same words rearranged, and the X of deux goes quiet because nothing follows it.' },
  { id: 'fr.sons.masterclass.031', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'mon ancien appartement', en: 'my former flat',
    ipa: '/mɔ̃.n‿ɑ̃.sjɛ̃.n‿a.paʁ.tə.mɑ̃/', respell: 'mohⁿ-n‿ahⁿ-syaⁿ-n‿a-par-tuh-MAHⁿ',
    rules: ['liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-n', 'after-possessive'], drills: PD, audioRef: null, version: 1,
    notes: 'Four nasal vowels and two N doing double duty. Say it as one word or it falls apart.' },
  { id: 'fr.sons.masterclass.032', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'en un instant', en: 'in an instant',
    ipa: '/ɑ̃.n‿œ̃.n‿ɛ̃s.tɑ̃/', respell: 'ahⁿ-n‿uhⁿ-n‿aⁿs-TAHⁿ',
    rules: ['liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-n'], drills: PD, audioRef: null, version: 1,
    notes: 'Four nasal vowels in three words, joined by two N that belong to neither side.' },
  { id: 'fr.sons.masterclass.033', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'On en a assez.', en: 'We have had enough.',
    ipa: '/ɔ̃.n‿ɑ̃.n‿a a.se/', respell: 'ohⁿ-n‿ahⁿ-n‿a a-SAY',
    rules: ['liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-n', 'hiatus'], drills: SD, audioRef: null, version: 1,
    notes: 'Two joins, then two vowels sitting side by side untouched. a has no sleeping consonant to lend.' },
  { id: 'fr.sons.masterclass.034', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "C'est un très bel appartement.", en: 'It is a very nice flat.',
    ipa: '/sɛ.t‿œ̃ tʁɛ bɛ.l‿a.paʁ.tə.mɑ̃/', respell: 'seh-t‿uhⁿ treh beh-l‿a-par-tuh-MAHⁿ',
    rules: ['elision', 'liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-l', 'liaison-t'], drills: SD, audioRef: null, version: 1,
    notes: 'beau became bel before the vowel. French changed the word rather than allow the gap.' },
  { id: 'fr.sons.masterclass.035', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Elle est arrivée en avance.', en: 'She arrived early.',
    ipa: '/ɛ.l‿ɛ.t‿a.ʁi.ve ɑ̃.n‿a.vɑ̃s/', respell: 'eh-l‿eh-t‿a-ree-VAY ahⁿ-n‿a-VAHⁿS',
    rules: ['liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-l', 'liaison-t', 'liaison-n'], drills: SD, audioRef: null, version: 1,
    notes: 'Three different linking consonants, one sentence. The ée at the end contributes nothing at all.' },
  { id: 'fr.sons.masterclass.036', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Ils habitent en Angleterre.', en: 'They live in England.',
    ipa: '/il.z‿a.bit ɑ̃.n‿ɑ̃ɡ.lə.tɛʁ/', respell: 'eel-z‿a-BEET ahⁿ-n‿ahⁿ-gluh-TEHR',
    rules: ['liaison', 'muettes', 'nasales'], family: 'join', pair: null,
    extra: ['liaison-z', 'liaison-n', 'h-muet'], drills: SD, audioRef: null, version: 1,
    notes: 'habitent ends in four written letters that make no sound. The Z in front of it makes plenty.' },
  { id: 'fr.sons.masterclass.037', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Tout est prêt.', en: 'Everything is ready.',
    ipa: '/tu.t‿ɛ pʁɛ/', respell: 'too-t‿eh PREH',
    rules: ['liaison', 'muettes'], family: 'join', pair: 'fr.sons.masterclass.038',
    extra: ['liaison-t'], drills: SD, audioRef: null, version: 1,
    notes: 'Three words, three final consonants, and exactly one of them is heard.' },
  { id: 'fr.sons.masterclass.038', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Tout va bien.', en: 'Everything is fine.',
    ipa: '/tu va bjɛ̃/', respell: 'too va BYAⁿ',
    rules: ['muettes', 'nasales'], family: 'join', pair: 'fr.sons.masterclass.037',
    extra: ['no-liaison'], drills: SD, audioRef: null, version: 1,
    notes: 'Same tout, and now none of them is heard.' },

  // ── pipeline · a real break, then the joins inside it, then the push ─────
  { id: 'fr.sons.masterclass.039', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "Le matin, les enfants vont à l'école.", en: 'In the morning, the children go to school.',
    ipa: "/lə ma.tɛ̃ | le.z‿ɑ̃.fɑ̃ vɔ̃.t‿a le.kɔl/", respell: "luh ma-TAⁿ | lay-z‿ahⁿ-FAHⁿ vohⁿ-t‿a lay-KOL",
    rules: ['rythme', 'elision', 'liaison', 'muettes', 'nasales'], family: 'pipeline', pair: null,
    extra: ['liaison-z', 'liaison-t', 'blocked-liaison', 'all-five'], drills: SD, audioRef: null, version: 1,
    notes: 'All five rules, in order: a break, then a join made, a join refused, a join made, and a push at each end.' },
  { id: 'fr.sons.masterclass.040', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Quand il arrive, tout le monde est content.', en: 'When he arrives, everyone is happy.',
    ipa: '/kɑ̃.t‿i.la.ʁiv | tu lə mɔ̃.d‿ɛ kɔ̃.tɑ̃/', respell: 'kahⁿ-t‿ee-la-REEV | too luh mohⁿ-d‿eh kohⁿ-TAHⁿ',
    rules: ['rythme', 'liaison', 'muettes', 'nasales'], family: 'pipeline', pair: null,
    extra: ['liaison-t', 'devoicing'], drills: SD, audioRef: null, version: 1,
    notes: 'The D of quand says T and the D of monde says D. One was asleep and one was already awake.' },
  { id: 'fr.sons.masterclass.041', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Ce sont mes amis, ils habitent en ville.', en: 'These are my friends, they live in town.',
    ipa: '/sə sɔ̃ me.z‿a.mi | il.z‿a.bit ɑ̃ vil/', respell: 'suh sohⁿ may-z‿a-MEE | eel-z‿a-beet ahⁿ VEEL',
    rules: ['rythme', 'liaison', 'muettes', 'nasales'], family: 'pipeline', pair: null,
    extra: ['liaison-z', 'h-muet'], drills: SD, audioRef: null, version: 1,
    notes: 'Two groups, one Z each. Nothing joins across the comma, however fast you say it.' },
  { id: 'fr.sons.masterclass.042', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "On arrive à l'heure, comme d'habitude.", en: 'We arrive on time, as usual.',
    ipa: '/ɔ̃.n‿a.ʁi.v‿a lœʁ | kɔm da.bi.tyd/', respell: 'ohⁿ-n‿a-ree-v‿a LUHR | kom da-bee-TÜD',
    rules: ['rythme', 'elision', 'liaison', 'muettes', 'nasales'], family: 'pipeline', pair: null,
    extra: ['liaison-n', 'liaison-v', 'all-five'], drills: SD, audioRef: null, version: 1,
    notes: 'All five again. The V of arrive was never silent, so it simply slides onto the next word.' },
  { id: 'fr.sons.masterclass.043', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "Après le dîner, on prend un verre d'eau.", en: 'After dinner, we have a glass of water.',
    ipa: '/a.pʁɛ lə di.ne | ɔ̃ pʁɑ̃.t‿œ̃ vɛʁ do/', respell: 'a-preh luh dee-NAY | ohⁿ prahⁿ-t‿uhⁿ vehr DOH',
    rules: ['rythme', 'elision', 'liaison', 'muettes', 'nasales'], family: 'pipeline', pair: null,
    extra: ['liaison-t', 'devoicing', 'all-five'], drills: SD, audioRef: null, version: 1,
    notes: 'The S of après is next to a consonant and stays down. One word later a D wakes as a T.' },
  { id: 'fr.sons.masterclass.044', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Quand on est en retard, tout le monde attend.', en: 'When we are late, everyone waits.',
    ipa: '/kɑ̃.t‿ɔ̃.n‿ɛ.t‿ɑ̃ ʁə.taʁ | tu lə mɔ̃.d‿a.tɑ̃/',
    respell: 'kahⁿ-t‿ohⁿ-n‿eh-t‿ahⁿ ruh-TAR | too luh mohⁿ-d‿a-TAHⁿ',
    rules: ['rythme', 'liaison', 'muettes', 'nasales'], family: 'pipeline', pair: null,
    extra: ['liaison-t', 'liaison-n', 'showcase'], drills: SD, audioRef: null, version: 1,
    notes: 'Four joins, one break, five nasal vowels, and two final D that say nothing at the end of it.' },
  { id: 'fr.sons.masterclass.045', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Il est tard, mais tout va bien.', en: 'It is late, but everything is fine.',
    ipa: '/i.lɛ taʁ | mɛ tu va bjɛ̃/', respell: 'ee-leh TAR | meh too va BYAⁿ',
    rules: ['rythme', 'muettes', 'nasales'], family: 'pipeline', pair: null,
    extra: ['no-liaison'], drills: SD, audioRef: null, version: 1,
    notes: 'Six silent final letters and no liaison anywhere. Silence is what the system does by default.' },
  { id: 'fr.sons.masterclass.046', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Ils sont partis très tôt, sans nous attendre.', en: 'They left very early, without waiting for us.',
    ipa: '/il sɔ̃ paʁ.ti tʁɛ to | sɑ̃ nu.z‿a.tɑ̃dʁ/', respell: 'eel sohⁿ par-tee treh TOH | sahⁿ noo-z‿a-TAHⁿDR',
    rules: ['rythme', 'liaison', 'muettes', 'nasales'], family: 'pipeline', pair: 'fr.sons.masterclass.050',
    extra: ['liaison-z', 'after-pronoun'], drills: SD, audioRef: null, version: 1,
    notes: 'Five silent S before the comma and one sounding one after it.' },
  { id: 'fr.sons.masterclass.047', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "C'est trop tôt, il n'est pas encore arrivé.", en: 'It is too early, he has not arrived yet.',
    ipa: '/sɛ tʁo to | il nɛ pa.z‿ɑ̃.kɔ.ʁ‿a.ʁi.ve/', respell: 'seh troh TOH | eel neh pa-z‿ahⁿ-ko-r‿a-ree-VAY',
    rules: ['rythme', 'elision', 'liaison', 'muettes', 'nasales'], family: 'pipeline', pair: null,
    extra: ['liaison-z', 'all-five'], drills: SD, audioRef: null, version: 1,
    notes: 'Two elisions, one liaison, one slide, one break. The second group runs seven syllables without stopping.' },
  { id: 'fr.sons.masterclass.048', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Un ami arrive, les autres attendent.', en: 'One friend arrives, the others wait.',
    ipa: '/œ̃.n‿a.mi a.ʁiv | le.z‿otʁ a.tɑ̃d/', respell: 'uhⁿ-n‿a-MEE a-REEV | lay-z‿OHTR a-TAHⁿD',
    rules: ['rythme', 'liaison', 'muettes', 'nasales'], family: 'pipeline', pair: null,
    extra: ['liaison-n', 'liaison-z', 'blocked-liaison', 'subject-verb'], drills: SD, audioRef: null, version: 1,
    notes: 'Two joins made in front of the subject, two refused behind it. The pattern is the same on both sides of the comma.' },

  // ── silence · what survives when neither elision nor liaison fires ───────
  { id: 'fr.sons.masterclass.049', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Vous êtes prêts ?', en: 'Are you ready?',
    ipa: '/vu.z‿ɛt pʁɛ/', respell: 'voo-z‿eht PREH',
    rules: ['liaison', 'muettes'], family: 'silence', pair: null,
    extra: ['liaison-z', 'question'], drills: SD, audioRef: null, version: 1,
    notes: 'Three plural S. The first one sounds and the other two do not.' },
  { id: 'fr.sons.masterclass.050', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Ils sont partis très tôt.', en: 'They left very early.',
    ipa: '/il sɔ̃ paʁ.ti tʁɛ to/', respell: 'eel sohⁿ par-tee treh TOH',
    rules: ['muettes', 'nasales'], family: 'silence', pair: 'fr.sons.masterclass.046',
    extra: ['no-liaison'], drills: SD, audioRef: null, version: 1,
    notes: 'Five words, five silent endings, one nasal vowel, and no join available anywhere in it.' },
  { id: 'fr.sons.masterclass.051', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "C'est trop tôt.", en: 'It is too early.',
    ipa: '/sɛ tʁo to/', respell: 'seh troh TOH',
    rules: ['elision', 'muettes'], family: 'silence', pair: null,
    extra: ['no-liaison'], drills: SD, audioRef: null, version: 1,
    notes: 'The elision is compulsory and the liaison is impossible. Both decisions were made by the next sound.' },
  { id: 'fr.sons.masterclass.052', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: "Il n'y a plus d'eau ici.", en: 'There is no more water here.',
    ipa: '/il nja ply do i.si/', respell: 'eel nya plü doh ee-SEE',
    rules: ['elision', 'muettes'], family: 'silence', pair: null,
    extra: ['no-liaison', 'hiatus'], drills: SD, audioRef: null, version: 1,
    notes: 'Two elisions and a silent S on plus, which is the S that would have linked if a vowel had followed.' },
  { id: 'fr.sons.masterclass.053', kind: 'phrase', level: 'sons', theme: 'masterclass',
    fr: 'deux hommes', en: 'two men',
    ipa: '/dø.z‿ɔm/', respell: 'duh-z‿OM',
    rules: ['liaison', 'muettes'], family: 'silence', pair: null,
    extra: ['liaison-z', 'h-muet'], drills: PD, audioRef: null, version: 1,
    notes: 'The M at the end is a real consonant, not a nasal vowel: homme has two of them written and one said.' },
  { id: 'fr.sons.masterclass.054', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Elle est en retard.', en: 'She is late.',
    ipa: '/ɛ.l‿ɛ.t‿ɑ̃ ʁə.taʁ/', respell: 'eh-l‿eh-t‿ahⁿ ruh-TAR',
    rules: ['liaison', 'muettes', 'nasales'], family: 'silence', pair: null,
    extra: ['liaison-l', 'liaison-t'], drills: SD, audioRef: null, version: 1,
    notes: 'Four words, two joins, and a final D that nothing can wake because the sentence stops there.' },
  { id: 'fr.sons.masterclass.055', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Elle est partie sans rien dire.', en: 'She left without saying anything.',
    ipa: '/ɛ.l‿ɛ paʁ.ti sɑ̃ ʁjɛ̃ diʁ/', respell: 'eh-l‿eh par-tee sahⁿ ryaⁿ DEER',
    rules: ['liaison', 'muettes', 'nasales'], family: 'silence', pair: null,
    extra: ['liaison-l', 'no-liaison'], drills: SD, audioRef: null, version: 1,
    notes: 'One join at the front, then five words of silence at the ends. The T of est has a consonant after it.' },
  { id: 'fr.sons.masterclass.056', kind: 'sentence', level: 'sons', theme: 'masterclass',
    fr: 'Ils ont un enfant.', en: 'They have a child.',
    ipa: '/il.z‿ɔ̃.t‿œ̃.n‿ɑ̃.fɑ̃/', respell: 'eel-z‿ohⁿ-t‿uhⁿ-n‿ahⁿ-FAHⁿ',
    rules: ['liaison', 'muettes', 'nasales'], family: 'silence', pair: null,
    extra: ['liaison-z', 'liaison-t', 'liaison-n', 'showcase'], drills: SD, audioRef: null, version: 1,
    notes: 'Four written words, six spoken syllables, three joins and four nasal vowels. Nothing in it may be paused.' },
];

/* ─── Reuse ───────────────────────────────────────────────────────────────── */

/** Items that already exist and already ship, referenced BY ID from the lesson.
 *
 *  Nothing about them is changed here: no re-authoring, no curation, no update
 *  statement. The lesson names them in `practice`, `dictation` and drill pools,
 *  where the renderer resolves them from the corpus at runtime, so this lesson
 *  never restates a transcription it does not own.
 *
 *  `why` is the reason this specific item earns its place. sons-09's test
 *  checks every id still resolves in the seed AND that its `fr` is unchanged,
 *  because a reused item is content this lesson depends on and does not
 *  control. */
export const REUSED: { id: string; fr: string; why: string }[] = [
  { id: 'fr.sons.rythme.132', fr: 'En hiver, les jours sont courts.',
    why: 'A break, a liaison inside the first group, and three silent endings in the second.' },
  { id: 'fr.sons.rythme.136', fr: 'Il parle doucement, mais tout le monde écoute.',
    why: 'The D of monde slides onto écoute across a word boundary but never across the comma.' },
  { id: 'fr.sons.rythme.141', fr: 'En été, on mange dehors, sur la terrasse.',
    why: 'Three groups, two breaks, and a liaison that survives only inside the first one.' },
  { id: 'fr.sons.rythme.152', fr: 'Il pleut depuis ce matin, sans arrêt.',
    why: 'The S of sans wakes after the break, which shows a break does not silence what follows it.' },
  { id: 'fr.sons.rythme.153', fr: 'Nous mangeons tôt, vers six heures.',
    why: 'six heures is the numeral case: the X says Z here and nothing at all in six euros.' },
  { id: 'fr.sons.rythme.164', fr: 'Le repas est prêt, tout le monde arrive.',
    why: 'est prêt makes no liaison and monde arrive makes a join, eight syllables apart.' },
  { id: 'fr.sons.rythme.165', fr: 'Les feuilles tombent, le vent les emporte.',
    why: 'The T of vent stays down and the S of les wakes, in the same group.' },
  { id: 'fr.sons.rythme.168', fr: 'On mange, les enfants.',
    why: 'The shortest two-group item in the corpus, and the clearest place to hear a break.' },
  { id: 'fr.sons.rythme.092', fr: "Est-ce que vous habitez près d'ici ?",
    why: 'An elision and a liaison in one rising question, with près keeping its S.' },
  { id: 'fr.sons.rythme.095', fr: 'Vous avez déjà mangé quelque chose aujourd\'hui ?',
    why: 'Thirteen syllables in one group, which is what a phrase with no break sounds like.' },
  { id: 'fr.sons.rythme.126', fr: 'Le matin, je bois mon café tranquillement.',
    why: `The reference item for the break and the push, already used to teach both in ${unitRef('sons.08')}.` },
  { id: 'fr.sons.rythme.129', fr: 'Après le repas, on marche dans le parc.',
    why: 'A break with no join anywhere after it, so the second group is pure rhythm.' },
  { id: 'fr.sons.liaisons.003', fr: "C'est un ange, ce petit.",
    why: 'An elision and two liaisons inside four syllables, then a break onto a silent T.' },
  { id: 'fr.sons.liaisons.013', fr: "C'est un petit appartement, mais il est lumineux.",
    why: 'The T of petit wakes here and stays down in un petit chien, which this lesson also teaches.' },
  { id: 'fr.sons.liaisons.016', fr: "À mon avis, c'est un excellent choix.",
    why: 'Three joins across two groups, with the T of excellent blocked by the C of choix.' },
  { id: 'fr.sons.liaisons.027', fr: 'Alors, quand est-ce qu\'on fête ton anniversaire ?',
    why: 'quand says T and ton says N, which is the whole devoicing lesson in one question.' },
  { id: 'fr.sons.liaisons.048', fr: 'Tout à coup, la lumière s\'est éteinte.',
    why: 'A fixed expression whose liaison is frozen, beside an elision that is still live.' },
  { id: 'fr.sons.liaisons.076', fr: "J'ai deux enfants adorables.",
    why: 'The X of deux wakes and the S of enfants does not, three syllables apart.' },
  { id: 'fr.sons.liaisons.093', fr: "Nos enfants vont au parc aujourd'hui.",
    why: 'The subject/verb block on a noun subject, in an item that already ships.' },
  { id: 'fr.sons.liaisons.154', fr: "Vous habitez près de l'école ?",
    why: 'An h muet taking a liaison, with the elision of l\'école two words later.' },
  { id: 'fr.sons.liaisons.039', fr: "On apprend petit à petit, c'est normal.",
    why: 'The D of apprend and the T of petit both wake, and the second petit keeps its T down.' },
  { id: 'fr.sons.nasales.158', fr: "J'ai un examen important lundi matin.",
    why: 'Five nasal vowels and one liaison, which is the nasal half of this lesson in one line.' },
];

/* ─── Derived views ───────────────────────────────────────────────────────── */

export const BY_ID = new Map(MASTERCLASS.map((w) => [w.id, w]));

/** Every authored id, in file order. */
export const MASTERCLASS_IDS: string[] = MASTERCLASS.map((w) => w.id);

/** Every id the lesson touches: authored plus reused. */
export const ALL_IDS: string[] = [...MASTERCLASS_IDS, ...REUSED.map((r) => r.id)];

export const REUSED_IDS: string[] = REUSED.map((r) => r.id);

/** The ids in one teaching family, in file order. Drives the deckTranche
 *  slices so no tranche has to restate a word list. */
export function familyIds(family: Family): string[] {
  return MASTERCLASS.filter((w) => w.family === family).map((w) => w.id);
}

/** The ids that exercise a given rule. This is what lets a section select
 *  "everything where liaison meets a silent letter" without hand-listing ids,
 *  and what the lesson test asserts rule coverage against. */
export function ruleIds(...rules: Rule[]): string[] {
  return MASTERCLASS.filter((w) => rules.every((r) => w.rules.includes(r))).map((w) => w.id);
}

/** Both halves of every authored minimal pair, in file order, deduplicated.
 *  A pair is symmetric by construction; the batch refuses one that is not. */
export function pairs(): [string, string][] {
  const seen = new Set<string>();
  const out: [string, string][] = [];
  for (const w of MASTERCLASS) {
    if (!w.pair || seen.has(w.id)) continue;
    seen.add(w.id);
    seen.add(w.pair);
    out.push([w.id, w.pair]);
  }
  return out;
}

/** How many of the five rules an entry exercises. */
export const ruleCount = (id: string): number => BY_ID.get(id)?.rules.length ?? 0;

/** The corpus row, as the database and the seed store it. `rules` and `extra`
 *  are merged into `tags`, so nothing in the shipped row depends on a type this
 *  file owns. `pair` and `family` are authoring metadata and do not ship. */
export function toItem(w: MasterclassItem): Item {
  const { rules, family, pair, extra, ...rest } = w;
  return { ...rest, tags: [...rules, family, ...extra] };
}

export default MASTERCLASS;
