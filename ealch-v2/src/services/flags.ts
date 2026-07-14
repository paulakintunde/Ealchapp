// Feature flags — v1 ship decisions with a clean seam for iteration 2.

export const FLAGS = {
  // Apple/Google sign-in. The flows are not wired to real providers yet
  // (they faked success); Apple rejects non-working sign-in, and shipping
  // Google without Sign in with Apple triggers guideline 4.8.
  oauth: false,

  // "Forgot password?" — the send-reset-email flow is wired; the link is only
  // rendered when Supabase is configured (there is nothing to send offline).
  // Completing the reset (the emailed link → set-new-password) still needs the
  // Supabase project's redirect URL / email template configured (Gate 5).
  forgotPassword: true,
};
