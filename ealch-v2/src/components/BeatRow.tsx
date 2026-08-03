// BeatRow — the syllable beat display for sons.08 "Rythme & intonation".
//
// Rhythm is the one thing this course teaches that has NO orthography. A silent
// letter is a letter you can point at; an elision is an apostrophe; a liaison is
// a tie in the IPA. Even syllables and phrase-final prominence are a property of
// a phrase over time, and there is nothing on the page to underline. So the
// lesson needs a picture, and this is it:
//
//     ʃak   ma   [tɛ̃]
//     ʒə   pʁɑ̃   lə   [bys]
//     pɥi   lə   me   [tʁo]
//
// Even chips, evenly spaced, and the last one in each row larger and outlined.
// That is the whole rule made visible: the syllables are equal, and the only
// push is at the end of the GROUP.
//
// ── Everything below was settled on a Pixel 6, not derived on paper ─────────
//
// The device is 1080x2400 at density 420 (2.625x), so 411dp wide, and 363dp
// once the standard 24dp page padding is off. Three rules came out of putting
// this on the phone and looking at it:
//
// 1. ONE GROUP IS ONE ROW, AND A ROW NEVER WRAPS ON WIDTH.
//    A width-wrap breaks the phrase at whatever syllable the pixels ran out on,
//    which teaches nothing and actively misleads: the learner reads the break as
//    a rhythm boundary. A break at the phrase boundary IS the lesson, so rows
//    are laid out per group and `flexWrap` is never used.
//
// 2. A GROUP LONGER THAN 9 SYLLABLES GETS NO BEAT ROW AT ALL.
//    At 9 the chip is 35dp and every label is still legible. At 10 it is 30dp
//    and labels overflow ("swaʁ" visibly spilled its chip). An earlier draft
//    used adjustsFontSizeToFit to squeeze 15 syllables into one row; on the
//    device that produced ~20dp chips at roughly 7px text, i.e. it converted an
//    illegal layout into an illegible one, which is worse because it fails
//    silently. Rejected. `fits()` is exported so callers can ask BEFORE
//    rendering and pick a different section type for the long items.
//
//    This is not only a layout concession. A 15-syllable stretch with no
//    internal break is not one rhythm group in real French; a speaker breaks it.
//    Those items are taught by ear, in listening and speaking missions.
//
// 3. THE TOUCHABLE AREA IS ALWAYS >= 44dp EVEN WHEN THE CHIP IS NOT.
//    15 syllables x 44dp is 660dp and does not fit a phone, which is the trap
//    that kills the naive design. The answer is not to shrink the target, it is
//    to cap the row (rule 2) and then make up any shortfall with horizontal
//    hitSlop, so a 35dp chip still has a 44dp touch box.
import { useCallback, useMemo, useState } from 'react';
import { Pressable, View, type LayoutChangeEvent } from 'react-native';
import { TX } from '@/components/Type';
import { useTheme } from '@/theme/useTheme';

/** Chips per row above which the row stops being legible. Measured on a Pixel
 *  6, not guessed: see rule 2 above.
 *
 *  The authoring corpus declares the same number, because the `tappable` tag is
 *  computed from it. The two are asserted equal by sons-08-rythme.test.ts
 *  rather than shared by an import: this is app runtime code and must not pull
 *  the authoring data into the shipped bundle. */
export const MAX_BEATS_PER_GROUP = 9;

/** The minimum legal tap target, and the chip height. */
const TARGET = 44;
const GAP = 6;

/** Can this group be drawn as a beat row at all? Callers should ask before
 *  authoring a tap-along mission around an item, because the honest answer for
 *  the long phrases is no. */
export function fits(groups: string[][]): boolean {
  return groups.every((g) => g.length > 0 && g.length <= MAX_BEATS_PER_GROUP);
}

/** Chip width for a row of `n` at `avail` dp. Never wider than the 44dp
 *  target: a 3-syllable phrase should not draw three enormous slabs. */
function chipWidth(n: number, avail: number): number {
  if (n <= 0) return TARGET;
  return Math.max(1, Math.min(TARGET, Math.floor((avail - GAP * (n - 1)) / n)));
}

export type BeatRowProps = {
  /** One entry per rhythm group; each entry is that group's syllables. */
  groups: string[][];
  /** Called with the flat index of a tapped syllable, if the row is tappable. */
  onTapBeat?: (index: number) => void;
  /** Which flat index is currently sounding, for playback highlighting. */
  activeIndex?: number | null;
  /** Draw the prominent (group-final) chip larger and outlined. Default true.
   *  Turned off for the "wrong" half of a contrast, where English stress is
   *  being shown on the wrong syllable. */
  markProminence?: boolean;
  /** Override which chip in each group is prominent, as a flat index. Used by
   *  the inhibition drill to show an English speaker's instinct landing early. */
  prominentOverride?: number | null;
};

/**
 * A row of syllable chips per rhythm group.
 *
 * Renders nothing when `fits()` is false, rather than drawing an illegible row.
 * A caller that has not checked `fits()` gets an empty box, which is the
 * failure mode that shows up immediately in the mission rather than the one
 * that ships looking almost right.
 */
export function BeatRow({
  groups,
  onTapBeat,
  activeIndex = null,
  markProminence = true,
  prominentOverride = null,
}: BeatRowProps) {
  const t = useTheme();
  const [avail, setAvail] = useState(0);
  const onLayout = useCallback((e: LayoutChangeEvent) => {
    const w = Math.round(e.nativeEvent.layout.width);
    setAvail((prev) => (Math.abs(w - prev) > 1 ? w : prev));
  }, []);

  // Flat index of the first syllable of each group, so a tap can report a
  // position in the whole phrase rather than within its row.
  const offsets = useMemo(() => {
    const o: number[] = [];
    let n = 0;
    for (const g of groups) {
      o.push(n);
      n += g.length;
    }
    return o;
  }, [groups]);

  if (!fits(groups)) return null;

  // Until the first layout lands we do not know the width. Falling back to a
  // guess here would draw one wrong-sized frame on every card; an empty box for
  // one frame is cheaper and cannot be mistaken for the real thing.
  const width = avail > 0 ? avail : 0;

  return (
    <View onLayout={onLayout} style={{ width: '100%' }}>
      {width > 0 &&
        groups.map((g, gi) => {
          const w = chipWidth(g.length, width);
          const slop = Math.max(0, Math.ceil((TARGET - w) / 2));
          return (
            <View
              key={gi}
              style={{
                flexDirection: 'row',
                gap: GAP,
                // Centred: a short group left-aligned under centred sentence
                // text reads as a layout slip rather than a design. Rows stay
                // centred on each other, so a 3-chip group and an 8-chip group
                // in the same phrase share a mid-line.
                justifyContent: 'center',
                marginBottom: gi === groups.length - 1 ? 0 : GAP,
              }}
            >
              {g.map((syl, si) => {
                const flat = offsets[gi] + si;
                const isProminent = markProminence
                  ? prominentOverride === null
                    ? si === g.length - 1
                    : prominentOverride === flat
                  : false;
                const isActive = activeIndex === flat;
                const Chip = onTapBeat ? Pressable : View;
                return (
                  <Chip
                    key={si}
                    {...(onTapBeat
                      ? {
                          onPress: () => onTapBeat(flat),
                          hitSlop: { top: 6, bottom: 6, left: slop, right: slop },
                          accessibilityRole: 'button' as const,
                          accessibilityLabel: `Beat ${flat + 1}`,
                        }
                      : {})}
                    style={{
                      width: w,
                      height: TARGET,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 10,
                      backgroundColor: isActive
                        ? t.accA(28)
                        : isProminent
                          ? t.accCard(10)
                          : t.line(6),
                      borderWidth: isProminent ? 2 : 1,
                      borderColor: isActive
                        ? t.acc
                        : isProminent
                          ? t.acc
                          : t.line(14),
                    }}
                  >
                    <TX
                      role={isProminent ? 'titleSm' : 'bodySm'}
                      font={isProminent ? 'semi' : 'sans'}
                      numberOfLines={1}
                      // The chip is a fixed-width box, so the OS font scale has
                      // to be capped here or a learner running Dynamic Type at
                      // 1.5x pushes the glyphs straight out of it. This is the
                      // case TX.maxScale exists for.
                      maxScale={1.15}
                      style={{ color: isProminent ? t.txPrimary : t.txSecondary }}
                    >
                      {syl}
                    </TX>
                  </Chip>
                );
              })}
            </View>
          );
        })}
    </View>
  );
}
