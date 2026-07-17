// Feature flags — v1 ship decisions with a clean seam for iteration 2.

export const FLAGS = {
  // Apple/Google sign-in. The flows are not wired to real providers yet
  // (they faked success); Apple rejects non-working sign-in, and shipping
  // Google without Sign in with Apple triggers guideline 4.8.
  oauth: false,

  // "Forgot password?" — fully wired end to end: resetPasswordForEmail sends a
  // link to RESET_REDIRECT (ealch://reset), and app/reset.tsx exchanges the
  // recovery tokens for a session and sets the new password.
  // Requires `ealch://reset` in Supabase → Auth → URL Configuration → Redirect URLs.
  forgotPassword: true,

  // Speech recognition runs on-device (expo-speech-recognition), not in the
  // cloud; the `edge` Whisper path is only a backstop.
  //
  // A RECORD, NOT A SWITCH: flipping this changes nothing. The operational
  // control is `sttProvider` in src/services/config.ts, which remote config can
  // flip without a client ship. This states the v1 decision where the decision
  // is looked for.
  sttOnDevice: true,
};
