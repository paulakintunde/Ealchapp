import { useEffect, useRef } from 'react';
import { useStore } from '@/store/useStore';
import { useUI } from '@/store/useUI';
import { sound } from '@/services';

/** Watches the device clock; fires the in-app practice banner at the alarm time. */
export function useAlarmWatcher() {
  const lastFired = useRef('');

  useEffect(() => {
    const id = setInterval(() => {
      const { notifs, alarmTime, signedIn } = useStore.getState();
      const { bannerVisible, showBanner, hideBanner } = useUI.getState();
      if (!signedIn || !notifs.daily) return;
      const now = new Date();
      const hm =
        String(now.getHours()).padStart(2, '0') + ':' + String(now.getMinutes()).padStart(2, '0');
      const day = now.toDateString();
      if (hm === alarmTime && lastFired.current !== day && !bannerVisible) {
        lastFired.current = day;
        showBanner(alarmTime);
        sound.play('ding');
        setTimeout(() => hideBanner(), 12000);
      }
    }, 15000);
    return () => clearInterval(id);
  }, []);
}
