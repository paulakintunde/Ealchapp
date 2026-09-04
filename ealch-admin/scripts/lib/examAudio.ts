// Casting and stitching a multi-speaker listening document.
//
// ── What this is for ────────────────────────────────────────────────────────
//
// Every other render unit in this pipeline is one voice saying one thing: a
// dictée item, a narration segment, a coach line. A listening document is not.
// A micro-trottoir is three people, an interview is two, a reportage is a
// narrator plus the people they interviewed, and the candidate's task in blocks
// C, E and F is partly to tell them apart.
//
// So an exam part renders as a TURN LIST — one synthesis call per turn, joined
// with a real gap — and the whole list is what the assetKey hashes. Editing one
// turn re-renders that document and nothing else in the paper.
//
// ── Why the pure part is separate from the I/O ──────────────────────────────
//
// Casting is where the mistakes live: a female character given a male voice, or
// two speakers in one document given the same one, which quietly destroys the
// item. None of that needs a network or a database to check, so it is written
// here as functions with tests, and render-audio.ts does the spending.
import { createHash } from 'node:crypto';

/** One line of a transcript, as authored. */
export type Turn = { speaker: string; text: string };

/** A turn once a voice has been chosen for it. */
export type CastTurn = Turn & { slot: SlotName };

export const SLOTS = [
  'f-neutral', 'f-formal', 'f-media', 'f-street',
  'm-neutral', 'm-formal', 'm-media', 'm-street',
] as const;
export type SlotName = (typeof SLOTS)[number];

/** Which registers a block reaches for first. From STANDARD-tef §2: a
 *  micro-trottoir is not a radio chronicle, and a public announcement is not an
 *  interview. */
export const BLOCK_PREFERENCE: Record<string, SlotName[]> = {
  A: ['f-neutral', 'm-neutral', 'f-formal', 'm-formal'],
  B: ['f-formal', 'm-formal', 'f-media', 'm-media'],
  C: ['f-street', 'm-street', 'f-neutral', 'm-neutral'],
  D: ['m-media', 'f-media'],
  E: ['f-media', 'm-neutral', 'f-neutral', 'm-media'],
  F: ['f-media', 'm-neutral', 'f-neutral', 'm-media'],
  G: ['f-neutral', 'm-neutral', 'f-formal', 'm-formal', 'f-street', 'm-street'],
};

/**
 * Which preference list a document should be cast from.
 *
 * For six of the seven blocks this is just the block: every annonce publique is
 * an announcement, every interview is an interview.
 *
 * Block G is not. It is a mixed bag by design — the blueprint calls it
 * "documents divers" and fills it with five different sub-types — so casting
 * the whole block from one list gives a pharmacist's instructions and a street
 * opinion the same voice and the same register. The sub-type is written in the
 * part's own label ("Document 4 · micro-trottoir · réunions au travail"),
 * which is where this reads it from.
 */
/** Which preference list a TCF document is cast from.
 *
 *  TCF has no blocks. Its documents sit on a ramp, and what changes across that
 *  ramp is not the exercise family — it is who is speaking: counters and
 *  announcements at the bottom, interviews in the middle, panels of specialists
 *  at the top. So the band IS the register key, and the lists below are keyed
 *  by band rather than mapped onto TEF's letters, because a TCF B1 interview
 *  and a TEF block B annonce publique are not the same document. */
export const BAND_PREFERENCE: Record<string, SlotName[]> = {
  a1: ['f-neutral', 'm-neutral', 'f-formal', 'm-formal'],
  a2: ['f-neutral', 'm-neutral', 'f-formal', 'm-formal'],
  b1: ['f-media', 'm-neutral', 'f-neutral', 'm-media'],
  b2: ['f-media', 'm-formal', 'f-formal', 'm-media'],
  c1: ['f-media', 'm-formal', 'f-formal', 'm-neutral'],
  c2: ['f-formal', 'm-formal', 'f-media', 'm-neutral'],
};

/**
 * The register key for ONE document, whichever format it belongs to.
 *
 * The bug this exists to stop is silent rather than loud. The block letter used
 * to be sliced off the task label — 'Section C' gives 'C' — and a TCF label is
 * 'Compréhension orale · A1', whose first letter is also C. Every TCF document
 * would have been cast and paced as a TEF block C micro-trottoir: street voices
 * for a philosophy panel, at block C's speed, with nothing failing and nothing
 * to see but audio that is wrong.
 */
export function registerKeyFor(input: {
  format: string;
  taskLabel: string;
  partLabel: string;
  level?: string | null;
}): string {
  if (input.format === 'tcf_canada') {
    const band = (input.level ?? '').toLowerCase();
    if (band in BAND_PREFERENCE) return band;
    // A TCF task with no usable level is an authoring fault, not something to
    // paper over with a default that sounds fine.
    throw new Error(`TCF task "${input.taskLabel}" has no usable level for casting (got ${JSON.stringify(input.level)})`);
  }
  const block = input.taskLabel.replace(/^Section\s+/i, '').trim().slice(0, 1).toUpperCase() || 'G';
  return registerFor(block, input.partLabel);
}

export function registerFor(block: string, partLabel: string): string {
  if (block !== 'G') return block;
  const l = partLabel.toLowerCase();
  if (l.includes('micro-trottoir')) return 'C';          // street opinion
  if (l.includes('consignes')) return 'B';               // instructions, institutional
  if (l.includes('information')) return 'B';             // public information message
  // A voicemail is usually a person leaving a message, and those are neutral.
  // A recorded service line is not, and says so in its own label.
  if (l.includes('répondeur')) return l.includes('service') ? 'B' : 'A';
  return 'A';                                            // two-turn exchange
}

/**
 * Split an authored transcript into turns.
 *
 * A turn is `SPEAKER : text`. A line with no label continues the previous
 * speaker rather than starting a nameless one, because that is what a wrapped
 * paragraph in a narrator's turn actually is.
 */
export function parseTurns(text: string): Turn[] {
  const out: Turn[] = [];
  for (const raw of text.split('\n')) {
    const line = raw.trim();
    if (!line) continue;
    const m = /^([A-ZÀ-Ý0-9'’ .-]{2,32})\s*:\s*(.+)$/.exec(line);
    if (m && m[2]) {
      out.push({ speaker: m[1]!.trim(), text: m[2]!.trim() });
    } else if (out.length) {
      out[out.length - 1]!.text += ` ${line}`;
    } else {
      out.push({ speaker: 'NARRATEUR', text: line });
    }
  }
  return out;
}

export type Sex = 'f' | 'm' | 'unknown';

/**
 * Guess a speaker's sex from the label the author wrote.
 *
 * `LA BOULANGÈRE` is a woman and casting a male voice for her is a defect a
 * listener notices immediately. `L'AGENT` and `PERSONNE 1` are genuinely
 * unmarked, and are reported as such rather than guessed: an unknown gets
 * whatever slot is free, which is the honest answer.
 */
export function sexOfLabel(label: string): Sex {
  const l = label.trim().toUpperCase();

  // Bare pronouns carry sex but no morphology, so no ending rule reaches them.
  if (/^(ELLE|ELLES)$/.test(l)) return 'f';
  if (/^(LUI|IL|ILS|EUX)$/.test(l)) return 'm';

  // Feminine and masculine agentive endings. These decide an elided label,
  // where the article gives nothing away, and they confirm an explicit one.
  const FEM = /(ÈRE|EUSE|TRICE|IÈRE|ETTE|INE|ÉE|ESSE|ELLE|ANTE|ENTE|ICE)$/;
  const MASC = /(EUR|IER|EAU|IEN|OMME|ANT|ENT)$/;

  // `L’` hides the article's gender, and the article is otherwise the signal.
  if (/^L['’]/.test(l)) {
    if (FEM.test(l)) return 'f';
    // `L’AGENT` really is unmarked and gets reported as such: ENT is masculine
    // morphology but the word is epicene, and a wrong guess is worse than an
    // admitted unknown because an unknown still gets a usable voice.
    if (/(EUR|IER|EAU|OMME)$/.test(l)) return 'm';
    return 'unknown';
  }

  if (/^(LA|UNE|MADAME|MME)\b/.test(l)) return 'f';
  if (/^(LE|UN|MONSIEUR|M)\b/.test(l)) return 'm';
  if (FEM.test(l)) return 'f';
  if (MASC.test(l)) return 'm';
  return 'unknown';
}

/**
 * Choose a voice for every speaker in ONE document.
 *
 * Two rules, and the first is the one that matters:
 *
 *   1. **No two speakers in a document share a voice.** Block C asks which of
 *      three people holds an opinion; if two of them sound alike the item is
 *      broken however good the French is.
 *   2. The block's register comes first, sex second. A woman in an
 *      announcement gets `f-formal` before `f-neutral`.
 *
 * Casting is per DOCUMENT, not per label. `L'AGENT` is a station employee in
 * block A and a town-hall clerk in block B, and they are not the same person.
 */
export function castDocument(turns: Turn[], block: string): CastTurn[] {
  // One lookup, two key spaces: TEF passes a block letter, TCF a band. They
  // cannot collide — letters are upper case and bands are not — so a single
  // table read keeps one casting path rather than branching the caller.
  const preference = BLOCK_PREFERENCE[block] ?? BAND_PREFERENCE[block] ?? BLOCK_PREFERENCE.G!;
  const order = [...preference, ...SLOTS.filter((s) => !preference.includes(s))];

  const assigned = new Map<string, SlotName>();
  const used = new Set<SlotName>();

  // First appearance decides who gets first pick, so a document's main voice
  // is the one the block was cast for.
  for (const turn of turns) {
    if (assigned.has(turn.speaker)) continue;
    const sex = sexOfLabel(turn.speaker);
    const wanted = order.filter((s) => !used.has(s) && (sex === 'unknown' || s.startsWith(`${sex}-`)));
    // An unmarked speaker, or one whose sex has run out of voices, takes the
    // next free slot of any kind. Running out is better than doubling up.
    const slot = wanted[0] ?? order.find((s) => !used.has(s));
    if (!slot) throw new Error(`document needs more than ${SLOTS.length} distinct voices: ${turn.speaker}`);
    assigned.set(turn.speaker, slot);
    used.add(slot);
  }

  return turns.map((t) => ({ ...t, slot: assigned.get(t.speaker)! }));
}

/**
 * The key that decides whether this document needs rendering again.
 *
 * Hashes the WHOLE turn list — text and resolved voice id, in order — plus the
 * provider and render version, matching the pipeline's existing contract. One
 * edited turn changes the document's key and nothing else's, so a re-render
 * costs one document rather than a paper.
 *
 * Voice IDS, not slot names: recasting `f-street` to a different ElevenLabs
 * voice must re-render everything she speaks, and would not if the slot name
 * were hashed instead.
 */
export function examAssetKey(
  cast: CastTurn[],
  voiceIdFor: (slot: SlotName) => string,
  provider: string,
  renderVersion: string,
  /** Per-slot prosody, hashed with everything else. Omit and it contributes
   *  nothing, which is the same as every slot using the defaults. */
  settingsFor: (slot: SlotName) => Record<string, number> = () => ({})
): string {
  const script = cast
    .map((t) => `${voiceIdFor(t.slot)}|${stableSettings(settingsFor(t.slot))}|${t.text}`)
    .join('\n');
  return createHash('sha256').update(`${script}|${provider}|${renderVersion}`).digest('hex').slice(0, 32);
}

/**
 * Prosody as a stable string, so it can be hashed.
 *
 * Sorted, because object key order is an accident of how the file was parsed
 * and must not change a key. Included in the hash at all because the casting
 * file invites someone to tune stability per slot months from now: if the key
 * ignored settings, that edit would leave every existing clip in place and the
 * tuning would silently do nothing.
 */
function stableSettings(s: Record<string, number>): string {
  return Object.keys(s).sort().map((k) => `${k}=${s[k]}`).join(',');
}

/**
 * Where each turn of an interlocutor bank lives inside the `interlocutor`
 * column, as a jsonb path.
 *
 * RELATIVE TO THE COLUMN. Prefixing these with 'interlocutor' addresses a key
 * that does not exist: `#>` returns NULL, `NULL || {...}` is NULL, and
 * `jsonb_set` with a NULL value returns NULL — so a single wrong path erases
 * the whole bank rather than failing. That happened once, which is why this is
 * a function with a test rather than four string literals at the call site.
 */
export function interlocutorTurnPaths(bank: {
  opening: unknown;
  answers: unknown[];
  catchAll: unknown;
  closing: unknown;
}): string[][] {
  return [
    ['opening'],
    ...bank.answers.map((_, i) => ['answers', String(i)]),
    ['catchAll'],
    ['closing'],
  ];
}

/** Characters actually sent to synthesis, for the budget report. */
export function billableChars(cast: CastTurn[]): number {
  return cast.reduce((n, t) => n + t.text.length, 0);
}

/**
 * The silence between two turns, in milliseconds.
 *
 * A speaker change needs a real beat or the document runs together into one
 * breath, and that beat is a cue a listener uses. A continuation of the same
 * speaker gets a shorter one, because it is a paragraph break, not a handover.
 */
export const TURN_GAP_MS = 700;
export const SAME_SPEAKER_GAP_MS = 300;

export function gapsFor(cast: CastTurn[]): number[] {
  return cast.slice(1).map((t, i) => (cast[i]!.speaker === t.speaker ? SAME_SPEAKER_GAP_MS : TURN_GAP_MS));
}
