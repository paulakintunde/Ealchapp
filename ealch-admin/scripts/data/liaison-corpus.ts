// sons.10 "La liaison" — corpus.
//
// READ THIS BEFORE EDITING.
//
// This file is a CURATION of an existing corpus, not a new one. The 165 items
// fr.sons.liaisons.001-165 were authored earlier and already carry `fr`, `en`
// and an `ipa` in which every liaison is marked with the tie character U+203F
// (‿). They are the most valuable thing in this lesson and they are NOT
// re-authored here. `UPDATES` below only adds what they were missing: tags,
// respell, notes and a correct `drills` array.
//
// The tags are DERIVED FROM THE IPA, not judged by hand. `liaison-z` means the
// item's IPA genuinely contains a /z/ tie. sons-10-liaison.test.ts pins that
// agreement, so a later hand-edit cannot silently mislabel a family.
//
// `NEW` continues from .166 and covers only what the audit proved absent:
//   - liaison INTERDITE (the 165 are 100% obligatoire, so they cannot teach
//     the second half of the canDo: "leave it silent when French forbids it")
//   - word-level anchors (the shortest existing item is three words, so a
//     learner meets les‿amis for the first time inside a sentence)
//   - minimal contrast pairs (same spelling, links in one frame, not the other)
//   - facultative demonstrations, kept as corpus so sons.08 can drill register
//     later. sons.10 NAMES the third state and gives the safe default; it does
//     not drill it. See liaison-lesson.ts s12-optional.
//
// Respell convention is the house one from muettes-corpus.ts: hyphenated
// syllables, stressed syllable capitalised, nasals closed with a superscript n
// (never a plain n/m), /ø œ/ as EU, /y/ as Ü, /e/ as AY, /ɛ/ as EH, /u/ as OO.
// The one addition this lesson makes: a liaison is written into the respell
// with the tie, so the linking consonant is visibly attached to the FOLLOWING
// syllable. les amis is [lay-z‿a-MEE], never [layz a-MEE]. That placement is
// the teaching point.

import type { Item } from '../../../ealch-v2/src/content/schema.ts';

/** Which of the three states this item demonstrates. Drives the drill pools,
 *  the deckTranche slices and the interdite guard; not display copy. */
export type Obligation = 'obligatoire' | 'interdite' | 'facultative';

/** Which linking consonant the item teaches. Derived from the IPA tie, never
 *  typed by hand. `none` is the interdite set: a blocked liaison has no tie. */
export type Family = 'z' | 't' | 'n' | 'l' | 'v' | 'none';

export type LiaisonItem = Omit<Item, 'drills'> & {
  family: Family;
  obligation: Obligation;
  drills: Item['drills'];
};

/** The curation applied to an item that already exists in the database. */
export type LiaisonUpdate = {
  id: string;
  tags: string[];
  family: Family;
  obligation: Obligation;
  drills: Item['drills'];
  respell?: string;
  notes?: string;
};

// Drill pools. The 165 all shipped as ['sentence','review'], which excludes
// them from flashcard, voiceflash and dictation. selectItems SILENTLY skips an
// item whose drills do not name the drill asking for it, so a dictée built on
// an item without 'dictation' renders empty and lesson-contract.test.ts fails.
const S: Item['drills'] = ['sentence', 'review'];
const SD: Item['drills'] = ['sentence', 'review', 'dictation'];
const SF: Item['drills'] = ['sentence', 'review', 'flashcard', 'voiceflash'];
const SFD: Item['drills'] = ['sentence', 'review', 'flashcard', 'voiceflash', 'dictation'];
const W: Item['drills'] = ['flashcard', 'voiceflash', 'review'];
const WD: Item['drills'] = ['flashcard', 'voiceflash', 'review', 'dictation'];

export const TIE = '‿';

/** Every linking consonant marked in an IPA string, in order of appearance.
 *  The tie character sits AFTER the consonant it links: `sɛ.t‿œ̃`. */
export function tiesOf(ipa: string): string[] {
  const out: string[] = [];
  for (let i = 0; i < ipa.length; i++) if (ipa[i] === TIE) out.push(ipa[i - 1]!);
  return out;
}

/** The curation applied to the 165 items that already exist in the database.
 *  Keyed by id: the batch upserts these ON TOP of the existing rows, so fr, en
 *  and ipa are never restated here and so can never be clobbered by a typo.
 *  Generated from the IPA, not typed: see the derivation note at the top. */
export const UPDATES: LiaisonUpdate[] = [
  { id: 'fr.sons.liaisons.001', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: SFD, respell: 'seh-t‿UHⁿ pleh-ZEER' },
  { id: 'fr.sons.liaisons.002', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: SFD, respell: 'seh-t‿ÜN sür-PREEZ' },
  { id: 'fr.sons.liaisons.003', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-n','liaison-obligatoire','fixed-expression','after-determiner'], drills: SF, respell: 'seh-t‿uhⁿ-n‿AHⁿZH SUH puh-TEE' },
  { id: 'fr.sons.liaisons.004', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: SFD, respell: 'seh-t‿UHⁿ day-BÜ' },
  { id: 'fr.sons.liaisons.005', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: SFD, respell: 'seh-t‿ÜN BLAG' },
  { id: 'fr.sons.liaisons.006', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.007', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.008', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S, respell: 'seh-t‿UHⁿ VREH ray-GAL TA SOOP' },
  { id: 'fr.sons.liaisons.009', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S, respell: 'ZHUH KRWA KUH seh-t‿UHⁿ ma-lahⁿ-tahⁿ-DÜ' },
  { id: 'fr.sons.liaisons.010', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.011', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S, respell: 'seh-t‿UHⁿ ka-DOH DUH MA grahⁿ-MEHR' },
  { id: 'fr.sons.liaisons.012', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S, respell: 'frahⁿsh-MAHⁿ seh-t‿ÜN TREH BON noo-VEHL' },
  { id: 'fr.sons.liaisons.013', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.014', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-n','liaison-obligatoire','fixed-expression','after-determiner'], drills: S, respell: 'TÜ veh-RA seh-t‿uhⁿ-n‿ahⁿ-DRWA ma-nyee-FEEK' },
  { id: 'fr.sons.liaisons.015', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.016', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-t','liaison-obligatoire','after-possessive','fixed-expression','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.017', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: SFD, respell: 'kahⁿ-t‿ehs-KOHⁿ MAHⁿZH' },
  { id: 'fr.sons.liaisons.018', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: SD, respell: 'kahⁿ-t‿ehs-KUH TÜ a-REEV' },
  { id: 'fr.sons.liaisons.019', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S, respell: 'kahⁿ-t‿ehs-KUH LUH ma-ga-ZEHⁿ OOVR' },
  { id: 'fr.sons.liaisons.020', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S, respell: 'kahⁿ-t‿ehs-KEEL ruh-VYEHN DUH va-KAHⁿS' },
  { id: 'fr.sons.liaisons.021', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-z','liaison-obligatoire','fixed-expression','after-pronoun'], drills: S, respell: 'kahⁿ-t‿ehs-KUH voo-z‿a-VAY rahⁿ-day-VOO' },
  { id: 'fr.sons.liaisons.022', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S, respell: 'kahⁿ-t‿ehs-KOHⁿ SUH VWA a-LOR' },
  { id: 'fr.sons.liaisons.023', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S, respell: 'dee-MWA kahⁿ-t‿ehs-KUH SA koh-MAHⁿS' },
  { id: 'fr.sons.liaisons.024', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.025', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-n','liaison-obligatoire','fixed-expression','after-possessive'], drills: S, respell: 'kahⁿ-t‿ehs-KEHL PAS sohⁿ-n‿ehg-za-MEHⁿ' },
  { id: 'fr.sons.liaisons.026', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.027', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-n','liaison-obligatoire','fixed-expression','after-possessive'], drills: S },
  { id: 'fr.sons.liaisons.028', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.029', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: SFD, respell: 'too-t‿a-FEH da-KOR' },
  { id: 'fr.sons.liaisons.030', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S, respell: 'WEE SEH too-t‿a-FEH SA' },
  { id: 'fr.sons.liaisons.031', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-t','liaison-obligatoire','after-pronoun','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.032', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.033', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.034', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.035', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: SFD, respell: 'A too-t‿a-LEUR' },
  { id: 'fr.sons.liaisons.036', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-t','liaison-obligatoire','after-pronoun','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.037', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.038', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','after-adjective'], drills: S, respell: 'puh-tee-t‿a-puh-TEE SA VA MYEU' },
  { id: 'fr.sons.liaisons.134', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SFD, respell: 'ehl-z‿a-REEV duh-MEHⁿ' },
  { id: 'fr.sons.liaisons.039', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-t','liaison-obligatoire','after-pronoun','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.040', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.041', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.042', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.043', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.044', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.045', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.046', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S, respell: 'SA VA DUH myeu-z‿ahⁿ-MYEU' },
  { id: 'fr.sons.liaisons.047', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.048', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.049', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.050', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-adjective'], drills: SD, respell: 'boh-n‿a-pay-TEE TOO LUH MOHⁿD' },
  { id: 'fr.sons.liaisons.051', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-n','liaison-obligatoire','after-pronoun','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.052', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: SFD, respell: 'bohⁿ-ZHOOR dok-TEUR koh-mahⁿ-t‿a-lay-VOO' },
  { id: 'fr.sons.liaisons.053', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S, respell: 'koh-mahⁿ-t‿a-lay-VOO duh-PÜEE LA dehr-NYEHR FWA' },
  { id: 'fr.sons.liaisons.054', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire'], drills: SD, respell: 'ee-la-REEV duh-MEHⁿ seh-t‿a-DEER zheu-DEE' },
  { id: 'fr.sons.liaisons.055', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire'], drills: S },
  { id: 'fr.sons.liaisons.056', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','after-determiner'], drills: S, respell: 'MA NYEHS VYEHⁿ da-VWAR vehⁿ-t‿AHⁿ' },
  { id: 'fr.sons.liaisons.057', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','after-determiner'], drills: S, respell: 'EEL SUH koh-NEHS duh-PÜEE vehⁿ-t‿AHⁿ' },
  { id: 'fr.sons.liaisons.058', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'vehⁿ-t‿AHⁿ day-ZHA' },
  { id: 'fr.sons.liaisons.059', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SF, respell: 'MOHⁿ FREHR tra-VAY oh-z‿ay-ta-z‿ü-NEE' },
  { id: 'fr.sons.liaisons.060', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun','after-determiner'], drills: S, respell: 'NOO par-TOHⁿ oh-z‿ay-ta-z‿ü-NEE AHⁿ zhüee-YEH' },
  { id: 'fr.sons.liaisons.061', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-t','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.062', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.063', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-t','liaison-obligatoire','after-pronoun','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.064', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.065', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'lay-z‿ahⁿ-FAHⁿ DOHRM' },
  { id: 'fr.sons.liaisons.066', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'may-z‿a-MEE a-REEV' },
  { id: 'fr.sons.liaisons.067', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'say-z‿wa-ZOH SHAHⁿT' },
  { id: 'fr.sons.liaisons.068', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'lay-z‿a-VYOHⁿ day-KOL' },
  { id: 'fr.sons.liaisons.069', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'a-TAHⁿ uhⁿ-n‿ehⁿs-TAHⁿ' },
  { id: 'fr.sons.liaisons.070', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-possessive'], drills: SFD, respell: 'mohⁿ-n‿a-MEE tra-VAY' },
  { id: 'fr.sons.liaisons.071', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'lay-z‿ay-TWAL BREEY' },
  { id: 'fr.sons.liaisons.072', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-possessive'], drills: SFD, respell: 'tohⁿ-n‿OHⁿKL a-PEHL' },
  { id: 'fr.sons.liaisons.073', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'lay-z‿ehⁿ-vee-TAY a-TAHⁿD' },
  { id: 'fr.sons.liaisons.074', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'lay-z‿a-nee-MOH DOHRM ahⁿ-KOR' },
  { id: 'fr.sons.liaisons.075', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-adjective'], drills: SFD, respell: 'MAY puh-tee-z‿ay-LEHV SHAHⁿT' },
  { id: 'fr.sons.liaisons.076', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'ZHAY deu-z‿ahⁿ-FAHⁿ a-doh-RABL' },
  { id: 'fr.sons.liaisons.077', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-possessive'], drills: SFD, respell: 'sohⁿ-n‿a-tuh-LYAY EH GRAHⁿ' },
  { id: 'fr.sons.liaisons.078', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'lay-z‿OHTR a-REEV byehⁿ-TOH' },
  { id: 'fr.sons.liaisons.079', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun','after-determiner'], drills: SF, respell: 'noo-z‿a-VOHⁿ trwa-z‿ahⁿ-FAHⁿ' },
  { id: 'fr.sons.liaisons.080', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','fixed-expression','after-adjective'], drills: SF, respell: 'seh-t‿UHⁿ puh-tee-t‿a-par-tuh-MAHⁿ' },
  { id: 'fr.sons.liaisons.081', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-possessive'], drills: SFD, respell: 'mohⁿ-n‿ay-KOL OOVR TOH' },
  { id: 'fr.sons.liaisons.082', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SFD, respell: 'say-z‿OM tra-VAY ahⁿ-SAHⁿBL' },
  { id: 'fr.sons.liaisons.083', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SD, respell: 'EEL VAHⁿD day-z‿a-BEE ü-za-ZHAY' },
  { id: 'fr.sons.liaisons.084', family: 'v', obligation: 'obligatoire', tags: ['liaison-v','liaison-obligatoire','after-determiner'], drills: SD, respell: 'LUH VOL DÜR neu-v‿EUR' },
  { id: 'fr.sons.liaisons.085', family: 'l', obligation: 'obligatoire', tags: ['liaison-l','liaison-t','liaison-obligatoire'], drills: SF, respell: 'eh-l‿A UHⁿ puh-tee-t‿a-MEE' },
  { id: 'fr.sons.liaisons.086', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SD, respell: 'may-z‿a-MEE a-BEET AHⁿ VEEL' },
  { id: 'fr.sons.liaisons.087', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire'], drills: SD, respell: 'EEL SHEHRSH UHⁿ grahⁿ-t‿a-par-tuh-MAHⁿ' },
  { id: 'fr.sons.liaisons.088', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-t','liaison-obligatoire','after-possessive','fixed-expression','after-pronoun'], drills: SF, respell: 'tohⁿ-n‿a-nee-vehr-SEHR eh-t‿ahⁿ-n‿a-VREEL' },
  { id: 'fr.sons.liaisons.135', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SFD, respell: 'noo-z‿a-VOHⁿ FRWA' },
  { id: 'fr.sons.liaisons.089', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SD, respell: 'lay-z‿ay-LEHV ay-KOOT LEUR proh-feh-SEUR' },
  { id: 'fr.sons.liaisons.090', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-possessive'], drills: SD, respell: 'sohⁿ-n‿OHⁿKL a-BEET OH kay-BEHK' },
  { id: 'fr.sons.liaisons.091', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun','after-determiner'], drills: SF, respell: 'noo-z‿ehⁿ-vee-TOHⁿ noh-z‿a-MEE dee-MAHⁿSH' },
  { id: 'fr.sons.liaisons.092', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: SD, respell: 'LUH FEELM DÜR trwa-z‿EUR' },
  { id: 'fr.sons.liaisons.093', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S, respell: 'noh-z‿ahⁿ-FAHⁿ VOHⁿ OH PARK oh-zhoor-DÜEE' },
  { id: 'fr.sons.liaisons.094', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-possessive'], drills: S, respell: 'mohⁿ-n‿a-MEE pray-PAR ÜN SOOP SHOD' },
  { id: 'fr.sons.liaisons.095', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S, respell: 'LUH TREHⁿ PAR DAHⁿ deu-z‿EUR' },
  { id: 'fr.sons.liaisons.096', family: 'l', obligation: 'obligatoire', tags: ['liaison-l','liaison-z','liaison-obligatoire'], drills: S, respell: 'eh-l‿a-SHEHT day-z‿oh-RAHⁿZH OH mar-SHAY' },
  { id: 'fr.sons.liaisons.097', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S, respell: 'may-z‿ay-tü-DYAHⁿ POZ boh-KOO DUH kehs-TYOHⁿ' },
  { id: 'fr.sons.liaisons.098', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','after-adjective'], drills: S, respell: 'UHⁿ grahⁿ-t‿ARBR KASH LA fuh-NEHTR' },
  { id: 'fr.sons.liaisons.099', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-n','liaison-obligatoire','after-determiner','after-pronoun'], drills: S, respell: 'lay-z‿oh-TEHL SOHⁿ SHEHR ahⁿ-n‿ay-TAY' },
  { id: 'fr.sons.liaisons.100', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S, respell: 'lay-z‿ay-kü-REUY tra-VEHRS soo-VAHⁿ NOHTR zhar-DEHⁿ' },
  { id: 'fr.sons.liaisons.101', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S, respell: 'MA FEEY A trwa-z‿AHⁿ duh-MEHⁿ' },
  { id: 'fr.sons.liaisons.102', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-possessive'], drills: S },
  { id: 'fr.sons.liaisons.103', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.104', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.105', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.106', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.107', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-l','liaison-obligatoire','after-pronoun','fixed-expression','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.108', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-z','liaison-obligatoire','after-possessive','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.109', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.110', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','fixed-expression'], drills: S },
  { id: 'fr.sons.liaisons.111', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-possessive'], drills: S },
  { id: 'fr.sons.liaisons.136', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SFD, respell: 'voo-z‿a-VAY reh-ZOHⁿ' },
  { id: 'fr.sons.liaisons.112', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-t','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.113', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.114', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire'], drills: S },
  { id: 'fr.sons.liaisons.115', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-n','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.116', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-z','liaison-obligatoire','after-possessive','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.117', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-l','liaison-obligatoire','after-possessive','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.118', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.119', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-n','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.120', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-t','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.121', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.122', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire'], drills: S },
  { id: 'fr.sons.liaisons.123', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-obligatoire','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.124', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.125', family: 't', obligation: 'obligatoire', tags: ['liaison-t','liaison-z','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.126', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-t','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.127', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.128', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner','after-adjective'], drills: S },
  { id: 'fr.sons.liaisons.129', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-determiner'], drills: S },
  { id: 'fr.sons.liaisons.130', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SFD, respell: 'noo-z‿a-ree-VOHⁿ byehⁿ-TOH' },
  { id: 'fr.sons.liaisons.131', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SFD, respell: 'voo-z‿EHT PREH' },
  { id: 'fr.sons.liaisons.132', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'eel-z‿OHⁿ FEHⁿ' },
  { id: 'fr.sons.liaisons.133', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'ohⁿ-n‿A SWAF' },
  { id: 'fr.sons.liaisons.137', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'ohⁿ-n‿a-VAHⁿS lahⁿt-MAHⁿ' },
  { id: 'fr.sons.liaisons.138', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'eel-z‿a-BEET ee-SEE' },
  { id: 'fr.sons.liaisons.139', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'noo-z‿eh-MOHⁿ LUH ka-FAY' },
  { id: 'fr.sons.liaisons.140', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'voo-z‿a-LAY OH mar-SHAY' },
  { id: 'fr.sons.liaisons.141', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'ehl-z‿OHⁿ DEU SHA' },
  { id: 'fr.sons.liaisons.142', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'ohⁿ-n‿a-REEV SUH SWAR' },
  { id: 'fr.sons.liaisons.143', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'eel-z‿EHM LA NEHZH' },
  { id: 'fr.sons.liaisons.144', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'noo-z‿a-bee-TOHⁿ A mohⁿ-tray-AL' },
  { id: 'fr.sons.liaisons.145', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'eel-z‿ay-TEH ma-LAD YEHR' },
  { id: 'fr.sons.liaisons.146', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'ohⁿ-n‿a-DOR LA poo-TEEN' },
  { id: 'fr.sons.liaisons.147', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'ehl-z‿ay-tü-DEE LUH SWAR' },
  { id: 'fr.sons.liaisons.148', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun','after-determiner'], drills: SF, respell: 'noo-z‿ehⁿ-vee-TOHⁿ day-z‿a-MEE sam-DEE' },
  { id: 'fr.sons.liaisons.149', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'eel-z‿a-SHEHT ÜN BEHL meh-ZOHⁿ' },
  { id: 'fr.sons.liaisons.150', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'eel-z‿a-TAHⁿD LUH BÜS ahⁿ-SAHⁿBL' },
  { id: 'fr.sons.liaisons.151', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'ohⁿ-n‿a-TAHⁿ LUH proh-SHEHⁿ TREHⁿ' },
  { id: 'fr.sons.liaisons.152', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'ehl-z‿a-DOR SUH puh-TEE rehs-toh-RAHⁿ' },
  { id: 'fr.sons.liaisons.153', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'ehl-z‿a-BEET ZHÜST A koh-TAY' },
  { id: 'fr.sons.liaisons.154', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'voo-z‿a-bee-TAY PREH DUH lay-KOL' },
  { id: 'fr.sons.liaisons.155', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'ohⁿ-n‿oo-BLEE too-ZHOOR kehl-KUH SHOZ' },
  { id: 'fr.sons.liaisons.156', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: SF, respell: 'eel-z‿OOVR LUH ma-ga-ZEHⁿ TOH' },
  { id: 'fr.sons.liaisons.157', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: S, respell: 'noo-z‿a-LOHⁿ SHAY MA SEUR dee-MAHⁿSH' },
  { id: 'fr.sons.liaisons.158', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: S, respell: 'voo-z‿EHT LEEBR POOR soo-PAY duh-MEHⁿ' },
  { id: 'fr.sons.liaisons.159', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun','after-determiner'], drills: S, respell: 'eel-z‿OHⁿ trwa-z‿ahⁿ-FAHⁿ TREH zhahⁿ-TEE' },
  { id: 'fr.sons.liaisons.160', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-t','liaison-obligatoire','after-pronoun','after-adjective'], drills: S, respell: 'ohⁿ-n‿A troo-VAY UHⁿ puh-tee-t‿a-par-tuh-MAHⁿ' },
  { id: 'fr.sons.liaisons.161', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: S, respell: 'noo-z‿ay-koo-TOHⁿ DUH LA mü-ZEEK kay-bay-KWAZ' },
  { id: 'fr.sons.liaisons.162', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: S, respell: 'voo-z‿ahⁿ-tahⁿ-DAY LUH BRÜEE DAY vwa-ZEHⁿ' },
  { id: 'fr.sons.liaisons.163', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-obligatoire','after-pronoun'], drills: S, respell: 'ehl-z‿ay-KOOT UHⁿ ba-la-DOH AHⁿ frahⁿ-SEH' },
  { id: 'fr.sons.liaisons.164', family: 'n', obligation: 'obligatoire', tags: ['liaison-n','liaison-t','liaison-obligatoire','after-pronoun','fixed-expression'], drills: S, respell: 'ohⁿ-n‿eh-t‿a-LAY OH see-nay-MA YEHR' },
  { id: 'fr.sons.liaisons.165', family: 'z', obligation: 'obligatoire', tags: ['liaison-z','liaison-t','liaison-obligatoire','after-pronoun','fixed-expression','after-adjective'], drills: S, respell: 'eel-z‿a-BEET dahⁿ-z‿UHⁿ grahⁿ-t‿ee-MEUBL' },];

/** Everything the audit proved the 165 could not teach.
 *
 *  AUDIT, run over all 165 items and recorded here so the additions can be
 *  justified one by one rather than by assertion:
 *    - 199 ties across 165 items. 196 sit after a determiner, pronoun,
 *      possessive, prenominal adjective or a fixed expression: obligatoire.
 *      The other 3 are verb+determiner, where the determiner triggers. So the
 *      set is 100% obligatoire and 0% interdite.
 *    - Zero items contain an h aspiré word.
 *    - Exactly one item contains `et` before a vowel (119, "deux avocats et un
 *      ananas"), and it was authored to teach the z and n links around the et,
 *      not the block at it.
 *    - Shortest item is 3 words; the mode is 6 to 7. No word-level entry point.
 *
 *  So: the forbidden half of the canDo, the word-level anchors and the contrast
 *  pairs are genuinely absent and are authored below. Nothing that already
 *  exists is re-authored.
 */
export const NEW: LiaisonItem[] = [
  // ---- Word-level anchors (166-177) -------------------------------------
  // A learner meeting les‿amis for the first time should not have to parse a
  // ten-word sentence around it. These are the bare linked pairs, one idea per
  // card, and they are what the flashcard and voiceflash decks are built on.
  { id: 'fr.sons.liaisons.166', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'les amis', en: 'the friends', ipa: 'le.z‿a.mi', respell: 'lay-z‿a-MEE', family: 'z', obligation: 'obligatoire', tags: ['liaison-z', 'liaison-obligatoire', 'after-determiner', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'The S of les is silent alone. Before a vowel it comes back, and it comes back as a Z.' },
  { id: 'fr.sons.liaisons.167', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'vous avez', en: 'you have', ipa: 'vu.z‿a.ve', respell: 'voo-z‿a-VAY', family: 'z', obligation: 'obligatoire', tags: ['liaison-z', 'liaison-obligatoire', 'after-pronoun', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'Every vous before a vowel does this. It is the most common liaison in French.' },
  { id: 'fr.sons.liaisons.168', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'un homme', en: 'a man', ipa: 'œ̃.n‿ɔm', respell: 'uhⁿ-n‿OM', family: 'n', obligation: 'obligatoire', tags: ['liaison-n', 'liaison-obligatoire', 'after-determiner', 'h-muet', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'H muet is not there as far as the ear is concerned, so the N links straight across it.' },
  { id: 'fr.sons.liaisons.169', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'mon ami', en: 'my friend', ipa: 'mɔ̃.n‿a.mi', respell: 'mohⁿ-n‿a-MEE', family: 'n', obligation: 'obligatoire', tags: ['liaison-n', 'liaison-obligatoire', 'after-possessive', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'The nasal vowel stays nasal AND an N appears. You do not lose the ohⁿ.' },
  { id: 'fr.sons.liaisons.170', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: "c'est un", en: "it's a", ipa: 'sɛ.t‿œ̃', respell: 'seh-t‿UHⁿ', family: 't', obligation: 'obligatoire', tags: ['liaison-t', 'liaison-obligatoire', 'fixed-expression', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'The T of est is silent in est alone. Here it links, and it stays a T.' },
  { id: 'fr.sons.liaisons.171', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'deux enfants', en: 'two children', ipa: 'dø.z‿ɑ̃.fɑ̃', respell: 'deu-z‿ahⁿ-FAHⁿ', family: 'z', obligation: 'obligatoire', tags: ['liaison-z', 'liaison-obligatoire', 'after-determiner', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'The X of deux returns as a Z, exactly like an S would. This is the deux‿euros you were promised.' },
  { id: 'fr.sons.liaisons.172', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'nous avons', en: 'we have', ipa: 'nu.z‿a.vɔ̃', respell: 'noo-z‿a-VOHⁿ', family: 'z', obligation: 'obligatoire', tags: ['liaison-z', 'liaison-obligatoire', 'after-pronoun', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'Same shape as vous avez. Pronoun, then a vowel, then a Z.' },
  { id: 'fr.sons.liaisons.173', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'ils ont', en: 'they have', ipa: 'il.z‿ɔ̃', respell: 'eel-z‿OHⁿ', family: 'z', obligation: 'obligatoire', tags: ['liaison-z', 'liaison-obligatoire', 'after-pronoun', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'Without the Z this is ils on, which is not French. The link carries the meaning.' },
  { id: 'fr.sons.liaisons.174', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'petit ami', en: 'boyfriend', ipa: 'pə.ti.t‿a.mi', respell: 'puh-tee-t‿a-MEE', family: 't', obligation: 'obligatoire', tags: ['liaison-t', 'liaison-obligatoire', 'after-adjective', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'petit alone ends on the vowel. Put a noun starting with a vowel after it and the T wakes up.' },
  { id: 'fr.sons.liaisons.175', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'grand arbre', en: 'big tree', ipa: 'ɡʁɑ̃.t‿aʁbʁ', respell: 'grahⁿ-t‿ARBR', family: 't', obligation: 'obligatoire', tags: ['liaison-t', 'liaison-obligatoire', 'after-adjective', 'word-level', 'devoicing'], drills: WD, audioRef: null, version: 1, notes: 'Written with a D. Said with a T. A final D always links as T, never as D.' },
  { id: 'fr.sons.liaisons.176', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'en avion', en: 'by plane', ipa: 'ɑ̃.n‿a.vjɔ̃', respell: 'ahⁿ-n‿a-VYOHⁿ', family: 'n', obligation: 'obligatoire', tags: ['liaison-n', 'liaison-obligatoire', 'fixed-expression', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'en always links. You will meet it in en avance, en été, en hiver.' },
  { id: 'fr.sons.liaisons.177', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'chez elle', en: 'at her place', ipa: 'ʃe.z‿ɛl', respell: 'shay-z‿EHL', family: 'z', obligation: 'obligatoire', tags: ['liaison-z', 'liaison-obligatoire', 'fixed-expression', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'A one-syllable preposition. These always link.' },

  // ---- Liaison INTERDITE (178-197) --------------------------------------
  // The 165 cannot teach this at all: every one of them links. Without these
  // the lesson teaches half its own canDo and trains a learner to link
  // everything, which is the single most common error in this area.
  // NOTE the ipa on every one of these: NO tie character. That absence is the
  // teaching point and sons-10-liaison.test.ts pins it.
  { id: 'fr.sons.liaisons.178', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'et il', en: 'and he', ipa: 'e il', respell: 'AY EEL', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'interdite-et', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'et NEVER links. Not once, not in any sentence, not in any register. It is the one rule here with no exception.' },
  { id: 'fr.sons.liaisons.179', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'et elle', en: 'and she', ipa: 'e ɛl', respell: 'AY EHL', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'interdite-et', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'The T of et is silent forever. Compare est elle, which does link.' },
  { id: 'fr.sons.liaisons.180', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Un café et un croissant.', en: 'A coffee and a croissant.', ipa: 'œ̃ ka.fe e œ̃ kʁwa.sɑ̃', respell: 'UHⁿ ka-FAY AY UHⁿ krwa-SAHⁿ', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'interdite-et'], drills: SD, audioRef: null, version: 1, notes: 'Every instinct you built in the last twenty minutes says link this. Do not.' },
  { id: 'fr.sons.liaisons.181', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'les héros', en: 'the heroes', ipa: 'le e.ʁo', respell: 'LAY ay-ROH', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'h-aspire', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'H aspiré blocks the link. Compare les‿amis, where nothing blocks it. You cannot hear which H a word has: you learn it with the word.' },
  { id: 'fr.sons.liaisons.182', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'les haricots', en: 'the beans', ipa: 'le a.ʁi.ko', respell: 'LAY a-ree-KOH', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'h-aspire', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'Same block. The S of les stays silent and the two words stay apart.' },
  { id: 'fr.sons.liaisons.183', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'en haut', en: 'upstairs, above', ipa: 'ɑ̃ o', respell: 'AHⁿ OH', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'h-aspire', 'word-level'], drills: WD, audioRef: null, version: 1, notes: 'en links everywhere else. Here the H aspiré of haut stops it, which is why this pair is worth banking.' },
  { id: 'fr.sons.liaisons.184', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'les hiboux', en: 'the owls', ipa: 'le i.bu', respell: 'LAY ee-BOO', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'h-aspire', 'word-level'], drills: W, audioRef: null, version: 1, notes: 'Another h aspiré. The list is short and it is worth memorising as a list.' },
  { id: 'fr.sons.liaisons.185', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Les héros arrivent enfin.', en: 'The heroes finally arrive.', ipa: 'le e.ʁo a.ʁiv ɑ̃.fɛ̃', respell: 'LAY ay-ROH a-REEV ahⁿ-FEHⁿ', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'h-aspire'], drills: SD, audioRef: null, version: 1, notes: 'The blocked link is at the start. héros arrivent does not link either: a plural noun does not link to its verb.' },
  { id: 'fr.sons.liaisons.186', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'un enfant intelligent', en: 'an intelligent child', ipa: 'œ̃.n‿ɑ̃.fɑ̃ ɛ̃.te.li.ʒɑ̃', respell: 'uhⁿ-n‿ahⁿ-FAHⁿ ehⁿ-tay-lee-ZHAHⁿ', family: 'n', obligation: 'interdite', tags: ['liaison-n', 'liaison-interdite', 'interdite-singular-noun'], drills: WD, audioRef: null, version: 1, notes: 'Two gaps, two different answers. un links to enfant. enfant does NOT link to intelligent: a singular noun never links to the adjective after it.' },
  { id: 'fr.sons.liaisons.187', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'un restaurant italien', en: 'an Italian restaurant', ipa: 'œ̃ ʁɛs.to.ʁɑ̃ i.ta.ljɛ̃', respell: 'UHⁿ rehs-toh-RAHⁿ ee-ta-LYEHⁿ', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'interdite-singular-noun'], drills: WD, audioRef: null, version: 1, notes: 'Singular noun, then adjective. No link, even though the T is sitting right there.' },
  { id: 'fr.sons.liaisons.188', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: "C'est un enfant intelligent.", en: 'He is an intelligent child.', ipa: 'sɛ.t‿œ̃.n‿ɑ̃.fɑ̃ ɛ̃.te.li.ʒɑ̃', respell: 'seh-t‿uhⁿ-n‿ahⁿ-FAHⁿ ehⁿ-tay-lee-ZHAHⁿ', family: 't', obligation: 'interdite', tags: ['liaison-t', 'liaison-n', 'liaison-interdite', 'interdite-singular-noun'], drills: SD, audioRef: null, version: 1, notes: 'Two links then a hard stop. This one sentence is the whole lesson: link, link, do not link.' },
  { id: 'fr.sons.liaisons.189', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'les onze', en: 'the eleven', ipa: 'le ɔ̃z', respell: 'LAY OHⁿZ', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'interdite-number', 'word-level'], drills: W, audioRef: null, version: 1, notes: 'onze behaves like an h aspiré word. So does un when it means the number one.' },
  { id: 'fr.sons.liaisons.190', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Paris est une belle ville.', en: 'Paris is a beautiful city.', ipa: 'pa.ʁi ɛ.t‿yn bɛl vil', respell: 'pa-REE eh-t‿ÜN BEHL VEEL', family: 't', obligation: 'interdite', tags: ['liaison-t', 'liaison-interdite', 'interdite-proper-noun'], drills: SD, audioRef: null, version: 1, notes: 'A proper noun does not link to what follows. Paris est stays apart, then est‿une links normally.' },
  { id: 'fr.sons.liaisons.191', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'selon eux', en: 'according to them', ipa: 'sə.lɔ̃ ø', respell: 'suh-LOHⁿ EU', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'word-level'], drills: W, audioRef: null, version: 1, notes: 'selon never links, unlike the short prepositions en, dans and chez, which always do.' },
  { id: 'fr.sons.liaisons.192', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Comment allez-vous et où habitez-vous ?', en: 'How are you and where do you live?', ipa: 'kɔ.mɑ̃.t‿a.le.vu e u a.bi.te.vu', respell: 'koh-mahⁿ-t‿a-lay-VOO AY OO a-bee-tay-VOO', family: 't', obligation: 'interdite', tags: ['liaison-t', 'liaison-interdite', 'interdite-et'], drills: SD, audioRef: null, version: 1, notes: 'The famous comment‿allez-vous links. The et two words later does not. Same sentence, both rules.' },
  { id: 'fr.sons.liaisons.193', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'quand elle', en: 'when she', ipa: 'kɑ̃.t‿ɛl', respell: 'kahⁿ-t‿EHL', family: 't', obligation: 'obligatoire', tags: ['liaison-t', 'liaison-obligatoire', 'word-level', 'devoicing'], drills: WD, audioRef: null, version: 1, notes: 'Written D, said T. Put this next to et il and the difference is the whole trap.' },
  { id: 'fr.sons.liaisons.194', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Les enfants et les adultes attendent.', en: 'The children and the adults are waiting.', ipa: 'le.z‿ɑ̃.fɑ̃ e le.z‿a.dylt a.tɑ̃d', respell: 'lay-z‿ahⁿ-FAHⁿ AY lay-z‿a-DÜLT a-TAHⁿD', family: 'z', obligation: 'interdite', tags: ['liaison-z', 'liaison-interdite', 'interdite-et'], drills: SD, audioRef: null, version: 1, notes: 'Two links, one block, in that order. The et sits between two liaisons and still refuses.' },
  { id: 'fr.sons.liaisons.195', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'un hasard', en: 'a coincidence', ipa: 'œ̃ a.zaʁ', respell: 'UHⁿ a-ZAR', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'h-aspire', 'word-level'], drills: W, audioRef: null, version: 1, notes: 'Compare un‿homme, which links. Same article, opposite result, and only the word tells you.' },
  { id: 'fr.sons.liaisons.196', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'les huit heures', en: 'the eight hours', ipa: 'le ɥi.t‿œʁ', respell: 'LAY üee-t‿EUR', family: 't', obligation: 'interdite', tags: ['liaison-t', 'liaison-interdite', 'interdite-number'], drills: W, audioRef: null, version: 1, notes: 'les does not link to huit. But huit does link to heures. Two gaps, opposite answers.' },
  { id: 'fr.sons.liaisons.197', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Il mange et il boit.', en: 'He eats and he drinks.', ipa: 'il mɑ̃ʒ e il bwa', respell: 'EEL MAHⁿZH AY EEL BWA', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'interdite-et'], drills: SD, audioRef: null, version: 1, notes: 'Nothing links in this sentence. Sometimes the right answer is to leave every gap alone.' },

  // ---- Minimal contrast pairs (198-213) ---------------------------------
  // Same spelling or same frame, opposite outcome. These are what the trapDrill
  // and the errorSpot questions are built on, and they are the only way to show
  // that the rule is about the WORDS, not about the letters.
  { id: 'fr.sons.liaisons.200', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'un an', en: 'one year (links)', ipa: 'œ̃.n‿ɑ̃', respell: 'uhⁿ-n‿AHⁿ', family: 'n', obligation: 'obligatoire', tags: ['liaison-n', 'liaison-obligatoire', 'minimal-pair', 'pair-nasal'], drills: W, audioRef: null, version: 1, notes: 'The nasal stays and an N appears on top of it.' },
  { id: 'fr.sons.liaisons.201', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'en an', en: 'in a year', ipa: 'ɑ̃.n‿ɑ̃', respell: 'ahⁿ-n‿AHⁿ', family: 'n', obligation: 'obligatoire', tags: ['liaison-n', 'liaison-obligatoire', 'minimal-pair', 'pair-nasal'], drills: W, audioRef: null, version: 1, notes: 'Same link, different nasal in front of it. Hear that the vowel does not flatten.' },
  { id: 'fr.sons.liaisons.203', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'ils sont', en: 'they are', ipa: 'il sɔ̃', respell: 'EEL SOHⁿ', family: 'none', obligation: 'obligatoire', tags: ['liaison-obligatoire', 'minimal-pair', 'pair-ont-sont'], drills: W, audioRef: null, version: 1, notes: 'No liaison here, because sont starts with a consonant. Get this pair wrong and you have said the wrong verb.' },
  { id: 'fr.sons.liaisons.208', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'quand il', en: 'when he (links)', ipa: 'kɑ̃.t‿il', respell: 'kahⁿ-t‿EEL', family: 't', obligation: 'obligatoire', tags: ['liaison-t', 'liaison-obligatoire', 'minimal-pair', 'pair-et-quand'], drills: W, audioRef: null, version: 1, notes: 'quand links, and its D comes back as a T.' },
  { id: 'fr.sons.liaisons.210', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'les Anglais', en: 'the English (links)', ipa: 'le.z‿ɑ̃.ɡlɛ', respell: 'lay-z‿ahⁿ-GLEH', family: 'z', obligation: 'obligatoire', tags: ['liaison-z', 'liaison-obligatoire', 'minimal-pair', 'pair-proper'], drills: W, audioRef: null, version: 1, notes: 'A common noun of nationality links normally.' },
  { id: 'fr.sons.liaisons.211', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'Jean arrive', en: 'Jean arrives (blocked)', ipa: 'ʒɑ̃ a.ʁiv', respell: 'ZHAHⁿ a-REEV', family: 'none', obligation: 'interdite', tags: ['liaison-interdite', 'interdite-proper-noun', 'minimal-pair', 'pair-proper'], drills: W, audioRef: null, version: 1, notes: 'A personal name does not link to the verb after it.' },
  { id: 'fr.sons.liaisons.212', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'très intéressant', en: 'very interesting (links)', ipa: 'tʁɛ.z‿ɛ̃.te.ʁe.sɑ̃', respell: 'treh-z‿ehⁿ-tay-ray-SAHⁿ', family: 'z', obligation: 'obligatoire', tags: ['liaison-z', 'liaison-obligatoire', 'minimal-pair', 'pair-adverb'], drills: W, audioRef: null, version: 1, notes: 'Short adverbs link: très, plus, bien, moins.' },
  { id: 'fr.sons.liaisons.213', kind: 'phrase', level: 'sons', theme: 'liaisons', fr: 'toujours intéressant', en: 'always interesting (optional)', ipa: 'tu.ʒuʁ ɛ̃.te.ʁe.sɑ̃', respell: 'too-ZHOOR ehⁿ-tay-ray-SAHⁿ', family: 'none', obligation: 'facultative', tags: ['liaison-facultative', 'minimal-pair', 'pair-adverb'], drills: W, audioRef: null, version: 1, notes: 'A long adverb. Linking here is optional and formal. Leaving it is the safe default.' },

  // ---- Facultative demonstrations (214-235) -----------------------------
  // sons.10 NAMES this state and gives one safe default; it does not drill it.
  // The pairs are authored as corpus so sons.08 Rythme & intonation can teach
  // register from them later without re-authoring, and so the studio can record
  // the same sentence twice in one session while the voice is matched.
  { id: 'fr.sons.liaisons.214', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Je suis allé au marché.', en: 'I went to the market (casual, no link).', ipa: 'ʒə sɥi a.le o maʁ.ʃe', respell: 'zhuh SÜEE a-LAY OH mar-SHAY', family: 'none', obligation: 'facultative', tags: ['liaison-facultative', 'register-courant', 'pair-suis-alle'], drills: S, audioRef: null, version: 1, notes: 'Everyday speech. Nobody will notice the missing link and nobody will mind.', register: 'courant' },
  { id: 'fr.sons.liaisons.215', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Je suis allé au marché.', en: 'I went to the market (formal, linked).', ipa: 'ʒə sɥi.z‿a.le o maʁ.ʃe', respell: 'zhuh süee-z‿a-LAY OH mar-SHAY', family: 'z', obligation: 'facultative', tags: ['liaison-z', 'liaison-facultative', 'register-soutenu', 'pair-suis-alle'], drills: S, audioRef: null, version: 1, notes: 'Same sentence, formal delivery. A news reader links this. A friend in a kitchen does not.', register: 'soutenu' },
  { id: 'fr.sons.liaisons.216', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Nous sommes arrivés hier.', en: 'We arrived yesterday (casual, no link).', ipa: 'nu sɔm a.ʁi.ve jɛʁ', respell: 'NOO SOM a-ree-VAY YEHR', family: 'none', obligation: 'facultative', tags: ['liaison-facultative', 'register-courant', 'pair-sommes-arrives'], drills: S, audioRef: null, version: 1, notes: 'After a plural verb form, the link is optional. Skipping it is normal and correct.', register: 'courant' },
  { id: 'fr.sons.liaisons.217', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Nous sommes arrivés hier.', en: 'We arrived yesterday (formal, linked).', ipa: 'nu sɔm.z‿a.ʁi.ve jɛʁ', respell: 'NOO som-z‿a-ree-VAY YEHR', family: 'z', obligation: 'facultative', tags: ['liaison-z', 'liaison-facultative', 'register-soutenu', 'pair-sommes-arrives'], drills: S, audioRef: null, version: 1, notes: 'The formal version. Both are right, and that is what makes this category hard.', register: 'soutenu' },
  { id: 'fr.sons.liaisons.218', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: "C'est un point important.", en: "It's an important point (casual).", ipa: 'sɛ.t‿œ̃ pwɛ̃ ɛ̃.pɔʁ.tɑ̃', respell: 'seh-t‿UHⁿ PWEHⁿ ehⁿ-por-TAHⁿ', family: 't', obligation: 'facultative', tags: ['liaison-t', 'liaison-facultative', 'register-courant', 'pair-point-important'], drills: S, audioRef: null, version: 1, notes: 'The first link is obligatoire. The second is optional and usually skipped.', register: 'courant' },
  { id: 'fr.sons.liaisons.219', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: "C'est un point important.", en: "It's an important point (formal).", ipa: 'sɛ.t‿œ̃ pwɛ̃.t‿ɛ̃.pɔʁ.tɑ̃', respell: 'seh-t‿UHⁿ pwehⁿ-t‿ehⁿ-por-TAHⁿ', family: 't', obligation: 'facultative', tags: ['liaison-t', 'liaison-facultative', 'register-soutenu', 'pair-point-important'], drills: S, audioRef: null, version: 1, notes: 'Both links made. This is a speech, not a conversation.', register: 'soutenu' },
  { id: 'fr.sons.liaisons.220', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Il faut aller plus vite.', en: 'We need to go faster (casual).', ipa: 'il fo a.le ply vit', respell: 'EEL FOH a-LAY PLÜ VEET', family: 'none', obligation: 'facultative', tags: ['liaison-facultative', 'register-courant', 'pair-faut-aller'], drills: S, audioRef: null, version: 1, notes: 'faut aller is a classic optional link. Leave it and you sound normal.', register: 'courant' },
  { id: 'fr.sons.liaisons.221', kind: 'sentence', level: 'sons', theme: 'liaisons', fr: 'Il faut aller plus vite.', en: 'We need to go faster (formal).', ipa: 'il fo.t‿a.le ply vit', respell: 'EEL foh-t‿a-LAY PLÜ VEET', family: 't', obligation: 'facultative', tags: ['liaison-t', 'liaison-facultative', 'register-soutenu', 'pair-faut-aller'], drills: S, audioRef: null, version: 1, notes: 'Linked. You will hear this from a teacher or a broadcaster.', register: 'soutenu' },
];

// ---------------------------------------------------------------------------
// Accessors. The lesson file reads transcriptions from here and never retypes
// them, exactly as muettes-lesson.ts does, so a corpus fix propagates.
// ---------------------------------------------------------------------------

/** Every id this lesson owns: the 165 curated, then the authored gap. */
export const LIAISON_IDS: string[] = [
  ...UPDATES.map((u) => u.id),
  ...NEW.map((n) => n.id),
];

export const UPDATE_BY_ID: ReadonlyMap<string, LiaisonUpdate> = new Map(UPDATES.map((u) => [u.id, u]));
export const NEW_BY_ID: ReadonlyMap<string, LiaisonItem> = new Map(NEW.map((n) => [n.id, n]));

/** Ids carrying a given linking consonant, derived from the tag, which was
 *  itself derived from the IPA. Used for the groupDrill pools. */
export const familyIds = (f: Family): string[] => [
  ...UPDATES.filter((u) => u.family === f).map((u) => u.id),
  ...NEW.filter((n) => n.family === f).map((n) => n.id),
];

/** Ids in a given obligation state. `interdite` is the set the lesson must
 *  never drill as obligatoire; sons-10-liaison.test.ts pins that. */
export const obligationIds = (o: Obligation): string[] => [
  ...UPDATES.filter((u) => u.obligation === o).map((u) => u.id),
  ...NEW.filter((n) => n.obligation === o).map((n) => n.id),
];

/** Ids carrying a tag. */
export const taggedIds = (tag: string): string[] => [
  ...UPDATES.filter((u) => u.tags.includes(tag)).map((u) => u.id),
  ...NEW.filter((n) => (n.tags ?? []).includes(tag)).map((n) => n.id),
];

/** Strip the authoring-only keys so an item can be written to content_items. */
export function toItem(n: LiaisonItem): Item {
  const { family: _f, obligation: _o, ...item } = n;
  return item;
}

// ---------------------------------------------------------------------------
// The 165 curated items keep their fr/en/ipa in the published seed, not in this
// file, precisely so this curation cannot clobber them with a typo. The lesson
// still needs that text to put a sentence on a card, so read it from the seed
// rather than retyping it: same "no transcription is restated" rule the muettes
// lesson gets from having its corpus inline.
// ---------------------------------------------------------------------------

import { createRequire } from 'node:module';

type SeedItem = { id: string; fr?: string; en?: string; ipa?: string; theme?: string };

const seed = createRequire(import.meta.url)('../../../ealch-v2/src/content/seed.json') as {
  items: SeedItem[];
};

/** fr/en/ipa for every liaison item that already exists in the seed. */
export const SEED_TEXT: ReadonlyMap<string, SeedItem> = new Map(
  seed.items.filter((i) => i.theme === 'liaisons').map((i) => [i.id, i])
);

/** The display text for any id this lesson owns, curated or authored. Throws
 *  rather than rendering a blank card, because a card that silently loses its
 *  sentence is the failure mode this whole rig exists to prevent. */
export function text(id: string): { fr: string; en: string; ipa: string; respell: string } {
  const authored = NEW_BY_ID.get(id);
  if (authored) {
    return {
      fr: authored.fr,
      en: authored.en ?? '',
      ipa: authored.ipa ?? '',
      respell: authored.respell ?? '',
    };
  }
  const s = SEED_TEXT.get(id);
  const u = UPDATE_BY_ID.get(id);
  if (!s || !u) throw new Error(`liaison-corpus: no text for "${id}"`);
  return { fr: s.fr ?? '', en: s.en ?? '', ipa: s.ipa ?? '', respell: u.respell ?? '' };
}
