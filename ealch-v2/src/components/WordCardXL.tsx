// The XL word card — Lesson Architecture v2, section 4.
//
// Roughly a third of a v2 lesson is this one screen, repeated with different
// words, and that repetition is the point: the format disappears and the word
// is all that is left. So it is built once, here, and every XL surface
// (flashcards, examples, groupDrill words, speak targets) renders through it
// rather than restating the layout.
//
// The screen holds ONE French unit, its IPA, its gloss, and a play button.
// Nothing else. If something feels missing, it belongs on a different screen.
//
// ── Silent letters ─────────────────────────────────────────────────────────
//
// The `silent` prop is an array of character indices into `fr`, authored in
// the lexeme corpus and never restated per screen. Those characters render in
// a lighter ink and FADE from full ink to that lighter value over 400ms on
// first appearance, so the learner sees the letter, then sees it recede. That
// animation is the teaching: a struck-through or red letter would say "this is
// wrong", when what is true is "this is written and not said".
//
// The colour comes from the theme (`txNonText`), not a literal, so the card
// stays correct in both modes and against every accent. It is deliberately a
// non-text-contrast token: a silent letter is decoration in the accessibility
// sense, because the word is still fully legible without distinguishing it.

import { useEffect, useMemo, useRef } from 'react';
import { Animated, View, type ViewStyle } from 'react-native';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { Waveform } from '@/components/Waveform';
import { useTheme } from '@/theme/useTheme';
import { glyphs as splitGlyphs } from '@/content/silent.logic';
import { displayIpa } from '@/services/content.logic';

/** How long a silent letter takes to recede from ink. Slow enough to be seen
 *  as a change rather than a render, short enough not to delay a tap. */
const FADE_MS = 400;

export type WordCardXLProps = {
  /** The French unit. One word or one short phrase. */
  fr: string;
  /** IPA, already slash-wrapped by the corpus. */
  ipa?: string;
  /** Respelling, already bracket-wrapped. Shown under the IPA when present. */
  respell?: string;
  /** English gloss. */
  en?: string;
  /** Character indices into `fr` that are written and not pronounced. */
  silent?: number[];
  /** Small eyebrow above the word: the rule being drilled, a tag, a count. */
  eyebrow?: string;
  /** A teaching note under the gloss. Kept to one short line — anything
   *  longer is a second idea and belongs on its own screen. */
  note?: string;
  /** Fires when the play button is tapped. */
  onPlay?: () => void;
  /** Fires on a long press: the slow (0.65) reading. */
  onPlaySlow?: () => void;
  /** Whether this card's audio is currently playing. */
  playing?: boolean;
  /** Replays the fade when this changes — pass the card's id so swiping to a
   *  new word re-runs the animation, while a re-render does not. */
  fadeKey?: string;
  style?: ViewStyle;
};

/** The character split lives in silent.logic.ts, where it is unit-tested
 *  against the whole corpus — the indices are Unicode-sensitive and an
 *  off-by-one greys the wrong letter, which teaches the opposite of the
 *  lesson. See the note there. */

export function WordCardXL({
  fr,
  ipa,
  respell,
  en,
  silent,
  eyebrow,
  note,
  onPlay,
  onPlaySlow,
  playing = false,
  fadeKey,
  style,
}: WordCardXLProps) {
  const t = useTheme();

  // Split once per word rather than per render. Unicode-aware, because the
  // corpus carries accented characters and a naive index would split them.
  const glyphs = useMemo(() => splitGlyphs(fr, silent), [fr, silent]);
  const hasSilent = glyphs.some((g) => g.silent);

  // One shared driver for every silent letter in the word: they recede
  // together, as one event, rather than shimmering independently.
  const fade = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fade.setValue(0);
    if (!hasSilent) return;
    const anim = Animated.timing(fade, {
      toValue: 1,
      duration: FADE_MS,
      // Colour cannot be driven on the native thread, so this interpolates on
      // the JS thread. It is one short animation on a static screen, which is
      // the case where that is genuinely fine.
      useNativeDriver: false,
    });
    anim.start();
    return () => anim.stop();
  }, [fade, hasSilent, fadeKey, fr]);

  const silentColor = fade.interpolate({
    inputRange: [0, 1],
    outputRange: [t.txPrimary, t.txNonText],
  });

  return (
    <View style={[{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 24, gap: 18 }, style]}>
      {eyebrow ? (
        <TX role="eyebrow" font="med" color={t.txMuted} center ls={0.8} style={{ textTransform: 'uppercase' }}>
          {eyebrow}
        </TX>
      ) : null}

      {/* The word. `adjustsFontSizeToFit` shrinks rather than wraps: a French
          word broken across two lines stops reading as one unit, which is the
          one thing this card exists to show. */}
      <TX
        role="display2"
        font="semi"
        center
        numberOfLines={1}
        adjustsFontSizeToFit
        minimumFontScale={0.55}
        accessibilityLabel={fr}
        lang="fr"
      >
        {glyphs.map((g) =>
          g.silent ? (
            <Animated.Text key={`${g.index}-${g.ch}`} style={{ color: silentColor }}>
              {g.ch}
            </Animated.Text>
          ) : (
            g.ch
          )
        )}
      </TX>

      {ipa ? (
        <TX font="notation" role="titleLg" size={20} color={t.txSecondary} center numberOfLines={2}>
          {displayIpa(ipa)}
        </TX>
      ) : null}

      {respell ? (
        <TX font="notation" role="body" color={t.txMuted} center numberOfLines={1}>
          {respell}
        </TX>
      ) : null}

      {en ? (
        <TX role="body" size={15} color={t.txMuted} center numberOfLines={2}>
          {en}
        </TX>
      ) : null}

      {onPlay ? (
        <PlayButton onPress={onPlay} onLongPress={onPlaySlow} playing={playing} label={fr} />
      ) : null}

      {note ? (
        <TX role="bodySm" color={t.txSubtle} center numberOfLines={2} style={{ maxWidth: 300 }}>
          {note}
        </TX>
      ) : null}
    </View>
  );
}

/** The card's single action: play the word. Long-press gives the slow reading,
 *  which is the architecture doc's rule for every word card in the product. */
function PlayButton({
  onPress,
  onLongPress,
  playing,
  label,
}: {
  onPress: () => void;
  onLongPress?: () => void;
  playing: boolean;
  label: string;
}) {
  const t = useTheme();
  const SIZE = 56;
  return (
    <View style={{ alignItems: 'center', gap: 12, marginTop: 6 }}>
      <Press
        cue={null}
        onPress={onPress}
        onLongPress={onLongPress}
        accessibilityLabel={`Play ${label}`}
        accessibilityHint={onLongPress ? 'Long press for the slow reading' : undefined}
        style={{
          width: SIZE,
          height: SIZE,
          borderRadius: SIZE / 2,
          borderWidth: 1,
          borderColor: playing ? t.acc : t.accA(45),
          backgroundColor: playing ? t.accA(12) : 'transparent',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon name="speaker" size={SIZE * 0.4} color={t.acc} />
      </Press>
      <Waveform count={12} height={18} barWidth={3} gap={3} active={playing} color={playing ? t.acc : t.txNonText} />
    </View>
  );
}

/** The silent-letter treatment on its own, for surfaces that show a word
 *  inline rather than as a hero: grid rows, example sentences, review cards.
 *  Same colour token and same meaning, without the display type or the fade
 *  (which would be noise repeated across sixteen rows). */
export function SilentText({
  fr,
  silent,
  role = 'body',
  font,
  color,
  center,
  size,
}: {
  fr: string;
  silent?: number[];
  role?: React.ComponentProps<typeof TX>['role'];
  font?: React.ComponentProps<typeof TX>['font'];
  color?: string;
  center?: boolean;
  size?: number;
}) {
  const t = useTheme();
  const g = useMemo(() => splitGlyphs(fr, silent), [fr, silent]);
  if (!g.some((x) => x.silent)) {
    return (
      <TX role={role} font={font} color={color} center={center} size={size} lang="fr">
        {fr}
      </TX>
    );
  }
  return (
    <TX role={role} font={font} color={color} center={center} size={size} accessibilityLabel={fr} lang="fr">
      {g.map((x) =>
        x.silent ? (
          <TX key={`${x.index}-${x.ch}`} role={role} font={font} size={size} color={t.txNonText}>
            {x.ch}
          </TX>
        ) : (
          x.ch
        )
      )}
    </TX>
  );
}
