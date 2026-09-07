// The DELF débat state machine.
//
// Every test here is a failure the design exists to prevent, not a
// demonstration that the code runs. See ealch-admin/DESIGN-delf-debate.md.
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import {
  DEBATE_MAX_S,
  advance,
  debateReport,
  detectSide,
  engaged,
  hasRetreated,
  openingState,
  selectDebateMove,
  type DebateAxis,
  type DebateMove,
  type ExamDebate,
} from './debate.logic.ts';

const move = (id: string, kind: DebateMove['kind'], depth: 1 | 2 | 3): DebateMove => ({
  id,
  kind,
  depth,
  text: `Réplique ${id}.`,
  cues: [],
  covers: `${kind} at depth ${depth}`,
});

const axis = (id: string, against: 'pour' | 'contre', extra: DebateMove[] = []): DebateAxis => ({
  id,
  against,
  about: `ligne ${id}`,
  moves: [
    move(`${id}-1`, 'counter', 1),
    move(`${id}-2`, 'counter-example', 2),
    move(`${id}-3`, 'concession', 3),
    ...extra,
  ],
});

const BANK: ExamDebate = {
  question: 'Faut-il rendre les transports publics gratuits ?',
  opening: { id: 'open', text: 'Vous avez défendu une position. Je vais la mettre à l’épreuve.', cues: [], covers: 'ouverture' },
  clarify: { id: 'clarify', text: 'Si je vous comprends bien, vous défendez plutôt laquelle des deux positions ?', cues: [], covers: 'lever l’ambiguïté' },
  sideCues: {
    pour: ['je suis pour', 'il faut rendre gratuit', 'la gratuite est necessaire'],
    contre: ['je suis contre', 'il ne faut pas', 'la gratuite est une erreur'],
  },
  axes: [
    axis('cout', 'pour', [move('cout-r', 'retreat', 1)]),
    axis('usage', 'pour'),
    axis('equite', 'contre'),
  ],
  closing: { id: 'close', text: 'Nous allons nous arrêter là. Merci.', cues: [], covers: 'clôture' },
};

/* ── Side detection ───────────────────────────────────────────────────────── */

test('the side is read from the monologue, both ways', () => {
  strictEqual(detectSide('je pense que je suis pour cette mesure', BANK.sideCues), 'pour');
  strictEqual(detectSide('honnêtement je suis contre, et voici pourquoi', BANK.sideCues), 'contre');
});

test('an unreadable monologue returns unclear rather than a guess', () => {
  // The worst failure available here. Attacking the wrong side makes the
  // candidate's correct answer look like a non-answer, and they lose marks for
  // our mistake — so a tie, nothing matched, or both matched all yield unclear.
  strictEqual(detectSide('le sujet est intéressant et complexe', BANK.sideCues), 'unclear');
  strictEqual(detectSide('', BANK.sideCues), 'unclear');
  strictEqual(
    detectSide('je suis pour sur un point et je suis contre sur un autre', BANK.sideCues),
    'unclear',
    'an equal match on both sides is not a coin toss'
  );
});

test('an unclear side is asked about, not guessed at', () => {
  const sel = selectDebateMove(openingState(), 'je ne sais pas trop', BANK);
  strictEqual(sel.kind, 'clarify');
});

/* ── The escalation ladder ────────────────────────────────────────────────── */

test('engaging advances the depth; not engaging re-puts the same point', () => {
  // The rule the ladder turns on. Pushing deeper against someone who did not
  // answer the shallow version produces a debate that is hard for the wrong
  // reason.
  let s = { ...openingState(), side: 'pour' as const };

  const first = selectDebateMove(s, 'je suis pour', BANK);
  ok(first.kind === 'move' && first.turn.depth === 1, 'an axis opens at depth 1');
  s = advance(s, first, 40);

  const shallow = selectDebateMove(s, 'oui', BANK);
  ok(shallow.kind === 'move', 'the examiner still speaks');
  strictEqual(shallow.turn.depth, 2, 'a non-answer does not reach depth 3');

  const long = 'je maintiens ma position parce que le coût est compensé par la baisse des embouteillages et par le report modal';
  ok(engaged(long) && !engaged('oui'), 'the engagement heuristic separates a turn from a grunt');

  s = advance(s, shallow, 40);
  const deep = selectDebateMove(s, long, BANK);
  ok(deep.kind === 'move' && deep.turn.depth === 3, 'engaging reaches the concession probe');
  ok(deep.kind === 'move' && deep.turn.kind === 'concession');
});

test('depth 3 cannot be reached without passing through 2', () => {
  // The concession probe is built on the candidate's own depth-2 answer. Served
  // first it is incoherent, because it turns an answer they have not given
  // against them.
  const s = { ...openingState(), side: 'pour' as const };
  const long = 'je défends cette position pour trois raisons que je vais développer maintenant en détail';
  const first = selectDebateMove(s, long, BANK);
  ok(first.kind === 'move' && first.turn.depth === 1, 'the first move of an axis is depth 1 whatever they said');
});

/* ── Retreat ──────────────────────────────────────────────────────────────── */

test('abandoning the position is detected, qualifying it is not', () => {
  const s = { ...openingState(), side: 'pour' as const };
  ok(
    hasRetreated(s, 'finalement je suis contre, vous avez raison', BANK.sideCues),
    'switching sides is a retreat'
  );
  ok(
    !hasRetreated(s, 'je vous accorde ce point précis mais la mesure reste souhaitable', BANK.sideCues),
    'conceding a point is NOT a retreat — nuancing is the B2 skill being tested'
  );
});

test('a retreat is answered before the open axis is pushed deeper', () => {
  // Pushing the open axis would be pushing against a position they no longer
  // hold, which reads as an examiner who was not listening.
  let s = { ...openingState(), side: 'pour' as const };
  s = advance(s, selectDebateMove(s, 'je suis pour', BANK), 40);
  const sel = selectDebateMove(s, 'en fait je suis contre', BANK);
  ok(sel.kind === 'move' && sel.turn.kind === 'retreat', `expected a retreat move, got ${sel.kind === 'move' ? sel.turn.kind : sel.kind}`);
});

test('a retreat move is never served to someone who has not retreated', () => {
  // A real bug, found by this suite. A retreat move sits at a depth like any
  // other, so a ladder that selected on depth alone served `cout-r` to a
  // candidate who answered "oui" — asking what changed their mind when nothing
  // had. Nonsense to a candidate, and it costs them one of their turns.
  //
  // Pinned directly rather than left to the depth assertion that caught it
  // incidentally, because the next selection change could reintroduce it
  // without moving any depth.
  let s = { ...openingState(), side: 'pour' as const };
  const holding = 'je maintiens ma position et je vais la défendre avec un exemple concret et chiffré';

  for (let i = 0; i < 8; i += 1) {
    const sel = selectDebateMove(s, i % 2 ? 'oui' : holding, BANK);
    if (sel.kind !== 'move') break;
    ok(
      sel.turn.kind !== 'retreat',
      `a retreat move (${sel.turn.id}) was served on turn ${i + 1} to a candidate holding their position`
    );
    s = advance(s, sel, 45);
  }
});

/* ── Length: the failure that started all this ────────────────────────────── */

test('the debate does not run dry before its ten-minute floor', () => {
  // The defect this module exists for. A TEF-shaped bank of seven answers
  // closes in about three minutes; DELF needs ten to thirteen, and an examiner
  // who falls silent for the remaining seven has broken the épreuve.
  let s = { ...openingState(), side: 'pour' as const };
  let turns = 0;
  const reply = 'je maintiens ma position et je vais expliquer précisément pourquoi elle tient malgré votre objection';

  while (s.elapsedS < DEBATE_MAX_S && turns < 60) {
    const sel = selectDebateMove(s, reply, BANK);
    if (sel.kind === 'closing') break;
    s = advance(s, sel, 45);
    turns += 1;
  }
  ok(
    s.elapsedS >= DEBATE_MAX_S,
    `the examiner ran out after ${s.elapsedS}s (${turns} turns); the épreuve needs ${DEBATE_MAX_S}s`
  );
});

test('the clock ends the debate, not the bank', () => {
  const s = { ...openingState(), side: 'pour' as const, elapsedS: DEBATE_MAX_S };
  const sel = selectDebateMove(s, 'je continue', BANK);
  strictEqual(sel.kind, 'closing', 'past the ceiling the examiner closes even with moves left');
});

test('only axes written against the candidate’s side are used', () => {
  // The bank carries both sides because the candidate picks. Serving an axis
  // written against the other side attacks a position they never took.
  let s = { ...openingState(), side: 'contre' as const };
  const seen: string[] = [];
  for (let i = 0; i < 6; i += 1) {
    const sel = selectDebateMove(s, 'je maintiens ma position pour les raisons que je viens de développer ici', BANK);
    if (sel.kind !== 'move') break;
    seen.push(sel.axis.id);
    s = advance(s, sel, 45);
  }
  ok(seen.length > 0, 'nothing was served');
  deepStrictEqual([...new Set(seen)], ['equite'], `served axes for the wrong side: ${[...new Set(seen)].join(', ')}`);
});

/* ── The report ───────────────────────────────────────────────────────────── */

test('the report says what happened, and coverage would have said the opposite', () => {
  // A candidate who met every objection by agreeing has argued badly.
  // `coverageOf` would score them full marks for having heard them all, which
  // is why this format needed a different measure rather than a bigger bank.
  let s = { ...openingState(), side: 'pour' as const };
  for (let i = 0; i < 3; i += 1) {
    const sel = selectDebateMove(s, 'je maintiens ma position et je développe mon argument avec un exemple concret', BANK);
    if (sel.kind !== 'move') break;
    s = advance(s, sel, 45);
  }

  const held = debateReport(s, BANK, 'pour', 1);
  strictEqual(held.side, 'pour');
  ok(held.held, 'a candidate on the same side at the end held their position');
  ok(held.axesOpened >= 1);
  strictEqual(held.axesAvailable, 2, 'two axes are written against "pour"');

  const folded = debateReport(s, BANK, 'contre', 0);
  ok(!folded.held, 'a candidate who ended on the other side did not hold it');
});

/* ── The schema contract ──────────────────────────────────────────────────── */

test('a po_debate task must carry a bank, and no other task type may', async () => {
  const { validateExamTask } = await import('../content/schema.ts');
  const task = (over: Record<string, unknown> = {}) => ({
    id: 'exam.delf_b2.blanc-01.po_debate.001',
    format: 'delf_b2',
    variant: 'blanc-01',
    formatVersion: 'delf-b2-2026.09',
    taskType: 'po_debate',
    skill: 'PO',
    level: 'b2',
    prompt: 'Défendez votre point de vue face à l’examinateur.',
    timingS: 780,
    rubric: { criteria: [{ key: 'k', label: 'L', maxPoints: 5, descriptors: ['a', 'b'] }] },
    modelAnswer: 'x'.repeat(220),
    ...over,
  });

  // An examiner with no objections cannot challenge anything: the task would be
  // a second monologue wearing a debate's label.
  const none = validateExamTask(task());
  ok(none.some((i) => i.message.includes('MUST have a debate bank')), 'a bankless debate was accepted');

  // And the bank belongs to this type alone.
  const wrong = validateExamTask(task({ taskType: 'po_monologue', debate: BANK, id: 'exam.delf_b2.blanc-01.po_monologue.001' }));
  ok(wrong.some((i) => i.message.includes('debate belongs to a po_debate task')), 'a monologue was allowed a debate bank');

  deepStrictEqual(validateExamTask(task({ debate: BANK })), [], 'a well-formed debate task was rejected');
});

test('the validator refuses a bank that can only attack one side', async () => {
  const { validateExamTask } = await import('../content/schema.ts');
  // THE rule for this bank. Which side the candidate argues is unknown until
  // they have spoken for five to seven minutes, so a bank written against one
  // side leaves the examiner with nothing to say to half of all candidates —
  // and they would be the half who argued the position the author found easier
  // to imagine.
  const oneSided = { ...BANK, axes: BANK.axes.filter((a) => a.against === 'pour') };
  const issues = validateExamTask({
    id: 'exam.delf_b2.blanc-01.po_debate.001',
    format: 'delf_b2', variant: 'blanc-01', formatVersion: 'delf-b2-2026.09',
    taskType: 'po_debate', skill: 'PO', level: 'b2',
    prompt: 'Défendez votre point de vue.', timingS: 780,
    rubric: { criteria: [{ key: 'k', label: 'L', maxPoints: 5, descriptors: ['a', 'b'] }] },
    modelAnswer: 'x'.repeat(220),
    debate: oneSided,
  });
  ok(
    issues.some((i) => i.message.includes('no axis attacks the "contre" side')),
    'a one-sided bank was accepted'
  );
});

test('the validator refuses an axis that can never open', async () => {
  const { validateExamTask } = await import('../content/schema.ts');
  // An axis whose only depth-1 move is a retreat has no entry point: retreats
  // are served from the retreat branch, not the ladder, so the axis would sit
  // in the bank and never be reached.
  const stuck = {
    ...BANK,
    axes: BANK.axes.map((a) =>
      a.id === 'equite' ? { ...a, moves: a.moves.filter((m) => m.depth !== 1) } : a
    ),
  };
  const issues = validateExamTask({
    id: 'exam.delf_b2.blanc-01.po_debate.001',
    format: 'delf_b2', variant: 'blanc-01', formatVersion: 'delf-b2-2026.09',
    taskType: 'po_debate', skill: 'PO', level: 'b2',
    prompt: 'Défendez votre point de vue.', timingS: 780,
    rubric: { criteria: [{ key: 'k', label: 'L', maxPoints: 5, descriptors: ['a', 'b'] }] },
    modelAnswer: 'x'.repeat(220),
    debate: stuck,
  });
  ok(issues.some((i) => i.message.includes('can never open')), 'an unreachable axis was accepted');
});

/* ── The image gate ───────────────────────────────────────────────────────── */

test('a DELF stimulus may not carry an image, and a TEF one still may', async () => {
  const { validateExamTask } = await import('../content/schema.ts');

  const withImage = (format: string, id: string) => ({
    id,
    format,
    variant: 'blanc-01',
    formatVersion: format === 'delf_b2' ? 'delf-b2-2026.09' : 'tef-canada-2025.09',
    taskType: 'ce_mcq',
    skill: 'CE',
    level: 'b2',
    prompt: 'Lisez le document et choisissez la bonne réponse.',
    timingS: 3600,
    parts: [
      {
        label: 'Document 1',
        text: 'La consommation a baissé chaque année depuis 2021.',
        imageRef: 'img/exam/x/ce-01.png',
        imageAlt: 'Graphique en barres. 2021 : 148. 2022 : 141.',
        items: [{ q: 'Que montre le graphique ?', opts: ['Une baisse', 'Une hausse'], correct: 0, band: 'b2' as const }],
      },
    ],
  });

  // DELF: measured to have no content images at all. An image a candidate must
  // read is not in this format.
  const delf = validateExamTask(withImage('delf_b2', 'exam.delf_b2.blanc-01.ce_mcq.001'));
  ok(
    delf.some((i) => i.message.includes('DELF B2 stimuli are text and audio only')),
    'a DELF paper was allowed an image stimulus'
  );

  // TEF: the opposite case, and the reason the rule is format-scoped. Block A's
  // images ARE the options, and blanc-01's Section E chart is a real stimulus
  // whose alt text must be exhaustive. A rule written for DELF would break it.
  const tef = validateExamTask(withImage('tef_canada', 'exam.tef_canada.blanc-01.ce_mcq.001'));
  deepStrictEqual(tef, [], 'the DELF image rule leaked into TEF and rejected a legitimate chart');
});
