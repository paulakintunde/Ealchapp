import { Redirect } from 'expo-router';
import { useStore } from '@/store/useStore';

export default function Index() {
  const onboarded = useStore((s) => s.onboarded);
  // Returning users see the animated "E." splash, then the feed.
  // First-time users go straight to the onboarding wizard.
  return <Redirect href={onboarded ? '/splash' : '/onboarding'} />;
}
