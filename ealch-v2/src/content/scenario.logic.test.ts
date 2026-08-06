import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { BEAT, acceptedReplies, bestReply, transcriptOf, type Attempt } from './scenario.logic.ts';
import { barsForLevel } from '../utils/score.ts';
import type { ScenarioTurn } from './schema.ts';

const here = dirname(fileURLToPath(import.meta.url));
const bars = barsForLevel('sons');

/** One turn of sons.06's market scene, with the alternatives a real vendor
 *  would also have accepted. */
const turn: ScenarioTurn = {
  ai: 'Bonjour ! Je peux vous aider ?',
  en: 'Morning, can I help you?',
  user: 'Oui, je cherche un sac.',
  userEn: "Yes, I'm looking for a bag.",
  alts: [
    { fr: 'Je voudrais un sac, merci.', en: "I'd like a bag, thank you." },
    { fr: 'Bonjour, oui. Un sac.', en: 'Morning, yes. A bag.' },
  ],
};

/* ─── accepted replies ────────────────────────────────────────────────────── */

test('the model line leads, then the alternatives in authored order', () => {
  const r = acceptedReplies(turn);
  strictEqual(r.length, 3);
  strictEqual(r[0].fr, 'Oui, je cherche un sac.');
  strictEqual(r[0].en, "Yes, I'm looking for a bag.");
  strictEqual(r[1].fr, 'Je voudrais un sac, merci.');
  strictEqual(r[2].fr, 'Bonjour, oui. Un sac.');
});

test('a turn with no alternatives still offers the model', () => {
  const r = acceptedReplies({ ai: 'A', en: 'a', user: 'Oui.' });
  deepStrictEqual(r, [{ fr: 'Oui.', en: undefined }]);
});

test('an alternative that repeats the model is not shown twice', () => {
  // The schema validator rejects this, but content reaches the renderer from a
  // cached OTA snapshot too, and a doubled bubble reads as a bug to the learner.
  const r = acceptedReplies({
    ai: 'A',
    en: 'a',
    user: 'Oui, je cherche un sac.',
    alts: [{ fr: 'oui je cherche un sac', en: 'dup' }, { fr: 'Non, merci.', en: 'No thanks.' }],
  });
  strictEqual(r.length, 2);
  strictEqual(r[1].fr, 'Non, merci.');
});

/* ─── best-of scoring ─────────────────────────────────────────────────────── */

test('saying the model line scores against the model', () => {
  const b = bestReply(turn, 'Oui, je cherche un sac.', bars);
  strictEqual(b.verdict, 'good');
  strictEqual(b.matched.fr, 'Oui, je cherche un sac.');
});

test('saying a listed alternative is graded right, not "not quite"', () => {
  // This is the whole reason the field exists. Scored model-only, this
  // utterance lands well below the bar and the learner is told a correct
  // French sentence was wrong.
  const b = bestReply(turn, 'Je voudrais un sac, merci.', bars);
  strictEqual(b.verdict, 'good');
  strictEqual(b.matched.fr, 'Je voudrais un sac, merci.');

  const modelOnly = bestReply({ ...turn, alts: [] }, 'Je voudrais un sac, merci.', bars);
  ok(modelOnly.verdict !== 'good', 'model-only scoring is what this test exists to contrast');
});

test('an unrelated utterance is still wrong', () => {
  const b = bestReply(turn, 'Le chat est sur la table.', bars);
  ok(b.verdict === 'off' || b.verdict === 'close', `expected a miss, got ${b.verdict}`);
  ok(b.score < 0.72, `expected a low score, got ${b.score}`);
});

test('an empty transcript returns the model and no verdict', () => {
  const b = bestReply(turn, '', bars);
  strictEqual(b.verdict, 'none');
  strictEqual(b.matched.fr, turn.user);
});

test('ties keep the model, so the reveal stays anchored to what was taught', () => {
  const twin: ScenarioTurn = {
    ai: 'A',
    en: 'a',
    user: 'Oui.',
    alts: [{ fr: 'Oui.', en: 'dup' }],
  };
  strictEqual(bestReply(twin, 'Oui.', bars).matched.en, undefined);
});

/* ─── the visible conversation ────────────────────────────────────────────── */

const turns: ScenarioTurn[] = [
  { ai: 'A1', en: 'a1', user: 'U1' },
  { ai: 'A2', en: 'a2', user: 'U2' },
  { ai: 'A3', en: 'a3', user: 'U3' },
];

test('nothing is behind you on the first turn', () => {
  deepStrictEqual(transcriptOf(turns, [], 0), []);
});

test('completed turns stay on screen, in order, both speakers', () => {
  const attempts: Attempt[] = [
    { kind: 'spoke', heard: 'U1 said', score: 0.9, verdict: 'good', matched: { fr: 'U1' } },
    { kind: 'shown' },
  ];
  const lines = transcriptOf(turns, attempts, 2);
  strictEqual(lines.length, 4);
  deepStrictEqual(lines.map((l) => l.who), ['ai', 'me', 'ai', 'me']);
  strictEqual(lines[0].who === 'ai' && lines[0].fr, 'A1');
  strictEqual(lines[1].who === 'me' && lines[1].attempt.kind, 'spoke');
  strictEqual(lines[3].who === 'me' && lines[3].attempt.kind, 'shown');
});

test('the live turn is never in the scrollback — it is rendered separately', () => {
  const lines = transcriptOf(turns, [{ kind: 'shown' }], 1);
  strictEqual(lines.length, 2);
  ok(!lines.some((l) => l.who === 'ai' && l.fr === 'A2'), 'turn 2 is live, not scrollback');
});

test('a finished conversation shows every turn', () => {
  const attempts: Attempt[] = [{ kind: 'shown' }, { kind: 'unheard' }, { kind: 'shown' }];
  strictEqual(transcriptOf(turns, attempts, turns.length).length, 6);
});

test('an index past the end does not read off the array', () => {
  strictEqual(transcriptOf(turns, [], 99).length, 3);
});

/* ─── pacing ──────────────────────────────────────────────────────────────── */

test('there is a real pause before the learner is asked to speak', () => {
  ok(BEAT.prompt >= 800, 'a beat under ~0.8s is not a beat, it is a flicker');
  ok(BEAT.prompt <= 2500, 'a beat over ~2.5s reads as the app having stalled');
  ok(BEAT.reveal > 0 && BEAT.reveal < BEAT.prompt);
});

/* ─── the renderer honours all of it ──────────────────────────────────────── */

test('ScenarioView keeps the conversation on screen', () => {
  const src = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  const view = src.slice(src.indexOf('export function ScenarioView'));
  ok(/transcriptOf\(/.test(src), 'the scrollback comes from the tested logic, not a local copy');
  ok(/scrollback\.map/.test(view), 'and it is rendered');
  ok(
    !/<ScenarioTurnView[\s\S]{0,200}key=\{ix\}[\s\S]{0,200}\/>\s*<\/View>\s*\)\}\s*<\/View>\s*\);\s*\}\s*$/.test(view.trim()),
    'the live turn is not the only thing on screen',
  );
});

test('the turn re-scores against every accepted reply, not just the model', () => {
  const src = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  const turnView = src.slice(src.indexOf('function ScenarioTurnView'), src.indexOf('export function ScenarioView'));
  ok(/bestReply\(turn, res\.transcript/.test(turnView), 'the transcript is re-scored');
  ok(/expected: best\.matched\.fr/.test(turnView), 'and the matched reply is what gets logged');
});

test('the coach speaks its own line, gated on the page being in view', () => {
  const src = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  const turnView = src.slice(src.indexOf('function ScenarioTurnView'), src.indexOf('export function ScenarioView'));
  ok(/tts\.speak\(turn\.ai/.test(turnView), 'the AI line auto-speaks — it used to be dead code');
  ok(/if \(!active \|\| asked\) return;/.test(turnView), 'and only on the mission actually being read');
  ok(/BEAT\.prompt/.test(turnView), 'the prompt waits for the beat');

  const section = readFileSync(resolve(here, '../components/MissionSection.tsx'), 'utf8');
  ok(/<ScenarioView s=\{s\} active=\{active !== false\} \/>/.test(section), 'and the pager tells it which page is live');
});

test('the section owns the viewport, so Continue never sinks below the fold', () => {
  // Device-found: the scrollback grows two bubbles a turn, so inside the
  // pager's scrolling page the section's own Continue was off-screen by turn
  // two while the pager's Next stayed pinned — and pressing Next abandons the
  // conversation while looking like progress.
  const pager = readFileSync(resolve(here, '../components/LessonPager.tsx'), 'utf8');
  const owns = pager.slice(pager.indexOf('function ownsLayout'), pager.indexOf('function ownsLayout') + 3000);
  ok(/if \(s\.type === 'scenario'\) return true;/.test(owns), 'scenario must own its layout');

  const src = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  const block = src.slice(src.indexOf('/* ─── 8. Scenario'), src.indexOf('/* ─── 9. Listening'));
  ok(/<ScrollView/.test(block), 'the dialogue scrolls inside the section');
  ok(/scrollToEnd/.test(block), 'and follows the newest turn');
  ok(/Pinned\./.test(block), 'with the controls pinned outside that scroller');
});

test('speaking is offered, never required', () => {
  const src = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  const turnView = src.slice(src.indexOf('function ScenarioTurnView'), src.indexOf('export function ScenarioView'));
  ok(/onPress=\{show\}/.test(turnView), 'there is a way through without a mic');
  ok(/kind: 'shown'/.test(turnView), 'and it is recorded as its own outcome');
});

/* ─── the authored content honours it too ─────────────────────────────────── */

/** Every role play in the seed, as { lessonId, section }. */
function seedScenarios(): { id: string; turns: ScenarioTurn[]; title: string }[] {
  const seed = JSON.parse(readFileSync(resolve(here, './seed.json'), 'utf8')) as {
    lessons?: { id: string; sections?: { type: string; title?: string; turns?: ScenarioTurn[] }[] }[];
  };
  const out: { id: string; turns: ScenarioTurn[]; title: string }[] = [];
  for (const l of seed.lessons ?? []) {
    for (const s of l.sections ?? []) {
      if (s.type === 'scenario' && s.turns) out.push({ id: l.id, turns: s.turns, title: s.title ?? '' });
    }
  }
  return out;
}

test('every authored role-play turn says what the model line means', () => {
  const bad = seedScenarios().flatMap((s) =>
    s.turns.map((t, i) => (t.userEn?.trim() ? null : `${s.id} turn ${i}`)).filter(Boolean)
  );
  deepStrictEqual(bad, [], 'a reveal without a translation shows the learner a sentence they cannot read');
});

test('every authored role-play turn offers more than one way to answer', () => {
  const bad = seedScenarios().flatMap((s) =>
    s.turns.map((t, i) => ((t.alts?.length ?? 0) >= 2 ? null : `${s.id} turn ${i}`)).filter(Boolean)
  );
  deepStrictEqual(bad, [], 'one accepted answer per turn is the cloze-test failure this content exists to fix');
});

test('no alternative repeats or duplicates another on the same turn', () => {
  const dupes: string[] = [];
  for (const s of seedScenarios()) {
    s.turns.forEach((t, i) => {
      const keys = acceptedReplies(t).length;
      const authored = 1 + (t.alts?.length ?? 0);
      if (keys !== authored) dupes.push(`${s.id} turn ${i}`);
    });
  }
  deepStrictEqual(dupes, []);
});

test('every alternative carries its own English', () => {
  const bad: string[] = [];
  for (const s of seedScenarios()) {
    s.turns.forEach((t, i) => {
      (t.alts ?? []).forEach((a, j) => {
        if (!a.fr?.trim() || !a.en?.trim()) bad.push(`${s.id} turn ${i} alt ${j}`);
      });
    });
  }
  deepStrictEqual(bad, []);
});

test('a conversation never mixes straight and typographic apostrophes', () => {
  // The a1 lessons were authored with ’ and the sons lessons with ', and both
  // are visible in the same bubble stack once alternatives are added.
  const mixed: string[] = [];
  for (const s of seedScenarios()) {
    const all = s.turns.flatMap((t) => [t.ai, t.user, ...(t.alts ?? []).map((a) => a.fr)]).join('');
    if (/’/.test(all) && /'/.test(all)) mixed.push(s.id);
  }
  deepStrictEqual(mixed, []);
});

test('the refresher courses all have a role play, or are named as not having one', () => {
  // Sons 1 (alphabet), Sons 4 (consonnes) and Sons 9 (rythme) ship without a
  // `scenario` section. That is a content gap, recorded here so it stays
  // visible and so adding one to any of them fails this test on purpose.
  const withRp = new Set(seedScenarios().map((s) => s.id));
  const expectedMissing = ['sons.01.l1', 'sons.04.l1', 'sons.08.l1'];
  for (const id of expectedMissing) {
    ok(!withRp.has(id), `${id} now has a role play — give it alternatives and drop it from this list`);
  }
  for (const id of ['sons.02.l1', 'sons.03.l1', 'sons.05.l1', 'sons.06.l1', 'sons.07.l1', 'sons.09.l1', 'sons.10.l1']) {
    ok(withRp.has(id), `${id} lost its role play`);
  }
  for (const n of ['01', '02', '03', '04', '05', '06', '07', '11', '27', '28', '29']) {
    ok(withRp.has(`a1.${n}.l1`), `a1.${n}.l1 lost its role play`);
  }
});

test('no hardcoded French chrome survives in the scenario renderer', () => {
  // Every one of these shipped as a literal, so an English-mode learner read
  // French labels around an English gloss.
  const src = readFileSync(resolve(here, '../components/MissionRich.tsx'), 'utf8');
  const block = src.slice(src.indexOf('/* ─── 8. Scenario'), src.indexOf('/* ─── 9. Listening'));
  for (const gone of ['Répondre', 'Écoute…', 'Bien dit', 'Presque', 'Réessayez', 'Modèle', 'Scène terminée', 'pas entendu']) {
    ok(!block.includes(gone), `"${gone}" is hardcoded French — it belongs in strings.ts`);
  }
});
