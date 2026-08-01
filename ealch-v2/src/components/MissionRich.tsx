import { useState } from 'react';
import { View } from 'react-native';
import { TX } from '@/components/Type';
import { Press, Badge } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { LessonModal } from '@/components/LessonModal';
import { useTheme } from '@/theme/useTheme';
import { CardFrame, QuestionModal, SwipeDeck } from '@/components/LessonDeck';
import { WordCardXL } from '@/components/WordCardXL';
import { useCardHeight } from '@/hooks/useCardHeight';
import { useT } from '@/i18n/useT';
import { sound, tts, stt, type SttResult } from '@/services';
import { content } from '@/services/content';
import { useProgress } from '@/store/useProgress';
import { normalizeFr, barsForLevel } from '@/utils/score';
import type {
  LessonSection,
  GridSound,
  SoundGroup,
  TrapCard,
  LabSound,
  ScenarioTurn,
} from '@/content/schema';

// The mission-journey renderers: the 12 section types that only exist for the
// Sons v2 rebuild (story, goals, soundGrid, groupDrill, trapDrill,
// pronunciationLab, dictation, scenario, listening, reading, reviewDeck,
// progressCheck). MissionSection.tsx delegates here for exactly these types
// and falls back to the pre-existing SectionView for everything else, so the
// old lesson content (letterGrid, cardDeck, tapTable, vocabThemes,
// flashcards, quiz, commonErrors, roundup…) keeps rendering unchanged.
//
// Same layout rule as LessonRich.tsx: French text never shares a flex row
// with a fixed-width sibling inside a horizontal-scrolling ancestor — it gets
// its own full-width line, the control goes on the row below.

type Story = Extract<LessonSection, { type: 'story' }>;
type Goals = Extract<LessonSection, { type: 'goals' }>;
type SoundGridSec = Extract<LessonSection, { type: 'soundGrid' }>;
type GroupDrillSec = Extract<LessonSection, { type: 'groupDrill' }>;
type TrapDrillSec = Extract<LessonSection, { type: 'trapDrill' }>;
type PronunciationLabSec = Extract<LessonSection, { type: 'pronunciationLab' }>;
type DictationSec = Extract<LessonSection, { type: 'dictation' }>;
type ScenarioSec = Extract<LessonSection, { type: 'scenario' }>;
type ListeningSec = Extract<LessonSection, { type: 'listening' }>;
type ReadingSec = Extract<LessonSection, { type: 'reading' }>;
type ReviewDeckSec = Extract<LessonSection, { type: 'reviewDeck' }>;
type ProgressCheckSec = Extract<LessonSection, { type: 'progressCheck' }>;

/** Small circular play button, the one control every mission view uses to
 *  hear a French line — always via the real tts service, never auto-played. */
function PlayDot({ text, size = 34 }: { text: string; size?: number }) {
  const t = useTheme();
  const [playing, setPlaying] = useState(false);
  const go = () => {
    if (playing) return;
    sound.play('tap');
    setPlaying(true);
    tts.speak(text, { onDone: () => setPlaying(false), onError: () => setPlaying(false) });
  };
  return (
    <Press
      cue={null}
      onPress={go}
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        borderWidth: 1,
        borderColor: playing ? t.acc : t.accA(45),
        backgroundColor: playing ? t.accA(14) : 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon name={playing ? 'pause' : 'play'} size={size * 0.4} color={t.acc} />
    </Press>
  );
}

function OptRow({
  label,
  onPress,
  state,
}: {
  label: string;
  onPress: () => void;
  /** undefined = unanswered; 'correct' | 'wrong' | 'other' once picked. */
  state?: 'correct' | 'wrong' | 'other';
}) {
  const t = useTheme();
  const bg = state === 'correct' ? t.accA(10) : state === 'wrong' ? t.dangerA(8) : t.card;
  const bd = state === 'correct' ? t.accA(60) : state === 'wrong' ? t.dangerA(55) : t.line(12);
  const fg = state === 'other' ? t.txSubtle : t.txPrimary;
  return (
    <Press
      cue={state ? null : 'tap'}
      onPress={state ? undefined : onPress}
      style={{
        minHeight: 50,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: bd,
        backgroundColor: bg,
        paddingHorizontal: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}
    >
      <TX role="body" color={fg} style={{ flex: 1 }}>{label}</TX>
      {state === 'correct' ? <Icon name="check" size={16} color={t.acc} /> : null}
      {state === 'wrong' ? <Icon name="x" size={14} color={t.danger} /> : null}
    </Press>
  );
}

/* ─── 1. Story ────────────────────────────────────────────────────────────── */

export function StoryView({ s }: { s: Story }) {
  const t = useTheme();
  return (
    <View style={{ gap: 12 }}>
      <View
        style={{
          borderRadius: 18,
          borderWidth: 1,
          borderColor: t.line(8),
          backgroundColor: t.card2,
          padding: 16,
        }}
      >
        <TX font="semi" role="meta" ls={2} color={t.txSubtle} style={{ marginBottom: 6 }}>{s.setting}</TX>
        <TX font="serifI" role="titleLg" lhMult={1.15}>{s.title}</TX>
      </View>
      {s.bubbles.map((b, i) => {
        const mine = b.from === 'user';
        return (
          <View key={i} style={{ alignItems: mine ? 'flex-end' : 'flex-start' }}>
            <View
              style={{
                maxWidth: '86%',
                borderRadius: mine ? 18 : 4,
                borderTopLeftRadius: mine ? 18 : 4,
                borderWidth: 1,
                borderColor: mine ? t.accA(30) : t.line(8),
                backgroundColor: mine ? t.accA(10) : t.card,
                padding: 13,
              }}
            >
              {b.warn ? (
                <TX font="bold" role="meta" ls={2} color={t.danger} style={{ marginBottom: 6 }}>{b.warn}</TX>
              ) : null}
              <TX role="body" lhMult={1.4}>{b.fr}</TX>
              <TX font="serifI" role="bodySm" color={t.txMuted} style={{ marginTop: 4 }}>{b.en}</TX>
              <View style={{ marginTop: 8 }}>
                <PlayDot text={b.fr} size={28} />
              </View>
            </View>
          </View>
        );
      })}
      <View
        style={{
          borderRadius: 18,
          borderWidth: 1,
          borderColor: t.accA(40),
          backgroundColor: t.accCard(9),
          padding: 16,
          marginTop: 4,
        }}
      >
        <TX font="serifI" role="titleSm" lhMult={1.3}>{s.closing.fr}</TX>
        <TX role="bodySm" color={t.txMuted} style={{ marginTop: 6 }}>{s.closing.en}</TX>
      </View>
    </View>
  );
}

/* ─── 2. Goals ────────────────────────────────────────────────────────────── */

export function GoalsView({ s }: { s: Goals }) {
  const t = useTheme();
  return (
    <View style={{ gap: 10 }}>
      {s.goals.map((g, i) => (
        <View
          key={i}
          style={{
            borderRadius: 16,
            borderWidth: 1,
            borderColor: t.line(8),
            backgroundColor: t.card,
            padding: 14,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 13,
          }}
        >
          <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="check" size={14} color={t.accInk} />
          </View>
          <View style={{ flex: 1 }}>
            <TX font="semi" role="body">{g.t}</TX>
            <TX role="bodySm" color={t.txMuted} style={{ marginTop: 2 }}>{g.s}</TX>
          </View>
        </View>
      ))}
    </View>
  );
}

/* ─── 3. Sound grid ───────────────────────────────────────────────────────── */

function SoundCell({ snd, onPress }: { snd: GridSound; onPress: () => void }) {
  const t = useTheme();
  return (
    <Press
      cue="tap"
      onPress={onPress}
      style={{
        width: '23%',
        borderRadius: 14,
        borderWidth: 1,
        borderColor: snd.trap ? t.dangerA(35) : t.line(10),
        backgroundColor: snd.trap ? t.dangerA(6) : t.card,
        paddingVertical: 10,
        alignItems: 'center',
        gap: 2,
        marginBottom: 8,
      }}
    >
      <TX font="serifI" role="titleSm" color={snd.trap ? t.danger : t.txPrimary}>{snd.ipa}</TX>
      <TX role="meta" color={t.txSubtle}>{snd.graphemes[0]}</TX>
    </Press>
  );
}

export function SoundGridView({ s }: { s: SoundGridSec }) {
  const t = useTheme();
  const [sel, setSel] = useState<GridSound | null>(null);
  return (
    <View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        {s.sounds.map((snd, i) => (
          <SoundCell key={i} snd={snd} onPress={() => setSel(snd)} />
        ))}
      </View>
      <LessonModal open={!!sel} onClose={() => setSel(null)} size="full">
        {sel ? (
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 12 }}>
              <View style={{ width: 66, height: 66, borderRadius: 16, borderWidth: 1.5, borderColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
                <TX font="serifI" role="titleLg" color={t.acc}>{sel.ipa}</TX>
              </View>
              <View style={{ flex: 1 }}>
                <TX font="serifI" role="titleLg">{sel.graphemes.join(', ')}</TX>
                <TX role="bodySm" color={t.txMuted} style={{ marginTop: 3 }}>{sel.sound}</TX>
              </View>
            </View>
            <View style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 14, marginBottom: 10 }}>
              <TX role="body">{sel.ex}</TX>
              {sel.exNote ? <TX role="bodySm" color={t.txMuted} style={{ marginTop: 3 }}>{sel.exNote}</TX> : null}
              <View style={{ marginTop: 8 }}>
                <PlayDot text={sel.ex} />
              </View>
            </View>
            {sel.memo ? (
              <View style={{ borderRadius: 14, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accCard(7), padding: 14 }}>
                <TX role="bodySm" lhMult={1.5}>{sel.memo}</TX>
              </View>
            ) : null}
          </View>
        ) : null}
      </LessonModal>
    </View>
  );
}

/* ─── 4. Group drill ──────────────────────────────────────────────────────── */

function OneGroup({ g, xl }: { g: SoundGroup; xl?: boolean }) {
  const t = useTheme();
  const [picked, setPicked] = useState(-1);

  const check = (
    <View style={{ marginTop: 6, borderRadius: 16, borderWidth: 1, borderColor: t.accA(25), backgroundColor: t.card2, padding: 14 }}>
      <TX font="semi" role="meta" ls={1.6} color={t.txSubtle} style={{ marginBottom: 8 }}>CONTRÔLE</TX>
      <TX role="body" style={{ marginBottom: 10 }}>{g.check.q}</TX>
      <View style={{ gap: 8 }}>
        {g.check.opts.map((o, i) => (
          <OptRow
            key={i}
            label={o}
            onPress={() => {
              sound.play(i === g.check.correct ? 'success' : 'error');
              setPicked(i);
            }}
            state={picked < 0 ? undefined : i === g.check.correct ? 'correct' : i === picked ? 'wrong' : 'other'}
          />
        ))}
      </View>
    </View>
  );

  // At size xl each word is its own hero card, swiped: 56pt French, IPA and
  // respelling beneath, and the silent letters greyed and faded from the
  // `silent` indices the corpus carries. Stacked as small rows the word is a
  // label beside a play button and the silent letters are invisible, which is
  // the one thing this mission exists to show.
  if (xl) {
    return (
      <View style={{ gap: 10 }}>
        <TX font="semi" role="label" ls={1.6} color={t.accTx}>{g.label}</TX>
        <SwipeDeck
          items={g.items}
          hint="One word at a time. The grey letters are the ones you do not say."
          keyFor={(it, i) => `${g.label}-${it.fr}-${i}`}
          renderItem={(it) => <GroupWordCard item={it} />}
        />
        {check}
      </View>
    );
  }

  return (
    <View style={{ gap: 8 }}>
      <TX font="semi" role="label" ls={1.6} color={t.accTx}>{g.label}</TX>
      {g.items.map((it, i) => (
        <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
          <View style={{ flex: 1 }}>
            <TX role="body">{it.fr} {it.ipa ? <TX role="bodySm" color={t.txMuted}>{it.ipa}</TX> : null}</TX>
            {it.note ? <TX role="bodySm" color={t.txMuted} style={{ marginTop: 2 }}>{it.note}</TX> : null}
          </View>
          <PlayDot text={it.fr} size={30} />
        </View>
      ))}
      {check}
    </View>
  );
}

/** One word of a group drill, as the XL hero card.
 *
 *  Owns its own playback state rather than taking the section's `onPlay`,
 *  because the group drill renders inside MissionRich where every other
 *  control speaks through the local tts service (PlayDot). Keeping to that
 *  convention means the card behaves like its neighbours instead of
 *  introducing a second audio path through the same screen. */
function GroupWordCard({ item }: { item: SoundGroup['items'][number] }) {
  const [playing, setPlaying] = useState(false);
  const h = useCardHeight(340);

  const speak = (slow?: boolean) => {
    if (playing) return;
    sound.play('tap');
    setPlaying(true);
    tts.speak(item.fr, {
      slow,
      onDone: () => setPlaying(false),
      onError: () => setPlaying(false),
    });
  };

  return (
    <CardFrame height={h} padded={false}>
      <WordCardXL
        fr={item.fr}
        ipa={item.ipa}
        respell={item.respell}
        en={item.en}
        silent={item.silent}
        note={item.note}
        playing={playing}
        fadeKey={item.itemId ?? item.fr}
        onPlay={() => speak(false)}
        onPlaySlow={() => speak(true)}
      />
    </CardFrame>
  );
}

export function GroupDrillView({ s }: { s: GroupDrillSec }) {
  const t = useTheme();
  const [ix, setIx] = useState(0);
  const last = ix >= s.groups.length - 1;
  return (
    <View>
      <View style={{ flexDirection: 'row', gap: 6, marginBottom: 14 }}>
        {s.groups.map((g, i) => (
          <View
            key={i}
            style={{
              flex: 1,
              height: 4,
              borderRadius: 2,
              backgroundColor: i <= ix ? t.acc : t.line(10),
            }}
          />
        ))}
      </View>
      <OneGroup key={ix} g={s.groups[ix]} xl={s.size === 'xl'} />
      {!last ? (
        <Press
          cue="tap"
          onPress={() => setIx((n) => n + 1)}
          style={{ height: 48, borderRadius: 24, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginTop: 14 }}
        >
          <TX font="semi" role="body" color={t.accInk}>Groupe suivant</TX>
        </Press>
      ) : (
        <View style={{ marginTop: 14, alignItems: 'center' }}>
          <TX role="bodySm" color={t.txMuted}>Tous les groupes vus. Balayez pour continuer.</TX>
        </View>
      )}
    </View>
  );
}

/* ─── 5. Trap drill ───────────────────────────────────────────────────────── */

function TrapFlipCard({ c }: { c: TrapCard }) {
  const t = useTheme();
  const [flipped, setFlipped] = useState(false);
  return (
    <Press cue="flip" onPress={() => setFlipped((f) => !f)} style={{ marginBottom: 10 }}>
      {!flipped ? (
        <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.dangerA(35), backgroundColor: t.dangerA(6), padding: 22, alignItems: 'center', gap: 8 }}>
          <TX font="semi" role="meta" ls={2} color={t.txSubtle}>{c.promptLabel}</TX>
          <TX font="serif" size={64} role="display">{c.promptSound}</TX>
          <TX role="bodySm" color={t.txSubtle}>Touchez pour retourner</TX>
        </View>
      ) : (
        <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.accA(45), backgroundColor: t.accCard(10), padding: 22, alignItems: 'center', gap: 8 }}>
          <TX font="serifI" role="titleLg" color={t.acc}>{c.fr}</TX>
          <TX role="body" color={t.txMuted}>{c.ipa}</TX>
          <TX role="bodySm" center lhMult={1.5} style={{ marginTop: 4 }}>{c.tip}</TX>
        </View>
      )}
    </Press>
  );
}

export function TrapDrillView({ s }: { s: TrapDrillSec }) {
  const t = useTheme();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const scored = Object.keys(answers).length;
  const correct = Object.entries(answers).filter(([qi, oi]) => oi === s.drill[Number(qi)].correct).length;
  return (
    <View>
      <TX font="semi" role="meta" ls={2} color={t.danger} style={{ marginBottom: 10 }}>LES PIÈGES</TX>
      {s.cards.map((c, i) => (
        <TrapFlipCard key={i} c={c} />
      ))}
      <View style={{ marginTop: 16, borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card2, padding: 14 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
          <TX font="semi" role="meta" ls={2} color={t.txSubtle}>RÉFLEXE</TX>
          {scored > 0 ? <TX role="meta" color={t.accTx}>{correct} / {scored}</TX> : null}
        </View>
        {s.drill.map((q, qi) => (
          <View key={qi} style={{ marginBottom: 14 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <TX font="serifI" role="titleSm">{q.promptSay}</TX>
              <PlayDot text={q.promptSay} size={28} />
            </View>
            <View style={{ flexDirection: 'row', gap: 8 }}>
              {q.opts.map((o, oi) => {
                const picked = answers[qi];
                const state = picked === undefined ? undefined : oi === q.correct ? 'correct' : oi === picked ? 'wrong' : 'other';
                return (
                  <View key={oi} style={{ flex: 1 }}>
                    <OptRow
                      label={o}
                      onPress={() => {
                        sound.play(oi === q.correct ? 'success' : 'error');
                        setAnswers((a) => ({ ...a, [qi]: oi }));
                      }}
                      state={state as 'correct' | 'wrong' | 'other' | undefined}
                    />
                  </View>
                );
              })}
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

/* ─── 6. Pronunciation lab (real STT scoring) ────────────────────────────── */

function LabWordRow({ itemId }: { itemId: string }) {
  const t = useTheme();
  const item = content.item(itemId);
  const logAttempt = useProgress((st) => st.logAttempt);
  const [listening, setListening] = useState(false);
  const [heard, setHeard] = useState<SttResult | null>(null);
  if (!item) return null;

  const mic = async () => {
    if (listening) {
      stt.stop();
      return;
    }
    sound.play('tap');
    setHeard(null);
    setListening(true);
    const res = await stt.listen(item.fr, { maxMs: 6000, bars: barsForLevel('sons') });
    setListening(false);
    setHeard(res);
    sound.play(res.ok && res.verdict === 'good' ? 'success' : 'flip');
    if (res.ok) {
      logAttempt({
        activity: 'lesson',
        itemId: item.id,
        expected: item.fr,
        heard: res.transcript,
        score: res.score,
        verdict: res.verdict,
        correct: res.verdict === 'good',
        modality: 'produce',
      });
    }
  };

  const verdictColor = !heard ? t.txSubtle : heard.verdict === 'good' ? t.accTx : heard.verdict === 'close' ? t.txSecondary : t.danger;
  const verdictLabel = !heard ? '' : heard.verdict === 'good' ? 'Bien dit' : heard.verdict === 'close' ? 'Presque' : heard.verdict === 'off' ? 'Pas tout à fait' : "Pas entendu";

  return (
    <View style={{ borderRadius: 16, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 14, marginBottom: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
        <View style={{ flex: 1 }}>
          <TX font="serifI" role="titleSm">{item.fr}</TX>
          {item.ipa ? <TX role="bodySm" color={t.txMuted}>{item.ipa}</TX> : null}
        </View>
        <PlayDot text={item.fr} />
        <Press
          cue={null}
          onPress={mic}
          style={{
            width: 42,
            height: 42,
            borderRadius: 21,
            backgroundColor: listening ? t.dangerA(16) : t.accA(14),
            borderWidth: 1,
            borderColor: listening ? t.dangerA(45) : t.accA(45),
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon name="mic" size={17} color={listening ? t.danger : t.acc} />
        </Press>
      </View>
      {listening ? (
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          <Waveform count={16} height={20} barWidth={3} gap={2} active color={t.acc} />
        </View>
      ) : null}
      {heard ? (
        <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <TX font="semi" role="bodySm" color={verdictColor}>{verdictLabel}</TX>
          {heard.ok ? <TX role="bodySm" color={verdictColor}>{Math.round(heard.score * 100)}%</TX> : null}
        </View>
      ) : null}
    </View>
  );
}

export function PronunciationLabView({ s }: { s: PronunciationLabSec }) {
  const t = useTheme();
  const [tab, setTab] = useState(0);
  const snd = s.sounds[tab];
  return (
    <View>
      {s.sounds.length > 1 ? (
        <View style={{ flexDirection: 'row', gap: 8, marginBottom: 14 }}>
          {s.sounds.map((so, i) => (
            <Press
              key={i}
              cue="tap"
              onPress={() => setTab(i)}
              style={{
                flex: 1,
                height: 34,
                borderRadius: 17,
                borderWidth: 1,
                borderColor: i === tab ? t.acc : t.line(12),
                backgroundColor: i === tab ? t.accA(12) : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TX font="semi" role="meta" color={i === tab ? t.accTx : t.txSecondary}>{so.label}</TX>
            </Press>
          ))}
        </View>
      ) : null}
      <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: 12, marginBottom: 12 }}>
        <TX font="serif" size={54} role="display">{snd.label}</TX>
        <TX role="titleSm" color={t.accTx}>{snd.ipa}</TX>
      </View>
      <TX role="bodySm" color={t.txMuted} style={{ marginBottom: 12 }}>{snd.sub}</TX>
      <View style={{ gap: 8, marginBottom: 16 }}>
        {snd.steps.map((st, i) => (
          <View key={i} style={{ flexDirection: 'row', gap: 12, alignItems: 'flex-start' }}>
            <View style={{ width: 22, height: 22, borderRadius: 11, borderWidth: 1, borderColor: t.accA(45), alignItems: 'center', justifyContent: 'center' }}>
              <TX role="meta" color={t.accTx}>{i + 1}</TX>
            </View>
            <TX role="bodySm" style={{ flex: 1 }} lhMult={1.5}>{st}</TX>
          </View>
        ))}
      </View>
      {snd.itemIds.map((id) => (
        <LabWordRow key={id} itemId={id} />
      ))}
    </View>
  );
}

/* ─── 7. Dictation (spelling by ear) ──────────────────────────────────────── */

function buildTileBank(word: string): { ch: string; id: number }[] {
  const decoyPool = 'ABDEGILMNORSTU';
  const upper = word.toUpperCase();
  const decoys: string[] = [];
  for (const ch of decoyPool) {
    if (decoys.length >= 3) break;
    if (!upper.includes(ch)) decoys.push(ch);
  }
  const letters = (upper + decoys.join('')).split('');
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.map((ch, id) => ({ ch, id }));
}

function OneDictationWord({ itemId, voice, onDone }: { itemId: string; voice: 'amelie' | 'leo'; onDone: (ok: boolean) => void }) {
  const t = useTheme();
  const item = content.item(itemId);
  const logAttempt = useProgress((st) => st.logAttempt);
  const [bank] = useState(() => (item ? buildTileBank(item.fr.replace(/[^A-Za-zÀ-ÿ]/g, '')) : []));
  const [used, setUsed] = useState<number[]>([]);
  const [checked, setChecked] = useState<boolean | null>(null);
  const [plays, setPlays] = useState(3);
  const [speaking, setSpeaking] = useState(false);
  if (!item) return null;

  const target = item.fr.replace(/[^A-Za-zÀ-ÿ]/g, '').toUpperCase();
  const filled = used.map((id) => bank.find((b) => b.id === id)!.ch).join('');

  const play = () => {
    if (speaking || plays <= 0) {
      if (plays <= 0) sound.play('error');
      return;
    }
    sound.play('tap');
    setSpeaking(true);
    tts.speak(item.fr, {
      voice,
      onDone: () => { setSpeaking(false); setPlays((p) => p - 1); },
      onError: () => setSpeaking(false),
    });
  };

  const tap = (id: number) => {
    if (checked) return;
    sound.play('tap');
    setUsed((u) => [...u, id]);
  };
  const del = () => {
    if (checked) return;
    setUsed((u) => u.slice(0, -1));
  };
  const check = () => {
    const ok = normalizeFr(filled) === normalizeFr(target);
    sound.play(ok ? 'success' : 'error');
    setChecked(ok);
    logAttempt({
      activity: 'lesson',
      itemId: item.id,
      expected: item.fr,
      heard: filled,
      score: ok ? 1 : 0,
      verdict: ok ? 'good' : 'off',
      correct: ok,
      modality: 'produce',
    });
  };

  return (
    <View>
      <Press
        cue={null}
        onPress={play}
        style={{
          height: 58,
          borderRadius: 18,
          borderWidth: 1,
          borderColor: t.accA(40),
          backgroundColor: t.accA(8),
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 10,
          marginBottom: 18,
        }}
      >
        <Icon name={speaking ? 'pause' : 'play'} size={16} color={t.acc} />
        <TX font="semi" role="body" color={t.accTx}>Écouter le mot {plays > 0 ? `(${plays})` : ''}</TX>
      </Press>
      <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 22 }}>
        {Array.from({ length: target.length }).map((_, i) => (
          <View
            key={i}
            style={{
              width: 40,
              height: 50,
              borderRadius: 11,
              borderWidth: 1.5,
              borderColor: checked === null ? t.line(16) : checked ? t.accA(55) : t.dangerA(55),
              backgroundColor: checked === null ? t.card2 : checked ? t.accA(10) : t.dangerA(8),
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TX font="serif" size={22} role="display">{filled[i] ?? ''}</TX>
          </View>
        ))}
      </View>
      {checked === false ? (
        <TX role="bodySm" color={t.danger} center style={{ marginBottom: 12 }}>Ce n'est pas ça — la bonne réponse est {target}.</TX>
      ) : null}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 16 }}>
        {bank.map((b) => (
          <Press
            key={b.id}
            cue={null}
            onPress={() => tap(b.id)}
            style={{
              width: 42,
              height: 46,
              borderRadius: 11,
              borderWidth: 1,
              borderColor: t.line(12),
              backgroundColor: t.card2,
              alignItems: 'center',
              justifyContent: 'center',
              opacity: used.includes(b.id) ? 0.28 : 1,
            }}
          >
            <TX font="serif" size={19} role="display">{b.ch}</TX>
          </Press>
        ))}
        <Press
          cue={null}
          onPress={del}
          style={{ width: 42, height: 46, borderRadius: 11, borderWidth: 1, borderColor: t.dangerA(35), alignItems: 'center', justifyContent: 'center' }}
        >
          <Icon name="x" size={15} color={t.danger} />
        </Press>
      </View>
      {checked === null ? (
        <Press
          cue={null}
          onPress={filled.length > 0 ? check : undefined}
          style={{ height: 50, borderRadius: 25, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', opacity: filled.length > 0 ? 1 : 0.35 }}
        >
          <TX font="semi" role="body" color={t.accInk}>Vérifier</TX>
        </Press>
      ) : (
        <Press
          cue="tap"
          onPress={() => onDone(!!checked)}
          style={{ height: 50, borderRadius: 25, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}
        >
          <TX font="semi" role="body" color={t.accInk}>Continuer</TX>
        </Press>
      )}
    </View>
  );
}

export function DictationView({ s }: { s: DictationSec }) {
  const t = useTheme();
  const [ix, setIx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const total = s.itemIds.length;
  if (done) {
    return (
      <View style={{ alignItems: 'center', gap: 10, paddingVertical: 20 }}>
        <TX font="serifI" role="display" color={t.accTx}>{score} / {total}</TX>
        <TX role="bodySm" color={t.txMuted}>mots correctement épelés.</TX>
      </View>
    );
  }
  return (
    <View>
      <TX font="semi" role="meta" ls={2} color={t.txSubtle} style={{ marginBottom: 14 }}>DICTÉE · MOT {ix + 1} / {total}</TX>
      <OneDictationWord
        key={ix}
        itemId={s.itemIds[ix]}
        voice={ix % 2 === 0 ? 'amelie' : 'leo'}
        onDone={(ok) => {
          if (ok) setScore((sc) => sc + 1);
          if (ix + 1 >= total) setDone(true);
          else setIx((i) => i + 1);
        }}
      />
    </View>
  );
}

/* ─── 8. Scenario (real hide-then-reveal STT) ────────────────────────────── */

function ScenarioTurnView({ turn, onNext, isLast }: { turn: ScenarioTurn; onNext: () => void; isLast: boolean }) {
  const t = useTheme();
  const logAttempt = useProgress((st) => st.logAttempt);
  const [listening, setListening] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [mine, setMine] = useState<{ text: string; ok: boolean; verdict?: SttResult['verdict']; score?: number } | null>(null);
  const [spoke, setSpoke] = useState(false);

  const speakAi = () => {
    setSpoke(true);
    tts.speak(turn.ai, { onDone: () => {}, onError: () => {} });
  };

  const mic = async () => {
    if (revealed || listening) return;
    sound.play('tap');
    setListening(true);
    const res = await stt.listen(turn.user, { maxMs: 7000, bars: barsForLevel('sons') });
    setListening(false);
    const heardOk = res.ok && res.verdict !== 'none';
    sound.play(heardOk && res.verdict !== 'off' ? 'success' : 'flip');
    if (heardOk) {
      logAttempt({
        activity: 'lesson',
        itemId: `scenario.${turn.user.slice(0, 12)}`,
        expected: turn.user,
        heard: res.transcript,
        score: res.score,
        verdict: res.verdict,
        correct: res.verdict === 'good',
        modality: 'produce',
      });
      setMine({ text: res.transcript, ok: true, verdict: res.verdict, score: res.score });
    } else {
      setMine({ text: '', ok: false });
    }
    setRevealed(true);
  };

  return (
    <View style={{ gap: 12, marginBottom: 20 }}>
      <View style={{ alignItems: 'flex-start' }}>
        <View style={{ maxWidth: '86%', borderRadius: 4, borderTopLeftRadius: 18, borderWidth: 1, borderColor: t.line(8), backgroundColor: t.card, padding: 13 }}>
          <TX role="body" lhMult={1.4}>{turn.ai}</TX>
          <TX font="serifI" role="bodySm" color={t.txMuted} style={{ marginTop: 4 }}>{turn.en}</TX>
          <View style={{ marginTop: 8 }}>
            <PlayDot text={turn.ai} size={28} />
          </View>
        </View>
      </View>
      {!revealed ? (
        <Press
          cue={null}
          onPress={mic}
          style={{ alignSelf: 'flex-end', height: 48, paddingHorizontal: 20, borderRadius: 24, backgroundColor: listening ? t.dangerA(16) : t.accA(14), borderWidth: 1, borderColor: listening ? t.dangerA(45) : t.accA(45), flexDirection: 'row', alignItems: 'center', gap: 8 }}
        >
          <Icon name="mic" size={16} color={listening ? t.danger : t.acc} />
          <TX font="semi" role="body" color={listening ? t.danger : t.accTx}>{listening ? 'Écoute…' : 'Répondre'}</TX>
        </Press>
      ) : null}
      {revealed && mine ? (
        <View style={{ alignItems: 'flex-end', gap: 4 }}>
          <View style={{ maxWidth: '86%', borderRadius: 18, borderTopRightRadius: 4, borderWidth: 1, borderColor: t.accA(30), backgroundColor: t.accA(10), padding: 13 }}>
            <TX role="body" lhMult={1.4}>{mine.ok ? mine.text : "(pas entendu)"}</TX>
          </View>
          {mine.ok && mine.verdict ? (
            <TX role="meta" color={mine.verdict === 'good' ? t.accTx : mine.verdict === 'close' ? t.txSecondary : t.danger}>
              {mine.verdict === 'good' ? 'Bien dit' : mine.verdict === 'close' ? 'Presque' : 'Réessayez'} · {Math.round((mine.score ?? 0) * 100)}%
            </TX>
          ) : null}
          <View style={{ maxWidth: '86%', borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card2, padding: 10, marginTop: 4 }}>
            <TX role="bodySm" color={t.txMuted}>Modèle : {turn.user}</TX>
          </View>
        </View>
      ) : null}
      {revealed ? (
        <Press
          cue="tap"
          onPress={onNext}
          style={{ height: 46, borderRadius: 23, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}
        >
          <TX font="semi" role="body" color={t.accInk}>{isLast ? 'Terminer la scène' : 'Continuer'}</TX>
        </Press>
      ) : null}
    </View>
  );
}

export function ScenarioView({ s }: { s: ScenarioSec }) {
  const t = useTheme();
  const [ix, setIx] = useState(0);
  const done = ix >= s.turns.length;
  return (
    <View>
      <TX font="semi" role="meta" ls={2} color={t.txSubtle} style={{ marginBottom: 4 }}>{s.setting}</TX>
      <TX font="serifI" role="titleSm" style={{ marginBottom: 14 }}>{s.title}</TX>
      {done ? (
        <View style={{ alignItems: 'center', paddingVertical: 20 }}>
          <TX role="body" color={t.accTx}>Scène terminée.</TX>
        </View>
      ) : (
        <ScenarioTurnView
          key={ix}
          turn={s.turns[ix]}
          isLast={ix === s.turns.length - 1}
          onNext={() => setIx((n) => n + 1)}
        />
      )}
    </View>
  );
}

/* ─── 9. Listening ────────────────────────────────────────────────────────── */

export function ListeningView({ s }: { s: ListeningSec }) {
  const t = useTheme();
  const [answers, setAnswers] = useState<Record<number, number>>({});
  return (
    <View>
      <View style={{ gap: 8, marginBottom: 18 }}>
        {s.lines.map((l, i) => (
          <View key={i} style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{ flex: 1 }}>
              <TX role="body">{l.fr}</TX>
              <TX role="bodySm" color={t.txMuted} style={{ marginTop: 2 }}>{l.en}</TX>
            </View>
            <PlayDot text={l.fr} />
          </View>
        ))}
      </View>
      {/* Questions open ONE AT A TIME when the section asks for it. Listed
          under the passage, a learner reads all six first and then listens FOR
          the answers, which quietly turns a comprehension exercise into a
          reading exercise. Behind a modal, they answer about what they
          actually heard. */}
      {s.questionsInModal ? (
        <ListeningQuestionLauncher questions={s.questions} answers={answers} setAnswers={setAnswers} />
      ) : (
        s.questions.map((q, qi) => (
          <View key={qi} style={{ marginBottom: 14 }}>
            <TX role="body" style={{ marginBottom: 8 }}>{q.q}</TX>
            <View style={{ gap: 8 }}>
              {q.opts.map((o, oi) => {
                const picked = answers[qi];
                return (
                  <OptRow
                    key={oi}
                    label={o}
                    onPress={() => {
                      sound.play(oi === q.correct ? 'success' : 'error');
                      setAnswers((a) => ({ ...a, [qi]: oi }));
                    }}
                    state={picked === undefined ? undefined : oi === q.correct ? 'correct' : oi === picked ? 'wrong' : 'other'}
                  />
                );
              })}
            </View>
          </View>
        ))
      )}
    </View>
  );
}

/** The question rail: one row per question, each opening its own modal, with
 *  the ones already answered marked. Compact on the page so the passage keeps
 *  the screen, and one question at a time once tapped. */
function ListeningQuestionLauncher({
  questions,
  answers,
  setAnswers,
}: {
  questions: { q: string; opts: string[]; correct: number; why?: string }[];
  answers: Record<number, number>;
  setAnswers: (fn: (a: Record<number, number>) => Record<number, number>) => void;
}) {
  const t = useTheme();
  const [open, setOpen] = useState<number | null>(null);
  const done = Object.keys(answers).length;

  return (
    <View style={{ gap: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
        <TX role="bodySm" color={t.txMuted} style={{ flex: 1 }}>
          Listen first, then answer.
        </TX>
        <TX role="meta" color={t.txSubtle}>{done} / {questions.length}</TX>
      </View>

      {questions.map((q, qi) => {
        const picked = answers[qi];
        const answered = picked !== undefined;
        const right = answered && picked === q.correct;
        return (
          <Press
            key={qi}
            cue="tap"
            onPress={() => setOpen(qi)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 11,
              borderRadius: 14,
              borderWidth: 1,
              borderColor: answered ? (right ? t.accA(35) : t.dangerA(30)) : t.line(10),
              backgroundColor: t.card,
              paddingHorizontal: 15,
              paddingVertical: 13,
            }}
          >
            <TX role="meta" font="med" color={t.txSubtle} style={{ width: 16 }}>{qi + 1}</TX>
            <TX role="bodySm" color={answered ? t.txMuted : t.txPrimary} style={{ flex: 1 }} numberOfLines={2}>
              {q.q}
            </TX>
            {answered ? (
              <Icon name={right ? 'check' : 'x'} size={14} color={right ? t.accTx : t.danger} />
            ) : (
              <Icon name="chevronRight" size={15} color={t.txNonText} />
            )}
          </Press>
        );
      })}

      <QuestionModal
        open={open !== null}
        question={open !== null ? questions[open] : null}
        index={open ?? undefined}
        total={questions.length}
        onClose={() => setOpen(null)}
        onAnswer={(_correct: boolean, pickedIndex: number) => {
          if (open === null) return;
          setAnswers((a) => ({ ...a, [open]: pickedIndex }));
        }}
      />
    </View>
  );
}

/* ─── 10. Reading ─────────────────────────────────────────────────────────── */

export function ReadingView({ s }: { s: ReadingSec }) {
  const t = useTheme();
  const [open, setOpen] = useState<Record<number, boolean>>({});
  return (
    <View>
      <View style={{ borderRadius: 18, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 16, marginBottom: 16 }}>
        <TX role="body" lhMult={1.7}>{s.text}</TX>
        <View style={{ marginTop: 12 }}>
          <PlayDot text={s.text} />
        </View>
      </View>
      {s.questions?.map((q, i) => (
        <Press
          key={i}
          cue="tap"
          onPress={() => setOpen((o) => ({ ...o, [i]: !o[i] }))}
          style={{ borderRadius: 14, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card2, padding: 13, marginBottom: 8 }}
        >
          <TX role="body">{q.q}</TX>
          {open[i] ? <TX role="bodySm" color={t.accTx} style={{ marginTop: 6 }}>{q.a}</TX> : (
            <TX role="bodySm" color={t.txSubtle} style={{ marginTop: 4 }}>Touchez pour révéler</TX>
          )}
        </Press>
      ))}
    </View>
  );
}

/* ─── 11. Review deck (leitner) ───────────────────────────────────────────── */

export function ReviewDeckView({ s }: { s: ReviewDeckSec }) {
  const t = useTheme();
  const [ix, setIx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [buckets, setBuckets] = useState({ again: 0, hard: 0, easy: 0 });
  // Chrome: eyebrow, counter, and the three rating buttons under the card.
  const cardH = useCardHeight(300);
  const done = ix >= s.cards.length;
  if (done) {
    return (
      <View style={{ alignItems: 'center', gap: 8, paddingVertical: 20 }}>
        <TX font="serifI" role="display" color={t.accTx}>Révision terminée</TX>
        <TX role="bodySm" color={t.txMuted}>Encore {buckets.again} · Difficile {buckets.hard} · Facile {buckets.easy}</TX>
      </View>
    );
  }
  const c = s.cards[ix];
  const bump = (k: keyof typeof buckets) => {
    setBuckets((b) => ({ ...b, [k]: b[k] + 1 }));
    setFlipped(false);
    setIx((n) => n + 1);
  };
  return (
    <View>
      <TX font="semi" role="meta" ls={2} color={t.txSubtle} style={{ marginBottom: 12 }}>{ix + 1} / {s.cards.length}</TX>
      <Press cue="flip" onPress={() => setFlipped((f) => !f)}>
        {/* Sized to the viewport, not fixed: the Encore / Difficile / Facile
            row sits BELOW this card, and a fixed height pushed it under the
            fold on shorter phones, so the learner had to scroll to rate a card
            they could already read. */}
        <View style={{ height: cardH, borderRadius: 22, borderWidth: 1, borderColor: flipped ? t.accA(40) : t.line(10), backgroundColor: flipped ? t.accCard(8) : t.card, alignItems: 'center', justifyContent: 'center', padding: 28 }}>
          <TX font="serifI" role="display" size={flipped ? 26 : 30} center color={flipped ? t.accTx : t.txPrimary} style={{ lineHeight: flipped ? 36 : 40 }}>{flipped ? c.back : c.front}</TX>
          {!flipped ? <TX role="bodySm" color={t.txSubtle} style={{ marginTop: 18 }}>Touchez pour révéler</TX> : null}
        </View>
      </Press>
      {flipped ? (
        <View style={{ flexDirection: 'row', gap: 8, marginTop: 14 }}>
          <Press cue={null} onPress={() => bump('again')} style={{ flex: 1, height: 46, borderRadius: 23, borderWidth: 1, borderColor: t.dangerA(40), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="bodySm" color={t.danger}>Encore</TX>
          </Press>
          <Press cue={null} onPress={() => bump('hard')} style={{ flex: 1, height: 46, borderRadius: 23, borderWidth: 1, borderColor: t.line(16), alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="bodySm" color={t.txSecondary}>Difficile</TX>
          </Press>
          <Press cue={null} onPress={() => bump('easy')} style={{ flex: 1, height: 46, borderRadius: 23, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center' }}>
            <TX font="semi" role="bodySm" color={t.accInk}>Facile</TX>
          </Press>
        </View>
      ) : null}
    </View>
  );
}

/* ─── 12. Progress check ──────────────────────────────────────────────────── */

export function ProgressCheckView({ s }: { s: ProgressCheckSec }) {
  const t = useTheme();
  return (
    <View>
      <View style={{ borderRadius: 20, borderWidth: 1, borderColor: t.accA(35), backgroundColor: t.accCard(9), padding: 18, marginBottom: 14 }}>
        <TX role="body" lhMult={1.6}>{s.body}</TX>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
        {s.stats.map((st, i) => (
          <View key={i} style={{ flexBasis: '48%', borderRadius: 16, borderWidth: 1, borderColor: t.line(9), backgroundColor: t.card, padding: 14 }}>
            <TX font="serif" size={23} role="display" color={t.accTx}>{st.v}</TX>
            <TX role="meta" color={t.txMuted} style={{ marginTop: 3 }}>{st.k}</TX>
          </View>
        ))}
      </View>
    </View>
  );
}
