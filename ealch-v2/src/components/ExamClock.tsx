// The section clock. Thin over examClock.logic.ts, which owns all the
// arithmetic and all the tests — this file only re-reads it and paints it.
//
// The interval here is a REPAINT trigger, not the clock. If it is throttled,
// suspended or skips twenty beats while the app is backgrounded, the next read
// is still correct because the answer comes from the wall clock. See the module
// note in examClock.logic.ts for why that distinction is the whole point.
import { useEffect, useRef, useState } from 'react';
import { AccessibilityInfo, AppState, View } from 'react-native';
import { TX } from '@/components/Type';
import { Press } from '@/components/ui';
import { Icon } from '@/components/Icon';
import { useTheme } from '@/theme/useTheme';
import { useReduceMotion } from '@/utils/reduceMotion';
import {
  crossedWarnings,
  formatClock,
  pauseClock,
  remainingS,
  resumeClock,
  warningAnnouncement,
  type ClockState,
} from '@/utils/examClock.logic';
import type { ExamMode } from '@/content/schema';

export type ExamClockProps = {
  clock: ClockState;
  onChange: (next: ClockState) => void;
  /** Fired once, when the clock reaches zero. The section runner submits
   *  whatever exists — see the note on `firedExpiry` below. */
  onExpire: () => void;
  mode: ExamMode;
  lang: 'fr' | 'en';
};

export function ExamClock({ clock, onChange, onExpire, mode, lang }: ExamClockProps) {
  const t = useTheme();
  const reduceMotion = useReduceMotion();
  const [now, setNow] = useState(() => Date.now());

  const left = remainingS(clock, now);
  const paused = clock.pausedAtMs !== null;

  // Repaint once a second. Not a countdown: see the file note.
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  // Coming back from the background is the moment the reading is most stale and
  // most consequential, so re-read immediately rather than waiting up to a
  // second for the next beat.
  useEffect(() => {
    const sub = AppState.addEventListener('change', (s) => {
      if (s === 'active') setNow(Date.now());
    });
    return () => sub.remove();
  }, []);

  // Warnings are edges, not states — crossedWarnings takes the previous reading
  // precisely so "under five minutes" does not fire every second for five
  // minutes. Announced to the screen reader ONLY at those two moments: a live
  // region on a clock talks over the questions and makes the screen unusable
  // (UDL 08).
  const prevLeft = useRef(left);
  useEffect(() => {
    const crossed = crossedWarnings(prevLeft.current, left);
    prevLeft.current = left;
    for (const threshold of crossed) {
      AccessibilityInfo.announceForAccessibility(warningAnnouncement(threshold, lang));
    }
  }, [left, lang]);

  // Expiry fires ONCE. Without the ref it fires on every repaint after zero,
  // and the section would submit, then submit again a second later, logging a
  // result per tick for as long as the screen stayed open.
  const firedExpiry = useRef(false);
  useEffect(() => {
    if (left <= 0 && !firedExpiry.current) {
      firedExpiry.current = true;
      onExpire();
    }
  }, [left, onExpire]);

  const warn = left <= 60;
  const caution = !warn && left <= 300;
  const color = warn ? t.danger : caution ? t.accTx : t.txSecondary;

  return (
    <View
      style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}
      accessible
      // The label carries the reading; the value does not update live, on
      // purpose. A candidate can ask for it whenever they like, and is TOLD
      // only at the two edges above.
      accessibilityLabel={`${formatClock(left)} ${lang === 'fr' ? 'restantes' : 'remaining'}`}
      accessibilityLanguage={lang}
    >
      <Icon name="clock" size={15} color={color} />
      <TX
        font="semi"
        role="label"
        color={color}
        // Tabular-ish: a fixed min-width stops the row shuffling as digits
        // change, which at one repaint a second is genuinely distracting —
        // and doubly so with reduce-motion on.
        style={{ minWidth: 58, letterSpacing: 0.5, opacity: paused && !reduceMotion ? 0.55 : 1 }}
      >
        {formatClock(left)}
      </TX>

      {/* Pause exists ONLY in practice mode. A pausable exam clock is not a
          clock, and the mode check lives here rather than inside pauseClock so
          it reads as a property of the mode, not a property of time. */}
      {mode === 'practice' ? (
        <Press
          onPress={() => onChange(paused ? resumeClock(clock, Date.now()) : pauseClock(clock, Date.now()))}
          hitSlop={10}
          accessibilityLabel={
            paused
              ? lang === 'fr' ? 'Reprendre le chronomètre' : 'Resume the clock'
              : lang === 'fr' ? 'Mettre le chronomètre en pause' : 'Pause the clock'
          }
          accessibilityLanguage={lang}
        >
          <Icon name={paused ? 'play' : 'pause'} size={15} color={t.txMuted} />
        </Press>
      ) : null}
    </View>
  );
}
