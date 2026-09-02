// Casting a listening document is where the expensive mistakes are: two
// speakers given one voice destroys the item, and a female character given a
// male voice is heard immediately. None of that needs a network to check.
import { deepStrictEqual, ok, strictEqual, throws } from 'node:assert';
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
  const src = readFileSync(resolve(HERE, '../render-audio.ts'), 'utf8');
  ok(
    /and interlocutor #> \$2::text\[\] is not null/.test(src),
    'the interlocutor update must guard on the path resolving'
  );
  ok(/did not resolve on/.test(src), 'and must say so when it does not');
});
