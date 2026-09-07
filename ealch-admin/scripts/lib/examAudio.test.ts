// Casting a listening document is where the expensive mistakes are: two
// speakers given one voice destroys the item, and a female character given a
// male voice is heard immediately. None of that needs a network to check.
import { deepStrictEqual, ok, strictEqual, throws, notStrictEqual } from 'node:assert';
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';
import {
  billableChars,
  castDocument,
  examAssetKey,
  gapsFor,
  interlocutorTurnPaths,
  parseTurns,
  registerFor,
  sexOfLabel,
  SAME_SPEAKER_GAP_MS,
  TURN_GAP_MS,
  type CastTurn,
  registerKeyFor,
  debateTurnPaths,
  BAND_PREFERENCE,
} from './examAudio.ts';
import { TASKS } from '../tef-blanc01/paper.ts';

const HERE = dirname(fileURLToPath(import.meta.url));

/* ─── parsing ────────────────────────────────────────────────────────────── */

test('a transcript splits into speaker turns', () => {
  const turns = parseTurns(
    'LA CLIENTE : Bonjour !\nLE VENDEUR : Les framboises, c’est terminé.\nLA CLIENTE : Bon.'
  );
  deepStrictEqual(turns.map((t) => t.speaker), ['LA CLIENTE', 'LE VENDEUR', 'LA CLIENTE']);
  strictEqual(turns[0]!.text, 'Bonjour !');
});

test('an unlabelled line continues the speaker before it', () => {
  // A wrapped paragraph inside a narrator's turn is that narrator still
  // talking, not a new nameless person who would be cast a second voice.
  const turns = parseTurns('LA NARRATRICE : Meillac, trois mille habitants.\nLa commune n’avait rien gagné.');
  strictEqual(turns.length, 1);
  ok(turns[0]!.text.endsWith('rien gagné.'));
});

test('a colon inside prose does not start a turn', () => {
  const turns = parseTurns('Ordre du jour : devis de ravalement.');
  strictEqual(turns.length, 1);
  strictEqual(turns[0]!.speaker, 'NARRATEUR');
});

/* ─── sex from the label ─────────────────────────────────────────────────── */

test('the article gives the speaker away, and the ending backs it up', () => {
  strictEqual(sexOfLabel('LA CLIENTE'), 'f');
  strictEqual(sexOfLabel('LE VENDEUR'), 'm');
  strictEqual(sexOfLabel('UNE HABITANTE'), 'f');
  strictEqual(sexOfLabel('LA BOULANGÈRE'), 'f');
  strictEqual(sexOfLabel('LE CHRONIQUEUR'), 'm');
});

test('an elided or numbered label is reported unknown, not guessed', () => {
  // `L’AGENT` and `PERSONNE 1` really are unmarked. Guessing would be worse
  // than admitting it, because an unknown takes whatever voice is free and
  // that is a defensible outcome; a wrong guess is not.
  strictEqual(sexOfLabel('L’AGENT'), 'unknown');
  strictEqual(sexOfLabel('PERSONNE 1'), 'unknown');
  // The elision still yields when the ending is marked.
  strictEqual(sexOfLabel('L’INVITÉE'), 'f');
  strictEqual(sexOfLabel('L’HÔTESSE'), 'f');
  strictEqual(sexOfLabel('L’AGENTE'), 'f');
  strictEqual(sexOfLabel('L’HOMME'), 'm');
  // Bare pronouns carry sex but no morphology, so no ending rule reaches them.
  strictEqual(sexOfLabel('ELLE'), 'f');
  strictEqual(sexOfLabel('LUI'), 'm');
});

/* ─── casting ────────────────────────────────────────────────────────────── */

test('no two speakers in a document ever share a voice', () => {
  // The rule the whole module exists for. Block C asks which of three people
  // holds an opinion; two of them sounding alike breaks the item outright.
  const cast = castDocument(
    parseTurns('PERSONNE 1 : Oui.\nPERSONNE 2 : Ça dépend.\nPERSONNE 3 : Non.'),
    'C'
  );
  const bySpeaker = new Map(cast.map((t) => [t.speaker, t.slot]));
  strictEqual(new Set(bySpeaker.values()).size, 3, 'three speakers, three voices');
});

test('a woman gets a female voice and a man a male one', () => {
  const cast = castDocument(parseTurns('LA CLIENTE : Bonjour.\nLE VENDEUR : Bonjour.'), 'A');
  const slot = (s: string) => cast.find((t) => t.speaker === s)!.slot;
  ok(slot('LA CLIENTE').startsWith('f-'), slot('LA CLIENTE'));
  ok(slot('LE VENDEUR').startsWith('m-'), slot('LE VENDEUR'));
});

test('the block decides the register before sex decides the voice', () => {
  // An announcement read by a woman is `f-formal`, not `f-neutral`: the block
  // is what makes a station announcement sound like one.
  const announce = castDocument(parseTurns('L’HÔTESSE : Chers visiteurs.'), 'B');
  strictEqual(announce[0]!.slot, 'f-formal');
  const chat = castDocument(parseTurns('LA CLIENTE : Bonjour.'), 'A');
  strictEqual(chat[0]!.slot, 'f-neutral');
  const vox = castDocument(parseTurns('LA PASSANTE : Franchement, non.'), 'C');
  strictEqual(vox[0]!.slot, 'f-street');
});

test('the same speaker keeps one voice across the whole document', () => {
  const cast = castDocument(
    parseTurns('LA JOURNALISTE : Et ?\nL’INVITÉE : Alors.\nLA JOURNALISTE : Encore ?\nL’INVITÉE : Oui.'),
    'E'
  );
  strictEqual(cast[0]!.slot, cast[2]!.slot);
  strictEqual(cast[1]!.slot, cast[3]!.slot);
  ok(cast[0]!.slot !== cast[1]!.slot, 'the interviewer must not sound like her guest');
});

test('a document with more speakers than voices fails loudly', () => {
  // Doubling up silently would be the worst possible outcome: the paper would
  // render, cost money, and be broken in a way only a listener finds.
  const many = Array.from({ length: 9 }, (_, i) => `PERSONNE ${i + 1} : Oui.`).join('\n');
  throws(() => castDocument(parseTurns(many), 'C'), /more than 8 distinct voices/);
});

/* ─── the asset key ──────────────────────────────────────────────────────── */

const voiceIdFor = (slot: string) => `voice-${slot}`;

test('editing one turn changes that document’s key and no other', () => {
  const a = castDocument(parseTurns('A : un\nB : deux'), 'G');
  const b = castDocument(parseTurns('A : un\nB : trois'), 'G');
  const key = (c: CastTurn[]) => examAssetKey(c, voiceIdFor, 'elevenlabs', 'v1');
  ok(key(a) !== key(b), 'a changed turn must change the key');
  strictEqual(key(a), key(castDocument(parseTurns('A : un\nB : deux'), 'G')), 'and be stable otherwise');
});

test('recasting a voice re-renders everything that voice speaks', () => {
  // The key hashes voice IDS, not slot names. If it hashed slots, swapping the
  // ElevenLabs voice behind `f-street` would leave every micro-trottoir in the
  // corpus pointing at a clip in the old voice.
  const cast = castDocument(parseTurns('LA PASSANTE : Franchement.'), 'C');
  const before = examAssetKey(cast, voiceIdFor, 'elevenlabs', 'v1');
  const after = examAssetKey(cast, (s) => `changed-${s}`, 'elevenlabs', 'v1');
  ok(before !== after);
});

test('the render version and the provider both move the key', () => {
  const cast = castDocument(parseTurns('A : un'), 'G');
  const base = examAssetKey(cast, voiceIdFor, 'elevenlabs', 'v1');
  ok(base !== examAssetKey(cast, voiceIdFor, 'elevenlabs', 'v2'));
  ok(base !== examAssetKey(cast, voiceIdFor, 'other', 'v1'));
});

/* ─── gaps ───────────────────────────────────────────────────────────────── */

test('a speaker change gets a longer beat than a paragraph break', () => {
  const cast = castDocument(parseTurns('A : un\nA : encore\nB : deux'), 'G');
  deepStrictEqual(gapsFor(cast), [SAME_SPEAKER_GAP_MS, TURN_GAP_MS]);
  strictEqual(gapsFor(cast).length, cast.length - 1, 'gaps go between turns, not after the last');
});

/* ─── against the real paper ─────────────────────────────────────────────── */

test('every listening document in Examen 1 casts without collision', () => {
  // The check that matters, run over the content that will actually be paid
  // for rather than over a fixture.
  const co = TASKS.filter((t) => t.skill === 'CO');
  let docs = 0;
  let chars = 0;
  for (const task of co) {
    const block = (task.label ?? '').replace('Section ', '').trim();
    for (const part of task.parts ?? []) {
      if (!part.text) continue;
      docs += 1;
      const cast = castDocument(parseTurns(part.text), block);
      const speakers = new Map(cast.map((t) => [t.speaker, t.slot]));
      strictEqual(
        new Set(speakers.values()).size,
        speakers.size,
        `${part.label}: two speakers share a voice`
      );
      chars += billableChars(cast);
    }
  }
  strictEqual(docs, 30, 'the paper has thirty listening documents');
  ok(chars > 9000 && chars < 14000, `billable characters look wrong: ${chars}`);
});

test('the two colliding labels are cast per document, not per label', () => {
  // `L’AGENT` is a station employee in block A and a town-hall clerk in block
  // B; `LE CLIENT` is a bakery customer and a shop customer. Casting per label
  // would give each pair one voice across two registers.
  const stationAgent = castDocument(parseTurns('LA VOYAGEUSE : J’ai oublié.\nL’AGENT : Un sac ?'), 'A');
  const townHall = castDocument(parseTurns('L’AGENT : La mairie accueille une permanence.'), 'B');
  const a = stationAgent.find((t) => t.speaker === 'L’AGENT')!.slot;
  const b = townHall.find((t) => t.speaker === 'L’AGENT')!.slot;
  ok(a !== b, `both agents were cast ${a}; they are different people in different registers`);
});

/* ─── block G is five sub-types wearing one letter ───────────────────────── */

test('block G takes its register from the document, not from the block', () => {
  // Found in the render dry run: every G document was being cast neutral, so a
  // pharmacist's instructions and a street opinion got the same voice. G is a
  // mixed bag by design and its sub-type lives in the part label.
  strictEqual(registerFor('G', 'Document 4 · micro-trottoir · réunions au travail'), 'C');
  strictEqual(registerFor('G', 'Document 15 · consignes · à la pharmacie'), 'B');
  strictEqual(registerFor('G', 'Document 8 · information · fête de quartier'), 'B');
  strictEqual(registerFor('G', 'Document 1 · échange · au bureau'), 'A');
});

test('a voicemail is a person unless it is a recorded service line', () => {
  strictEqual(registerFor('G', 'Document 7 · répondeur · au gestionnaire de l’immeuble'), 'A');
  strictEqual(registerFor('G', 'Document 2 · répondeur · service client'), 'B');
});

test('every other block ignores the label entirely', () => {
  // An annonce publique is an announcement whatever its part is called.
  for (const b of ['A', 'B', 'C', 'D', 'E', 'F']) {
    strictEqual(registerFor(b, 'anything at all · micro-trottoir'), b);
  }
});

test('the paper’s micro-trottoirs all cast to street voices', () => {
  // The assertion that the fix actually reached the content.
  const g = TASKS.find((t) => t.label === 'Section G')!;
  const vox = (g.parts ?? []).filter((p) => p.label.includes('micro-trottoir'));
  ok(vox.length === 4, `expected four vox-pops in block G, found ${vox.length}`);
  for (const p of vox) {
    const cast = castDocument(parseTurns(p.text ?? ''), registerFor('G', p.label));
    for (const turn of cast) {
      ok(turn.slot.endsWith('-street'), `${p.label} cast ${turn.slot}, not a street voice`);
    }
  }
});

test('tuning a voice’s prosody re-renders what it speaks', () => {
  // The casting file invites someone to tune stability per slot months from
  // now. If the key ignored settings, that edit would leave every existing
  // clip in place and the tuning would silently do nothing.
  const cast = castDocument(parseTurns('LA PASSANTE : Franchement.'), 'C');
  const base = examAssetKey(cast, voiceIdFor, 'elevenlabs', 'v1');
  const tuned = examAssetKey(cast, voiceIdFor, 'elevenlabs', 'v1', () => ({ stability: 0.7 }));
  ok(base !== tuned, 'a changed setting must change the key');
  // Key ORDER is an accident of parsing and must not change anything.
  strictEqual(
    examAssetKey(cast, voiceIdFor, 'elevenlabs', 'v1', () => ({ stability: 0.7, style: 0.2 })),
    examAssetKey(cast, voiceIdFor, 'elevenlabs', 'v1', () => ({ style: 0.2, stability: 0.7 }))
  );
  // No settings at all is the same as it always was, so today's clips are not
  // orphaned by adding this.
  strictEqual(base, examAssetKey(cast, voiceIdFor, 'elevenlabs', 'v1', () => ({})));
});

/* ─── where an interlocutor turn lives ───────────────────────────────────── */

test('turn paths are relative to the interlocutor column, never prefixed', () => {
  // This is the bug that erased a whole answer bank. Prefixing the path with
  // 'interlocutor' addresses a key that does not exist inside the column;
  // Postgres resolves `#>` to NULL, `NULL || {...}` is NULL, and jsonb_set
  // with a NULL value returns NULL — so one wrong path nulls the column
  // instead of failing.
  const bank = { opening: {}, answers: [{}, {}, {}], catchAll: {}, closing: {} };
  const paths = interlocutorTurnPaths(bank);
  deepStrictEqual(paths, [
    ['opening'],
    ['answers', '0'],
    ['answers', '1'],
    ['answers', '2'],
    ['catchAll'],
    ['closing'],
  ]);
  for (const p of paths) ok(p[0] !== 'interlocutor', `path is prefixed with the column name: ${p.join('.')}`);
});

test('every turn in a bank gets exactly one path, in play order', () => {
  // The render loop zips these against [opening, ...answers, catchAll,
  // closing]. A length or order mismatch would point a clip at the wrong turn,
  // and the examiner would answer a question nobody asked.
  const bank = { opening: {}, answers: [{}, {}], catchAll: {}, closing: {} };
  const paths = interlocutorTurnPaths(bank);
  // opening + every answer + catchAll + closing.
  strictEqual(paths.length, 3 + bank.answers.length);
  strictEqual(paths[0]![0], 'opening');
  strictEqual(paths[paths.length - 1]![0], 'closing');
  strictEqual(paths[paths.length - 2]![0], 'catchAll');
});

test('the render query refuses a path that does not resolve', () => {
  // Belt and braces: even with the paths right, the SQL must not be able to
  // write NULL over a bank. The guard is what turns a bad path into a loud
  // failure instead of a silent erasure.
  //
  // The guard used to be written against `interlocutor` by name. It is now
  // templated on the column, because a DELF debate bank lives on `debate` and
  // the same update serves both — so this asserts the SHAPE rather than the
  // literal, and additionally that the only two columns it can name are the two
  // that hold banks. An interpolated identifier is safe here only because that
  // union is closed.
  const src = readFileSync(resolve(HERE, '../render-audio.ts'), 'utf8');
  ok(
    /and \$\{col\} #> \$2::text\[\] is not null/.test(src),
    'the bank update must guard on the path resolving, whichever column it targets'
  );
  ok(/did not resolve on/.test(src), 'and must say so when it does not');
  ok(
    /column: 'interlocutor' \| 'debate'/.test(src),
    'the column must be a closed union of literals — it is interpolated into SQL'
  );
});

test('a TCF label is not silently cast as TEF block C', () => {
  // THE bug this guards. The register key used to be sliced off the task
  // label: 'Section C' gives 'C'. A TCF label is 'Compréhension orale · A1',
  // which also begins with C — so every TCF document would have been cast as a
  // block C micro-trottoir and paced at block C's speed. Street voices for a
  // philosophy panel, nothing thrown, nothing to see but wrong audio.
  const key = registerKeyFor({
    format: 'tcf_canada',
    taskLabel: 'Compréhension orale · A1',
    partLabel: 'Document 1 · un message',
    level: 'a1',
  });
  strictEqual(key, 'a1');
  notStrictEqual(key, 'C');
});

test('every TCF band has its own casting list', () => {
  for (const band of ['a1', 'a2', 'b1', 'b2', 'c1', 'c2']) {
    const list = BAND_PREFERENCE[band];
    ok(list && list.length >= 2, `${band} has no usable preference list`);
    // At least one of each sex, or a two-speaker document cannot be cast.
    ok(list!.some((s) => s.startsWith('f-')) && list!.some((s) => s.startsWith('m-')), `${band} is single-sex`);
  }
});

test('a TCF task with no level is refused, not defaulted', () => {
  // Defaulting would pick a register that sounds fine and is not the one the
  // ramp asked for, which is the same silent failure in a different coat.
  throws(() =>
    registerKeyFor({ format: 'tcf_canada', taskLabel: 'Compréhension orale · A1', partLabel: 'x', level: null })
  );
});

test('TEF casting is untouched by any of this', () => {
  strictEqual(registerKeyFor({ format: 'tef_canada', taskLabel: 'Section C', partLabel: 'Micro-trottoir 1', level: 'b2' }), 'C');
  // Block G still takes its register from the PART label, not the block.
  strictEqual(
    registerKeyFor({ format: 'tef_canada', taskLabel: 'Section G', partLabel: 'Document 4 · micro-trottoir · x', level: 'a2' }),
    'C'
  );
  strictEqual(
    registerKeyFor({ format: 'tef_canada', taskLabel: 'Section G', partLabel: 'Document 5 · consignes · x', level: 'a2' }),
    'B'
  );
});

test('a TCF band casts two speakers to two different voices', () => {
  // The paper's two three-voice documents put two women together, and the item
  // is who said what. Casting is only safe if the list can supply them.
  const turns = [
    { speaker: 'UNE MODÉRATRICE', text: 'a' },
    { speaker: 'UN STATISTICIEN', text: 'b' },
    { speaker: 'UNE BIOLOGISTE', text: 'c' },
  ];
  const cast = castDocument(turns, 'c1');
  const slots = new Set(cast.map((c) => c.slot));
  strictEqual(slots.size, 3, 'three speakers must get three voices');
});

test('a band-keyed format is never cast off the first letter of its label', () => {
  // THE SECOND TIME THIS SHAPE OF BUG HAS APPEARED.
  //
  // The fall-through reads a block letter from the task label, which is a TEF
  // fact: its labels really are "Section C". Applied to a French épreuve name
  // it is silently wrong rather than loud, because these all begin with C:
  //
  //   'Compréhension orale · A1'                 TCF
  //   'Compréhension de l’oral · Exercice 1'     DELF
  //
  // Every document would be cast and paced as a TEF block C micro-trottoir and
  // nothing would fail — no exception, no empty result, just the wrong voices
  // at the wrong speed. TCF hit it once. DELF was added to the same
  // fall-through and would have hit it again on its first render.
  for (const format of ['tcf_canada', 'delf_b2']) {
    const key = registerKeyFor({
      format,
      taskLabel: 'Compréhension de l’oral · Exercice 1',
      partLabel: '',
      level: 'b2',
    });
    strictEqual(key, 'b2', `${format} was keyed "${key}" — the band is the key for a format with no blocks`);
  }

  // TEF still reads its block letter, which is what that branch is for.
  strictEqual(registerKeyFor({ format: 'tef_canada', taskLabel: 'Section C', partLabel: '', level: 'b1' }), 'C');

  // And a band-keyed task with no level is an authoring fault, not something to
  // paper over with a default that sounds fine.
  throws(
    () => registerKeyFor({ format: 'delf_b2', taskLabel: 'x', partLabel: '', level: null }),
    /no usable level/
  );
});

test('debate turn paths line up with the order the renderer walks them', () => {
  // The dangerous coupling in this module. The paths are RELATIVE TO THE
  // `debate` COLUMN and the renderer writes each clip with jsonb_set, so a path
  // list that drifts from the walk order does not fail — it attaches the
  // recording of one objection to a different one, and the candidate hears the
  // examiner answer something they were not asked.
  //
  // Two axes with different move counts, because equal counts would let an
  // off-by-one in the axis index pass.
  const bank = {
    opening: { id: 'open' },
    clarify: { id: 'clar' },
    axes: [
      { moves: [{ id: 'a1' }, { id: 'a2' }, { id: 'a3' }] },
      { moves: [{ id: 'b1' }, { id: 'b2' }] },
    ],
    closing: { id: 'close' },
  };

  const paths = debateTurnPaths(bank);
  // The walk order render-audio.ts uses, written out independently here.
  const walked = [bank.opening, bank.clarify, ...bank.axes.flatMap((a) => a.moves), bank.closing];

  strictEqual(paths.length, walked.length, 'a path per turn, or a clip lands on the wrong one');
  deepStrictEqual(paths[0], ['opening']);
  deepStrictEqual(paths[1], ['clarify']);
  deepStrictEqual(paths[paths.length - 1], ['closing']);

  // Resolve every path against the bank and check it arrives at the turn the
  // walk put in that position. This is the assertion that actually catches a
  // drift, rather than counting.
  paths.forEach((path, i) => {
    let node: unknown = bank;
    for (const seg of path) node = (node as Record<string, unknown>)[seg];
    strictEqual(
      (node as { id: string }).id,
      (walked[i] as { id: string }).id,
      `path ${path.join('.')} resolves to a different turn than the walk's position ${i}`
    );
  });
});
