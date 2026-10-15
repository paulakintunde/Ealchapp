import { Redirect } from 'expo-router';

// D-30: /feedback became /report. Kept for stale deep links.
export default function FeedbackRedirect() {
  return <Redirect href="/report" />;
}
