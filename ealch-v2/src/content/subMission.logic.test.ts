// Sub-mission addressing guard. Runs on plain Node (types stripped natively):
//   npm test
//
// subMission.logic.ts imports only types, so it loads here with no RN, no
// store, no services — the same pure-island contract as lessonPager.logic.ts.
//
// Two jobs. Most cases pin the arithmetic and the two notations (display `15.2`
// vs anchor `15/2`), which is the off-by-one-prone part. The last block reads
// the SEED and the COMPONENT SOURCE, because the one way this module can be
// quietly wrong is by counting cards differently from the way the renderer
// builds them — a numbering that disagrees with the swipe is worse than none.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { deepStrictEqual, ok, strictEqual } from 'node:assert';
import { test } from 'node:test';
import type { LessonSection } from './schema.ts';
import {
  a11yMissionLabel,
  clampSub,
  formatAnchor,
  formatMissionLabel,
  formatMissionNumber,
  hasSubMissions,
  parseAnchor,
  parseCardParam,
  subCount,
} from './subMission.logic.ts';

const here = dirname(fileURLToPath(import.meta.url));

/* ─── subCount ────────────────────────────────────────────────────────────── */

test('a plain section is one card and has no sub-missions', () => {
  const s = { type: 'teach', title: 'T', body: 'b' } as LessonSection;
  strictEqual(subCount(s), 1);
  strictEqual(hasSubMissions(s), false);
});

test('an inhibition drill counts two cards per routine, plus its intro and closing', () => {
  const s = {
    type: 'inhibitionDrill',
    title: 'Training the stop',
    intro: 'why',
    closing: { text: 'take this with you' },
    targets: [
      { label: 'a', steps: ['1'], practiceOn: ['fr.x.1'] },
      { label: 'b', steps: ['1'], practiceOn: ['fr.x.2'] },
      { label: 'c', steps: ['1'], practiceOn: ['fr.x.3'] },
    ],
  } as unknown as LessonSection;
  // intro + (steps, words) x 3 + closing. The steps and the words are separate
  // SCREENS because a five-step routine plus four words plus a mic overflows
  // one card — and this must mirror what InhibitionDrillView actually composes,
  // or the header numbers cards the learner never swipes between.
  strictEqual(subCount(s), 8);
  strictEqual(hasSubMissions(s), true);
});

test('a routine with no practice words contributes only its steps card', () => {
  const s = {
    type: 'inhibitionDrill',
    title: 'T',
    targets: [{ label: 'a', steps: ['1'] }, { label: 'b', steps: ['1'], practiceOn: ['fr.x.2'] }],
  } as unknown as LessonSection;
  // One bare routine (1) + one with words (2). An empty second card would be a
  // screen that says nothing.
  strictEqual(subCount(s), 3);
});

test('commonErrors only sub-divides when it is a swipe deck', () => {
  const errors = [
    { wrong: 'a', right: 'b', why: 'c' },
    { wrong: 'd', right: 'e', why: 'f' },
  ];
  strictEqual(subCount({ type: 'commonErrors', title: 'T', swipe: true, errors } as unknown as LessonSection), 2);
  // Without the flag MissionSection falls through to the stacked SectionView:
  // one scrolling screen, so one mission with no parts.
  strictEqual(subCount({ type: 'commonErrors', title: 'T', errors } as unknown as LessonSection), 1);
});

test('a cardDeck counts its cards', () => {
  const cards = [{ fr: 'a' }, { fr: 'b' }, { fr: 'c' }, { fr: 'd' }];
  strictEqual(subCount({ type: 'cardDeck', title: 'T', cards } as unknown as LessonSection), 4);
});

test('a stepped trapDrill counts its steps; an unstepped one is a single screen', () => {
  // Not swipe-versus-button: a trap step is plain component state, so step 2 is
  // the same screen every time and the header can honestly name it 14.2. The
  // four trapDrills authored before stepping existed carry no `steps` and stay
  // one stacked screen.
  const steps = [{ kind: 'cards', label: 'a' }, { kind: 'audio', label: 'b' }, { kind: 'drill', label: 'c' }];
  strictEqual(subCount({ type: 'trapDrill', title: 'T', steps } as unknown as LessonSection), 3);
  strictEqual(subCount({ type: 'trapDrill', title: 'T' } as unknown as LessonSection), 1);
  strictEqual(hasSubMissions({ type: 'trapDrill', title: 'T' } as unknown as LessonSection), false);
});

test('tap-advanced decks are one mission, however many cards they hold', () => {
  // A Leitner position is not a PLACE: ReviewDeckView's index is a function of
  // how the learner rated the cards before it, so "card 7" is not somewhere a
  // header can promise or an anchor can restore — unlike a trap step, which is
  // the same screen every time. Both also draw their own counter inside the
  // card. sons.06 ships a 29-card flashcards section and a 12-card reviewDeck,
  // so this is the difference between one honest label and 41 unrestorable ones.
  const cards = Array.from({ length: 12 }, (_, i) => ({ fr: String(i) }));
  for (const type of ['flashcards', 'reviewDeck']) {
    strictEqual(subCount({ type, title: 'T', cards } as unknown as LessonSection), 1, type);
    strictEqual(hasSubMissions({ type, title: 'T', cards } as unknown as LessonSection), false, type);
  }
});

test('an empty deck is still one card, never zero', () => {
  // A count of 0 would make formatMissionNumber print nothing and clampSub
  // collapse every position — a section mid-authoring must degrade to "one
  // plain mission", not to an unaddressable one.
  strictEqual(subCount({ type: 'cardDeck', title: 'T', cards: [] } as unknown as LessonSection), 1);
  strictEqual(subCount({ type: 'inhibitionDrill', title: 'T', targets: [] } as unknown as LessonSection), 1);
});

/* ─── Labels ──────────────────────────────────────────────────────────────── */

test('the denominator is the mission total, never the sub count', () => {
  // The whole point of the decimal: 15.2 says "part way through 15 of 28".
  // A renumbered 16 / 32 would claim a mission was finished that was not.
  strictEqual(formatMissionLabel(15, 2, 28), 'MISSION 15.2 / 28');
  strictEqual(formatMissionLabel(15, 5, 28), 'MISSION 15.5 / 28');
});

test('one card prints no fraction', () => {
  strictEqual(formatMissionLabel(15, 0, 28), 'MISSION 15 / 28');
  strictEqual(formatMissionLabel(15, 1, 28), 'MISSION 15 / 28');
  strictEqual(formatMissionNumber(15, 1), '15');
  strictEqual(formatMissionNumber(15, 3), '15.3');
});

test('the screen reader gets a position, not a decimal', () => {
  strictEqual(a11yMissionLabel(15, 2, 5, 28), 'Mission 15 of 28, part 2 of 5');
  strictEqual(a11yMissionLabel(15, 1, 5, 28), 'Mission 15 of 28');
  strictEqual(a11yMissionLabel(15, 2, 1, 28), 'Mission 15 of 28');
});

/* ─── Anchors ─────────────────────────────────────────────────────────────── */

test('anchors use the shipped separator, labels use the dot', () => {
  strictEqual(formatAnchor(15, 2), '15/2');
  strictEqual(formatMissionNumber(15, 2), '15.2');
});

test('a single-card position collapses to the bare mission', () => {
  // So an anchor written before this module existed still parses, and a deck
  // later shortened to one card leaves no dangling /2 behind.
  strictEqual(formatAnchor(15, 0), '15');
  strictEqual(formatAnchor(15, 1), '15');
});

test('parseAnchor round-trips both notations', () => {
  for (const [raw, mission, sub] of [
    ['15', 15, 0],
    ['15/2', 15, 2],
    ['15.2', 15, 2],
    ['  15/2  ', 15, 2],
  ] as const) {
    const p = parseAnchor(raw);
    strictEqual(p?.mission, mission, raw);
    strictEqual(p?.sub, sub, raw);
  }
});

test('a corrupt or stale anchor is null, never a throw', () => {
  // Falls back to "start of the lesson" on a cold start rather than crashing
  // the resume path.
  for (const raw of [null, undefined, '', 'abc', '15/', '/2', '15/2/3', '-1', '0', '1.2.3', '15/x']) {
    strictEqual(parseAnchor(raw as string | null), null, JSON.stringify(raw));
  }
});

test('the card param is 1-based going in and 0-based coming out', () => {
  // The param is the number the learner SAW (15.2 -> card=2); the pager works
  // in 0-based indices. One translation, here, rather than three call sites.
  strictEqual(parseCardParam('2'), 1);
  strictEqual(parseCardParam('5'), 4);
  strictEqual(parseCardParam(' 3 '), 2);
  // expo-router hands back string | string[] for a repeated param.
  strictEqual(parseCardParam(['4']), 3);
});

test('card=1 is null, because that is where a deck opens anyway', () => {
  // Honouring it would spend a prop to arrive exactly where the default lands.
  strictEqual(parseCardParam('1'), null);
  strictEqual(parseCardParam('0'), null);
  strictEqual(parseCardParam('-3'), null);
});

test('a junk card param is null, never a throw or a NaN index', () => {
  // A NaN reaching the pager would make scrollTo jump to a nonsense offset;
  // null simply opens the deck at its first card.
  for (const raw of [null, undefined, '', 'abc', '2.5', '1e3', [], ['x']]) {
    strictEqual(parseCardParam(raw as string | null), null, JSON.stringify(raw));
  }
});

test('clampSub lands on the last card when the section got shorter', () => {
  // Content is authored continuously, so an anchor past the end is ordinary.
  // The furthest point that still exists is the honest resolution.
  strictEqual(clampSub(9, 5), 5);
  strictEqual(clampSub(3, 5), 3);
  strictEqual(clampSub(-2, 5), 0);
  strictEqual(clampSub(Number.NaN, 5), 0);
  strictEqual(clampSub(2.7, 5), 2);
});

/* ─── Pinned against the real content and the real renderers ──────────────── */

test('missions 14 and 15 of sons.06 number as the lesson already describes them', () => {
  const seed = JSON.parse(readFileSync(join(here, 'seed.json'), 'utf8')) as {
    lessons: { id: string; sections: LessonSection[] }[];
  };
  const lesson = seed.lessons.find((l) => l.id === 'sons.06.l1');
  ok(lesson, 'sons.06.l1 is in the seed');

  // Mission numbers are 1-based over the full section list, quiz included —
  // the same terms the missions hub and LessonPager's missionNumberOf count in.
  // Resolved by ID, never by position: folding the -er rule into the trap drill
  // shifted every mission after it, and a test that hard-codes an index fails
  // for a reason that has nothing to do with what it is checking.
  const ix = (id: string) => lesson.sections.findIndex((s) => (s as { id?: string }).id === id);
  const missionOf = (id: string) => ix(id) + 1;

  const m15 = lesson.sections[ix('s07-inhibition')] as LessonSection & { id?: string };
  ok(m15, 'the inhibition drill is in the lesson');
  // intro + (steps, words) x 3 + closing. Mission 15 is EIGHT screens now, and
  // the lesson still has 28 missions — which is the point of the sub-address:
  // the mission got room without the spine moving.
  strictEqual(subCount(m15), 8, 'intro + three routines split in two + closing');
  const total = lesson.sections.length;
  strictEqual(
    formatMissionLabel(missionOf('s07-inhibition'), 8, total),
    `MISSION ${missionOf('s07-inhibition')}.8 / ${total}`,
  );

  // The trap drill is stepped: the -er rule, the traps, the audio, the gated
  // reflex. The rule used to be its own mission — 76 words on an empty screen —
  // and folding it in is what took the lesson from 28 sections to 27.
  const trap = lesson.sections[ix('s06-trap')] as LessonSection & {
    id?: string;
    steps?: { kind: string }[];
    rule?: { title: string; body: string };
  };
  ok(trap, 'the trap drill is in the lesson');
  deepStrictEqual(
    (trap.steps ?? []).map((st) => st.kind),
    ['rule', 'cards', 'audio', 'drill'],
    'read the rule, meet the traps, hear them, then prove the reflex',
  );
  // A rule step with no rule is a blank screen carrying the lesson's most
  // important exception — the schema rejects it, and this pins the content.
  ok(trap.rule?.title && trap.rule?.body, 'the rule step has a rule to show');
  strictEqual(subCount(trap), 4, 'four steps, four sub-missions');
  // And the folded-away section is really gone, not orphaned.
  strictEqual(ix('s06-trap-rule'), -1, 'the standalone rule mission is folded in');
  for (const act of (lesson as { acts?: { sections: string[] }[] }).acts ?? []) {
    ok(!act.sections.includes('s06-trap-rule'), 'no act still names the folded section');
  }
});

test('every sub-dividing section in sons.06 is one the pager lets own its layout', () => {
  // The failure this catches: numbering a section that renders as a scrolling
  // stack. Sub-missions are swipe positions, so a section with a sub-count
  // above 1 must also be one the pager hands the viewport to — otherwise the
  // header would count cards the learner never swipes between.
  const seed = JSON.parse(readFileSync(join(here, 'seed.json'), 'utf8')) as {
    lessons: { id: string; sections: LessonSection[] }[];
  };
  const lesson = seed.lessons.find((l) => l.id === 'sons.06.l1');
  ok(lesson);

  const owns = (s: LessonSection): boolean => {
    const sec = s as LessonSection & { swipe?: boolean; size?: string; steps?: unknown[]; questionsInModal?: boolean };
    if (sec.swipe) return true;
    if (s.type === 'reading' && sec.questionsInModal) return true;
    if (s.type === 'cardDeck') return true;
    if (s.type === 'groupDrill' && sec.size === 'xl') return true;
    if (s.type === 'trapDrill' && (sec.steps?.length ?? 0) > 0) return true;
    if (s.type === 'flashcards' || s.type === 'reviewDeck') return true;
    if (s.type === 'practice') return true;
    return false;
  };

  const divided = lesson.sections.filter((s) => hasSubMissions(s));
  ok(divided.length >= 3, 'the lesson really does have sub-divided missions');
  for (const s of divided) {
    const id = (s as { id?: string }).id;
    ok(owns(s), `${id} (${s.type}) sub-divides, so the pager must let it own its layout`);
  }
});

test('every sub-dividing renderer actually reports its position to the pager', () => {
  // The failure this catches is silent and total: subCount() can say a mission
  // has five parts while the renderer never calls back, and the header then
  // sits on 15.1 for all five cards. Nothing throws, nothing fails to compile,
  // and it looks exactly like the frozen label this feature was built to fix.
  const comp = (f: string) => readFileSync(join(here, '..', 'components', `${f}.tsx`), 'utf8');

  const pager = comp('LessonPager');
  ok(/formatMissionLabel\(/.test(pager), 'the header is built by the shared formatter');
  ok(/a11yMissionLabel\(/.test(pager), 'and speaks a position rather than a decimal');
  // Neighbouring pages stay mounted inside PAGE_WINDOW and their decks fire an
  // index on mount, so an unguarded callback lets the mission to the RIGHT
  // overwrite the number of the one being read.
  ok(/onSubIndexChange=\{i === page \?/.test(pager), 'only the page in view drives the header');
  ok(/setSub\(0\)/.test(pager), 'and the sub-number resets when the mission changes');

  const section = comp('MissionSection');
  for (const [view, why] of [
    ['InhibitionDrillView', 'the inhibition drill'],
    ['SwipeDeck', 'the swiped commonErrors deck'],
    ['TrapDrillView', 'the stepped trap'],
    ['SectionView', 'the cardDeck, via the default branch'],
  ] as const) {
    const at = section.indexOf(`<${view}`);
    ok(at > 0, `${view} is rendered here`);
    const el = section.slice(at, section.indexOf('/>', at) + 2);
    ok(/onIndexChange=|onSubIndexChange=/.test(el), `${why} reports its position`);
  }

  // And the leaves forward it to the thing that actually tracks the index.
  ok(/onIndexChange=\{onIndexChange\}/.test(comp('SilentCards')), 'the inhibition deck forwards to its SwipeDeck');
  ok(/onIndexChange=\{onSubIndexChange\}/.test(comp('LessonSection')), 'SectionView forwards to CardDeckView');
  ok(/onIndexChange\?\.\(next\)/.test(comp('LessonRich')), 'the cardDeck reports on scroll');
  ok(/onIndexChange\?\.\(next\)/.test(comp('MissionRich')), 'the trap reports on advance');
});

test('a mission that reports a position does not also draw its own counter', () => {
  // Two counters on one screen invite the reader to work out how they relate,
  // and they relate in no useful way. The trap drew "2 / 3" beside its label;
  // the header now says 14.2 / 28, which carries the same fact plus the mission
  // it belongs to.
  const rich = readFileSync(join(here, '..', 'components', 'MissionRich.tsx'), 'utf8');
  const fn = rich.slice(rich.indexOf('export function TrapDrillView'), rich.indexOf('export function DictationView'));
  ok(fn.length > 0, 'expected a TrapDrillView body');
  ok(!/\{step \+ 1\} \/ \{steps\.length\}/.test(fn), 'the stepped trap no longer draws its own position counter');
});

test('resume carries the card, and the anchor grammar is left alone', () => {
  const screen = readFileSync(join(here, '..', '..', 'app', 'lesson.tsx'), 'utf8');

  // The card rides its own param. Smuggling it into the anchor's `.k` slot
  // would collide with "item index within a practice section", which
  // resolveAnchor rejects as non-zero for every other section type — so every
  // sub-mission resume would fail closed.
  ok(/&card=\$\{sub\}/.test(screen), 'the resume URL carries a card param');
  ok(/#s\$\{fullIx\}\.0/.test(screen), 'and the anchor keeps its .0 item slot untouched');
  ok(/parseCardParam\(params\.card\)/.test(screen), 'the param is read back through the shared parser');

  // Card 1 writes NO param: that is what clears a stale card when the learner
  // swipes back to the start of a deck.
  ok(/sub != null && sub > 1 \? `&card=/.test(screen), 'card 1 writes no param');
  // Changing mission drops the previous mission's card.
  ok(/lastSub\.current = null/.test(screen), 'moving mission clears the remembered card');

  // The anchor helpers themselves must not have grown a third segment.
  const logic = readFileSync(join(here, '..', 'services', 'content.logic.ts'), 'utf8');
  ok(
    /const ANCHOR_RE = \/\^\(\.\+\)#s\(\\d\+\)\\\.\(\\d\+\)\$\//.test(logic),
    'the shared anchor regex still has exactly two numeric segments',
  );
});

test('the two-section lookback beats the remembered card', () => {
  // resumePlan deliberately lands a returning learner TWO SECTIONS BACK, and
  // says why. A card from the mission they LEFT would then open some earlier,
  // unrelated deck at card 3 — so on a backed-up resume the card is dropped
  // and only an exact resume (no acts, or the first two missions) honours it.
  const screen = readFileSync(join(here, '..', '..', 'app', 'lesson.tsx'), 'utf8');
  ok(/const backedUp = useMemo/.test(screen), 'the screen works out whether the lookback moved the landing');
  ok(/const deepLinkSub = backedUp \? null : cardParam/.test(screen), 'and drops the card when it did');
  // The comparison must happen in one coordinate system: resumePlan works over
  // lesson.sections, deepLinkIx indexes contentSections (quiz removed).
  ok(/L\.sections\.indexOf\(contentSectionsOf\(L\)\[deepLinkIx\]\)/.test(screen), 'compared in full-list terms');

  // And the rule it defers to is still the one described above.
  const acts = readFileSync(join(here, 'acts.logic.ts'), 'utf8');
  ok(/const target = Math\.max\(0, clamped - RESUME_LOOKBACK\)/.test(acts), 'resumePlan still backs up');
});

test('every filling SwipeDeck sits inside a wrapper that gives it height', () => {
  // The failure this catches is silent and total, and I shipped it once: a
  // `fill` deck MEASURES its box and hands each card the leftover height, so
  // inside a hug-content wrapper it measures 0 and every card renders at zero
  // height — the section's title and dots still draw, the cards simply are not
  // there. Nothing throws, the type checks, and 660 tests stayed green.
  //
  // So: for each `fill` deck, the JSX element that opens the return before it
  // must carry flex: 1.
  // Only decks with a wrapper BETWEEN the return and the deck are checkable
  // here: SilentCards returns its deck directly and inherits the fill from
  // MissionSection's inhibitionDrill case, which this file already pins.
  for (const file of ['MissionSection.tsx', 'ReadingPages.tsx']) {
    const src = readFileSync(join(here, '..', 'components', file), 'utf8');
    let from = 0;
    let checked = 0;
    for (;;) {
      const at = src.indexOf('<SwipeDeck', from);
      if (at < 0) break;
      from = at + 10;
      const props = src.slice(at, src.indexOf('/>', at));
      if (!/^\s*fill\s*$/m.test(props)) continue;
      const before = src.slice(Math.max(0, at - 1200), at);
      const lastView = before.lastIndexOf('<View');
      if (lastView < 0) continue;
      const wrapper = before.slice(lastView, before.indexOf('>', lastView) + 1);
      ok(
        /flex:\s*1/.test(wrapper),
        `${file}: a filling SwipeDeck needs a flex: 1 wrapper, got "${wrapper.trim().slice(0, 70)}"`,
      );
      checked++;
    }
    ok(checked > 0, `${file}: expected at least one filling SwipeDeck to check`);
  }
});

test('the reading passage absorbs the slack and its sentence chips do not', () => {
  // Two halves of one bug. A ScrollView is a flex child like any other, so the
  // horizontal row of sentence numbers STRETCHED to fill whatever the passage
  // left over — a row of small round buttons became 400px-tall ovals, and the
  // height it stole came out of the passage, which then clipped mid-sentence.
  const src = readFileSync(join(here, '..', 'components', 'ReadingPages.tsx'), 'utf8');
  const page = src.slice(src.indexOf('export function PassagePage'), src.indexOf('export function ReadingQuestionsPage'));
  ok(page.length > 0, 'expected a PassagePage body');

  // The chip row is pinned: it may not grow.
  ok(/flexGrow: 0, flexShrink: 0, height: 44/.test(page), 'the sentence-chip row has a fixed height');
  // And the chips inside it. Scoped to the chip block, because the Écouter
  // button on this same page legitimately uses minHeight for its tap target.
  const chips = page.slice(page.indexOf('{sentences.map((s, i) => ('));
  ok(/height: 44,/.test(chips), 'the chips are a fixed height');
  ok(!/minHeight: 44,/.test(chips), 'not a minimum, which let them grow with the row');

  // The passage is the surface that absorbs the slack, and minHeight: 0 is what
  // lets it shrink instead of pushing the controls below it off screen.
  ok(/flex: 1, minHeight: 0/.test(page), 'the passage flexes AND is allowed to shrink');
});

test('a group drill does not print its own title twice', () => {
  // sons.06 splits each silent-letter family onto its own mission and names the
  // mission after the family, so the section title and the single group's label
  // are the same string — and both were drawn, once by MissionSection's eyebrow
  // and once by OneGroup. Four missions read "CaReFuL: the four that stay
  // awake" / "The alarm clock" / "The ghost letter" / "The default: silent"
  // twice, one line under the other.
  const seed = JSON.parse(readFileSync(join(here, 'seed.json'), 'utf8')) as {
    lessons: { id: string; sections: LessonSection[] }[];
  };
  const lesson = seed.lessons.find((l) => l.id === 'sons.06.l1');
  ok(lesson);

  const dupes = lesson.sections.filter((sec) => {
    const s = sec as LessonSection & { title?: string; groups?: { label: string }[] };
    return (s.groups ?? []).some(
      (g) => g.label.trim().toLowerCase() === (s.title ?? '').trim().toLowerCase(),
    );
  });
  // The content really does carry this shape — if it stops, this test is no
  // longer proving anything and should be revisited rather than deleted.
  ok(dupes.length >= 4, `expected the split families to repeat their titles, found ${dupes.length}`);

  // So the renderer has to suppress the repeat.
  const rich = readFileSync(join(here, '..', 'components', 'MissionRich.tsx'), 'utf8');
  ok(/const sameAsTitle = \(label: string\)/.test(rich), 'GroupDrillView works out when a label repeats the title');
  ok(/hideLabel \? null : <TX/.test(rich), 'and OneGroup drops the heading when it does');
  // Every OneGroup call site passes it, or one branch keeps the duplicate.
  const calls = rich.match(/<OneGroup[^/]*\/>/g) ?? [];
  ok(calls.length >= 3, `expected OneGroup call sites, found ${calls.length}`);
  for (const c of calls) {
    ok(/hideLabel=/.test(c), `every OneGroup passes hideLabel: ${c.slice(0, 60)}`);
  }
});

test('lesson chrome is translatable, not hard-coded French', () => {
  // The lesson teaches in English and labelled in both, at random: a learner met
  // "Touchez pour révéler" on a card whose every other word was English. Worse,
  // these lived in the components rather than i18n, so the FR/EN toggle did
  // nothing for them in EITHER direction.
  //
  // French CONTENT is fine and expected — it is a French course. What must not
  // appear is a French UI LABEL written as a literal.
  const banned = [
    'Touchez pour',
    'Groupe suivant',
    'Révision terminée',
    'Répondez',
    'Terminer la scène',
    'Continuer<',
    ">Continuer",
  ];
  for (const file of ['MissionRich.tsx', 'ReadingPages.tsx', 'SilentCards.tsx', 'MissionSection.tsx']) {
    const src = readFileSync(join(here, '..', 'components', file), 'utf8');
    // Comments legitimately discuss these strings; only JSX/attribute literals
    // are the problem, so blank the comments before looking.
    const code = src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/[^\n]*/g, '');
    for (const b of banned) {
      ok(!code.includes(b), `${file} still hard-codes a French UI label: ${b}`);
    }
  }
});

test('the lesson states a repeated rule once, not on every row', () => {
  // Five of the eight preview rows in mission 4 read "not a CaReFuL letter"
  // verbatim, so the rows that BREAK the default looked exactly like the ones
  // that keep it — and the row worth noticing was the hardest to spot.
  const seed = JSON.parse(readFileSync(join(here, 'seed.json'), 'utf8')) as {
    lessons: { id: string; sections: LessonSection[] }[];
  };
  const lesson = seed.lessons.find((l) => l.id === 'sons.06.l1');
  ok(lesson);
  const grid = lesson.sections.find((s) => (s as { id?: string }).id === 's04-grid') as
    | (LessonSection & { letters?: { preview?: boolean; rule?: string }[] })
    | undefined;
  ok(grid?.letters?.length, 'the grid is in the lesson');
  const preview = grid.letters.filter((l) => l.preview);
  const repeats = preview.filter((l) => l.rule?.trim().toLowerCase() === 'not a careful letter');
  ok(repeats.length >= 3, `the content really does repeat the default (${repeats.length} rows)`);

  const src = readFileSync(join(here, '..', 'components', 'SilentCards.tsx'), 'utf8');
  ok(/export function isDefaultSilentRule/.test(src), 'a predicate names the repeated default');
  ok(/letter\.rule && !isDefaultRule/.test(src), 'and a row carrying it prints no rule line');
  ok(/T\.gridDefaultNote/.test(src), 'the default is stated once above the grid instead');
  // Dropped from the ink, never from the spoken label: a screen-reader user
  // meets rows one at a time and has no header to glance back at.
  ok(/letter\.rule \? `, \$\{letter\.rule\}` : ''/.test(src), 'the rule still reaches a screen reader');
});

test('the lesson shows one position counter and one primary action', () => {
  const pager = readFileSync(join(here, '..', 'components', 'LessonPager.tsx'), 'utf8');
  // "MISSION 6 / 27" sat beside "7 / 28": two counters, two denominators, and
  // no way to tell which was real. The pager-page one is gone.
  ok(!/\{page \+ 1\} \/ \{pageCount\}/.test(pager), 'the pager-page counter is gone');
  ok(/MISSION \$\{|formatMissionLabel\(/.test(pager), 'the mission label remains');

  // The scene's own control is no longer a second full-width accent button
  // stacked above the pager's Next.
  const scene = readFileSync(join(here, '..', 'components', 'ScenePlayer.tsx'), 'utf8');
  ok(/variant="outline"/.test(scene), 'the scene start button steps back to outline');
  ok(!/<Button label="Start"/.test(scene), 'and is no longer a hard-coded primary');
});

test('term chips are capped so content is not pushed down the screen', () => {
  const src = readFileSync(join(here, '..', 'components', 'MissionSection.tsx'), 'utf8');
  ok(/const CHIP_CAP = 3;/.test(src), 'a cap exists');
  ok(/slice\(0, CHIP_CAP\)/.test(src), 'and the row honours it');
  // Collapsed, never cut: a term the mission uses must stay explainable.
  ok(/hiddenTerms > 0/.test(src), 'the rest are reachable behind an overflow control');
  ok(/setChipsOpen\(true\)/.test(src), 'which expands them');
});

test('a deck told to open on a card waits for its width before jumping', () => {
  // A paging ScrollView measured at 0 snaps every offset to 0, so scrolling
  // before the first layout lands on card 1 — indistinguishable from the
  // resume having been ignored.
  const deck = readFileSync(join(here, '..', 'components', 'LessonDeck.tsx'), 'utf8');
  const fn = deck.slice(deck.indexOf('export function SwipeDeck'), deck.indexOf('/** Dots plus a breathing arrow'));
  ok(fn.length > 0, 'expected a SwipeDeck body');
  ok(/if \(jumped\.current \|\| !w \|\| initialIndex == null\) return;/.test(fn), 'it waits for a measured width');
  ok(/jumped\.current = true/.test(fn), 'and only jumps once, so the deck is then the learner’s');
  // A programmatic scroll does not fire onScroll on every platform, so the
  // landing has to be reported by hand or the header disagrees with the deck.
  ok(/onIndexChange\?\.\(target\)/.test(fn), 'it reports the card it landed on');
  ok(/Math\.min\(items\.length - 1/.test(fn), 'a stale card past the end clamps');
});

test('every routine in mission 15 has words to perform it on, and they resolve', () => {
  // The drill says "Read the word silently, all the way to the end" — with no
  // word on the card, that is a paragraph about a routine rather than a
  // routine. practiceOn had been authored and validated since the section
  // shipped and rendered nowhere.
  const seed = JSON.parse(readFileSync(join(here, 'seed.json'), 'utf8')) as {
    items: { id: string; fr: string }[];
    lessons: { id: string; sections: LessonSection[] }[];
  };
  const lesson = seed.lessons.find((l) => l.id === 'sons.06.l1');
  ok(lesson);
  const byId = new Set(seed.items.map((i) => i.id));
  // By ID, not position — see the numbering test above.
  const s = lesson.sections.find((sec) => (sec as { id?: string }).id === 's07-inhibition') as
    | (LessonSection & { targets?: { label: string; practiceOn?: string[]; mic?: boolean }[] })
    | undefined;
  ok(s, 's07-inhibition is in the lesson');

  ok(s.targets?.length, 'the drill has routines');
  for (const t of s.targets) {
    ok(t.practiceOn?.length, `${t.label} names practice words`);
    for (const id of t.practiceOn) {
      ok(byId.has(id), `${t.label}: ${id} resolves in the corpus`);
    }
  }
});

test('the practice words and the mic are actually rendered', () => {
  const cards = readFileSync(join(here, '..', 'components', 'SilentCards.tsx'), 'utf8');
  ok(/function PracticeWords/.test(cards), 'a component renders the practice words');
  ok(/<PracticeWords/.test(cards), 'and the routine card mounts it');
  ok(/content\.item\(id\)/.test(cards), 'words are resolved from the corpus, not restated in the lesson');

  // The words sit on their OWN card, and subCount above must agree with this
  // composition or the header numbers screens that do not exist.
  ok(/kind: 'practice'/.test(cards), 'the deck composes a separate practice card');
  ok(/function InhibitionPracticeCard/.test(cards), 'and renders it');
  ok(
    /target\.practiceOn\?\.length \? \[\{ kind: 'practice'/.test(cards),
    'a routine with no words gains no empty card',
  );
  // The steps card must no longer carry them, or the split gained nothing.
  const stepsCard = cards.slice(cards.indexOf('function InhibitionTargetCard'), cards.indexOf('/** The closing reflex'));
  ok(stepsCard.length > 0, 'expected an InhibitionTargetCard body');
  ok(!/<PracticeWords/.test(stepsCard), 'the steps card no longer holds the words');
  ok(!/renderMic/.test(stepsCard), 'nor the mic');

  const section = readFileSync(join(here, '..', 'components', 'MissionSection.tsx'), 'utf8');
  // `mic: true` reached a renderMic prop no caller passed, so the condition was
  // always false and three targets claimed a mic that did not exist.
  ok(/renderMic=\{/.test(section), 'the mission now supplies a mic row');
  ok(/<WordPractice/.test(section), 'and the mic opens the scored practice sheet');
  ok(/level="sons"/.test(section), 'scored at the lenient foundation band');
});

test('the ownsLayout predicate mirrored above still matches the pager', () => {
  // This module must stay RN-free, so it cannot import ownsLayout from a .tsx
  // component. The copy above is pinned to the original by reading its source:
  // if the pager learns a new self-paging type, this fails and the mirror gets
  // updated rather than silently drifting.
  const src = readFileSync(join(here, '..', 'components', 'LessonPager.tsx'), 'utf8');
  const fn = src.slice(src.indexOf('function ownsLayout'), src.indexOf('function PageScroll'));
  ok(fn.length > 0, 'ownsLayout is still in LessonPager.tsx');
  for (const marker of [
    'swipe?: boolean',
    "s.type === 'reading'",
    "s.type === 'cardDeck'",
    "s.type === 'groupDrill'",
    "s.type === 'trapDrill'",
    "s.type === 'flashcards' || s.type === 'reviewDeck'",
    "s.type === 'practice'",
  ]) {
    ok(fn.includes(marker), `ownsLayout still tests ${marker}`);
  }
  // No eighth branch has appeared unnoticed.
  strictEqual((fn.match(/return true;/g) ?? []).length, 7, 'ownsLayout has exactly the seven branches mirrored here');
});
