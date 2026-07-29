import { useEffect, useMemo, useRef, useState } from 'react';
import { ScrollView, TextInput, View, type NativeSyntheticEvent, type TextInputSelectionChangeEventData } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { LEVELS, type Level } from '@/content/schema';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';
import { TX } from '@/components/Type';
import { Press, FocusHeader } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { MascotAvatar } from '@/components/MascotAvatar';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { useT } from '@/i18n/useT';
import { useProgress, useSessionLog } from '@/store/useProgress';
import { useReadingBrightness } from '@/hooks/useReadingBrightness';
import { sound, tts } from '@/services';
import { content } from '@/services/content';
import { noteFor } from '@/services/content.logic';
import { themeMeta } from '@/content/themeMeta';
import { accentKeys, normDict } from '@/content/drills';
import { SpeedPicker } from '@/components/SpeedPicker';
import { F } from '@/theme/fonts';

export default function Dictation() {
  const t = useTheme();
  const T = useT();
  const router = useRouter();
  const insets = useSafeAreaInsets();
  useReadingBrightness();
  const inputRef = useRef<TextInput>(null);

  // Dictation items from the corpus: { fr (the sentence), en, notes (the tip) }.
  // `?theme=&level=` narrows the run to one parcours step (theme detail's Écouter).
  const { theme, level, item: resumeItem } = useLocalSearchParams<{ theme?: string; level?: string; item?: string }>();
  const sentences = useMemo(
    () =>
      content.itemsFor(
        'dictation',
        theme ? { theme, ...(LEVELS.includes(level as Level) ? { level: level as Level } : {}) } : undefined
      ),
    [theme, level]
  );

  const logSession = useSessionLog();
  const logAttempt = useProgress((s) => s.logAttempt);
  const setResume = useProgress((s) => s.setResume);
  const clearResume = useProgress((s) => s.clearResume);

  // Resume landing: `?item=` names the sentence a resumed visit should reopen
  // on. Deck order is deterministic (selectItems is a plain corpus-order
  // filter, never shuffled), so the item id reliably locates the same card —
  // falls back to the start if the id is missing or no longer in this theme.
  const [dcIx, setDcIx] = useState(() => {
    const raw = Array.isArray(resumeItem) ? resumeItem[0] : resumeItem;
    if (!raw) return 0;
    const found = sentences.findIndex((s) => s.id === raw);
    return found >= 0 ? found : 0;
  });
  const [dcTyped, setDcTyped] = useState('');
  const [dcPhase, setDcPhase] = useState<'idle' | 'checked'>('idle');
  const [dcOkFlag, setDcOkFlag] = useState(false);
  const [dcScore, setDcScore] = useState(0);
  const [dcDone, setDcDone] = useState(false);
  const [dcPlays, setDcPlays] = useState(3);
  const [dcSpeed, setDcSpeed] = useState(1);
  const [dcSpeaking, setDcSpeaking] = useState(false);
  // Track the caret so an accent key inserts where the cursor is, not at the end.
  const [sel, setSel] = useState({ start: 0, end: 0 });

  // Stop any in-flight speech when leaving the screen.
  useEffect(() => () => tts.stop(), []);

  const d = sentences[Math.min(dcIx, sentences.length - 1)];
  const last = dcIx >= sentences.length - 1;
  const empty = !dcTyped.trim();

  // Keeps the dictée resumable at the exact sentence, re-firing every time
  // dcIx changes so leaving mid-theme (back, close, app kill) still lands the
  // home hero on this card. Cleared on completion, alongside logSession below.
  useEffect(() => {
    if (dcDone || !d) return;
    const params = new URLSearchParams({ item: d.id });
    if (theme) params.set('theme', theme);
    if (level) params.set('level', level);
    setResume('dictation', {
      route: `/dictation?${params.toString()}`,
      title: theme ? themeMeta(theme).fr : T.dcTag,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dcIx, theme, level, dcDone]);

  const tag = T.dcTag;
  const count = `${Math.min(dcIx + 1, sentences.length)} / ${sentences.length}`;
  const title = T.dcTitle;
  const purpose = T.dcPurpose;
  const yourLabel = T.dcYours;
  const correctLabel = T.dcCorrect;
  const okSub = T.dcOkSub;
  const hint = T.dcHint;
  const listenLabel = dcSpeaking ? T.dcPlaying : T.dcPlay;
  const playsLeft = dcPlays > 0 ? `${dcPlays} ${T.dcPlaysLeft}` : T.dcNoPlays;

  const play = () => {
    if (dcSpeaking) return;
    if (dcPlays <= 0) {
      sound.play('error');
      return;
    }
    sound.play('tap');
    setDcSpeaking(true);
    // Spend a play only when the utterance actually COMPLETES. If there is no
    // French voice, expo-speech fires onError and the play is refunded — the
    // learner is never charged three plays for hearing nothing (review §dictation).
    // La dictée alternates its two Québec voices, Amélie and Léo, per sentence
    // — keyed to the sentence index so every replay of one sentence stays in
    // one voice (and hits its stored audio).
    tts.speak(d.fr, {
      voice: dcIx % 2 === 0 ? 'amelie' : 'leo',
      rate: dcSpeed,
      onDone: () => {
        setDcSpeaking(false);
        setDcPlays((p) => p - 1);
      },
      onError: () => setDcSpeaking(false),
    });
  };

  const onSelChange = (e: NativeSyntheticEvent<TextInputSelectionChangeEventData>) =>
    setSel(e.nativeEvent.selection);

  const addAccent = (ch: string) => {
    if (dcPhase !== 'idle') return;
    sound.play('tap');
    // Insert at the caret, replacing any selection — appending to the end
    // corrupts the answer when the cursor is mid-sentence (review §dictation).
    setDcTyped((s) => {
      const start = Math.min(sel.start, s.length);
      const end = Math.min(sel.end, s.length);
      const next = s.slice(0, start) + ch + s.slice(end);
      const caret = start + ch.length;
      setSel({ start: caret, end: caret });
      return next;
    });
    inputRef.current?.focus();
  };

  const check = () => {
    if (empty) return;
    const ok = normDict(dcTyped) === normDict(d.fr);
    sound.play(ok ? 'success' : 'error');
    setDcOkFlag(ok);
    if (ok) setDcScore((s) => s + 1);
    logAttempt({
      activity: 'dictation',
      itemId: d.id,
      expected: d.fr,
      heard: dcTyped.trim(),
      score: ok ? 1 : 0,
      verdict: ok ? 'good' : 'off',
      correct: ok,
      // Dictation is written production from an audio prompt: they hear it and
      // have to render the form. It exercises listening comprehension too, and
      // this single tag cannot say both — the comprehension half is not tracked
      // separately, and pretending otherwise would be the dishonest option.
      modality: 'produce',
    });
    setDcPhase('checked');
  };

  const advance = () => {
    if (last) {
      sound.play('ding');
      setDcDone(true);
      logSession('dictation');
      clearResume('dictation');
    } else {
      sound.play('tap');
      setDcIx((i) => i + 1);
      setDcTyped('');
      setDcPhase('idle');
      setDcPlays(3);
    }
  };

  const restart = () => {
    sound.play('tap');
    setDcDone(false);
    setDcIx(0);
    setDcTyped('');
    setDcPhase('idle');
    setDcPlays(3);
    setDcScore(0);
  };

  const inputBorder =
    dcPhase === 'checked'
      ? dcOkFlag
        ? t.accA(60)
        : t.dangerA(50)
      : t.line(10);
  const btnActive = !(dcPhase === 'idle' && empty);
  const btnLabel =
    dcPhase === 'idle'
      ? T.check2
      : last
        ? T.dcFinish
        : T.dcNext;

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>
      <View style={{ paddingTop: insets.top }}>
        <FocusHeader onClose={() => (theme ? router.back() : router.replace('/home'))} onSettings={() => router.push('/settings')} />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 24, paddingTop: 8, paddingBottom: insets.bottom + 60 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* Tag + count */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <TX font="semi" role="eyebrow" ls={2.4} color={t.txSubtle}>
            {tag}
          </TX>
          <TX font="semi" role="label" color={t.txMuted}>
            {count}
          </TX>
        </View>

        {dcDone ? (
          <View style={{ alignItems: 'center', paddingTop: 30 }}>
            <View
              style={{
                width: 96,
                height: 96,
                borderRadius: 48,
                borderWidth: 1.5,
                borderColor: t.accA(55),
                backgroundColor: t.accA(10),
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 24,
              }}
            >
              <Svg width={36} height={28} viewBox="0 0 36 28" fill="none">
                <Path d="M2 15l10 10L34 3" stroke={t.acc} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
              </Svg>
            </View>
            <TX font="serifI" size={36} role="display" center style={{ marginBottom: 10 }}>
              {T.dcDoneT}
            </TX>
            <TX role="bodySm" lhMult={1.7} center color={t.txSecondary} style={{ maxWidth: 280, marginBottom: 30 }}>
              {T.dcDoneS.replace('{n}', String(dcScore)).replace('{m}', String(sentences.length))}
            </TX>
            <Press
              onPress={restart}
              cue={null}
              style={{ width: '100%', minHeight: 52, paddingVertical: 6, borderRadius: 26, backgroundColor: t.acc, alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}
            >
              <TX font="semi" role="body" color={t.accInk}>
                {T.dcRedo}
              </TX>
            </Press>
            <Press onPress={() => router.replace('/home')} cue={null} style={{ minHeight: 48, paddingVertical: 6, alignItems: 'center', justifyContent: 'center' }}>
              <TX font="semi" role="bodySm" color={t.txMuted}>
                {T.dcHome}
              </TX>
            </Press>
          </View>
        ) : (
          <>
            <TX font="serifI" size={32} role="display" style={{ marginBottom: 8 }}>
              {title}
            </TX>
            <TX role="label" lhMult={1.6} color={t.txMuted} style={{ marginBottom: 20 }}>
              {purpose}
            </TX>

            {/* Play card */}
            <View
              style={{
                borderRadius: 20,
                borderWidth: 1,
                borderColor: t.line(8),
                backgroundColor: t.card,
                padding: 18,
                paddingHorizontal: 20,
                marginBottom: 14,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 16,
              }}
            >
              <Press
                onPress={play}
                cue={null}
                style={{
                  width: 73,
                  height: 73,
                  borderRadius: 36.5,
                  backgroundColor: dcPlays > 0 || dcSpeaking ? t.acc : t.line(16),
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {dcSpeaking ? (
                  <Waveform active count={3} height={22} color={t.accInk} barWidth={4} gap={3} />
                ) : (
                  <Svg width={22} height={25} viewBox="0 0 16 18" fill="none">
                    <Path d="M2.5 2v14l12-7z" fill={dcPlays > 0 ? t.accInk : t.txNonText} />
                  </Svg>
                )}
              </Press>
              <View style={{ flex: 1 }}>
                <TX font="semi" role="bodySm">
                  {listenLabel}
                </TX>
                <TX role="meta" color={t.txSubtle} style={{ marginTop: 2 }}>
                  {playsLeft}
                </TX>
              </View>
            </View>

            {/* Playback speed — from 0.25× for catching every sound to 1.5× */}
            <View style={{ marginBottom: 14 }}>
              <SpeedPicker value={dcSpeed} onChange={(v) => { sound.play('tap'); setDcSpeed(v); }} />
            </View>

            {/* Answer box */}
            <View
              style={{
                borderRadius: 20,
                borderWidth: dcPhase === 'checked' ? 1.5 : 1,
                borderColor: inputBorder,
                backgroundColor: t.input,
                padding: 18,
                paddingHorizontal: 20,
                marginBottom: 12,
              }}
            >
              <TX font="semi" role="meta" ls={2} color={t.txSubtle} style={{ marginBottom: 10 }}>
                {yourLabel}
              </TX>
              {dcPhase === 'idle' ? (
                <TextInput
                  ref={inputRef}
                  value={dcTyped}
                  onChangeText={setDcTyped}
                  selection={sel}
                  onSelectionChange={onSelChange}
                  onSubmitEditing={check}
                  returnKeyType="done"
                  placeholder={T.dcTypePh}
                  placeholderTextColor={t.txSubtle}
                  autoCorrect={false}
                  autoCapitalize="none"
                  style={{
                    fontFamily: F.serif,
                    fontSize: 22,
                    lineHeight: 30,
                    color: t.txPrimary,
                    padding: 0,
                  }}
                />
              ) : dcOkFlag ? (
                <TX font="serif" size={22} role="display" lhMult={1.5} color={t.accTx}>
                  {d.fr}
                </TX>
              ) : (
                <View>
                  <TX
                    font="serif"
                    size={21}
                    role="titleLg"
                    lhMult={1.43}
                    color={t.danger}
                    style={{ textDecorationLine: 'line-through', textDecorationColor: t.dangerA(50) }}
                  >
                    {dcTyped}
                  </TX>
                  <TX font="semi" role="meta" ls={2} color={t.accTx} style={{ marginTop: 12, marginBottom: 6 }}>
                    {correctLabel}
                  </TX>
                  <TX font="serif" size={22} role="display" lhMult={1.5} color={t.accTx}>
                    {d.fr}
                  </TX>
                </View>
              )}
            </View>

            {/* Why-tip on error */}
            {dcPhase === 'checked' && !dcOkFlag ? (
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: t.accA(35),
                  backgroundColor: t.accA(6),
                  padding: 16,
                  paddingHorizontal: 20,
                  marginBottom: 12,
                }}
              >
                <TX role="label" lhMult={1.67} color={t.txSecondary}>
                  {noteFor(d)}
                </TX>
              </View>
            ) : null}

            {/* Success card */}
            {dcPhase === 'checked' && dcOkFlag ? (
              <View
                style={{
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: t.accA(45),
                  backgroundColor: t.accA(9),
                  padding: 16,
                  paddingHorizontal: 20,
                  marginBottom: 12,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 13,
                }}
              >
                <MascotAvatar size={34} state="celebrate" tier="micro" celebrateKey={`dc-${d.fr}`} />
                <View style={{ flex: 1 }}>
                  <TX font="semi" role="bodySm">
                    {T.perfectNoMistakes}
                  </TX>
                  <TX role="label" lhMult={1.57} color={t.txSecondary} style={{ marginTop: 2 }}>
                    {okSub}
                  </TX>
                </View>
              </View>
            ) : null}

            {/* Accent key row */}
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6, marginTop: 8, marginBottom: 24 }}>
              {accentKeys.map((ch) => (
                <Press
                  key={ch}
                  onPress={() => addAccent(ch)}
                  cue={null}
                  scale={0.92}
                  style={{
                    width: 42,
                    minHeight: 42,
                    paddingVertical: 6,
                    borderRadius: 12,
                    backgroundColor: t.card2,
                    borderWidth: 1,
                    borderColor: t.line(8),
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <TX font="serif" role="title">
                    {ch}
                  </TX>
                </Press>
              ))}
            </View>

            {/* Action button */}
            <Press
              onPress={dcPhase === 'idle' ? check : advance}
              cue={null}
              style={{
                minHeight: 52,
                paddingVertical: 6,
                borderRadius: 26,
                backgroundColor: btnActive ? t.acc : t.line(10),
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <TX font="semi" role="body" color={btnActive ? t.accInk : t.txSubtle}>
                {btnLabel}
              </TX>
            </Press>
            <TX role="meta" center color={t.txSubtle} style={{ marginTop: 14, fontStyle: 'italic' }}>
              {hint}
            </TX>
            <TX role="meta" center color={t.txSubtle} style={{ marginTop: 8, fontStyle: 'italic' }}>
              {T.dcVoiceNote}
            </TX>
          </>
        )}
      </ScrollView>
    </View>
  );
}
